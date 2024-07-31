# @digipair/skill-web-chatbot

**Version:** 0.1.0  
**Summary:** Displaying chatbots  
**Description:** Integration of an interactive chatbot on a web page to enhance user engagement and communication.  
**Icon:** 🤖

## Table of Contents

- [Functions](#functions)
  - [digipairChatbotFull](#digipairChatbotFull)
  - [digipairChatbot](#digipairChatbot)

## Functions

### digipairChatbotFull

Displays a full-page conversation with a chatbot.

#### Parameters

| Name              | Type   | Required | Description                                                                 |
|-------------------|--------|----------|-----------------------------------------------------------------------------|
| code              | string | Yes      | Digipair to display                                                          |
| apiUrl            | string | No       | URL address of the factory                                                  |
| commonExperience  | string | No       | Digipair that shares common reasoning with all chatbots                    |

#### Example

```json
{
  "library": "@digipair/skill-web-chatbot",
  "element": "digipairChatbotFull",
  "properties": {
    "code": "digipair_identifier",
    "apiUrl": "https://example.com/api",
    "commonExperience": "common_digipair_identifier"
  }
}
```

### digipairChatbot

Displays a chatbot on a web page.

#### Parameters

| Name              | Type   | Required | Description                                                                 |
|-------------------|--------|----------|-----------------------------------------------------------------------------|
| code              | string | Yes      | Digipair to display                                                          |
| apiUrl            | string | No       | URL address of the factory                                                  |
| commonExperience  | string | No       | Digipair that shares common reasoning with all chatbots                    |

#### Example

```json
{
  "library": "@digipair/skill-web-chatbot",
  "element": "digipairChatbot",
  "properties": {
    "code": "digipair_identifier",
    "apiUrl": "https://example.com/api",
    "commonExperience": "common_digipair_identifier"
  }
}
```

## Notes

- The functions `digipairChatbotFull` and `digipairChatbot` are used to display a full-page chatbot and an embedded chatbot on a web page, respectively.
- Ensure to provide a valid digipair identifier for the `code` parameter.
- The `apiUrl` and `commonExperience` parameters are optional and allow you to configure the factory URL and share common reasoning among multiple chatbots.