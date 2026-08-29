import { executePinsList, PinsSettings } from '@digipair/engine';
import { spawn } from 'child_process';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

class OpencodeService {
  /**
   * Runs the local opencode CLI with the provided prompt and returns the assistant response.
   * The opencode binary is a native executable shipped by the `opencode-ai` package
   * (bin/opencode.exe) and is invoked directly: `opencode run --format json "<prompt>"`.
   *
   * With `format: 'json'` opencode streams newline-delimited JSON events (JSONL). Each event is
   * parsed and forwarded to `onAction`, the `text` parts are accumulated and returned as the result.
   * With `format: 'default'` the raw trimmed stdout is returned instead.
   */
  async runPrompt(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<string> {
    const {
      prompt,
      agent,
      model = context.privates?.OPENCODE_MODEL,
      format = 'json',
      cwd = process.cwd() + '/factory/digipairs',
      timeoutMs,
      onStdout = [],
      onAction = [],
      debug = false,
    } = params;

    if (!prompt || !prompt.trim()) {
      throw new Error('Prompt must be a non-empty string');
    }

    // The opencode-ai package ships a native binary in bin/opencode.exe.
    const opencodeBin = join(
      dirname(require.resolve('opencode-ai/package.json')),
      'bin',
      'opencode.exe',
    );
    if (!existsSync(opencodeBin)) {
      throw new Error(
        `opencode CLI not found. Ensure opencode-ai is installed. Looked for: ${opencodeBin}`,
      );
    }

    // Non-interactive automation mode: `opencode run "<prompt>"`.
    const args: string[] = ['run'];
    if (model) args.push('--model', model);
    if (agent) args.push('--agent', agent);
    args.push('--format', format);
    args.push('--dir', cwd);
    args.push(prompt);

    const child = spawn(opencodeBin, args, {
      cwd,
      env: { ...process.env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';
    let buffer = '';
    // Keyed by part id so streamed updates of the same text part overwrite each other.
    const texts = new Map<string, string>();

    const handleEvent = (event: any) => {
      if (onAction) {
        executePinsList(onAction, { action: event, ...context }, `${context.__PATH__}.onAction`);
      }
      if (event?.type === 'text' && event.part?.id) {
        texts.set(event.part.id, event.part.text ?? '');
      }
    };

    const flushLines = () => {
      let index = buffer.indexOf('\n');
      while (index !== -1) {
        const line = buffer.slice(0, index).trim();
        buffer = buffer.slice(index + 1);
        if (line) {
          try {
            handleEvent(JSON.parse(line));
          } catch {
            // Ignore non-JSON lines (e.g. warnings printed to stdout).
          }
        }
        index = buffer.indexOf('\n');
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

      if (format === 'json') {
        buffer += s;
        flushLines();
      }
    };
    const onErr = (chunk: Buffer) => {
      const s = chunk.toString();
      stderr += s;
    };

    child.stdout?.on('data', onData);
    child.stderr?.on('data', onErr);

    const result: string = await new Promise((resolve, reject) => {
      const onExit = (code: number | null, signal: NodeJS.Signals | null) => {
        if (code === 0) {
          if (format === 'json') {
            // Flush any trailing event without a newline, then join the text parts.
            if (buffer.trim()) {
              try {
                handleEvent(JSON.parse(buffer.trim()));
              } catch {
                // Ignore trailing non-JSON output.
              }
              buffer = '';
            }
            resolve(Array.from(texts.values()).join('').trim());
          } else {
            resolve(stdout.trim());
          }
        } else {
          const reason = signal ? `signal ${signal}` : `exit code ${code}`;
          reject(new Error(`opencode failed with ${reason}.\n${stderr || stdout}`));
        }
      };

      let timeout: NodeJS.Timeout | undefined;
      if (timeoutMs && timeoutMs > 0) {
        timeout = setTimeout(() => {
          child.kill('SIGTERM');
          reject(new Error(`opencode timed out after ${timeoutMs} ms`));
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

    return result;
  }
}

export const runPrompt = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpencodeService().runPrompt(params, pinsSettingsList, context);
