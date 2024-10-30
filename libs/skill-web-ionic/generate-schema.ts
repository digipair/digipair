import * as fs from 'fs';
import { JSDOM } from 'jsdom';

class SchemaIonic {
  async start() {
    const list: any[] = [];
    let nextLink = '/docs/api/action-sheet';
    let infos;

    while (nextLink !== '/docs/api') {
      console.log('[start] ' + nextLink);
      const result = await this.element(nextLink);

      infos = result.infos;
      nextLink = result.nextLink;

      if (infos.element === 'ion-icon') {
        nextLink = '/docs/api/img';
      }

      list.push(infos);
    }

    console.log('[end]');

    return list;
  }

  async element(link: string) {
    const response = await fetch('https://ionicframework.com/' + link);
    const result = await response.text();
    const html = new JSDOM(result);

    const infos = {
      element: html.window.document.querySelector('h1').textContent,
      parameters: [],
      events: [],
    } as any;

    const elements = html.window.document.querySelectorAll(
      '.theme-doc-markdown.markdown h2, .theme-doc-markdown.markdown h3, .theme-doc-markdown.markdown .table-wrapper',
    );

    let step = '';
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      if (element.tagName === 'H2') {
        step = element.id;
      }

      if (element.className === 'table-wrapper' && step === 'properties') {
        let type = element.querySelector('tbody tr:nth-child(3) td:nth-child(2)').textContent;
        type = type.split(' ')[0];
        type = [
          'string',
          'boolean',
          'number',
          'object',
          'string[]',
          'boolean[]',
          'number[]',
          'object[]',
        ].includes(type)
          ? type
          : 'string';

        const parameter = {
          summary: elements[i - 1].textContent,
          element: element.querySelector('tbody tr:nth-child(2) td:nth-child(2)').textContent,
          description: element.querySelector('tbody tr:nth-child(1) td:nth-child(2)').textContent,
          type,
        };

        if (parameter.element !== 'undefined') {
          infos.parameters.push(parameter);
        }
      }

      if (element.className === 'table-wrapper' && step === 'events') {
        const lines = element.querySelectorAll('tbody tr');
        for (let j = 0; j < lines.length; j++) {
          const line = lines[j];
          const event = {
            summary: line.querySelector('td:nth-child(1)').textContent,
            element: line.querySelector('td:nth-child(1)').textContent,
            description: line.querySelector('td:nth-child(2)').textContent,
          };

          infos.events.push(event);
        }
      }
    }

    const nextLink = html.window.document
      .querySelector('nav.pagination-nav a:nth-child(2)')
      ?.getAttribute('href');

    return {
      infos,
      nextLink,
    };
  }

  convert(list: any[]) {
    const elements = {
      openapi: '3.0.0',
      info: {
        title: '@digipair/skill-web-ionic',
        summary: 'Design System Ionic',
        description: 'This skill provides functionalities to create Ionic web apps.',
        version: '0.1.0',
        'x-icon': '📱',
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
              name: 'aria-hidden',
              summary: 'Aria Hidden',
              description: 'Aria hidden of the element.',
              required: false,
              schema: {
                type: 'string',
              },
            },
            {
              name: 'aria-label',
              summary: 'Aria Label',
              description: 'Aria label of the element.',
              required: false,
              schema: {
                type: 'string',
              },
            },
          ],
          'x-events': [
            {
              name: 'click',
              summary: 'Click',
              description: 'Click event.',
              required: false,
              schema: {
                type: 'array',
                items: {
                  $ref: 'https://schemas.digipair.ai/pinsSettings',
                },
              },
            },
          ],
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

const schemaIonic = new SchemaIonic();
const list = await schemaIonic.start();

// fs.writeFileSync('ionic.json', JSON.stringify(list, null, 2));
// const list = JSON.parse(fs.readFileSync('ionic.json').toString());

schemaIonic.convert(list);
