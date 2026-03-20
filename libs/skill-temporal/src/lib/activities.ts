import { executePinsList as executePinsListEngine, PinsSettings } from '@digipair/engine';
import { heartbeat, cancellationSignal, activityInfo } from '@temporalio/activity';

export async function executePinsList({
  pinsSettingsList,
  context,
}: {
  pinsSettingsList: PinsSettings[];
  context: any;
}): Promise<string> {
  const info = activityInfo();
  const abortSignal = cancellationSignal();
  const abortController = new AbortController();
  const newContext = {...context, protected : {...context.protected, signal: abortController.signal }}

  abortSignal.addEventListener('abort', () => {
    console.log(`[ACTIVITY][${new Date().toISOString()}] cancellationSignal received`);
    abortController.abort();
  });

  const intervalMs = info.heartbeatTimeoutMs
    ? Math.floor(info.heartbeatTimeoutMs / 3 / 1000) * 1000
    : 3000;
  const interval = setInterval(() => {
    console.log(`[ACTIVITY][${new Date().toISOString()}] hearbeat send`);
    heartbeat();
  }, intervalMs);

  try {
    return await executePinsListEngine(pinsSettingsList, newContext);
  } finally {
    console.log('[ACTIVITY] finally clean');
    clearInterval(interval);
    abortController.abort();
  }
}
