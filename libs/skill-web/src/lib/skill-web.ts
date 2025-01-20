/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList, generateElementFromPins } from '@digipair/engine';
import { JSDOM } from 'jsdom';
import { readFile } from 'fs/promises';
import { lookup } from 'mime-types';

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
          key !== 'protected' &&
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

  private async pins2html(pins: PinsSettings[], context: any): Promise<string> {
    const dom = new JSDOM();
    const element = dom.window.document.createElement('section');

    await this.generateElementsFromPins(
      pins,
      element,
      {
        config: {
          VERSIONS: context.config.VERSIONS || {},
        },
        variables: context.variables || {},
        request: context.request || {},
      },
      dom.window.document,
    );

    return element.innerHTML;
  }

  private async generateElementsFromPins(
    pinsList: PinsSettings[],
    parent: Element,
    context: any,
    document: Document,
  ): Promise<void> {
    for (let i = 0; i < pinsList.length; i++) {
      const item = pinsList[i];
      await generateElementFromPins(item, parent, context, document, { import: false });
    }
  }

  async page(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      body,
      head,
      ssr = true,
      styleHtml = '',
      styleBody = '',
      factoryInitialize = [],
      browserInitialize = [],
      browserLoad = [],
    } = params;
    const engineVersion = context.config.VERSIONS['@digipair/engine'] || 'latest';
    const preparedData = {} as { [key: string]: PinsSettings };

    if (context.request.params[0] === '__digipair_www__') {
      let result: any;

      try {
        const fileUrl = context.protected.req.path.split('__digipair_www__/')[1];

        if (!fileUrl) {
          context.protected.res.status(404);
          return { status: 'not found' };
        }

        const regex = /^(.*?[^@]+)@(.*?[^\/]+)\/(.*?.+)$/;
        const match = fileUrl.match(regex);

        if (!match) {
          context.protected.res.status(404);
          return { status: 'not found' };
        }

        const library = match[1];
        if (
          library !== '@digipair/engine' &&
          !context.config.VERSIONS[library] &&
          !context.config.WEB_VERSIONS[library]
        ) {
          context.protected.res.status(404);
          return { status: 'not found' };
        }

        if (context.config.VERSIONS[library]) {
          const infos = require(`${library}/package.json`);
          if (!(infos.keywords?.indexOf('digipair') >= 0 && infos.keywords?.indexOf('web') >= 0)) {
            context.protected.res.status(404);
            return { status: 'not found' };
          }
        }

        const path = match[3];
        let filePath = require.resolve(`${library}/${path}`);

        const mimeType = lookup(filePath) || 'application/octet-stream';
        context.protected.res.setHeader('Content-Type', mimeType);

        result = await readFile(filePath, 'utf8');
      } catch (error) {
        context.protected.res.status(404);
        result = { status: 'not found' };
      }

      return result;
    }

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

    const path = context.protected.req.path.replace(/\/$/g, '');
    const baseUrl =
      context.protected.req.protocol +
      '://' +
      context.protected.req.headers.host +
      (context.request.params.length <= 0 || context.request.params[0] === ''
        ? path
        : path.substring(0, path.length - context.request.params.join('/').length - 1)) +
      '/__digipair_www__';

    await executePinsList(factoryInitialize, context);

    const html = `
<!DOCTYPE html>
<html style="${styleHtml}">
  <head>
    ${
      head
        ? await this.pins2html(head, context)
        : `
          <meta charset="UTF-8" />
          <title>Digipair</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/do87nxq3l/image/upload/fl_preserve_transparency/v1717769492/logo-digipair_oyvvxz.png?_s=public-apps">
      `
    }
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
      document.querySelectorAll('body > [data-digipair-pins]').forEach((element) => element.remove()); // Remove SSR elements
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

    ${ssr ? await this.pins2html(body, context) : ''}
  </body>
</html>
    `;

    return html;
  }
}

export const page = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebService().page(params, pinsSettingsList, context);
