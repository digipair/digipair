# @digipair/skill-html

**Version:** 0.1.0  
**Summary:** HTML Code Management  
**Description:** This skill allows you to manage HTML code.  
**Icon:** 🌐

## Table of Contents

- [Functions](#functions)
  - [html2pins](#html2pins)
  - [pins2html](#pins2html)
  - [parseHtml](#parsehtml)

---

## Functions

### html2pins

Converts HTML code into "Pins".

#### Parameters

| Name    | Type   | Required | Description                    |
| ------- | ------ | -------- | ------------------------------ |
| html    | string | Yes      | HTML code to convert           |
| library | string | No       | Pins library to use (optional) |

#### Example

```json
{
  "library": "@digipair/skill-html",
  "element": "html2pins",
  "properties": {
    "html": "<div>Hello World</div>",
    "library": "defaultPinsLibrary"
  }
}
```

---

### pins2html

Converts a list of "Pins" into HTML code.

#### Parameters

| Name | Type   | Required | Description                     |
| ---- | ------ | -------- | ------------------------------- |
| pins | string | Yes      | List of Pins to convert to HTML |

#### Example

```json
{
  "library": "@digipair/skill-html",
  "element": "pins2html",
  "properties": {
    "pins": "[{\"type\":\"text\",\"value\":\"Hello\"}]"
  }
}
```

---

### parseHtml

Parses HTML code and executes a list of actions.

#### Parameters

| Name    | Type   | Required | Description                                         |
| ------- | ------ | -------- | --------------------------------------------------- |
| html    | string | Yes      | HTML code to parse                                  |
| execute | array  | Yes      | List of actions to execute (in pinsSettings format) |

#### Example

```json
{
  "library": "@digipair/skill-html",
  "element": "parseHtml",
  "properties": {
    "html": "<div>Test</div>",
    "execute": [
      {
        "action": "extractText",
        "selector": "div"
      }
    ]
  }
}
```

---

## Notes

- The functions in this library allow you to convert HTML to a "Pins" data structure and vice versa, as well as analyze HTML according to custom actions.
- The `execute` parameter of the `parseHtml` function must comply with the `pinsSettings` schema (see the reference documentation for the exact format).
- Make sure to provide valid HTML code for the `html2pins` and `parseHtml` functions.
- The Pins library (`library`) parameter is optional in `html2pins` and allows you to specify a custom library for the conversion.

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT
