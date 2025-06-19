# @digipair/skill-dsp

**Version:** 0.1.0  
**Summary:** LLM via DSP  
**Description:** This skill enables communication with LLMs using the Stanford DSP protocol.  
**Icon:** 🚀

---

## Table of Contents

- [Functions](#functions)
  - [model](#model)
  - [modelOpenAI](#modelopenai)
  - [modelAzureOpenAi](#modelazureopenai)
  - [modelOllama](#modelollama)
  - [generate](#generate)
  - [chainOfThought](#chainofthought)
  - [agent](#agent)
- [Schemas](#schemas)
  - [Function](#function)

---

## Functions

### model

Initializes a generic LLM model for system generation or summarization.

#### Parameters

| Name    | Type   | Required | Description                                    |
| ------- | ------ | -------- | ---------------------------------------------- |
| name    | string | No       | Name of the LLM model to use for summarization |
| options | object | No       | Specific options for the LLM model             |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "model",
  "properties": {
    "name": "gpt-neo-2.7B",
    "options": {
      "temperature": 0.7
    }
  }
}
```

---

### modelOpenAI

Initializes an OpenAI model for generation.

#### Parameters

| Name       | Type   | Required | Description                           |
| ---------- | ------ | -------- | ------------------------------------- |
| apiKey     | string | No       | OpenAI API key                        |
| apiURL     | object | No       | OpenAI server address                 |
| config     | object | No       | OpenAI model configuration            |
| options    | object | No       | Specific options for the OpenAI model |
| supportFor | object | No       | Support for specific model features   |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelOpenAI",
  "properties": {
    "apiKey": "sk-xxxx",
    "apiURL": "https://api.openai.com/v1",
    "config": {
      "model": "gpt-3.5-turbo"
    },
    "options": {
      "temperature": 0.5
    },
    "supportFor": {
      "functions": true
    }
  }
}
```

---

### modelAzureOpenAi

Initializes an Azure OpenAI model for generation.

#### Parameters

| Name           | Type   | Required | Description                                 |
| -------------- | ------ | -------- | ------------------------------------------- |
| apiKey         | string | No       | Azure OpenAI API key                        |
| resourceName   | string | No       | Azure OpenAI resource name                  |
| deploymentName | string | No       | Azure OpenAI deployment name                |
| version        | string | No       | OpenAI API version                          |
| config         | object | No       | Azure OpenAI model configuration            |
| options        | object | No       | Specific options for the Azure OpenAI model |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelAzureOpenAi",
  "properties": {
    "apiKey": "az-xxxx",
    "resourceName": "my-azure-resource",
    "deploymentName": "gpt4-deployment",
    "version": "2023-05-15",
    "config": {
      "model": "gpt-4"
    },
    "options": {
      "max_tokens": 1024
    }
  }
}
```

---

### modelOllama

Initializes an Ollama model for generation.

#### Parameters

| Name    | Type   | Required | Description                                    |
| ------- | ------ | -------- | ---------------------------------------------- |
| model   | string | Yes      | Name of the Ollama model to use for generation |
| url     | string | No       | Ollama server address                          |
| apiKey  | string | No       | Ollama API key                                 |
| config  | object | No       | Ollama model configuration                     |
| options | object | No       | Specific options for the Ollama model          |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelOllama",
  "properties": {
    "model": "llama2",
    "url": "http://localhost:11434",
    "apiKey": "ol-xxxx",
    "config": {
      "context_window": 2048
    },
    "options": {
      "temperature": 0.2
    }
  }
}
```

---

### generate

Generates an output from an LLM model using the DSP protocol.

#### Parameters

| Name      | Type   | Required | Description                            |
| --------- | ------ | -------- | -------------------------------------- |
| model     | array  | No       | LLM model to use for generation        |
| streaming | array  | No       | Streaming event for generation         |
| signature | string | Yes      | Signature of the data to extract       |
| input     | object | Yes      | Input data to process                  |
| functions | array  | No       | DSP functions available for generation |
| options   | object | No       | Generation options                     |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "generate",
  "properties": {
    "model": [{ "name": "gpt-3.5-turbo" }],
    "streaming": [],
    "signature": "summary",
    "input": { "text": "Le soleil brille." },
    "functions": [
      {
        "name": "extractKeywords",
        "description": "Extracts keywords",
        "parameters": { "lang": "fr" },
        "func": []
      }
    ],
    "options": { "temperature": 0.7 }
  }
}
```

---

### chainOfThought

Generates a Chain of Thought via DSP.

#### Parameters

| Name      | Type   | Required | Description                                  |
| --------- | ------ | -------- | -------------------------------------------- |
| model     | array  | No       | LLM model to use for generation              |
| streaming | array  | No       | Streaming event for generation               |
| signature | string | Yes      | Signature of the data to extract             |
| input     | object | Yes      | Input data to process                        |
| functions | array  | No       | DSP functions available for chain of thought |
| options   | object | No       | Generation options                           |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "chainOfThought",
  "properties": {
    "model": [{ "name": "gpt-4" }],
    "streaming": [],
    "signature": "reasoning",
    "input": { "question": "Why is the sky blue?" },
    "functions": [],
    "options": { "max_tokens": 512 }
  }
}
```

---

### agent

Creates a DSP agent for generation or task orchestration.

#### Parameters

| Name        | Type   | Required | Description                            |
| ----------- | ------ | -------- | -------------------------------------- |
| model       | array  | No       | LLM model to use for generation        |
| streaming   | array  | No       | Streaming event for generation         |
| name        | string | Yes      | Agent name                             |
| description | string | Yes      | Agent description                      |
| signature   | string | Yes      | Signature of the data to extract       |
| input       | object | No       | Input data to process                  |
| functions   | array  | No       | DSP functions available for generation |
| agents      | array  | No       | Other agents usable by this agent      |
| options     | object | No       | Generation options                     |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "agent",
  "properties": {
    "model": [{ "name": "gpt-4" }],
    "streaming": [],
    "name": "assistant",
    "description": "Assistant agent for task management",
    "signature": "task_management",
    "input": { "task": "Schedule a meeting" },
    "functions": [],
    "agents": [],
    "options": { "priority": "high" }
  }
}
```

---

## Schemas

### Function

Describes a DSP function usable in the `functions` parameter of generation methods.

| Property    | Type   | Required | Description                      |
| ----------- | ------ | -------- | -------------------------------- |
| name        | string | Yes      | Function name                    |
| description | string | Yes      | Function description             |
| parameters  | object | Yes      | Function parameters              |
| func        | array  | Yes      | Implementation or DSP references |

#### Example

```json
{
  "name": "extractKeywords",
  "description": "Extracts keywords from a text",
  "parameters": { "lang": "fr" },
  "func": []
}
```

---

## Notes

- The functions in this library allow orchestration of various LLM models (OpenAI, Azure, Ollama, etc.) via the DSP protocol.
- The `model`, `streaming`, `functions`, and `agents` parameters generally expect objects or arrays conforming to DSP schemas (see the Digipair platform documentation for more details).
- The `generate`, `chainOfThought`, and `agent` functions are the main entry points for generation, reasoning, and agent orchestration via DSP.
- API keys and other sensitive information must be protected and never exposed on the client side.

---

**For any contributions or questions, please refer to the official library repository.**
