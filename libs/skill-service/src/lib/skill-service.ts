/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

class ServiceService {
  async service(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    return await executePinsList(execute, context, { libraries: {} });
  }
}

export const service = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ServiceService().service(params, pinsSettingsList, context);
