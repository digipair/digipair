# @digipair/skill-docxtemplater

**Version:** 0.1.0  
**Summary:** Word document generation  
**Description:** This skill enables the generation of Word documents from templates.  
**Icon:** 🔗

## Table of Contents

- [Functions](#functions)
  - [generate](#generate)

---

## Functions

### generate

Generates a Word document from a `.docx` template and provided data.

#### Parameters

| Name     | Type   | Required | Description                                                    |
| -------- | ------ | -------- | -------------------------------------------------------------- |
| template | string | Yes      | Word template in base64 format (.docx)                         |
| data     | object | Yes      | Data to inject into the template (key/value pairs for merging) |

#### Example

```json
{
  "library": "@digipair/skill-docxtemplater",
  "element": "generate",
  "properties": {
    "template": "UEsDBBQABgAIAAAAIQ...",
    "data": {
      "firstName": "Jean",
      "lastName": "Dupont",
      "date": "2024-06-01"
    }
  }
}
```

#### Detailed Description

The `generate` function allows you to dynamically create a Word document by injecting data into a provided `.docx` template in base64 format.  
The template must be a valid Word file containing merge tags (e.g., `{firstName}`) that will be replaced by the corresponding values from the `data` parameter.

#### JavaScript Usage Example

```js
import { generate } from '@digipair/skill-docxtemplater';

const templateBase64 = 'UEsDBBQABgAIAAAAIQ...'; // Your .docx template encoded in base64
const data = {
  firstName: 'Jean',
  lastName: 'Dupont',
  date: '2024-06-01',
};

const result = await generate({ template: templateBase64, data });
// result: Buffer or base64 string of the generated Word document
```

#### Result

The function returns the generated Word document, typically as a buffer or a base64 string, ready to be downloaded or stored.

---

## Notes

- The template must be a Word (.docx) file encoded in base64.
- The keys of the `data` object must match the tags present in the Word template.
- This function is ideal for automatically generating contracts, certificates, reports, etc., from custom templates.

---

**For any questions or contributions, please refer to the project's GitHub repository.**
