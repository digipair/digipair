# @digipair/skill-factory

**Version:** 0.1.0  
**Summary:** Actions in the Digipair factory  
**Description:** Actions in the Digipair factory.  
**Icon:** 🛠

---

## Table of Contents

- [Functions](#functions)
  - [start](#start)
  - [execute](#execute)
  - [keepAlive](#keepalive)
  - [stop](#stop)
- [Scene Blocks](#scene-blocks)
  - [task](#task)
  - [action](#action)
  - [trigger](#trigger)

---

## Functions

### start

Starts a reasoning process from the Digipair factory.

#### Parameters

| Name      | Type   | Required | Description            |
| --------- | ------ | -------- | ---------------------- |
| digipair  | string | No       | Owner of the reasoning |
| reasoning | string | Yes      | Name of the reasoning  |
| body      | object | No       | Data to be transmitted |
| factory   | string | No       | Name of the factory    |

#### Example

```json
{
  "library": "@digipair/skill-factory",
  "element": "start",
  "properties": {
    "digipair": "digital_pair_identifier",
    "reasoning": "reasoning_name",
    "body": { "key": "value" },
    "factory": "factory_name"
  }
}
```

---

### execute

Executes one or more Pin actions with a given context.

#### Parameters

| Name    | Type   | Required | Description                       |
| ------- | ------ | -------- | --------------------------------- |
| execute | array  | Yes      | Actions to execute (Pin settings) |
| context | object | No       | Execution context                 |

> **Note:** The schema of the `execute` array elements must follow the [pinsSettings](https://schemas.digipair.ai/pinsSettings) specification.

#### Example

```json
{
  "library": "@digipair/skill-factory",
  "element": "execute",
  "properties": {
    "execute": [{ "pin": "action1", "params": { "key": "value" } }],
    "context": { "user": "alice" }
  }
}
```

---

### keepAlive

Keeps the reasoning process active.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-factory",
  "element": "keepAlive",
  "properties": {}
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
  "library": "@digipair/skill-factory",
  "element": "stop",
  "properties": {
    "value": { "message": "Stop requested" }
  }
}
```

---

## Scene Blocks

### task

Executes a task.

#### Parameters

| Name    | Type  | Required | Description                        |
| ------- | ----- | -------- | ---------------------------------- |
| execute | array | Yes      | Commands to execute (Pin settings) |

#### Example

```json
{
  "library": "@digipair/skill-factory",
  "element": "task",
  "properties": {
    "execute": [{ "pin": "action1", "params": { "key": "value" } }]
  }
}
```

---

### action

Executable action.

#### Metadata

| Name       | Type    | Required | Description            |
| ---------- | ------- | -------- | ---------------------- |
| parameters | array   | Yes      | Input parameters       |
| context    | boolean | No       | Show execution context |

#### Parameters

| Name    | Type  | Required | Description                        |
| ------- | ----- | -------- | ---------------------------------- |
| execute | array | Yes      | Commands to execute (Pin settings) |

#### Example

```json
{
  "library": "@digipair/skill-factory",
  "element": "action",
  "properties": {
    "execute": [{ "pin": "action2", "params": { "key": "value" } }]
  }
}
```

---

### trigger

Executable trigger.

#### Metadata

| Name       | Type  | Required | Description      |
| ---------- | ----- | -------- | ---------------- |
| tags       | array | Yes      | Trigger tags     |
| parameters | array | Yes      | Input parameters |

#### Parameters

| Name    | Type  | Required | Description                        |
| ------- | ----- | -------- | ---------------------------------- |
| execute | array | Yes      | Commands to execute (Pin settings) |

#### Example

```json
{
  "library": "@digipair/skill-factory",
  "element": "trigger",
  "properties": {
    "execute": [{ "pin": "action3", "params": { "key": "value" } }]
  }
}
```

---

## Notes

- The functions in this library allow you to control reasoning processes and actions within the Digipair factory.
- Parameters of type `execute` expect objects conforming to the [pinsSettings](https://schemas.digipair.ai/pinsSettings) schema.
- Scene blocks (`task`, `action`, `trigger`) are used to orchestrate sequences of actions or triggers in complex scenarios.
- Make sure to provide the required parameters for each function or scene block according to your needs.
