# @digipair/skill-web-inputs

**Version:** 0.1.0  
**Summary:** Data entry in boosts  
**Description:** This skill enables data entry within boosts.  
**Icon:** 📥

## Table of Contents

- [Functions](#functions)
  - [digipairInputDomAttribute](#digipairinputdomattribute)
  - [digipairInputFetch](#digipairinputfetch)
  - [digipairInputFile](#digipairinputfile)
  - [digipairInputHidden](#digipairinputhidden)
  - [digipairInputJson](#digipairinputjson)
  - [digipairInputText](#digipairinputtext)

---

## Functions

### digipairInputDomAttribute

Read an attribute from a DOM element.

#### Parameters

| Name      | Type    | Required | Description                         |
| --------- | ------- | -------- | ----------------------------------- |
| selector  | string  | Yes      | CSS selector of the DOM element     |
| attribute | string  | Yes      | Name of the attribute to read       |
| required  | boolean | No       | Field required to execute the boost |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputDomAttribute",
  "properties": {
    "selector": "#my-element",
    "attribute": "data-id",
    "required": true
  }
}
```

---

### digipairInputFetch

Fetch data from a URL.

#### Parameters

| Name     | Type    | Required | Description                              |
| -------- | ------- | -------- | ---------------------------------------- |
| url      | string  | Yes      | Web service address to call              |
| type     | string  | Yes      | Type of data to fetch (`json` or `text`) |
| required | boolean | No       | Field required to execute the boost      |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputFetch",
  "properties": {
    "url": "https://api.example.com/data",
    "type": "json",
    "required": false
  }
}
```

---

### digipairInputFile

Read a binary file (base64 format).

#### Parameters

| Name     | Type    | Required | Description                                  |
| -------- | ------- | -------- | -------------------------------------------- |
| label    | string  | No       | Text displayed to the user as input guidance |
| accept   | string  | No       | Accepted file types (e.g., `.png, .jpg`)     |
| required | boolean | No       | Field required to execute the boost          |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputFile",
  "properties": {
    "label": "Select a file",
    "accept": ".png,.jpg",
    "required": true
  }
}
```

---

### digipairInputHidden

Return hidden data to the boost.

#### Parameters

| Name     | Type    | Required | Description                         |
| -------- | ------- | -------- | ----------------------------------- |
| value    | object  | Yes      | Data to send to the boost           |
| required | boolean | No       | Field required to execute the boost |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputHidden",
  "properties": {
    "value": { "secret": "value" },
    "required": false
  }
}
```

---

### digipairInputJson

Read a JSON file.

#### Parameters

| Name     | Type    | Required | Description                                  |
| -------- | ------- | -------- | -------------------------------------------- |
| label    | string  | No       | Text displayed to the user as input guidance |
| accept   | string  | No       | Accepted file types (e.g., `.json`)          |
| required | boolean | No       | Field required to execute the boost          |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputJson",
  "properties": {
    "label": "Import a JSON file",
    "accept": ".json",
    "required": true
  }
}
```

---

### digipairInputText

Read a text file.

#### Parameters

| Name     | Type    | Required | Description                                  |
| -------- | ------- | -------- | -------------------------------------------- |
| label    | string  | No       | Text displayed to the user as input guidance |
| accept   | string  | No       | Accepted file types (e.g., `.txt`)           |
| required | boolean | No       | Field required to execute the boost          |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputText",
  "properties": {
    "label": "Import a text file",
    "accept": ".txt",
    "required": false
  }
}
```

---

## Notes

- The functions in this library are designed to facilitate data entry and retrieval in the context of boosts.
- The `required` parameter allows you to specify whether the input is mandatory for the user.
- For file-type functions (`digipairInputFile`, `digipairInputJson`, `digipairInputText`), the `accept` parameter restricts the selectable file types.
- The `digipairInputDomAttribute` function allows you to dynamically extract a value from the DOM, which is useful for advanced integrations.
- The `digipairInputHidden` function is useful for injecting data that is not visible to the user into the boost flow.
