declare const Blockly: any;

export const jsonGenerator = new Blockly.Generator('JSON');

jsonGenerator.PRECEDENCE = 0;

jsonGenerator['generic-scene-block'] = function (block: { getFieldValue: (arg0: string) => any }) {
  function safeParse(jsonString: string, defaultValue: any) {
    try {
      if (jsonString && jsonString.trim() !== '') {
        return JSON.parse(jsonString);
      }
    } catch (e) {
      console.error('JSON parsing error:', e);
    }
    return defaultValue;
  }

  const pinsCode =
    jsonGenerator.valueToCode(block, 'EXECUTE_PINS', jsonGenerator.PRECEDENCE) || 'null';
  const metadataCode =
    jsonGenerator.valueToCode(block, 'METADATA_INPUT', jsonGenerator.PRECEDENCE) || '{}';
  const eventsCode =
    jsonGenerator.valueToCode(block, 'EVENTS_INPUT', jsonGenerator.PRECEDENCE) || '{}';

  const pinsData = safeParse(pinsCode, null);
  const metadata = safeParse(metadataCode, {});
  const events = safeParse(eventsCode, {});

  const objectToSerialize = {
    type: block.getFieldValue('SCENE_TYPE') || null,
    metadata: metadata,
    ...(pinsData !== null ? pinsData : {}),
    events: events,
  };

  const serializedCode = JSON.stringify(objectToSerialize);
  return [serializedCode, jsonGenerator.PRECEDENCE];
};

jsonGenerator['logic_null'] = function (block: any) {
  return ['null', jsonGenerator.PRECEDENCE];
};

jsonGenerator['text_multiline'] = function (block: { getFieldValue: (arg0: string) => any }) {
  const textValue = block.getFieldValue('TEXT');
  const code = `${JSON.stringify(textValue)}`;
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['math_number'] = function (block: { getFieldValue: (arg0: string) => any }) {
  const code = String(block.getFieldValue('NUM'));
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['logic_boolean'] = function (block: { getFieldValue: (arg0: string) => string }) {
  const code = block.getFieldValue('BOOL') === 'TRUE' ? 'true' : 'false';
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['member'] = function (block: { getFieldValue: (arg0: string) => any }) {
  const name = block.getFieldValue('MEMBER_NAME');
  const value = jsonGenerator.valueToCode(block, 'MEMBER_VALUE', jsonGenerator.PRECEDENCE);
  const code = `"${name}": ${value}`;
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['array-input'] = function (block: any) {
  const value = jsonGenerator.valueToCode(block, 'MEMBER_VALUE', jsonGenerator.PRECEDENCE);
  const code = `${value}`;
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['array'] = function (block: any) {
  const statementMembers = jsonGenerator.customStatementToCode(block, 'MEMBERS');
  const code = '[\n' + statementMembers + '\n]';
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['object'] = function (block: any) {
  const statementMembers = jsonGenerator.customStatementToCode(block, 'MEMBERS');
  const code = '{\n' + statementMembers + '\n}';
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['unknown-format'] = function (block: any) {
  const code = '"unknown-format"';
  return [code, jsonGenerator.PRECEDENCE];
};
jsonGenerator['unknown-pins'] = function (block: any) {
  const code = '"unknown-pins"';
  return [code, jsonGenerator.PRECEDENCE];
};
jsonGenerator['unknown-component'] = function (block: any) {
  const code = '"unknown-component"';
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator.scrub_ = function (
  block: { nextConnection: { targetBlock: () => any } },
  code: string,
  thisOnly: any,
) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + ',\n' + jsonGenerator.blockToCode(nextBlock);
  }
  return code;
};

jsonGenerator.generatePin = function (block: { type: string; inputList: any[] }) {
  let code = '{\n';

  const elementName = block.type.split('/__PINS__/')[1];
  const libraryName = block.type.split('/__PINS__/')[0];
  code += `  "library": "${libraryName}",`;
  code += `\n  "element": "${elementName}",`;

  let propertiesCode = '';
  let eventCode = '';
  let conditionCode = '';

  for (let i = 0, input; (input = block.inputList[i]); i++) {
    const inputName = input.name;

    const connectedBlock = input.connection && input.connection.targetBlock();
    if (connectedBlock) {
      if (inputName !== 'pins' && input.type == 3) {
        const inputCode = jsonGenerator.customStatementToCode(block, inputName);

        if (inputName.includes('__EVENT__/')) {
          eventCode += `    "${inputName.split('__EVENT__/')[1]}": [${inputCode}],`;
        } else if (inputName.includes('__CONDITION__/')) {
          conditionCode += `    "${inputName.split('__CONDITION__/')[1]}": [${inputCode}],`;
        } else {
          propertiesCode += `    "${inputName}": [${inputCode}],`;
        }
      } else {
        const codeToAdd = getCodeFromBlock(connectedBlock);
        const inputCode = jsonGenerator.customStatementToCode(block, inputName);

        if (inputName === 'pins') {
          code += `  "${inputName}": [${inputCode}],`;
        } else if (inputName.includes('__CONDITION__/')) {
          conditionCode += `    "${inputName.split('__CONDITION__/')[1].replace(/__EVALUATE$/g, '')}": ${inputCode},`;
        } else if (codeToAdd !== 'undefined') {
          propertiesCode += `    "${inputName.replace(/__EVALUATE$/g, '')}": ${codeToAdd},`;
        }
      }
    }
  }

  if (propertiesCode !== '') {
    if (propertiesCode.endsWith(',')) {
      propertiesCode = propertiesCode.slice(0, -1);
    }
    code += '\n"properties": {\n' + propertiesCode + '\n  },';
  }

  if (eventCode !== '') {
    if (eventCode.endsWith(',')) {
      eventCode = eventCode.slice(0, -1);
    }
    code += '\n"events": {\n' + eventCode + '\n  },';
  }

  if (conditionCode !== '') {
    if (conditionCode.endsWith(',')) {
      conditionCode = conditionCode.slice(0, -1);
    }
    code += '\n"conditions": {\n' + conditionCode + '\n  },';
  }

  if (code.endsWith(',')) {
    code = code.slice(0, -1);
  }
  code += '}';

  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator.generateComponent = function (block: { inputList: any[] }) {
  let code = '{\n';

  for (let i = 0, input; (input = block.inputList[i]); i++) {
    const inputName = input.name;
    const connectedBlock = input.connection && input.connection.targetBlock();
    let codeToAdd: string;

    if (connectedBlock) {
      if (input.type == 3) {
        const code = jsonGenerator.customStatementToCode(block, inputName);
        codeToAdd = '[' + code + ']';
      } else {
        codeToAdd = getCodeFromBlock(connectedBlock);
      }

      if (codeToAdd !== 'undefined') {
        code += `  "${inputName.replace(/__EVALUATE$/g, '')}": ${codeToAdd},`;
      }
    }
  }

  if (code.endsWith(',')) {
    code = code.slice(0, -1);
  }

  code += '\n}';

  return [code, jsonGenerator.PRECEDENCE];
};

Blockly.Generator.prototype.blockToCode = function (block: { type: string | number }) {
  if (!block) {
    return '';
  }

  if (isPins(block)) {
    return this.generatePin(block);
  } else if (isComponent(block)) {
    return this.generateComponent(block);
  } else if (isSceneBlock(block)) {
    return this.generateSceneBlock(block);
  }

  const func = this[block.type];
  if (typeof func === 'function') {
    const result = func.call(this, block);
    if (Array.isArray(result) && result.length === 2) {
      return result;
    } else {
      console.log('Unexpected result from generator for block type:', block.type, result);
      return ['', 0];
    }
  }
};

jsonGenerator.customStatementToCode = function (
  block: { getInputTargetBlock: (arg0: any) => any },
  inputName: any,
) {
  let code = '';
  let connectedBlock = block.getInputTargetBlock(inputName);

  while (connectedBlock) {
    code += getCodeFromBlock(connectedBlock) + ',';
    connectedBlock = connectedBlock.nextConnection && connectedBlock.nextConnection.targetBlock();
  }
  if (code.endsWith(',')) {
    code = code.slice(0, -1);
  }

  return code;
};

function isPins(block: { type: any }) {
  const blockType = block.type;

  if (blockType.includes('/__PINS__/')) {
    return true;
  }

  return false;
}

function isComponent(block: { type: any }) {
  const blockType = block.type;

  if (blockType.includes('/__COMPONENTS__/')) {
    return true;
  }

  return false;
}

function isSceneBlock(block: { type: any }) {
  const blockType = block.type;

  if (blockType.includes('/__SCENEBLOCK__/')) {
    return true;
  }

  return false;
}

jsonGenerator.generateSceneBlock = function (block: { inputList: any[]; type: string }) {
  function safeParse(jsonString: string, defaultValue: any) {
    try {
      if (jsonString && jsonString.trim() !== '') {
        return JSON.parse(jsonString);
      }
    } catch (e) {
      console.error('JSON parsing error:', e);
    }
    return defaultValue;
  }

  const pinsCode =
    jsonGenerator.customStatementToCode(block, 'EXECUTE_PINS', jsonGenerator.PRECEDENCE) || '';

  const pinsData = safeParse('[' + pinsCode + ']', null);
  const metadata = {};
  const properties = {};

  block.inputList.forEach(function (input: { name: string }) {
    if (input.name !== 'EXECUTE_PINS') {
      const isMetadata = input.name.startsWith('metadata--');
      const target: any = isMetadata ? metadata : properties;
      const name = isMetadata ? input.name.replace('metadata--', '') : input.name;

      const fieldValue = valueToCode(block, input);

      if (fieldValue) {
        target[name.replace(/__EVALUATE$/g, '')] = safeParse(fieldValue, {});
      }
    }
  });

  const element = block.type.split('/__SCENEBLOCK__/')[1];
  const library = block.type.split('/__SCENEBLOCK__/')[0];

  const objectToSerialize = {
    library,
    element,
    metadata,
    properties,
    pins: pinsData !== null ? pinsData : [],
  };

  const serializedCode = JSON.stringify(objectToSerialize);
  return [serializedCode, jsonGenerator.PRECEDENCE];
};

function getCodeFromBlock(block: { type: string | number }) {
  let code = '';
  if (isPins(block)) {
    const pinCode = jsonGenerator.generatePin(block);
    code += pinCode[0];
  } else if (isComponent(block)) {
    const componentCode = jsonGenerator.generateComponent(block);
    code += componentCode[0];
  } else {
    const generalCode = jsonGenerator[block.type](block);
    code += generalCode[0];
  }
  return code;
}

function valueToCode(block: any, input: any): string {
  let result = '';

  if (input.type === 3) {
    const code = jsonGenerator.customStatementToCode(block, input.name);
    result = '[' + code + ']';
  } else {
    result = jsonGenerator.valueToCode(block, input.name, jsonGenerator.PRECEDENCE);
  }

  return result;
}
