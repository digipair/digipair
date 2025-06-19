# @digipair/skill-markitdown

**Version:** 0.1.0  
**Summary:** Markdown file conversion  
**Description:** This skill allows you to convert PDF, DOCX, etc. files to Markdown.  
**Icon:** 📄

## Table of Contents

- [Functions](#functions)
  - [convert](#convert)

---

## Functions

### convert

Convert a file (PDF, DOCX, etc.) to Markdown.

#### Parameters

| Name | Type   | Required | Description                             |
| ---- | ------ | -------- | --------------------------------------- |
| file | string | Yes      | File to convert (path or base64 buffer) |
| path | string | No       | Path to the markitdown executable       |

#### Example

```json
{
  "library": "@digipair/skill-markitdown",
  "element": "convert",
  "properties": {
    "file": "/path/to/my-file.pdf",
    "path": "/usr/local/bin/markitdown"
  }
}
```

#### Detailed Description

The `convert` function allows you to convert a source file (PDF, DOCX, etc.) into a Markdown file.  
The `file` parameter is required and must contain the path to the file to convert or its content encoded in base64.  
The optional `path` parameter lets you specify a custom path to the markitdown executable if it is not in the system PATH.

#### Return Value

The function returns the content of the converted file in Markdown format as a string.

---

## Notes

- Make sure the `markitdown` executable is installed and accessible on your system.
- The `path` parameter is useful if you are using a custom or non-standard version of the executable.
- The supported file formats depend on the version of the `markitdown` executable used.
- For security reasons, always verify the source of the files you want to convert.

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT
