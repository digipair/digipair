/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';

class DocxTemplaterService {
  async generate(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { template, data } = params;

    const content = Buffer.from(template, 'base64');
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip);
    doc.setData(data);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'base64' });

    return buffer;
  }
}

export const generate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DocxTemplaterService().generate(params, pinsSettingsList, context);
