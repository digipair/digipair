import { executePinsList, PinsSettings } from '@digipair/engine';
import { spawn } from 'child_process';
import { existsSync, writeFileSync, mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import * as path from 'path';

/**
 * Runs the local OpenCode CLI (anomalyco/opencode, MIT) in one-shot mode,
 * the equivalent of `codex exec`: no server to supervise, no shared state.
 *
 * NOTE — no `instructions` preloading. Convention files are read by the model
 * itself, as instructed by AGENTS.md. Measured: OpenAI models read all 5/5 and
 * resolve paths correctly; Scaleway models read 2-4/5 and resolve against the
 * git root instead of the working directory roughly half the time. Switching
 * provider means re-adding `config.instructions` with ABSOLUTE paths (relative
 * ones resolve against the process CWD, not --dir, and fail silently).
 *
 * SECURITY: OpenCode does NOT sandbox. Its permission system is a UX feature,
 * not a security boundary — run this in a container for real isolation. The
 * default profile below is read-only, which narrows the surface but is not a
 * substitute for a sandbox.
 *
 * The ESM bundle is published for packaging symmetry only: this skill spawns a
 * local binary and writes to /tmp, so it never runs in a browser. `require`
 * and `__dirname` below are exercised through the CJS bundle.
 */
class OpencodeService {
  /** Spawns the OpenCode CLI and returns the agent's final text. */
  async runPrompt(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<string> {
    const {
      prompt,
      // Kept for contract compatibility with skill-codex. Maps to a permission
      // profile — NOT a sandbox, see the security note above.
      sandbox = 'read-only',
      cwd = process.cwd() + '/factory/digipairs',
      timeoutMs,
      onStdout = [],
      onAction = [],
      debug = false,
    } = params;

    const providerId = context.privates?.OPENCODE_PROVIDER_ID ?? 'openai';
    // Default derived from the provider id, overridable via OPENCODE_PROVIDER_NPM.
    // "openai" needs the native package: it speaks the Responses API, which recent
    // OpenAI models require — the generic one (Chat Completions) is refused by them.
    // Any other provider uses the generic OpenAI-compatible adapter.
    const providerNpm =
      context.privates?.OPENCODE_PROVIDER_NPM ??
      (providerId === 'openai' ? '@ai-sdk/openai' : '@ai-sdk/openai-compatible');
    const model = context.privates?.OPENCODE_MODEL ?? 'gpt-5';
    const apiURL = context.privates?.OPENCODE_API_URL;
    const apiKey = context.privates?.OPENCODE_API_KEY;

    if (!prompt || !prompt.trim()) {
      throw new Error('Prompt must be a non-empty string');
    }
    if (!apiKey) throw new Error('Missing context.privates.OPENCODE_API_KEY');

    const opencodeBin = resolveOpencodeBin();

    // The CLI takes no inline config. A temp file keeps the user's working
    // directory clean and is removed in the finally block, so the API key
    // never lingers on disk.
    const tmpDir = mkdtempSync(path.join(tmpdir(), 'opencode-skill-'));
    const configPath = path.join(tmpDir, 'opencode.json');

    const options: any = { apiKey };
    if (apiURL) options.baseURL = apiURL;

    writeFileSync(
      configPath,
      JSON.stringify({
        $schema: 'https://opencode.ai/config.json',
        model: `${providerId}/${model}`,
        provider: {
          [providerId]: {
            npm: providerNpm,
            name: providerId,
            options,
            models: { [model]: {} },
          },
        },
        // No rule may be "ask": headless, that suspends the agent loop waiting
        // on a human who will never answer, until timeoutMs fires.
        permission:
          sandbox === 'read-only'
            ? {
              '*': 'deny',
              read: 'allow',
              glob: 'allow',
              grep: 'allow',
              list: 'allow',
              edit: 'deny',
              bash: 'deny',
              webfetch: 'deny',
            }
            : { '*': 'allow' },
      }),
    );

    const args = [
      'run',
      '--format',
      'json',
      '--model',
      `${providerId}/${model}`,
      '--dir',
      cwd,
      prompt,
    ];

    const child = spawn(opencodeBin, args, {
      cwd,
      env: { ...process.env, OPENCODE_CONFIG: configPath },
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';
    let pending = '';
    const texts: string[] = [];

    // Typed JSONL events, a contract documented by `--format json` — replaces
    // the regex parsing of an unspecified text format, which is what broke on
    // the Codex side after an upstream change.
    const handleEvent = (evt: any) => {
      const part = evt?.part ?? evt?.properties?.part;

      if (part?.type === 'text' && typeof part.text === 'string') {
        texts.push(part.text);
      }

      const action =
        evt?.type === 'tool_use' && part?.tool
          ? `${part.tool} ${part.state?.status ?? 'called'}`
          : part?.type === 'text' && part.text
            ? part.text
            : null;

      if (action && onAction?.length) {
        executePinsList(
          onAction,
          { action, item: part ?? evt, ...context },
          `${context.__PATH__}.onAction`,
        );
      }
    };

    const onData = (chunk: Buffer) => {
      const s = chunk.toString();
      stdout += s;

      if (debug) process.stdout.write(s);

      if (onStdout?.length) {
        executePinsList(onStdout, { chunk: s, ...context }, `${context.__PATH__}.onStdout`);
      }

      pending += s;
      const lines = pending.split('\n');
      pending = lines.pop() ?? '';
      for (const l of lines) {
        const t = l.trim();
        if (!t) continue;
        try {
          handleEvent(JSON.parse(t));
        } catch {
          /* not a JSON line */
        }
      }
    };
    const onErr = (chunk: Buffer) => {
      stderr += chunk.toString();
    };

    child.stdout?.on('data', onData);
    child.stderr?.on('data', onErr);

    try {
      await new Promise<void>((resolve, reject) => {
        let timeout: NodeJS.Timeout | undefined;
        if (timeoutMs && timeoutMs > 0) {
          timeout = setTimeout(() => {
            child.kill('SIGTERM');
            reject(new Error(`Opencode timed out after ${timeoutMs} ms`));
          }, timeoutMs);
        }

        child.on('error', err => {
          if (timeout) clearTimeout(timeout);
          reject(err);
        });
        child.on('close', (code, signal) => {
          if (timeout) clearTimeout(timeout);
          if (pending.trim()) {
            try {
              handleEvent(JSON.parse(pending.trim()));
            } catch {
              /* partial line */
            }
          }
          if (code === 0) resolve();
          else {
            const reason = signal ? `signal ${signal}` : `exit code ${code}`;
            reject(new Error(`Opencode failed with ${reason}.\n${stderr || stdout}`));
          }
        });
      });
      // keep only final response
      return (texts.length ? texts[texts.length - 1].trim() : '') || stdout.trim();
    } finally {
      try {
        rmSync(tmpDir, { recursive: true, force: true });
      } catch {
        /* already gone */
      }
    }
  }
}

/**
 * Resolves the CLI through package.json#bin. The file name is not stable —
 * on Linux the package ships `bin/opencode.exe`, an ELF binary despite the
 * extension — and `require.resolve('opencode-ai/bin/...')` fails because the
 * package restricts subpath access via "exports". package.json stays
 * resolvable, and its `bin` entry points at the launcher that picks the right
 * platform build (opencode-linux-x64, -baseline, darwin-arm64...).
 */
function resolveOpencodeBin(): string {
  const pkgPath = require.resolve('opencode-ai/package.json');
  const bin = require(pkgPath).bin?.opencode;
  if (!bin) throw new Error('opencode-ai installed but declares no "bin.opencode" entry');

  const binPath = path.join(path.dirname(pkgPath), bin);
  if (!existsSync(binPath)) {
    throw new Error(`OpenCode CLI not found. Looked for: ${binPath}`);
  }
  return binPath;
}

export const runPrompt = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpencodeService().runPrompt(params, pinsSettingsList, context);
