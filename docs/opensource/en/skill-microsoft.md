# @digipair/skill-microsoft

**Version:** 0.1.0  
**Summary:** Communication with Microsoft services  
**Description:** This skill enables the use of Microsoft services  
**Icon:** ❖

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

Executes a generic Microsoft service.

#### Parameters

| Name                | Type   | Required | Description                           |
| ------------------- | ------ | -------- | ------------------------------------- |
| path                | string | Yes      | Path of the service to execute        |
| method              | string | No       | HTTP method to use (GET, POST, etc.)  |
| body                | object | No       | Value to send                         |
| version             | string | No       | API version to use                    |
| headers             | object | No       | Headers to send                       |
| OAUTH_CLIENT_ID     | string | No       | OAuth client ID                       |
| OAUTH_CLIENT_SECRET | string | No       | OAuth client secret                   |
| TENANT_ID           | string | No       | Tenant ID                             |
| type                | string | No       | Expected output type from the service |
| contentType         | string | No       | Content type of the request           |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "request",
  "properties": {
    "path": "/me/messages",
    "method": "GET",
    "OAUTH_CLIENT_ID": "your_client_id",
    "OAUTH_CLIENT_SECRET": "your_client_secret",
    "TENANT_ID": "your_tenant_id"
  }
}
```

---

### create

Adds a Microsoft resource.

#### Parameters

| Name                | Type   | Required | Description                           |
| ------------------- | ------ | -------- | ------------------------------------- |
| path                | string | Yes      | Path of the service to execute        |
| body                | object | No       | Value to send                         |
| version             | string | No       | API version to use                    |
| headers             | object | No       | Headers to send                       |
| OAUTH_CLIENT_ID     | string | No       | OAuth client ID                       |
| OAUTH_CLIENT_SECRET | string | No       | OAuth client secret                   |
| TENANT_ID           | string | No       | Tenant ID                             |
| type                | string | No       | Expected output type from the service |
| contentType         | string | No       | Content type of the request           |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "create",
  "properties": {
    "path": "/me/events",
    "body": {
      "subject": "Meeting",
      "start": { "dateTime": "2024-06-01T10:00:00", "timeZone": "Europe/Paris" },
      "end": { "dateTime": "2024-06-01T11:00:00", "timeZone": "Europe/Paris" }
    },
    "OAUTH_CLIENT_ID": "your_client_id",
    "OAUTH_CLIENT_SECRET": "your_client_secret",
    "TENANT_ID": "your_tenant_id"
  }
}
```

---

### read

Reads a Microsoft resource.

#### Parameters

| Name                | Type   | Required | Description                           |
| ------------------- | ------ | -------- | ------------------------------------- |
| path                | string | Yes      | Path of the service to execute        |
| version             | string | No       | API version to use                    |
| headers             | object | No       | Headers to send                       |
| OAUTH_CLIENT_ID     | string | No       | OAuth client ID                       |
| OAUTH_CLIENT_SECRET | string | No       | OAuth client secret                   |
| TENANT_ID           | string | No       | Tenant ID                             |
| type                | string | No       | Expected output type from the service |
| contentType         | string | No       | Content type of the request           |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "read",
  "properties": {
    "path": "/me",
    "OAUTH_CLIENT_ID": "your_client_id",
    "OAUTH_CLIENT_SECRET": "your_client_secret",
    "TENANT_ID": "your_tenant_id"
  }
}
```

---

### update

Updates a Microsoft resource.

#### Parameters

| Name                | Type   | Required | Description                           |
| ------------------- | ------ | -------- | ------------------------------------- |
| path                | string | Yes      | Path of the service to execute        |
| body                | object | No       | Value to send                         |
| version             | string | No       | API version to use                    |
| headers             | object | No       | Headers to send                       |
| OAUTH_CLIENT_ID     | string | No       | OAuth client ID                       |
| OAUTH_CLIENT_SECRET | string | No       | OAuth client secret                   |
| TENANT_ID           | string | No       | Tenant ID                             |
| type                | string | No       | Expected output type from the service |
| contentType         | string | No       | Content type of the request           |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "update",
  "properties": {
    "path": "/me",
    "body": {
      "displayName": "New Name"
    },
    "OAUTH_CLIENT_ID": "your_client_id",
    "OAUTH_CLIENT_SECRET": "your_client_secret",
    "TENANT_ID": "your_tenant_id"
  }
}
```

---

### partialUpdate

Partially updates a Microsoft resource.

#### Parameters

| Name                | Type   | Required | Description                           |
| ------------------- | ------ | -------- | ------------------------------------- |
| path                | string | Yes      | Path of the service to execute        |
| body                | object | No       | Value to send                         |
| version             | string | No       | API version to use                    |
| headers             | object | No       | Headers to send                       |
| OAUTH_CLIENT_ID     | string | No       | OAuth client ID                       |
| OAUTH_CLIENT_SECRET | string | No       | OAuth client secret                   |
| TENANT_ID           | string | No       | Tenant ID                             |
| type                | string | No       | Expected output type from the service |
| contentType         | string | No       | Content type of the request           |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "partialUpdate",
  "properties": {
    "path": "/me",
    "body": {
      "jobTitle": "Developer"
    },
    "OAUTH_CLIENT_ID": "your_client_id",
    "OAUTH_CLIENT_SECRET": "your_client_secret",
    "TENANT_ID": "your_tenant_id"
  }
}
```

---

### remove

Deletes a Microsoft resource.

#### Parameters

| Name                | Type   | Required | Description                           |
| ------------------- | ------ | -------- | ------------------------------------- |
| path                | string | Yes      | Path of the service to execute        |
| version             | string | No       | API version to use                    |
| headers             | object | No       | Headers to send                       |
| OAUTH_CLIENT_ID     | string | No       | OAuth client ID                       |
| OAUTH_CLIENT_SECRET | string | No       | OAuth client secret                   |
| TENANT_ID           | string | No       | Tenant ID                             |
| type                | string | No       | Expected output type from the service |
| contentType         | string | No       | Content type of the request           |

#### Example

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "remove",
  "properties": {
    "path": "/me/events/{eventId}",
    "OAUTH_CLIENT_ID": "your_client_id",
    "OAUTH_CLIENT_SECRET": "your_client_secret",
    "TENANT_ID": "your_tenant_id"
  }
}
```

---

## Notes

- All functions generally require valid OAuth authentication (OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, TENANT_ID).
- The `path` parameter corresponds to the Microsoft Graph service path or other Microsoft APIs.
- The `type` parameter allows you to specify the expected output format (e.g., `json`, `text`, etc.).
- The `contentType` parameter allows you to specify the MIME type of the request (e.g., `application/json`).
- The `headers` parameter allows you to add custom headers to the request.
- The `create`, `update`, and `partialUpdate` functions generally require a `body` parameter describing the resource to create or modify.
- The provided examples should be adapted according to the targeted Microsoft service and the application's access rights.
