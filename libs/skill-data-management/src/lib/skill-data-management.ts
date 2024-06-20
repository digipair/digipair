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

  async struct2array(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { value } = params;

    return Object.entries(value).map(([key, value]) => ({ key, value }));
  }

  async jsonParse(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { value } = params;

    return JSON.parse(value);
  }
}

export const transform = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DataManagementService().transform(params, pinsSettingsList, context);

export const setVariable = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DataManagementService().setVariable(params, pinsSettingsList, context);

export const struct2array = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DataManagementService().struct2array(params, pinsSettingsList, context);

export const jsonParse = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DataManagementService().jsonParse(params, pinsSettingsList, context);
