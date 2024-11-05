# @digipair/skill-basic

**Version:** 0.1.0  
**Summary:** Data Management  
**Description:** This skill allows for the manipulation and transformation of data.  
**Icon:** 📝

## Table of Contents

- [Functions](#functions)
  - [transform](#transform)
  - [setVariable](#setvariable)

## Functions

### transform

Transform the data

#### Description

Transforms a value using the standard data transformation mechanics of the engine.

#### Parameters

| Name    | Type   | Required | Description                  |
| ------- | ------ | -------- | ---------------------------- |
| value   | object | No       | Value to transform           |
| execute | array  | No       | Actions to apply to the data |

#### Example

```json
{
  "library": "@digipair/skill-basic",
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

| Name    | Type   | Required | Description                         |
| ------- | ------ | -------- | ----------------------------------- |
| name    | object | Yes      | Name of the variable                |
| value   | object | No       | Value to store                      |
| execute | array  | No       | Actions to apply to the stored data |

#### Example

```json
{
  "library": "@digipair/skill-basic",
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

## Notes

- The functions `transform` and `setVariable` are used to manipulate and transform data in various contexts.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.
