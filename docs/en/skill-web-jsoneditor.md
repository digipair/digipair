# @digipair/skill-web-jsoneditor

**Version:** 0.1.0  
**Summary:** JSON Editor  
**Description:** This skill allows displaying a JSON editor on a web page. The user can modify the JSON content and retrieve the modified content.  
**Icon:** 📐

## Table of Contents

- [Functions](#functions)
  - [digipair-jsoneditor](#digipair-jsoneditor)

## Functions

### digipair-jsoneditor

JSON Editor

#### Parameters

| Name          | Type   | Required | Description                             |
|---------------|--------|----------|-----------------------------------------|
| json          | object | No       | JSON content to display in the editor   |
| contentStyle  | string | No       | Custom style for the container          |

#### Events

| Name    | Type   | Required | Description                                   |
|---------|--------|----------|-----------------------------------------------|
| change  | array  | No       | Action triggered when a change occurs in the editor |

#### Example

```json
{
  "library": "@digipair/skill-web-jsoneditor",
  "element": "digipair-jsoneditor",
  "properties": {
    "json": {
      "key": "value"
    },
    "contentStyle": "width: 100%; height: 400px;"
  },
  "events": {
    "change": [
      {
        "type": "update",
        "timestamp": "2023-10-01T12:00:00Z"
      }
    ]
  }
}
```

## Notes

- The `digipair-jsoneditor` function allows integrating a JSON editor into a web page.
- The `json` and `contentStyle` parameters are optional but can be used to customize the editor.
- The `change` event can be used to capture modifications made in the JSON editor.