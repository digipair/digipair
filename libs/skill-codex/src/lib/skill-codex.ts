import { executePinsList, PinsSettings } from '@digipair/engine';
import { spawn } from 'child_process';
import { existsSync, mkdtempSync, readFileSync, unlinkSync } from 'fs';
import * as os from 'os';
import * as path from 'path';
import { randomUUID } from 'crypto';

class CodexService {
  /**
   * Runs the local Codex CLI with the provided prompt and returns its final message as a string.
   * Requires either ChatGPT sign-in (codex login), OPENAI_API_KEY in the environment,
   * or a custom OpenAI-compatible `provider`.
   *
   * Uses --json + --output-last-message instead of parsing raw stdout: recent Codex CLI
   * versions moved most progress output to stderr, breaking the old timestamped-log format.
   * See https://github.com/openai/codex/pull/4644
   */
  async runPrompt(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<string> {
    const {
      prompt,
      sandbox = 'read-only',
      cwd = process.cwd() + '/factory/digipairs',
      timeoutMs,
      onStdout = [],
      onAction = [],
      debug = false,
      provider, // optional custom OpenAI-compatible provider: { id, apiURL, apiKey, wireApi? }
    } = params;

    const model = params.model ?? context.privates?.CODEX_MODEL ?? 'gpt-5';

    if (!prompt || !prompt.trim()) {
      throw new Error('Prompt must be a non-empty string');
    }

    const codexJs = require.resolve('@openai/codex/bin/codex.js');
    if (!existsSync(codexJs)) {
      throw new Error(
        `Codex CLI not found. Ensure @openai/codex is installed. Looked for: ${codexJs}`,
      );
    }

    // Dedicated file for the final message: more reliable than picking the
    // "last agent_message" out of the JSONL stream (some intermediate
    // messages can look like a final one).
    const tmpDir = mkdtempSync(path.join(os.tmpdir(), 'codex-service-'));
    const outputLastMessagePath = path.join(tmpDir, `${randomUUID()}.txt`);

    // We invoke via `node codex.js` to avoid platform-specific shims.
    const args: string[] = [codexJs];

    // Use non-interactive automation mode.
    args.push('exec');
    // codex exec expects: codex exec --sandbox <mode> [PROMPT]
    args.push('--sandbox', sandbox);
    // structured JSONL event stream on stdout, instead of the old free-text log format
    args.push('--json');
    // deterministic final-message file, read after the process exits
    args.push('--output-last-message', outputLastMessagePath);

    const env = { ...process.env };

    // Custom OpenAI-compatible provider (Scaleway, OVHcloud, ...)
    if (provider?.apiURL) {
      const providerId = provider.id ?? 'custom';
      const envKeyName = `CODEX_PROVIDER_API_KEY_${providerId.toUpperCase()}`;
      const wireApi = provider.wireApi ?? 'responses'; // wire_api="chat" is no longer supported by Codex CLI

      args.push('-c', `model_provider="${providerId}"`);
      args.push('-c', `model_providers.${providerId}.name="${providerId}"`);
      args.push('-c', `model_providers.${providerId}.base_url="${provider.apiURL}"`);
      args.push('-c', `model_providers.${providerId}.env_key="${envKeyName}"`);
      args.push('-c', `model_providers.${providerId}.wire_api="${wireApi}"`);
      args.push('-c', `model_providers.${providerId}.requires_openai_auth=false`);
      // some providers reject parallel_tool_calls=false (e.g. OVHcloud on gpt-oss-120b)
      args.push('-c', 'parallel_tool_calls=true');

      env[envKeyName] = provider.apiKey ?? context.privates?.[`${providerId.toUpperCase()}_API_KEY`];

      if (!env[envKeyName]) {
        throw new Error(
          `Missing API key for provider "${providerId}". Provide params.provider.apiKey or context.privates.${providerId.toUpperCase()}_API_KEY.`,
        );
      }
    }

    // add arg model, default gpt-5
    args.push('--model', model);
    // skip git repo check
    args.push('--skip-git-repo-check');
    args.push(prompt);

    const child = spawn(process.execPath, args, {
      cwd,
      env,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';
    let pendingLine = ''; // buffer for lines split across chunks
    const events: any[] = []; // parsed JSONL events, used for onAction + result fallback

    // "Actions" = any completed item other than the agent's own message
    // (command_execution, mcp_tool_call, web_search, todo_list, ...)
    const handleJsonLine = (rawLine: string) => {
      const trimmed = rawLine.trim();
      if (!trimmed) return;

      let evt: any;
      try {
        evt = JSON.parse(trimmed);
      } catch (err) {
        return; // not a JSON line, ignore
      }

      events.push(evt);

      if (evt.type === 'item.completed' && evt.item && evt.item.type !== 'agent_message') {
        executePinsList(
          onAction,
          { action: summarizeItem(evt.item), item: evt.item, ...context },
          `${context.__PATH__}.onAction`,
        );
      }
    };

    const onData = (chunk: Buffer) => {
      const s = chunk.toString();
      stdout += s;

      if (debug) {
        process.stdout.write(s);
      }

      if (onStdout) {
        executePinsList(onStdout, { chunk: s, ...context }, `${context.__PATH__}.onStdout`);
      }

      // recompose lines: a chunk can hold 0..n lines, and a line can be
      // split across two chunks
      pendingLine += s;
      const lines = pendingLine.split('\n');
      pendingLine = lines.pop() as string;
      for (const l of lines) handleJsonLine(l);
    };
    const onErr = (chunk: Buffer) => {
      const s = chunk.toString();
      stderr += s;
    };

    child.stdout?.on('data', onData);
    child.stderr?.on('data', onErr);

    await new Promise<void>((resolve, reject) => {
      const onExit = (code: number | null, signal: NodeJS.Signals | null) => {
        if (pendingLine.trim()) handleJsonLine(pendingLine); // flush trailing partial line

        if (code === 0) {
          resolve();
        } else {
          const reason = signal ? `signal ${signal}` : `exit code ${code}`;
          reject(new Error(`Codex failed with ${reason}.\n${stderr || stdout}`));
        }
      };

      let timeout: NodeJS.Timeout | undefined;
      if (timeoutMs && timeoutMs > 0) {
        timeout = setTimeout(() => {
          child.kill('SIGTERM');
          reject(new Error(`Codex timed out after ${timeoutMs} ms`));
        }, timeoutMs);
      }

      child.on('error', err => {
        if (timeout) clearTimeout(timeout);
        reject(err);
      });
      child.on('close', (code, signal) => {
        if (timeout) clearTimeout(timeout);
        onExit(code, signal);
      });
    });

    // Primary source of truth for the final message; fall back to the last
    // agent_message seen in the JSONL stream if the file is unavailable.
    let result = '';
    try {
      result = readFileSync(outputLastMessagePath, 'utf8').trim();
    } catch (err) {
      const lastAgentMessage = [...events]
        .reverse()
        .find(e => e.type === 'item.completed' && e.item?.type === 'agent_message');
      result = lastAgentMessage?.item?.text?.trim() ?? '';
    } finally {
      try {
        unlinkSync(outputLastMessagePath);
      } catch (_) {
        /* already gone, nothing to do */
      }
    }

    return result;
  }
}

function summarizeItem(item: any): string {
  switch (item.type) {
    case 'command_execution':
      return `command_execution: ${item.command ?? '(unknown command)'}`;
    case 'mcp_tool_call':
      return `mcp_tool_call: ${item.server ?? '?'}.${item.tool ?? '?'}`;
    case 'web_search':
      return `web_search: ${item.query ?? '(unknown query)'}`;
    case 'todo_list':
      return 'todo_list updated';
    case 'patch_apply':
      return 'patch applied';
    default:
      return `${item.type ?? 'item'} completed`;
  }
}

export const runPrompt = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CodexService().runPrompt(params, pinsSettingsList, context);
