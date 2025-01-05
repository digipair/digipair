export const schemas = {
  openapi: '3.0.0',
  info: {
    title: 'web',
    summary: 'Eléments HTML de base',
    description: 'description de la librairie de pins web',
    version: '0.1.0',
    'x-icon': '🌐',
  },
  paths: {
    '/a': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'a',
        parameters: [
          {
            name: 'download',
            summary: 'download',
            description: 'download',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'href',
            summary: 'href',
            description: 'href',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'hreflang',
            summary: 'hreflang',
            description: 'hreflang',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'ping',
            summary: 'ping',
            description: 'ping',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'referrerpolicy',
            summary: 'referrerpolicy',
            description: 'referrerpolicy',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rel',
            summary: 'rel',
            description: 'rel',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'target',
            summary: 'target',
            description: 'target',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/abbr': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'abbr',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/acronym': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'acronym',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/address': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'address',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/area': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'area',
        parameters: [
          {
            name: 'alt',
            summary: 'alt',
            description: 'alt',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'coords',
            summary: 'coords',
            description: 'coords',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'download',
            summary: 'download',
            description: 'download',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'href',
            summary: 'href',
            description: 'href',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'hreflang',
            summary: 'hreflang',
            description: 'hreflang',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'ping',
            summary: 'ping',
            description: 'ping',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'referrerpolicy',
            summary: 'referrerpolicy',
            description: 'referrerpolicy',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rel',
            summary: 'rel',
            description: 'rel',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'shape',
            summary: 'shape',
            description: 'shape',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'target',
            summary: 'target',
            description: 'target',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/article': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'article',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/aside': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'aside',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/audio': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'audio',
        parameters: [
          {
            name: 'autoplay',
            summary: 'autoplay',
            description: 'autoplay',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'controls',
            summary: 'controls',
            description: 'controls',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'crossorigin',
            summary: 'crossorigin',
            description: 'crossorigin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'disableremoteplayback',
            summary: 'disableremoteplayback',
            description: 'disableremoteplayback',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'loop',
            summary: 'loop',
            description: 'loop',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'muted',
            summary: 'muted',
            description: 'muted',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'preload',
            summary: 'preload',
            description: 'preload',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/b': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'b',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/base': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'base',
        parameters: [
          {
            name: 'href',
            summary: 'href',
            description: 'href',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'target',
            summary: 'target',
            description: 'target',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/bdi': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'bdi',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/bdo': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'bdo',
        parameters: [
          {
            name: 'dir',
            summary: 'dir',
            description: 'dir',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/big': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'big',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/blockquote': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'blockquote',
        parameters: [
          {
            name: 'cite',
            summary: 'cite',
            description: 'cite',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/body': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'body',
        parameters: [
          {
            name: 'alink',
            summary: 'alink',
            description: 'alink',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'background',
            summary: 'background',
            description: 'background',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'bgcolor',
            summary: 'bgcolor',
            description: 'bgcolor',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'bottommargin',
            summary: 'bottommargin',
            description: 'bottommargin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'leftmargin',
            summary: 'leftmargin',
            description: 'leftmargin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'link',
            summary: 'link',
            description: 'link',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onafterprint',
            summary: 'onafterprint',
            description: 'onafterprint',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onbeforeprint',
            summary: 'onbeforeprint',
            description: 'onbeforeprint',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onbeforeunload',
            summary: 'onbeforeunload',
            description: 'onbeforeunload',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onblur',
            summary: 'onblur',
            description: 'onblur',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onerror',
            summary: 'onerror',
            description: 'onerror',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onfocus',
            summary: 'onfocus',
            description: 'onfocus',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onhashchange',
            summary: 'onhashchange',
            description: 'onhashchange',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onlanguagechange',
            summary: 'onlanguagechange',
            description: 'onlanguagechange',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onload',
            summary: 'onload',
            description: 'onload',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onmessage',
            summary: 'onmessage',
            description: 'onmessage',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onoffline',
            summary: 'onoffline',
            description: 'onoffline',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'ononline',
            summary: 'ononline',
            description: 'ononline',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onpopstate',
            summary: 'onpopstate',
            description: 'onpopstate',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onredo',
            summary: 'onredo',
            description: 'onredo',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onresize',
            summary: 'onresize',
            description: 'onresize',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onstorage',
            summary: 'onstorage',
            description: 'onstorage',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onundo',
            summary: 'onundo',
            description: 'onundo',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'onunload',
            summary: 'onunload',
            description: 'onunload',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rightmargin',
            summary: 'rightmargin',
            description: 'rightmargin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'text',
            summary: 'text',
            description: 'text',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'topmargin',
            summary: 'topmargin',
            description: 'topmargin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'vlink',
            summary: 'vlink',
            description: 'vlink',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/br': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'br',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/button': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'button',
        parameters: [
          {
            name: 'autofocus',
            summary: 'autofocus',
            description: 'autofocus',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'autocomplete',
            summary: 'autocomplete',
            description: 'autocomplete',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'disabled',
            summary: 'disabled',
            description: 'disabled',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'form',
            summary: 'form',
            description: 'form',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'formaction',
            summary: 'formaction',
            description: 'formaction',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'formenctype',
            summary: 'formenctype',
            description: 'formenctype',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'formmethod',
            summary: 'formmethod',
            description: 'formmethod',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'formnovalidate',
            summary: 'formnovalidate',
            description: 'formnovalidate',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'formtarget',
            summary: 'formtarget',
            description: 'formtarget',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'popovertarget',
            summary: 'popovertarget',
            description: 'popovertarget',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'popovertargetaction',
            summary: 'popovertargetaction',
            description: 'popovertargetaction',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'value',
            summary: 'value',
            description: 'value',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/canvas': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'canvas',
        parameters: [
          {
            name: 'height',
            summary: 'height',
            description: 'height',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'moz-opaque',
            summary: 'moz-opaque',
            description: 'moz-opaque',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'width',
            summary: 'width',
            description: 'width',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/caption': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'caption',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/center': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'center',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/cite': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'cite',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/code': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'code',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/col': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'col',
        parameters: [
          {
            name: 'span',
            summary: 'span',
            description: 'span',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/colgroup': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'colgroup',
        parameters: [
          {
            name: 'span',
            summary: 'span',
            description: 'span',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/data': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'data',
        parameters: [
          {
            name: 'value',
            summary: 'value',
            description: 'value',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/datalist': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'datalist',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/dd': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'dd',
        parameters: [
          {
            name: 'nowrap',
            summary: 'nowrap',
            description: 'nowrap',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/del': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'del',
        parameters: [
          {
            name: 'cite',
            summary: 'cite',
            description: 'cite',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'datetime',
            summary: 'datetime',
            description: 'datetime',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/details': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'details',
        parameters: [
          {
            name: 'open',
            summary: 'open',
            description: 'open',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/dfn': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'dfn',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/dialog': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'dialog',
        parameters: [
          {
            name: 'open',
            summary: 'open',
            description: 'open',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/dir': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'dir',
        parameters: [
          {
            name: 'compact',
            summary: 'compact',
            description: 'compact',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/div': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'div',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/dl': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'dl',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/dt': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'dt',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/em': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'em',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/embed': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'embed',
        parameters: [
          {
            name: 'height',
            summary: 'height',
            description: 'height',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'width',
            summary: 'width',
            description: 'width',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/fencedframe': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'fencedframe',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/fieldset': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'fieldset',
        parameters: [
          {
            name: 'disabled',
            summary: 'disabled',
            description: 'disabled',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'form',
            summary: 'form',
            description: 'form',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/figcaption': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'figcaption',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/figure': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'figure',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/font': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'font',
        parameters: [
          {
            name: 'color',
            summary: 'color',
            description: 'color',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'face',
            summary: 'face',
            description: 'face',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'size',
            summary: 'size',
            description: 'size',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/footer': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'footer',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/form': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'form',
        parameters: [
          {
            name: 'accept',
            summary: 'accept',
            description: 'accept',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'accept-charset',
            summary: 'accept-charset',
            description: 'accept-charset',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'autocapitalize',
            summary: 'autocapitalize',
            description: 'autocapitalize',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'autocomplete',
            summary: 'autocomplete',
            description: 'autocomplete',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rel',
            summary: 'rel',
            description: 'rel',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/frame': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'frame',
        parameters: [
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'noresize',
            summary: 'noresize',
            description: 'noresize',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'scrolling',
            summary: 'scrolling',
            description: 'scrolling',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'marginheight',
            summary: 'marginheight',
            description: 'marginheight',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'marginwidth',
            summary: 'marginwidth',
            description: 'marginwidth',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'frameborder',
            summary: 'frameborder',
            description: 'frameborder',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/frameset': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'frameset',
        parameters: [
          {
            name: 'cols',
            summary: 'cols',
            description: 'cols',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rows',
            summary: 'rows',
            description: 'rows',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/h1': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'h1',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/h2': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'h2',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/h3': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'h3',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/h4': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'h4',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/h5': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'h5',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/h6': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'h6',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/head': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'head',
        parameters: [
          {
            name: 'profile',
            summary: 'profile',
            description: 'profile',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/header': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'header',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/hgroup': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'hgroup',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/hr': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'hr',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/html': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'html',
        parameters: [
          {
            name: 'version',
            summary: 'version',
            description: 'version',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'xmlns',
            summary: 'xmlns',
            description: 'xmlns',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/i': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'i',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/iframe': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'iframe',
        parameters: [
          {
            name: 'allow',
            summary: 'allow',
            description: 'allow',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'allowfullscreen',
            summary: 'allowfullscreen',
            description: 'allowfullscreen',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'allowpaymentrequest',
            summary: 'allowpaymentrequest',
            description: 'allowpaymentrequest',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'csp',
            summary: 'csp',
            description: 'csp',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'height',
            summary: 'height',
            description: 'height',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'loading',
            summary: 'loading',
            description: 'loading',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'referrerpolicy',
            summary: 'referrerpolicy',
            description: 'referrerpolicy',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'sandbox',
            summary: 'sandbox',
            description: 'sandbox',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'srcdoc',
            summary: 'srcdoc',
            description: 'srcdoc',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'width',
            summary: 'width',
            description: 'width',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/img': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'img',
        parameters: [
          {
            name: 'alt',
            summary: 'alt',
            description: 'alt',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'crossorigin',
            summary: 'crossorigin',
            description: 'crossorigin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'decoding',
            summary: 'decoding',
            description: 'decoding',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'elementtiming',
            summary: 'elementtiming',
            description: 'elementtiming',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'fetchpriority',
            summary: 'fetchpriority',
            description: 'fetchpriority',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'height',
            summary: 'height',
            description: 'height',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'ismap',
            summary: 'ismap',
            description: 'ismap',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'loading',
            summary: 'loading',
            description: 'loading',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'referrerpolicy',
            summary: 'referrerpolicy',
            description: 'referrerpolicy',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'sizes',
            summary: 'sizes',
            description: 'sizes',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'srcset',
            summary: 'srcset',
            description: 'srcset',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'width',
            summary: 'width',
            description: 'width',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'usemap',
            summary: 'usemap',
            description: 'usemap',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/input': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'input',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/ins': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'ins',
        parameters: [
          {
            name: 'cite',
            summary: 'cite',
            description: 'cite',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'datetime',
            summary: 'datetime',
            description: 'datetime',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/kbd': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'kbd',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/label': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'label',
        parameters: [
          {
            name: 'for',
            summary: 'for',
            description: 'for',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'form',
            summary: 'form',
            description: 'form',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/legend': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'legend',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/li': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'li',
        parameters: [
          {
            name: 'value',
            summary: 'value',
            description: 'value',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/link': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'link',
        parameters: [
          {
            name: 'as',
            summary: 'as',
            description: 'as',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'crossorigin',
            summary: 'crossorigin',
            description: 'crossorigin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'disabled',
            summary: 'disabled',
            description: 'disabled',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'href',
            summary: 'href',
            description: 'href',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'hreflang',
            summary: 'hreflang',
            description: 'hreflang',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'importance',
            summary: 'importance',
            description: 'importance',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'integrity',
            summary: 'integrity',
            description: 'integrity',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'media',
            summary: 'media',
            description: 'media',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'referrerpolicy',
            summary: 'referrerpolicy',
            description: 'referrerpolicy',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rel',
            summary: 'rel',
            description: 'rel',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'sizes',
            summary: 'sizes',
            description: 'sizes',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'title',
            summary: 'title',
            description: 'title',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/main': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'main',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/map': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'map',
        parameters: [
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/mark': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'mark',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/marquee': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'marquee',
        parameters: [
          {
            name: 'behavior',
            summary: 'behavior',
            description: 'behavior',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'bgcolor',
            summary: 'bgcolor',
            description: 'bgcolor',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'direction',
            summary: 'direction',
            description: 'direction',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'height',
            summary: 'height',
            description: 'height',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'hspace',
            summary: 'hspace',
            description: 'hspace',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'loop',
            summary: 'loop',
            description: 'loop',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'scrollamount',
            summary: 'scrollamount',
            description: 'scrollamount',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'scrolldelay',
            summary: 'scrolldelay',
            description: 'scrolldelay',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'truespeed',
            summary: 'truespeed',
            description: 'truespeed',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'vspace',
            summary: 'vspace',
            description: 'vspace',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'width',
            summary: 'width',
            description: 'width',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/menu': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'menu',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/meta': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'meta',
        parameters: [
          {
            name: 'charset',
            summary: 'charset',
            description: 'charset',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'content',
            summary: 'content',
            description: 'content',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'http-equiv',
            summary: 'http-equiv',
            description: 'http-equiv',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/meter': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'meter',
        parameters: [
          {
            name: 'form',
            summary: 'form',
            description: 'form',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'high',
            summary: 'high',
            description: 'high',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'low',
            summary: 'low',
            description: 'low',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'max',
            summary: 'max',
            description: 'max',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'min',
            summary: 'min',
            description: 'min',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'optimum',
            summary: 'optimum',
            description: 'optimum',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'value',
            summary: 'value',
            description: 'value',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/nav': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'nav',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/nobr': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'nobr',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/noembed': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'noembed',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/noframes': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'noframes',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/noscript': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'noscript',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/object': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'object',
        parameters: [
          {
            name: 'data',
            summary: 'data',
            description: 'data',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'form',
            summary: 'form',
            description: 'form',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'height',
            summary: 'height',
            description: 'height',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'usemap',
            summary: 'usemap',
            description: 'usemap',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'width',
            summary: 'width',
            description: 'width',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/ol': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'ol',
        parameters: [
          {
            name: 'reversed',
            summary: 'reversed',
            description: 'reversed',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'start',
            summary: 'start',
            description: 'start',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/optgroup': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'optgroup',
        parameters: [
          {
            name: 'disabled',
            summary: 'disabled',
            description: 'disabled',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'label',
            summary: 'label',
            description: 'label',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/option': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'option',
        parameters: [
          {
            name: 'disabled',
            summary: 'disabled',
            description: 'disabled',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'label',
            summary: 'label',
            description: 'label',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'selected',
            summary: 'selected',
            description: 'selected',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'value',
            summary: 'value',
            description: 'value',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/output': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'output',
        parameters: [
          {
            name: 'for',
            summary: 'for',
            description: 'for',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'form',
            summary: 'form',
            description: 'form',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/p': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'p',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/param': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'param',
        parameters: [
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'value',
            summary: 'value',
            description: 'value',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/picture': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'picture',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/plaintext': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'plaintext',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/portal': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'portal',
        parameters: [
          {
            name: 'referrerpolicy',
            summary: 'referrerpolicy',
            description: 'referrerpolicy',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/pre': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'pre',
        parameters: [
          {
            name: 'cols',
            summary: 'cols',
            description: 'cols',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'width',
            summary: 'width',
            description: 'width',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'wrap',
            summary: 'wrap',
            description: 'wrap',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/progress': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'progress',
        parameters: [
          {
            name: 'max',
            summary: 'max',
            description: 'max',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'value',
            summary: 'value',
            description: 'value',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/q': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'q',
        parameters: [
          {
            name: 'cite',
            summary: 'cite',
            description: 'cite',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/rb': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'rb',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/rp': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'rp',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/rt': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'rt',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/rtc': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'rtc',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/ruby': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'ruby',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/s': {
      post: {
        tags: ['web', 'needPins'],
        summary: 's',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/samp': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'samp',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/script': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'script',
        parameters: [
          {
            name: 'async',
            summary: 'async',
            description: 'async',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'crossorigin',
            summary: 'crossorigin',
            description: 'crossorigin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'defer',
            summary: 'defer',
            description: 'defer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'integrity',
            summary: 'integrity',
            description: 'integrity',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'nomodule',
            summary: 'nomodule',
            description: 'nomodule',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'nonce',
            summary: 'nonce',
            description: 'nonce',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'referrerpolicy',
            summary: 'referrerpolicy',
            description: 'referrerpolicy',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/search': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'search',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/section': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'section',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/select': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'select',
        parameters: [
          {
            name: 'autocomplete',
            summary: 'autocomplete',
            description: 'autocomplete',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'autofocus',
            summary: 'autofocus',
            description: 'autofocus',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'disabled',
            summary: 'disabled',
            description: 'disabled',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'form',
            summary: 'form',
            description: 'form',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'multiple',
            summary: 'multiple',
            description: 'multiple',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'required',
            summary: 'required',
            description: 'required',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'size',
            summary: 'size',
            description: 'size',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/slot': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'slot',
        parameters: [
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/small': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'small',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/source': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'source',
        parameters: [
          {
            name: 'media',
            summary: 'media',
            description: 'media',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'sizes',
            summary: 'sizes',
            description: 'sizes',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'srcset',
            summary: 'srcset',
            description: 'srcset',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/span': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'span',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/strike': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'strike',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/strong': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'strong',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/style': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'style',
        parameters: [
          {
            name: 'media',
            summary: 'media',
            description: 'media',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'nonce',
            summary: 'nonce',
            description: 'nonce',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            summary: 'type',
            description: 'type',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'title',
            summary: 'title',
            description: 'title',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/sub': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'sub',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/summary': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'summary',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/sup': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'sup',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/table': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'table',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/tbody': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'tbody',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/td': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'td',
        parameters: [
          {
            name: 'colspan',
            summary: 'colspan',
            description: 'colspan',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'headers',
            summary: 'headers',
            description: 'headers',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rowspan',
            summary: 'rowspan',
            description: 'rowspan',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/template': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'template',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/textarea': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'textarea',
        parameters: [
          {
            name: 'autocapitalize',
            summary: 'autocapitalize',
            description: 'autocapitalize',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'autocomplete',
            summary: 'autocomplete',
            description: 'autocomplete',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'autofocus',
            summary: 'autofocus',
            description: 'autofocus',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'cols',
            summary: 'cols',
            description: 'cols',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'disabled',
            summary: 'disabled',
            description: 'disabled',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'form',
            summary: 'form',
            description: 'form',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'maxlength',
            summary: 'maxlength',
            description: 'maxlength',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'minlength',
            summary: 'minlength',
            description: 'minlength',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'name',
            summary: 'name',
            description: 'name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'placeholder',
            summary: 'placeholder',
            description: 'placeholder',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'readonly',
            summary: 'readonly',
            description: 'readonly',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'required',
            summary: 'required',
            description: 'required',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rows',
            summary: 'rows',
            description: 'rows',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'spellcheck',
            summary: 'spellcheck',
            description: 'spellcheck',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'wrap',
            summary: 'wrap',
            description: 'wrap',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/tfoot': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'tfoot',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/th': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'th',
        parameters: [
          {
            name: 'abbr',
            summary: 'abbr',
            description: 'abbr',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'colspan',
            summary: 'colspan',
            description: 'colspan',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'headers',
            summary: 'headers',
            description: 'headers',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'rowspan',
            summary: 'rowspan',
            description: 'rowspan',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'scope',
            summary: 'scope',
            description: 'scope',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/thead': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'thead',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/time': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'time',
        parameters: [
          {
            name: 'datetime',
            summary: 'datetime',
            description: 'datetime',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/title': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'title',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/tr': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'tr',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/track': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'track',
        parameters: [
          {
            name: 'default',
            summary: 'default',
            description: 'default',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'kind',
            summary: 'kind',
            description: 'kind',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'label',
            summary: 'label',
            description: 'label',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'srclang',
            summary: 'srclang',
            description: 'srclang',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/tt': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'tt',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/u': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'u',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/ul': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'ul',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/var': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'var',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/video': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'video',
        parameters: [
          {
            name: 'autoplay',
            summary: 'autoplay',
            description: 'autoplay',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'buffered',
            summary: 'buffered',
            description: 'buffered',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'controls',
            summary: 'controls',
            description: 'controls',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'controlslist',
            summary: 'controlslist',
            description: 'controlslist',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'crossorigin',
            summary: 'crossorigin',
            description: 'crossorigin',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'height',
            summary: 'height',
            description: 'height',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'intrinsicsize',
            summary: 'intrinsicsize',
            description: 'intrinsicsize',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'loop',
            summary: 'loop',
            description: 'loop',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'muted',
            summary: 'muted',
            description: 'muted',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'disablepictureinpicture',
            summary: 'disablepictureinpicture',
            description: 'disablepictureinpicture',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'playsinline',
            summary: 'playsinline',
            description: 'playsinline',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'preload',
            summary: 'preload',
            description: 'preload',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'poster',
            summary: 'poster',
            description: 'poster',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'src',
            summary: 'src',
            description: 'src',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'width',
            summary: 'width',
            description: 'width',
            schema: {
              type: 'string',
            },
          },
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/wbr': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'wbr',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
    '/xmp': {
      post: {
        tags: ['web', 'needPins'],
        summary: 'xmp',
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
          {
            name: 'keydown',
            summary: 'Keydown',
            description: 'Keydown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'keyup',
            summary: 'Keyup',
            description: 'Keyup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousedown',
            summary: 'Mousedown',
            description: 'Mousedown event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseup',
            summary: 'Mouseup',
            description: 'Mouseup event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mousemove',
            summary: 'Mousemove',
            description: 'Mousemove event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseover',
            summary: 'Mouseover',
            description: 'Mouseover event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'mouseout',
            summary: 'Mouseout',
            description: 'Mouseout event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'input',
            summary: 'Input',
            description: 'Input event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'change',
            summary: 'Change',
            description: 'Change event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'focus',
            summary: 'Focus',
            description: 'Focus event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'blur',
            summary: 'Blur',
            description: 'Blur event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'dblclick',
            summary: 'Dblclick',
            description: 'Dblclick event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'wheel',
            summary: 'Wheel',
            description: 'Wheel event.',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: 'https://schemas.digipair.ai/pinsSettings',
              },
            },
          },
          {
            name: 'load',
            summary: 'Load',
            description: 'Load event.',
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
    },
  },
  components: {
    schemas: {},
  },
  'x-scene-blocks': {},
};
