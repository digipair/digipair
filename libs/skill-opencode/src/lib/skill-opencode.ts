import { executePinsList, PinsSettings } from '@digipair/engine';
import { dirname, join } from 'path';

class OpencodeService {
  /**
   * Runs a prompt through OpenCode using the official `@opencode-ai/sdk` npm library.
   *
   * The SDK boots a local OpenCode server (spawning the `opencode` CLI shipped by the
   * `opencode-ai` package), creates a session and streams the assistant answer back.
   * Requires the relevant provider credentials in the environment (e.g. `OPENAI_API_KEY`,
   * `ANTHROPIC_API_KEY`, or a prior `opencode auth login`).
   */
  async runPrompt(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<string> {
    const {
      prompt,
      cwd = process.cwd() + '/factory/digipairs',
      agent,
      timeoutMs,
      onStdout = [],
      onAction = [],
      debug = false,
    } = params;

    // Model is provided as "providerID/modelID" (e.g. "anthropic/claude-sonnet-4-5", "openai/gpt-5").
    const modelString: string | undefined = context.privates?.OPENCODE_MODEL;

    if (!prompt || !prompt.trim()) {
      throw new Error('Prompt must be a non-empty string');
    }

    const model = modelString
      ? {
          providerID: modelString.split('/')[0],
          modelID: modelString.split('/').slice(1).join('/'),
        }
      : undefined;

    // The SDK launches the `opencode` CLI by name, so make sure the binary shipped by the
    // `opencode-ai` package is resolvable through PATH.
    this.ensureOpencodeOnPath();

    // `@opencode-ai/sdk` is ESM only: use a dynamic import so it also works from the CJS build.
    const { createOpencodeServer, createOpencodeClient } = await import('@opencode-ai/sdk');

    const server = await createOpencodeServer({ hostname: '127.0.0.1', port: 0 });
    const client = createOpencodeClient({ baseUrl: server.url });

    const controller = new AbortController();
    let timedOut = false;
    let timeout: NodeJS.Timeout | undefined;

    try {
      // Stream server events to the provided callbacks.
      if (onStdout.length > 0 || onAction.length > 0) {
        this.streamEvents(client, controller.signal, context, onStdout, onAction, debug).catch(
          () => {
            /* stream is aborted once the prompt resolves */
          },
        );
      }

      if (timeoutMs && timeoutMs > 0) {
        timeout = setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, timeoutMs);
      }

      const session = await client.session.create({
        query: { directory: cwd },
        body: {},
        signal: controller.signal,
      });
      const sessionId = (session as any).data?.id;
      if (!sessionId) {
        throw new Error(`OpenCode failed to create a session: ${JSON.stringify(session)}`);
      }

      const response = await client.session.prompt({
        path: { id: sessionId },
        query: { directory: cwd },
        body: {
          ...(model ? { model } : {}),
          ...(agent ? { agent } : {}),
          parts: [{ type: 'text', text: prompt }],
        },
        signal: controller.signal,
      });

      if ((response as any).error) {
        throw new Error(`OpenCode failed: ${JSON.stringify((response as any).error)}`);
      }

      const parts = (response as any).data?.parts ?? [];
      const result = parts
        .filter((part: any) => part.type === 'text')
        .map((part: any) => part.text)
        .join('')
        .trim();

      return result;
    } catch (err) {
      if (timedOut) {
        throw new Error(`OpenCode timed out after ${timeoutMs} ms`);
      }
      throw err;
    } finally {
      if (timeout) clearTimeout(timeout);
      controller.abort();
      server.close();
    }
  }

  /**
   * Subscribes to the OpenCode event stream and forwards it to the `onStdout` / `onAction` pins.
   */
  private async streamEvents(
    client: any,
    signal: AbortSignal,
    context: any,
    onStdout: PinsSettings[],
    onAction: PinsSettings[],
    debug: boolean,
  ): Promise<void> {
    const events = await client.event({ signal });

    for await (const event of events.stream) {
      if (debug) {
        process.stdout.write(JSON.stringify(event) + '\n');
      }

      if (onStdout.length > 0) {
        executePinsList(onStdout, { chunk: event, ...context }, `${context.__PATH__}.onStdout`);
      }

      if (onAction.length > 0 && event?.type === 'message.part.updated') {
        const part = event.properties?.part;
        const action =
          part?.type === 'text' ? part.text : part?.type === 'tool' ? part.tool : undefined;
        if (action) {
          executePinsList(onAction, { action, ...context }, `${context.__PATH__}.onAction`);
        }
      }
    }
  }

  /**
   * Prepends the `opencode-ai` package `.bin` directory to PATH so the SDK can spawn the CLI.
   */
  private ensureOpencodeOnPath(): void {
    try {
      const packageJsonPath = require.resolve('opencode-ai/package.json');
      const binDir = join(dirname(dirname(packageJsonPath)), '.bin');
      const separator = process.platform === 'win32' ? ';' : ':';
      const currentPath = process.env.PATH ?? '';
      if (!currentPath.split(separator).includes(binDir)) {
        process.env.PATH = `${binDir}${separator}${currentPath}`;
      }
    } catch {
      // If resolution fails we rely on `opencode` already being available on PATH.
    }
  }
}

export const runPrompt = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpencodeService().runPrompt(params, pinsSettingsList, context);
