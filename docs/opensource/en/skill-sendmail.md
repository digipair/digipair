# @digipair/skill-sendmail

**Version:** 0.1.0  
**Summary:** Email Sending  
**Description:** Email Sending  
**Icon:** 📨

## Table of Contents

- [Functions](#functions)
  - [send](#send)

## Functions

### send

Sends an email.

#### Parameters

| Name     | Type   | Required | Description                  |
|----------|--------|----------|------------------------------|
| from     | string | Yes      | Sender of the email          |
| to       | string | Yes      | Recipients of the email      |
| subject  | string | Yes      | Subject of the email         |
| text     | string | Yes      | Text of the email            |
| html     | string | Yes      | HTML content of the email     |
| config   | object | No       | Email server configuration    |

#### Example

```json
{
  "library": "@digipair/skill-sendmail",
  "element": "send",
  "properties": {
    "from": "sender@example.com",
    "to": "recipient@example.com",
    "subject": "Email Subject",
    "text": "Email text",
    "html": "<p>Email HTML content</p>",
    "config": {
      "host": "smtp.example.com",
      "port": 587,
      "secure": false,
      "auth": {
        "user": "username",
        "pass": "password"
      }
    }
  }
}
```

## Notes

- The `send` function is used to send an email with the specified parameters.
- Ensure to provide valid values for the `from`, `to`, `subject`, `text`, and `html` parameters.
- The `config` parameter is optional and allows you to specify the email server configuration. If this parameter is not provided, the default configuration will be used.
- The email server configuration (`config`) may include details such as the host (`host`), port (`port`), security (`secure`), and authentication information (`auth`).