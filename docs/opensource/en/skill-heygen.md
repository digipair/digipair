# @digipair/skill-heygen

**Version:** 0.1.0  
**Summary:** Heygen API  
**Description:** This skill manages communication with Heygen servers.  
**Icon:** 🔗

## Table of Contents

- [Functions](#functions)
  - [newSession](#newsession)
  - [handleICE](#handleice)
  - [startSession](#startsession)
  - [talk](#talk)
  - [stop](#stop)

---

## Functions

### newSession

Create a new Heygen session.

#### Parameters

| Name      | Type   | Required | Description       |
| --------- | ------ | -------- | ----------------- |
| serverUrl | string | No       | Heygen server URL |
| apiKey    | string | No       | Heygen API key    |
| quality   | string | No       | Voice quality     |
| avatar    | string | Yes      | Voice avatar      |
| voice     | string | Yes      | Voice to use      |

#### Example

```json
{
  "library": "@digipair/skill-heygen",
  "element": "newSession",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "your_api_key",
    "quality": "high",
    "avatar": "avatar_id",
    "voice": "voice_id"
  }
}
```

---

### handleICE

Handle an ICE candidate for a Heygen session.

#### Parameters

| Name      | Type   | Required | Description        |
| --------- | ------ | -------- | ------------------ |
| serverUrl | string | No       | Heygen server URL  |
| apiKey    | string | No       | Heygen API key     |
| sessionId | string | Yes      | Session identifier |
| candidate | object | Yes      | ICE candidate      |

#### Example

```json
{
  "library": "@digipair/skill-heygen",
  "element": "handleICE",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "your_api_key",
    "sessionId": "session_123",
    "candidate": {
      "candidate": "candidate:842163049 1 udp 1677729535 192.168.1.2 56143 typ srflx raddr 0.0.0.0 rport 0"
    }
  }
}
```

---

### startSession

Start an existing Heygen session.

#### Parameters

| Name      | Type   | Required | Description        |
| --------- | ------ | -------- | ------------------ |
| serverUrl | string | No       | Heygen server URL  |
| apiKey    | string | No       | Heygen API key     |
| sessionId | string | Yes      | Session identifier |
| sdp       | object | Yes      | SDP object         |

#### Example

```json
{
  "library": "@digipair/skill-heygen",
  "element": "startSession",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "your_api_key",
    "sessionId": "session_123",
    "sdp": {
      "type": "offer",
      "sdp": "v=0..."
    }
  }
}
```

---

### talk

Send text to be spoken in a Heygen session.

#### Parameters

| Name      | Type   | Required | Description        |
| --------- | ------ | -------- | ------------------ |
| serverUrl | string | No       | Heygen server URL  |
| apiKey    | string | No       | Heygen API key     |
| sessionId | string | Yes      | Session identifier |
| text      | string | Yes      | Text to speak      |

#### Example

```json
{
  "library": "@digipair/skill-heygen",
  "element": "talk",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "your_api_key",
    "sessionId": "session_123",
    "text": "Hello, how can I help you?"
  }
}
```

---

### stop

Stop a Heygen session.

#### Parameters

| Name      | Type   | Required | Description        |
| --------- | ------ | -------- | ------------------ |
| serverUrl | string | No       | Heygen server URL  |
| apiKey    | string | No       | Heygen API key     |
| sessionId | string | Yes      | Session identifier |

#### Example

```json
{
  "library": "@digipair/skill-heygen",
  "element": "stop",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "your_api_key",
    "sessionId": "session_123"
  }
}
```

---

## Notes

- The functions in this library allow you to manage the lifecycle of a Heygen session (creation, start, interaction, stop) as well as handle ICE candidates for WebRTC communication.
- The `serverUrl` and `apiKey` parameters are optional but recommended for connecting to a custom or secured Heygen server.
- Make sure to provide valid identifiers for required parameters (`avatar`, `voice`, `sessionId`, etc.).
- Complex objects such as `candidate` and `sdp` must follow the structure expected by Heygen.
