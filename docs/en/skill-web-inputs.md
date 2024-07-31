# @digipair/skill-web-inputs

**Version:** 0.1.0  
**Summary:** Data input in boosts  
**Description:** This skill allows for data input in boosts.  
**Icon:** 📥

## Table of Contents

- [Functions](#functions)
  - [digipairInputDomAttribute](#digipairinputdomattribute)
  - [digipairInputFetch](#digipairinputfetch)
  - [digipairInputFile](#digipairinputfile)
  - [digipairInputHidden](#digipairinputhidden)
  - [digipairInputJson](#digipairinputjson)
  - [digipairInputText](#digipairinputtext)

## Functions

### digipairInputDomAttribute

Read an attribute from a DOM element

#### Parameters

| Name       | Type    | Required | Description                          |
|------------|---------|----------|--------------------------------------|
| selector   | string  | Yes      | CSS selector of the DOM element      |
| attribute  | string  | Yes      | Name of the attribute to read        |
| required   | boolean | No       | Required field to execute the boost  |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputDomAttribute",
  "properties": {
    "selector": ".my-element",
    "attribute": "data-value",
    "required": true
  }
}
```

### digipairInputFetch

Fetch data from a URL

#### Parameters

| Name      | Type    | Required | Description                          |
|-----------|---------|----------|--------------------------------------|
| url       | string  | Yes      | Address of the web service to call   |
| type      | string  | Yes      | Type of data to retrieve (json or text) |
| required  | boolean | No       | Required field to execute the boost  |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputFetch",
  "properties": {
    "url": "https://api.example.com/data",
    "type": "json",
    "required": true
  }
}
```

### digipairInputFile

Read a binary file

#### Parameters

| Name      | Type    | Required | Description                          |
|-----------|---------|----------|--------------------------------------|
| label     | string  | No       | Text displayed to the user to guide them in their input |
| accept    | string  | No       | Accepted file types                  |
| required  | boolean | No       | Required field to execute the boost  |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputFile",
  "properties": {
    "label": "Please select a file",
    "accept": ".png,.jpg",
    "required": false
  }
}
```

### digipairInputHidden

Return hidden data

#### Parameters

| Name      | Type    | Required | Description                          |
|-----------|---------|----------|--------------------------------------|
| value     | object  | Yes      | Data to send to the boost            |
| required  | boolean | No       | Required field to execute the boost  |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputHidden",
  "properties": {
    "value": { "key": "value" },
    "required": true
  }
}
```

### digipairInputJson

Read a JSON file

#### Parameters

| Name      | Type    | Required | Description                          |
|-----------|---------|----------|--------------------------------------|
| label     | string  | No       | Text displayed to the user to guide them in their input |
| accept    | string  | No       | Accepted file types                  |
| required  | boolean | No       | Required field to execute the boost  |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputJson",
  "properties": {
    "label": "Please select a JSON file",
    "accept": ".json",
    "required": false
  }
}
```

### digipairInputText

Read a text file

#### Parameters

| Name      | Type    | Required | Description                          |
|-----------|---------|----------|--------------------------------------|
| label     | string  | No       | Text displayed to the user to guide them in their input |
| accept    | string  | No       | Accepted file types                  |
| required  | boolean | No       | Required field to execute the boost  |

#### Example

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputText",
  "properties": {
    "label": "Please select a text file",
    "accept": ".txt",
    "required": false
  }
}
```

## Notes

- The functions in this library are used to interact with different types of user inputs and data in boosts.
- Make sure to provide the required parameters for each function to ensure their proper functioning.