# @digipair/skill-pdf

**Version:** 0.1.0  
**Summary:** PDF Manipulation  
**Description:** This skill enables manipulation of PDF files for extracting or filling forms.  
**Icon:** 📕

## Table of Contents

- [Functions](#functions)
  - [fillForm](#fillform)
  - [getFields](#getfields)
  - [getSize](#getsize)

---

## Functions

### fillForm

Fills a PDF form with the specified values.

#### Description

The `fillForm` function allows you to fill a PDF form from a base64-encoded PDF file and a data object. It is also possible to flatten the form after filling.

#### Parameters

| Name    | Type    | Required | Description                                   |
| ------- | ------- | -------- | --------------------------------------------- |
| file    | string  | Yes      | Base64-encoded PDF file to fill               |
| data    | object  | Yes      | Data to insert into the PDF (key/value pairs) |
| flatten | boolean | No       | Flatten the form after filling (optional)     |

#### Example

```json
{
  "library": "@digipair/skill-pdf",
  "element": "fillForm",
  "properties": {
    "file": "<base64_pdf>",
    "data": {
      "Nom": "Dupont",
      "Prénom": "Jean"
    },
    "flatten": true
  }
}
```

---

### getFields

Extracts the fields from a PDF form.

#### Description

The `getFields` function allows you to extract the list of fields present in a PDF form from a base64-encoded PDF file.

#### Parameters

| Name | Type   | Required | Description                        |
| ---- | ------ | -------- | ---------------------------------- |
| file | string | Yes      | Base64-encoded PDF file to analyze |

#### Example

```json
{
  "library": "@digipair/skill-pdf",
  "element": "getFields",
  "properties": {
    "file": "<base64_pdf>"
  }
}
```

---

### getSize

Returns the number of pages in a PDF.

#### Description

The `getSize` function allows you to obtain the number of pages in a PDF file from a base64-encoded PDF file.

#### Parameters

| Name | Type   | Required | Description                        |
| ---- | ------ | -------- | ---------------------------------- |
| file | string | Yes      | Base64-encoded PDF file to analyze |

#### Example

```json
{
  "library": "@digipair/skill-pdf",
  "element": "getSize",
  "properties": {
    "file": "<base64_pdf>"
  }
}
```

---

## Notes

- PDF files must be provided as base64-encoded strings.
- For `fillForm`, the `data` parameter must match the field names in the PDF form.
- The `flatten` parameter in `fillForm` makes the form non-editable after filling.
- The functions are designed to be used in JavaScript environments, not via an HTTP API.

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT

---

_This documentation was automatically generated from the library's OpenAPI specification._
