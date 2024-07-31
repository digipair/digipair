# @digipair/skill-temporal

**Version:** 0.1.0  
**Summary:** Management of temporal workflows  
**Description:** This skill allows for the management of temporal workflows.  
**Icon:** 👩‍💻

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

## Functions

### activity

Defines an activity.

#### Parameters

| Name     | Type   | Required | Description                |
|----------|--------|----------|----------------------------|
| name     | string | No       | Name of the step           |
| execute  | array  | Yes      | List of actions to execute  |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "activity",
  "properties": {
    "name": "step1",
    "execute": [
      // List of actions to execute
    ]
  }
}
```

### sleep

Defines a waiting period.

#### Parameters

| Name     | Type   | Required | Description        |
|----------|--------|----------|--------------------|
| name     | string | No       | Name of the step   |
| duration | string | Yes      | Duration of the wait |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "sleep",
  "properties": {
    "name": "step2",
    "duration": "5m"
  }
}
```

### condition

Defines a waiting condition in a workflow.

#### Parameters

| Name       | Type   | Required | Description                      |
|------------|--------|----------|----------------------------------|
| condition  | string | Yes      | Waiting condition in Feel format |
| timeout    | number | No       | Timeout for the condition        |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "condition",
  "properties": {
    "condition": "x > 5",
    "timeout": 300
  }
}
```

### goto

Defines a target step in the workflow.

#### Parameters

| Name    | Type   | Required | Description                |
|---------|--------|----------|----------------------------|
| target  | string | Yes      | Name of the target step    |
| name    | string | No       | Name of the step           |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "goto",
  "properties": {
    "target": "step3",
    "name": "step4"
  }
}
```

### stop

Stops the workflow.

#### Parameters

| Name | Type   | Required | Description    |
|------|--------|----------|----------------|
| name | string | No       | Name of the step |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "stop",
  "properties": {
    "name": "step5"
  }
}
```

### push

Sends new data into a workflow.

#### Parameters

| Name | Type   | Required | Description              |
|------|--------|----------|--------------------------|
| id   | string | Yes      | Identifier of the workflow |
| data | object | Yes      | Data to send            |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "push",
  "properties": {
    "id": "workflow123",
    "data": {
      "key": "value"
    }
  }
}
```

### terminate

Stops a workflow.

#### Parameters

| Name | Type   | Required | Description              |
|------|--------|----------|--------------------------|
| id   | string | Yes      | Identifier of the workflow |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "terminate",
  "properties": {
    "id": "workflow123"
  }
}
```

### list

Lists the workflows.

#### Parameters

| Name   | Type   | Required | Description          |
|--------|--------|----------|----------------------|
| query  | string | No       | Search query         |

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

### workflow

Executes a Temporal workflow.

#### Parameters

| Name     | Type   | Required | Description                  |
|----------|--------|----------|------------------------------|
| id       | string | Yes      | Identifier of the workflow   |
| steps    | array  | Yes      | Executes the following steps  |
| data     | object | No       | Data for the temporal workflow |
| options  | object | No       | Options for the temporal workflow |

#### Example

```json
{
  "library": "@digipair/skill-temporal",
  "element": "workflow",
  "properties": {
    "id": "workflow123",
    "steps": [
      // List of steps
    ],
    "data": {
      "key": "value"
    },
    "options": {
      // Workflow options
    }
  }
}
```

## Notes

- The described functions allow for the management of the various steps and actions of a Temporal workflow.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.