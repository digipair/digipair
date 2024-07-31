# @digipair/skill-data-management

**Version:** 0.1.0  
**Summary:** Data Management  
**Description:** This skill allows for the manipulation and transformation of data.  
**Icon:** 📝

## Table of Contents

- [Functions](#functions)
  - [transform](#transform)
  - [setVariable](#setvariable)
  - [struct2array](#struct2array)
  - [jsonParse](#jsonparse)

## Functions

### transform

Transform the data

#### Description

Transforms a value using the standard data transformation mechanics of the engine.

#### Parameters

| Name    | Type   | Required | Description                              |
|---------|--------|----------|------------------------------------------|
| value   | object | No       | Value to transform                       |
| execute | array  | No       | Actions to apply to the data            |

#### Example

```json
{
  "library": "@digipair/skill-data-management",
  "element": "transform",
  "properties": {
    "value": {
      "key": "value"
    },
    "execute": [
      {
        "action": "transformAction",
        "parameters": {}
      }
    ]
  }
}
```

### setVariable

Store the variable

#### Description

Stores the variable in the context of the skill.

#### Parameters

| Name    | Type   | Required | Description                              |
|---------|--------|----------|------------------------------------------|
| name    | object | Yes      | Name of the variable                     |
| value   | object | No       | Value to store                           |
| execute | array  | No       | Actions to apply to the stored data     |

#### Example

```json
{
  "library": "@digipair/skill-data-management",
  "element": "setVariable",
  "properties": {
    "name": {
      "variableName": "example"
    },
    "value": {
      "key": "value"
    },
    "execute": [
      {
        "action": "setAction",
        "parameters": {}
      }
    ]
  }
}
```

### struct2array

Convert a structure to an array

#### Description

Converts a data structure into an array.

#### Parameters

| Name   | Type   | Required | Description                      |
|-------|--------|----------|----------------------------------|
| value | object | Yes      | Data structure to convert       |

#### Example

```json
{
  "library": "@digipair/skill-data-management",
  "element": "struct2array",
  "properties": {
    "value": {
      "key1": "value1",
      "key2": "value2"
    }
  }
}
```

### jsonParse

Parse a JSON

#### Description

Parses a JSON string.

#### Parameters

| Name   | Type   | Required | Description                                      |
|-------|--------|----------|--------------------------------------------------|
| value | string | Yes      | JSON formatted string to convert into a data structure |

#### Example

```json
{
  "library": "@digipair/skill-data-management",
  "element": "jsonParse",
  "properties": {
    "value": "{\"key\": \"value\"}"
  }
}
```

## Notes

- The functions `transform`, `setVariable`, `struct2array`, and `jsonParse` are used to manipulate and transform data in various contexts.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.