/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { AuthorizationCode, ClientCredentials, ResourceOwnerPassword } from 'simple-oauth2';

class OAuth2Service {
  async authorizationCodeUrl(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { config } = params;

    const client = new AuthorizationCode(config);
    return client.authorizeURL(config);
  }

  async authorizationCodeAccessToken(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { config, tokenParams } = params;

    const client = new AuthorizationCode(config);
    return client.getToken(tokenParams);
  }

  async authorizationCodeCreateToken(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { config, accessToken } = params;

    const client = new AuthorizationCode(config);
    return client.createToken(accessToken);
  }

  async resourceOwnerPasswordAccessToken(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { config, tokenParams } = params;

    const client = new ResourceOwnerPassword(config);
    return client.getToken(tokenParams);
  }

  async resourceOwnerPasswordCreateToken(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { config, accessToken } = params;

    const client = new ResourceOwnerPassword(config);
    return client.createToken(accessToken);
  }

  async clientCredentialsAccessToken(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { config, tokenParams } = params;

    const client = new ClientCredentials(config);
    return client.getToken(tokenParams);
  }

  async clientCredentialsCreateToken(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { config, accessToken } = params;

    const client = new ClientCredentials(config);
    return client.createToken(accessToken);
  }

  async tokenExpired(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { token } = params;

    return token.expired();
  }

  async tokenRefresh(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { token } = params;

    return token.refresh();
  }

  async tokenRevoke(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { token, type } = params;

    return token.revoke(type);
  }

  async tokenRevokeAll(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { token } = params;

    return token.revokeAll();
  }
}

export const authorizationCodeUrl = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OAuth2Service().authorizationCodeUrl(params, pinsSettingsList, context);

export const authorizationCodeAccessToken = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new OAuth2Service().authorizationCodeAccessToken(params, pinsSettingsList, context);

export const authorizationCodeCreateToken = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new OAuth2Service().authorizationCodeCreateToken(params, pinsSettingsList, context);

export const resourceOwnerPasswordAccessToken = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new OAuth2Service().resourceOwnerPasswordAccessToken(params, pinsSettingsList, context);

export const resourceOwnerPasswordCreateToken = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new OAuth2Service().resourceOwnerPasswordCreateToken(params, pinsSettingsList, context);

export const clientCredentialsAccessToken = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new OAuth2Service().clientCredentialsAccessToken(params, pinsSettingsList, context);

export const clientCredentialsCreateToken = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new OAuth2Service().clientCredentialsCreateToken(params, pinsSettingsList, context);

export const tokenExpired = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OAuth2Service().tokenExpired(params, pinsSettingsList, context);

export const tokenRefresh = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OAuth2Service().tokenRefresh(params, pinsSettingsList, context);

export const tokenRevoke = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OAuth2Service().tokenRevoke(params, pinsSettingsList, context);

export const tokenRevokeAll = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OAuth2Service().tokenRevokeAll(params, pinsSettingsList, context);
