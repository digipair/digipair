/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import * as msal from '@azure/msal-node';

const AUTHORITY_URL = 'https://login.microsoftonline.com';
const API_ENDPOINT = 'https://graph.microsoft.com';

class MicrosoftService {
  private OAUTH_CLIENT_ID: string;
  private OAUTH_CLIENT_SECRET: string;
  private TENANT_ID: string;

  constructor(context: any, params: any) {
    this.OAUTH_CLIENT_ID =
      context.privates.MICROSOFT_OAUTH_CLIENT_ID ??
      params?.MICROSOFT_OAUTH_CLIENT_ID ??
      process.env['MICROSOFT_OAUTH_CLIENT_ID'];
    this.OAUTH_CLIENT_SECRET =
      context.privates.MICROSOFT_OAUTH_CLIENT_SECRET ??
      params?.MICROSOFT_OAUTH_CLIENT_SECRET ??
      process.env['MICROSOFT_OAUTH_CLIENT_SECRET'];
    this.TENANT_ID =
      context.privates.MICROSOFT_TENANT_ID ??
      params?.MICROSOFT_TENANT_ID ??
      process.env['MICROSOFT_TENANT_ID'];
  }

  private async getAccessToken() {
    // Configuration MSAL
    const config = {
      auth: {
        clientId: this.OAUTH_CLIENT_ID,
        authority: `${AUTHORITY_URL}/${this.TENANT_ID}`,
        clientSecret: this.OAUTH_CLIENT_SECRET,
      },
    };
    const cca = new msal.ConfidentialClientApplication(config);

    const clientCredentialRequest = {
      scopes: ['https://graph.microsoft.com/.default'],
    };

    try {
      const response: any = await cca.acquireTokenByClientCredential(clientCredentialRequest);
      return response.accessToken;
    } catch (error) {
      console.error(`[SKILL-MICROSOFT] ACCESS TOKEN FAILED : ${error}`);
      throw error;
    }
  }

  async call(url: string, method: string, version: string, data: any = null, headers: any = {}) {
    const accessToken = await this.getAccessToken();

    const response = await fetch(`${API_ENDPOINT}/${version}/${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body:
        method.toUpperCase() === 'GET' || method.toUpperCase() === 'HEAD'
          ? undefined
          : JSON.stringify(data),
    });
    if (!response.ok) throw new Error('[SKILL-MICROSOFT] REQUEST FAILED: ' + response.status);
    return !response.headers.has('content-length') ||
      (response.headers.get('content-length') as unknown as number) > 0
      ? await response.json()
      : {};
  }

  async create(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, body = {}, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'POST', version, body, headers);
  }

  async read(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'GET', version, null, headers);
  }

  async update(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, body = {}, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'PUT', version, body, headers);
  }

  async partialUpdate(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, body = {}, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'PATCH', version, body, headers);
  }

  async remove(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'DELETE', version, null, headers);
  }

  async request(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { path, method = 'GET', body = null, version = 'v1.0', headers = {} } = params;
    return await this.call(path, method, version, body, headers);
  }
}

export const create = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MicrosoftService(context, params).create(params, pinsSettingsList, context);

export const read = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MicrosoftService(context, params).read(params, pinsSettingsList, context);

export const update = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MicrosoftService(context, params).update(params, pinsSettingsList, context);

export const partialUpdate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MicrosoftService(context, params).update(params, pinsSettingsList, context);

export const remove = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MicrosoftService(context, params).remove(params, pinsSettingsList, context);

export const request = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MicrosoftService(context, params).request(params, pinsSettingsList, context);
