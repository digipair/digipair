# @digipair/skill-qrcode

**Version:** 0.1.0  
**Summary:** QRCode manipulation  
**Description:** This skill allows you to read and generate QR codes.  
**Icon:** 🌐

## Table of Contents

- [Functions](#functions)
  - [encode](#encode)
  - [decode](#decode)

---

## Functions

### encode

Generates a QR code from a string.

#### Parameters

| Name | Type   | Required | Description    |
| ---- | ------ | -------- | -------------- |
| data | string | Yes      | Data to encode |

#### Example

```json
{
  "library": "@digipair/skill-qrcode",
  "element": "encode",
  "properties": {
    "data": "https://digipair.com"
  }
}
```

#### Expected Result

Returns a base64-encoded image of the QR code.

---

### decode

Decodes a QR code from a base64-encoded image.

#### Parameters

| Name  | Type   | Required | Description                      |
| ----- | ------ | -------- | -------------------------------- |
| image | string | Yes      | QR code image (base64) to decode |

#### Example

```json
{
  "library": "@digipair/skill-qrcode",
  "element": "decode",
  "properties": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }
}
```

#### Expected Result

Returns the string decoded from the QR code.

---

## Notes

- The `encode` function allows you to transform any string into a QR code, which can be used for sharing URLs, text, etc.
- The `decode` function allows you to extract the data contained in a QR code from a base64-encoded image.
- Make sure that the image provided to the `decode` function is a valid QR code and is correctly base64-encoded.
- These functions are intended to be used in JavaScript environments and are not HTTP endpoints, but rather function calls from the library.

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT
