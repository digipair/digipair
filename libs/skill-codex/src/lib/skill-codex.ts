import { PinsSettings } from '@digipair/engine';
import { spawn } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';

export type RunCodexOptions = {
  /** Sandbox mode: 'read-only' | 'workspace-write' | 'danger-full-access'. Defaults to 'read-only'. */
  sandbox?: 'read-only' | 'workspace-write' | 'danger-full-access';
  /** Working directory. Defaults to process.cwd(). */
  cwd?: string;
  /** Timeout in milliseconds. */
  timeoutMs?: number;
  /** Callback for real-time stdout chunks. */
  onStdout?: (chunk: string) => void;
  /** Callback for real-time stderr chunks. */
  onStderr?: (chunk: string) => void;
  /** Callback for real-time action chunks. */
  onAction?: (action: string) => void;
};

class CodexService {
  /**
   * Find the local Codex CLI entrypoint installed in this repo.
   * Searches upwards from the current working directory for
   * `node_modules/@openai/codex/bin/codex.js`.
   */
  private findCodexBin(startDir: string): string {
    let dir = startDir;
    for (let i = 0; i < 6; i++) {
      const candidate = join(dir, 'node_modules', '@openai', 'codex', 'bin', 'codex.js');
      if (existsSync(candidate)) return candidate;
      const parent = dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
    // Fallback to a reasonable default relative to repo root
    return join(process.cwd(), '..', '..', 'node_modules', '@openai', 'codex', 'bin', 'codex.js');
  }

  /**
   * Runs the local Codex CLI with the provided prompt and returns its stdout as a string.
   * Requires either ChatGPT sign-in (codex login) or OPENAI_API_KEY in the environment.
   */
  async runPrompt(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<string> {
    const { prompt, options = {} } = params;

    if (!prompt || !prompt.trim()) {
      throw new Error('Prompt must be a non-empty string');
    }

    const opts: RunCodexOptions = {
      cwd: process.cwd(),
      execMode: true,
      sandbox: 'read-only',
      askForApproval: 'never',
      ...options,
    };

    const cwd = opts.cwd ?? process.cwd();
    const codexJs = this.findCodexBin(cwd);
    if (!existsSync(codexJs)) {
      throw new Error(
        `Codex CLI not found. Ensure @openai/codex is installed. Looked for: ${codexJs}`,
      );
    }

    // We invoke via `node codex.js` to avoid platform-specific shims.
    const args: string[] = [codexJs];

    // Use non-interactive automation mode.
    args.push('exec');
    // codex exec expects: codex exec --sandbox <mode> [PROMPT]
    const sandbox = opts.sandbox ?? 'read-only';
    args.push('--sandbox', sandbox);
    args.push(prompt);

    const child = spawn(process.execPath, args, {
      cwd,
      env: { ...process.env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';
    let line = '';
    let listening = false;

    const regexNewLine = /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\] /;
    const regexCodex = /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\] codex\n\n/;

    const onData = (chunk: Buffer) => {
      const s = chunk.toString();
      stdout += s;
      if (opts.onStdout) opts.onStdout(s);

      if (regexNewLine.test(s)) {
        if (opts.onAction && listening && !line.startsWith('{')) opts.onAction(line.trim());
        listening = false;
      }

      if (regexCodex.test(s)) {
        listening = true;
        line = s.replace(regexCodex, '');
      } else if (listening) line += s;
    };
    const onErr = (chunk: Buffer) => {
      const s = chunk.toString();
      stderr += s;
      if (opts.onStderr) opts.onStderr(s);
    };

    child.stdout?.on('data', onData);
    child.stderr?.on('data', onErr);

    const result: string = await new Promise((resolve, reject) => {
      const onExit = (code: number | null, signal: NodeJS.Signals | null) => {
        if (code === 0) {
          resolve(line.trim());
        } else {
          const reason = signal ? `signal ${signal}` : `exit code ${code}`;
          reject(new Error(`Codex failed with ${reason}.\n${stderr || stdout}`));
        }
      };

      let timeout: NodeJS.Timeout | undefined;
      if (opts.timeoutMs && opts.timeoutMs > 0) {
        timeout = setTimeout(() => {
          child.kill('SIGTERM');
          reject(new Error(`Codex timed out after ${opts.timeoutMs} ms`));
        }, opts.timeoutMs);
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

    return result;
  }
}

export const runPrompt = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CodexService().runPrompt(params, pinsSettingsList, context);
