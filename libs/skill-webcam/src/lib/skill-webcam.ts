import { PinsSettings } from '@digipair/engine';
import * as NodeWebcam from 'node-webcam';

class WebcamService {
  async capture(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { width = 1280, height = 720, quality = 100, output = 'jpeg', device, verbose = false } = params;
    const opts: NodeWebcam.WebcamOptions = {
      width,
      height,
      quality,
      delay: 0,
      saveShots: false,
      output,
      device: device ?? false,
      callbackReturn: 'base64',
      verbose,
    };
    
    const webcam = NodeWebcam.create(opts);
    const result = await new Promise<string>((resolve, reject) => {
      webcam.capture("capture", (err, data) => {
          if (err) {
              reject(err);
          } else {
              resolve(data as string);
          }
      });
    });
    webcam.clear();

    return result;
  }

  async list(_params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    let webcam = NodeWebcam.create({});
    const list = (await new Promise<string[]>((resolve) => {
      webcam.list((data) => {
        resolve(data);
      });
    })).map(camera => camera.replace(/^=> /g, ''));
    webcam.clear();

    return list;
  }
}

export const capture = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebcamService().capture(params, pinsSettingsList, context);

export const list = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebcamService().list(params, pinsSettingsList, context);