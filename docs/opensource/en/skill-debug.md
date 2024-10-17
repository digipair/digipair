# @digipair/skill-debug

**Version:** 0.1.0  
**Summary:** Factory Debugging  
**Description:** This skill allows users to debug actions performed on the factory, providing tools and features to identify and resolve issues.  
**Icon:** 🔧

## Table of Contents

- [Functions](#functions)
  - [log](#log)

## Functions

### log

Display in logs

#### Description

Element for displaying a message in the logs.

#### Parameters

| Name   | Type   | Required | Description                |
|--------|--------|----------|----------------------------|
| label  | string | Yes      | Subject of the log         |
| type   | string | No       | Type of log                |
| value  | object | No       | Additional value to display |

#### Example

```json
{
  "library": "@digipair/skill-debug",
  "element": "log",
  "properties": {
    "label": "Critical Error",
    "type": "error",
    "value": {
      "code": 500,
      "message": "Internal Server Error"
    }
  }
}
```

## Notes

- The `log` function is used to display messages in the logs, which is useful for debugging and tracking actions performed on the factory.
- The `label` parameter is mandatory and must contain the subject of the log.
- The `type` and `value` parameters are optional. The `type` can be used to specify the type of log (e.g., "info", "warning", "error"), and `value` can contain additional information to be displayed in the log.