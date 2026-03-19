import { sleep, proxyActivities, condition, setHandler, defineSignal, isCancellation, CancellationScope } from '@temporalio/workflow';
import { ApplicationFailure } from '@temporalio/common';
import { PinsSettings, preparePinsSettings } from '@digipair/engine';
// import { list as listProcess } from '@digipair/skill-process';


import * as feelin from 'feelin';

import type * as activities from './activities.js';
import { WorkflowArgs } from './shared.js';

const { evaluate } = feelin as any;
export const dataSignal = defineSignal<[any]>('data');
export const cancelSignal = defineSignal<[{ activityType: string; timestamp: string }]>('activityCancelled');

// export const cancelActivitySignal = defineSignal<[]>('cancelActivity');

async function executePins(
  executePinsList: any,
  steps: PinsSettings[],
  state: { step: number },
  settingsOrigin: PinsSettings,
  context: any,
) {
  const settings = await preparePinsSettings(settingsOrigin, context);
  let result = null;

  if (settings.conditions?.each) {
    const results = [] as any[];

    for (let index = 0; index < settings.conditions.each.length; index++) {
      const item = settings.conditions.each[index];
      const itemSettingsOrigin = {
        ...settingsOrigin,
        conditions: { ...settingsOrigin.conditions, each: undefined },
      };
      const itemContext = {
        ...context,
        item,
        index,
        parent: { item: context.item, index: item.index, parent: context.parent },
      };
      const itemSettings = await preparePinsSettings(itemSettingsOrigin, itemContext);

      if (typeof itemSettings.conditions?.if !== 'undefined' && !itemSettings.conditions.if) {
        continue;
      }

      let itemResult = null;
      try {
        itemResult = await executePins(
          executePinsList,
          steps,
          state,
          itemSettingsOrigin,
          itemContext,
        );
      } catch (error) {
        if (error === 'DIGIPAIR_CONDITIONS_IF_FALSE') {
          continue;
        }

        throw error;
      }

      results.push(itemResult);
    }

    return results;
  }

  if (typeof settings.conditions?.if !== 'undefined' && !settings.conditions.if) {
    throw 'DIGIPAIR_CONDITIONS_IF_FALSE';
  }

  if (settings.element === 'sleep') {
    result = await sleep((settings.properties as any)['duration']);
  } else if (settings.element === 'condition') {
    result = await condition(
      () => evaluate(settings.properties.condition, context),
      settings.properties.timeout,
    );
  } else if (settings.element === 'stop') {
    throw 'DIGIPAIR_WORKFLOW_STOP';
  } else if (settings.element === 'goto') {
    const step = steps
      .filter(current => !!current.properties?.['name'])
      .findIndex(
        current => (current.properties as any)['name'] === (settings.properties as any)['name'],
      );

    if (step <= -1) {
      throw new ApplicationFailure('[SKILL-TEMPORAL] GOTO FAILED - STEP NOT FOUND', null, null, [
        (settings.properties as any)['name'],
      ]);
    }
    result = state.step = step;
  } else if (settings.element === 'activity') {
    try {
      // let newContext = context;
      // if(context.protected.processId) {
      //   console.log('executePinsList , listProcess(); :', await listProcess( undefined as any,[], undefined as any))
      //   console.log('executePinsList , context.protected.processId :', context.protected.processId)
      //   const {signal} = updateProcess(context.protected.processId, context.request.digipair, context.request.reasoning, undefined as any);
      //   newContext = {...context, protected : {...context.protected, signal }}
      // }
      result = await executePinsList({
        pinsSettingsList: (settings.properties as any)['execute'],
        context,
      });
    } catch (error) {
      if (isCancellation(error)) {
        console.log('[WORKFLOW] [EXECUTEPINS] isCancellation error on activity')
        throw error;
      }
      throw new ApplicationFailure('[SKILL-TEMPORAL] EXECUTEPINS FAILED', null, null, [
        error,
        settings,
        context,
      ]);
    }
  }

  return result;
}

export async function workflow({ steps, context, data, options, cancelProcessSteps }: WorkflowArgs): Promise<any> {
  let result: any;
  let cancelRequested = false;

  // console.log('workflow, arg , data', data)
  context.workflow = { steps: {}, data };
  // context.protected = {processId: context.protected.processId};
  console.log('workflow init, context.protected :', context.protected)

  const { executePinsList } = proxyActivities<typeof activities>(options);
  setHandler(dataSignal, (data: any) => {
    context.workflow.data = { ...context.workflow.data, ...data };
  });

  // ✅ Signal métier — même flag que le cancel Temporal
  setHandler(cancelSignal, () => {
    console.log(`[WORKFLOW] cancel signal métier reçu`);
    cancelRequested = true;
    // Annuler le scope principal pour interrompre l'activité en cours
    CancellationScope.current().cancel();
  });

  // vérifie si tous les pinsSettings sont bien de la librairie @digipair/skill-temporal
  const indexSkillNoWorkflow = steps.findIndex(
    pinsSettings => pinsSettings.library !== '@digipair/skill-temporal',
  );
  if (indexSkillNoWorkflow >= 0) {
    throw new ApplicationFailure('[SKILL-TEMPORAL] UNKNOWN STEP', null, null, [
      steps[indexSkillNoWorkflow],
    ]);
  }

  // parcourir tous les pins
  try {
    // ✅ Wrapper dans un scope pour intercepter les deux types de cancel
    await CancellationScope.current().run(async () => {
      for (let state = { step: 0 }; state.step < steps.length; state.step++) {
      const pinsSettings = steps[state.step];

      try {
        result = await executePins(executePinsList, steps, state, pinsSettings, context);
      } catch (error) {
        if (error === 'DIGIPAIR_CONDITIONS_IF_FALSE') {
          continue;
        } else if (error === 'DIGIPAIR_WORKFLOW_STOP') {
          return result;
        }
        throw error;
      }

      if (pinsSettings.properties?.['name']) {
        context.workflow.steps[pinsSettings.properties['name']] = result;
      }
    }
    });
  } catch (error: any) {
    if (isCancellation(error)) {
      console.log(`[WORKFLOW] cancel reçu (UI ou métier)`);
      cancelRequested = true; // ← si cancel Temporal direct (UI), poser le flag ici
    } else {
      throw error;
    }
    // if (isCancellation(error)) {
    //   console.log(`[WORKFLOW][${new Date().toISOString()}]  cancelled global, error : ${error}`);
    //
    //   if (cancelProcessSteps?.length) {
    //     console.log(`[WORKFLOW][${new Date().toISOString()}]  cancelProcessSteps defined`);
    //     await sleep(5000); // heartbeatTimeout: '2s',
    //     context.protected = {};
    //     console.log(`[WORKFLOW][${new Date().toISOString()}]  execute cancelProcessSteps`);
    //     // await executePinsList({ pinsSettingsList: cancelProcessSteps, context });
    //   }
    //   throw error;
    // }
    // throw error;
  }
  // ✅ Cleanup hors de tout scope de cancellation — s'exécute dans les deux cas
  if (cancelRequested && cancelProcessSteps?.length) {
    console.log(`[WORKFLOW] exécution cancelProcessSteps`);

    // Nouveau scope non-cancellable pour le cleanup
    await CancellationScope.nonCancellable(async () => {
      context.protected = {};
      await executePinsList({ pinsSettingsList: cancelProcessSteps, context });
    });
  }

  return result;
}
