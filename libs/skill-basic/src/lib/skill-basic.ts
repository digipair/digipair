import { PinsSettings, executePinsList } from '@digipair/engine';

class BasicService {
  async transform(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { value, execute } = params;

    if (!execute || execute.length <= 0) {
      return value;
    }

    const result = await executePinsList(execute, context);
    return result;
  }

  async setVariable(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { name, value, execute } = params;

    if (!execute || execute.length <= 0) {
      context.variables[name] = value;
      return value;
    }

    const result = await executePinsList(execute, context);
    context.variables[name] = result;
    return result;
  }

  async interval(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { time, execute } = params;
    const signal = context.protected?.signal;

    const result = setInterval(() => {
      executePinsList(execute, context);
    }, time);

    signal?.addEventListener('abort', () => clearInterval(result));

    return result;
  }

  async defer(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { time, execute } = params;
    const signal = context.protected?.signal;

    const result = setTimeout(() => {
      executePinsList(execute, context);
    }, time);

    signal?.addEventListener('abort', () => clearTimeout(result));

    return result;
  }

  async stopInterval(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { id } = params;

    return clearInterval(id);
  }

  async stopDefer(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { id } = params;

    return clearTimeout(id);
  }

  async base64ToBuffer(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { base64 } = params;

    const data = base64.replace(/^data:.*;base64,/, '');
    const buffer = Buffer.from(data, 'base64');

    return buffer;
  }
}

export const transform = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().transform(params, pinsSettingsList, context);

export const setVariable = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().setVariable(params, pinsSettingsList, context);

export const base64ToBuffer = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().base64ToBuffer(params, pinsSettingsList, context);

export const interval = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().interval(params, pinsSettingsList, context);

export const defer = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().defer(params, pinsSettingsList, context);

export const stopInterval = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().stopInterval(params, pinsSettingsList, context);

export const stopDefer = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().stopDefer(params, pinsSettingsList, context);
