import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';
import { join } from 'path';

class EditorService {
  async read(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    let text: string;
    const { digipair, reasoning } = params;

    text = await promises.readFile(
      join(__dirname, `/assets/digipairs/${digipair}/config.json`),
      'utf8',
    );
    const config = JSON.parse(text);

    text = await promises.readFile(
      join(__dirname, `/assets/digipairs/${digipair}/${reasoning}.json`),
      'utf8',
    );
    const content = JSON.parse(text);

    return {
      libraries: config.libraries,
      content,
    };
  }
}

export const read = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().read(params, pinsSettingsList, context);
