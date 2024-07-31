# @digipair/skill-linkedin

**Version:** 0.1.0  
**Summary:** Communication with LinkedIn services  
**Description:** This skill allows the use of LinkedIn services.  
**Icon:** 👤

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

Executes a LinkedIn service.

#### Parameters

| Name      | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| path      | string | Yes      | Path of the service to execute |
| method    | string | No       | HTTP method to use         |
| body      | object | No       | Value to send              |
| version   | string | No       | API version to use         |
| headers   | object | No       | Headers to send            |
| TOKEN     | string | No       | Access token to use        |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "request",
  "properties": {
    "path": "/v2/me",
    "method": "GET",
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### create

Adds a LinkedIn resource.

#### Parameters

| Name      | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| path      | string | Yes      | Path of the service to execute |
| body      | object | No       | Value to send              |
| version   | string | No       | API version to use         |
| headers   | object | No       | Headers to send            |
| TOKEN     | string | No       | Access token to use        |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "create",
  "properties": {
    "path": "/v2/ugcPosts",
    "body": {
      "author": "urn:li:person:<personId>",
      "lifecycleState": "PUBLISHED",
      "specificContent": {
        "com.linkedin.ugc.ShareContent": {
          "shareCommentary": {
            "text": "Hello World!"
          },
          "shareMediaCategory": "NONE"
        }
      },
      "visibility": {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
      }
    },
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### read

Reads a LinkedIn resource.

#### Parameters

| Name      | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| path      | string | Yes      | Path of the service to execute |
| version   | string | No       | API version to use         |
| headers   | object | No       | Headers to send            |
| TOKEN     | string | No       | Access token to use        |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "read",
  "properties": {
    "path": "/v2/me",
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### update

Modifies a LinkedIn resource.

#### Parameters

| Name      | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| path      | string | Yes      | Path of the service to execute |
| body      | object | No       | Value to send              |
| version   | string | No       | API version to use         |
| headers   | object | No       | Headers to send            |
| TOKEN     | string | No       | Access token to use        |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "update",
  "properties": {
    "path": "/v2/ugcPosts/<postId>",
    "body": {
      "specificContent": {
        "com.linkedin.ugc.ShareContent": {
          "shareCommentary": {
            "text": "Updated text"
          },
          "shareMediaCategory": "NONE"
        }
      }
    },
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### partialUpdate

Modifies part of a LinkedIn resource.

#### Parameters

| Name      | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| path      | string | Yes      | Path of the service to execute |
| body      | object | No       | Value to send              |
| version   | string | No       | API version to use         |
| headers   | object | No       | Headers to send            |
| TOKEN     | string | No       | Access token to use        |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "partialUpdate",
  "properties": {
    "path": "/v2/ugcPosts/<postId>",
    "body": {
      "specificContent": {
        "com.linkedin.ugc.ShareContent": {
          "shareCommentary": {
            "text": "Partially updated text"
          }
        }
      }
    },
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### remove

Deletes a LinkedIn resource.

#### Parameters

| Name      | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| path      | string | Yes      | Path of the service to execute |
| version   | string | No       | API version to use         |
| headers   | object | No       | Headers to send            |
| TOKEN     | string | No       | Access token to use        |

#### Example

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "remove",
  "properties": {
    "path": "/v2/ugcPosts/<postId>",
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

## Notes

- The functions `request`, `create`, `read`, `update`, `partialUpdate`, and `remove` allow interaction with LinkedIn services by executing specific requests.
- Ensure to provide a valid access token for the `TOKEN` parameter to authorize the requests.