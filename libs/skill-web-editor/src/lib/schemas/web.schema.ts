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
  },
  components: {
    schemas: {},
  },
  'x-scene-blocks': {},
};
