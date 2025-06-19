# @digipair/skill-web-notification

**Version:** 0.1.0  
**Summary:** Display of notifications  
**Description:** Display notifications on a web page  
**Icon:** 🔔

---

## Table of Contents

- [Functions](#functions)
  - [information](#information)
  - [error](#error)
  - [confirm](#confirm)
  - [alert](#alert)

---

## Functions

### information

Displays an information notification.

#### Parameters

| Name    | Type   | Required | Description        |
| ------- | ------ | -------- | ------------------ |
| message | string | Yes      | Message to display |

#### Example

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "information",
  "properties": {
    "message": "Your operation has been successfully processed."
  }
}
```

---

### error

Displays an error notification.

#### Parameters

| Name    | Type   | Required | Description        |
| ------- | ------ | -------- | ------------------ |
| message | string | Yes      | Message to display |

#### Example

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "error",
  "properties": {
    "message": "An error occurred during processing."
  }
}
```

---

### confirm

Displays a confirmation notification, with action handling based on the user's response.

#### Parameters

| Name    | Type   | Required | Description                                    |
| ------- | ------ | -------- | ---------------------------------------------- |
| message | string | Yes      | Message to display                             |
| ok      | array  | No       | Actions to execute if the user confirms        |
| ko      | array  | No       | Actions to execute if the user cancels/refuses |

> **Note:** The action objects (`ok` and `ko`) must follow the [pinsSettings](https://schemas.digipair.ai/pinsSettings) schema.

#### Example

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "confirm",
  "properties": {
    "message": "Do you really want to delete this item?",
    "ok": [{ "type": "navigate", "target": "/home" }],
    "ko": [{ "type": "log", "message": "Deletion cancelled" }]
  }
}
```

---

### alert

Displays an alert notification.

#### Parameters

| Name    | Type   | Required | Description        |
| ------- | ------ | -------- | ------------------ |
| message | string | Yes      | Message to display |

#### Example

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "alert",
  "properties": {
    "message": "Warning, your session is about to expire."
  }
}
```

---

## Notes

- All functions in this library are intended to display notifications on a web page.
- The `message` parameter is mandatory and must be a string.
- For the `confirm` function, the `ok` and `ko` parameters are optional and allow you to define actions to execute based on the user's response.
- Actions must comply with the [pinsSettings](https://schemas.digipair.ai/pinsSettings) schema.
- This library does not provide an HTTP API, but exposes JavaScript functions to use in your projects.

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT

---
