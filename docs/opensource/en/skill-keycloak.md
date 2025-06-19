Here is the English translation of your technical documentation for the @digipair/skill-keycloak project:

---

# @digipair/skill-keycloak

**Version:** 0.1.0  
**Summary:** Secure web page display  
**Description:** This skill covers the knowledge and use of web technologies required to develop and maintain websites secured by Keycloak.  
**Icon:** 🔐

---

## Table of Contents

- [Functions](#functions)
  - [executeFactory](#executefactory)
  - [login](#login)
  - [logout](#logout)
- [Scene Blocks](#scene-blocks)
  - [page](#page)
  - [service](#service)
  - [boost](#boost)
- [Data Schemas](#data-schemas)
  - [SecuredInput](#securedinput)
  - [SecuredStep](#securedstep)
  - [ContextParameter](#contextparameter)

---

## Functions

### executeFactory

Executes a list of capabilities within the factory.

#### Parameters

| Name     | Type    | Required | Description                                         |
|----------|---------|----------|-----------------------------------------------------|
| execute  | array   | Yes      | List of capabilities to execute (`pinsSettings`)    |
| secured  | boolean | No       | Secures execution via a Keycloak token              |

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "executeFactory",
  "properties": {
    "execute": [
      { /* pinsSettings object */ }
    ],
    "secured": true
  }
}
```

---

### login

Authenticates the user on the site via the Keycloak server.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "login",
  "properties": {}
}
```

---

### logout

Logs the user out from the site via the Keycloak server.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "logout",
  "properties": {}
}
```

---

## Scene Blocks

### page

Displays a web page secured by Keycloak.

#### Parameters

| Name                 | Type    | Required | Description                                                                 |
|----------------------|---------|----------|-----------------------------------------------------------------------------|
| body                 | array   | Yes      | Page content (`pinsSettings`)                                               |
| head                 | array   | No       | Page header (`pinsSettings`)                                                |
| ssr                  | boolean | No       | Server-side rendering                                                       |
| styleHtml            | string  | No       | CSS style for the HTML element                                              |
| styleBody            | string  | No       | CSS style for the BODY element                                              |
| url                  | string  | No       | Keycloak server address                                                     |
| realm                | string  | No       | Keycloak server realm                                                       |
| clientId             | string  | No       | Keycloak server client ID                                                   |
| factoryUrl           | string  | No       | Digipair factory address                                                    |
| factoryInitialize    | array   | No       | Action triggered on factory initialization (`pinsSettings`)                 |
| browserInitialize    | array   | No       | Action triggered on browser initialization (`pinsSettings`)                 |
| browserLoad          | array   | No       | Action triggered on page load (`pinsSettings`)                              |
| unlogged             | array   | No       | Action if the user is not authenticated (`pinsSettings`)                    |
| logged               | array   | No       | Action if the user is authenticated (`pinsSettings`)                        |
| confirmBeforeUnload  | string  | No       | Confirmation message before leaving the page                                |

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "page",
  "properties": {
    "body": [
      { /* pinsSettings object */ }
    ],
    "url": "https://keycloak.example.com",
    "realm": "myrealm",
    "clientId": "myclientid"
  }
}
```

---

### service

Responds to an HTTP request secured by Keycloak.

#### Parameters

| Name     | Type    | Required | Description                                         |
|----------|---------|----------|-----------------------------------------------------|
| execute  | array   | Yes      | Commands to execute (`pinsSettings`)                |
| secured  | string  | No       | Access allowed only with a Keycloak token           |
| url      | string  | No       | Keycloak server address                             |
| realm    | string  | No       | Keycloak server realm                               |

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "service",
  "properties": {
    "execute": [
      { /* pinsSettings object */ }
    ],
    "secured": "token_keycloak"
  }
}
```

---

### boost

Secure boost provided by Digipair via Keycloak.

#### Parameters

| Name     | Type    | Required | Description                                         |
|----------|---------|----------|-----------------------------------------------------|
| steps    | array   | Yes      | Steps to execute (`SecuredStep`)                    |
| secured  | string  | No       | Access allowed only with a Keycloak token           |
| url      | string  | No       | Keycloak server address                             |
| realm    | string  | No       | Keycloak server realm                               |

#### Metadata

| Name        | Type    | Required | Description                        |
|-------------|---------|----------|------------------------------------|
| standalone  | boolean | Yes      | Is the boost standalone?           |
| selector    | string  | No       | CSS selector                       |
| url         | string  | No       | URL RegEx                          |
| context     | array   | Yes      | Context schema (`ContextParameter`) |

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "boost",
  "properties": {
    "steps": [
      {
        "name": "step1",
        "execute": [
          { /* pinsSettings object */ }
        ]
      }
    ],
    "secured": "token_keycloak"
  }
}
```

---

## Data Schemas

### SecuredInput

Secured input.

| Property  | Type    | Description                       |
|-----------|---------|-----------------------------------|
| prompt    | boolean |                                   |
| required  | boolean |                                   |
| selector  | string  |                                   |
| url       | string  |                                   |
| inputs    | array   | List of `pinsSettings` objects    |

---

### SecuredStep

Secured execution step.

| Property  | Type    | Required | Description                        |
|-----------|---------|----------|------------------------------------|
| name      | string  | Yes      | Step name                          |
| execute   | array   | Yes      | Actions to execute (`pinsSettings`)|

---

### ContextParameter

Context parameter.

| Property    | Type    | Required | Description   |
|-------------|---------|----------|--------------|
| name        | string  | Yes      | Name         |
| summary     | string  | Yes      | Summary      |
| required    | boolean | Yes      | Required     |
| schema      | object  | Yes      | Schema       |
| description | string  | No       | Description  |

---

## Notes

- `pinsSettings` objects are Digipair-specific configuration/action objects and should be adapted to your use case.
- Integration with Keycloak requires correct configuration of the `url`, `realm`, and `clientId` parameters according to your Keycloak server.
- The `login` and `logout` functions handle user authentication and logout, respectively.
- Scene blocks allow you to compose pages, services, or boosts secured by Keycloak, suitable for different usage contexts.