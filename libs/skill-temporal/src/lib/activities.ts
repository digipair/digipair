import { executePinsList as executePinsListEngine, PinsSettings } from '@digipair/engine';

// import { update as updateProcess, list as listProcess } from '@digipair/skill-process'
// import {  list as listProcess } from '@digipair/skill-process'

import { heartbeat, cancellationSignal } from '@temporalio/activity';

export async function executePinsList({
  pinsSettingsList,
  context,
}: {
  pinsSettingsList: PinsSettings[];
  context: any;
}): Promise<string> {
  const abortController = new AbortController();
  const newContext = {...context, protected : {...context.protected, signal: abortController.signal }}

  const abortSignal = cancellationSignal();

  if (abortSignal.aborted) {
    console.log('[ACTIVITY] cancel before start executePinsListEngine');
    abortController.abort();
    throw new Error('DIGIPAIR_ACTIVITY_CANCELLED');
  }

  const interval = setInterval(() => {
    console.log('hearbeat send')
    heartbeat();
  }, 1000);

  abortSignal.addEventListener('abort', () => {
    console.log('[ACTIVITY] cancel reçu via cancellationSignal');
    abortController.abort();
  });

  try {
    const result = await executePinsListEngine(pinsSettingsList, newContext);
    // for (let i = 0; i < 30; i++) {
    //   if (abortSignal.aborted) {
    //     console.log('[ACTIVITY] cancel détecté dans boucle TEST');
    //     throw new Error('DIGIPAIR_ACTIVITY_CANCELLED');
    //   }
    //
    //   console.log(`[ACTIVITY] .TEST step ${i}`);
    //
    //   // simulation async
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //
    //   // heartbeat();
    // }
    // const result =  'TEST_DONE';
    // check cancel après engine
    if (abortSignal.aborted) {
      console.log('[ACTIVITY] cancel après engine');
      throw new Error('DIGIPAIR_ACTIVITY_CANCELLED');
    }

    return result;
  } catch (error) {
    console.log('[ACTIVITY] error:', error);
    throw error;
  } finally {
    clearInterval(interval);
    abortController.abort();
  }



  // cancellationSignal.addEventListener('abort', () => {
  //   console.log('[ACTIVITY] cancel reçu, abort signal');
  //   abortController.abort();
  // });




  // console.log('activities, executePinsList , listProcess(); :', await listProcess( undefined as any,[], undefined as any))

  // if(context.protected.processId) {
  //   console.log('executePinsList , listProcess(); :', listProcess( undefined as any,[], undefined as any))
  //   console.log('executePinsList , context.protected.processId :', context.protected.processId)
  //   const {signal} = updateProcess(context.protected.processId, context.request.digipair, context.request.reasoning, undefined as any);
  //   newContext = {...context, protected : {...context.protected, signal }}
  // }

  // return await executePinsListEngine(pinsSettingsList, newContext);
}
