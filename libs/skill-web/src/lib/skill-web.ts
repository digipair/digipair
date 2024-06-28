/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

class WebService {
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

  private findFactoryPinsSettings(path: string, item: PinsSettings[]): PinsSettings[] {
    const pinsSettings = path.split('.').reduce(
      (acc: any, key: string) => {
        if (key.indexOf('[') !== -1) {
          const index = parseInt((key.match(/\d+/) as any[])[0]);
          return acc[key.split('[')[0]][index];
        }

        return acc[key];
      },
      { [path.split('[')[0]]: item },
    );

    return pinsSettings.properties.execute;
  }

  private prepareBrowserPinsSettings(name: string, pinsSettings: PinsSettings[]): PinsSettings[] {
    const preparedPinsSettings = pinsSettings.map((item: PinsSettings, index: number) =>
      this.filteredWebPinsSettings(item, `${name}[${index}]`),
    ) as PinsSettings[];

    return preparedPinsSettings;
  }

  private mergeConttext(context: any, newContext: any) {
    const output = { ...context };

    for (const key in newContext) {
      if (Object.prototype.hasOwnProperty.call(newContext, key)) {
        if (
          typeof newContext[key] === 'object' &&
          newContext[key] !== null &&
          !Array.isArray(newContext[key]) &&
          Object.prototype.hasOwnProperty.call(context, key)
        ) {
          output[key] = { ...context[key], ...newContext[key] };
        } else if (typeof newContext[key] !== 'undefined') {
          output[key] = newContext[key];
        }
      }
    }

    return output;
  }

  async page(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      body,
      title = 'Digipair',
      favicon = 'https://res.cloudinary.com/do87nxq3l/image/upload/fl_preserve_transparency/v1717769492/logo-digipair_oyvvxz.png?_s=public-apps',
      styleHtml = '',
      styleBody = '',
      baseUrl = 'https://cdn.jsdelivr.net/npm',
      factoryInitialize = [],
      browserInitialize = [],
      browserLoad = [],
    } = params;
    const engineVersion = context.config.VERSIONS['@digipair/engine'] || 'latest';
    const preparedData = {} as { [key: string]: PinsSettings };

    if (
      context.request.method === 'POST' &&
      context.request.body?.type === 'DIGIPAIR_EXECUTE_FACTORY'
    ) {
      const param = context.request.body.params.path.split('[')[0];
      const pinsSettingsList = this.findFactoryPinsSettings(
        context.request.body.params.path,
        params[param],
      );
      return JSON.stringify(
        await executePinsList(
          pinsSettingsList,
          this.mergeConttext(context.request.body.context, context),
        ),
      );
    }

    await executePinsList(factoryInitialize, context);

    const html = `
<!DOCTYPE html>
<html style="${styleHtml}">
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      };
      
      config.set('LIBRARIES', { '@digipair/skill-web': skillWeb });
      config.set('BASE_URL', '${baseUrl}');

      const context = {
        config: {
          VERSIONS: ${JSON.stringify(context.config.VERSIONS || {})},
        },
        variables: ${JSON.stringify(context.variables || {})},
        request: ${JSON.stringify(context.request || {})},
      };

      await executePinsList(${JSON.stringify(
        this.prepareBrowserPinsSettings('browserInitialize', browserInitialize),
      )}, context);
      
      const pinsList = ${JSON.stringify(this.prepareBrowserPinsSettings('body', body))};
      for (let i = 0; i < pinsList.length; i++) {
        const item = pinsList[i];
        await generateElementFromPins(item, document.body, { ...context, data: ${JSON.stringify(
          preparedData,
        )} });
      }

      setTimeout(async () => {
        await executePinsList(${JSON.stringify(
          this.prepareBrowserPinsSettings('browserLoad', browserLoad),
        )}, context);
      }, 1);
    </script>
  </body>
</html>
    `;

    return html;
  }

  async javascript(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { execute } = params;
    const BASE_URL = 'https://cdn.jsdelivr.net/npm';
    const js = `
      import { executePinsList } from '${BASE_URL}/@digipair/engine/index.esm.js';

      const context = {
        variables: ${JSON.stringify(context.variables || {})},
        request: ${JSON.stringify(context.request || {})},
      };
      
      await executePinsList(${JSON.stringify(execute)}, context);
    `;

    return js;
  }
}

export const page = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebService().page(params, pinsSettingsList, context);

export const javascript = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebService().javascript(params, pinsSettingsList, context);
