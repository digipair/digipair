# @digipair/skill-process

**Version:** 0.1.0  
**Summary:** Process management  
**Description:** This skill allows you to manage processes.  
**Icon:** 📕

## Table of Contents

- [Functions](#functions)
  - [stop](#stop)
  - [list](#list)

---

## Functions

### stop

Stop a running process.

#### Parameters

| Name | Type   | Required | Description                       |
| ---- | ------ | -------- | --------------------------------- |
| id   | string | Yes      | Identifier of the process to stop |

#### Example

```json
{
  "library": "@digipair/skill-process",
  "element": "stop",
  "properties": {
    "id": "process_123"
  }
}
```

---

### list

List the currently running processes.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-process",
  "element": "list",
  "properties": {}
}
```

---

## Notes

- The `stop` function requires the identifier of the process to be stopped.
- The `list` function returns the list of currently running processes.
- These functions are intended to be used in a JavaScript environment and are not HTTP endpoints, but rather function calls from the library.
