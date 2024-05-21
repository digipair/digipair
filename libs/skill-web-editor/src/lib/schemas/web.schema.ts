export const schemas = {
  openapi: '3.0.0',
  info: {
    title: 'web',
    summary: 'Eléments HTML de base',
    description: 'description de la librairie de pins web',
    version: '1.0.11',
    'x-icon': '🌐',
  },
  paths: {
    '/section': {
      post: {
        tags: ['needPins', 'web'],
        summary: 'Section',
        parameters: [
          {
            name: 'class',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'textContent',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
      },
    },
    '/h1': {
      post: {
        tags: ['web'],
        summary: 'h1',
        parameters: [
          {
            name: 'textContent',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
        'x-events': [
          {
            name: 'click',
            summary: "Clique sur l'élément",
            required: false,
            description: "Action déclenchée lors du click sur l'élément",
            schema: {
              type: 'array',
              items: {
                $ref: 'https://www.pinser.world/schemas/pinsSettings',
              },
            },
          },
        ],
      },
    },
    '/nav': {
      post: {
        tags: ['needPins', 'web'],
        summary: 'nav',
        parameters: [
          {
            name: 'class',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
      },
    },
    '/a': {
      post: {
        tags: ['needPins', 'web'],
        summary: 'a',
        parameters: [
          {
            name: 'class',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'href',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'textContent',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'id',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'role',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'data-toggle',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'aria-haspopup',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'aria-expanded',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
        'x-events': [
          {
            name: 'click',
            summary: "Clique sur l'élément",
            required: false,
            description: "Action déclenchée lors du click sur l'élément",
            schema: {
              type: 'array',
              items: {
                $ref: 'https://www.pinser.world/schemas/pinsSettings',
              },
            },
          },
        ],
      },
    },
    '/button': {
      post: {
        tags: ['needPins', 'web'],
        summary: 'button',
        parameters: [
          {
            name: 'class',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'data-toggle',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'data-target',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'aria-controls',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'aria-expanded',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'aria-label',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'textContent',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
        'x-events': [
          {
            name: 'click',
            summary: "Clique sur l'élément",
            required: false,
            description: "Action déclenchée lors du click sur l'élément",
            schema: {
              type: 'array',
              items: {
                $ref: 'https://www.pinser.world/schemas/pinsSettings',
              },
            },
          },
        ],
      },
    },
    '/span': {
      post: {
        tags: ['needPins', 'web'],
        summary: 'span',
        parameters: [
          {
            name: 'class',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
        'x-events': [
          {
            name: 'click',
            summary: "Clique sur l'élément",
            required: false,
            description: "Action déclenchée lors du click sur l'élément",
            schema: {
              type: 'array',
              items: {
                $ref: 'https://www.pinser.world/schemas/pinsSettings',
              },
            },
          },
        ],
      },
    },
    '/div': {
      post: {
        tags: ['needPins', 'web'],
        summary: 'div',
        parameters: [
          {
            name: 'class',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'id',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'aria-labelledby',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
        'x-events': [
          {
            name: 'click',
            summary: "Clique sur l'élément",
            required: false,
            description: "Action déclenchée lors du click sur l'élément",
            schema: {
              type: 'array',
              items: {
                $ref: 'https://www.pinser.world/schemas/pinsSettings',
              },
            },
          },
        ],
      },
    },
    '/ul': {
      post: {
        tags: ['needPins', 'web'],
        summary: 'ul',
        parameters: [
          {
            name: 'class',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
        'x-events': [
          {
            name: 'click',
            summary: "Clique sur l'élément",
            required: false,
            description: "Action déclenchée lors du click sur l'élément",
            schema: {
              type: 'array',
              items: {
                $ref: 'https://www.pinser.world/schemas/pinsSettings',
              },
            },
          },
        ],
      },
    },
    '/li': {
      post: {
        tags: ['needPins', 'web'],
        summary: 'li',
        parameters: [
          {
            name: 'class',
            in: 'query',
            description: '',
            schema: {
              type: 'string',
            },
          },
        ],
        'x-events': [
          {
            name: 'click',
            summary: "Clique sur l'élément",
            required: false,
            description: "Action déclenchée lors du click sur l'élément",
            schema: {
              type: 'array',
              items: {
                $ref: 'https://www.pinser.world/schemas/pinsSettings',
              },
            },
          },
        ],
      },
    },
  },
  components: {
    schemas: {},
  },
  'x-scene-blocks': {},
};
