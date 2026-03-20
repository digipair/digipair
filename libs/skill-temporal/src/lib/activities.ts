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
  console.log(`[ACTIVITY] info workflowId ${info.workflowExecution.workflowId}`)
  console.log('[ACTIVITY] context.protected :', context.protected)
  const abortSignal = cancellationSignal();
  const abortController = new AbortController();
  const newContext = {...context, protected : {...context.protected, signal: abortController.signal }}


  if (!context.protected?.isCleanup) {
    abortSignal.addEventListener('abort', () => {
      console.log(`[ACTIVITY][${new Date().toISOString()}] cancellationSignal received — isCleanup: ${context.protected?.isCleanup}`);
      abortController.abort();
    });
  } else {
    console.log(`[ACTIVITY] cleanup — cancellationSignal ignoré`);
  }

  const interval = setInterval(() => {
    console.log(`[ACTIVITY][${new Date().toISOString()}] hearbeat send`);
    heartbeat();
  }, 3000);

  try {
    return await executePinsListEngine(pinsSettingsList, newContext);
  } catch (error) {
    console.log('[ACTIVITY] error:', error);
    throw error;
  } finally {
    console.log('[ACTIVITY] finally clearInterval and abortController.abort()');
    clearInterval(interval);
    abortController.abort();
  }
}
