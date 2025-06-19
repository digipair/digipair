# @digipair/skill-pushbullet

**Version:** 0.1.0  
**Summary:** Management of the Pushbullet service  
**Description:** This skill enables the use of the Pushbullet service.  
**Icon:** 💬

## Table of Contents

- [Functions](#functions)
  - [sendSms](#sendsms)

---

## Functions

### sendSms

Sends an SMS via the Pushbullet service.

#### Parameters

| Name                        | Type   | Required | Description                 |
| --------------------------- | ------ | -------- | --------------------------- |
| message                     | string | Yes      | Message to send             |
| phoneNumber                 | string | Yes      | Recipient's phone number    |
| PUSHBULLET_ACCESS_TOKEN     | string | No       | Pushbullet API key          |
| PUSHBULLET_TARGET_DEVICE_ID | string | No       | Target Pushbullet device ID |
| PUSHBULLET_API_ENDPOINT     | string | No       | Pushbullet API endpoint     |

#### Private Context or Environment Variables

No specific private context or environment variables are required by default.  
However, the optional parameters `PUSHBULLET_ACCESS_TOKEN`, `PUSHBULLET_TARGET_DEVICE_ID`, and `PUSHBULLET_API_ENDPOINT` can be provided via the environment or private context depending on the integration.

#### Example

```json
{
  "library": "@digipair/skill-pushbullet",
  "element": "sendSms",
  "properties": {
    "message": "Hello, this is a test.",
    "phoneNumber": "+33612345678",
    "PUSHBULLET_ACCESS_TOKEN": "o.xxxxxxxx", // optional if already configured
    "PUSHBULLET_TARGET_DEVICE_ID": "ujpah72o0sjAoRtnM0jc", // optional
    "PUSHBULLET_API_ENDPOINT": "https://api.pushbullet.com/v2" // optional
  }
}
```

---

## Notes

- The `sendSms` function allows you to send an SMS via the Pushbullet service to a specified phone number.
- The parameters `PUSHBULLET_ACCESS_TOKEN`, `PUSHBULLET_TARGET_DEVICE_ID`, and `PUSHBULLET_API_ENDPOINT` are optional and can be set globally in the environment or passed directly to the function.
- Ensure that the Pushbullet account used has the necessary permissions to send SMS and that the target device is properly configured for this action.
- In case of a sending error, check the validity of the API key and the device ID.

---

**For any contributions or questions, please refer to the GitHub repository associated with this library.**
