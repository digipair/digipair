# @digipair/skill-web-font-awesome

**Version:** 0.1.0  
**Summary:** Display of Font Awesome icons  
**Description:** Display of Font Awesome icons.  
**Icon:** 🎨

## Table of Contents

- [Functions](#functions)
  - [digipairFontAwesomeIcon](#digipairfontawesomeicon)

---

## Functions

### digipairFontAwesomeIcon

Displays a Font Awesome icon.

#### Parameters

| Name     | Type   | Required | Description                                                     |
| -------- | ------ | -------- | --------------------------------------------------------------- |
| name     | string | Yes      | Name of the Font Awesome icon to display.                       |
| category | object | No       | Custom style for the icon (e.g., solid, regular, brands, etc.). |
| slot     | string | No       | Placement or display context for the icon.                      |

#### Example

```json
{
  "library": "@digipair/skill-web-font-awesome",
  "element": "digipairFontAwesomeIcon",
  "properties": {
    "name": "user",
    "category": { "style": "solid" },
    "slot": "header"
  }
}
```

#### Minimal usage

```json
{
  "library": "@digipair/skill-web-font-awesome",
  "element": "digipairFontAwesomeIcon",
  "properties": {
    "name": "check"
  }
}
```

---

## Notes

- The `name` parameter is required and must match a valid Font Awesome icon name (e.g., `"user"`, `"check"`, `"home"`).
- The `category` parameter allows you to specify the icon style (for example, `{ "style": "solid" }`). If not specified, the default style will be used.
- The `slot` parameter can be used to indicate where the icon should be displayed in the user interface.
- This function does not make any HTTP requests; it is intended to be used as a JavaScript function within your project.

---

## Best Practices

- Ensure that the icon name exists in the version of Font Awesome you are using.
- Use the `category` parameter to maintain consistent icon styles throughout your application.
- Use the `slot` parameter to organize icon display according to your interface needs.

---

## Integration Example

```js
import { digipairFontAwesomeIcon } from '@digipair/skill-web-font-awesome';

// Display a "user" icon with "solid" style in the header
digipairFontAwesomeIcon({
  name: 'user',
  category: { style: 'solid' },
  slot: 'header',
});
```

---

## License

This project is open source and distributed under the MIT license.
