# @digipair/skill-web-debug

**Version:** 0.1.0  
**Summary:** Web Page Debugging  
**Description:** This skill enables debugging of web applications by providing tools and features to identify and resolve issues.  
**Icon:** 🔧

## Table of Contents

- [Functions](#functions)
  - [log](#log)

---

## Functions

### log

Display a message in the JavaScript console.

#### Description

The `log` function allows you to display a custom message in the browser console or the JavaScript runtime environment. It is useful for debugging, event tracking, or displaying contextual information during the execution of a web application.

#### Parameters

| Name  | Type   | Required | Description                                      |
| ----- | ------ | -------- | ------------------------------------------------ |
| label | string | Yes      | Subject or title of the message to log           |
| type  | string | No       | Log type (e.g., 'info', 'warn', 'error', etc.)   |
| value | object | No       | Additional value to display (object, data, etc.) |

#### Usage Example

```javascript
import { log } from '@digipair/skill-web-debug';

// Simple example
log({
  label: 'Page loading',
  type: 'info',
});

// Example with additional value
log({
  label: 'Error while fetching data',
  type: 'error',
  value: { code: 404, message: 'Not Found' },
});
```

#### JSON Example

```json
{
  "library": "@digipair/skill-web-debug",
  "element": "log",
  "properties": {
    "label": "Connection successful",
    "type": "success",
    "value": { "userId": 12345 }
  }
}
```

#### Notes

- The `label` parameter is required and must be a string describing the subject of the log.
- The `type` parameter allows you to categorize the message (for example: `info`, `warn`, `error`, `debug`, etc.). If not specified, the default type is used.
- The `value` parameter can contain any object or additional data to display in the console.
- This function is primarily intended for debugging purposes and should not be used for sensitive production logging.

---

## General Notes

- The `log` function is designed to facilitate web application debugging by centralizing message display in the console.
- Make sure not to expose sensitive information in logs, especially in production environments.
- This library easily integrates into any JavaScript project that requires simple and effective debugging tools.
