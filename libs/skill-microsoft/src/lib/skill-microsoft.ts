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
  private AUTH_TYPE: 'ClientCredential' | 'RefreshToken';
  private REFRESH_TOKEN?: string;

  constructor(context: any, params: any) {
    this.OAUTH_CLIENT_ID =
      params?.OAUTH_CLIENT_ID ??
      context.privates.MICROSOFT_OAUTH_CLIENT_ID ??
      process.env['MICROSOFT_OAUTH_CLIENT_ID'];
    this.OAUTH_CLIENT_SECRET =
      params?.OAUTH_CLIENT_SECRET ??
      context.privates.MICROSOFT_OAUTH_CLIENT_SECRET ??
      process.env['MICROSOFT_OAUTH_CLIENT_SECRET'];
    this.TENANT_ID =
      params?.TENANT_ID ??
      context.privates.MICROSOFT_TENANT_ID ??
      process.env['MICROSOFT_TENANT_ID'];
    this.AUTH_TYPE = params?.AUTH_TYPE ?? 'ClientCredential';
    this.REFRESH_TOKEN = params?.REFRESH_TOKEN;
  }

  private async getAccessToken(authType: 'ClientCredential' | 'RefreshToken' = 'ClientCredential', refreshToken?: string) {
    // Configuration MSAL
    const config = {
      auth: {
        clientId: this.OAUTH_CLIENT_ID,
        authority: `${AUTHORITY_URL}/${this.TENANT_ID}`,
        clientSecret: this.OAUTH_CLIENT_SECRET,
      },
    };
    const cca = new msal.ConfidentialClientApplication(config);

    try {
      if (authType === 'ClientCredential') {
        const clientCredentialRequest = {
          scopes: ['https://graph.microsoft.com/.default'],
        };
        const response: any = await cca.acquireTokenByClientCredential(clientCredentialRequest);
        return response.accessToken;
      } else if (authType === 'RefreshToken') {
        if (!refreshToken) {
          throw new Error('[SKILL-MICROSOFT] RefreshToken is required for RefreshToken auth type');
        }
        const refreshTokenRequest = {
          refreshToken: refreshToken,
          scopes: ['https://graph.microsoft.com/.default'],
        };
        const response: any = await cca.acquireTokenByRefreshToken(refreshTokenRequest);
        return response.accessToken;
      } else {
        throw new Error(`[SKILL-MICROSOFT] Unsupported auth type: ${authType}`);
      }
    } catch (error) {
      console.error(`[SKILL-MICROSOFT] ACCESS TOKEN FAILED : ${error}`);
      throw error;
    }
  }

  async call(url: string, method: string, version: string, data: any, headers: any, signal: AbortSignal) {
    const accessToken = await this.getAccessToken(this.AUTH_TYPE, this.REFRESH_TOKEN);

    const response = await fetch(`${API_ENDPOINT}/${version}/${url}`, {
      signal,
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

  async create(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, body = {}, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'POST', version, body, headers, context.protected?.signal);
  }

  async read(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'GET', version, null, headers, context.protected?.signal);
  }

  async update(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, body = {}, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'PUT', version, body, headers, context.protected?.signal);
  }

  async partialUpdate(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, body = {}, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'PATCH', version, body, headers, context.protected?.signal);
  }

  async remove(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, version = 'v1.0', headers = {} } = params;
    return await this.call(path, 'DELETE', version, null, headers, context.protected?.signal);
  }

  async request(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { path, method = 'GET', body = null, version = 'v1.0', headers = {} } = params;
    return await this.call(path, method, version, body, headers, context.protected?.signal);
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
