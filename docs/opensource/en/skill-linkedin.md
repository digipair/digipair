# @digipair/skill-linkedin

**Version:** 0.1.0  
**Summary:** Communication with LinkedIn services  
**Description:** This skill enables the use of LinkedIn services.  
**Icon:** 👤

---

## Table of Contents

- [Functions](#functions)
  - [request](#request)
  - [create](#create)
  - [read](#read)
  - [update](#update)
  - [partialUpdate](#partialupdate)
  - [remove](#remove)
- [Notes](#notes)

---

## Functions

### request

Executes a generic LinkedIn service.

#### Parameters

| Name    | Type   | Required | Description                          |
| ------- | ------ | -------- | ------------------------------------ |
| path    | string | Yes      | Path of the service to execute       |
| method  | string | No       | HTTP method to use (GET, POST, etc.) |
| body    | object | No       | Value to send                        |
| version | string | No       | API version to use                   |
| headers | object | No       | Headers to send                      |
| TOKEN   | string | No       | Access token to use                  |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "request",
  "properties": {
    "path": "/v2/me",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    },
    "TOKEN": "<your_token>"
  }
}
```

---

### create

Adds a LinkedIn resource.

#### Parameters

| Name    | Type   | Required | Description                    |
| ------- | ------ | -------- | ------------------------------ |
| path    | string | Yes      | Path of the service to execute |
| body    | object | No       | Value to send                  |
| version | string | No       | API version to use             |
| headers | object | No       | Headers to send                |
| TOKEN   | string | No       | Access token to use            |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "create",
  "properties": {
    "path": "/v2/posts",
    "body": {
      "content": "New LinkedIn post"
    },
    "TOKEN": "<your_token>"
  }
}
```

---

### read

Reads a LinkedIn resource.

#### Parameters

| Name    | Type   | Required | Description                    |
| ------- | ------ | -------- | ------------------------------ |
| path    | string | Yes      | Path of the service to execute |
| version | string | No       | API version to use             |
| headers | object | No       | Headers to send                |
| TOKEN   | string | No       | Access token to use            |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "read",
  "properties": {
    "path": "/v2/me",
    "TOKEN": "<your_token>"
  }
}
```

---

### update

Updates a LinkedIn resource.

#### Parameters

| Name    | Type   | Required | Description                    |
| ------- | ------ | -------- | ------------------------------ |
| path    | string | Yes      | Path of the service to execute |
| body    | object | No       | Value to send                  |
| version | string | No       | API version to use             |
| headers | object | No       | Headers to send                |
| TOKEN   | string | No       | Access token to use            |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "update",
  "properties": {
    "path": "/v2/posts/12345",
    "body": {
      "content": "Post update"
    },
    "TOKEN": "<your_token>"
  }
}
```

---

### partialUpdate

Partially updates a LinkedIn resource.

#### Parameters

| Name    | Type   | Required | Description                    |
| ------- | ------ | -------- | ------------------------------ |
| path    | string | Yes      | Path of the service to execute |
| body    | object | No       | Value to send                  |
| version | string | No       | API version to use             |
| headers | object | No       | Headers to send                |
| TOKEN   | string | No       | Access token to use            |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "partialUpdate",
  "properties": {
    "path": "/v2/posts/12345",
    "body": {
      "content": "Partial update"
    },
    "TOKEN": "<your_token>"
  }
}
```

---

### remove

Deletes a LinkedIn resource.

#### Parameters

| Name    | Type   | Required | Description                    |
| ------- | ------ | -------- | ------------------------------ |
| path    | string | Yes      | Path of the service to execute |
| version | string | No       | API version to use             |
| headers | object | No       | Headers to send                |
| TOKEN   | string | No       | Access token to use            |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "remove",
  "properties": {
    "path": "/v2/posts/12345",
    "TOKEN": "<your_token>"
  }
}
```

---

## Notes

- All functions require the `path` parameter to specify the targeted LinkedIn resource or service.
- The `TOKEN` parameter is required for authentication with the LinkedIn API.
- The `headers` and `version` parameters are optional and allow you to customize the request.
- Use the `request` function for generic or custom calls to the LinkedIn API.
- The `create`, `read`, `update`, `partialUpdate`, and `remove` functions correspond to standard CRUD operations on LinkedIn resources.
- Make sure to comply with the access rights and quotas imposed by the LinkedIn API when using these functions.
