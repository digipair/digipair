# @digipair/skill-yaml

**Version:** 0.1.0  
**Summary:** YAML data management  
**Description:** This skill allows manipulating YAML data  
**Icon:** 📝

## Table of Contents

- [Functions](#functions)
  - [load](#load)
  - [dump](#dump)

---

## Functions

### load

Load YAML data and convert it into a JavaScript object.

#### Parameters

| Name    | Type   | Required | Description       |
| ------- | ------ | -------- | ----------------- |
| yaml    | string | Yes      | YAML data to load |
| options | object | No       | Loading options   |

#### Example

```json
{
  "library": "@digipair/skill-yaml",
  "element": "load",
  "properties": {
    "yaml": "foo: bar\nbaz: 42",
    "options": {
      "schema": "default"
    }
  }
}
```

---

### dump

Convert a JavaScript object into a YAML string.

#### Parameters

| Name    | Type   | Required | Description             |
| ------- | ------ | -------- | ----------------------- |
| data    | object | Yes      | Data to convert to YAML |
| options | object | No       | Conversion options      |

#### Example

```json
{
  "library": "@digipair/skill-yaml",
  "element": "dump",
  "properties": {
    "data": {
      "foo": "bar",
      "baz": 42
    },
    "options": {
      "indent": 2
    }
  }
}
```

---

## Notes

- The `load` function parses a YAML string into a JavaScript object.
- The `dump` function serializes a JavaScript object into YAML.
- Options are optional and depend on the underlying YAML parser implementation.
- Make sure the provided data is valid to avoid parsing or conversion errors.
