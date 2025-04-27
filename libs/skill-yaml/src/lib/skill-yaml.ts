/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import * as jsYaml from 'js-yaml';

class YamlService {
  async load(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any
  ): Promise<any> {
    const { yaml, options = {} } = params;
    return jsYaml.load(yaml, options);
  }

  async dump(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any
  ): Promise<any> {
    const { data, options = {} } = params;
    return jsYaml.dump(data, options);
  }
}

export const load = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new YamlService().load(params, pinsSettingsList, context);

export const dump = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new YamlService().dump(params, pinsSettingsList, context);
