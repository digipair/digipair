import { PinsSettings } from '@digipair/engine';

class DebugService {
  async console(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { label, value } = params;

    window.console.log(label, value);
  }
}

export const console = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DebugService().console(params, pinsSettingsList, context);
