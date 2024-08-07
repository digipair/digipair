export const schemas = {
  openapi: '3.0.0',
  info: {
    title: 'web',
    summary: 'Basic HTML Elements',
    description: 'Description of the web pins library',
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
            summary: 'CSS Style',
            description: 'Style of the section',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'class',
            summary: 'CSS Class',
            description: 'Class of the section',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'id',
            summary: 'Identifier',
            description: 'Identifier of the section',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'innerHTML',
            summary: 'HTML Code',
            description: 'HTML code of the section',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'textContent',
            summary: 'Text',
            description: 'Text of the section',
            required: false,
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
            name: 'id',
            summary: 'Identifier',
            description: 'Identifier of the section',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'textContent',
            summary: 'Text',
            description: 'Text of the span',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'slot',
            summary: 'Position',
            description: 'Position of the span in the parent element',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
      },
    },
    '/img': {
      post: {
        tags: ['web'],
        summary: 'Image',
        parameters: [
          {
            name: 'id',
            summary: 'Identifier',
            description: 'Identifier of the section',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'Source',
            description: 'Source of the image',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'slot',
            summary: 'Position',
            description: 'Position of the image in the parent element',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'style',
            summary: 'CSS Style',
            description: 'Style of the image',
            required: false,
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
