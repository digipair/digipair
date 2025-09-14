/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';

class ToolService {
  async task(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    return await executePinsList(
      execute,
      { ...context, request: context.requester },
      `${context.__PATH__}.execute`,
    );
  }

  async action(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    return await executePinsList(
      execute,
      { ...context, request: context.requester },
      `${context.__PATH__}.execute`,
    );
  }

  async trigger(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    return await executePinsList(
      execute,
      { ...context, request: context.requester },
      `${context.__PATH__}.execute`,
    );
  }

  async stop(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { value = {} } = params;

    throw { type: 'DIGIPAIR_STOP', value };
  }

  async keepAlive(_params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    throw { type: 'DIGIPAIR_KEEPALIVE' };
  }

  async execute(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { execute, context = {} } = params;

    const result = await executePinsList(
      execute,
      {
        ...context,
        ..._context,
        request:
          _context.requester && Object.keys(_context.requester).length > 0
            ? _context.requester
            : _context.request,
      },
      `${context.__PATH__}.execute`,
    );
    return result;
  }
}

export const task = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ToolService().task(params, pinsSettingsList, context);

export const action = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ToolService().action(params, pinsSettingsList, context);

export const trigger = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ToolService().trigger(params, pinsSettingsList, context);

export const stop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ToolService().stop(params, pinsSettingsList, context);

export const keepAlive = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ToolService().keepAlive(params, pinsSettingsList, context);

export const execute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ToolService().execute(params, pinsSettingsList, context);
