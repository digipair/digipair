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

  async page(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      body,
      data = [] as { name: string; execute: PinsSettings[] }[],
      title = 'Digipair',
      favicon = 'https://www.digipair.ai/assets/images/favicon.ico',
      styleHtml = '',
      styleBody = '',
      baseUrl = 'https://cdn.jsdelivr.net/npm',
      libraries = {},
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

    for (const item of data) {
      preparedData[item.name] = await executePinsList(item.value, context);
    }

    const preparedBody = body.map((item: PinsSettings, index: number) =>
      this.filteredWebPinsSettings(item, `body[${index}]`),
    ) as PinsSettings[];

    const html = `
<!DOCTYPE html>
<html style=${styleHtml}>
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
    <link rel="icon" type="image/x-icon" href="${favicon}">
  </head>
  <body style=${styleBody}>
    <script type="module">
      import { config, generateElementFromPins } from '${baseUrl}/@digipair/engine@${engineVersion}/index.esm.js';

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
        }
      };
      
      config.set('LIBRARIES', { '@digipair/skill-web': skillWeb, ...${JSON.stringify(libraries)} });
      config.set('BASE_URL', '${baseUrl}');

      const context = {
        variables: ${JSON.stringify(context.variables || {})},
        request: ${JSON.stringify(context.request || {})},
      };
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
      import { executePins } from '${BASE_URL}/@digipair/engine/index.esm.js';

      const context = {
        variables: ${JSON.stringify(context.variables || {})},
        request: ${JSON.stringify(context.request || {})},
      };
      const options = {
        libraries: {},
      };
      
      executePins(${JSON.stringify(execute)}, context, options);
    `;

    return js;
  }
}

export const page = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebService().page(params, pinsSettingsList, context);

export const javascript = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebService().javascript(params, pinsSettingsList, context);
