import { PinsSettings } from '@digipair/engine';

declare const Keycloak: any;

class WebKeycloakService {
  set _keycloakPromise(promise: any) {
    (window as any)['__DIGIPAIR_KEYCLOAK'] = promise;
  }
  get _keycloakPromise() {
    return (window as any)['__DIGIPAIR_KEYCLOAK'];
  }

  set _isLogged(isLogged: boolean) {
    (window as any)['__DIGIPAIR_KEYCLOAK_IS_LOGGED'] = isLogged;
  }
  get _isLogged() {
    return (window as any)['__DIGIPAIR_KEYCLOAK_IS_LOGGED'];
  }

  private async authentification(): Promise<any> {
    const keycloak = await this._keycloakPromise;

    if (this._isLogged) {
      await keycloak.updateToken(60000);
    }

    return keycloak;
  }

  async isLogged(_params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<boolean> {
    return this._isLogged;
  }

  async initialize(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<void> {
    const {
      url = context.variables.KEYCLOAK_URL,
      realm = context.variables.KEYCLOAK_REALM,
      clientId = context.variables.KEYCLOAK_CLIENTID,
    } = params;

    this._keycloakPromise = (async () => {
      const keycloak = new Keycloak({
        url,
        realm,
        clientId,
      });

      this._isLogged = false;
      try {
        this._isLogged = await keycloak.init({
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri: window.location.origin + '/public/silent-check-sso.html',
        });
      } catch (error) {
        console.error('keycloak error', error);
      }

      return keycloak;
    })();

    await this.authentification();
  }

  async token(_params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<string> {
    const authentification = await this.authentification();
    return authentification.token;
  }

  async logout(_params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<void> {
    const authentification = await this.authentification();
    authentification.logout();
  }

  async login(_params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<void> {
    const authentification = await this.authentification();
    await authentification.login();
  }
}

export const isLogged = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebKeycloakService().isLogged(params, pinsSettingsList, context);

export const initialize = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebKeycloakService().initialize(params, pinsSettingsList, context);

export const token = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebKeycloakService().token(params, pinsSettingsList, context);

export const logout = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebKeycloakService().logout(params, pinsSettingsList, context);

export const login = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebKeycloakService().login(params, pinsSettingsList, context);
