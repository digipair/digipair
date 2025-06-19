# @digipair/skill-web

**Version:** 0.1.0  
**Summary:** Web page display  
**Description:** This skill encompasses the knowledge and use of web technologies required to develop and maintain websites.  
**Icon:** 🌐

## Table of Contents

- [Functions](#functions)
  - [executeFactory](#executefactory)
  - [page](#page)

---

## Functions

### executeFactory

Executes a list of capabilities within the factory.

#### Description

Allows you to execute a list of capabilities in the context of the factory. Each capability must follow the `pinsSettings` schema.

#### Parameters

| Name    | Type  | Required | Description                                                                       |
| ------- | ----- | -------- | --------------------------------------------------------------------------------- |
| execute | array | Yes      | List of capabilities to execute. Each item must follow the `pinsSettings` schema. |

#### Example

```json
{
  "library": "@digipair/skill-web",
  "element": "executeFactory",
  "properties": {
    "execute": [
      {
        // pinsSettings object
      },
      {
        // pinsSettings object
      }
    ]
  }
}
```

---

### page

Displays a web page.

#### Description

Allows you to display a web page by defining its content, header, styles, and actions at different points in the page lifecycle (initialization, loading, etc.).

#### Parameters

| Name                | Type    | Required | Description                                                            |
| ------------------- | ------- | -------- | ---------------------------------------------------------------------- |
| body                | array   | Yes      | Page content. Each item must follow the `pinsSettings` schema.         |
| head                | array   | No       | Page header. Each item must follow the `pinsSettings` schema.          |
| ssr                 | boolean | No       | Enables server-side rendering (SSR).                                   |
| styleHtml           | string  | No       | CSS style applied to the root HTML element.                            |
| styleBody           | string  | No       | CSS style applied to the BODY element.                                 |
| factoryInitialize   | array   | No       | Actions triggered during factory initialization (`pinsSettings`).      |
| browserInitialize   | array   | No       | Actions triggered during browser initialization (`pinsSettings`).      |
| browserLoad         | array   | No       | Actions triggered when the page loads in the browser (`pinsSettings`). |
| confirmBeforeUnload | string  | No       | Confirmation message displayed before leaving the page.                |

#### Example

```json
{
  "library": "@digipair/skill-web",
  "element": "page",
  "properties": {
    "body": [
      {
        // pinsSettings object for main content
      }
    ],
    "head": [
      {
        // pinsSettings object for the header
      }
    ],
    "ssr": true,
    "styleHtml": "background: #fff;",
    "styleBody": "margin: 0; padding: 0;",
    "factoryInitialize": [
      {
        // Action on factory initialization
      }
    ],
    "browserInitialize": [
      {
        // Action on browser initialization
      }
    ],
    "browserLoad": [
      {
        // Action on page load
      }
    ],
    "confirmBeforeUnload": "Are you sure you want to leave this page?"
  }
}
```

---

## Notes

- The `pinsSettings` schema must be followed for all objects expected in parameter arrays.
- The `executeFactory` function is mainly used to orchestrate capabilities within a factory context, while the `page` function allows you to define the display and behavior of a complete web page.
- Optional parameters allow you to customize the rendering, style, and actions of the page at different points in its lifecycle.
- Use `confirmBeforeUnload` to protect users from data loss when closing or reloading the page.

---

**For any contributions or questions, please refer to the official documentation or open an issue on the project's GitHub repository.**
