# @digipair/skill-sharp

**Version:** 0.1.0  
**Summary:** Advanced image processing  
**Description:** This skill provides advanced image processing functions based on the Sharp library.  
**Icon:** 🖼️

## Table of Contents

- [Functions](#functions)
  - [metadata](#metadata)
  - [stats](#stats)
  - [raw](#raw)
  - [resize](#resize)
  - [rotate](#rotate)
  - [extract](#extract)
  - [flip](#flip)
  - [flop](#flop)
  - [grayscale](#grayscale)
  - [negate](#negate)
  - [tint](#tint)
  - [modulate](#modulate)
  - [blur](#blur)
  - [sharpen](#sharpen)
  - [toFormat](#toformat)
  - [jpeg](#jpeg)
  - [png](#png)
  - [webp](#webp)
  - [avif](#avif)
  - [composite](#composite)

---

## Functions

### metadata

Returns the image metadata (dimensions, format, EXIF, etc.).

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "metadata",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### stats

Returns statistics about the image (mean, standard deviation, etc.).

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "stats",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### raw

Returns the raw image buffer as a base64 string.

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "raw",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### resize

Resizes the image.

#### Parameters

| Name    | Type    | Required | Description                     |
| ------- | ------- | -------- | ------------------------------- |
| content | string  | Yes      | Image content encoded in base64 |
| width   | integer | Yes      | Target width in pixels          |
| height  | integer | Yes      | Target height in pixels         |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "resize",
  "properties": {
    "content": "<base64_image>",
    "width": 200,
    "height": 100
  }
}
```

---

### rotate

Rotates the image (optional angle).

#### Parameters

| Name    | Type    | Required | Description                          |
| ------- | ------- | -------- | ------------------------------------ |
| content | string  | Yes      | Image content encoded in base64      |
| angle   | integer | No       | Rotation angle in degrees (e.g., 90) |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "rotate",
  "properties": {
    "content": "<base64_image>",
    "angle": 90
  }
}
```

---

### extract

Extracts a region from the image.

#### Parameters

| Name    | Type    | Required | Description                                |
| ------- | ------- | -------- | ------------------------------------------ |
| content | string  | Yes      | Image content encoded in base64            |
| left    | integer | Yes      | Horizontal position of the top-left corner |
| top     | integer | Yes      | Vertical position of the top-left corner   |
| width   | integer | Yes      | Width of the region to extract             |
| height  | integer | Yes      | Height of the region to extract            |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "extract",
  "properties": {
    "content": "<base64_image>",
    "left": 10,
    "top": 20,
    "width": 100,
    "height": 50
  }
}
```

---

### flip

Flips the image vertically.

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "flip",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### flop

Flips the image horizontally.

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "flop",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### grayscale

Converts the image to grayscale.

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "grayscale",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### negate

Inverts the image colors.

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "negate",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### tint

Applies a color tint to the image.

#### Parameters

| Name    | Type    | Required | Description                     |
| ------- | ------- | -------- | ------------------------------- |
| content | string  | Yes      | Image content encoded in base64 |
| r       | integer | Yes      | Red value (0-255)               |
| g       | integer | Yes      | Green value (0-255)             |
| b       | integer | Yes      | Blue value (0-255)              |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "tint",
  "properties": {
    "content": "<base64_image>",
    "r": 255,
    "g": 0,
    "b": 0
  }
}
```

---

### modulate

Adjusts brightness, saturation, and hue.

#### Parameters

| Name       | Type   | Required | Description                     |
| ---------- | ------ | -------- | ------------------------------- |
| content    | string | Yes      | Image content encoded in base64 |
| brightness | number | No       | Brightness factor (e.g., 1.2)   |
| saturation | number | No       | Saturation factor (e.g., 0.8)   |
| hue        | number | No       | Hue shift (in degrees)          |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "modulate",
  "properties": {
    "content": "<base64_image>",
    "brightness": 1.1,
    "saturation": 0.9,
    "hue": 90
  }
}
```

---

### blur

Applies a blur effect.

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |
| radius  | number | No       | Blur radius (e.g., 2.5)         |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "blur",
  "properties": {
    "content": "<base64_image>",
    "radius": 2.5
  }
}
```

---

### sharpen

Sharpens the image.

#### Parameters

| Name    | Type   | Required | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| content | string | Yes      | Image content encoded in base64 |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "sharpen",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### toFormat

Converts the image to another format.

#### Parameters

| Name    | Type   | Required | Description                                  |
| ------- | ------ | -------- | -------------------------------------------- |
| content | string | Yes      | Image content encoded in base64              |
| format  | string | Yes      | Target format: `jpeg`, `png`, `webp`, `avif` |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "toFormat",
  "properties": {
    "content": "<base64_image>",
    "format": "webp"
  }
}
```

---

### jpeg

Exports the image in JPEG format.

#### Parameters

| Name    | Type    | Required | Description                       |
| ------- | ------- | -------- | --------------------------------- |
| content | string  | Yes      | Image content encoded in base64   |
| quality | integer | No       | JPEG quality (0-100, default: 80) |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "jpeg",
  "properties": {
    "content": "<base64_image>",
    "quality": 90
  }
}
```

---

### png

Exports the image in PNG format.

#### Parameters

| Name             | Type    | Required | Description                         |
| ---------------- | ------- | -------- | ----------------------------------- |
| content          | string  | Yes      | Image content encoded in base64     |
| compressionLevel | integer | No       | Compression level (0-9, default: 6) |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "png",
  "properties": {
    "content": "<base64_image>",
    "compressionLevel": 9
  }
}
```

---

### webp

Exports the image in WebP format.

#### Parameters

| Name    | Type    | Required | Description                       |
| ------- | ------- | -------- | --------------------------------- |
| content | string  | Yes      | Image content encoded in base64   |
| quality | integer | No       | WebP quality (0-100, default: 80) |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "webp",
  "properties": {
    "content": "<base64_image>",
    "quality": 75
  }
}
```

---

### avif

Exports the image in AVIF format.

#### Parameters

| Name    | Type    | Required | Description                       |
| ------- | ------- | -------- | --------------------------------- |
| content | string  | Yes      | Image content encoded in base64   |
| quality | integer | No       | AVIF quality (0-100, default: 50) |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "avif",
  "properties": {
    "content": "<base64_image>",
    "quality": 60
  }
}
```

---

### composite

Overlays other images (e.g., watermark).

#### Parameters

| Name     | Type   | Required | Description                                                                                                       |
| -------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| content  | string | Yes      | Base image content encoded in base64                                                                              |
| overlays | array  | Yes      | Array of objects `{ input, top, left }` where `input` is a base64 image, `top` and `left` are overlay coordinates |

#### Example

```json
{
  "library": "@digipair/skill-sharp",
  "element": "composite",
  "properties": {
    "content": "<base64_image>",
    "overlays": [
      {
        "input": "<base64_overlay>",
        "top": 10,
        "left": 20
      }
    ]
  }
}
```

---

## Notes

- All functions expect the image content as a base64 string in the `content` parameter.
- Conversion/export functions (`toFormat`, `jpeg`, `png`, `webp`, `avif`) return the image in the requested format, encoded in base64.
- For functions with optional parameters, default values are used if the parameter is not provided.
- The `composite` function allows overlaying multiple images on the base image, useful for watermarks or compositions.
- Ensure that base64 images are valid and properly encoded to avoid processing errors.
