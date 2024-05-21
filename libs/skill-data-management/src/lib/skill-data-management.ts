import { PinsSettings, executePinsList } from '@digipair/engine';

class DataManagementService {
  async transform(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { value, execute } = params;

    if (!execute || execute.length <= 0) {
      return value;
    }

    const result = await executePinsList(execute, context);
    return result;
  }
}

export const transform = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DataManagementService().transform(params, pinsSettingsList, context);
