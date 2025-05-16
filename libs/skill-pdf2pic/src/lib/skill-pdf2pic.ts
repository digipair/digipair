import { PinsSettings } from '@digipair/engine';
import { fromBase64 } from '@diegoooo/pdf2pic';
import { PDFDocument } from 'pdf-lib';

class PDFService {
  private base64ToBuffer(base64: string): Buffer {
    const data = base64.replace(/^data:.*;base64,/, '');
    return Buffer.from(data, 'base64');
  }

  async convert(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { file, page = 1, format = 'jpeg', density = 72 } = params;

    const buffer = this.base64ToBuffer(file);
    const document = await PDFDocument.load(buffer);
    const pdfPage = document.getPages()[page - 1];
    const { width, height } = pdfPage.getSize();

    const widthPx = (width / 72) * density;
    const heightPx = (height / 72) * density;

    const result = await (fromBase64(file, {
      density,
      format,
      preserveAspectRatio: true,
      width: widthPx,
      height: heightPx,
    })(page, { responseType: 'base64' }));

    return `data:image/${format};base64,${result.base64}`;
  }
}

export const convert = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PDFService().convert(params, pinsSettingsList, context);
