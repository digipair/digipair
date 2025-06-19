# @digipair/skill-web-pdf

**Version:** 0.1.0  
**Summary:** Text extraction from a PDF  
**Description:** This skill enables text extraction from a PDF file.  
**Icon:** 📄

## Table of Contents

- [Functions](#functions)
  - [digipair-input-pdf](#digipair-input-pdf)

---

## Functions

### digipair-input-pdf

Extract text from a PDF file provided by the user.

#### Description

This function allows you to extract the text contained in a PDF file. The user provides the PDF file, and the function returns the extracted text. It can be used in interfaces where the user needs to upload a PDF to retrieve its textual content.

#### Parameters

| Name     | Type    | Required | Description                                                       |
| -------- | ------- | -------- | ----------------------------------------------------------------- |
| label    | string  | No       | Text displayed to the user to assist them in their action.        |
| accept   | string  | No       | Accepted file types (e.g., ".pdf").                               |
| required | boolean | No       | Indicates whether the field is mandatory to execute the function. |

#### Usage Example

```json
{
  "library": "@digipair/skill-web-pdf",
  "element": "digipair-input-pdf",
  "properties": {
    "label": "Select a PDF file to analyze",
    "accept": ".pdf",
    "required": true
  }
}
```

#### Example of Expected Result

```json
{
  "text": "Textual content extracted from the PDF file."
}
```

---

## Notes

- The `digipair-input-pdf` function is designed to be integrated into user interfaces where text extraction from a PDF is required.
- The `accept` parameter restricts the types of files the user can select (default: ".pdf").
- The `label` parameter improves the user experience by displaying helpful text.
- The `required` parameter allows you to make file selection mandatory or optional.
- No additional data schema is required for this function.

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT (to be confirmed depending on the project)
