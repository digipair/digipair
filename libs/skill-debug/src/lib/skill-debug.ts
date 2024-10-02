import { PinsSettings } from '@digipair/engine';
import * as logger from '@digipair/skill-logger';

class DebugService {
  async log(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { type = 'INFOS', label, value } = params;

    const message = `[${type}] ${label}`;

    if (value) {
      (logger as any).addLog(context, type, message + ': ' + JSON.stringify(value));
    } else {
      (logger as any).addLog(context, type, message);
    }

    return context.previous;
  }
}

export const log = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DebugService().log(params, pinsSettingsList, context);
