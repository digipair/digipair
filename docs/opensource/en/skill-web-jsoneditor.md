# @digipair/skill-web-jsoneditor

**Version:** 0.1.0  
**Summary:** JSON Editor  
**Description:** This skill displays a JSON editor on a web page. The user can modify the JSON content and retrieve the updated content.  
**Icon:** 📐

## Table of Contents

- [Functions](#functions)
  - [digipair-jsoneditor](#digipair-jsoneditor)
- [Events](#events)
  - [change](#change)
- [Notes](#notes)

---

## Functions

### digipair-jsoneditor

Displays an interactive JSON editor on the web page. Allows the user to view, edit, and retrieve a JSON object.

#### Parameters

| Name         | Type   | Required | Description                            |
| ------------ | ------ | -------- | -------------------------------------- |
| id           | string | No       | Identifier for the container element.  |
| json         | object | No       | JSON content to display in the editor. |
| contentStyle | string | No       | Custom CSS style for the container.    |

#### Usage Example

```json
{
  "library": "@digipair/skill-web-jsoneditor",
  "element": "digipair-jsoneditor",
  "properties": {
    "id": "json-editor-container",
    "json": {
      "name": "John Doe",
      "age": 30
    },
    "contentStyle": "width: 100%; height: 400px; border: 1px solid #ccc;"
  }
}
```

---

## Events

### change

Triggered when a modification is made in the JSON editor.

| Name   | Type  | Description                                              |
| ------ | ----- | -------------------------------------------------------- |
| change | array | Action(s) to execute when a change occurs in the editor. |

**Items schema:** [pinsSettings](https://schemas.digipair.ai/pinsSettings)

#### Example of Event Listener

```json
{
  "library": "@digipair/skill-web-jsoneditor",
  "element": "digipair-jsoneditor",
  "properties": {
    "json": { "foo": "bar" }
  },
  "events": {
    "change": [
      {
        "type": "log",
        "message": "The JSON content has been modified."
      }
    ]
  }
}
```

---

## Notes

- The JSON editor can be styled via the `contentStyle` property to fit your interface.
- The `change` event allows you to dynamically react to user modifications (saving, validation, etc.).
- If no parameters are provided, the editor will appear empty and use default styles.
- This library is ideal for quickly integrating a JSON editor into a web application or back office.

---

**For any contributions or questions, please refer to the official library repository.**
