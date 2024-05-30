import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';

class CommonService {
  async metadata(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path = context.privates?.EDITOR_PATH ?? './dist/apps/factory/assets/digipairs';
    const { digipair } = params;
    const content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(content);

    const buffer = await promises.readFile(`${path}/${digipair}/avatar.png`);
    const avatar = buffer.toString('base64');

    return { ...config.metadata, avatar: `data:image/png;base64,${avatar}` };
  }

  async boosts(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const path = context.privates?.EDITOR_PATH ?? './dist/apps/factory/assets/digipairs';
    const { digipair } = params;
    const files = await promises.readdir(`${path}/${digipair}`);
    const boosts = await Promise.all(
      files
        .map(file => /^boost-(.*)\.json$/.exec(file)?.[1])
        .filter(name => name)
        .map(async name => {
          const content = await promises.readFile(`${path}/${digipair}/boost-${name}.json`, 'utf8');
          const { description, metadata } = JSON.parse(content);

          return {
            name: `boost-${name}`,
            description,
            metadata,
          };
        }),
    );

    return boosts;
  }
}

export const metadata = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().metadata(params, pinsSettingsList, context);

export const boosts = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CommonService().boosts(params, pinsSettingsList, context);
