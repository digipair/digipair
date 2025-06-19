# @digipair/skill-web-push-notification

**Version:** 0.1.0  
**Summary:** Allows users to receive push notifications  
**Description:** This skill enables users to receive real-time updates via WebPush notifications.  
**Icon:** 📕

## Table of Contents

- [Functions](#functions)
  - [initialize](#initialize)

---

## Functions

### initialize

Registers the user to receive push notifications.

#### Description

The `initialize` function registers the user so they can receive real-time push notifications via the WebPush service. It can use a VAPID public key to enable subscription to notifications.

#### Parameters

| Name      | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| publicKey | string | No       | VAPID public key used for the subscription. |

#### Usage Example

```js
import { initialize } from '@digipair/skill-web-push-notification';

// Example with a VAPID public key
initialize({
  publicKey: 'BEl6...yourPublicKey...Qw',
});

// Example without a public key (uses default configuration)
initialize();
```

#### JSON Call Example

```json
{
  "library": "@digipair/skill-web-push-notification",
  "element": "initialize",
  "properties": {
    "publicKey": "BEl6...yourPublicKey...Qw"
  }
}
```

#### Notes

- The `publicKey` parameter is optional. If not provided, the function will use the service's default configuration.
- This function should be called in a context where the user can accept notifications (typically in a browser that supports push notifications).
- Make sure the user has given consent to receive push notifications.

---

## General Notes

- The `@digipair/skill-web-push-notification` library is designed to simplify the integration of Web push notifications into your JavaScript applications.
- For optimal operation, check browser compatibility and the availability of the service worker.
- For more information on configuring push notifications and VAPID keys, refer to the [MDN WebPush documentation](https://developer.mozilla.org/en-US/docs/Web/API/Push_API).

---

**Author:** DigiPair Team  
**License:** MIT  
**Version:** 0.1.0
