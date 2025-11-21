/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { marked } from 'marked';

class SkillMarkedService {
  async convert(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { text = '' } = params;
    return marked.parse(text);
  }
}

export const convert = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SkillMarkedService().convert(params, pinsSettingsList, context);

