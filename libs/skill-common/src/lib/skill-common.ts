import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';

class CommonService {
  async metadata(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;
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

  async schema(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path =
      context.privates?.EDITOR_PATH ??
      (process.env['DIGIPAIR_FACTORY_PATH']
        ? `${process.env['DIGIPAIR_FACTORY_PATH']}/digipairs`
        : './factory/digipairs');
    const { digipair } = params;

    const text = await promises.readFile(`${path}/${digipair}/schema.json`, 'utf8');
    const content = JSON.parse(text);

    const files = await promises.readdir(`${path}/${digipair}`);
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
            const { summary, metadata } = JSON.parse(actionContent);

            return {
              key: `/action-${name}`,
              value: {
                post: {
                  tags: metadata.tags ?? [],
                  summary,
                  parameters: metadata.parameters ?? [],
                  'x-events': [],
                },
              },
            };
          }),
      )
    ).reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});

    return { ...content, paths: { ...content.paths, ...actions } };
  }
}

export const metadata = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().metadata(params, pinsSettingsList, context);

export const boosts = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().boosts(params, pinsSettingsList, context);

export const schema = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().schema(params, pinsSettingsList, context);
