/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';

class WorkerService {
  async task(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    context.workflow = {
      steps: {},
    };

    return await executePinsList(execute, context, `${context.__PATH__}.execute`);
  }

  async action(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    context.workflow = {
      steps: {},
    };
    
    return await executePinsList(execute, context, `${context.__PATH__}.execute`);
  }

  async activity(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { name, execute } = params;
    const result = await executePinsList(execute, context, `${context.__PATH__}.execute`);

    context.workflow.steps[name] = result;

    return result;
  }

  async stop(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { value = {} } = params;

    throw { type: 'DIGIPAIR_STOP', value };
  }
}

export const task = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WorkerService().task(params, pinsSettingsList, context);

export const action = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WorkerService().action(params, pinsSettingsList, context);

export const activity = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WorkerService().activity(params, pinsSettingsList, context);

export const stop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WorkerService().stop(params, pinsSettingsList, context);
