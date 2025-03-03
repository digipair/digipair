/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';

class DocxTemplaterService {
  private base64ToBuffer(base64: string) {
    const data = base64.replace(/^data:.*;base64,/, '');
    const buffer = Buffer.from(data, 'base64');
    return buffer;
  }

  async generate(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { template, data } = params;

    const content = this.base64ToBuffer(template);
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip);
    doc.render(data);
    const buffer = doc.getZip().generate({ type: 'base64' });

    return `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${buffer}`;
  }
}

export const generate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DocxTemplaterService().generate(params, pinsSettingsList, context);
