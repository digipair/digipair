/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';

class FactoryService {
  private startTask!: Function;

  async initialize(startTask: Function) {
    this.startTask = startTask;
  }

  async start(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { reasoning, digipair = context.request.digipair, body = {} } = params;

    return await this.startTask(context, digipair, reasoning, body);
  }

  async executeWithContext(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { execute, context } = params;

    const result = await executePinsList(execute, context);
    return result;
  }

  async keepAlive(_params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    throw 'DIGIPAIR_KEEPALIVE';
  }

  async send(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { body } = params;
    return context.protected.res.send(body);
  }

  async status(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { code = 200 } = params;
    return context.protected.res.status(code);
  }
}

let instance: FactoryService;

export const initialize = (launcher: Function) =>
  (instance = new FactoryService()).initialize(launcher);

export const start = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.start(params, pinsSettingsList, context);

export const executeWithContext = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.executeWithContext(params, pinsSettingsList, context);

export const keepAlive = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.keepAlive(params, pinsSettingsList, context);

export const send = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.send(params, pinsSettingsList, context);
