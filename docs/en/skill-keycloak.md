# @digipair/skill-keycloak

**Version:** 0.1.0  
**Summary:** Display of secure web pages  
**Description:** This skill encompasses the knowledge and use of web technologies necessary to develop and maintain websites secured by Keycloak.  
**Icon:** 🔐

## Table of Contents

- [Functions](#functions)
  - [executeFactory](#executefactory)
  - [login](#login)
  - [logout](#logout)
  - [page](#page)
  - [service](#service)
  - [boost](#boost)

## Functions

### executeFactory

Execution of a list of capabilities in the factory.

#### Parameters

| Name     | Type   | Required | Description                                |
|----------|--------|----------|--------------------------------------------|
| execute  | array  | Yes      | List of capabilities to execute            |
| secured  | boolean| No       | Secures the execution via a Keycloak token |

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "executeFactory",
  "properties": {
    "execute": ["capability1", "capability2"],
    "secured": true
  }
}
```

### login

User authentication on the website via the Keycloak server.

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

### logout

User logout from the website via the Keycloak server.

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

### page

Display of a web page secured by Keycloak.

#### Parameters

| Name               | Type    | Required | Description                                                                 |
|--------------------|---------|----------|-----------------------------------------------------------------------------|
| body               | array   | Yes      | Content of the page                                                          |
| title              | string  | No       | Title of the page                                                            |
| favicon            | string  | No       | Icon of the page                                                            |
| styleHtml          | string  | No       | CSS style for the HTML element                                              |
| styleBody          | string  | No       | CSS style for the BODY element                                              |
| url                | string  | No       | Address of the Keycloak server                                              |
| realm              | string  | No       | Realm of the Keycloak server                                                |
| clientId           | string  | No       | Client ID of the Keycloak server                                            |
| factoryUrl         | string  | No       | Address of the Digipair factory                                             |
| factoryInitialize   | array   | No       | Action triggered during factory initialization                               |
| browserInitialize   | array   | No       | Action triggered during browser initialization                               |
| browserLoad        | array   | No       | Action triggered when the page is loaded in the browser                    |
| unlogged           | array   | No       | Action triggered when the page is loaded in the browser if the user is not logged in |
| logged             | array   | No       | Action triggered when the page is loaded in the browser if the user is logged in |

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "page",
  "properties": {
    "body": ["content1", "content2"],
    "title": "Page Title",
    "favicon": "favicon.ico",
    "styleHtml": "body { background-color: #f0f0f0; }",
    "styleBody": "margin: 0;",
    "url": "https://keycloak.example.com",
    "realm": "example-realm",
    "clientId": "example-client-id",
    "factoryUrl": "https://factory.example.com",
    "factoryInitialize": ["action1", "action2"],
    "browserInitialize": ["action1", "action2"],
    "browserLoad": ["action1", "action2"],
    "unlogged": ["action1", "action2"],
    "logged": ["action1", "action2"]
  }
}
```

### service

Response to a secure HTTP call via Keycloak.

#### Parameters

| Name     | Type    | Required | Description                                |
|----------|---------|----------|--------------------------------------------|
| execute  | array   | Yes      | Commands to execute                        |
| secured  | string  | No       | Access allowed only if a Keycloak token is provided |
| url      | string  | No       | Address of the Keycloak server             |
| realm    | string  | No       | Realm of the Keycloak server               |

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "service",
  "properties": {
    "execute": ["command1", "command2"],
    "secured": "token-keycloak",
    "url": "https://keycloak.example.com",
    "realm": "example-realm"
  }
}
```

### boost

Boost offered by Digipair secured by Keycloak.

#### Parameters

| Name     | Type    | Required | Description                                |
|----------|---------|----------|--------------------------------------------|
| boosts   | array   | Yes      | List of boost triggers                     |
| execute  | array   | No       | List of actions to execute                 |
| secured  | string  | No       | Access allowed only if a Keycloak token is provided |
| url      | string  | No       | Address of the Keycloak server             |
| realm    | string  | No       | Realm of the Keycloak server               |

#### Example

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "boost",
  "properties": {
    "boosts": [
      {
        "name": "boost1",
        "prompt": true,
        "required": true,
        "text": "Boost text",
        "selector": "#selector",
        "url": "https://example.com",
        "inputs": ["input1", "input2"]
      }
    ],
    "execute": ["action1", "action2"],
    "secured": "token-keycloak",
    "url": "https://keycloak.example.com",
    "realm": "example-realm"
  }
}
```

## Notes

- The functions `executeFactory`, `login`, `logout`, `page`, `service`, and `boost` are used to manage interactions with a website secured by Keycloak.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.