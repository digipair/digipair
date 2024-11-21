/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class HttpService {
  private IS_JSON!: boolean;

  constructor(_context: any, params: any) {
    const { IS_JSON = true } = params;

    this.IS_JSON = IS_JSON;
  }

  async call(url: string, method: string, data: any = null, headers: any = {}) {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: this.IS_JSON ? 'application/json' : '*/*',
        ...(data ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
      },
      body: data ? (this.IS_JSON ? JSON.stringify(data) : data) : undefined,
    });
    if (!response.ok) throw new Error('[SKILL-HTTP] REQUEST FAILED: ' + response.status);
    return this.IS_JSON ? response.json() : response.text();
  }

  async create(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, body = {}, headers = {} } = params;
    return await this.call(path, 'POST', body, headers);
  }

  async read(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, headers = {} } = params;
    return await this.call(path, 'GET', null, headers);
  }

  async update(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, body = {}, headers = {} } = params;
    return await this.call(path, 'PUT', body, headers);
  }

  async partialUpdate(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, body = {}, headers = {} } = params;
    return await this.call(path, 'PATCH', body, headers);
  }

  async remove(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, headers = {} } = params;
    return await this.call(path, 'DELETE', null, headers);
  }

  async request(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, method = 'GET', body = null, headers = {} } = params;
    return await this.call(path, method, body, headers);
  }

  async upload(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, parameters, method = 'POST', headers = {} } = params;
    const formData = typeof window !== 'undefined' ? new FormData() : new (require('form-data'))();

    // Ajout des paramètres au FormData
    parameters.forEach((param: any) => {
      if (!Array.isArray(param.value)) {
        this.appendParam(formData, param);
      } else {
        param.value.forEach((item: any) => {
          this.appendParam(formData, { ...param, value: item });
        });
      }
    });

    const response = await fetch(path, {
      method,
      headers: {
        ...formData.getHeaders(),
        Accept: this.IS_JSON ? 'application/json' : '*/*',
        ...headers,
      },
      body: formData.getBuffer(),
    });
    if (!response.ok) throw new Error('[SKILL-HTTP] REQUEST FAILED: ' + response.status);
    return this.IS_JSON ? response.json() : response.text();
  }

  private appendParam(formData: any, param: any) {
    if (param.type == 'text') {
      formData.append(param.name, param.value);
    } else if (param.type === 'file') {
      // Gestion des fichiers encodés en base64
      const matches = param.value.match(/^data:(.+);base64,(.+)$/);

      if (!matches || matches.length !== 3) {
        throw new Error(`Bad base64 format for ${param.name}`);
      }

      const base64Data = matches[2];
      const buffer = Buffer.from(base64Data, 'base64');
      formData.append(param.name, buffer, {
        filename: param.name + '.' + matches[1].split('/')[1],
        contentType: matches[1],
    });
    }
  }
}

export const create = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HttpService(context, params).create(params, pinsSettingsList, context);

export const read = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HttpService(context, params).read(params, pinsSettingsList, context);

export const update = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HttpService(context, params).update(params, pinsSettingsList, context);

export const partialUpdate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HttpService(context, params).update(params, pinsSettingsList, context);

export const remove = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HttpService(context, params).remove(params, pinsSettingsList, context);

export const request = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HttpService(context, params).request(params, pinsSettingsList, context);

export const upload = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HttpService(context, params).upload(params, pinsSettingsList, context);
