import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';
import { join } from 'path';

class EditorService {
  async reasonings(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { digipair } = params;
    const reasonings = (await promises.readdir(join(__dirname, `/assets/digipairs/${digipair}`)))
      .filter((file: string) => file.endsWith('.json') && file !== 'config.json')
      .map((file: string) => file.replace(/\.json$/, ''));

    return reasonings;
  }

  async reasoning(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { digipair, reasoning } = params;

    const text = await promises.readFile(
      join(__dirname, `/assets/digipairs/${digipair}/${reasoning}.json`),
      'utf8',
    );
    const content = JSON.parse(text);

    return {
      id: reasoning,
      digipair,
      ...content,
    };
  }

  async setReasoning(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { digipair, reasoning, value } = params;

    await promises.writeFile(
      join(__dirname, `/assets/digipairs/${digipair}/${reasoning}.json`),
      JSON.stringify(value),
    );

    return {};
  }

  async digipairs(_params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const digipairs = await promises.readdir(join(__dirname, `/assets/digipairs`));
    return digipairs;
  }

  async digipair(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { digipair } = params;

    const text = await promises.readFile(
      join(__dirname, `/assets/digipairs/${digipair}/config.json`),
      'utf8',
    );
    const config = JSON.parse(text);

    return {
      id: digipair,
      ...config,
    };
  }

  async setDigipair(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { digipair, value } = params;

    await promises.writeFile(
      join(__dirname, `/assets/digipairs/${digipair}/config.json`),
      JSON.stringify(value),
    );

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
