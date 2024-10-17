# @digipair/skill-tensorflow

**Version:** 0.1.0  
**Summary:** Deep Learning Analysis  
**Description:** This skill allows users to analyze data using Deep Learning.  
**Icon:** 🤖

## Table of Contents

- [Functions](#functions)
  - [cocoSsd](#cocosd)
  - [faceDetection](#facedetection)

## Functions

### cocoSsd

Detects objects in an image.

#### Parameters

| Name   | Type   | Required | Description                     |
|--------|--------|----------|---------------------------------|
| image  | string | Yes      | Image to analyze                |

#### Example

```json
{
  "library": "@digipair/skill-tensorflow",
  "element": "cocoSsd",
  "properties": {
    "image": "data:image/jpeg;base64,..."
  }
}
```

### faceDetection

Detects faces in an image.

#### Parameters

| Name   | Type   | Required | Description                     |
|--------|--------|----------|---------------------------------|
| image  | string | Yes      | Image to analyze                |

#### Example

```json
{
  "library": "@digipair/skill-tensorflow",
  "element": "faceDetection",
  "properties": {
    "image": "data:image/jpeg;base64,..."
  }
}
```

## Notes

- The `cocoSsd` and `faceDetection` functions are used to detect objects and faces in a provided image, respectively.
- Make sure to provide a valid base64 formatted image for the `image` parameter.