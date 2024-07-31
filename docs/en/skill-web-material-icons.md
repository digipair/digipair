# @digipair/skill-web-material-icons

**Version:** 0.1.0  
**Summary:** Displaying material icons  
**Description:** Displaying material icons.  
**Icon:** 🎨

## Table of Contents

- [Functions](#functions)
  - [digipairMaterialIconsIcon](#digipairMaterialIconsIcon)

## Functions

### digipairMaterialIconsIcon

Display a Google Material icon

#### Parameters

| Name       | Type   | Required | Description                   |
|------------|--------|----------|-------------------------------|
| name       | string | Yes      | Name of the icon              |
| iconStyle  | object | No       | Custom style for the icon     |
| slot       | string | No       | Position of the icon          |

#### Example

```json
{
  "library": "@digipair/skill-web-material-icons",
  "element": "digipairMaterialIconsIcon",
  "properties": {
    "name": "home",
    "iconStyle": {
      "color": "blue",
      "fontSize": "24px"
    },
    "slot": "start"
  }
}
```

## Notes

- The `digipairMaterialIconsIcon` function is used to display a Google Material icon.
- The `name` parameter is mandatory and must correspond to the desired icon name.
- The `iconStyle` parameter is optional and allows customization of the icon's style using a CSS style object.
- The `slot` parameter is optional and allows specifying the position of the icon.