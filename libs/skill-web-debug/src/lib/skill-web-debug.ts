import { PinsSettings } from '@digipair/engine';

class DebugService {
  async console(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { text, parameters = [] } = params;

    window.console.log(text, ...parameters);
  }
}

export const console = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DebugService().console(params, pinsSettingsList, context);
