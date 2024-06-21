import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';

class EditorService {
  async reasonings(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.EDITOR_PATH ??
        process.env['DIGIPAIR_AGENTS_PATH'] ??
        './dist/apps/factory/assets/digipairs',
      digipair,
    } = params;

    const reasonings = (await promises.readdir(`${path}/${digipair}`))
      .filter(
        (file: string) => file.endsWith('.json') && !file.startsWith('.') && file !== 'config.json',
      )
      .map((file: string) => file.replace(/\.json$/, ''));

    return reasonings;
  }

  async reasoning(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.EDITOR_PATH ??
        process.env['DIGIPAIR_AGENTS_PATH'] ??
        './dist/apps/factory/assets/digipairs',
      digipair,
      reasoning,
    } = params;

    const text = await promises.readFile(`${path}/${digipair}/${reasoning}.json`, 'utf8');
    const content = JSON.parse(text);

    return {
      ...content,
      digipair,
      id: reasoning,
    };
  }

  async setReasoning(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.EDITOR_PATH ??
        process.env['DIGIPAIR_AGENTS_PATH'] ??
        './dist/apps/factory/assets/digipairs',
      digipair,
      reasoning,
      value,
    } = params;

    await promises.writeFile(`${path}/${digipair}/${reasoning}.json`, JSON.stringify(value));

    return {};
  }

  async removeReasoning(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.EDITOR_PATH ??
        process.env['DIGIPAIR_AGENTS_PATH'] ??
        './dist/apps/factory/assets/digipairs',
      digipair,
      reasoning
    } = params;

    await promises.unlink(`${path}/${digipair}/${reasoning}.json`);

    return {};
  }

  async digipairs(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.EDITOR_PATH ??
        process.env['DIGIPAIR_AGENTS_PATH'] ??
        './dist/apps/factory/assets/digipairs',
    } = params;

    const digipairs = (await promises.readdir(path)).filter(
      (file: string) => !file.startsWith('.'),
    );

    return digipairs;
  }

  async digipair(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.EDITOR_PATH ??
        process.env['DIGIPAIR_AGENTS_PATH'] ??
        './dist/apps/factory/assets/digipairs',
      digipair,
    } = params;

    const text = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(text);

    return {
      ...config,
      id: digipair,
    };
  }

  async setDigipair(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.EDITOR_PATH ??
        process.env['DIGIPAIR_AGENTS_PATH'] ??
        './dist/apps/factory/assets/digipairs',
      digipair,
      value,
    } = params;

    await promises.writeFile(`${path}/${digipair}/config.json`, JSON.stringify(value));

    return {};
  }

  async removeDigipair(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates.EDITOR_PATH ??
        process.env['DIGIPAIR_AGENTS_PATH'] ??
        './dist/apps/factory/assets/digipairs',
      digipair,
      value,
    } = params;

    // remove digipair folder
    await promises.rmdir(`${path}/${digipair}`, { recursive: true });

    return {};
  }
}

export const setReasoning = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().setReasoning(params, pinsSettingsList, context);

export const reasonings = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().reasonings(params, pinsSettingsList, context);

export const reasoning = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().reasoning(params, pinsSettingsList, context);

export const removeReasoning = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().removeReasoning(params, pinsSettingsList, context);

export const setDigipair = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().setDigipair(params, pinsSettingsList, context);

export const digipairs = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().digipairs(params, pinsSettingsList, context);

export const digipair = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().digipair(params, pinsSettingsList, context);

export const removeDigipair = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().removeDigipair(params, pinsSettingsList, context);
