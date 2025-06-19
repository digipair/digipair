# @digipair/skill-web-interact

**Version:** 0.1.0  
**Summary:** Interaction with a web page  
**Description:** This skill allows users to communicate with a client-side HTML page.  
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
  - [capture](#capture)
  - [getMediaDevices](#getmediadevices)

---

## Functions

### dispatchEvent

Emits an event on a DOM element.

#### Parameters

| Name     | Type   | Required | Description                            |
| -------- | ------ | -------- | -------------------------------------- |
| name     | string | Yes      | Name of the event to emit              |
| selector | string | Yes      | CSS selector of the target element     |
| detail   | object | No       | Data to pass with the event (optional) |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "dispatchEvent",
  "properties": {
    "name": "customEvent",
    "selector": "#my-element",
    "detail": { "foo": "bar" }
  }
}
```

---

### setAttribute

Sets the value of an attribute on a DOM element.

#### Parameters

| Name      | Type   | Required | Description                  |
| --------- | ------ | -------- | ---------------------------- |
| selector  | string | Yes      | CSS selector of the element  |
| attribute | string | Yes      | Name of the attribute to set |
| value     | object | Yes      | New value for the attribute  |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "setAttribute",
  "properties": {
    "selector": "#my-element",
    "attribute": "data-status",
    "value": "active"
  }
}
```

---

### getAttribute

Reads the value of an attribute from a DOM element.

#### Parameters

| Name      | Type   | Required | Description                   |
| --------- | ------ | -------- | ----------------------------- |
| selector  | string | Yes      | CSS selector of the element   |
| attribute | string | Yes      | Name of the attribute to read |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getAttribute",
  "properties": {
    "selector": "#my-element",
    "attribute": "data-status"
  }
}
```

---

### execute

Executes a method on a DOM element.

#### Parameters

| Name     | Type   | Required | Description                                        |
| -------- | ------ | -------- | -------------------------------------------------- |
| name     | string | Yes      | Name of the method to execute                      |
| selector | string | Yes      | CSS selector of the target element                 |
| args     | array  | No       | List of arguments to pass to the method (optional) |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "execute",
  "properties": {
    "name": "focus",
    "selector": "#input-field",
    "args": []
  }
}
```

---

### goTo

Opens a web page in the browser.

#### Parameters

| Name   | Type   | Required | Description                     |
| ------ | ------ | -------- | ------------------------------- |
| url    | string | Yes      | URL of the web page to open     |
| target | string | No       | Target window (e.g., "\_blank") |

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

---

### reload

Reloads the current page.

#### Parameters

None.

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "reload",
  "properties": {}
}
```

---

### upload

Allows uploading a binary file (base64).

#### Parameters

| Name   | Type   | Required | Description                    |
| ------ | ------ | -------- | ------------------------------ |
| accept | string | No       | Accepted file type (MIME type) |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "upload",
  "properties": {
    "accept": "image/*"
  }
}
```

---

### uploadText

Allows uploading a text file.

#### Parameters

| Name   | Type   | Required | Description                    |
| ------ | ------ | -------- | ------------------------------ |
| accept | string | No       | Accepted file type (MIME type) |

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

---

### capture

Captures an image from the webcam.

#### Parameters

| Name       | Type   | Required | Description                                |
| ---------- | ------ | -------- | ------------------------------------------ |
| deviceId   | string | No       | ID of the capture device                   |
| width      | number | No       | Width of the captured image                |
| height     | number | No       | Height of the captured image               |
| facingMode | string | No       | Capture mode (e.g., "user", "environment") |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "capture",
  "properties": {
    "deviceId": "abcd1234",
    "width": 640,
    "height": 480,
    "facingMode": "user"
  }
}
```

---

### getMediaDevices

Lists available capture devices.

#### Parameters

None.

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getMediaDevices",
  "properties": {}
}
```

---

## Notes

- CSS selectors must target existing elements in the DOM.
- Capture and upload functions require user permission.
- Methods executed via `execute` must be accessible on the targeted element.
- For `goTo`, using `target: "_blank"` will open the page in a new tab.
- Optional parameters can be omitted if not needed.
