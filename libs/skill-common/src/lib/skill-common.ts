import { PinsSettings } from '@digipair/engine';
import { existsSync, promises } from 'fs';

class CommonService {
  async infos(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;
    const content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(content);

    return {
      name: config.name,
      description: config.description,
    };
  }

  async metadata(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;
    const content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(content);

    return {
      ...config.metadata,
      config: { VERSIONS: config.libraries },
      variables: config.variables,
    };
  }

  async roles(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;
    const content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(content);

    return {
      ...config.roles,
    };
  }

  async avatar(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;
    const buffer = await promises.readFile(`${path}/${digipair}/avatar.png`);
    const avatar = buffer.toString('base64');

    return `data:image/png;base64,${avatar}`;
  }

  async boosts(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;
    const files = await promises.readdir(`${path}/${digipair}`);
    const boosts = await Promise.all(
      files
        .map(file => /^boost-(.*)\.json$/.exec(file)?.[1])
        .filter(name => name)
        .map(async name => {
          const content = await promises.readFile(`${path}/${digipair}/boost-${name}.json`, 'utf8');
          const { summary, description, metadata } = JSON.parse(content);

          return {
            reasoning: `boost-${name}`,
            summary,
            description,
            selector: metadata.selector,
            url: metadata.url,
            standalone: metadata.standalone,
          };
        }),
    );

    return boosts;
  }

  async prompts(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;
    const files = await promises.readdir(`${path}/${digipair}`);
    const actions = await Promise.all(
      files
        .filter(
          file => file.substring(file.length - 5) === '.json' && file.substring(0, 7) === 'action-',
        )
        .map(async file => {
          const content = await promises.readFile(`${path}/${digipair}/${file}`, 'utf8');
          const { metadata } = JSON.parse(content);

          return metadata.prompts ?? [];
        }),
    );

    return actions.flat();
  }

  async roles(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
        context.privates?.EDITOR_PATH ??
        (process.env['DIGIPAIR_FACTORY_PATH']
            ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
            : './factory/digipairs');
    const { digipair } = params;
    const content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(content);

    return {
      ...config.roles,
    };
  }

  async schema(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;
    let schema = {} as any;

    const content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(content);

    // check if schema.json exists
    if (existsSync(`${path}/${digipair}/schema.json`)) {
      const text = await promises.readFile(`${path}/${digipair}/schema.json`, 'utf8');
      schema = JSON.parse(text);
    }

    const filesCommon = await promises.readdir(`${path}/common`);
    const files = await promises.readdir(`${path}/${digipair}`);

    const actionsCommon = (
      await Promise.all(
        filesCommon
          .map(file => /^action-(.*)\.json$/.exec(file)?.[1])
          .filter(name => name)
          .map(async name => {
            const actionContent = await promises.readFile(
              `${path}/common/action-${name}.json`,
              'utf8',
            );
            const { summary, description, metadata } = JSON.parse(actionContent);

            return {
              key: `/action-${name}`,
              value: {
                post: {
                  tags: metadata.tags ?? ['service'],
                  summary,
                  description,
                  parameters: metadata.parameters ?? [],
                  'x-events': [],
                  'x-context': metadata.context ?? false,
                  responses: {
                    '200': {
                      content: {
                        'application/json': {
                          schema: metadata.output ?? { type: 'null' },
                        },
                      },
                    },
                  },
                },
              },
            };
          }),
      )
    ).reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});

    const actions = (
      await Promise.all(
        files
          .map(file => /^action-(.*)\.json$/.exec(file)?.[1])
          .filter(name => name)
          .map(async name => {
            const actionContent = await promises.readFile(
              `${path}/${digipair}/action-${name}.json`,
              'utf8',
            );
            const { summary, description, metadata } = JSON.parse(actionContent);

            return {
              key: `/action-${name}`,
              value: {
                post: {
                  tags: metadata.tags ?? ['service'],
                  summary,
                  description,
                  parameters: metadata.parameters ?? [],
                  'x-events': [],
                  'x-context': metadata.context ?? false,
                  responses: {
                    '200': {
                      content: {
                        'application/json': {
                          schema: metadata.output ?? { type: 'null' },
                        },
                      },
                    },
                  },
                },
              },
            };
          }),
      )
    ).reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});

    const triggersCommon = (
      await Promise.all(
        filesCommon
          .map(file => /^trigger-(.*)\.json$/.exec(file)?.[1])
          .filter(name => name)
          .map(async name => {
            const triggerContent = await promises.readFile(
              `${path}/common/trigger-${name}.json`,
              'utf8',
            );
            const { summary, description, metadata } = JSON.parse(triggerContent);

            return {
              key: `/trigger-${name}`,
              value: {
                tags: metadata.tags ?? [],
                summary,
                description,
                parameters: metadata.parameters ?? [],
              },
            };
          }),
      )
    ).reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    const triggers = (
      await Promise.all(
        files
          .map(file => /^trigger-(.*)\.json$/.exec(file)?.[1])
          .filter(name => name)
          .map(async name => {
            const triggerContent = await promises.readFile(
              `${path}/${digipair}/trigger-${name}.json`,
              'utf8',
            );
            const { summary, description, metadata } = JSON.parse(triggerContent);

            return {
              key: `/trigger-${name}`,
              value: {
                tags: metadata.tags ?? [],
                summary,
                description,
                parameters: metadata.parameters ?? [],
              },
            };
          }),
      )
    ).reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});

    return {
      openapi: '3.0.0',
      info: {
        title: 'digipair:' + digipair,
        summary: config.name,
        description: config.description,
        version: '1.0.0',
        'x-icon': '🤖',
      },
      ...schema,
      paths: { ...schema.paths, ...actionsCommon, ...actions },
      'x-scene-blocks': { ...schema['x-scene-blocks'], ...triggersCommon, ...triggers },
    };
  }
}

export const infos = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().infos(params, pinsSettingsList, context);

export const metadata = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().metadata(params, pinsSettingsList, context);

export const avatar = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().avatar(params, pinsSettingsList, context);

export const boosts = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().boosts(params, pinsSettingsList, context);

export const prompts = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().prompts(params, pinsSettingsList, context);

export const roles = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
    new CommonService().roles(params, pinsSettingsList, context);

export const schema = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().schema(params, pinsSettingsList, context);
