export const blocksLegacy = [
  {
    type: 'object',
    message0: '{ %1 %2 }',
    args0: [
      {
        type: 'input_dummy',
      },
      {
        type: 'input_statement',
        name: 'MEMBERS',
        check: 'MEMBER',
      },
    ],
    output: null,
    colour: '#48c6be',
  },
  {
    type: 'array',
    message0: '[ %1 %2 ]',
    args0: [
      {
        type: 'input_dummy',
      },
      {
        type: 'input_statement',
        name: 'MEMBERS',
        check: 'ARRAY_INPUT',
      },
    ],
    output: null,
    colour: '#48c6be',
  },
  {
    type: 'member',
    message0: '%1 %2 %3',
    args0: [
      {
        type: 'field_input',
        name: 'MEMBER_NAME',
        text: '',
      },
      {
        type: 'field_label',
        name: 'COLON',
        text: ':',
      },
      {
        type: 'input_value',
        name: 'MEMBER_VALUE',
      },
    ],
    previousStatement: 'MEMBER',
    nextStatement: 'MEMBER',
    colour: '#35b3ab',
  },
  {
    type: 'array-input',
    message0: '%1',
    args0: [
      {
        type: 'input_value',
        name: 'MEMBER_VALUE',
      },
    ],
    previousStatement: 'ARRAY_INPUT',
    nextStatement: 'ARRAY_INPUT',
    colour: '#35b3ab',
  },
  {
    type: 'unknown-pins',
    message0: 'unknown-pins',
    args0: [],
    colour: 0,
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: 'unknown-format',
    message0: 'unknown-format',
    args0: [],
    output: null,
    colour: 0,
  },
  {
    type: 'unknown-component',
    message0: 'unknown-component',
    args0: [],
    output: null,
    colour: 0,
  },
  {
    type: 'generic-scene-block',
    message0: 'Error - Generic Scene Block',
    arg0: [],
    message1: 'type = %1',
    args1: [
      {
        type: 'field_input',
        name: 'SCENE_TYPE',
        text: 'default-type',
      },
    ],
    message2: '%1 %2',
    args2: [
      {
        type: 'field_label_serializable',
        name: 'NAME_EXECUTE',
        text: 'Execute*',
      },
      {
        type: 'input_statement',
        name: 'EXECUTE_PINS',
      },
    ],
    message3: '%1 %2',
    args3: [
      {
        type: 'field_label_serializable',
        name: 'NAME_METADATA',
        text: 'Metadata',
      },
      {
        type: 'input_value',
        name: 'METADATA_INPUT',
      },
    ],
    colour: 0,
    tooltip: '',
    helpUrl: '',
  },
];
