# @digipair/skill-http

**Version:** 0.1.0  
**Summary:** Communication with HTTP services  
**Description:** This skill enables the use of HTTP services.  
**Icon:** 🌐

## Table of Contents

- [@digipair/skill-http](#digipairskill-http)
  - [Table of Contents](#table-of-contents)
  - [Functions](#functions)
    - [request](#request)
      - [Parameters](#parameters)
      - [Example](#example)
    - [create](#create)
      - [Parameters](#parameters-1)
      - [Example](#example-1)
    - [read](#read)
      - [Parameters](#parameters-2)
      - [Example](#example-2)
    - [update](#update)
      - [Parameters](#parameters-3)
      - [Example](#example-3)
    - [partialUpdate](#partialupdate)
      - [Parameters](#parameters-4)
      - [Example](#example-4)
    - [remove](#remove)
      - [Parameters](#parameters-5)
      - [Example](#example-5)
    - [upload](#upload)
      - [Parameters](#parameters-6)
      - [Example](#example-6)
  - [Schemas](#schemas)
    - [UploadParameters](#uploadparameters)
  - [Notes](#notes)

---

## Functions

### request

Executes a generic HTTP service.

#### Parameters

| Name    | Type   | Required | Description                          |
| ------- | ------ | -------- | ------------------------------------ |
| path    | string | Yes      | Address of the service to execute    |
| method  | string | No       | HTTP method to use (GET, POST, etc.) |
| body    | object | No       | Value to send                        |
| headers | object | No       | Headers to send                      |
| type    | string | No       | Expected response type               |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "request",
  "properties": {
    "path": "https://api.example.com/data",
    "method": "POST",
    "body": { "key": "value" },
    "headers": { "Authorization": "Bearer token" },
    "type": "json"
  }
}
```

---

### create

Adds an HTTP resource.

#### Parameters

| Name    | Type   | Required | Description                       |
| ------- | ------ | -------- | --------------------------------- |
| path    | string | Yes      | Address of the service to execute |
| body    | object | No       | Value to send                     |
| headers | object | No       | Headers to send                   |
| type    | string | No       | Expected response type            |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "create",
  "properties": {
    "path": "https://api.example.com/resource",
    "body": { "name": "New resource" },
    "headers": { "Content-Type": "application/json" },
    "type": "json"
  }
}
```

---

### read

Reads an HTTP resource.

#### Parameters

| Name    | Type   | Required | Description                       |
| ------- | ------ | -------- | --------------------------------- |
| path    | string | Yes      | Address of the service to execute |
| headers | object | No       | Headers to send                   |
| type    | string | No       | Expected response type            |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "read",
  "properties": {
    "path": "https://api.example.com/resource/123",
    "headers": { "Authorization": "Bearer token" },
    "type": "json"
  }
}
```

---

### update

Updates an HTTP resource.

#### Parameters

| Name    | Type   | Required | Description                       |
| ------- | ------ | -------- | --------------------------------- |
| path    | string | Yes      | Address of the service to execute |
| body    | object | No       | Value to send                     |
| headers | object | No       | Headers to send                   |
| type    | string | No       | Expected response type            |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "update",
  "properties": {
    "path": "https://api.example.com/resource/123",
    "body": { "name": "Updated resource" },
    "headers": { "Content-Type": "application/json" },
    "type": "json"
  }
}
```

---

### partialUpdate

Partially updates an HTTP resource.

#### Parameters

| Name    | Type   | Required | Description                       |
| ------- | ------ | -------- | --------------------------------- |
| path    | string | Yes      | Address of the service to execute |
| body    | object | No       | Value to send                     |
| headers | object | No       | Headers to send                   |
| type    | string | No       | Expected response type            |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "partialUpdate",
  "properties": {
    "path": "https://api.example.com/resource/123",
    "body": { "status": "archived" },
    "headers": { "Content-Type": "application/json" },
    "type": "json"
  }
}
```

---

### remove

Deletes an HTTP resource.

#### Parameters

| Name    | Type   | Required | Description                       |
| ------- | ------ | -------- | --------------------------------- |
| path    | string | Yes      | Address of the service to execute |
| headers | object | No       | Headers to send                   |
| type    | string | No       | Expected response type            |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "remove",
  "properties": {
    "path": "https://api.example.com/resource/123",
    "headers": { "Authorization": "Bearer token" },
    "type": "json"
  }
}
```

---

### upload

Uploads an HTTP resource (file or multipart data).

#### Parameters

| Name       | Type               | Required | Description                                                    |
| ---------- | ------------------ | -------- | -------------------------------------------------------------- |
| path       | string             | Yes      | Address of the service to execute                              |
| method     | string             | No       | HTTP method to use                                             |
| parameters | UploadParameters[] | Yes      | Parameters to send (see [UploadParameters](#uploadparameters)) |
| headers    | object             | No       | Headers to send                                                |
| type       | string             | No       | Expected response type                                         |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "upload",
  "properties": {
    "path": "https://api.example.com/upload",
    "method": "POST",
    "parameters": [
      {
        "name": "file",
        "type": "image/png",
        "value": "<Base64>"
      }
    ],
    "headers": { "Authorization": "Bearer token" },
    "type": "json"
  }
}
```

---

## Schemas

### UploadParameters

Parameters for uploading files or data.

| Name  | Type   | Description                |
| ----- | ------ | -------------------------- |
| name  | string | Name of the parameter/file |
| type  | string | MIME type of the content   |
| value | object | Value (Base64) |

---

## Notes

- All functions expect a `properties` object containing the parameters described above.
- The `type` parameter allows you to specify the expected response format (`json`, `text`, `blob`, etc.).
- For uploads, the `parameters` parameter must be an array of objects following the [UploadParameters](#uploadparameters) schema.
- Headers (`headers`) are optional but recommended for authentication or content management.
- The functions are designed to be used in agent orchestration or automated scripting contexts.

---

**For any questions or contributions, please refer to the library's associated GitHub repository.**
