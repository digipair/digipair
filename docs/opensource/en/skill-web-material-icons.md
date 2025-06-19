# @digipair/skill-web-material-icons

**Version:** 0.1.0  
**Summary:** Display of Material icons  
**Description:** Display of Material icons.  
**Icon:** 🎨

## Table of Contents

- [Functions](#functions)
  - [digipairMaterialIconsIcon](#digipairmaterialiconsicon)

---

## Functions

### digipairMaterialIconsIcon

Displays a Google Material icon.

#### Parameters

| Name      | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| name      | string | Yes      | Name of the Material icon to display |
| iconStyle | object | No       | Custom style for the icon            |
| slot      | string | No       | Placement of the icon                |

#### Example

```json
{
  "library": "@digipair/skill-web-material-icons",
  "element": "digipairMaterialIconsIcon",
  "properties": {
    "name": "home",
    "iconStyle": {
      "color": "red",
      "fontSize": "32px"
    },
    "slot": "start"
  }
}
```

#### Detailed Description

The `digipairMaterialIconsIcon` function allows you to display an icon from the Google Material Icons library.

- The `name` parameter is required and corresponds to the name of the icon to display (for example: `"home"`, `"search"`, `"settings"`).
- The optional `iconStyle` parameter allows you to customize the CSS style of the icon (for example: color, size, etc.).
- The optional `slot` parameter allows you to define the placement of the icon within a layout structure (for example: `"start"`, `"end"`).

---

## Notes

- Make sure that the icon name (`name`) matches an existing icon in the Google Material Icons library.
- The `iconStyle` parameter must be an object that conforms to the CSS properties applicable to an icon.
- This function is designed to be used in web environments where displaying Material icons is required.
