# @digipair/skill-web-chatbot

**Version:** 0.1.0  
**Summary:** Chatbot display  
**Description:** Integration of an interactive chatbot on a web page to enhance user engagement and communication.  
**Icon:** 🤖

## Table of Contents

- [Functions](#functions)
  - [digipair-chatbot-full](#digipair-chatbot-full)
  - [digipair-chatbot](#digipair-chatbot)

---

## Functions

### digipair-chatbot-full

Displays a conversation with a chatbot in full-screen (full-page) mode.

#### Description

This function allows you to integrate an interactive chatbot that appears in full-screen mode on the web page, making it easier to engage and communicate with users.

#### Parameters

| Name   | Type   | Required | Description                           |
| ------ | ------ | -------- | ------------------------------------- |
| code   | string | Yes      | Identifier of the Digipair to display |
| apiUrl | string | No       | URL of the factory                    |
| userId | string | No       | Unique identifier of the user         |

#### Example

```json
{
  "library": "@digipair/skill-web-chatbot",
  "element": "digipair-chatbot-full",
  "properties": {
    "code": "digipair_identifier",
    "apiUrl": "https://api.digipair.com/factory",
    "userId": "user_123"
  }
}
```

---

### digipair-chatbot

Displays a chatbot on a web page (embedded mode).

#### Description

This function allows you to integrate an interactive chatbot directly into a web page, without occupying the entire page space, to improve user experience and communication.

#### Parameters

| Name   | Type   | Required | Description                           |
| ------ | ------ | -------- | ------------------------------------- |
| code   | string | Yes      | Identifier of the Digipair to display |
| apiUrl | string | No       | URL of the factory                    |
| userId | string | No       | Unique identifier of the user         |

#### Example

```json
{
  "library": "@digipair/skill-web-chatbot",
  "element": "digipair-chatbot",
  "properties": {
    "code": "digipair_identifier",
    "apiUrl": "https://api.digipair.com/factory",
    "userId": "user_123"
  }
}
```

---

## Notes

- The `digipair-chatbot-full` and `digipair-chatbot` functions allow you to integrate a chatbot into a web page, in full-screen or embedded mode, respectively.
- The `code` parameter is mandatory and must correspond to the identifier of the Digipair to display.
- The `apiUrl` and `userId` parameters are optional and allow you to customize the chatbot instance.
- No private context variable or specific environment variable is required for these functions.

---

**For any contributions or questions, please refer to the GitHub repository associated with this library.**
