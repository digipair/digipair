# @digipair/skill-debug

**Version:** 0.1.0  
**Summary:** Debugging  
**Description:** This skill enables users to debug actions executed on the factory by providing tools and features to identify and resolve issues.  
**Icon:** 🔧

## Table of Contents

- [Functions](#functions)
  - [log](#log)

---

## Functions

### log

Display a message in the logs.

#### Description

The `log` function allows you to display a message in the logs, making it easier to track and debug executed actions. It accepts a subject, an optional log type, as well as an additional value to display.

#### Parameters

| Name  | Type   | Required | Description                        |
| ----- | ------ | -------- | ---------------------------------- |
| label | string | Yes      | Subject of the log                 |
| type  | string | No       | Log type (e.g., info, error, etc.) |
| value | object | No       | Additional value to display        |

#### Example

```json
{
  "library": "@digipair/skill-debug",
  "element": "log",
  "properties": {
    "label": "Factory initialization",
    "type": "info",
    "value": {
      "factoryId": "abc123",
      "status": "started"
    }
  }
}
```

#### Minimal example

```json
{
  "library": "@digipair/skill-debug",
  "element": "log",
  "properties": {
    "label": "Error during connection"
  }
}
```

---

## Notes

- The `log` function is mainly used for tracking and debugging the factory's internal processes.
- The `type` parameter can be used to categorize logs (for example: `info`, `warning`, `error`).
- The `value` parameter allows you to add additional contextual information to the log.
- Make sure to provide an explicit `label` to facilitate message identification in the logs.
