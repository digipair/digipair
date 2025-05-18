/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList, preparePinsSettings } from '@digipair/engine';

class ChatbotService {
  async answer(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      command = [],
      boosts = [],
      sources = [],
      assistant,
      logs,
      boost,
      parent_conversation,
      parent_history,
      session,
      uuid,
    } = params;
    return {
      assistant,
      command: await Promise.all(
        command.map((settings: PinsSettings) => preparePinsSettings(settings, context)),
      ),
      boosts,
      sources,
      logs,
      boost: boost
        ? {
            ...boost,
            inputs: await Promise.all(
              (boost.inputs || []).map((settings: PinsSettings) => preparePinsSettings(settings, context)),
            ),
          }
        : boost,
      parent_conversation,
      parent_history,
      session,
      uuid,
    };
  }

  async execute(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { step } = params;
    const { steps } = context.boost;
    const execute = steps.findIndex(({ name }: any) => name === step);

    const result = await executePinsList(execute, context, `${context.__PATH__}.execute`);
    return result;
  }

  // SCENES
  async boost(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    if (context.request.method && context.request.method !== 'POST') {
      return { error: 'Method not allowed' };
    }

    const { steps } = params;
    const step = context.request.body.step
      ? steps.findIndex(({ name }: any) => name === context.request.body.step)
      : 0;
    const execute = steps[step]?.execute || [];

    const result = await executePinsList(execute, { ...context, boost: { steps } }, `${context.__PATH__}.steps[${step}].execute`);
    return result;
  }
}

// PIN'S

export const answer = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().answer(params, pinsSettingsList, context);

export const execute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().execute(params, pinsSettingsList, context);

// SCENES

export const boost = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().boost(params, pinsSettingsList, context);
