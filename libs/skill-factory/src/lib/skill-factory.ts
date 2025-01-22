/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';

class FactoryService {
  private startTask!: Function;

  async initialize(startTask: Function) {
    this.startTask = startTask;
  }

  async start(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { reasoning, digipair = context.request.digipair, body = {}, factory = null } = params;
    let result;

    if (factory) {
      const response = await fetch(`${factory}/${digipair}/${reasoning}`, body);
      result = await response.json();
    } else {
      result = await this.startTask(context, digipair, reasoning, body);
    }

    return result;
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

  async headers(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { headers } = params;
    return context.protected.res.set(headers);
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

export const status = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.status(params, pinsSettingsList, context);

export const headers = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.headers(params, pinsSettingsList, context);
