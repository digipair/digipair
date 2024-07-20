/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class FactoryService {
  private startTask!: Function;

  async initialize(startTask: Function) {
    this.startTask = startTask;
  }

  async start(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { reasoning, digipair = context.request.digipair, body = {} } = params;

    return await this.startTask(context, digipair, reasoning, body);
  }
}

let instance: FactoryService;

export const initialize = (launcher: Function) =>
  (instance = new FactoryService()).initialize(launcher);

export const start = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.start(params, pinsSettingsList, context);
