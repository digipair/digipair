# @digipair/skill-chatbot

**Version:** 0.1.0  
**Summary:** Communication with the chatbot  
**Description:** This skill manages communication with the chatbot.  
**Icon:** 🤖

---

## Table of Contents

- [Functions](#functions)
  - [answer](#answer)
  - [execute](#execute)
- [Data Schemas](#data-schemas)
  - [Step](#step)
  - [Boost](#boost)
  - [ContextParameter](#contextparameter)
- [Notes](#notes)

---

## Functions

### answer

Generates a chatbot response, including the assistant’s reply, executed commands, suggested boosts, used sources, and other contextual information.

#### Parameters

| Name                | Type     | Required | Description                                  |
| ------------------- | -------- | -------- | -------------------------------------------- |
| assistant           | string   | Yes      | Assistant’s response                         |
| command             | object[] | No       | Commands executed on the chatbot             |
| boosts              | object[] | No       | List of suggested boosts                     |
| sources             | object[] | No       | List of sources used to answer the user      |
| logs                | object   | No       | Useful information for debugging             |
| boost               | object   | No       | Boost to execute in response to this message |
| parent_conversation | string   | No       | Parent conversation                          |
| parent_history      | string   | No       | Parent message                               |
| session             | string   | No       | Session                                      |
| uuid                | string   | No       | Message identifier                           |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "answer",
  "properties": {
    "assistant": "Hello, how can I help you?",
    "command": [{ "type": "search", "query": "information" }],
    "boosts": [{ "selector": "#main", "step": "init" }],
    "sources": [{ "type": "document", "id": "doc-123" }],
    "logs": { "debug": "No errors detected" },
    "boost": { "selector": "#main", "step": "init" },
    "parent_conversation": "conv-001",
    "parent_history": "msg-001",
    "session": "session-abc",
    "uuid": "uuid-xyz"
  }
}
```

---

### execute

Executes a step of a boost.

#### Parameters

| Name | Type   | Required | Description                 |
| ---- | ------ | -------- | --------------------------- |
| step | string | Yes      | Name of the step to execute |

#### Example

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "execute",
  "properties": {
    "step": "validation"
  }
}
```

---

## Data Schemas

### Step

Describes a step of a boost.

| Property | Type     | Required | Description        |
| -------- | -------- | -------- | ------------------ |
| name     | string   | Yes      | Name of the step   |
| execute  | object[] | Yes      | Actions to execute |

#### Example

```json
{
  "name": "validation",
  "execute": [{ "type": "check", "params": { "field": "email" } }]
}
```

---

### Boost

Describes a suggested or executed boost.

| Property | Type     | Required | Description             |
| -------- | -------- | -------- | ----------------------- |
| prompt   | boolean  | No       | Displays a user prompt  |
| required | boolean  | No       | Is required             |
| selector | string   | No       | CSS selector            |
| url      | string   | No       | Associated URL or regex |
| step     | string   | No       | Associated step         |
| inputs   | object[] | No       | Inputs for the boost    |

#### Example

```json
{
  "prompt": true,
  "required": false,
  "selector": "#main",
  "url": "https://example.com",
  "step": "init",
  "inputs": [{ "type": "text", "name": "username" }]
}
```

---

### ContextParameter

Context parameter used in boosts.

| Property    | Type    | Required | Description      |
| ----------- | ------- | -------- | ---------------- |
| name        | string  | Yes      | Parameter name   |
| summary     | string  | Yes      | Summary          |
| required    | boolean | Yes      | Is required      |
| schema      | object  | Yes      | Parameter schema |
| description | string  | No       | Description      |

#### Example

```json
{
  "name": "userId",
  "summary": "User identifier",
  "required": true,
  "schema": { "type": "string" },
  "description": "Unique user identifier"
}
```

---

## Notes

- The `answer` and `execute` functions are used to manage communication and action execution within the chatbot.
- The `Step`, `Boost`, and `ContextParameter` schemas are used to structure actions, suggestions, and context for the chatbot.
- Make sure to provide all required parameters for each function to ensure the library works correctly.
- This documentation applies to the usage of the library’s JavaScript functions, not to an HTTP API.
