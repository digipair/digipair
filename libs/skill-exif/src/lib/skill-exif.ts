/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import * as ExifParser from 'exif-parser';

class ExifService {
  async parse(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { content } = params;
    const buffer = Buffer.from(content.replace(/^data:.*;base64,/, ''), 'base64');
    const parse = ExifParser.create(buffer);

    return parse.parse();
  }
}

export const parse = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ExifService().parse(params, pinsSettingsList, context);
