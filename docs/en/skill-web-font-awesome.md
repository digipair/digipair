# @digipair/skill-web-font-awesome

**Version:** 0.1.0  
**Summary:** Displaying Font Awesome icons  
**Description:** Displaying Font Awesome icons.  
**Icon:** 🎨

## Table of Contents

- [Functions](#functions)
  - [digipairFontAwesomeIcon](#digipairfontawesomeicon)

## Functions

### digipairFontAwesomeIcon

Font Awesome icon

#### Description

This function allows you to display a Font Awesome icon.

#### Parameters

| Name      | Type   | Required | Description                      |
|-----------|--------|----------|----------------------------------|
| name      | string | Yes      | Name of the icon                 |
| category   | object | No       | Custom style for the icon        |
| slot      | string | No       | Location of the icon             |

#### Example

```json
{
  "library": "@digipair/skill-web-font-awesome",
  "element": "digipairFontAwesomeIcon",
  "properties": {
    "name": "fa-solid fa-star",
    "category": {
      "style": "solid",
      "size": "2x"
    },
    "slot": "icon-slot"
  }
}
```

## Notes

- The `digipairFontAwesomeIcon` function is used to display a specific Font Awesome icon.
- Make sure to provide a valid icon name for the `name` parameter.
- The `category` parameter is optional and can be used to customize the style of the icon.
- The `slot` parameter is optional and can be used to specify the location of the icon.