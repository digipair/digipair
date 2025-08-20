/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

class ServiceService {
  async service(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;

    return await executePinsList(execute, context, `${context.__PATH__}.execute`);
  }

  async send(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { body } = params;
    return context.protected.res.send(body);
  }

  async status(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { code = 200 } = params;
    return context.protected.res.status(code);
  }

  async headers(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { headers } = params;
    return context.protected.res.set(headers);
  }

  async files(_params: any, _pinsSettingsList: PinsSettings[], context: any) {
    await new Promise((resolve, reject) =>
      upload.any()(context.protected.req, context.protected.res, (err: any) =>
        err ? reject(err) : resolve(void 0),
      ),
    );

    return null;
  }
}

export const service = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ServiceService().service(params, pinsSettingsList, context);

export const send = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ServiceService().send(params, pinsSettingsList, context);

export const status = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ServiceService().status(params, pinsSettingsList, context);

export const headers = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ServiceService().headers(params, pinsSettingsList, context);

export const files = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ServiceService().files(params, pinsSettingsList, context);
