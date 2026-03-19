import { executePinsList as executePinsListEngine, PinsSettings } from '@digipair/engine';
// import { ApplicationFailure } from '@temporalio/common';
import { heartbeat, cancellationSignal, activityInfo } from '@temporalio/activity';
import { getSharedClient } from './shared.js';
import { activityCancelledSignal } from './workflows.js';

export async function executePinsList({
  pinsSettingsList,
  context,
}: {
  pinsSettingsList: PinsSettings[];
  context: any;
}): Promise<string> {
  console.log('[ACTIVITY] context.protected :', context.protected)

  const abortSignal = cancellationSignal();
  const abortController = new AbortController();
  // const newContext = {...context, protected : {...context.protected, signal: abortSignal }}
  const newContext = {...context, protected : {...context.protected, signal: abortController.signal }}

  let cancelSignalPromise: Promise<void> | null = null;

  abortSignal.addEventListener('abort', () => {
    console.log(`[ACTIVITY][${new Date().toISOString()}] cancellationSignal received`);
    abortController.abort();
    // Envoyer le signal au workflow parent
    cancelSignalPromise = (async () => {
      try {
        const info = activityInfo();
        console.log('activityInfo : ', info);
        const client = getSharedClient();
        if (!client) {
          console.error('[ACTIVITY] sharedClient non disponible');
          return;
        }
        await client
          .getHandle(info.workflowExecution.workflowId)
          .signal(activityCancelledSignal, {
            activityType: info.activityType,
            timestamp: new Date().toISOString(),
          });
        console.log(`[ACTIVITY] Signal envoyé au workflow ${info.workflowExecution.workflowId}`);
      } catch (err) {
        console.error('[ACTIVITY] Erreur envoi signal:', err);
      }
    })();
  });

  // cancelled().catch(() => {
  //   console.log('[ACTIVITY] cancelled promise triggered');
  // });

  const interval = setInterval(() => {
    console.log(`[ACTIVITY][${new Date().toISOString()}] hearbeat send`);
    heartbeat();
  }, 1000);

  try {
    return await executePinsListEngine(pinsSettingsList, newContext);
  } catch (error) {
    console.log('[ACTIVITY] error:', error);
    throw error;
  } finally {
    clearInterval(interval);
    abortController.abort();
    // Attendre que le signal soit bien parti avant que l'activité se termine
    if (cancelSignalPromise) await cancelSignalPromise;
  }
}
