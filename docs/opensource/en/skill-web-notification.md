# @digipair/skill-web-notification

**Version:** 0.1.0  
**Summary:** Displaying notifications  
**Description:** Displaying notifications on a web page  
**Icon:** 🔔

## Table of Contents

- [Functions](#functions)
  - [information](#information)
  - [error](#error)
  - [confirm](#confirm)
  - [alert](#alert)

## Functions

### information

Displays an informational notification.

#### Parameters

| Name     | Type   | Required | Description         |
|----------|--------|----------|---------------------|
| message  | string | Yes      | Message to display   |

#### Example

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "information",
  "properties": {
    "message": "This is an informational notification"
  }
}
```

### error

Displays an error notification.

#### Parameters

| Name     | Type   | Required | Description         |
|----------|--------|----------|---------------------|
| message  | string | Yes      | Message to display   |

#### Example

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "error",
  "properties": {
    "message": "This is an error notification"
  }
}
```

### confirm

Displays a confirmation notification.

#### Parameters

| Name     | Type   | Required | Description                                      |
|----------|--------|----------|--------------------------------------------------|
| message  | string | Yes      | Message to display                               |
| ok       | array  | No       | Actions to perform if confirmed                  |
| ko       | array  | No       | Actions to perform if not confirmed              |

#### Example

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "confirm",
  "properties": {
    "message": "This is a confirmation notification",
    "ok": ["action1", "action2"],
    "ko": ["action3"]
  }
}
```

### alert

Displays an alert notification.

#### Parameters

| Name     | Type   | Required | Description         |
|----------|--------|----------|---------------------|
| message  | string | Yes      | Message to display   |

#### Example

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "alert",
  "properties": {
    "message": "This is an alert notification"
  }
}
```

## Notes

- The functions `information`, `error`, `confirm`, and `alert` are used to display informational, error, confirmation, and alert notifications on a web page, respectively.
- Ensure to provide a valid message for the `message` parameter.
- The `ok` and `ko` parameters of the `confirm` function are optional and allow you to define actions to be performed based on the user's confirmation or denial.