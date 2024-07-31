# @digipair/skill-web-ocr

**Version:** 0.1.0  
**Summary:** OCR Text Extraction  
**Description:** This skill utilizes OCR technology to analyze images and extract text, enabling automatic data entry.  
**Icon:** 📄

## Table of Contents

- [Functions](#functions)
  - [digipairInputOcrSelector](#digipairinputocrselector)
  - [digipairInputOcr](#digipairinputocr)

## Functions

### digipairInputOcrSelector

Extract text from an image in the DOM

#### Description

Element for retrieving text from an image present in the DOM.

#### Parameters

| Name      | Type    | Required | Description                                                                 |
|-----------|---------|----------|-----------------------------------------------------------------------------|
| selector  | string  | Yes      | CSS selector for the image present in the DOM                               |
| language  | string  | Yes      | Language of the text to be extracted                                         |
| required  | boolean | No       | When the field is required, the boost cannot be executed until a value is entered |

#### Example

```json
{
  "library": "@digipair/skill-web-ocr",
  "element": "digipairInputOcrSelector",
  "properties": {
    "selector": "#image-id",
    "language": "fr",
    "required": true
  }
}
```

### digipairInputOcr

Extract text from an image

#### Description

Element for extracting text from an image provided by the user.

#### Parameters

| Name      | Type    | Required | Description                                                                 |
|-----------|---------|----------|-----------------------------------------------------------------------------|
| language  | string  | Yes      | Language of the text to be extracted                                         |
| label     | string  | No       | Text displayed to the user to guide them in their input                     |
| accept    | string  | No       | Accepted file types                                                          |
| required  | boolean | No       | Required field to execute the boost                                         |

#### Example

```json
{
  "library": "@digipair/skill-web-ocr",
  "element": "digipairInputOcr",
  "properties": {
    "language": "en",
    "label": "Please upload an image",
    "accept": "image/*",
    "required": false
  }
}
```

## Notes

- The functions `digipairInputOcrSelector` and `digipairInputOcr` are used to extract text from images present in the DOM or provided by the user.
- Ensure to provide valid CSS selectors and accepted file types for optimal functionality.