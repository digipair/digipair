/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList, preparePinsSettings } from '@digipair/engine';

class ChatbotService {
  async answer(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { command = [], boosts = [], assistant, sources, logs } = params;
    return {
      assistant,
      command: await Promise.all(
        command.map((settings: PinsSettings) => preparePinsSettings(settings, context)),
      ),
      boosts,
      sources,
      logs,
    };
  }

  // SCENES
  async boost(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    if (context.request.method !== 'POST') {
      return { error: 'Method not allowed' };
    }

    const { execute } = params;
    const result = await executePinsList(execute, context);
    return result;
  }
}

export const boost = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().boost(params, pinsSettingsList, context);

export const answer = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().answer(params, pinsSettingsList, context);
