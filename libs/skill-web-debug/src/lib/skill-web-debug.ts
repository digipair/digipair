import { PinsSettings } from '@digipair/engine';

class DebugService {
  async log(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { type = 'INFOS', label, value } = params;

    const message = `[${type}] ${label}`;

    if (value) {
      window.console.log(message, value);
    } else {
      window.console.log(message);
    }

    return context.previous;
  }
}

export const log = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DebugService().log(params, pinsSettingsList, context);
