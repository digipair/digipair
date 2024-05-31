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
}

export const transform = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DataManagementService().transform(params, pinsSettingsList, context);

export const setVariable = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DataManagementService().setVariable(params, pinsSettingsList, context);
