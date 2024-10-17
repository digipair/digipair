# @digipair/skill-llm

**Version:** 0.1.0  
**Summary:** LLM Model Management  
**Description:** The @digipair/skill-llm skill allows the use of a large language model.  
**Icon:** 🚀

## Table of Contents

- [Functions](#functions)
  - [invoke](#invoke)
  - [reasoningStep](#reasoningStep)
  - [basic](#basic)
  - [vision](#vision)
  - [summarization](#summarization)

## Functions

### invoke

LLM Reasoning

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| execute  | array  | Yes      | Execute |
| input    | object | No       | Input data |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "invoke",
  "properties": {
    "execute": [
      // Content from https://schemas.digipair.ai/pinsSettings
    ],
    "input": {
      // Input data
    }
  }
}
```

### reasoningStep

Reasoning Step

#### Parameters

| Name        | Type  | Required | Description |
|-------------|-------|----------|-------------|
| attributes  | array | Yes      | Data |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "reasoningStep",
  "properties": {
    "attributes": [
      {
        "name": "exampleName",
        "value": [
          // Content from https://schemas.digipair.ai/pinsSettings
        ]
      }
    ]
  }
}
```

### basic

Generate

Text generation via an LLM model

#### Parameters

| Name    | Type   | Required | Description |
|---------|--------|----------|-------------|
| prompt  | string | Yes      | Prompt to execute via the LLM model |
| model   | array  | No       | LLM model to load |
| schema  | object | No       | JSON schema of the data to extract |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "basic",
  "properties": {
    "prompt": "Your prompt here",
    "model": [
      // Content from https://schemas.digipair.ai/pinsSettings
    ],
    "schema": {
      // JSON schema of the data to extract
    }
  }
}
```

### vision

See

Use an LLM model that can read images and text as input

#### Parameters

| Name    | Type   | Required | Description |
|---------|--------|----------|-------------|
| model   | array  | No       | Vision model to load |
| prompt  | string | Yes      | Prompt to execute on the LLM model |
| image   | string | Yes      | Base64 encoded image |
| schema  | object | No       | JSON schema of the data to extract |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "vision",
  "properties": {
    "model": [
      // Content from https://schemas.digipair.ai/pinsSettings
    ],
    "prompt": "Your prompt here",
    "image": "base64_encoded_image",
    "schema": {
      // JSON schema of the data to extract
    }
  }
}
```

### summarization

Summarize Text

Summarize text via an LLM model

#### Parameters

| Name                    | Type    | Required | Description |
|-------------------------|---------|----------|-------------|
| model                   | array   | No       | LLM model to load |
| chunkSize               | number  | No       | Size of text chunks |
| type                    | string  | No       | Algorithm to use for summarizing the text |
| prompt                  | string  | Yes      | Text to summarize |
| combineMapPrompt        | string  | No       | combineMapPrompt |
| combinePrompt           | string  | No       | combinePrompt |
| returnIntermediateSteps  | boolean | No       | returnIntermediateSteps |
| refinePrompt            | string  | No       | refinePrompt |
| questionPrompt          | string  | No       | questionPrompt |
| verbose                 | boolean | No       | Adds debug logs |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "summarization",
  "properties": {
    "model": [
      // Content from https://schemas.digipair.ai/pinsSettings
    ],
    "chunkSize": 1000,
    "type": "algorithm",
    "prompt": "Text to summarize",
    "combineMapPrompt": "Your combineMapPrompt here",
    "combinePrompt": "Your combinePrompt here",
    "returnIntermediateSteps": true,
    "refinePrompt": "Your refinePrompt here",
    "questionPrompt": "Your questionPrompt here",
    "verbose": true
  }
}
```

## Notes

- The functions `invoke`, `reasoningStep`, `basic`, `vision`, and `summarization` are used to interact with large language models (LLMs) for various tasks such as reasoning, text generation, image analysis, and text summarization.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.