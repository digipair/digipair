# @digipair/skill-web-pdf

**Version:** 0.1.0  
**Summary:** Text extraction from a PDF  
**Description:** This skill allows for the extraction of text from a PDF.  
**Icon:** 📄

## Table of Contents

- [Functions](#functions)
  - [digipairInputPdf](#digipairinputpdf)

## Functions

### digipairInputPdf

Extract text from a PDF

#### Description

Element that allows for the extraction of text from a PDF file provided by the user.

#### Parameters

| Name      | Type    | Required | Description                              |
|-----------|---------|----------|------------------------------------------|
| label     | string  | No       | Text displayed to the user to guide them in their input |
| accept    | string  | No       | Accepted file types                      |
| required  | boolean | No       | Required field to execute the boost     |

#### Example

```json
{
  "library": "@digipair/skill-web-pdf",
  "element": "digipairInputPdf",
  "properties": {
    "label": "Please upload your PDF file",
    "accept": "application/pdf",
    "required": true
  }
}
```

## Notes

- The `digipairInputPdf` function is used to extract text from a PDF file provided by the user.
- The parameters `label`, `accept`, and `required` are optional but can be used to customize the user experience.
- Make sure to provide a valid PDF file for the text extraction to work correctly.