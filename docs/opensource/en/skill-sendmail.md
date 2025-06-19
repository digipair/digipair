# @digipair/skill-sendmail

**Version:** 0.1.0  
**Summary:** Send Mail  
**Description:** Send Mail  
**Icon:** 📨

## Table of Contents

- [Functions](#functions)
  - [send](#send)

---

## Functions

### send

Send an email to one or more recipients.

#### Parameters

| Name        | Type   | Required | Description                    |
| ----------- | ------ | -------- | ------------------------------ |
| from        | string | Yes      | Email sender                   |
| to          | string | Yes      | Email recipients               |
| subject     | string | Yes      | Email subject                  |
| text        | string | Yes      | Plain text body of the message |
| html        | string | Yes      | HTML body of the message       |
| attachments | array  | No       | Attachments                    |
| config      | object | No       | Mail server configuration      |

#### Parameter Details

- **from**: Sender's email address (e.g., `noreply@example.com`)
- **to**: Recipient(s) email address(es), separated by commas if multiple (e.g., `user1@example.com,user2@example.com`)
- **subject**: Subject of the email.
- **text**: Plain text content of the message.
- **html**: HTML content of the message.
- **attachments**: Array of objects representing attachments (see your implementation's documentation for the expected format).
- **config**: Configuration object for the SMTP server or sending service (e.g., host, port, auth, etc.).

#### Example

```json
{
  "library": "@digipair/skill-sendmail",
  "element": "send",
  "properties": {
    "from": "noreply@example.com",
    "to": "recipient@example.com",
    "subject": "Welcome!",
    "text": "Hello, this is a test email.",
    "html": "<p>Hello, this is a <b>test</b> email.</p>",
    "attachments": [
      {
        "filename": "document.pdf",
        "content": "<base64 or buffer>"
      }
    ],
    "config": {
      "host": "smtp.example.com",
      "port": 587,
      "auth": {
        "user": "username",
        "pass": "password"
      }
    }
  }
}
```

---

## Notes

- All required fields must be provided to ensure the email is sent.
- The `attachments` field is optional and must comply with the format expected by the email sending library used.
- The `config` field allows you to override the default SMTP configuration if needed.
- The `send` function is not an HTTP API but a JavaScript function to be invoked in your code.

---

**For any questions or contributions, please refer to the project's GitHub repository.**
