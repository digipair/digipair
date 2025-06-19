# @digipair/skill-web-keycloak

**Version:** 0.1.0  
**Summary:** Keycloak Web Authentication  
**Description:** This skill enables Keycloak authentication management on the browser side.  
**Icon:** 🔑

## Table of Contents

- [Functions](#functions)
  - [initialize](#initialize)
  - [isLogged](#islogged)
  - [token](#token)
  - [logout](#logout)
  - [login](#login)

---

## Functions

### initialize

Initializes Keycloak authentication.

#### Parameters

| Name     | Type   | Required | Description                |
| -------- | ------ | -------- | -------------------------- |
| url      | string | No       | Keycloak server address    |
| realm    | string | No       | Keycloak Realm name        |
| clientId | string | No       | Keycloak client identifier |

#### Example

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "initialize",
  "properties": {
    "url": "https://keycloak.example.com",
    "realm": "my-realm",
    "clientId": "my-client"
  }
}
```

---

### isLogged

Checks if the user is currently authenticated with Keycloak.

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

---

### token

Retrieves the current user's Keycloak authentication token.

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

---

### logout

Logs the user out from Keycloak.

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

---

### login

Logs the user in to Keycloak.

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

---

## Notes

- The `initialize` function must be called before any authentication operation to configure the connection to Keycloak.
- The `login` and `logout` functions are used to log the user in and out, respectively.
- `isLogged` allows you to check the user's authentication status.
- `token` allows you to retrieve the JWT token for authenticated requests.
- All parameters for `initialize` are optional, but it is recommended to provide them for proper configuration.
- This library is designed to be used in the browser.
