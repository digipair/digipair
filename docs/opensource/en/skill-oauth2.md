# @digipair/skill-oauth2

**Version:** 0.1.0  
**Summary:** OAuth2 Authorization Management  
**Description:** This skill allows you to manage OAuth2 authorizations.  
**Icon:** 🔐

## Table of Contents

- [Functions](#functions)
  - [authorizationCodeUrl](#authorizationcodeurl)
  - [authorizationCodeAccessToken](#authorizationcodeaccesstoken)
  - [authorizationCodeCreateToken](#authorizationcodecreatetoken)
  - [resourceOwnerPasswordAccessToken](#resourceownerpasswordaccesstoken)
  - [resourceOwnerPasswordCreateToken](#resourceownerpasswordcreatetoken)
  - [clientCredentialsAccessToken](#clientcredentialsaccesstoken)
  - [clientCredentialsCreateToken](#clientcredentialscreatetoken)
  - [tokenExpired](#tokenexpired)
  - [tokenRefresh](#tokenrefresh)
  - [tokenRevoke](#tokenrevoke)
  - [tokenRevokeAll](#tokenrevokeall)

---

## Functions

### authorizationCodeUrl

Retrieves the OAuth2 authorization URL (Authorization Code Grant).

#### Parameters

| Name   | Type   | Required | Description          |
| ------ | ------ | -------- | -------------------- |
| config | object | Yes      | OAuth2 configuration |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "authorizationCodeUrl",
  "properties": {
    "config": {
      "clientId": "your_client_id",
      "redirectUri": "https://your.app/callback",
      "scope": "openid profile",
      "authorizationEndpoint": "https://provider.com/oauth2/authorize"
    }
  }
}
```

---

### authorizationCodeAccessToken

Retrieves an access token using the Authorization Code flow.

#### Parameters

| Name        | Type   | Required | Description          |
| ----------- | ------ | -------- | -------------------- |
| config      | object | Yes      | OAuth2 configuration |
| tokenParams | object | Yes      | Token parameters     |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "authorizationCodeAccessToken",
  "properties": {
    "config": {
      "clientId": "your_client_id",
      "clientSecret": "your_secret",
      "tokenEndpoint": "https://provider.com/oauth2/token"
    },
    "tokenParams": {
      "code": "received_code",
      "redirectUri": "https://your.app/callback"
    }
  }
}
```

---

### authorizationCodeCreateToken

Creates a token object from an access token (Authorization Code Grant).

#### Parameters

| Name        | Type   | Required | Description          |
| ----------- | ------ | -------- | -------------------- |
| config      | object | Yes      | OAuth2 configuration |
| accessToken | object | Yes      | Access token         |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "authorizationCodeCreateToken",
  "properties": {
    "config": {
      "clientId": "your_client_id"
    },
    "accessToken": {
      "access_token": "token",
      "expires_in": 3600
    }
  }
}
```

---

### resourceOwnerPasswordAccessToken

Retrieves an access token using the Resource Owner Password Credentials flow.

#### Parameters

| Name        | Type   | Required | Description          |
| ----------- | ------ | -------- | -------------------- |
| config      | object | Yes      | OAuth2 configuration |
| tokenParams | object | Yes      | Token parameters     |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "resourceOwnerPasswordAccessToken",
  "properties": {
    "config": {
      "clientId": "your_client_id",
      "clientSecret": "your_secret",
      "tokenEndpoint": "https://provider.com/oauth2/token"
    },
    "tokenParams": {
      "username": "user",
      "password": "password"
    }
  }
}
```

---

### resourceOwnerPasswordCreateToken

Creates a token object from an access token (Resource Owner Password Credentials).

#### Parameters

| Name        | Type   | Required | Description          |
| ----------- | ------ | -------- | -------------------- |
| config      | object | Yes      | OAuth2 configuration |
| accessToken | object | Yes      | Access token         |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "resourceOwnerPasswordCreateToken",
  "properties": {
    "config": {
      "clientId": "your_client_id"
    },
    "accessToken": {
      "access_token": "token",
      "expires_in": 3600
    }
  }
}
```

---

### clientCredentialsAccessToken

Retrieves an access token using the Client Credentials flow.

#### Parameters

| Name        | Type   | Required | Description          |
| ----------- | ------ | -------- | -------------------- |
| config      | object | Yes      | OAuth2 configuration |
| tokenParams | object | Yes      | Token parameters     |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "clientCredentialsAccessToken",
  "properties": {
    "config": {
      "clientId": "your_client_id",
      "clientSecret": "your_secret",
      "tokenEndpoint": "https://provider.com/oauth2/token"
    },
    "tokenParams": {
      "scope": "api.read"
    }
  }
}
```

---

### clientCredentialsCreateToken

Creates a token object from an access token (Client Credentials).

#### Parameters

| Name        | Type   | Required | Description          |
| ----------- | ------ | -------- | -------------------- |
| config      | object | Yes      | OAuth2 configuration |
| accessToken | object | Yes      | Access token         |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "clientCredentialsCreateToken",
  "properties": {
    "config": {
      "clientId": "your_client_id"
    },
    "accessToken": {
      "access_token": "token",
      "expires_in": 3600
    }
  }
}
```

---

### tokenExpired

Checks if a token is expired.

#### Parameters

| Name  | Type   | Required | Description |
| ----- | ------ | -------- | ----------- |
| token | object | Yes      | Token       |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "tokenExpired",
  "properties": {
    "token": {
      "access_token": "token",
      "expires_at": 1712345678
    }
  }
}
```

---

### tokenRefresh

Refreshes a token.

#### Parameters

| Name  | Type   | Required | Description |
| ----- | ------ | -------- | ----------- |
| token | object | Yes      | Token       |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "tokenRefresh",
  "properties": {
    "token": {
      "refresh_token": "refresh_token"
    }
  }
}
```

---

### tokenRevoke

Revokes a token.

#### Parameters

| Name  | Type   | Required | Description     |
| ----- | ------ | -------- | --------------- |
| token | object | Yes      | Token to revoke |
| type  | string | Yes      | Revocation type |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "tokenRevoke",
  "properties": {
    "token": {
      "access_token": "token"
    },
    "type": "access_token"
  }
}
```

---

### tokenRevokeAll

Revokes all associated tokens.

#### Parameters

| Name  | Type   | Required | Description |
| ----- | ------ | -------- | ----------- |
| token | object | Yes      | Token       |

#### Example

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "tokenRevokeAll",
  "properties": {
    "token": {
      "access_token": "token"
    }
  }
}
```

---

## Notes

- The `config` and `tokenParams` objects must follow the structure expected by your OAuth2 provider.
- The token creation functions (`authorizationCodeCreateToken`, `resourceOwnerPasswordCreateToken`, `clientCredentialsCreateToken`) are used to encapsulate an access token in a standardized token object.
- Revocation and refresh functions generally require the token to contain the appropriate fields (`refresh_token`, etc.).
- Make sure to secure your OAuth2 credentials and secrets.
