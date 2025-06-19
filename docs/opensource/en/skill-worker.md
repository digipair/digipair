# @digipair/skill-worker

**Version:** 0.1.0  
**Summary:** Worker  
**Description:** Digiworkers actions.  
**Icon:** 🛠

## Table of Contents

- [Functions](#functions)
  - [activity](#activity)
  - [stop](#stop)
  - [task](#task)
  - [action](#action)

---

## Functions

### activity

Executes an activity.

#### Parameters

| Name    | Type   | Required | Description                                                                        |
| ------- | ------ | -------- | ---------------------------------------------------------------------------------- |
| name    | string | Yes      | Name of the activity                                                               |
| execute | array  | Yes      | Commands to execute (see [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Example

```json
{
  "library": "@digipair/skill-worker",
  "element": "activity",
  "properties": {
    "name": "analyse-donnees",
    "execute": [
      {
        /* pinsSettings command */
      }
    ]
  }
}
```

---

### stop

Stops the current reasoning process.

#### Parameters

| Name  | Type   | Required | Description     |
| ----- | ------ | -------- | --------------- |
| value | object | No       | Value to return |

#### Example

```json
{
  "library": "@digipair/skill-worker",
  "element": "stop",
  "properties": {
    "value": {
      "message": "Stop requested by the user"
    }
  }
}
```

---

### task

Executes a task.

#### Parameters

| Name    | Type  | Required | Description                                                                        |
| ------- | ----- | -------- | ---------------------------------------------------------------------------------- |
| execute | array | Yes      | Commands to execute (see [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Example

```json
{
  "library": "@digipair/skill-worker",
  "element": "task",
  "properties": {
    "execute": [
      {
        /* pinsSettings command */
      }
    ]
  }
}
```

---

### action

Executable action.

#### Parameters

| Name    | Type  | Required | Description                                                                        |
| ------- | ----- | -------- | ---------------------------------------------------------------------------------- |
| execute | array | Yes      | Commands to execute (see [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Metadata

| Name       | Type    | Required | Description                               |
| ---------- | ------- | -------- | ----------------------------------------- |
| parameters | array   | Yes      | Input parameters (see `Parameter` schema) |
| context    | boolean | No       | Display execution context                 |

##### `Parameter` Schema

| Name        | Type    | Required | Description           |
| ----------- | ------- | -------- | --------------------- |
| name        | string  | Yes      | Parameter name        |
| summary     | string  | Yes      | Summary               |
| required    | boolean | Yes      | Indicates if required |
| ignoreForAI | boolean | No       | To be ignored for AI  |
| schema      | object  | Yes      | Parameter schema      |
| description | string  | No       | Description           |

#### Example

```json
{
  "library": "@digipair/skill-worker",
  "element": "action",
  "properties": {
    "execute": [
      {
        /* pinsSettings command */
      }
    ]
  },
  "metadata": {
    "parameters": [
      {
        "name": "input",
        "summary": "Main input",
        "required": true,
        "schema": { "type": "string" }
      }
    ],
    "context": true
  }
}
```

---

## Notes

- The `activity`, `task`, and `action` functions expect an array of commands to execute, following the [pinsSettings](https://schemas.digipair.ai/pinsSettings) schema.
- The `stop` function allows you to interrupt the current reasoning process and can return a custom value.
- The metadata for the `action` function allows you to specify the expected input parameters and indicate whether the execution context should be displayed.
- The `Parameter` schema allows you to precisely describe each input parameter for complex actions.
