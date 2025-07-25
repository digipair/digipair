import { PinsSettings, executePinsList } from '@digipair/engine';
import { v4 } from 'uuid';

class BasicService {
  async transform(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { value, execute } = params;

    if (!execute || execute.length <= 0) {
      return value;
    }

    const result = await executePinsList(execute, context, `${context.__PATH__}.execute`);
    return result;
  }

  async setVariable(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { name, value, execute } = params;

    if (!execute || execute.length <= 0) {
      context.variables[name] = value;
      return value;
    }

    const result = await executePinsList(execute, context, `${context.__PATH__}.execute`);
    context.variables[name] = result;
    return result;
  }

  async interval(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { time, execute } = params;
    const signal = context.protected?.signal;

    const result = setInterval(() => {
      executePinsList(execute, context, `${context.__PATH__}.execute`);
    }, time);

    signal?.addEventListener('abort', () => clearInterval(result));

    return result;
  }

  async defer(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { time, execute } = params;
    const signal = context.protected?.signal;

    const result = setTimeout(() => {
      executePinsList(execute, context, `${context.__PATH__}.execute`);
    }, time);

    signal?.addEventListener('abort', () => clearTimeout(result));

    return result;
  }

  async stopInterval(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { id } = params;

    return clearInterval(id);
  }

  async stopDefer(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { id } = params;

    return clearTimeout(id);
  }

  async base64ToBuffer(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { base64 } = params;

    const data = base64.replace(/^data:.*;base64,/, '');
    const buffer = Buffer.from(data, 'base64');

    return buffer;
  }

  async trycatch(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { executeTry, executeCatch = [] } = params;

    try {
      return await executePinsList(executeTry, context, `${context.__PATH__}.executeTry`);
    } catch (error) {
      return await executePinsList(
        executeCatch,
        { ...context, error },
        `${context.__PATH__}.executeCatch`,
      );
    }
  }

  async uuid(_params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const uuid = v4();
    return uuid;
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

export const trycatch = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().trycatch(params, pinsSettingsList, context);

export const uuid = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new BasicService().uuid(params, pinsSettingsList, context);
