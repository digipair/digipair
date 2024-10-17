# @digipair/skill-microsoft

**Version:** 0.1.0  
**Summary:** Communication with Microsoft services  
**Description:** This skill allows the use of Microsoft services.  
**Icon:** ❖

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

Executes a Microsoft service.

#### Parameters

| Name               | Type   | Required | Description                    |
|--------------------|--------|----------|--------------------------------|
| path               | string | Yes      | Path of the service to execute  |
| method             | string | No       | HTTP method to use             |
| body               | object | No       | Value to send                  |
| version            | string | No       | API version to use             |
| headers            | object | No       | Headers to send                |
| OAUTH_CLIENT_ID    | string | No       | OAuth client ID                |
| OAUTH_CLIENT_SECRET| string | No       | OAuth client secret            |
| TENANT_ID          | string | No       | Tenant ID                      |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "request",
  "properties": {
    "path": "/v1.0/me",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### create

Adds a Microsoft resource.

#### Parameters

| Name               | Type   | Required | Description                    |
|--------------------|--------|----------|--------------------------------|
| path               | string | Yes      | Path of the service to execute  |
| body               | object | No       | Value to send                  |
| version            | string | No       | API version to use             |
| headers            | object | No       | Headers to send                |
| OAUTH_CLIENT_ID    | string | No       | OAuth client ID                |
| OAUTH_CLIENT_SECRET| string | No       | OAuth client secret            |
| TENANT_ID          | string | No       | Tenant ID                      |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "create",
  "properties": {
    "path": "/v1.0/me/contacts",
    "body": {
      "givenName": "John",
      "surname": "Doe"
    },
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### read

Reads a Microsoft resource.

#### Parameters

| Name               | Type   | Required | Description                    |
|--------------------|--------|----------|--------------------------------|
| path               | string | Yes      | Path of the service to execute  |
| version            | string | No       | API version to use             |
| headers            | object | No       | Headers to send                |
| OAUTH_CLIENT_ID    | string | No       | OAuth client ID                |
| OAUTH_CLIENT_SECRET| string | No       | OAuth client secret            |
| TENANT_ID          | string | No       | Tenant ID                      |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "read",
  "properties": {
    "path": "/v1.0/me/contacts",
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### update

Modifies a Microsoft resource.

#### Parameters

| Name               | Type   | Required | Description                    |
|--------------------|--------|----------|--------------------------------|
| path               | string | Yes      | Path of the service to execute  |
| body               | object | No       | Value to send                  |
| version            | string | No       | API version to use             |
| headers            | object | No       | Headers to send                |
| OAUTH_CLIENT_ID    | string | No       | OAuth client ID                |
| OAUTH_CLIENT_SECRET| string | No       | OAuth client secret            |
| TENANT_ID          | string | No       | Tenant ID                      |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "update",
  "properties": {
    "path": "/v1.0/me/contacts/CONTACT_ID",
    "body": {
      "givenName": "Jane"
    },
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### partialUpdate

Modifies part of a Microsoft resource.

#### Parameters

| Name               | Type   | Required | Description                    |
|--------------------|--------|----------|--------------------------------|
| path               | string | Yes      | Path of the service to execute  |
| body               | object | No       | Value to send                  |
| version            | string | No       | API version to use             |
| headers            | object | No       | Headers to send                |
| OAUTH_CLIENT_ID    | string | No       | OAuth client ID                |
| OAUTH_CLIENT_SECRET| string | No       | OAuth client secret            |
| TENANT_ID          | string | No       | Tenant ID                      |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "partialUpdate",
  "properties": {
    "path": "/v1.0/me/contacts/CONTACT_ID",
    "body": {
      "surname": "Smith"
    },
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### remove

Deletes a Microsoft resource.

#### Parameters

| Name               | Type   | Required | Description                    |
|--------------------|--------|----------|--------------------------------|
| path               | string | Yes      | Path of the service to execute  |
| version            | string | No       | API version to use             |
| headers            | object | No       | Headers to send                |
| OAUTH_CLIENT_ID    | string | No       | OAuth client ID                |
| OAUTH_CLIENT_SECRET| string | No       | OAuth client secret            |
| TENANT_ID          | string | No       | Tenant ID                      |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "remove",
  "properties": {
    "path": "/v1.0/me/contacts/CONTACT_ID",
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

## Notes

- The functions `request`, `create`, `read`, `update`, `partialUpdate`, and `remove` allow interaction with Microsoft services using the specified paths and parameters.
- Ensure to provide the appropriate authorization headers and OAuth credentials if necessary for each function call.