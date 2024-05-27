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
            name: 'style',
            summary: 'Style CSS',
            description: 'Style de la section',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'class',
            summary: 'Classe CSS',
            description: 'Classe de la section',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'id',
            summary: 'Identifiant',
            description: 'Identifiant de la section',
            schema: {
              type: 'string',
            },
          },
        ],
      },
    },
    '/span': {
      post: {
        tags: ['web'],
        summary: 'Span',
        parameters: [
          {
            name: 'textContent',
            summary: 'Texte',
            description: 'Texte du span',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'slot',
            summary: 'Position',
            description: "Position du span dans l'élément parent",
            schema: {
              type: 'string',
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
