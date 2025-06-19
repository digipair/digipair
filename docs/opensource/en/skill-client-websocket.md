# @digipair/skill-client-sse

**Version:** 0.1.0  
**Summary:** Manage Websockets clients  
**Description:** This skill enables managing real-time Websocket communications on the client side.  
**Icon:** 🔗

---

## Table of Contents

- [Functions](#functions)
  - [connect](#connect)
  - [send](#send)
  - [close](#close)
- [Notes](#notes)

---

## Functions

### connect

Establishes a Websocket connection with a server, with optional reconnection management and actions triggered on connection lifecycle events.

#### Parameters

| Name          | Type    | Required | Description                                          |
| ------------- | ------- | -------- | ---------------------------------------------------- |
| url           | string  | No       | Websocket server URL                                 |
| retryInterval | integer | No       | Time interval (ms) between each reconnection attempt |
| maxRetries    | integer | No       | Maximum number of reconnection attempts              |
| message       | array   | No       | Actions to trigger upon receiving a message          |
| open          | array   | No       | Actions to trigger when the connection opens         |
| close         | array   | No       | Actions to trigger when the connection closes        |
| error         | array   | No       | Actions to trigger on error                          |

> **Note:** The `message`, `open`, `close`, and `error` parameters expect lists of actions in the [pinsSettings](https://schemas.digipair.ai/pinsSettings) format.

#### Example

```json
{
  "library": "@digipair/skill-client-sse",
  "element": "connect",
  "properties": {
    "url": "wss://example.com/socket",
    "retryInterval": 2000,
    "maxRetries": 5,
    "message": [{ "type": "log", "payload": "Message received" }],
    "open": [{ "type": "log", "payload": "Connection opened" }],
    "close": [{ "type": "log", "payload": "Connection closed" }],
    "error": [{ "type": "log", "payload": "Connection error" }]
  }
}
```

---

### send

Sends a message through an existing Websocket connection.

#### Parameters

| Name      | Type   | Required | Description               |
| --------- | ------ | -------- | ------------------------- |
| websocket | object | No       | Websocket instance to use |
| message   | object | Yes      | Message to send           |

#### Example

```json
{
  "library": "@digipair/skill-client-sse",
  "element": "send",
  "properties": {
    "websocket": {
      /* reference to the WebSocket instance */
    },
    "message": { "type": "greeting", "content": "Hello!" }
  }
}
```

---

### close

Closes an existing Websocket connection.

#### Parameters

| Name      | Type   | Required | Description                 |
| --------- | ------ | -------- | --------------------------- |
| websocket | object | No       | Websocket instance to close |

#### Example

```json
{
  "library": "@digipair/skill-client-sse",
  "element": "close",
  "properties": {
    "websocket": {
      /* reference to the WebSocket instance */
    }
  }
}
```

---

## Notes

- The `connect` function allows for automatic reconnection management and attaching custom actions to Websocket events.
- Actions (`message`, `open`, `close`, `error`) must be defined according to the [pinsSettings](https://schemas.digipair.ai/pinsSettings) schema.
- The `send` and `close` functions require a reference to the WebSocket instance created by `connect`.
- Ensure that the URL provided to `connect` is valid and that the target server supports the Websocket protocol.
- This library is designed for client-side use (browser or any JS environment compatible with Websockets).
