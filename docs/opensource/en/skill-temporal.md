# @digipair/skill-temporal

**Version:** 0.1.0  
**Summary:** Temporal workflow management  
**Description:** This skill enables the management of time-based workflows.  
**Icon:** 👩‍💻

---

## Table of Contents

- [Functions](#functions)
  - [activity](#activity)
  - [sleep](#sleep)
  - [condition](#condition)
  - [goto](#goto)
  - [stop](#stop)
  - [push](#push)
  - [terminate](#terminate)
  - [list](#list)
  - [workflow](#workflow)

---

## Functions

### activity

Defines an activity within a temporal workflow.

#### Parameters

| Name    | Type   | Required | Description                |
| ------- | ------ | -------- | -------------------------- |
| name    | string | No       | Name of the step           |
| execute | array  | Yes      | List of actions to execute |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "activity",
  "properties": {
    "name": "validation",
    "execute": [
      // List of actions to execute (pinsSettings format)
    ]
  }
}
```

---

### sleep

Waits for a specified duration before continuing the workflow.

#### Parameters

| Name     | Type   | Required | Description                      |
| -------- | ------ | -------- | -------------------------------- |
| name     | string | No       | Name of the step                 |
| duration | string | Yes      | Wait duration (e.g., "5s", "1m") |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "sleep",
  "properties": {
    "name": "pause",
    "duration": "10s"
  }
}
```

---

### condition

Waits until a specified condition is met within the workflow.

#### Parameters

| Name      | Type   | Required | Description                           |
| --------- | ------ | -------- | ------------------------------------- |
| condition | string | Yes      | Condition to wait for, in FEEL format |
| timeout   | number | No       | Maximum wait time (in seconds)        |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "condition",
  "properties": {
    "condition": "data.status == 'approved'",
    "timeout": 60
  }
}
```

---

### goto

Allows jumping to a specific step in the workflow.

#### Parameters

| Name   | Type   | Required | Description                  |
| ------ | ------ | -------- | ---------------------------- |
| target | string | Yes      | Name of the destination step |
| name   | string | No       | Name of the current step     |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "goto",
  "properties": {
    "target": "finalisation",
    "name": "redirection"
  }
}
```

---

### stop

Stops the current workflow.

#### Parameters

| Name | Type   | Required | Description      |
| ---- | ------ | -------- | ---------------- |
| name | string | No       | Name of the step |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "stop",
  "properties": {
    "name": "end"
  }
}
```

---

### push

Sends new data to an existing workflow.

#### Parameters

| Name | Type   | Required | Description         |
| ---- | ------ | -------- | ------------------- |
| id   | string | Yes      | Workflow identifier |
| data | object | Yes      | Data to send        |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "push",
  "properties": {
    "id": "workflow_123",
    "data": {
      "status": "in_progress"
    }
  }
}
```

---

### terminate

Permanently stops a workflow.

#### Parameters

| Name | Type   | Required | Description         |
| ---- | ------ | -------- | ------------------- |
| id   | string | Yes      | Workflow identifier |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "terminate",
  "properties": {
    "id": "workflow_123"
  }
}
```

---

### list

Lists existing workflows according to an optional query.

#### Parameters

| Name  | Type   | Required | Description  |
| ----- | ------ | -------- | ------------ |
| query | string | No       | Search query |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "list",
  "properties": {
    "query": "status:active"
  }
}
```

---

### workflow

Executes a complete temporal workflow.

#### Parameters

| Name    | Type   | Required | Description                                    |
| ------- | ------ | -------- | ---------------------------------------------- |
| id      | string | Yes      | Workflow identifier                            |
| steps   | array  | Yes      | List of steps to execute (pinsSettings format) |
| data    | object | No       | Initial workflow data                          |
| options | object | No       | Temporal workflow options                      |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "workflow",
  "properties": {
    "id": "workflow_123",
    "steps": [
      // List of steps (pinsSettings format)
    ],
    "data": {
      "userId": "abc123"
    },
    "options": {
      "retry": 3
    }
  }
}
```

---

## Notes

- The functions in this library allow you to model, execute, and control time-based workflows flexibly.
- The `pinsSettings` format is used to describe actions or steps to execute in the `execute` and `steps` parameters.
- Durations must be expressed as strings (e.g., `"5s"`, `"1m"`).
- The condition in the `condition` function must be in FEEL (Friendly Enough Expression Language) format.
- The workflow identifier (`id`) must be unique for each workflow instance.

---

**For any contributions or questions, please refer to the official library repository.**
