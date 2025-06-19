# @digipair/skill-tool

**Version:** 0.1.0  
**Summary:** Tool  
**Description:** Digitool actions and triggers.  
**Icon:** 🛠

## Table of Contents

- [Functions](#functions)
  - [stop](#stop)
  - [keepAlive](#keepalive)
  - [execute](#execute)
- [Scene Blocks](#scene-blocks)
  - [task](#task)
  - [action](#action)
  - [trigger](#trigger)
- [Schemas](#schemas)
  - [Parameter](#parameter)

---

## Functions

### stop

Stops the current reasoning process.

#### Description

Allows stopping the ongoing reasoning process. May optionally return a custom value.

#### Parameters

| Name  | Type   | Required | Description     |
| ----- | ------ | -------- | --------------- |
| value | object | No       | Value to return |

#### Example

```json
{
  "library": "@digipair/skill-tool",
  "element": "stop",
  "properties": {
    "value": {
      "message": "Stop requested"
    }
  }
}
```

---

### keepAlive

Keeps the reasoning process active.

#### Description

Signals that the reasoning process should remain active. This function does not take any parameters.

#### Parameters

None.

#### Example

```json
{
  "library": "@digipair/skill-tool",
  "element": "keepAlive",
  "properties": {}
}
```

---

### execute

Executes one or more Pin actions with a given context.

#### Description

Allows executing a list of actions (Pins) by providing them with an optional execution context.

#### Parameters

| Name    | Type   | Required | Description               |
| ------- | ------ | -------- | ------------------------- |
| execute | array  | Yes      | Actions to execute (Pins) |
| context | object | No       | Execution context         |

- **execute**: Array of actions to execute, each action must follow the `pinsSettings` schema.
- **context**: Optional object containing the execution context.

#### Example

```json
{
  "library": "@digipair/skill-tool",
  "element": "execute",
  "properties": {
    "execute": [
      {
        "pinId": "action1",
        "params": { "foo": "bar" }
      }
    ],
    "context": {
      "userId": "12345"
    }
  }
}
```

---

## Scene Blocks

### task

Task execution.

#### Description

Allows executing one or more commands as part of a task.

#### Parameters

| Name    | Type  | Required | Description         |
| ------- | ----- | -------- | ------------------- |
| execute | array | Yes      | Commands to execute |

#### Example

```json
{
  "library": "@digipair/skill-tool",
  "element": "task",
  "properties": {
    "execute": [
      {
        "pinId": "cmd1",
        "params": { "foo": "bar" }
      }
    ]
  }
}
```

---

### action

Executable action.

#### Description

Defines an action that can be executed, with input parameters and an optional execution context.

#### Metadata

| Name       | Type  | Required | Description            |
| ---------- | ----- | -------- | ---------------------- |
| parameters | array | Yes      | Input parameters       |
| context    | bool  | No       | Show execution context |

#### Parameters

| Name    | Type  | Required | Description         |
| ------- | ----- | -------- | ------------------- |
| execute | array | Yes      | Commands to execute |

#### Example

```json
{
  "library": "@digipair/skill-tool",
  "element": "action",
  "properties": {
    "execute": [
      {
        "pinId": "cmd2",
        "params": { "foo": "bar" }
      }
    ]
  }
}
```

---

### trigger

Executable trigger.

#### Description

Defines a trigger that can be executed, with tags and input parameters.

#### Metadata

| Name       | Type  | Required | Description      |
| ---------- | ----- | -------- | ---------------- |
| tags       | array | Yes      | Trigger tags     |
| parameters | array | Yes      | Input parameters |

#### Parameters

| Name    | Type  | Required | Description         |
| ------- | ----- | -------- | ------------------- |
| execute | array | Yes      | Commands to execute |

#### Example

```json
{
  "library": "@digipair/skill-tool",
  "element": "trigger",
  "properties": {
    "execute": [
      {
        "pinId": "cmd3",
        "params": { "foo": "bar" }
      }
    ]
  }
}
```

---

## Schemas

### Parameter

Describes an input parameter for an action or trigger.

| Property    | Type    | Required | Description           |
| ----------- | ------- | -------- | --------------------- |
| name        | string  | Yes      | Parameter name        |
| summary     | string  | Yes      | Summary               |
| required    | boolean | Yes      | Indicates if required |
| ignoreForAI | boolean | No       | To ignore for AI      |
| schema      | object  | Yes      | Parameter schema      |
| description | string  | No       | Description           |

---

## Notes

- The functions and scene blocks of `@digipair/skill-tool` allow you to orchestrate actions, tasks, and triggers in a digital environment.
- Parameters of type `execute` expect objects conforming to the `pinsSettings` schema (see related documentation).
- Metadata allows you to describe input parameters and execution context for better integration with orchestration or AI tools.
- The provided examples should be adapted according to the usage context and the expected structure of Pin actions (`pinsSettings`).
