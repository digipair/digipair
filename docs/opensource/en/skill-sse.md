# @digipair/skill-sse

**Version:** 0.1.0  
**Summary:** Server Sent Events  
**Description:** This skill enables real-time communication management.  
**Icon:** 🔗

## Table of Contents

- [Functions](#functions)
  - [registerSession](#registersession)
  - [registerChannel](#registerchannel)
  - [push](#push)
  - [broadcast](#broadcast)

---

## Functions

### registerSession

Initializes an SSE (Server Sent Events) session.

#### Parameters

| Name         | Type   | Required | Description                                                                                          |
| ------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------- |
| id           | string | Yes      | Unique identifier for the session                                                                    |
| disconnected | array  | No       | Actions to execute upon disconnection (see [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Example

```json
{
  "library": "@digipair/skill-sse",
  "element": "registerSession",
  "properties": {
    "id": "session_12345",
    "disconnected": [
      {
        "type": "notify",
        "message": "Session disconnected"
      }
    ]
  }
}
```

---

### registerChannel

Initializes an SSE channel and optionally adds a session to it.

#### Parameters

| Name         | Type   | Required | Description                                                                                          |
| ------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------- |
| session      | object | No       | Session instance to add to the channel                                                               |
| id           | string | No       | Channel identifier                                                                                   |
| disconnected | array  | No       | Actions to execute upon disconnection (see [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Example

```json
{
  "library": "@digipair/skill-sse",
  "element": "registerChannel",
  "properties": {
    "session": { "id": "session_12345" },
    "id": "channel_abc",
    "disconnected": [
      {
        "type": "log",
        "message": "Channel disconnected"
      }
    ]
  }
}
```

---

### push

Sends an SSE message to a specific session.

#### Parameters

| Name      | Type   | Required | Description                       |
| --------- | ------ | -------- | --------------------------------- |
| id        | string | Yes      | Unique identifier for the session |
| message   | object | Yes      | Message to send                   |
| reasoning | string | No       | Associated reasoning name         |
| digipair  | string | No       | Digipair identifier               |

#### Example

```json
{
  "library": "@digipair/skill-sse",
  "element": "push",
  "properties": {
    "id": "session_12345",
    "message": { "text": "Hello, world!" },
    "reasoning": "greeting",
    "digipair": "dp_001"
  }
}
```

---

### broadcast

Broadcasts an SSE message to all members of a channel or globally.

#### Parameters

| Name      | Type   | Required | Description               |
| --------- | ------ | -------- | ------------------------- |
| message   | object | Yes      | Message to broadcast      |
| event     | string | No       | Event name                |
| id        | string | No       | Channel identifier        |
| reasoning | string | No       | Associated reasoning name |
| digipair  | string | No       | Digipair identifier       |

#### Example

```json
{
  "library": "@digipair/skill-sse",
  "element": "broadcast",
  "properties": {
    "message": { "text": "System update available" },
    "event": "update",
    "id": "channel_abc",
    "reasoning": "system",
    "digipair": "dp_001"
  }
}
```

---

## Notes

- The functions in this library allow you to manage SSE sessions and channels for real-time communication.
- The `disconnected` parameter lets you specify actions to execute when a connection is lost.
- `message` objects are flexible and can contain any structure suitable for your use case.
- For more details on the structure of disconnection actions, see the [pinsSettings](https://schemas.digipair.ai/pinsSettings) schema.
- The use of `reasoning` and `digipair` is optional and depends on your business logic.
