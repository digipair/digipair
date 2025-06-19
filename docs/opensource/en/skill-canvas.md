# @digipair/skill-canvas

**Version:** 0.1.0  
**Summary:** Drawing manipulation  
**Description:** This skill allows users to manipulate a canvas to draw graphic elements, load images, and perform various drawing operations.  
**Icon:** 🎨

---

## Table of Contents

- [Functions](#functions)
  - [canvas](#canvas)
  - [loadImage](#loadimage)
  - [drawImage](#drawimage)
  - [strokeRect](#strokerect)
  - [fillRect](#fillrect)
  - [fillText](#filltext)
  - [strokeStyle](#strokestyle)
  - [fillStyle](#fillstyle)
  - [lineWidth](#linewidth)
  - [measureText](#measuretext)

---

## Functions

### canvas

Create a canvas and execute drawing actions.

#### Parameters

| Name    | Type   | Required | Description                              |
| ------- | ------ | -------- | ---------------------------------------- |
| width   | number | Yes      | Width of the canvas                      |
| height  | number | Yes      | Height of the canvas                     |
| execute | array  | Yes      | List of actions to execute on the canvas |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "canvas",
  "properties": {
    "width": 800,
    "height": 600,
    "execute": [
      { "element": "fillRect", "properties": { "x": 10, "y": 10, "width": 100, "height": 50 } }
    ]
  }
}
```

---

### loadImage

Load an image from a base64 string.

#### Parameters

| Name  | Type   | Required | Description            |
| ----- | ------ | -------- | ---------------------- |
| image | string | Yes      | Image in base64 format |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "loadImage",
  "properties": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }
}
```

---

### drawImage

Draw an image on the canvas at the specified coordinates.

#### Parameters

| Name   | Type   | Required | Description                  |
| ------ | ------ | -------- | ---------------------------- |
| image  | string | Yes      | Image to draw (base64 or id) |
| x      | number | Yes      | X coordinate                 |
| y      | number | Yes      | Y coordinate                 |
| width  | number | Yes      | Width of the image to draw   |
| height | number | Yes      | Height of the image to draw  |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "drawImage",
  "properties": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "x": 50,
    "y": 100,
    "width": 200,
    "height": 150
  }
}
```

---

### strokeRect

Draw the outline of a rectangle at the specified coordinates.

#### Parameters

| Name   | Type   | Required | Description                   |
| ------ | ------ | -------- | ----------------------------- |
| x      | number | Yes      | X coordinate of the rectangle |
| y      | number | Yes      | Y coordinate of the rectangle |
| width  | number | Yes      | Width of the rectangle        |
| height | number | Yes      | Height of the rectangle       |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "strokeRect",
  "properties": {
    "x": 20,
    "y": 30,
    "width": 120,
    "height": 80
  }
}
```

---

### fillRect

Draw a filled rectangle at the specified coordinates.

#### Parameters

| Name   | Type   | Required | Description                   |
| ------ | ------ | -------- | ----------------------------- |
| x      | number | Yes      | X coordinate of the rectangle |
| y      | number | Yes      | Y coordinate of the rectangle |
| width  | number | Yes      | Width of the rectangle        |
| height | number | Yes      | Height of the rectangle       |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillRect",
  "properties": {
    "x": 40,
    "y": 60,
    "width": 200,
    "height": 100
  }
}
```

---

### fillText

Write text at the specified coordinates.

#### Parameters

| Name | Type   | Required | Description              |
| ---- | ------ | -------- | ------------------------ |
| text | string | Yes      | Text to draw             |
| x    | number | Yes      | X coordinate of the text |
| y    | number | Yes      | Y coordinate of the text |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillText",
  "properties": {
    "text": "Hello, Canvas!",
    "x": 100,
    "y": 200
  }
}
```

---

### strokeStyle

Set the stroke style used for drawing.

#### Parameters

| Name  | Type   | Required | Description  |
| ----- | ------ | -------- | ------------ |
| style | string | Yes      | Stroke style |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "strokeStyle",
  "properties": {
    "style": "#FF0000"
  }
}
```

---

### fillStyle

Set the fill style used for drawing.

#### Parameters

| Name  | Type   | Required | Description |
| ----- | ------ | -------- | ----------- |
| style | string | Yes      | Fill style  |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillStyle",
  "properties": {
    "style": "rgba(0,255,0,0.5)"
  }
}
```

---

### lineWidth

Set the line width used for drawing.

#### Parameters

| Name  | Type   | Required | Description |
| ----- | ------ | -------- | ----------- |
| style | number | Yes      | Line width  |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "lineWidth",
  "properties": {
    "style": 5
  }
}
```

---

### measureText

Measure the specified text and return its metrics.

#### Parameters

| Name | Type   | Required | Description     |
| ---- | ------ | -------- | --------------- |
| text | string | Yes      | Text to measure |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "measureText",
  "properties": {
    "text": "Sample text"
  }
}
```

---

## Notes

- All functions are designed to be used in a JavaScript canvas manipulation context.
- The parameters `x`, `y`, `width`, and `height` are expressed in pixels.
- Styles (`strokeStyle`, `fillStyle`) accept standard CSS formats (hexadecimal, rgb, rgba, etc.).
- For complex actions, use the `canvas` function with a list of actions in the `execute` parameter.
- The image can be a base64 string or an image identifier previously loaded via `loadImage`.
