# @digipair/skill-llm

**Version:** 0.1.0  
**Summary:** Lanchain  
**Description:** The `@digipair/skill-llm` skill enables the use of a large language model (LLM) for text generation, reasoning, vision (image and text analysis), and text summarization.  
**Icon:** 🚀

---

## Table of Contents

- [Functions](#functions)
  - [invoke](#invoke)
  - [reasoningStep](#reasoningstep)
  - [basic](#basic)
  - [vision](#vision)
  - [summarization](#summarization)
- [Notes](#notes)

---

## Functions

### invoke

Performs LLM-based reasoning on a sequence of actions and optional input data.

#### Parameters

| Name    | Type   | Required | Description                                |
| ------- | ------ | -------- | ------------------------------------------ |
| execute | array  | Yes      | List of actions to execute (pinsSettings). |
| input   | object | No       | Optional input data for reasoning.         |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "invoke",
  "properties": {
    "execute": [
      // List of pinsSettings objects
    ],
    "input": {
      // Optional input data
    }
  }
}
```

---

### reasoningStep

Executes a reasoning step with specific attributes.

#### Parameters

| Name       | Type  | Required | Description                                    |
| ---------- | ----- | -------- | ---------------------------------------------- |
| attributes | array | Yes      | List of reasoning step attributes (see below). |

**Structure of an attribute (`reasonningStepAttribute`):**

| Name  | Type   | Required | Description           |
| ----- | ------ | -------- | --------------------- |
| name  | string | Yes      | Name of the attribute |
| value | array  | Yes      | Value (pinsSettings)  |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "reasoningStep",
  "properties": {
    "attributes": [
      {
        "name": "example",
        "value": [
          // List of pinsSettings objects
        ]
      }
    ]
  }
}
```

---

### basic

Generates text from a prompt using an LLM.

#### Parameters

| Name   | Type   | Required | Description                        |
| ------ | ------ | -------- | ---------------------------------- |
| prompt | string | Yes      | Prompt to execute via the LLM      |
| model  | array  | No       | LLM model to load (pinsSettings)   |
| schema | object | No       | JSON schema of the data to extract |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "basic",
  "properties": {
    "prompt": "Explain the theory of relativity.",
    "model": [
      // List of pinsSettings objects
    ],
    "schema": {
      // Optional JSON schema
    }
  }
}
```

---

### vision

Uses an LLM model capable of analyzing images and text.

#### Parameters

| Name   | Type   | Required | Description                         |
| ------ | ------ | -------- | ----------------------------------- |
| model  | array  | No       | Vision model to load (pinsSettings) |
| prompt | string | Yes      | Prompt to execute on the LLM        |
| image  | string | Yes      | Base64-encoded image                |
| schema | object | No       | JSON schema of the data to extract  |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "vision",
  "properties": {
    "prompt": "Describe what you see in the image.",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "model": [
      // List of pinsSettings objects
    ],
    "schema": {
      // Optional JSON schema
    }
  }
}
```

---

### summarization

Summarizes text using an LLM model with various configuration options.

#### Parameters

| Name                    | Type    | Required | Description                      |
| ----------------------- | ------- | -------- | -------------------------------- |
| model                   | array   | No       | LLM model to load (pinsSettings) |
| chunkSize               | number  | No       | Size of text segments            |
| type                    | string  | No       | Summarization algorithm to use   |
| prompt                  | string  | Yes      | Text to summarize                |
| combineMapPrompt        | string  | No       | Map combination prompt           |
| combinePrompt           | string  | No       | Combination prompt               |
| returnIntermediateSteps | boolean | No       | Return intermediate steps        |
| refinePrompt            | string  | No       | Refinement prompt                |
| questionPrompt          | string  | No       | Question prompt                  |
| verbose                 | boolean | No       | Enable debug logs                |

#### Example

```json
{
  "library": "@digipair/skill-llm",
  "element": "summarization",
  "properties": {
    "prompt": "Here is a long text to summarize...",
    "model": [
      // List of pinsSettings objects
    ],
    "chunkSize": 500,
    "type": "map-reduce",
    "combineMapPrompt": "Intermediate summary:",
    "combinePrompt": "Final summary:",
    "returnIntermediateSteps": false,
    "refinePrompt": "Can you improve this summary?",
    "questionPrompt": "What are the main ideas?",
    "verbose": true
  }
}
```

---

## Notes

- The `pinsSettings` objects referenced in the parameters must follow the schema defined at [https://schemas.digipair.ai/pinsSettings](https://schemas.digipair.ai/pinsSettings).
- The functions in this library allow you to leverage the power of LLMs for various tasks: generation, reasoning, vision, and summarization.
- For each function, adapt the parameters according to your needs and the LLM model used.
- Optional fields can be omitted if not needed.
- For the `vision` function, the image must be base64-encoded.

---

**For any contributions or questions, please refer to the official documentation or open an issue on the project's GitHub repository.**
