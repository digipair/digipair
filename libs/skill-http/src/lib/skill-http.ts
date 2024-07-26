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
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data ? (this.IS_JSON ? JSON.stringify(data) : data) : undefined,
    });
    if (!response.ok) throw new Error('[SKILL-HTTP] REQUEST FAILED: ' + response.status);
    return (await this.IS_JSON) ? response.json() : response.text();
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