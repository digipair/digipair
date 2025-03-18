declare const Blockly: any;

function getPinsBlockDefinition(
  library: { info: { [x: string]: string; title: string } },
  methodData: any,
  pinsId: string,
) {
  const blockDefinition: any = {
    type: pinsId,
    message0: library.info['x-icon'] + ' ' + methodData.summary,
    args0: [], //Empty field, only used for the Pins display name
    message1: '',
    args1: [], //Parameters inputs field
    message2: '',
    args2: [], //Events inputs field
    message3: '',
    args3: [], //Pins input field
    colour: '#b3aeee',
    tooltip: 'library : ' + library.info.title,
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
  };

  const parameters = methodData.parameters;
  const metadata = methodData.metadata || [];
  const events = methodData['x-events'] || [];

  const requiredParamInputs = parameters.filter(
    (param: { required: boolean }) => param.required === true,
  );
  const requiredEventInputs: any[] = [];
  const requiredFields = requiredParamInputs.map((param: { name: any }) => param.name);

  if (methodData['x-events']) {
    methodData['x-events'].forEach((event: any) => {
      if (event.required) {
        requiredEventInputs.push(event);
        requiredFields.push('__EVENT__/' + event.name);
      }
    });
  }

  requiredFields.push('');
  const mutatorToolbox = [
    ...parameters
      .map((param: { name: any }) => param.name)
      .filter((name: any) => !requiredFields.includes(name)),
    '__CONDITION__/if',
    '__CONDITION__/each',
  ];

  if (methodData.tags) {
    if (methodData.tags.includes('needPins') && !methodData.tags.includes('requirePins')) {
      mutatorToolbox.push('pins');
    } else if (methodData.tags.includes('needPins') && methodData.tags.includes('requirePins')) {
      blockDefinition['message3'] += '%1 %2 %3';

      blockDefinition['args3'].push({
        type: 'field_label',
        name: `NAME_INPUT`,
        text: 'pins*',
      });

      blockDefinition['args3'].push({
        type: 'input_dummy',
      });

      blockDefinition['args3'].push({
        type: 'input_statement',
        name: 'pins',
      });

      requiredFields.push('pins');
    }
  }

  if (methodData['x-events']) {
    for (const event of methodData['x-events']) {
      if (event.required === false || !event.required) {
        mutatorToolbox.push('__EVENT__/' + event.name);
      }
    }
  }

  for (let i = 0; i < requiredParamInputs.length; i++) {
    const position = blockDefinition['args1'].length;

    blockDefinition['args1'].push({
      type: 'field_label',
      name: `NAME_INPUT`,
      text: (requiredParamInputs[i].summary || requiredParamInputs[i].name) + '*',
    });
    if (
      requiredParamInputs[i].schema?.type === 'array' &&
      (requiredParamInputs[i].schema.items?.$ref === 'https://schemas.digipair.ai/pinsSettings' ||
        requiredParamInputs[i].schema.items?.$ref?.includes('#/components/schemas/'))
    ) {
      blockDefinition['message1'] +=
        ' %' + (position + 1) + ' %' + (position + 2) + ' %' + (position + 3);
      blockDefinition['args1'].push({
        type: 'input_dummy',
      });
      blockDefinition['args1'].push({
        type: 'input_statement',
        name: requiredParamInputs[i].name,
      });
    } else {
      blockDefinition['message1'] += ' %' + (position + 1) + ' %' + (position + 2);
      blockDefinition['args1'].push({
        type: 'input_value',
        name: requiredParamInputs[i].name,
      });
    }
  }

  for (let i = 0; i < requiredEventInputs.length; i++) {
    const position = blockDefinition['args2'].length;

    blockDefinition['args2'].push({
      type: 'field_label',
      name: `NAME_INPUT`,
      text: '@' + (requiredEventInputs[i].summary || requiredEventInputs[i].name) + '*',
    });

    blockDefinition['message2'] +=
      ' %' + (position + 1) + ' %' + (position + 2) + ' %' + (position + 3);
    blockDefinition['args2'].push({
      type: 'input_dummy',
    });
    blockDefinition['args2'].push({
      type: 'input_statement',
      name: '__EVENT__/' + requiredEventInputs[i].name,
    });
  }

  if (mutatorToolbox.length > 0) {
    blockDefinition.mutator = pinsId + '/mutator';
    generateMutator(pinsId + '/mutator', mutatorToolbox, requiredFields, [
      ...parameters,
      ...metadata,
      ...events,
    ]);
  }
  return blockDefinition;
}

function getComponentBlockDefinition(
  library: { info: { [x: string]: string; title: string } },
  componentName: string,
  methodData: { summary: string; properties: any; required: any[] },
  componentId: string,
) {
  const blockDefinition: any = {
    type: componentId,
    message0: library.info['x-icon'] + ' ' + (methodData.summary || componentName),
    args0: [],
    message1: '',
    args1: [],
    colour: '#ffca28',
    tooltip: 'library : ' + library.info.title,
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
  };

  const properties = methodData.properties;
  const requiredFields = methodData.required || [];
  requiredFields.push('');
  const mutatorToolbox: string[] = [];
  const parameters = Object.keys(properties).map(propertyName => ({
    name: propertyName,
    summary: properties[propertyName].summary || propertyName,
    schema: properties[propertyName],
  }));

  let messageIndex = 0;
  parameters.forEach((parameter, _index) => {
    if (!requiredFields.includes(parameter.name)) {
      mutatorToolbox.push(parameter.name);
    } else {
      blockDefinition['args1'].push({
        type: 'field_label',
        name: 'NAME_INPUT',
        text: parameter.summary + '*',
      });

      if (
        parameter.schema?.type === 'array' &&
        (parameter.schema.items?.$ref === 'https://schemas.digipair.ai/pinsSettings' ||
          parameter.schema.items?.$ref.includes('#/components/schemas/'))
      ) {
        blockDefinition['message1'] +=
          ' %' +
          (messageIndex * 2 + 1) +
          ' %' +
          (messageIndex * 2 + 2) +
          ' %' +
          (messageIndex * 2 + 3);
        blockDefinition['args1'].push({
          type: 'input_dummy',
        });
        blockDefinition['args1'].push({
          type: 'input_statement',
          name: parameter.name,
        });
      } else {
        blockDefinition['message1'] +=
          ' %' + (messageIndex * 2 + 1) + ' %' + (messageIndex * 2 + 2);
        blockDefinition['args1'].push({
          type: 'input_value',
          name: parameter.name,
        });
      }

      messageIndex++;
    }
  });

  if (mutatorToolbox.length > 0) {
    blockDefinition.mutator = componentId + '/mutator';
    generateMutator(componentId + '/mutator', mutatorToolbox, requiredFields, parameters);
  }
  return blockDefinition;
}

export function generateToolboxFromLibraries(libraries: any[], tags: string[]) {
  const sortedLibraries = libraries.sort((a, b) => {
    const title1 = a.info.summary ?? a.info.title;
    const title2 = b.info.summary ?? b.info.title;

    if (title1 < title2) {
      return -1;
    }
    if (title1 > title2) {
      return 1;
    }
    return 0;
  });

  const toolbox = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: '⚙️ Common',
        contents: [
          {
            kind: 'block',
            type: 'object',
          },
          {
            kind: 'block',
            type: 'member',
          },
          {
            kind: 'block',
            type: 'math_number',
          },
          {
            kind: 'block',
            type: 'text_multiline',
          },
          {
            kind: 'block',
            type: 'logic_boolean',
          },
          {
            kind: 'block',
            type: 'logic_null',
          },
          {
            kind: 'block',
            type: 'array',
          },
          {
            kind: 'block',
            type: 'array-input',
          },
        ],
      },
      ...sortedLibraries
        .map(library => ({
          kind: 'category',
          name: library.info.summary ?? library.info.title,
          contents: [
            ...(library.paths
              ? Object.entries(library.paths as { [x: string]: any })
                  .filter(([_path, pins]) =>
                    pins.post.tags.some((tag: string) => tags.includes(tag)),
                  )
                  .sort((a, b) => a[0].localeCompare(b[0])) // Tri alphabétique par path
                  .map(([path, _pins]) => ({
                    kind: 'block',
                    type: library.info.title + '/__PINS__' + path,
                  }))
              : []),
            ...(library.components?.schemas
              ? Object.entries(library.components.schemas as { [x: string]: any })
                  .filter(([_componentName, schema]) =>
                    schema.tags.some((tag: string) => tags.includes(tag)),
                  )
                  .sort((a, b) => a[0].localeCompare(b[0])) // Tri alphabétique par componentName
                  .map(([componentName]) => ({
                    kind: 'block',
                    type: library.info.title + '/__COMPONENTS__/' + componentName,
                  }))
              : []),

            // // @todo: to comment to remove scene blocks
            // ...(library['x-scene-blocks']
            //   ? Object.entries(library['x-scene-blocks'])
            //     .sort((a, b) => a[0].localeCompare(b[0])) // Tri alphabétique par sceneBlock
            //     .map(([sceneBlockName, _sceneBlockSchema]) => ({
            //       kind: 'block',
            //       type: library.info.title + '/__SCENEBLOCK__' + sceneBlockName,
            //     }))
            //   : []),
          ],
        }))
        .filter(library => library.contents.length > 0),
    ],
  };

  return toolbox;
}

function convertPinsLibrariesToBlocklyLibraries(pinsLibraries: any[]) {
  return pinsLibraries.map(schema => ({
    ...schema,
    paths: {
      ...Object.entries(schema.paths ?? {}).reduce(
        (acc: any, [key, path]: [string, any]) => ({
          ...acc,
          [key]: {
            ...path,
            post: {
              ...path.post,
              parameters: !path.post.parameters
                ? []
                : [
                    ...path.post.parameters,
                    ...path.post.parameters
                      .filter(
                        (item: any) =>
                          item.schema?.type === 'array' &&
                          (item.schema.items?.$ref === 'https://schemas.digipair.ai/pinsSettings' ||
                            item.schema.items?.$ref?.includes('#/components/schemas/')),
                      )
                      .map((item: any) => ({
                        ...item,
                        name: item.name + '__EVALUATE',
                        summary: (item.summary || item.name) + ' (evaluate)',
                        required: false,
                        schema: { type: 'string' },
                      })),
                  ],
            },
          },
        }),
        {},
      ),
    },
    components: !schema.components
      ? {}
      : {
          ...schema.components,
          schemas: {
            ...Object.entries(schema.components.schemas).reduce(
              (acc: any, [key, component]: [string, any]) => ({
                ...acc,
                [key]: {
                  ...component,
                  properties: !component.properties
                    ? {}
                    : {
                        ...component.properties,
                        ...Object.entries(component.properties)
                          .filter(
                            ([_propertyKey, propertyValue]: any) =>
                              propertyValue.type === 'array' &&
                              (propertyValue.items?.$ref ===
                                'https://schemas.digipair.ai/pinsSettings' ||
                                propertyValue.items?.$ref?.includes('#/components/schemas/')),
                          )
                          .reduce(
                            (acc: any, [propertyKey, property]: [string, any]) => ({
                              ...acc,
                              [propertyKey + '__EVALUATE']: {
                                ...property,
                                summary: (property.summary || propertyKey) + ' (evaluate)',
                                required: false,
                                schema: { type: 'string' },
                              },
                            }),
                            {},
                          ),
                      },
                },
              }),
              {},
            ),
          },
        },
    'x-scene-blocks': {
      ...Object.entries(schema['x-scene-blocks'] || {}).reduce(
        (acc: any, [key, path]: [string, any]) => ({
          ...acc,
          [key]: {
            ...path,
            metadata: !path.metadata
              ? []
              : [
                  ...path.metadata,
                  ...path.metadata
                    .filter(
                      (item: any) =>
                        item.schema?.type === 'array' &&
                        (item.schema.items?.$ref === 'https://schemas.digipair.ai/pinsSettings' ||
                          item.schema.items?.$ref?.includes('#/components/schemas/')),
                    )
                    .map((item: any) => ({
                      ...item,
                      name: item.name + '__EVALUATE',
                      summary: (item.summary || item.name) + ' (evaluate)',
                      required: false,
                      schema: { type: 'string' },
                    })),
                ],
            parameters: !path.parameters
              ? []
              : [
                  ...path.parameters,
                  ...path.parameters
                    .filter(
                      (item: any) =>
                        item.schema?.type === 'array' &&
                        (item.schema.items?.$ref === 'https://schemas.digipair.ai/pinsSettings' ||
                          item.schema.items?.$ref?.includes('#/components/schemas/')),
                    )
                    .map((item: any) => ({
                      ...item,
                      name: item.name + '__EVALUATE',
                      summary: (item.summary || item.name) + ' (evaluate)',
                      required: false,
                      schema: { type: 'string' },
                    })),
                ],
          },
        }),
        {},
      ),
    },
  }));
}

export function generateBlocklyBlockFromLibraries(
  pinsLibraries: any,
  blocksLegacy: (
    | {
        type: string;
        message0: string;
        args0: (
          | { type: string; name?: undefined; check?: undefined }
          | { type: string; name: string; check: string }
        )[];
        output: null;
        colour: string;
        previousStatement?: undefined;
        nextStatement?: undefined;
        inputsInline?: undefined;
        arg0?: undefined;
        message1?: undefined;
        args1?: undefined;
        message2?: undefined;
        args2?: undefined;
        message3?: undefined;
        args3?: undefined;
        tooltip?: undefined;
        helpUrl?: undefined;
      }
    | {
        type: string;
        message0: string;
        args0: (
          | { type: string; name: string; text: string }
          | { type: string; name: string; text?: undefined }
        )[];
        previousStatement: string;
        nextStatement: string;
        colour: string;
        output?: undefined;
        inputsInline?: undefined;
        arg0?: undefined;
        message1?: undefined;
        args1?: undefined;
        message2?: undefined;
        args2?: undefined;
        message3?: undefined;
        args3?: undefined;
        tooltip?: undefined;
        helpUrl?: undefined;
      }
    | {
        type: string;
        message0: string;
        args0: never[];
        colour: number;
        inputsInline: boolean;
        previousStatement: null;
        nextStatement: null;
        output?: undefined;
        arg0?: undefined;
        message1?: undefined;
        args1?: undefined;
        message2?: undefined;
        args2?: undefined;
        message3?: undefined;
        args3?: undefined;
        tooltip?: undefined;
        helpUrl?: undefined;
      }
    | {
        type: string;
        message0: string;
        args0: never[];
        output: null;
        colour: number;
        previousStatement?: undefined;
        nextStatement?: undefined;
        inputsInline?: undefined;
        arg0?: undefined;
        message1?: undefined;
        args1?: undefined;
        message2?: undefined;
        args2?: undefined;
        message3?: undefined;
        args3?: undefined;
        tooltip?: undefined;
        helpUrl?: undefined;
      }
    | {
        type: string;
        message0: string;
        arg0: never[];
        message1: string;
        args1: { type: string; name: string; text: string }[];
        message2: string;
        args2: (
          | { type: string; name: string; text: string }
          | { type: string; name: string; text?: undefined }
        )[];
        message3: string;
        args3: (
          | { type: string; name: string; text: string }
          | { type: string; name: string; text?: undefined }
        )[];
        colour: number;
        tooltip: string;
        helpUrl: string;
        args0?: undefined;
        output?: undefined;
        previousStatement?: undefined;
        nextStatement?: undefined;
        inputsInline?: undefined;
      }
  )[],
): any[] {
  const blocksLibrary = [...blocksLegacy];
  const blocklyLibraries = convertPinsLibrariesToBlocklyLibraries(pinsLibraries);

  for (const pinsLibrary of blocklyLibraries) {
    //search for pins blocks
    for (const endpoint in pinsLibrary.paths) {
      if (Object.hasOwnProperty.call(pinsLibrary.paths, endpoint)) {
        const endpointData = pinsLibrary.paths[endpoint];
        const methodData = endpointData.post;
        const pinsId = pinsLibrary.info.title + '/__PINS__' + endpoint;

        blocksLibrary.push(getPinsBlockDefinition(pinsLibrary, methodData, pinsId));
      }
    }
  }

  for (const pinsLibrary of blocklyLibraries) {
    //search for components blocks
    if (!pinsLibrary.components || !pinsLibrary.components.schemas) {
      continue;
    }

    for (const endpoint in pinsLibrary.components.schemas) {
      if (Object.hasOwnProperty.call(pinsLibrary.components.schemas, endpoint)) {
        const endpointData = pinsLibrary.components.schemas[endpoint];

        if (!endpointData || !endpointData.properties) {
          continue;
        }

        const componentId = pinsLibrary.info.title + '/__COMPONENTS__/' + endpoint;
        const blockName = endpoint;

        blocksLibrary.push(
          getComponentBlockDefinition(pinsLibrary, blockName, endpointData, componentId),
        );
      }
    }
  }

  for (const pinsLibrary of blocklyLibraries) {
    //search for scene blocks
    for (const endpoint in pinsLibrary['x-scene-blocks']) {
      if (Object.hasOwnProperty.call(pinsLibrary['x-scene-blocks'], endpoint)) {
        const endpointSceneblock = pinsLibrary['x-scene-blocks'][endpoint];
        const sceneBlockId = pinsLibrary.info.title + '/__SCENEBLOCK__' + endpoint;
        const block = getSceneBlockDefinition(pinsLibrary, endpointSceneblock, sceneBlockId);

        blocksLibrary.push(block);
      }
    }
  }

  return blocksLibrary;
}

export function initializeMutator() {
  Blockly.Blocks['mutator_container'] = {
    init: function () {
      this.appendDummyInput().appendField('Inputs');
      this.appendStatementInput('STACK');
      this.setColour(230);
      this.setTooltip('');

      this.workspace.addChangeListener((event: { type: any; newParentId: any }) => {
        if (event.type === Blockly.Events.BLOCK_MOVE) {
          let currentBlock = this.workspace.getBlockById(event.newParentId);
          while (currentBlock) {
            if (currentBlock.id === this.id) {
              let firstBlock = this.getInputTargetBlock('STACK');
              const seenTypes: any = {};
              while (firstBlock) {
                if (seenTypes[firstBlock.type]) {
                  firstBlock.unplug(true);
                } else {
                  seenTypes[firstBlock.type] = true;
                }
                firstBlock = firstBlock.getNextBlock();
              }
              break;
            }
            currentBlock = currentBlock.getSurroundParent();
          }
        }
      });
    },
  };
}

function generateMutator(
  mutatorName: string,
  toolboxItem: any[],
  requiredFields: string | any[],
  originParameters: any[],
) {
  const parameters = [
    ...originParameters,
    { name: '__CONDITION__/if', schema: { type: 'boolean' } },
    { name: '__CONDITION__/each', schema: { type: 'array', items: { type: 'object' } } },
  ];
  const toolboxList = [];
  for (const item of toolboxItem) {
    Blockly.Blocks[mutatorName + '/' + item] = {
      init: function () {
        this.appendDummyInput(item).appendField(
          item.includes('__EVENT__/')
            ? item.replace('__EVENT__/', '@')
            : item.includes('__CONDITION__/')
              ? item.replace('__CONDITION__/', '#')
              : item,
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
      },
    };

    toolboxList.push(mutatorName + '/' + item);
  }
  toolboxList.sort((a, b) => a.localeCompare(b));

  Blockly.Extensions.registerMutator(
    mutatorName,
    {
      saveExtraState: function () {
        return {
          itemList: this.itemList_ || [],
        };
      },

      loadExtraState: function (state: { [x: string]: any }) {
        this.itemList_ = state['itemList'];
        this.updateShape_();
      },

      decompose: function (workspace: { newBlock: (arg0: string) => any }) {
        const containerBlock = workspace.newBlock('mutator_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.inputList.length; i++) {
          if (
            requiredFields.includes(this.inputList[i].name) ||
            /__INPUT$/g.test(this.inputList[i].name)
          ) {
            continue;
          }
          const inputBlock = workspace.newBlock(mutatorName + '/' + this.inputList[i].name);
          inputBlock.initSvg();
          connection.connect(inputBlock.previousConnection);
          connection = inputBlock.nextConnection;
        }

        return containerBlock;
      },

      compose: function (containerBlock: { getInputTargetBlock: (arg0: string) => any }) {
        const inputConnectedArray = [];

        let childBlock = containerBlock.getInputTargetBlock('STACK');
        while (childBlock) {
          const inputName = childBlock.inputList[0].name;
          let fieldName = '';

          if (childBlock.inputList[0]) {
            const fieldRow = childBlock.inputList[0].fieldRow;
            if (fieldRow.length > 0) {
              fieldName = fieldRow[0].getText();
            }
          }

          inputConnectedArray.push({
            id: inputName,
            name: fieldName,
          });

          childBlock = childBlock.nextConnection && childBlock.nextConnection.targetBlock();
        }

        this.itemList_ = inputConnectedArray;
        this.updateShape_();
      },

      updateShape_: function () {
        const inputToEnable = this.itemList_;
        const inputLoaded = this.inputList.map((input: { name: any }) => input.name);
        const inputToEnableIds = inputToEnable.map((input: { id: any }) => input.id);

        for (const input of inputLoaded) {
          if (requiredFields.includes(input)) continue;
          if (!inputToEnableIds.includes(input.replace(/__INPUT$/g, ''))) {
            this.removeInput(input);
          }
        }

        for (const input of inputToEnable) {
          if (requiredFields.includes(input)) {
            continue;
          }
          if (!inputLoaded.includes(input.id)) {
            const id = input.id.indexOf('/') < 0 ? input.id : input.id.split('/')[1];
            const parameter = parameters.find((param: { name: any }) => param.name === id) ?? {};

            if (
              parameter.schema?.type === 'array' &&
              (parameter.schema.items?.$ref === 'https://schemas.digipair.ai/pinsSettings' ||
                parameter.schema.items?.$ref?.includes('#/components/schemas/'))
            ) {
              this.appendDummyInput(input.id + '__INPUT').appendField(input.name);
              this.appendStatementInput(input.id);
            } else if (input.id === 'pins') {
              this.appendDummyInput(input.id + '__INPUT').appendField(input.name);
              this.appendStatementInput(input.id);
            } else {
              this.appendValueInput(input.id).appendField(input.name);
            }
          }
        }
      },
    },
    null,
    toolboxList,
  );
}

function getSceneBlockDefinition(
  library: { info: { [x: string]: string; title: string } },
  methodData: { summary: string; metadata: never[]; parameters: never[]; tags: string | string[] },
  sceneBlockId: string,
) {
  const blockDefinition: any = {
    type: sceneBlockId,
    message0: library.info['x-icon'] + ' ' + methodData.summary,
    args0: [], //Empty field, only used for the scene block display name
    message1: '',
    args1: [], //parameters inputs field (going in metadata)
    message2: '', // metadata inputs field
    args2: [],
    message3: '',
    args3: [], //parameters inputs field (going in parameters)
    colour: '#212e3c',
    tooltip: 'library : ' + library.info.title,
  };

  const metadata: any[] = methodData.metadata || [];
  const parameters: any[] = methodData.parameters || [];

  if (methodData.tags && methodData.tags.includes('needPins')) {
    const parameter = {
      required: methodData.tags.includes('requirePins'),
      name: 'EXECUTE_PINS',
      summary: 'pins',
      schema: {
        type: 'array',
        items: {
          $ref: 'https://schemas.digipair.ai/pinsSettings',
        },
      },
    };
    parameters.push(parameter);
  }

  const requiredParamInputs = parameters.filter(
    (param: { required: boolean }) => param.required === true,
  );
  const requiredFields = [
    ...requiredParamInputs.map((param: { name: any }) => param.name),
    ...metadata.map((param: { name: any }) => 'metadata--' + param.name),
  ];
  requiredFields.push('');

  // metadata
  for (let i = 0; i < metadata?.length; i++) {
    const parameter: any =
      metadata.find((param: { name: any }) => param.name === metadata[i].name) ?? {};
    const position = blockDefinition['args1'].length;

    blockDefinition['args1'].push({
      type: 'field_label',
      name: `NAME_INPUT_METADATA`,
      text: (parameter.summary || parameter.name) + '*',
    });

    if (
      parameter.schema?.type === 'array' &&
      (parameter.schema.items?.$ref === 'https://schemas.digipair.ai/pinsSettings' ||
        parameter.schema.items?.$ref?.includes('#/components/schemas/'))
    ) {
      blockDefinition['message1'] +=
        ' %' + (position + 1) + ' %' + (position + 2) + ' %' + (position + 3);

      blockDefinition['args1'].push({
        type: 'input_dummy',
      });
      blockDefinition['args1'].push({
        type: 'input_statement',
        name: 'metadata--' + parameter.name,
      });
    } else {
      blockDefinition['message1'] += ' %' + (position + 1) + ' %' + (position + 2);

      blockDefinition['args1'].push({
        type: 'input_value',
        name: 'metadata--' + parameter.name,
      });
    }
  }

  // mutator toolbox
  const mutatorToolbox = parameters
    .map((param: { name: any }) => param.name)
    .filter((name: any) => !requiredFields.includes(name));

  // parameters
  for (let i = 0; i < requiredParamInputs.length; i++) {
    const parameter =
      parameters.find((param: { name: any }) => param.name === requiredParamInputs[i].name) ?? {};
    const position = blockDefinition['args3'].length;

    blockDefinition['args3'].push({
      type: 'field_label',
      name: `NAME_INPUT`,
      text: (parameter.summary || parameter.name) + '*',
    });

    if (
      parameter.schema?.type === 'array' &&
      (parameter.schema.items?.$ref === 'https://schemas.digipair.ai/pinsSettings' ||
        parameter.schema.items?.$ref?.includes('#/components/schemas/'))
    ) {
      blockDefinition['message3'] +=
        ' %' + (position + 1) + ' %' + (position + 2) + ' %' + (position + 3);

      blockDefinition['args3'].push({
        type: 'input_dummy',
      });
      blockDefinition['args3'].push({
        type: 'input_statement',
        name: parameter.name,
      });
    } else {
      blockDefinition['message3'] += ' %' + (position + 1) + ' %' + (position + 2);

      blockDefinition['args3'].push({
        type: 'input_value',
        name: parameter.name,
      });
    }
  }

  if (mutatorToolbox.length > 0) {
    blockDefinition.mutator = sceneBlockId + '/mutator';
    generateMutator(sceneBlockId + '/mutator', mutatorToolbox, requiredFields, [
      ...parameters,
      ...(metadata || []),
    ]);
  }

  return blockDefinition;
}
