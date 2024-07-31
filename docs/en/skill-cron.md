# @digipair/skill-cron

**Version:** 0.1.0  
**Summary:** Scheduled Task Management  
**Description:** This skill allows for the management of scheduled task execution.  
**Icon:** 📆

## Table of Contents

- [Functions](#functions)
  - [crons](#crons)
  - [addCron](#addcron)
  - [deleteCron](#deletecron)
  - [enableCron](#enablecron)
  - [disableCron](#disablecron)

## Functions

### crons

List of scheduled tasks.

#### Parameters

| Name  | Type   | Required | Description                           |
|-------|--------|----------|---------------------------------------|
| path  | string | No       | Path to the digipairs directory      |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "crons",
  "properties": {
    "path": "/path/to/directory"
  }
}
```

### addCron

Adds a scheduling.

#### Parameters

| Name      | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| path      | string | No       | Path to the digipairs directory                  |
| time      | string | Yes      | Scheduling in cron format                         |
| digipair  | string | Yes      | Name of the digipair executing the reasoning     |
| reasoning | string | Yes      | Name of the reasoning to execute                  |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "addCron",
  "properties": {
    "path": "/path/to/directory",
    "time": "0 0 * * *",
    "digipair": "digipair_name",
    "reasoning": "reasoning_name"
  }
}
```

### deleteCron

Deletes a scheduling.

#### Parameters

| Name  | Type   | Required | Description                                      |
|-------|--------|----------|--------------------------------------------------|
| path  | string | No       | Path to the digipairs directory                  |
| id    | string | Yes      | Identifier of the scheduling                     |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "deleteCron",
  "properties": {
    "path": "/path/to/directory",
    "id": "scheduling_identifier"
  }
}
```

### enableCron

Enables a scheduling.

#### Parameters

| Name  | Type   | Required | Description                                      |
|-------|--------|----------|--------------------------------------------------|
| path  | string | No       | Path to the digipairs directory                  |
| id    | string | Yes      | Identifier of the scheduling                     |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "enableCron",
  "properties": {
    "path": "/path/to/directory",
    "id": "scheduling_identifier"
  }
}
```

### disableCron

Disables a scheduling.

#### Parameters

| Name  | Type   | Required | Description                                      |
|-------|--------|----------|--------------------------------------------------|
| path  | string | No       | Path to the digipairs directory                  |
| id    | string | Yes      | Identifier of the scheduling                     |

#### Example

```json
{
  "library": "@digipair/skill-cron",
  "element": "disableCron",
  "properties": {
    "path": "/path/to/directory",
    "id": "scheduling_identifier"
  }
}
```

## Notes

- The functions `crons`, `addCron`, `deleteCron`, `enableCron`, and `disableCron` are used to manage scheduled tasks within the system.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.