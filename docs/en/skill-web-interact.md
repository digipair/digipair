# @digipair/skill-web-interact

**Version:** 0.1.0  
**Summary:** Interaction with a web page  
**Description:** This skill allows users to communicate with an HTML page on the client side.  
**Icon:** 📲

## Table of Contents

- [Functions](#functions)
  - [dispatchEvent](#dispatchevent)
  - [setAttribute](#setattribute)
  - [getAttribute](#getattribute)
  - [execute](#execute)
  - [goTo](#goto)
  - [reload](#reload)
  - [upload](#upload)
  - [uploadText](#uploadtext)

## Functions

### dispatchEvent

Emit an event on a DOM element.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| name     | string | Yes      | Name of the event |
| selector | string | Yes      | CSS selector of the element that will receive the event |
| detail   | object | No       | Data passed with the event |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "dispatchEvent",
  "properties": {
    "name": "click",
    "selector": "#myButton",
    "detail": {
      "key": "value"
    }
  }
}
```

### setAttribute

Modify the value of an attribute of a DOM element.

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| selector  | string | Yes      | CSS selector of the element |
| attribute | string | Yes      | Attribute to modify |
| value     | object | Yes      | New value of the attribute |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "setAttribute",
  "properties": {
    "selector": "#myInput",
    "attribute": "value",
    "value": "newValue"
  }
}
```

### getAttribute

Read the value of an attribute of a DOM element.

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| selector  | string | Yes      | CSS selector of the element |
| attribute | string | Yes      | Attribute to read |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getAttribute",
  "properties": {
    "selector": "#myInput",
    "attribute": "value"
  }
}
```

### execute

Execute a method on a DOM element.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| name     | string | Yes      | Name of the method |
| selector | string | Yes      | CSS selector of the element that will execute the method |
| args     | array  | No       | List of method arguments |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "execute",
  "properties": {
    "name": "focus",
    "selector": "#myInput",
    "args": []
  }
}
```

### goTo

Open a web page in the browser.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| url      | string | Yes      | URL of the web page |
| target   | string | Yes      | Target window |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "goTo",
  "properties": {
    "url": "https://example.com",
    "target": "_blank"
  }
}
```

### reload

Reload the current page.

#### Parameters

No parameters required.

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "reload",
  "properties": {}
}
```

### upload

Upload a binary file in base64.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| accept   | string | No       | Accepted file type |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "upload",
  "properties": {
    "accept": "image/png"
  }
}
```

### uploadText

Upload a text file.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| accept   | string | No       | Accepted file type |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "uploadText",
  "properties": {
    "accept": "text/plain"
  }
}
```

## Notes

- The functions in this library allow interaction with DOM elements and manipulation of web pages directly from the browser.
- Ensure to provide valid CSS selectors and existing attributes/methods to avoid errors during function execution.