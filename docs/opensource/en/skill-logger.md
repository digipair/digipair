# @digipair/skill-logger

**Version:** 0.1.0  
**Summary:** Log and LLM consumption management  
**Description:** Log and LLM consumption management  
**Icon:** 🔢

## Table of Contents

- [Functions](#functions)
  - [read](#read)
  - [list](#list)
  - [computeDailyConsumption](#computedailyconsumption)
  - [cleaning](#cleaning)

---

## Functions

### read

Read logs for a given day.

#### Parameters

| Name | Type   | Required | Description                                                                   |
| ---- | ------ | -------- | ----------------------------------------------------------------------------- |
| date | string | Yes      | Date of the logs to read (expected format: `YYYY-MM-DD`).                     |
| type | string | No       | Type of logs to read (`factory`, `consumption-daily`, `consumption-monthly`). |
| path | string | No       | Path to the Digipair directory.                                               |

#### Example

```json
{
  "library": "@digipair/skill-logger",
  "element": "read",
  "properties": {
    "date": "2024-06-01",
    "type": "consumption-daily",
    "path": "/data/digipair"
  }
}
```

---

### list

List the days for which logs exist.

#### Parameters

| Name | Type   | Required | Description                                                                   |
| ---- | ------ | -------- | ----------------------------------------------------------------------------- |
| type | string | No       | Type of logs to list (`factory`, `consumption-daily`, `consumption-monthly`). |
| path | string | No       | Path to the Digipair directory.                                               |

#### Example

```json
{
  "library": "@digipair/skill-logger",
  "element": "list",
  "properties": {
    "type": "factory",
    "path": "/data/digipair"
  }
}
```

---

### computeDailyConsumption

Calculate and record daily consumption in the LLM monthly consumption file.

#### Parameters

| Name | Type   | Required | Description                                                                             |
| ---- | ------ | -------- | --------------------------------------------------------------------------------------- |
| date | string | Yes      | Date of the LLM consumption to add to the monthly file (expected format: `YYYY-MM-DD`). |
| path | string | No       | Path to the Digipair directory.                                                         |

#### Example

```json
{
  "library": "@digipair/skill-logger",
  "element": "computeDailyConsumption",
  "properties": {
    "date": "2024-06-01",
    "path": "/data/digipair"
  }
}
```

---

### cleaning

Delete old log files.

#### Parameters

| Name | Type   | Required | Description                                                                     |
| ---- | ------ | -------- | ------------------------------------------------------------------------------- |
| to   | number | Yes      | Date (timestamp) up to which logs should be kept.                               |
| type | string | No       | Type of logs to delete (`factory`, `consumption-daily`, `consumption-monthly`). |
| path | string | No       | Path to the Digipair directory.                                                 |

#### Example

```json
{
  "library": "@digipair/skill-logger",
  "element": "cleaning",
  "properties": {
    "to": 1717200000,
    "type": "consumption-daily",
    "path": "/data/digipair"
  }
}
```

---

## Notes

- The functions of the `@digipair/skill-logger` library allow you to manage reading, listing, consumption calculation, and cleaning of logs related to LLM usage.
- The `type` parameter accepts the following values: `factory`, `consumption-daily`, `consumption-monthly`.
- The `path` parameter allows you to specify a custom path for the Digipair directory.
- For deletion (`cleaning`), the `to` parameter must be a Unix timestamp (number of seconds since 1970-01-01T00:00:00Z).

---

**Contact**: For any questions or contributions, please refer to the GitHub repository associated with the library.
