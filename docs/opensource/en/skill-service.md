# @digipair/skill-service

**Version:** 0.1.0  
**Summary:** HTTP Server  
**Description:** This skill allows managing responses to HTTP calls.  
**Icon:** 💻

## Table of Contents

- [Functions](#functions)
  - [service](#service)
  - [task](#task)

## Functions

### service

Responds to an HTTP call.

#### Parameters

| Name     | Type   | Required | Description            |
|----------|--------|----------|------------------------|
| execute  | array  | Yes      | Commands to execute     |

#### Example

```json
{
  "library": "@digipair/skill-service",
  "element": "service",
  "properties": {
    "execute": [
      {
        // Example command to execute
      }
    ]
  }
}
```

## Notes

- The `service` function is used respectively to respond to HTTP calls and execute specific tasks.
- Make sure to provide a valid list of commands to execute for the `execute` parameter.