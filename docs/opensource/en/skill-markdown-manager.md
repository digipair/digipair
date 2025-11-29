# @digipair/skill-markdown-manager

**Version:** 0.1.0  
**Summary:** Markdown manager 
**Description:** This skill allows processing on Markdown.  
**Icon:** 📄

## Table of Contents

- [Functions](#functions)
  - [splitMdIntoSections](#splitMdIntoSections)

---

## Functions

### splitMdIntoSections

Split markdown into sections using its headings, source docx.

#### Parameters

| Name | Type   | Required | Description                             |
| ---- | ------ | -------- | --------------------------------------- |
| md   | string | Yes      | Markdown to split into sections         |

#### Example

```json
{
  "library": "@digipair/skill-markdown-manager",
  "element": "splitMdIntoSections",
  "properties": {
    "md": "# Le machine learning est un sous-domaine de l'intelligence artificielle..."
  }
}
```

#### Return Value

The function returns the markdown split into sections as an array with title and content.

---



**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT
