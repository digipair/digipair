# @digipair/skill-client-sse

**Version:** 0.1.0  
**Summary:** Displaying Server Sent Events  
**Description:** This skill enables managing real-time communications on the client side.  
**Icon:** 🔗

## Table of Contents

- [Functions](#functions)
  - [connect](#connect)

---

## Functions

### connect

Connects the client to an SSE (Server-Sent Events) stream and allows handling real-time events on the client side.

#### Parameters

| Name    | Type   | Required | Description                                                         |
| ------- | ------ | -------- | ------------------------------------------------------------------- |
| url     | string | No       | URL of the SSE server                                               |
| event   | string | No       | Name of the event to listen for                                     |
| options | object | No       | Configuration options for the SSE connection (fetch, headers, etc.) |
| message | array  | No       | Actions to trigger when a message is received                       |
| open    | array  | No       | Actions to trigger when the connection is opened                    |
| close   | array  | No       | Actions to trigger when the connection is closed                    |
| error   | array  | No       | Actions to trigger when an error occurs                             |

> **Note:** The `message`, `open`, `close`, and `error` properties expect lists of actions in the [pinsSettings](https://schemas.digipair.ai/pinsSettings) format.

#### Example

```json
{
  "library": "@digipair/skill-client-sse",
  "element": "connect",
  "properties": {
    "url": "https://example.com/sse",
    "event": "update",
    "options": {
      "headers": {
        "Authorization": "Bearer <token>"
      }
    },
    "message": [
      {
        "type": "log",
        "params": { "level": "info", "message": "Message received!" }
      }
    ],
    "open": [
      {
        "type": "notify",
        "params": { "title": "Connection opened", "body": "SSE connected." }
      }
    ],
    "close": [
      {
        "type": "notify",
        "params": { "title": "Connection closed", "body": "SSE disconnected." }
      }
    ],
    "error": [
      {
        "type": "log",
        "params": { "level": "error", "message": "SSE error!" }
      }
    ]
  }
}
```

#### Detailed Description

The `connect` function establishes an SSE connection with a remote server. It allows you to specify actions to execute during the different lifecycle events of the connection:

- **message**: Actions triggered for each message received from the server.
- **open**: Actions triggered when the connection is opened.
- **close**: Actions triggered when the connection is closed.
- **error**: Actions triggered when a connection or transmission error occurs.

#### Typical Use Cases

- Real-time display of notifications or data.
- State synchronization between client and server without polling.
- Reacting to business events on the client side as soon as they are emitted by the server.

---

## Notes

- The actions to trigger (`message`, `open`, `close`, `error`) must comply with the [pinsSettings](https://schemas.digipair.ai/pinsSettings) schema.
- The SSE connection remains open as long as the client does not explicitly close it or a network error occurs.
- Using custom options allows you to add headers or configure the request according to security or authentication requirements.

---

**For any contributions or questions, please refer to the library's associated GitHub repository.**
