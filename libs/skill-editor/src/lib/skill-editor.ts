import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';

class EditorService {
  async reasonings(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path = context.privates?.EDITOR_PATH ?? process.env['DIGIPAIRS_PATH'] ?? './dist/apps/factory/assets/digipairs';
    const { digipair } = params;
    const reasonings = (await promises.readdir(`${path}/${digipair}`))
      .filter(
        (file: string) => file.endsWith('.json') && !file.startsWith('.') && file !== 'config.json',
      )
      .map((file: string) => file.replace(/\.json$/, ''));

    return reasonings;
  }

  async reasoning(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path = context.privates?.EDITOR_PATH ?? process.env['DIGIPAIRS_PATH'] ?? './dist/apps/factory/assets/digipairs';
    const { digipair, reasoning } = params;

    const text = await promises.readFile(`${path}/${digipair}/${reasoning}.json`, 'utf8');
    const content = JSON.parse(text);

    return {
      id: reasoning,
      digipair,
      ...content,
    };
  }

  async setReasoning(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path = context.privates?.EDITOR_PATH ?? process.env['DIGIPAIRS_PATH'] ?? './dist/apps/factory/assets/digipairs';
    const { digipair, reasoning, value } = params;

    await promises.writeFile(`${path}/${digipair}/${reasoning}.json`, JSON.stringify(value));

    return {};
  }

  async digipairs(_params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path = context.privates?.EDITOR_PATH ?? process.env['DIGIPAIRS_PATH'] ?? './dist/apps/factory/assets/digipairs';
    const digipairs = (await promises.readdir(path)).filter(
      (file: string) => !file.startsWith('.'),
    );
    return digipairs;
  }

  async digipair(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path = context.privates?.EDITOR_PATH ?? process.env['DIGIPAIRS_PATH'] ?? './dist/apps/factory/assets/digipairs';
    const { digipair } = params;

    const text = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(text);

    return {
      id: digipair,
      ...config,
    };
  }

  async setDigipair(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path = context.privates?.EDITOR_PATH ?? process.env['DIGIPAIRS_PATH'] ?? './dist/apps/factory/assets/digipairs';
    const { digipair, value } = params;

    await promises.writeFile(`${path}/${digipair}/config.json`, JSON.stringify(value));

    return {};
  }
}

export const setReasoning = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().setReasoning(params, pinsSettingsList, context);

export const reasonings = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().reasonings(params, pinsSettingsList, context);

export const reasoning = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().reasoning(params, pinsSettingsList, context);

export const digipairs = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().digipairs(params, pinsSettingsList, context);

export const digipair = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().digipair(params, pinsSettingsList, context);
