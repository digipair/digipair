# @digipair/skill-webcam

**Version:** 0.1.0  
**Summary:** Webcam Management  
**Description:** This skill provides access to webcam images.  
**Icon:** 📷

## Table of Contents

- [Functions](#functions)
  - [capture](#capture)
  - [list](#list)

---

## Functions

### capture

Captures an image from the webcam.

#### Parameters

| Name    | Type    | Required | Description                                  |
| ------- | ------- | -------- | -------------------------------------------- |
| width   | number  | No       | Width of the captured image                  |
| height  | number  | No       | Height of the captured image                 |
| quality | number  | No       | Image quality (depends on the output format) |
| output  | string  | No       | Output image type (`jpeg`, `png`)            |
| device  | string  | No       | Name of the camera to use                    |
| verbose | boolean | No       | Displays additional information              |

#### Example

```json
{
  "library": "@digipair/skill-webcam",
  "element": "capture",
  "properties": {
    "width": 1280,
    "height": 720,
    "quality": 90,
    "output": "jpeg",
    "device": "USB Camera",
    "verbose": true
  }
}
```

---

### list

Returns the list of webcams available on the system.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-webcam",
  "element": "list",
  "properties": {}
}
```

---

## Notes

- The `capture` function allows you to customize image capture through several optional parameters (dimensions, quality, format, camera selection, etc.).
- The `list` function retrieves the list of webcams available on the system.
- Make sure the application has been granted permission to access the webcam before using these functions.
- The `output` parameter generally accepts the values `jpeg` or `png`, depending on library support.
- The `device` parameter can be used to select a specific camera if multiple are present.

---

**@digipair/skill-webcam** simplifies webcam management and access in your JavaScript applications.
