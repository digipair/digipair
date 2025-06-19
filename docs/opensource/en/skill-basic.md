# @digipair/skill-basic

**Version:** 0.1.0  
**Summary:** Toolbox  
**Description:** This skill provides a set of basic tools for manipulating data and behaviors.  
**Icon:** 📝

## Table of Contents

- [Functions](#functions)
  - [transform](#transform)
  - [setVariable](#setvariable)
  - [defer](#defer)
  - [interval](#interval)
  - [stopInterval](#stopinterval)
  - [stopDefer](#stopdefer)
  - [base64ToBuffer](#base64tobuffer)
  - [trycatch](#trycatch)

---

## Functions

### transform

Transforms a value using the engine’s standard data transformation mechanisms.

#### Parameters

| Name    | Type   | Required | Description                                 |
| ------- | ------ | -------- | ------------------------------------------- |
| value   | object | No       | Value to transform                          |
| execute | array  | No       | Actions to apply to the data (pinsSettings) |

#### Example

```json
{
  "library": "@digipair/skill-basic",
  "element": "transform",
  "properties": {
    "value": { "foo": "bar" },
    "execute": [{ "type": "uppercase", "field": "foo" }]
  }
}
```

---

### setVariable

Stores a variable in the skill’s context.

#### Parameters

| Name    | Type   | Required | Description                                        |
| ------- | ------ | -------- | -------------------------------------------------- |
| name    | object | Yes      | Name of the variable                               |
| value   | object | No       | Value to store                                     |
| execute | array  | No       | Actions to apply to the stored data (pinsSettings) |

#### Example

```json
{
  "library": "@digipair/skill-basic",
  "element": "setVariable",
  "properties": {
    "name": "myVariable",
    "value": 42,
    "execute": [{ "type": "log", "message": "Variable stored" }]
  }
}
```

---

### defer

Executes an action after a specified delay.

#### Parameters

| Name    | Type   | Required | Description                           |
| ------- | ------ | -------- | ------------------------------------- |
| time    | number | Yes      | Time in milliseconds before execution |
| execute | array  | Yes      | Actions to execute (pinsSettings)     |

#### Example

```json
{
  "library": "@digipair/skill-basic",
  "element": "defer",
  "properties": {
    "time": 1000,
    "execute": [{ "type": "notify", "message": "Deferred action executed" }]
  }
}
```

---

### interval

Executes an action at regular intervals.

#### Parameters

| Name    | Type   | Required | Description                                        |
| ------- | ------ | -------- | -------------------------------------------------- |
| time    | number | Yes      | Time in milliseconds between each execution        |
| execute | array  | Yes      | Actions to execute at each interval (pinsSettings) |

#### Example

```json
{
  "library": "@digipair/skill-basic",
  "element": "interval",
  "properties": {
    "time": 5000,
    "execute": [{ "type": "refresh", "target": "data" }]
  }
}
```

---

### stopInterval

Stops the execution of an interval.

#### Parameters

| Name | Type   | Required | Description                        |
| ---- | ------ | -------- | ---------------------------------- |
| id   | object | Yes      | Identifier of the interval to stop |

#### Example

```json
{
  "library": "@digipair/skill-basic",
  "element": "stopInterval",
  "properties": {
    "id": "intervalId123"
  }
}
```

---

### stopDefer

Stops the execution of a deferred action.

#### Parameters

| Name | Type   | Required | Description                               |
| ---- | ------ | -------- | ----------------------------------------- |
| id   | object | Yes      | Identifier of the deferred action to stop |

#### Example

```json
{
  "library": "@digipair/skill-basic",
  "element": "stopDefer",
  "properties": {
    "id": "deferId456"
  }
}
```

---

### base64ToBuffer

Converts a base64 string to a buffer.

#### Parameters

| Name   | Type   | Required | Description            |
| ------ | ------ | -------- | ---------------------- |
| base64 | string | Yes      | File encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-basic",
  "element": "base64ToBuffer",
  "properties": {
    "base64": "SGVsbG8gd29ybGQ="
  }
}
```

---

### trycatch

Executes a series of actions and catches any errors.

#### Parameters

| Name         | Type  | Required | Description                                        |
| ------------ | ----- | -------- | -------------------------------------------------- |
| executeTry   | array | Yes      | Actions to execute (pinsSettings)                  |
| executeCatch | array | No       | Actions to execute in case of error (pinsSettings) |

#### Example

```json
{
  "library": "@digipair/skill-basic",
  "element": "trycatch",
  "properties": {
    "executeTry": [{ "type": "dangerousAction" }],
    "executeCatch": [{ "type": "log", "message": "Error caught" }]
  }
}
```

---

## Notes

- The functions in this library are designed to be used in automation or scripting contexts, where data manipulation and execution management are required.
- The `execute` parameter (or its variants) generally expects an array of actions in the [pinsSettings](https://schemas.digipair.ai/pinsSettings) format.
- The identifiers (`id`) for stop functions must match those returned when creating intervals or deferred actions.
- For base64 conversion, ensure that the provided string is properly encoded.

---

**For any contributions or questions, please refer to the official library repository.**
