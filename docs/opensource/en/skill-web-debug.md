# @digipair/skill-web-debug

**Version:** 0.1.0  
**Summary:** Web page debugging  
**Description:** This skill allows users to debug web applications, providing tools and features to identify and resolve issues.  
**Icon:** 🔧

## Table of Contents

- [Functions](#functions)
  - [log](#log)

## Functions

### log

Display in the console

#### Description

An element that allows displaying a message in the JavaScript console.

#### Parameters

| Name   | Type   | Required | Description              |
|--------|--------|----------|--------------------------|
| label  | string | Yes      | Subject of the log       |
| type   | string | No       | Type of log              |
| value  | object | No       | Additional value to display |

#### Example

```json
{
  "library": "@digipair/skill-web-debug",
  "element": "log",
  "properties": {
    "label": "Error",
    "type": "error",
    "value": {
      "message": "An error occurred"
    }
  }
}
```

## Notes

- The `log` function is used to display messages in the JavaScript console, which is useful for debugging web applications.
- The `label` parameter is mandatory and represents the subject of the log.
- The `type` and `value` parameters are optional. `type` can be used to specify the type of log (e.g., "info", "warning", "error"), and `value` can contain additional information to be displayed in the console.