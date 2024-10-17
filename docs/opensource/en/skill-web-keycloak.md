# @digipair/skill-web-keycloak

**Version:** 0.1.0  
**Summary:** Keycloak Web Authentication  
**Description:** This skill allows for managing Keycloak authentication on the browser side.  
**Icon:** 🔑

## Table of Contents

- [Functions](#functions)
  - [initialize](#initialize)
  - [isLogged](#islogged)
  - [token](#token)
  - [logout](#logout)
  - [login](#login)

## Functions

### initialize

Initializes Keycloak authentication.

#### Parameters

| Name      | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| url       | string | No       | Keycloak server address    |
| realm     | string | No       | Keycloak realm             |
| clientId  | string | No       | Keycloak client ID         |

#### Example

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "initialize",
  "properties": {
    "url": "https://keycloak.example.com",
    "realm": "example-realm",
    "clientId": "example-client-id"
  }
}
```

### isLogged

Checks if the user is logged in.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "isLogged",
  "properties": {}
}
```

### token

Retrieves the Keycloak token.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "token",
  "properties": {}
}
```

### logout

Logs the user out of Keycloak.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "logout",
  "properties": {}
}
```

### login

Logs the user into Keycloak.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "login",
  "properties": {}
}
```

## Notes

- The functions `initialize`, `isLogged`, `token`, `logout`, and `login` are used to manage Keycloak authentication on the browser side.
- Make sure to provide the correct parameters for the `initialize` function to properly configure Keycloak authentication.