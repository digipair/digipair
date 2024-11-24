/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

const API_ENDPOINT = 'https://api.linkedin.com';

class LinkedInService {
  private TOKEN: string;

  constructor(context: any, params: any) {
    this.TOKEN =
      context.privates.LINKEDIN_TOKEN ?? params?.LINKEDIN_TOKEN ?? process.env['LINKEDIN_TOKEN'];
  }

  async call(url: string, method: string, version: string, data: any, headers: any, signal: AbortSignal): Promise<any> {
    const response = await fetch(`${API_ENDPOINT}/${version}/${url}`, {
      signal,
      method,
      headers: {
        Authorization: `Bearer ${this.TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!response.ok) throw new Error('[SKILL-LINKEDIN] REQUEST FAILED: ' + response.status);
    return await response.json();
  }

  async create(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, body = {}, version = 'v2', headers = {} } = params;
    return await this.call(path, 'POST', version, body, headers, context.protected?.signal);
  }

  async read(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, version = 'v2', headers = {} } = params;
    return await this.call(path, 'GET', version, null, headers, context.protected?.signal);
  }

  async update(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, body = {}, version = 'v2', headers = {} } = params;
    return await this.call(path, 'PUT', version, body, headers, context.protected?.signal);
  }

  async partialUpdate(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, body = {}, version = 'v2', headers = {} } = params;
    return await this.call(path, 'PATCH', version, body, headers, context.protected?.signal);
  }


  async remove(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, version = 'v2', headers = {} } = params;
    return await this.call(path, 'DELETE', version, null, headers, context.protected?.signal);
  }

  async request(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, method = 'GET', body = null, version = 'v2', headers = {} } = params;
    return await this.call(path, method, version, body, headers, context.protected?.signal);
  }
}

export const create = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LinkedInService(context, params).create(params, pinsSettingsList, context);

export const read = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LinkedInService(context, params).read(params, pinsSettingsList, context);

export const update = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LinkedInService(context, params).update(params, pinsSettingsList, context);

export const partialUpdate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LinkedInService(context, params).update(params, pinsSettingsList, context);

export const remove = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LinkedInService(context, params).remove(params, pinsSettingsList, context);

export const request = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LinkedInService(context, params).request(params, pinsSettingsList, context);
