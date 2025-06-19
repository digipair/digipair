# @digipair/skill-exif

**Version:** 0.1.0  
**Summary:** EXIF extraction  
**Description:** This skill allows you to analyze and extract EXIF metadata from images.  
**Icon:** 🖼️

## Table of Contents

- [Functions](#functions)
  - [parse](#parse)

---

## Functions

### parse

Analyzes EXIF data from the content of an image.

#### Description

The `parse` function extracts EXIF metadata from an image provided as a base64-encoded string or binary string. It returns the extracted EXIF information, such as the capture date, camera model, GPS coordinates, and more.

#### Parameters

| Name    | Type   | Required | Description                                                |
| ------- | ------ | -------- | ---------------------------------------------------------- |
| content | string | Yes      | Image content as a base64-encoded string or binary string. |

#### Example

```json
{
  "library": "@digipair/skill-exif",
  "element": "parse",
  "properties": {
    "content": "/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64 string of the image
  }
}
```

#### Example Result

```json
{
  "Make": "Canon",
  "Model": "Canon EOS 80D",
  "DateTimeOriginal": "2023:06:15 14:23:11",
  "GPSLatitude": 48.858844,
  "GPSLongitude": 2.294351,
  "Orientation": 1
  // ... other EXIF fields
}
```

---

## Notes

- The `parse` function only supports images whose content is provided as a base64 or binary string.
- The extracted metadata depends on the information present in the source image.
- This skill is useful for automated photo analysis, image catalog management, or extraction of shooting data.

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT
