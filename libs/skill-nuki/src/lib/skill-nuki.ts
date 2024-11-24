/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class NukiService {
  private NUKI_API_KEY: string;
  private API_ENDPOINT: string;

  constructor(context: any, params: any) {
    this.NUKI_API_KEY =
      context.privates.NUKI_API_KEY ?? params?.NUKI_API_KEY ?? process.env['NUKI_API_KEY'];
    this.API_ENDPOINT =
      context.privates.NUKI_API_ENDPOINT ??
      params?.NUKI_API_ENDPOINT ??
      process.env['NUKI_API_ENDPOINT'] ??
      'https://api.nuki.io/smartlock';
  }

  async call(url: string, method: string, data: any, headers: any, signal: AbortSignal) {
    const response = await fetch(`${this.API_ENDPOINT}${url}`, {
      signal,
      method,
      headers: {
        Authorization: 'Bearer ' + this.NUKI_API_KEY,
        ...headers,
      },
      body: data,
    });
    if (!response.ok) throw new Error('[SKILL-NUKI] REQUEST FAILED: ' + response.status);
    return await response.json();
  }

  async unlock(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { id } = params;
    return await this.call(`/${id}/action/unlock`, 'POST', null, {}, context.protected?.signal);
  }

  async lock(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { id } = params;
    return await this.call(`/${id}/action/lock`, 'POST', null, {}, context.protected?.signal);
  }
}

export const lock = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NukiService(context, params).lock(params, pinsSettingsList, context);

export const unlock = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NukiService(context, params).unlock(params, pinsSettingsList, context);
