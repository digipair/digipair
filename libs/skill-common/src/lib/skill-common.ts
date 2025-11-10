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

    const roles = config?.roles ?? {};
    const allRoles = await this.resolveRolesForAgent(path, roles);

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

    let actionsRoles = {};
    let triggersRoles = {};
    for (const roleName of allRoles) {
      const rolePath = `${path}/${roleName}`;
      if (existsSync(rolePath)) {
        try {
          const roleFiles = await promises.readdir(rolePath);
          const roleActions = (
            await Promise.all(
              roleFiles
                .map(file => /^action-(.*)\.json$/.exec(file)?.[1])
                .filter(name => name)
                .map(async name => {
                  const actionContent = await promises.readFile(
                      `${rolePath}/action-${name}.json`,
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

          actionsRoles = { ...actionsRoles, ...roleActions };

          const roleTriggers = (
            await Promise.all(
              roleFiles
                .map(file => /^trigger-(.*)\.json$/.exec(file)?.[1])
                .filter(name => name)
                .map(async name => {
                  const triggerContent = await promises.readFile(
                    `${rolePath}/trigger-${name}.json`,
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

          triggersRoles = { ...triggersRoles, ...roleTriggers };
        } catch {
          // skip if no file on role
        }
      }
    }


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
      paths: {
        ...schema.paths,
        ...actionsCommon,
        ...actionsRoles,
        ...actions,
      },
      'x-scene-blocks': {
        ...schema['x-scene-blocks'],
        ...triggersCommon,
        ...triggersRoles,
        ...triggers,
      },
    };
  }

  private async resolveRolesForAgent(
      basePath: string,
      roles: Record<string, string>,
      visited = new Set<string>(),
      priorityLast = true,
  ): Promise<string[]> {
    let result: string[] = [];
    let entries = Object.entries(roles);
    if (priorityLast) entries = entries.reverse();

    for (const [roleName] of entries) {
      if (visited.has(roleName)) {
        console.debug(`[resolveRolesForAgent] Circular reference: ${roleName}`);
        continue;
      }
      visited.add(roleName);

      const configFile = `${basePath}/${roleName}/config.json`;
      if (existsSync(configFile)) {
        try {
          const config = JSON.parse(await promises.readFile(configFile, 'utf8'));
          const subRoles = config.roles ?? {};
          const inherited = await this.resolveRolesForAgent(
              basePath,
              subRoles,
              visited,
              priorityLast,
          );
          result.push(...inherited, roleName);
        } catch (err) {
            console.debug(`[resolveRolesForAgent] Non Blocking Error loading ${configFile}:`, err);
            result.push(roleName);
        }
      } else {
        result.push(roleName);
      }
    }

    return [...new Set(result)];
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

export const schema = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().schema(params, pinsSettingsList, context);
