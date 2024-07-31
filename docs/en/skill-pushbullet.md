# @digipair/skill-pushbullet

**Version:** 0.1.0  
**Summary:** Pushbullet service management  
**Description:** This skill allows you to use the Pushbullet service.  
**Icon:** 💬

## Table of Contents

- [Functions](#functions)
  - [sendSms](#sendsms)

## Functions

### sendSms

Sends an SMS via Pushbullet

#### Parameters

| Name                        | Type   | Required | Description                          |
|-----------------------------|--------|----------|--------------------------------------|
| message                     | string | Yes      | Message to send                      |
| phoneNumber                 | string | Yes      | Recipient's phone number             |
| PUSHBULLET_ACCESS_TOKEN     | string | No       | Pushbullet API key                   |
| PUSHBULLET_TARGET_DEVICE_ID | string | No       | Pushbullet device identifier         |
| PUSHBULLET_API_ENDPOINT     | string | No       | Pushbullet API endpoint              |

#### Example

```json
{
  "library": "@digipair/skill-pushbullet",
  "element": "sendSms",
  "properties": {
    "message": "Hello, this is a test.",
    "phoneNumber": "+33123456789",
    "PUSHBULLET_ACCESS_TOKEN": "your_api_key",
    "PUSHBULLET_TARGET_DEVICE_ID": "device_identifier",
    "PUSHBULLET_API_ENDPOINT": "https://api.pushbullet.com/v2"
  }
}
```

## Notes

- The `sendSms` function allows you to send an SMS using the Pushbullet service.
- The parameters `PUSHBULLET_ACCESS_TOKEN`, `PUSHBULLET_TARGET_DEVICE_ID`, and `PUSHBULLET_API_ENDPOINT` are optional. If not provided, the default values configured in your environment will be used.
- Make sure to provide a valid message and phone number for the `message` and `phoneNumber` parameters.