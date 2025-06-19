# @digipair/skill-pdf2pic

**Version:** 0.1.0  
**Summary:** PDF to image conversion  
**Description:** Convert PDF files to images  
**Icon:** 📕

## Table of Contents

- [Functions](#functions)
  - [convert](#convert)

---

## Functions

### convert

Converts a page from a PDF file into a base64-encoded image.

#### Description

The `convert` function allows you to convert a specific page (or the first page by default) of a PDF file into an image, encoded in base64. The output format, resolution (DPI), and page to convert can be customized.

#### Parameters

| Name    | Type   | Required | Description                                                                                |
| ------- | ------ | -------- | ------------------------------------------------------------------------------------------ |
| file    | string | Yes      | PDF file to convert (base64). |
| page    | number | No       | Page number to convert (usually starts at 1).                                              |
| format  | string | No       | Format of the generated image (e.g., `"png"`, `"jpeg"`).                                   |
| density | number | No       | Image resolution in DPI (dots per inch). Default: 72.                                      |

#### Usage Example

```js
const { convert } = require('@digipair/skill-pdf2pic');

// Example function call
const result = await convert({
  file: '/path/to/my-file.pdf',
  page: 2,
  format: 'jpeg',
  density: 150,
});

// result: 'data:image/jpeg;base64,...'
```

#### Example JSON Payload

```json
{
  "library": "@digipair/skill-pdf2pic",
  "element": "convert",
  "properties": {
    "file": "/path/to/my-file.pdf",
    "page": 1,
    "format": "png",
    "density": 96
  }
}
```

#### Return Value

base64-encoded image, typically in the following format:

```js
'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
```

#### Notes

- If the `page` parameter is not specified, the first page of the PDF will be converted.
- The `density` parameter allows you to adjust the quality of the generated image. A higher value results in better quality but increases the file size.
- The `format` parameter must be compatible with the formats supported by the library (e.g., `"png"`, `"jpeg"`).

---

## General Notes

- This library is designed to be used in Node.js environments.
- Ensure that the provided PDF file is accessible and readable by the Node.js process.
- For batch conversions or large files, monitor memory usage.

---

**@digipair/skill-pdf2pic** – Easily convert your PDFs to images for display, preview, or export.
