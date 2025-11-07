/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';

class FactoryService {
  private startTask!: Function;

  async initialize(startTask: Function) {
    this.startTask = startTask;
  }

  async start(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { reasoning, digipair = context.request.digipair, body = {} } = params;

    const result = await this.startTask(context, digipair, reasoning, body);
    return result;
  }

  async execute(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { execute, context = _context } = params;

    const result = await executePinsList(execute, context, `${context.__PATH__}.execute`);
    return result;
  }

  async keepAlive(_params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    throw { type: 'DIGIPAIR_KEEPALIVE' };
  }

  async stop(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { value = {} } = params;

    throw { type: 'DIGIPAIR_STOP', value };
  }

  async task(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    return await executePinsList(execute, context, `${context.__PATH__}.execute`);
  }

  async action(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    return await executePinsList(execute, context, `${context.__PATH__}.execute`);
  }

  async trigger(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    return await executePinsList(execute, context, `${context.__PATH__}.execute`);
  }
}

let instance: FactoryService;

export const initialize = (launcher: Function) =>
  (instance = new FactoryService()).initialize(launcher);

export const start = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.start(params, pinsSettingsList, context);

export const execute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.execute(params, pinsSettingsList, context);

export const keepAlive = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.keepAlive(params, pinsSettingsList, context);

export const stop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.stop(params, pinsSettingsList, context);

export const task = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.task(params, pinsSettingsList, context);

export const action = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.action(params, pinsSettingsList, context);

export const trigger = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.trigger(params, pinsSettingsList, context);
