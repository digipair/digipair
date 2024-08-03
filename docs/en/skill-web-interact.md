# @digipair/skill-web-interact

**Version:** 0.1.0  
**Summary:** Interaction with a web page  
**Description:** This skill allows users to communicate with an HTML page on the client side.  
**Icon:** 📲

## Table of Contents

- [@digipair/skill-web-interact](#digipairskill-web-interact)
  - [Table of Contents](#table-of-contents)
  - [Functions](#functions)
    - [dispatchEvent](#dispatchevent)
      - [Parameters](#parameters)
      - [Example](#example)
    - [setAttribute](#setattribute)
      - [Parameters](#parameters-1)
      - [Example](#example-1)
    - [getAttribute](#getattribute)
      - [Parameters](#parameters-2)
      - [Example](#example-2)
    - [execute](#execute)
      - [Parameters](#parameters-3)
      - [Example](#example-3)
    - [goTo](#goto)
      - [Parameters](#parameters-4)
      - [Example](#example-4)
    - [reload](#reload)
      - [Example](#example-5)
    - [upload](#upload)
      - [Parameters](#parameters-5)
      - [Example](#example-6)
    - [uploadText](#uploadtext)
      - [Parameters](#parameters-6)
      - [Example](#example-7)
    - [capture](#capture)
      - [Parameters](#parameters-7)
      - [Example](#example-8)
    - [getMediaDevices](#getmediadevices)
      - [Example](#example-9)
  - [Notes](#notes)

## Functions

### dispatchEvent

Triggers an event on a DOM element.

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| name      | string | Yes      | Name of the event to trigger. |
| selector  | string | Yes      | CSS selector of the element that will receive the event. |
| detail    | object | No       | Data passed with the event. |

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

---

### setAttribute

Allows modifying the value of an attribute of a DOM element.

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| selector  | string | Yes      | CSS selector of the element. |
| attribute | string | Yes      | Attribute to modify. |
| value     | object | Yes      | New value for the attribute. |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "setAttribute",
  "properties": {
    "selector": "#myElement",
    "attribute": "data-custom",
    "value": "newValue"
  }
}
```

---

### getAttribute

Allows reading the value of an attribute of a DOM element.

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| selector  | string | Yes      | CSS selector of the element. |
| attribute | string | Yes      | Attribute to read. |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getAttribute",
  "properties": {
    "selector": "#myElement",
    "attribute": "data-custom"
  }
}
```

---

### execute

Executes a method on a DOM element.

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| name      | string | Yes      | Name of the method to execute. |
| selector  | string | Yes      | CSS selector of the element that will execute the method. |
| args      | array  | No       | List of arguments for the method. |

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

---

### goTo

Allows opening a web page in the browser.

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| url       | string | Yes      | URL of the web page to open. |
| target    | string | Yes      | Target window (e.g., "_blank", "_self"). |

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

Allows reloading the current page.

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

Allows uploading a binary file in base64.

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| accept    | string | No       | Accepted file type. |

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

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| accept    | string | No       | Accepted file type. |

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

Allows capturing an image from the webcam.

#### Parameters

| Name        | Type    | Required | Description |
|-------------|---------|----------|-------------|
| deviceId    | string  | No       | Identifier of the capture device. |
| width       | number  | No       | Width of the captured image. |
| height      | number  | No       | Height of the captured image. |
| facingMode  | string  | No       | Capture mode of the image (e.g., "user", "environment"). |

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "capture",
  "properties": {
    "deviceId": "myDeviceId",
    "width": 640,
    "height": 480,
    "facingMode": "user"
  }
}
```

---

### getMediaDevices

Lists the available capture devices.

#### Example

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getMediaDevices",
  "properties": {}
}
```

## Notes

- The functions in this library allow interaction with the DOM and perform various actions on the elements of the web page.
- Ensure to provide valid CSS selectors for the `selector` parameters and adhere to the expected data types for each parameter.