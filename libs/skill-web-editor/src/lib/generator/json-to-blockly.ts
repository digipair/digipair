let libraries: any[];

export function initializeWorkspaceFromPinsAndLibraries(
  pinsSettings: any,
  workspace: any,
  librariesToLoad: any,
) {
  workspace.clear();
  libraries = librariesToLoad;
  generateSceneBlock(pinsSettings, workspace);
}

function generateSceneBlock(pinsSettings: any, workspace: any) {
  let sceneBlockName = '';
  let sceneBlockLibrary = '';
  let hasSceneBlock = false;
  let foundLibrary;

  if (
    pinsSettings.type &&
    typeof pinsSettings.type === 'string' &&
    pinsSettings.type.includes('/')
  ) {
    sceneBlockName = '/' + pinsSettings.element;
    sceneBlockLibrary = pinsSettings.library;

    foundLibrary = libraries.find(
      (library: { info: { title: string } }) => library.info.title === sceneBlockLibrary,
    );
    hasSceneBlock =
      foundLibrary &&
      foundLibrary['x-scene-blocks'] &&
      Object.hasOwnProperty.call(foundLibrary['x-scene-blocks'], sceneBlockName);
  }

  let sceneBlock;
  if (hasSceneBlock) {
    //generating scene block
    const sceneBlockId = sceneBlockLibrary + '/__SCENEBLOCK__' + sceneBlockName;
    sceneBlock = workspace.newBlock(sceneBlockId);

    if (sceneBlock.mutator) {
      sceneBlock.itemList_ = itemListFromSceneSettings(
        pinsSettings,
        foundLibrary['x-scene-blocks'][sceneBlockName],
      );
      sceneBlock.updateShape_();
    }
    sceneBlock.moveBy(20, 20);
    sceneBlock.initSvg();
    sceneBlock.render();

    if (pinsSettings.metadata) {
      for (const [metadataKey, metadataValue] of Object.entries(pinsSettings.metadata)) {
        const inputName = 'metadata--' + metadataKey;
        if (sceneBlock.getInput(inputName)) {
          const parameter = foundLibrary['x-scene-blocks'][sceneBlockName].metadata?.find(
            (p: { name: string }) => p.name === metadataKey,
          );
          if (parameter) {
            if (parameter.schema.type === 'array' && parameter.schema.items.$ref) {
              const parameterType = getParameterType(parameter.schema.items);

              for (const componentSettings of (metadataValue as any[]).reverse()) {
                const componentBlock =
                  parameterType === 'component'
                    ? generateBlockFromComponent(
                        componentSettings,
                        workspace,
                        foundLibrary,
                        parameter.schema.items.$ref,
                      )
                    : generateBlockFromPins(componentSettings, workspace);
                const sceneInputConnection = sceneBlock.getInput(inputName).connection;
                connectBlock(componentBlock, sceneInputConnection);
              }
            } else {
              const metadataBlock = generateParameterBlock(
                parameter.schema,
                metadataValue,
                workspace,
                foundLibrary,
              );
              const sceneInputConnection = sceneBlock.getInput(inputName).connection;
              connectBlock(metadataBlock, sceneInputConnection);
            }
          } else {
            console.log(
              `[generateSceneBlock] - Aucun metadata nommé "${inputName}" trouvé dans les métadonnées de "${sceneBlockName}".`,
            );
          }
        } else {
          console.log(
            `[generateSceneBlock] - Le bloc "${sceneBlockId}" n'a pas d'entrée metadata nommée "${inputName}" mais son format JSON semble en avoir une, une perte de donnée est possible si vous sauvegardez sans mettre à jour la librarie "${sceneBlockLibrary}"`,
          );
        }
      }
    }

    if (pinsSettings.properties) {
      for (const [key, value] of Object.entries(pinsSettings.properties)) {
        const inputName = key;
        if (sceneBlock.getInput(inputName)) {
          const parameter = foundLibrary['x-scene-blocks'][sceneBlockName].parameters?.find(
            (p: { name: string }) => p.name === inputName,
          );
          if (parameter) {
            if (parameter.schema.type === 'array' && parameter.schema.items.$ref) {
              const parameterType = getParameterType(parameter.schema.items);

              for (const componentSettings of (value as any[]).reverse()) {
                const componentBlock =
                  parameterType === 'component'
                    ? generateBlockFromComponent(
                        componentSettings,
                        workspace,
                        foundLibrary,
                        parameter.schema.items.$ref,
                      )
                    : generateBlockFromPins(componentSettings, workspace);
                const sceneInputConnection = sceneBlock.getInput(inputName).connection;
                connectBlock(componentBlock, sceneInputConnection);
              }
            } else {
              const metadataBlock = generateParameterBlock(
                parameter.schema,
                value,
                workspace,
                foundLibrary,
              );
              const sceneInputConnection = sceneBlock.getInput(inputName).connection;
              connectBlock(metadataBlock, sceneInputConnection);
            }
          } else {
            console.log(
              `[generateSceneBlock] - Aucun paramètre nommé "${inputName}" trouvé dans les métadonnées de "${sceneBlockName}".`,
            );
          }
        } else {
          console.log(
            `[generateSceneBlock] - Le bloc "${sceneBlockId}" n'a pas d'entrée parameters nommée "${inputName}" mais son format JSON semble en avoir une, une perte de donnée est possible si vous sauvegardez sans mettre à jour la librarie "${sceneBlockLibrary}"`,
          );
        }
      }
    }
  } else {
    //generating generic debug scene block
    console.log(
      '[generateSceneBlock] - Scene missing type or not existing in library ',
      sceneBlockLibrary,
    );
    sceneBlock = workspace.newBlock('generic-scene-block');
    sceneBlock.initSvg();

    const typeValue = pinsSettings && pinsSettings.type ? pinsSettings.type : 'null';
    sceneBlock.setFieldValue(typeValue, 'SCENE_TYPE');

    const metadataValue = pinsSettings && pinsSettings.metadata ? pinsSettings.metadata : null;
    const metadataBlock = generateBlockFromJson(metadataValue, workspace);

    const sceneInputConnection = sceneBlock.getInput('METADATA_INPUT').connection;
    connectBlock(metadataBlock, sceneInputConnection);
  }

  const pinsConnection = sceneBlock.getInput('EXECUTE_PINS')?.connection;

  if (pinsConnection) {
    const reversedPins = [...(pinsSettings.pins || [])].reverse();
    for (const pinsSetting of reversedPins) {
      const pinsBlock = generateBlockFromPins(pinsSetting, workspace);
      connectBlock(pinsBlock, pinsConnection);
    }
  }

  sceneBlock.render();
  return sceneBlock;
}

function generateBlockFromPins(pinsSettings: any, workspace: any): any {
  const blockPath = pinsSettings.library + '/__PINS__/' + pinsSettings.element;
  const library: any = getLibraryFromName(pinsSettings.library);

  if (!library) {
    const pinsBlock = workspace.newBlock('unknown-pins');
    console.log('[generateBlockFromPins] - Library not loaded', pinsSettings.library);
    pinsBlock.initSvg();
    pinsBlock.render();
    return pinsBlock;
  }

  const pinsDefinition = library.paths['/' + pinsSettings.element]?.post;

  if (!pinsDefinition) {
    const pinsBlock = workspace.newBlock('unknown-pins');
    console.log(
      '[generateBlockFromPins] - Pins not existing in library',
      pinsSettings.element,
      pinsSettings.library,
    );
    pinsBlock.initSvg();
    pinsBlock.render();
    return pinsBlock;
  }

  const pinsBlock = workspace.newBlock(blockPath);
  if (pinsBlock.mutator) {
    pinsBlock.itemList_ = itemListFromPinsSettings(pinsSettings, pinsDefinition);
    pinsBlock.updateShape_();
  }
  pinsBlock.initSvg();
  pinsBlock.render();

  if (
    library.paths['/' + pinsSettings.element].post.tags &&
    library.paths['/' + pinsSettings.element].post.tags.includes('needPins')
  ) {
    const pinsConnection = pinsBlock.getInput('pins').connection;

    const reversedPins = [...(pinsSettings.pins || [])].reverse();
    for (const pinsSetting of reversedPins) {
      const pinsBlock = generateBlockFromPins(pinsSetting, workspace);
      connectBlock(pinsBlock, pinsConnection);
    }
  }

  if (!pinsSettings || !pinsSettings.properties) {
    return pinsBlock;
  }

  for (const parameter of pinsDefinition.parameters) {
    if (!Object.prototype.hasOwnProperty.call(pinsSettings.properties, parameter.name)) {
      continue;
    }

    const valueToLoad = pinsSettings.properties[parameter.name];
    if (parameter.schema.type === 'array' && parameter.schema.items.$ref) {
      const parameterType = getParameterType(parameter.schema.items);

      for (const propertyValue of (valueToLoad as any[]).reverse()) {
        const parameterBlock =
          parameterType === 'component'
            ? generateBlockFromComponent(
                propertyValue,
                workspace,
                library,
                parameter.schema.items.$ref,
              )
            : generateBlockFromPins(propertyValue, workspace);
        const sceneInputConnection = pinsBlock.getInput(parameter.name).connection;
        connectBlock(parameterBlock, sceneInputConnection);
      }
    } else {
      const parameterBlock = generateParameterBlock(
        parameter.schema,
        valueToLoad,
        workspace,
        library,
      );
      const sceneInputConnection = pinsBlock.getInput(parameter.name).connection;
      connectBlock(parameterBlock, sceneInputConnection);
    }
  }

  for (const eventName in pinsDefinition['x-events']) {
    if (
      !pinsSettings.events ||
      !Object.prototype.hasOwnProperty.call(pinsSettings.events, eventName)
    ) {
      continue;
    }

    const valueToLoad = pinsSettings.events[eventName];
    const schema = { $ref: 'https://www.pinser.world/schemas/pinsSettings' };
    const eventBlock = generateParameterBlock(schema, valueToLoad, workspace, library);

    eventBlock?.initSvg();
    eventBlock?.render();

    const input = pinsBlock.getInput('__EVENT__/' + eventName);
    if (input) {
      const inputConnection = input.connection;
      connectBlock(eventBlock, inputConnection);
    } else {
      console.log(
        `[generateBlockFromPins] - Block ${pinsBlock.type} has no input named __EVENT__/${eventName}`,
      );
    }
  }

  return pinsBlock;
}

function generateBlockFromComponent(
  componentSettings: any,
  workspace: any,
  library: { info: { title: string }; components: { schemas: { [x: string]: any } } },
  component$ref: string,
): any {
  const componentName = component$ref.split('/').pop() as string;
  const blockPath = library.info.title + '/__COMPONENTS__/' + componentName;

  const componentDefinition = library.components.schemas[componentName];

  if (!componentDefinition) {
    const componentBlock = workspace.newBlock('unknown-component');
    componentBlock.initSvg();
    componentBlock.render();
    return componentBlock;
  }

  const componentBlock = workspace.newBlock(blockPath);
  if (componentBlock.mutator) {
    componentBlock.itemList_ = itemListFromComponentSettings(
      componentSettings,
      componentDefinition,
    );
    componentBlock.updateShape_();
  }
  componentBlock.initSvg();
  componentBlock.render();

  for (const [propertyKey, schema] of Object.entries<any>(componentDefinition.properties)) {
    if (!Object.prototype.hasOwnProperty.call(componentSettings, propertyKey)) {
      continue;
    }
    const valueToLoad = componentSettings[propertyKey];

    if (schema.type === 'array' && schema.items.$ref) {
      const parameterType = getParameterType(schema.items);

      for (const propertyValue of (valueToLoad as any[]).reverse()) {
        const parameterBlock =
          parameterType === 'component'
            ? generateBlockFromComponent(propertyValue, workspace, library, schema.items.$ref)
            : generateBlockFromPins(propertyValue, workspace);
        const sceneInputConnection = componentBlock.getInput(propertyKey).connection;
        connectBlock(parameterBlock, sceneInputConnection);
      }
    } else {
      const parameterBlock = generateParameterBlock(schema, valueToLoad, workspace, library);
      const sceneInputConnection = componentBlock.getInput(propertyKey).connection;
      connectBlock(parameterBlock, sceneInputConnection);
    }
  }

  componentBlock.render();

  return componentBlock;
}

function generateParameterBlock(
  schema: { $ref: any; items?: any },
  valueToLoad: any,
  workspace: { newBlock: (arg0: string) => any },
  library: any,
) {
  if (valueToLoad === undefined) {
    return;
  }

  const parameterType = typeof valueToLoad === 'string' ? 'string' : getParameterType(schema);
  let arrayInputConnection;
  let paramBlock;

  switch (parameterType) {
    case 'string':
      paramBlock = workspace.newBlock('text_multiline');
      if (valueToLoad === undefined) {
        console.log(`[getParameterType] - valueToLoad is undefined in case string`);
        break;
      }
      paramBlock.setFieldValue(valueToLoad, 'TEXT');
      break;
    case 'number':
      paramBlock = workspace.newBlock('math_number');
      if (valueToLoad === undefined) {
        console.log(`[getParameterType] - valueToLoad is undefined in case number`);
        break;
      }
      paramBlock.getField('NUM').setValue(valueToLoad);
      break;
    case 'boolean':
      paramBlock = workspace.newBlock('logic_boolean');
      if (valueToLoad === true) {
        paramBlock.getField('BOOL').setValue('TRUE');
      } else if (valueToLoad === false) {
        paramBlock.getField('BOOL').setValue('FALSE');
      } else {
        console.log(`[getParameterType] - valueToLoad is undefined in case boolean`);
        break;
      }
      break;
    case 'array':
      paramBlock = workspace.newBlock('array');
      paramBlock.initSvg();
      paramBlock.render();
      arrayInputConnection = paramBlock.getInput('MEMBERS').connection;

      for (let key = valueToLoad.length - 1; key >= 0; key--) {
        const memberBlock = workspace.newBlock('array-input');
        memberBlock.initSvg();
        memberBlock.render();

        const parentConnection = memberBlock.getInput('MEMBER_VALUE').connection;
        const newBlock = generateParameterBlock(schema.items, valueToLoad[key], workspace, library);
        connectBlock(newBlock, parentConnection);

        memberBlock.initSvg();
        memberBlock.render();

        connectBlock(memberBlock, arrayInputConnection);
      }
      break;
    case 'component':
      paramBlock = generateBlockFromComponent(valueToLoad, workspace, library, schema.$ref);
      break;
    case 'pins':
      paramBlock = generateBlockFromPins(valueToLoad, workspace);
      break;
    case 'object':
      paramBlock = generateBlockFromJson(valueToLoad, workspace);
      break;
    default:
      paramBlock = workspace.newBlock('unknown-format');
      break;
  }

  return paramBlock;
}

function getParameterType(schema: any) {
  let typeToReturn = 'unknown-type';
  const basicTypes = ['string', 'number', 'boolean', 'array', 'object'];

  if (schema !== null && typeof schema !== 'undefined') {
    if (Object.prototype.hasOwnProperty.call(schema, 'type')) {
      if (basicTypes.includes(schema.type)) {
        typeToReturn = schema.type;
      }
    } else if (Object.prototype.hasOwnProperty.call(schema, '$ref')) {
      if (schema.$ref.includes('#/components/schemas/')) {
        typeToReturn = 'component';
      } else typeToReturn = 'pins';
    }
  }

  return typeToReturn;
}

function getLibraryFromName(name: any) {
  const library = libraries.find(
    (library: { info: { title: any } }) => library.info.title === name,
  );
  return library;
}

function connectBlock(targetBlock: any, parentConnection: any) {
  if (parentConnection) {
    const childConnection = targetBlock?.outputConnection || targetBlock?.previousConnection;
    parentConnection.connect(childConnection);
  }
  targetBlock?.initSvg();
  targetBlock?.render();
}

function generateBlockFromJson(json_structure: any, workspace: any) {
  if (json_structure === null) {
    const targetBlock = workspace.newBlock('logic_null');
    return targetBlock;
  }

  const type = typeof json_structure;
  let targetBlock;
  let memberInputConnection;

  switch (type) {
    case 'string':
      targetBlock = workspace.newBlock('text_multiline');
      targetBlock.setFieldValue(json_structure, 'TEXT');
      break;
    case 'number':
      targetBlock = workspace.newBlock('math_number');
      targetBlock.setFieldValue(String(json_structure), 'NUM');
      break;
    case 'boolean':
      targetBlock = workspace.newBlock('logic_boolean');
      targetBlock.setFieldValue(json_structure ? 'TRUE' : 'FALSE', 'BOOL');
      break;
    case 'object':
      if (Array.isArray(json_structure)) {
        targetBlock = workspace.newBlock('array');
        targetBlock.initSvg();
        targetBlock.render();
        memberInputConnection = targetBlock.getInput('MEMBERS').connection;

        for (let key = json_structure.length - 1; key >= 0; key--) {
          const memberBlock = workspace.newBlock('array-input');
          memberBlock.initSvg();
          memberBlock.render();

          const parentConnection = memberBlock.getInput('MEMBER_VALUE').connection;
          const newBlock = generateBlockFromJson(json_structure[key], workspace);
          connectBlock(newBlock, parentConnection);

          memberBlock.initSvg();
          memberBlock.render();

          connectBlock(memberBlock, memberInputConnection);
        }
      } else {
        targetBlock = workspace.newBlock('object');
        targetBlock.initSvg();
        targetBlock.render();
        memberInputConnection = targetBlock.getInput('MEMBERS').connection;

        const keys = Object.keys(json_structure);
        for (let key = keys.length - 1; key >= 0; key--) {
          const memberBlock = workspace.newBlock('member');
          memberBlock.setFieldValue(keys[key], 'MEMBER_NAME');
          memberBlock.initSvg();
          memberBlock.render();

          const parentConnection = memberBlock.getInput('MEMBER_VALUE').connection;
          const newBlock = generateBlockFromJson(json_structure[keys[key]], workspace);
          connectBlock(newBlock, parentConnection);

          memberBlock.initSvg();
          memberBlock.render();

          connectBlock(memberBlock, memberInputConnection);
        }
      }
      break;
  }
  return targetBlock;
}

function itemListFromPinsSettings(
  pinsSettings: { properties: any; events: any },
  pinsDefinition: { [x: string]: any; parameters: any; tags: string | string[] },
): any {
  const inputArray: { id: any; name: any }[] = [];

  if (!pinsSettings || !pinsDefinition) {
    console.log('[itemListFromPinsSettings] - Undefined pinsSettings or pinsDefinition');
    return inputArray;
  }

  if (pinsDefinition.parameters && pinsSettings.properties) {
    for (const parameter of pinsDefinition.parameters) {
      if (!Object.prototype.hasOwnProperty.call(pinsSettings.properties, parameter.name)) {
        continue;
      }
      inputArray.push({ id: parameter.name, name: parameter.name });
    }
  }

  if (pinsDefinition.tags && pinsDefinition.tags.includes('needPins')) {
    inputArray.push({ id: 'pins', name: 'pins' });
  }

  if (pinsDefinition['x-events'] && pinsSettings.events) {
    for (const eventName in pinsDefinition['x-events']) {
      if (!Object.prototype.hasOwnProperty.call(pinsSettings.events, eventName)) {
        continue;
      }
      inputArray.push({ id: '__EVENT__/' + eventName, name: '@' + eventName });
    }
  }

  return inputArray;
}

function itemListFromComponentSettings(
  componentSettings: any,
  componentDefinition: { properties: { [s: string]: any } | ArrayLike<any> },
): any {
  const inputArray = [];

  for (const [propertyKey, _propertyValue] of Object.entries<any>(componentDefinition.properties)) {
    if (!Object.prototype.hasOwnProperty.call(componentSettings, propertyKey)) {
      continue;
    }
    inputArray.push({ id: propertyKey, name: propertyKey });
  }

  return inputArray;
}

function itemListFromSceneSettings(
  sceneSettings: { properties: any },
  sceneDefinition: { parameters: any },
): any {
  const inputArray = [];

  if (sceneDefinition.parameters && sceneSettings.properties) {
    for (const parameter of sceneDefinition.parameters) {
      if (!Object.prototype.hasOwnProperty.call(sceneSettings.properties, parameter.name)) {
        continue;
      }
      inputArray.push({ id: parameter.name, name: parameter.name });
    }
  }

  return inputArray;
}