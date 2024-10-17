# @digipair/skill-http

**Version:** 0.1.0  
**Summary:** Communication with HTTP services  
**Description:** This skill allows the use of HTTP services.  
**Icon:** 🌐

## Table of Contents

- [Functions](#functions)
  - [request](#request)
  - [create](#create)
  - [read](#read)
  - [update](#update)
  - [partialUpdate](#partialupdate)
  - [remove](#remove)

## Functions

### request

Executes an HTTP service.

#### Parameters

| Name     | Type    | Required | Description                     |
|----------|---------|----------|---------------------------------|
| path     | string  | Yes      | Address of the service to execute |
| method   | string  | No       | HTTP method to use              |
| body     | object  | No       | Value to send                   |
| headers  | object  | No       | Headers to send                 |
| IS_JSON  | boolean | No       | Indicates if the API is in JSON |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "request",
  "properties": {
    "path": "https://example.com/api",
    "method": "POST",
    "body": {
      "key": "value"
    },
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### create

Adds an HTTP resource.

#### Parameters

| Name     | Type    | Required | Description                     |
|----------|---------|----------|---------------------------------|
| path     | string  | Yes      | Address of the service to execute |
| body     | object  | No       | Value to send                   |
| headers  | object  | No       | Headers to send                 |
| IS_JSON  | boolean | No       | Indicates if the API is in JSON |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "create",
  "properties": {
    "path": "https://example.com/api/resource",
    "body": {
      "name": "New Resource"
    },
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### read

Reads an HTTP resource.

#### Parameters

| Name     | Type    | Required | Description                     |
|----------|---------|----------|---------------------------------|
| path     | string  | Yes      | Address of the service to execute |
| headers  | object  | No       | Headers to send                 |
| IS_JSON  | boolean | No       | Indicates if the API is in JSON |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "read",
  "properties": {
    "path": "https://example.com/api/resource",
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### update

Modifies an HTTP resource.

#### Parameters

| Name     | Type    | Required | Description                     |
|----------|---------|----------|---------------------------------|
| path     | string  | Yes      | Address of the service to execute |
| body     | object  | No       | Value to send                   |
| headers  | object  | No       | Headers to send                 |
| IS_JSON  | boolean | No       | Indicates if the API is in JSON |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "update",
  "properties": {
    "path": "https://example.com/api/resource",
    "body": {
      "name": "Updated Resource"
    },
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### partialUpdate

Modifies part of an HTTP resource.

#### Parameters

| Name     | Type    | Required | Description                     |
|----------|---------|----------|---------------------------------|
| path     | string  | Yes      | Address of the service to execute |
| body     | object  | No       | Value to send                   |
| headers  | object  | No       | Headers to send                 |
| IS_JSON  | boolean | No       | Indicates if the API is in JSON |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "partialUpdate",
  "properties": {
    "path": "https://example.com/api/resource",
    "body": {
      "name": "Partially Updated Resource"
    },
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### remove

Deletes an HTTP resource.

#### Parameters

| Name     | Type    | Required | Description                     |
|----------|---------|----------|---------------------------------|
| path     | string  | Yes      | Address of the service to execute |
| headers  | object  | No       | Headers to send                 |
| IS_JSON  | boolean | No       | Indicates if the API is in JSON |

#### Example

```json
{
  "library": "@digipair/skill-http",
  "element": "remove",
  "properties": {
    "path": "https://example.com/api/resource",
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

## Notes

- The functions `request`, `create`, `read`, `update`, `partialUpdate`, and `remove` are used to interact with HTTP services.
- Ensure to provide a valid service address for the `path` parameter.
- Headers and request bodies can be customized according to the needs of the target API.
- The `IS_JSON` parameter should be set to `true` if the API expects data in JSON format.