/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';
const multer = require('multer');
const uploadMulter = multer({ storage: multer.memoryStorage() });

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

  async upload(_params: any, _pinsSettingsList: PinsSettings[], context: any) {
    await new Promise((resolve, reject) =>
      uploadMulter.any()(context.protected.req, context.protected.res, (err: any) =>
        err ? reject(err) : resolve(void 0),
      ),
    );

    return {
      body: context.protected.req.body,
      files: context.protected.req.files.map((file: any) => ({
        fieldname: file.fieldname,
        originalname: file.originalname,
        encoding: file.encoding,
        mimetype: file.mimetype,
        size: file.size,
        content: `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
      })),
    };
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

export const upload = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ServiceService().upload(params, pinsSettingsList, context);
