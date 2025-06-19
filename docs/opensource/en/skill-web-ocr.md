# @digipair/skill-web-ocr

**Version:** 0.1.0  
**Summary:** OCR Text Extraction  
**Description:** This skill uses OCR technology to analyze images and extract text, enabling automatic data entry.  
**Icon:** 📄

## Table of Contents

- [Functions](#functions)
  - [digipair-input-ocr-selector](#digipair-input-ocr-selector)
  - [digipair-input-ocr](#digipair-input-ocr)

---

## Functions

### digipair-input-ocr-selector

**Summary:** Extract text from an image present in the DOM  
**Description:** Element that retrieves text from an image present in the DOM using a CSS selector.

#### Parameters

| Name     | Type    | Required | Description                                                                      |
| -------- | ------- | -------- | -------------------------------------------------------------------------------- |
| selector | string  | Yes      | CSS selector of the image present in the DOM                                     |
| language | string  | Yes      | Language of the text to extract                                                  |
| required | boolean | No       | If the field is required, the boost cannot be executed until a value is provided |

#### Usage Example

```json
{
  "library": "@digipair/skill-web-ocr",
  "element": "digipair-input-ocr-selector",
  "properties": {
    "selector": "#image-to-analyze",
    "language": "fr",
    "required": true
  }
}
```

---

### digipair-input-ocr

**Summary:** Extract text from an image provided by the user  
**Description:** Element that extracts text from an image uploaded by the user.

#### Parameters

| Name     | Type    | Required | Description                                         |
| -------- | ------- | -------- | --------------------------------------------------- |
| language | string  | Yes      | Language of the text to extract                     |
| label    | string  | No       | Text displayed to the user to assist with input     |
| accept   | string  | No       | Accepted file types (e.g., "image/png, image/jpeg") |
| required | boolean | No       | Whether the field is required to execute the boost  |

#### Usage Example

```json
{
  "library": "@digipair/skill-web-ocr",
  "element": "digipair-input-ocr",
  "properties": {
    "language": "en",
    "label": "Please upload an image to analyze",
    "accept": "image/png, image/jpeg",
    "required": false
  }
}
```

---

## Notes

- The `digipair-input-ocr-selector` and `digipair-input-ocr` functions allow easy integration of OCR text extraction capabilities into web applications, either from images already present in the DOM or via user-uploaded images.
- The `language` parameter must be set with the appropriate language code (e.g., `"fr"` for French, `"en"` for English).
- The `required` parameter controls field validation before executing the boost.
- For `digipair-input-ocr-selector`, ensure that the CSS selector targets a valid and accessible image in the DOM.
- For `digipair-input-ocr`, the `accept` parameter restricts the types of files the user can upload.

---

**For any contributions or questions, please refer to the project's GitHub repository.**
