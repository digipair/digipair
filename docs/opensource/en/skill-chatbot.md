# @digipair/skill-chatbot

**Version:** 0.1.0  
**Summary:** Communication with the chatbot  
**Description:** This skill manages communication with the chatbot.  
**Icon:** 🤖

## Table of Contents

- [Functions](#functions)
  - [chatbot](#chatbot)
  - [find](#find)
  - [search](#search)
  - [history](#history)
  - [getRole](#getRole)
  - [setRole](#setRole)
  - [answer](#answer)

## Functions

### chatbot

Return to the chatbot

#### Parameters

| Name           | Type    | Required | Description                                    |
|----------------|---------|----------|------------------------------------------------|
| assistant      | string  | Yes      | Assistant's response                           |
| command        | array   | No       | Commands executed on the chatbot               |
| sources        | array   | No       | List of sources used to respond                |
| logs           | object  | No       | Useful information for debugging reasoning      |
| model          | array   | No       | LLM model to load                              |
| embeddings     | array   | No       | Embedding model to load                        |
| baseUrlVespa  | string  | No       | URL of the Vespa server                        |
| promptSummary  | string  | No       | Prompt used for system summary                 |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "chatbot",
  "properties": {
    "assistant": "assistant's response",
    "command": ["command1", "command2"],
    "sources": [{"source1": "value1"}],
    "logs": {"log1": "value1"},
    "model": ["model1"],
    "embeddings": ["embedding1"],
    "baseUrlVespa": "http://vespa.server",
    "promptSummary": "Prompt summary"
  }
}
```

### find

Retrieve data from conversation history

#### Parameters

| Name      | Type    | Required | Description                |
|-----------|---------|----------|----------------------------|
| limit     | number  | No       | Limit                      |
| orderby   | string  | No       | Order                      |
| query     | string  | Yes      | Query                      |
| baseUrl   | string  | No       | URL of the Vespa server    |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "find",
  "properties": {
    "limit": 10,
    "orderby": "date",
    "query": "conversation history",
    "baseUrl": "http://vespa.server"
  }
}
```

### search

Search for data in conversation history

#### Parameters

| Name        | Type    | Required | Description                |
|-------------|---------|----------|----------------------------|
| embeddings  | array   | No       | Embedding model to load    |
| limit       | number  | No       | Limit                      |
| orderby     | string  | No       | Order                      |
| targetHits  | number  | No       | Target hits                |
| query       | string  | Yes      | Query                      |
| baseUrl     | string  | No       | URL of the Vespa server    |
| language    | string  | No       | Search language            |
| filter      | string  | No       | Search filter              |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "search",
  "properties": {
    "embeddings": ["embedding1"],
    "limit": 10,
    "orderby": "date",
    "targetHits": 5,
    "query": "search in history",
    "baseUrl": "http://vespa.server",
    "language": "fr",
    "filter": "type:message"
  }
}
```

### history

History

#### Parameters

| Name        | Type    | Required | Description                |
|-------------|---------|----------|----------------------------|
| baseUrl     | string  | No       | URL of the Vespa server    |
| maxHistory  | number  | No       | Maximum number of items    |
| system      | string  | No       | System                     |
| question    | string  | No       | Assistant's question        |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "history",
  "properties": {
    "baseUrl": "http://vespa.server",
    "maxHistory": 50,
    "system": "system1",
    "question": "assistant's question"
  }
}
```

### getRole

Retrieve role

#### Parameters

| Name      | Type    | Required | Description                |
|-----------|---------|----------|----------------------------|
| role      | string  | Yes      | Role name                  |
| baseUrl   | string  | No       | URL of the Vespa server    |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "getRole",
  "properties": {
    "role": "role_name",
    "baseUrl": "http://vespa.server"
  }
}
```

### setRole

Update role

#### Parameters

| Name      | Type    | Required | Description                |
|-----------|---------|----------|----------------------------|
| role      | string  | Yes      | Role name                  |
| value     | string  | Yes      | Role value                 |
| baseUrl   | string  | No       | URL of the Vespa server    |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "setRole",
  "properties": {
    "role": "role_name",
    "value": "role_value",
    "baseUrl": "http://vespa.server"
  }
}
```

### answer

Chatbot response

#### Parameters

| Name        | Type    | Required | Description                                    |
|-------------|---------|----------|------------------------------------------------|
| assistant   | string  | Yes      | Assistant's response                           |
| command     | array   | No       | Commands executed on the chatbot               |
| boosts      | object  | No       | List of proposed boosts                        |
| sources     | array   | No       | List of sources used to respond                |
| logs        | object  | No       | Useful information for debugging reasoning      |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "answer",
  "properties": {
    "assistant": "assistant's response",
    "command": ["command1", "command2"],
    "boosts": {"boost1": "value1"},
    "sources": [{"source1": "value1"}],
    "logs": {"log1": "value1"}
  }
}
```

## Notes

- The functions `chatbot`, `find`, `search`, `history`, `getRole`, `setRole`, and `answer` are used to interact with the chatbot and manage conversation data.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.