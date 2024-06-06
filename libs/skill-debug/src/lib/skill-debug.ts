import { PinsSettings } from '@digipair/engine';

class DebugService {
  async log(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { type = 'INFOS', label, value } = params;

    const message = `[${type}] ${label}`;

    if (value) {
      global.console.log(message, value);
    } else {
      global.console.log(message);
    }

    return value;
  }
}

export const log = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DebugService().log(params, pinsSettingsList, context);
