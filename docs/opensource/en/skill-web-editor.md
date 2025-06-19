# @digipair/skill-web-editor

**Version:** 0.1.0  
**Summary:** Reasoning editor display  
**Description:** Editing of AI reasonings.  
**Icon:** 🏗

## Table of Contents

- [Functions](#functions)
  - [digipairEditor](#digipaireditor)

---

## Functions

### digipairEditor

No-code editor for AI reasonings.

Allows you to display and edit an AI reasoning through a visual no-code editor. This function is designed to embed a reasoning editor into a web application, with various customization options.

#### Parameters

| Name                | Type   | Required | Description                     |
| ------------------- | ------ | -------- | ------------------------------- |
| id                  | string | No       | ID of the element to edit.      |
| reasoning           | object | Yes      | Reasoning information to edit.  |
| schemas             | object | No       | List of skill schemas.          |
| menuColor           | string | No       | Menu text color.                |
| menuBackgroundColor | string | No       | Menu background color.          |
| contentStyle        | string | No       | Custom style for the container. |
| language            | string | No       | Editor language.                |

#### Usage Example

```js
import { digipairEditor } from '@digipair/skill-web-editor';

digipairEditor({
  id: 'editor-1',
  reasoning: {
    // ...structure of the reasoning to edit
  },
  schemas: {
    // ...optional skill schemas
  },
  menuColor: '#333333',
  menuBackgroundColor: '#f5f5f5',
  contentStyle: 'padding: 20px; border-radius: 8px;',
  language: 'fr',
});
```

#### JSON Configuration Example

```json
{
  "library": "@digipair/skill-web-editor",
  "element": "digipairEditor",
  "properties": {
    "id": "editor-1",
    "reasoning": {
      "name": "Example Reasoning",
      "steps": []
    },
    "schemas": {
      "skillA": { "type": "object", "properties": {} }
    },
    "menuColor": "#333333",
    "menuBackgroundColor": "#f5f5f5",
    "contentStyle": "padding: 20px; border-radius: 8px;",
    "language": "fr"
  }
}
```

#### Notes

- The `reasoning` parameter is required and must contain the structure of the reasoning to be edited.
- Customization parameters (`menuColor`, `menuBackgroundColor`, `contentStyle`, `language`) are optional and allow you to adapt the editor to your application's interface.
- `schemas` allows you to provide skill schemas to enhance the editing experience.
- This function does not perform any HTTP requests; it is used as a standard JavaScript function.

---

## General Notes

- The `digipairEditor` function is the main entry point of the library for integrating an AI reasoning editor into a web application.
- Make sure to provide a valid `reasoning` object to ensure the editor works correctly.
- For advanced customization, use the style and language parameters as needed.
