# @digipair/skill-tensorflow

**Version:** 0.1.0  
**Summary:** Deep Learning Analysis  
**Description:** This skill enables data analysis using Deep Learning.  
**Icon:** 🤖

## Table of Contents

- [Functions](#functions)
  - [cocoSsd](#cocossd)
  - [faceDetection](#facedetection)

---

## Functions

### cocoSsd

Detects objects in an image using a COCO-SSD model.

#### Description

The `cocoSsd` function automatically detects objects present in an image. It uses a COCO-SSD model, with the option to specify which model variant to use.

#### Parameters

| Name  | Type   | Required | Description                                                                           |
| ----- | ------ | -------- | ------------------------------------------------------------------------------------- |
| image | string | Yes      | Image to analyze (local path, base64, or URL depending on the library implementation) |
| base  | string | No       | Base model to use: `mobilenet_v1`, `mobilenet_v2`, or `lite_mobilenet_v2` (optional)  |

#### Example

```json
{
  "library": "@digipair/skill-tensorflow",
  "element": "cocoSsd",
  "properties": {
    "image": "path/to/image.jpg",
    "base": "mobilenet_v2"
  }
}
```

---

### faceDetection

Detects faces present in an image.

#### Description

The `faceDetection` function detects faces in an image. It allows you to choose the runtime environment for the detection model.

#### Parameters

| Name    | Type   | Required | Description                                                                              |
| ------- | ------ | -------- | ---------------------------------------------------------------------------------------- |
| image   | string | Yes      | Image to analyze (local path, base64, or URL depending on the library implementation)    |
| runtime | string | No       | Runtime environment: `mediapipe` or `tfjs` (optional, defaults according to the library) |

#### Example

```json
{
  "library": "@digipair/skill-tensorflow",
  "element": "faceDetection",
  "properties": {
    "image": "path/to/image.jpg",
    "runtime": "mediapipe"
  }
}
```

---

## Notes

- The `cocoSsd` and `faceDetection` functions are designed for image analysis using Deep Learning models.
- The `image` parameter must be provided in a format accepted by the library (local path, base64, or URL).
- The `base` parameter for `cocoSsd` and the `runtime` parameter for `faceDetection` are optional and allow you to refine the choice of model or runtime environment.
- Make sure that all necessary dependencies (TensorFlow.js, MediaPipe, etc.) are installed and configured in your environment.

---

**For any contributions or questions, please refer to the GitHub repository associated with the library.**
