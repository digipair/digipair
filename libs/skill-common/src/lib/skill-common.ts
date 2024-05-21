import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';
import { join } from 'path';

class CommonService {
  async metadata(_params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const digipair = context.request.digipair;
    const content = await promises.readFile(
      join(__dirname, `/assets/digipairs/${digipair}/config.json`),
      'utf8',
    );
    const config = JSON.parse(content);

    const buffer = await promises.readFile(
      join(__dirname, `/assets/digipairs/${digipair}/avatar.png`),
    );
    const avatar = buffer.toString('base64');

    return { ...config.metadata, avatar: `data:image/png;base64,${avatar}` };
  }

  async boosts(_params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const digipair = context.request.digipair;
    const files = await promises.readdir(join(__dirname, `/assets/digipairs/${digipair}`));
    const boosts = await Promise.all(
      files
        .map(file => /^boost-(.*)\.json$/.exec(file)?.[1])
        .filter(name => name)
        .map(async name => {
          const content = await promises.readFile(
            join(__dirname, `/assets/digipairs/${digipair}/boost-${name}.json`),
            'utf8',
          );
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
