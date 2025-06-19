# @digipair/skill-cron

**Version:** 0.1.0  
**Summary:** Scheduled Task Management  
**Description:** This skill enables the management of scheduled task executions.  
**Icon:** 📆

## Table of Contents

- [Functions](#functions)
  - [crons](#crons)
  - [addCron](#addcron)
  - [deleteCron](#deletecron)
  - [enableCron](#enablecron)
  - [disableCron](#disablecron)

---

## Functions

### crons

Lists scheduled tasks.

#### Parameters

| Name | Type   | Required | Description                      |
| ---- | ------ | -------- | -------------------------------- |
| path | string | No       | Path to the digipairs directory. |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "crons",
  "properties": {
    "path": "/path/to/my/folder"
  }
}
```

---

### addCron

Adds a new scheduled task.

#### Parameters

| Name      | Type   | Required | Description                                    |
| --------- | ------ | -------- | ---------------------------------------------- |
| path      | string | No       | Path to the digipairs directory.               |
| time      | string | Yes      | Schedule in cron format (e.g., `"0 0 * * *"`). |
| digipair  | string | Yes      | Name of the digipair executing the reasoning.  |
| reasoning | string | Yes      | Name of the reasoning to execute.              |
| utcOffset | string | No       | Time zone offset (e.g., `"+02:00"`).           |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "addCron",
  "properties": {
    "path": "/path/to/my/folder",
    "time": "0 0 * * *",
    "digipair": "my_digital_pair",
    "reasoning": "my_reasoning",
    "utcOffset": "+02:00"
  }
}
```

---

### deleteCron

Deletes an existing scheduled task.

#### Parameters

| Name | Type   | Required | Description                       |
| ---- | ------ | -------- | --------------------------------- |
| path | string | No       | Path to the digipairs directory.  |
| id   | string | Yes      | Identifier of the scheduled task. |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "deleteCron",
  "properties": {
    "path": "/path/to/my/folder",
    "id": "task_identifier"
  }
}
```

---

### enableCron

Enables an existing scheduled task.

#### Parameters

| Name | Type   | Required | Description                       |
| ---- | ------ | -------- | --------------------------------- |
| path | string | No       | Path to the digipairs directory.  |
| id   | string | Yes      | Identifier of the scheduled task. |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "enableCron",
  "properties": {
    "path": "/path/to/my/folder",
    "id": "task_identifier"
  }
}
```

---

### disableCron

Disables an existing scheduled task.

#### Parameters

| Name | Type   | Required | Description                       |
| ---- | ------ | -------- | --------------------------------- |
| path | string | No       | Path to the digipairs directory.  |
| id   | string | Yes      | Identifier of the scheduled task. |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "disableCron",
  "properties": {
    "path": "/path/to/my/folder",
    "id": "task_identifier"
  }
}
```

---

## Notes

- The `path` parameter is optional for all functions and allows you to specify the path to the digipairs directory if needed.
- The `time` parameter for `addCron` must follow the standard cron expression syntax.
- Task identifiers (`id`) are required for delete, enable, and disable operations.
- Ensure that the specified digipair and reasoning exist and are valid when adding a scheduled task.
