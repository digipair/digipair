/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

class KeycloakService {
  private filteredWebPinsSettings(item: any, path: string): any {
    if (Array.isArray(item)) {
      return item.map((subItem: any, subIndex: number) =>
        this.filteredWebPinsSettings(subItem, `${path}[${subIndex}]`),
      );
    }

    if (typeof item !== 'object' || item === null) {
      return item;
    }

    if (item.library === '@digipair/skill-web' && item.element === 'executeFactory') {
      return {
        library: item.library,
        element: item.element,
        properties: {
          path,
        },
      };
    }

    const result = {} as any;
    Object.entries(item).forEach(([key, value]) => {
      result[key] = this.filteredWebPinsSettings(value, `${path}.${key}`);
    });

    return result;
  }

  private findFactoryPinsSettings(path: string, body: PinsSettings[]): PinsSettings[] {
    const pinsSettings = path.split('.').reduce(
      (acc: any, key: string) => {
        if (key.indexOf('[') !== -1) {
          const index = parseInt((key.match(/\d+/) as any[])[0]);
          return acc[key.split('[')[0]][index];
        }

        return acc[key];
      },
      { body },
    );

    return pinsSettings.properties.execute;
  }

  private skillKeycloak = `(() => {
    class DataManagementService {
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
        const { url = context.variables.KEYCLOAK_URL, realm = context.variables.KEYCLOAK_REALM, clientId = context.variables.KEYCLOAK_CLIENTID } = params;
    
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
              silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
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
    
    return {
      isLogged: (params: any, pinsSettingsList: PinsSettings[], context: any) =>
        new DataManagementService().isLogged(params, pinsSettingsList, context)
    
      initialize: (params: any, pinsSettingsList: PinsSettings[], context: any) =>
        new DataManagementService().initialize(params, pinsSettingsList, context)
    
      token: (params: any, pinsSettingsList: PinsSettings[], context: any) =>
        new DataManagementService().token(params, pinsSettingsList, context)
    
      logout: (params: any, pinsSettingsList: PinsSettings[], context: any) =>
        new DataManagementService().logout(params, pinsSettingsList, context)
    
      login: (params: any, pinsSettingsList: PinsSettings[], context: any) =>
        new DataManagementService().login(params, pinsSettingsList, context)
    }
  )()`;

  async page(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      body,
      title = 'Digipair',
      favicon = 'https://www.digipair.ai/assets/images/favicon.ico',
      styleHtml = '',
      styleBody = '',
      baseUrl = 'https://cdn.jsdelivr.net/npm',
      libraries = {},
      factoryInitialize = [],
      browserInitialize = [],
      browserLoad = [],
      logged = [],
      unlogged = [],
    } = params;
    const engineVersion = libraries['@digipair/engine'] || 'latest';
    const preparedData = {} as { [key: string]: PinsSettings };

    if (
      context.request.method === 'POST' &&
      context.request.body?.type === 'DIGIPAIR_EXECUTE_FACTORY'
    ) {
      const pinsSettingsList = this.findFactoryPinsSettings(context.request.body.params.path, body);
      return await executePinsList(pinsSettingsList, {
        ...context.request.body.context,
        ...context,
      });
    }

    await executePinsList(factoryInitialize, context);

    const preparedBody = body.map((item: PinsSettings, index: number) =>
      this.filteredWebPinsSettings(item, `body[${index}]`),
    ) as PinsSettings[];

    const html = `
<!DOCTYPE html>
<html style="${styleHtml}">
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
    <link rel="icon" type="image/x-icon" href="${favicon}">
  </head>
  <body style="${styleBody}">
    <script type="module">
      import { config, executePinsList, generateElementFromPins } from '${baseUrl}/@digipair/engine@${engineVersion}/index.esm.js';

      const skillWeb = {
        executeFactory: async (params, pinsSettingsList, context) => {
          const result = await fetch(window.location, {
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({ type: 'DIGIPAIR_EXECUTE_FACTORY', params, pinsSettingsList, context }),
            method: 'POST',
          });

          return await result.json();
        },
        requestUpdate: async (params, pinsSettingsList, context) => {
          const { selector } = params;

          const elements = document.querySelectorAll(selector);
          for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.requestUpdate();
          }

          return null;
        },
      };

      const skillKeycloak = ${this.skillKeycloak};
      
      config.set('LIBRARIES', { '@digipair/skill-web': skillWeb,  '@digipair/skill-keycloak': skillKeycloak, ...${JSON.stringify(
        libraries,
      )} });
      config.set('BASE_URL', '${baseUrl}');
     
      const context = {
        variables: ${JSON.stringify(context.variables || {})},
        request: ${JSON.stringify(context.request || {})},
      };

      // Keycloak initialization
      await skillKeycloak.initialize({ 
        url: ${JSON.stringify(params.url)}, 
        realm: ${JSON.stringify(params.realm)}, 
        clientId: ${JSON.stringify(params.clientId)} }, [], context);
  
      if (window['__DIGIPAIR_KEYCLOAK_IS_LOGGED']) {
        await executePinsList(${JSON.stringify(logged)}, context);
      } else {
        await executePinsList(${JSON.stringify(unlogged)}, context);
      }

      context.keycloak = { isLogged: window['__DIGIPAIR_KEYCLOAK_IS_LOGGED'] };

      // Pins initialization
      await executePinsList(${JSON.stringify(browserInitialize)}, context);
      
      const options = {
        libraries: {},
      };
      const pinsList = ${JSON.stringify(preparedBody)};
      for (let i = 0; i < pinsList.length; i++) {
        const item = pinsList[i];
        await generateElementFromPins(item, document.body, { ...context, data: ${JSON.stringify(
          preparedData,
        )} }, options);
      }

      setTimeout(async () => {
        await executePinsList(${JSON.stringify(browserLoad)}, context);
      }, 1);
    </script>
  </body>
</html>
    `;

    return html;
  }
}

export const page = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new KeycloakService().page(params, pinsSettingsList, context);
