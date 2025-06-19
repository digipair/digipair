# @digipair/skill-web-heygen

**Version:** 0.1.0  
**Summary:** Heygen Display  
**Description:** This skill enables the management of Heygen avatar display.  
**Icon:** 🔗

## Table of Contents

- [Functions](#functions)
  - [digipair-heygen](#digipair-heygen)
- [Events](#events)
  - [status](#status)
  - [message](#message)
  - [icecandidate](#icecandidate)
- [Notes](#notes)

---

## Functions

### digipair-heygen

Displays an interactive Heygen avatar on the web page.

#### Parameters

| Name       | Type   | Required | Description                         |
| ---------- | ------ | -------- | ----------------------------------- |
| videoStyle | string | No       | CSS style applied to the video tag. |
| class      | string | No       | CSS class of the element.           |
| style      | string | No       | CSS style of the element.           |
| id         | string | No       | Element identifier.                 |

#### Example

```json
{
  "library": "@digipair/skill-web-heygen",
  "element": "digipair-heygen",
  "properties": {
    "videoStyle": "width:100%;border-radius:8px;",
    "class": "heygen-avatar",
    "style": "margin: 10px;",
    "id": "avatar-heygen-1"
  }
}
```

---

## Events

The functions in this library can trigger the following events:

### status

- **Summary:** On status change
- **Description:** Triggered when the Heygen avatar’s status changes.
- **Payload:** Array of configuration objects (`pinsSettings`).

### message

- **Summary:** On message received
- **Description:** Triggered when a message is received.
- **Payload:** Array of configuration objects (`pinsSettings`).

### icecandidate

- **Summary:** On icecandidate received
- **Description:** Triggered when an ICE candidate (WebRTC) is received.
- **Payload:** Array of configuration objects (`pinsSettings`).

---

## Notes

- All parameters are optional and allow you to customize the integration of the Heygen avatar into your web interface.
- Events can be used to dynamically react to state changes or messages received by the avatar.
- The `pinsSettings` schema referenced in the events should be consulted for the exact structure of the transmitted data.
- This library does not provide an HTTP API, but exposes JavaScript functions to be integrated into your frontend projects.

---

**For any contributions or questions, please refer to the official repository of the library.**
