/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

class WebService {
  async page(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      body,
      data = [] as { name: string; execute: PinsSettings[] }[],
      title = 'Digipair',
      baseUrl = 'https://cdn.jsdelivr.net/npm',
      libraries = {},
    } = params;
    const engineVersion = libraries['@digipair/engine'] || 'latest';
    const preparedData = {} as { [key: string]: PinsSettings };

    for (const item of data) {
      preparedData[item.name] = await executePinsList(item.value, context);
    }

    const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
  </head>
  <body>
    <script type="module">
      import { config, generateElementFromPins } from '${baseUrl}/@digipair/engine@${engineVersion}/index.esm.js';
      
      config.set('LIBRARIES', ${JSON.stringify(libraries)});
      config.set('BASE_URL', '${baseUrl}');

      const context = {
        variables: ${JSON.stringify(context.variables || {})},
        request: ${JSON.stringify(context.request || {})},
      };
      const options = {
        libraries: {},
      };
      const pinsList = ${JSON.stringify(body)};
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
