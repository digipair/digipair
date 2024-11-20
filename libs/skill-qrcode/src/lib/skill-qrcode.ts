/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import jsQR from 'jsqr';
import QRCode from 'qrcode';

class JsQrService {
  async encode(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { data } = params;
    const qrCodeDataURL = await QRCode.toDataURL(data);

    return qrCodeDataURL;
  }
  
  async decode(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { image } = params;

    const { createCanvas, loadImage } =
      typeof window === 'undefined'
        ? require('canvas')
        : {
            createCanvas: () => document.createElement('canvas'),
            loadImage: (src: any) =>
              new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
              }),
          };
    const matches = image.match(/^data:(.+);base64,(.+)$/);

    if (!matches || matches.length !== 3) {
      throw new Error(`Bad base64 format`);
    }

    const buffer = Buffer.from(matches[2], 'base64');
    const img = await loadImage(buffer);
    const canvas = createCanvas(img.width, img.height);
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);

    // Get the image data from the canvas
    const { data, width, height } = context.getImageData(0, 0, img.width, img.height);

    const qrCode = jsQR(new Uint8ClampedArray(data), width, height);

    return qrCode?.data;
  }
}


export const encode = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new JsQrService().encode(params, pinsSettingsList, context);

export const decode = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new JsQrService().decode(params, pinsSettingsList, context);
