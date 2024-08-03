# @digipair/skill-canvas

**Version:** 0.1.0  
**Summary:** Drawing manipulation  
**Description:** This skill allows users to manipulate a canvas to draw graphic elements, load images, and perform various drawing operations.  
**Icon:** 🎨

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

## Functions

### canvas

Create a canvas

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| width     | number | Yes      | Width of the canvas |
| height    | number | Yes      | Height of the canvas |
| execute   | array  | Yes      | List of actions to execute on the canvas |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "canvas",
  "properties": {
    "width": 800,
    "height": 600,
    "execute": [
      // List of actions to execute
    ]
  }
}
```

### loadImage

Load an image

#### Parameters

| Name    | Type   | Required | Description |
|---------|--------|----------|-------------|
| image   | string | Yes      | Base64 image |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "loadImage",
  "properties": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
  }
}
```

### drawImage

Draw an image

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| image     | string | Yes      | Image to draw |
| x         | number | Yes      | X coordinate to draw the image |
| y         | number | Yes      | Y coordinate to draw the image |
| width     | number | Yes      | Width of the image to draw |
| height    | number | Yes      | Height of the image to draw |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "drawImage",
  "properties": {
    "image": "[Image loaded with the loadImage function]",
    "x": 100,
    "y": 150,
    "width": 200,
    "height": 100
  }
}
```

### strokeRect

Draw a rectangle

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| x         | number | Yes      | X coordinate of the rectangle |
| y         | number | Yes      | Y coordinate of the rectangle |
| width     | number | Yes      | Width of the rectangle |
| height    | number | Yes      | Height of the rectangle |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "strokeRect",
  "properties": {
    "x": 50,
    "y": 50,
    "width": 200,
    "height": 100
  }
}
```

### fillRect

Draw a filled rectangle

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| x         | number | Yes      | X coordinate of the rectangle |
| y         | number | Yes      | Y coordinate of the rectangle |
| width     | number | Yes      | Width of the rectangle |
| height    | number | Yes      | Height of the rectangle |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillRect",
  "properties": {
    "x": 50,
    "y": 50,
    "width": 200,
    "height": 100
  }
}
```

### fillText

Write text

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| text      | string | Yes      | Text to draw |
| x         | number | Yes      | X coordinate of the text |
| y         | number | Yes      | Y coordinate of the text |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillText",
  "properties": {
    "text": "Hello, world!",
    "x": 100,
    "y": 150
  }
}
```

### strokeStyle

Set the stroke style

#### Parameters

| Name    | Type   | Required | Description |
|---------|--------|----------|-------------|
| style   | string | Yes      | Stroke style |

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

### fillStyle

Set the fill style

#### Parameters

| Name    | Type   | Required | Description |
|---------|--------|----------|-------------|
| style   | string | Yes      | Fill style |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillStyle",
  "properties": {
    "style": "#00FF00"
  }
}
```

### lineWidth

Set the line width

#### Parameters

| Name    | Type   | Required | Description |
|---------|--------|----------|-------------|
| width   | number | Yes      | Line width |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "lineWidth",
  "properties": {
    "width": 5
  }
}
```

### measureText

Measure text

#### Parameters

| Name    | Type   | Required | Description |
|---------|--------|----------|-------------|
| text    | string | Yes      | Text to measure |

#### Example

```json
{
  "library": "@digipair/skill-canvas",
  "element": "measureText",
  "properties": {
    "text": "Hello, world!"
  }
}
```

## Notes

- Each function allows interaction with the canvas to create drawings, load images, and manipulate drawing styles.
- Ensure to provide valid values for each parameter to achieve the desired results.