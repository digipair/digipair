# @digipair/skill-twilio

**Version:** 0.1.0  
**Summary:** Management of communications via Twilio  
**Description:** This skill allows the use of the Twilio service.  
**Icon:** 🗣

## Table of Contents

- [Functions](#functions)
  - [sendSms](#sendsms)
  - [sendWhatsapp](#sendwhatsapp)

## Functions

### sendSms

Sends an SMS via Twilio

#### Parameters

| Name                | Type   | Required | Description                        |
|---------------------|--------|----------|------------------------------------|
| message             | string | Yes      | Message to be sent via SMS        |
| phoneNumber         | string | Yes      | Recipient's phone number          |
| TWILIO_FROM_NUMBER  | string | No       | Twilio number                     |
| TWILIO_SID          | string | No       | Twilio identifier                 |
| TWILIO_TOKEN        | string | No       | Twilio API key                    |
| TWILIO_API_ENDPOINT | string | No       | Twilio API endpoint               |

#### Example

```json
{
  "library": "@digipair/skill-twilio",
  "element": "sendSms",
  "properties": {
    "message": "Hello, this is a test.",
    "phoneNumber": "+1234567890",
    "TWILIO_FROM_NUMBER": "+0987654321",
    "TWILIO_SID": "your_twilio_sid",
    "TWILIO_TOKEN": "your_twilio_token",
    "TWILIO_API_ENDPOINT": "https://api.twilio.com"
  }
}
```

### sendWhatsapp

Sends a WhatsApp message via Twilio

#### Parameters

| Name                | Type   | Required | Description                        |
|---------------------|--------|----------|------------------------------------|
| message             | string | Yes      | Message to be sent via WhatsApp    |
| phoneNumber         | string | Yes      | Recipient's phone number          |
| TWILIO_FROM_NUMBER  | string | No       | Twilio number                     |
| TWILIO_SID          | string | No       | Twilio identifier                 |
| TWILIO_TOKEN        | string | No       | Twilio API key                    |
| TWILIO_API_ENDPOINT | string | No       | Twilio API endpoint               |

#### Example

```json
{
  "library": "@digipair/skill-twilio",
  "element": "sendWhatsapp",
  "properties": {
    "message": "Hello, this is a test via WhatsApp.",
    "phoneNumber": "+1234567890",
    "TWILIO_FROM_NUMBER": "+0987654321",
    "TWILIO_SID": "your_twilio_sid",
    "TWILIO_TOKEN": "your_twilio_token",
    "TWILIO_API_ENDPOINT": "https://api.twilio.com"
  }
}
```

## Notes

- The `sendSms` and `sendWhatsapp` functions are used to send SMS and WhatsApp messages respectively via the Twilio service.
- Make sure to provide the correct Twilio credentials (`TWILIO_SID`, `TWILIO_TOKEN`, etc.) if they are not already configured in your environment.