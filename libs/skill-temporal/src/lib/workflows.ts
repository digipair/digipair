import { isCancellation, sleep, proxyActivities, condition, setHandler, defineSignal } from '@temporalio/workflow';
import { ApplicationFailure } from '@temporalio/common';
import { PinsSettings, preparePinsSettings } from '@digipair/engine';
import * as feelin from 'feelin';

import type * as activities from './activities.js';
import { WorkflowArgs } from './shared.js';

const { evaluate } = feelin as any;
export const dataSignal = defineSignal<[any]>('data');
export const stopSignal = defineSignal<[]>('stop');


async function executePins(
  executePinsList: any,
  steps: PinsSettings[],
  state: { step: number },
  settingsOrigin: PinsSettings,
  context: any,
  stopEventState: { requested: boolean },
) {
  const settings = await preparePinsSettings(settingsOrigin, context);
  let result = null;

  if (settings.conditions?.each) {
    const results = [] as any[];

    for (let index = 0; index < settings.conditions.each.length; index++) {
      if (stopEventState.requested) {
        throw 'DIGIPAIR_WORKFLOW_STOP_REQUESTED';
      }

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
          stopEventState
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
    if (stopEventState.requested) {
      throw 'DIGIPAIR_WORKFLOW_STOP_REQUESTED';
    }
    const duration = (settings.properties as any)['duration'];
    result = await Promise.race([
      sleep(duration),
      condition(() => stopEventState.requested, duration),
    ]);
    if (stopEventState.requested) {
      throw 'DIGIPAIR_WORKFLOW_STOP_REQUESTED';
    }


  } else if (settings.element === 'condition') {
    result = await condition(
      () => evaluate(settings.properties.condition, context)  || stopEventState.requested,
      settings.properties.timeout,
    );
    if (stopEventState.requested) {
      throw 'DIGIPAIR_WORKFLOW_STOP_REQUESTED';
    }

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
    if (stopEventState.requested) {
      throw 'DIGIPAIR_WORKFLOW_STOP_REQUESTED';
    }
    try {
      result = await executePinsList({
        pinsSettingsList: (settings.properties as any)['execute'],
        context,
      });
    } catch (error) {

      throw new ApplicationFailure('[SKILL-TEMPORAL] EXECUTEPINS FAILED', null, null, [
        error,
        settings,
        context,
      ]);
    }
  }

  return result;
}

export async function workflow({ steps, context, data, options, stopEventSteps = [] }: WorkflowArgs): Promise<any> {
  let result: any;
  const stopEventState = { requested: false };

  context.workflow = { steps: {}, data };
  context.protected = {};

  const { executePinsList } = proxyActivities<typeof activities>(options);
  setHandler(dataSignal, (data: any) => {
    context.workflow.data = { ...context.workflow.data, ...data };
  });

  setHandler(stopSignal, () => {
    stopEventState.requested = true;
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
  try {
    // parcourir tous les pins
    for (let state = { step: 0 }; state.step < steps.length; state.step++) {
      if (stopEventState.requested) {
        if (stopEventSteps?.length) {
          await executePinsList({ pinsSettingsList: stopEventSteps, context });
        }
        return result;
      }

      const pinsSettings = steps[state.step];

      try {
        result = await executePins(executePinsList, steps, state, pinsSettings, context, stopEventState);
      } catch (error) {
        console.log('catch execPins, error :', error)
        if (error === 'DIGIPAIR_CONDITIONS_IF_FALSE') {
          continue;
        }
        if (error === 'DIGIPAIR_WORKFLOW_STOP') {
          return result;
        }
        if (error === 'DIGIPAIR_WORKFLOW_STOP_REQUESTED') {
          if (stopEventSteps?.length) {
            await executePinsList({ pinsSettingsList: stopEventSteps, context });
          }
          return result;
        }

        // ✅ Detect cancel from client
        if (isCancellation(error)) {
          console.log('[WORKFLOW] cancel reçu via handle.cancel()');
          if (stopEventSteps?.length) {
            await executePinsList({ pinsSettingsList: stopEventSteps, context });
          }
          throw error; // laisse Temporal marquer le workflow comme CANCELED
        }

        throw error;
      }

      if (pinsSettings.properties?.['name']) {
        context.workflow.steps[pinsSettings.properties['name']] = result;
      }
    }
  } catch (error: any) {
    console.log('catch workflow, error :', error)
    // Catch global workflow
    if (isCancellation(error)) {
      console.log('[WORKFLOW] cancelled global');
      if (stopEventSteps?.length) {
        await executePinsList({ pinsSettingsList: stopEventSteps, context });
      }
      throw error; // workflow = CANCELED
    }
    throw error;
  }

  return result;
}
