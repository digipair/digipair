# @digipair/skill-webcam

**Version:** 0.1.0  
**Summary:** Webcam Management  
**Description:** This skill allows access to webcam images.  
**Icon:** 📷

## Table of Contents

- [Functions](#functions)
  - [capture](#capture)
  - [list](#list)

## Functions

### capture

Captures an image from the webcam.

#### Parameters

| Name     | Type     | Required | Description                                                                 |
|----------|----------|----------|-----------------------------------------------------------------------------|
| width    | number   | No       | Width of the image.                                                         |
| height   | number   | No       | Height of the image.                                                        |
| quality  | number   | No       | Quality of the image (value between 1 and 100).                             |
| output   | string   | No       | Output format of the image (jpeg, png).                                    |
| device   | string   | No       | Name of the camera to use.                                                  |
| verbose  | boolean  | No       | Displays additional information during capture.                             |

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
    "device": "Desktop Webcam",
    "verbose": true
  }
}
```

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

## Notes

- The `capture` function allows taking a photo from the webcam with customizable options for size, quality, and image format.
- The `list` function provides a list of available webcams on the system, which can be useful for selecting a specific camera to use with the `capture` function.
- Ensure that the webcam is properly connected and accessible before using these functions.