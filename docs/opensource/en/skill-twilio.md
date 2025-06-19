# @digipair/skill-twilio

**Version:** 0.1.0  
**Summary:** Management of communications via Twilio  
**Description:** This skill enables the use of the Twilio service  
**Icon:** 🗣

## Table of Contents

- [Functions](#functions)
  - [sendSms](#sendsms)
  - [sendWhatsapp](#sendwhatsapp)

---

## Functions

### sendSms

Sends an SMS via Twilio.

#### Parameters

| Name                | Type   | Required | Description              |
| ------------------- | ------ | -------- | ------------------------ |
| message             | string | Yes      | Message to send via SMS  |
| phoneNumber         | string | Yes      | Recipient's phone number |
| TWILIO_FROM_NUMBER  | string | No       | Twilio sender number     |
| TWILIO_SID          | string | No       | Twilio account SID       |
| TWILIO_TOKEN        | string | No       | Twilio API key           |
| TWILIO_API_ENDPOINT | string | No       | Twilio API endpoint      |

#### Example

```json
{
  "library": "@digipair/skill-twilio",
  "element": "sendSms",
  "properties": {
    "message": "Hello, this is an SMS sent via Twilio.",
    "phoneNumber": "+33612345678",
    "TWILIO_FROM_NUMBER": "+33123456789",
    "TWILIO_SID": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "TWILIO_TOKEN": "your_twilio_token",
    "TWILIO_API_ENDPOINT": "https://api.twilio.com"
  }
}
```

---

### sendWhatsapp

Sends a WhatsApp message via Twilio.

#### Parameters

| Name                | Type   | Required | Description                  |
| ------------------- | ------ | -------- | ---------------------------- |
| message             | string | Yes      | Message to send via WhatsApp |
| phoneNumber         | string | Yes      | Recipient's phone number     |
| TWILIO_FROM_NUMBER  | string | No       | Twilio sender number         |
| TWILIO_SID          | string | No       | Twilio account SID           |
| TWILIO_TOKEN        | string | No       | Twilio API key               |
| TWILIO_API_ENDPOINT | string | No       | Twilio API endpoint          |

#### Example

```json
{
  "library": "@digipair/skill-twilio",
  "element": "sendWhatsapp",
  "properties": {
    "message": "Hello, this is a WhatsApp message sent via Twilio.",
    "phoneNumber": "+33612345678",
    "TWILIO_FROM_NUMBER": "whatsapp:+33123456789",
    "TWILIO_SID": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "TWILIO_TOKEN": "your_twilio_token",
    "TWILIO_API_ENDPOINT": "https://api.twilio.com"
  }
}
```

---

## Notes

- The `sendSms` and `sendWhatsapp` functions allow you to send SMS and WhatsApp messages respectively via the Twilio service.
- The parameters `TWILIO_FROM_NUMBER`, `TWILIO_SID`, `TWILIO_TOKEN`, and `TWILIO_API_ENDPOINT` can be provided in the properties or set in the runtime environment.
- Make sure the recipient's phone number is in international format (e.g., `+33612345678`).
- For WhatsApp, the `TWILIO_FROM_NUMBER` field must be prefixed with `whatsapp:` (e.g., `whatsapp:+33123456789`).

---

**Contact the technical team for any questions or integration issues.**
