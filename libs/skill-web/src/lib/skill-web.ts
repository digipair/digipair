/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class WebService {
  async page(params: any, pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { title = 'Digipair' } = params;
    const BASE_URL = 'https://cdn.jsdelivr.net/npm';
    const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
  </head>
  <body>
    <script type="module">
      import { generateElementFromPins } from '${BASE_URL}/@digipair/engine/index.esm.js';
      import { config } from '${BASE_URL}/@digipair/skill-web-chatbot/index.esm.js';
      
      config.set('API_URL', window.location.origin);

      const context = {
        variables: ${JSON.stringify(context.variables || {})},
      };
      const options = {
        libraries: {},
      };
      const pinsList = ${JSON.stringify(pinsSettingsList)};
      for (let i = 0; i < pinsList.length; i++) {
        const item = pinsList[i];
        const child = await generateElementFromPins(item, context, options);
        document.body.appendChild(child);
      }
    </script>
  </body>
</html>
    `;

    return html;
  }
}

export const page = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebService().page(params, pinsSettingsList, context);
