import { sleep, proxyActivities } from '@temporalio/workflow';
import { ApplicationFailure } from '@temporalio/common';

import type * as activities from './activities';
import { WorkflowArgs } from './shared';
import { PinsSettings, preparePinsSettings } from '@digipair/engine';

async function executePins(
  executePinsList: any,
  steps: PinsSettings[],
  state: { step: number; stop: boolean },
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

      const itemResult = await executePins(
        executePinsList,
        steps,
        state,
        itemSettingsOrigin,
        itemContext,
      );
      results.push(itemResult);
    }

    return results;
  }

  if (settings.element === 'sleep') {
    await sleep((settings.properties as any)['duration']);
  } else if (settings.element === 'stop') {
    state.stop = true;
    return;
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
    state.step = step;
  } else if (settings.element === 'activity') {
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

export async function workflow({ steps, context, options }: WorkflowArgs): Promise<any> {
  let result: any;

  context.variables.workflow = {};

  const { executePinsList } = proxyActivities<typeof activities>(options);

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
  for (let state = { step: 0, stop: false }; state.step < steps.length; state.step++) {
    const pinsSettings = steps[state.step];

    if (typeof pinsSettings.conditions?.if !== 'undefined') {
      const preparedSettings = await preparePinsSettings(pinsSettings, context);
      if (!(preparedSettings.conditions as any).if) {
        continue;
      }
    }

    result = await executePins(executePinsList, steps, state, pinsSettings, context);

    if (pinsSettings.properties?.['name']) {
      context.variables.workflow[pinsSettings.properties['name']] = result;
    }

    if (state.stop) {
      return result;
    }
  }

  return result;
}
