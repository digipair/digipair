import * as fs from 'fs';
import { JSDOM } from 'jsdom';

class SchemaSprectrum {
  async start() {
    console.log('[start]');

    let listElement = await this.getElementList();
    let list: any[] = [];

    for (const link of listElement) {
      list.push(await this.element(link));
    }

    list = list.filter(item => item !== null);

    // let nextLink = '/docs/api/action-sheet';
    // let infos;

    // while (nextLink !== '/docs/api') {
    //   console.log('[start] ' + nextLink);
    //   const result = await this.element(nextLink);

    //   infos = result.infos;
    //   nextLink = result.nextLink;

    //   if (infos.element === 'ion-icon') {
    //     nextLink = '/docs/api/img';
    //   }

    //   list.push(infos);
    // }

    console.log('[end]');

    return list;
  }

  async getElementList() {
    console.log('[start list elements]');

    const response = await fetch('https://opensource.adobe.com/spectrum-web-components/');
    const result = await response.text();
    const html = new JSDOM(result);
    const elements = html.window.document.querySelectorAll('[label="Components"] a');

    console.log('[end list elements]');

    return Array.from(elements).map((element: any) => element.getAttribute('href'));
  }

  async element(link: string) {
    console.log(`[start element ${link}]`);

    const response = await fetch('https://opensource.adobe.com' + link + 'api');
    const result = await response.text();
    const html = new JSDOM(result);
    let infos = {} as any;

    try {
      if (
        html.window.document.querySelector('#deprecation') ||
        !html.window.document.querySelector('#component-name')
      ) {
        return null;
      }

      infos = {
        element: html.window.document.querySelector('#component-name').textContent.trim(),
        parameters: Array.from(
          html.window.document.querySelectorAll('[class="attributes and properties"] sp-table-row'),
        )
          .map((element: any) => ({
            summary: element.querySelector('sp-table-cell:nth-child(1)').textContent.trim(),
            element: element.querySelector('sp-table-cell:nth-child(2)').textContent.trim(),
            description: element.querySelector('sp-table-cell:nth-child(5)').textContent.trim(),
            type: element.querySelector('sp-table-cell:nth-child(3)').textContent.trim(),
          }))
          .map((param: any) => ({
            ...param,
            type: [
              'string',
              'boolean',
              'number',
              'object',
              'string[]',
              'boolean[]',
              'number[]',
              'object[]',
            ].includes(param.type)
              ? param.type
              : 'string',
          })),
        events: Array.from(
          html.window.document.querySelectorAll('[class="events"] sp-table-row'),
        ).map((element: any) => ({
          summary: element.querySelector('sp-table-cell:nth-child(1)').textContent.trim(),
          element: element.querySelector('sp-table-cell:nth-child(1)').textContent.trim(),
          description: element.querySelector('sp-table-cell:nth-child(3)').textContent.trim(),
        })),
      } as any;
    } catch (error) {
      console.log('Error parsing element:', link, result);
      throw error;
    }

    console.log(`[end element ${link}]`);

    return infos;
  }

  convert(list: any[]) {
    const elements = {
      openapi: '3.0.0',
      info: {
        title: '@digipair/skill-web-spectrum',
        summary: 'Design System Spectrum',
        description:
          'This skill allows users to create web interfaces using the Spectrum design system.',
        version: '0.1.0',
        'x-icon': '🎨',
      },
      paths: {},
      components: {
        schemas: {},
      },
      'x-scene-blocks': {},
    } as any;

    for (const item of list) {
      elements.paths[`/${item.element}`] = {
        post: {
          tags: ['web', 'needPins'],
          summary: item.element,
          parameters: [
            {
              name: 'class',
              summary: 'Class',
              description: 'Class of the element.',
              required: false,
              schema: {
                type: 'string',
              },
            },
            {
              name: 'style',
              summary: 'Style',
              description: 'CSS style of the element.',
              required: false,
              schema: {
                type: 'string',
              },
            },
            {
              name: 'id',
              summary: 'Id',
              description: 'Id of the element.',
              required: false,
              schema: {
                type: 'string',
              },
            },
            {
              name: 'textContent',
              summary: 'Text Content',
              description: 'Text content of the element.',
              required: false,
              schema: {
                type: 'string',
              },
            },
            {
              name: 'innerHTML',
              summary: 'Inner HTML',
              description: 'Inner HTML of the element.',
              required: false,
              schema: {
                type: 'string',
              },
            },
            {
              name: 'slot',
              summary: 'Slot',
              description: 'Slot of the element.',
              required: false,
              schema: {
                type: 'string',
              },
            },
          ],
          'x-events': [],
        },
      };

      for (const parameter of item.parameters) {
        elements.paths[`/${item.element}`].post.parameters.push({
          name: parameter.element,
          summary: parameter.summary,
          description: parameter.description,
          schema: { type: parameter.type },
        });
      }

      for (const event of item.events) {
        elements.paths[`/${item.element}`].post['x-events'].push({
          name: event.element,
          summary: event.summary,
          description: event.description,
          required: false,
          schema: {
            type: 'array',
            items: {
              $ref: 'https://schemas.digipair.ai/pinsSettings',
            },
          },
        });
      }
    }

    fs.writeFileSync('schema.json', JSON.stringify(elements, null, 2));
  }
}

(async () => {
  const schemaSprectrum = new SchemaSprectrum();
  // const list = await schemaSprectrum.start();

  //console.log(JSON.stringify(list));

  // fs.writeFileSync('spectrum.json', JSON.stringify(list, null, 2));
  const list = JSON.parse(fs.readFileSync('spectrum.json').toString());

  schemaSprectrum.convert(list);
})();
