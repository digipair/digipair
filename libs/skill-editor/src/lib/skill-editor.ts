import { PinsSettings } from '@digipair/engine';
import * as _ from 'lodash';
import { promises, existsSync } from 'fs';
import { readFile } from 'fs/promises';

class EditorService {
  async reasonings(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
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
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
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
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
      digipair,
      reasoning,
      value,
    } = params;

    await promises.writeFile(`${path}/${digipair}/${reasoning}.json`, JSON.stringify(value));

    return {};
  }

  async removeReasoning(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
      digipair,
      reasoning,
    } = params;

    await promises.unlink(`${path}/${digipair}/${reasoning}.json`);

    return {};
  }

  async digipairs(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
    } = params;

    const digipairs = (await promises.readdir(path)).filter(
      (file: string) =>
        !file.startsWith('.') && !file.endsWith('.json') && !file.endsWith('.jsonl'),
    );

    return digipairs;
  }

  async digipair(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
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
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
      digipair,
      value,
    } = params;

    await promises.writeFile(`${path}/${digipair}/config.json`, JSON.stringify(value));

    return {};
  }

  async removeDigipair(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
      digipair,
    } = params;

    // remove digipair folder
    await promises.rmdir(`${path}/${digipair}`, { recursive: true });

    return {};
  }

  async addDigipair(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
      templatesPath = context.privates?.EDITOR_TEMPLATES_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/templates`
          : './factory/templates'),
      template,
      data,
      digipair,
    } = params;

    // if digipair folder exists, return error
    if (existsSync(`${path}/${digipair}`)) {
      throw new Error('[DIGIPAIR-EDITOR] Digipair already exists');
    }

    // create digipair folder
    await promises.mkdir(`${path}/${digipair}`);

    // copy files
    const originPath = `${templatesPath}/${template}`;
    const files = await promises.readdir(originPath);
    for (const file of files) {
      if (file.endsWith('.json')) {
        const content = await promises.readFile(`${originPath}/${file}`, 'utf8');
        const result = _.template(content)(data);
        await promises.writeFile(`${path}/${digipair}/${file}`, result);
      } else {
        await promises.copyFile(`${originPath}/${file}`, `${path}/${digipair}/${file}`);
      }
    }

    return {};
  }

  async metadata(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
          : './factory/digipairs'),
      digipair,
    } = params;
    const content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(content);

    const buffer = await promises.readFile(`${path}/${digipair}/avatar.png`);
    const avatar = buffer.toString('base64');

    return {
      ...config.metadata,
      avatar: `data:image/png;base64,${avatar}`,
      config: { VERSIONS: config.libraries },
      variables: config.variables,
    };
  }

  async templates(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
          ? `${process.env['DIGIPAIR_FACTORY_PATH']}/templates`
          : './factory/templates'),
    } = params;

    const entries = await promises.readdir(`${path}/${digipair}`, { withFileTypes: true });
    const templates = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);

    return templates;
  }

  async schemas(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { libraries, language } = params;

    const list = Promise.all(
      Object.keys(libraries).map(async (library: any) => {
        let schemasPath = require.resolve(`${library}/schema.json`);

        if (language !== 'en') {
          try {
            schemasPath = require.resolve(`${library}/schema.${language}.json`);
          } catch (e) {}
        }

        return JSON.parse(await readFile(schemasPath, 'utf8'));
      }),
    );

    return list;
  }

  async tools(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { language = 'en' } = params;
    const packageFile = process.cwd() + '/package.json';
    const infos = require(packageFile);
    const dependencies = Object.keys(infos.dependencies);
    const list = [] as any[];

    for (const dependency of dependencies) {
      try {
        const toolPath = require.resolve(dependency + '/package.json');
        const content = require(toolPath);

        if (
          content.keywords.includes('digipair') &&
          content.keywords.includes('service') &&
          content.keywords.includes('tool')
        ) {
          let schemasPath = require.resolve(`${dependency}/schema.json`);

          if (language !== 'en') {
            try {
              schemasPath = require.resolve(`${dependency}/schema.${language}.json`);
            } catch (e) {}
          }

          const schema = JSON.parse(await readFile(schemasPath, 'utf8'));

          list.push({
            name: dependency,
            summary: schema.info.summary,
            description: schema.info.description,
            version: schema.info.version,
            icon: schema.info['x-icon'],
          });
        }
      } catch (error) {
        // console.log(error);
        continue;
      }
    }

    return list;
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

export const addDigipair = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().addDigipair(params, pinsSettingsList, context);

export const metadata = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().metadata(params, pinsSettingsList, context);

export const templates = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().templates(params, pinsSettingsList, context);

export const schemas = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().schemas(params, pinsSettingsList, context);

export const tools = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().tools(params, pinsSettingsList, context);