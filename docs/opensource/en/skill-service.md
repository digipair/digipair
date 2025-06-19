# @digipair/skill-service

**Version:** 0.1.0  
**Summary:** Services  
**Description:** This skill enables the management of HTTP response handling.  
**Icon:** 💻

## Table of Contents

- [Functions](#functions)
  - [send](#send)
  - [status](#status)
  - [headers](#headers)
- [Scene Blocks](#scene-blocks)
  - [service](#service)

---

## Functions

### send

Send an HTTP request.

#### Parameters

| Name | Type   | Required | Description  |
| ---- | ------ | -------- | ------------ |
| body | object | No       | Request body |

#### Example

```json
{
  "library": "@digipair/skill-service",
  "element": "send",
  "properties": {
    "body": {
      "message": "Hello world",
      "userId": 123
    }
  }
}
```

---

### status

Send an HTTP status code.

#### Parameters

| Name | Type   | Required | Description      |
| ---- | ------ | -------- | ---------------- |
| code | number | Yes      | HTTP status code |

#### Example

```json
{
  "library": "@digipair/skill-service",
  "element": "status",
  "properties": {
    "code": 200
  }
}
```

---

### headers

Send HTTP headers.

#### Parameters

| Name    | Type   | Required | Description  |
| ------- | ------ | -------- | ------------ |
| headers | object | Yes      | HTTP headers |

#### Example

```json
{
  "library": "@digipair/skill-service",
  "element": "headers",
  "properties": {
    "headers": {
      "Content-Type": "application/json",
      "X-Custom-Header": "value"
    }
  }
}
```

---

## Scene Blocks

### service

Response to an HTTP call.

#### Parameters

| Name    | Type  | Required | Description         |
| ------- | ----- | -------- | ------------------- |
| execute | array | Yes      | Commands to execute |

#### Example

```json
{
  "library": "@digipair/skill-service",
  "element": "service",
  "properties": {
    "execute": [
      {
        "element": "status",
        "properties": { "code": 200 }
      },
      {
        "element": "headers",
        "properties": { "headers": { "Content-Type": "application/json" } }
      },
      {
        "element": "send",
        "properties": { "body": { "message": "OK" } }
      }
    ]
  }
}
```

---

## Notes

- The `send`, `status`, and `headers` functions are designed to be used for handling HTTP responses within a Javascript service.
- The `service` scene block allows orchestration of sending the status code, headers, and response body.
- Parameters should be adapted according to the usage context and the format expected by the HTTP client.
