# @digipair/skill-web-editor

**Version:** 0.1.0  
**Summary:** Display of the reasoning editor  
**Description:** Editing of AI reasonings.  
**Icon:** 🏗

## Table of Contents

- [Functions](#functions)
  - [digipairEditor](#digipaireditor)

## Functions

### digipairEditor

No-code editor for AI reasonings

#### Parameters

| Name                 | Type   | Required | Description                              |
|----------------------|--------|----------|------------------------------------------|
| digipair             | object | Yes      | Information about the digipair owning the reasoning |
| reasoning            | object | Yes      | Information about the reasoning to edit  |
| schemas              | object | Yes      | List of schemas for private skills      |
| menuColor            | string | No       | Text color of the menu                   |
| menuBackgroundColor  | string | No       | Background color of the menu              |
| contentStyle         | string | No       | Custom style for the container            |

#### Example

```json
{
  "library": "@digipair/skill-web-editor",
  "element": "digipairEditor",
  "properties": {
    "digipair": {
      "id": "12345",
      "name": "Example Digipair"
    },
    "reasoning": {
      "id": "67890",
      "description": "Example Reasoning"
    },
    "schemas": {
      "schema1": {
        "type": "object",
        "properties": {
          "property1": {
            "type": "string"
          }
        }
      }
    },
    "menuColor": "#FFFFFF",
    "menuBackgroundColor": "#000000",
    "contentStyle": "padding: 10px; border: 1px solid #ccc;"
  }
}
```

## Notes

- The `digipairEditor` function is used to display a no-code editor that allows manipulation of AI reasonings.
- The parameters `menuColor`, `menuBackgroundColor`, and `contentStyle` are optional and allow customization of the editor's appearance.
- Ensure to provide valid objects for the `digipair`, `reasoning`, and `schemas` parameters.