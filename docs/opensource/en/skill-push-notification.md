# @digipair/skill-push-notification

**Version:** 0.1.0  
**Summary:** Web Push Manipulation  
**Description:** This skill allows sending WebPush notifications.  
**Icon:** 📕

## Table of Contents

- [Functions](#functions)
  - [sendPush](#sendpush)
- [Notes](#notes)

---

## Functions

### sendPush

Send a web push notification with the specified values.

#### Description

The `sendPush` function allows you to send a WebPush notification to a subscribed user, using the subscription information and a custom payload. It supports VAPID authentication to secure the delivery of notifications.

#### Parameters

| Name         | Type   | Required | Description                                                       |
| ------------ | ------ | -------- | ----------------------------------------------------------------- |
| subscription | object | Yes      | Subscription object used to send the notification.                |
| payload      | object | Yes      | Data to include in the notification.                              |
| privateKey   | string | No       | VAPID private key used for authentication.                        |
| publicKey    | string | No       | VAPID public key used to enable push subscription.                |
| mailto       | string | No       | Administrator email for VAPID configuration (the "mailto" field). |

#### Example

```json
{
  "library": "@digipair/skill-push-notification",
  "element": "sendPush",
  "properties": {
    "subscription": {
      "endpoint": "https://fcm.googleapis.com/fcm/send/abc123...",
      "keys": {
        "p256dh": "BExxxxx...",
        "auth": "xxxxxx"
      }
    },
    "payload": {
      "title": "New message",
      "body": "You have received a new message.",
      "icon": "https://example.com/icon.png"
    },
    "privateKey": "OPTIONAL_VAPID_PRIVATE_KEY",
    "publicKey": "OPTIONAL_VAPID_PUBLIC_KEY",
    "mailto": "admin@example.com"
  }
}
```

#### Parameter Details

- **subscription**: Must contain at least the `endpoint` and `keys` (`p256dh`, `auth`) fields as specified by the WebPush specification.
- **payload**: Free-form object, typically including fields like `title`, `body`, `icon`, etc.
- **privateKey** and **publicKey**: If not provided, the library's default configuration will be used.
- **mailto**: Allows specifying an administrator contact for VAPID configuration.

---

## Notes

- The `sendPush` function is designed to be used server-side, as it requires access to the VAPID private key.
- Ensure that the `subscription` object matches the structure expected by the WebPush protocol.
- Using VAPID keys is recommended to ensure the security and authenticity of notifications.
- The `payload` field can be adapted to the needs of the client application (free structure).
- For more information on the WebPush protocol and VAPID, refer to the [official Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/API/Push_API).

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT

---
