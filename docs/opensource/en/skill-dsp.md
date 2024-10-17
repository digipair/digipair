# @digipair/skill-dsp

**Version:** 0.1.0  
**Summary:** LLM via Stanford DSP  
**Description:** This skill manages communication with the LLM following the Stanford DSP.  
**Icon:** 🚀

## Table of Contents

- [Functions](#functions)
  - [model](#model)
  - [modelOpenAi](#modelopenai)
  - [modelAzureOpenAi](#modelazureopenai)
  - [modelOllama](#modelollama)
  - [generate](#generate)
  - [chainOfThought](#chainofthought)
  - [react](#react)
  - [agent](#agent)

## Functions

### model

Generic Model

#### Parameters

| Name    | Type   | Required | Description                          |
|---------|--------|----------|--------------------------------------|
| name    | string | No       | Name of the LLM model to use         |
| options | object | No       | Options for the LLM model            |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "model",
  "properties": {
    "name": "model_name",
    "options": {
      "option1": "value1"
    }
  }
}
```

### modelOpenAi

OpenAI Model

#### Parameters

| Name     | Type   | Required | Description                          |
|----------|--------|----------|--------------------------------------|
| apiKey   | string | No       | OpenAI API Key                       |
| apiURL   | object | No       | OpenAI server address                |
| config   | object | No       | Configuration for the OpenAI model   |
| options  | object | No       | Options for the OpenAI model         |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelOpenAi",
  "properties": {
    "apiKey": "your_api_key",
    "apiURL": {
      "url": "https://api.openai.com"
    },
    "config": {
      "param1": "value1"
    },
    "options": {
      "option1": "value1"
    }
  }
}
```

### modelAzureOpenAi

Azure OpenAI Model

#### Parameters

| Name            | Type   | Required | Description                          |
|----------------|--------|----------|--------------------------------------|
| apiKey         | string | No       | Azure OpenAI API Key                 |
| resourceName   | string | No       | Name of the Azure OpenAI resource    |
| deploymentName | string | No       | Name of the Azure OpenAI deployment   |
| version        | string | No       | OpenAI API version                   |
| config         | object | No       | Configuration for the OpenAI model   |
| options        | object | No       | Options for the OpenAI model         |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelAzureOpenAi",
  "properties": {
    "apiKey": "your_api_key",
    "resourceName": "resource_name",
    "deploymentName": "deployment_name",
    "version": "v1",
    "config": {
      "param1": "value1"
    },
    "options": {
      "option1": "value1"
    }
  }
}
```

### modelOllama

Ollama Model

#### Parameters

| Name    | Type   | Required | Description                          |
|---------|--------|----------|--------------------------------------|
| model   | string | Yes      | Name of the Ollama model to use      |
| url     | string | No       | Ollama server address                |
| apiKey  | string | No       | Ollama API Key                       |
| config  | object | No       | Configuration for the Ollama model   |
| options | object | No       | Options for the Ollama model         |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelOllama",
  "properties": {
    "model": "model_name",
    "url": "https://api.ollama.com",
    "apiKey": "your_api_key",
    "config": {
      "param1": "value1"
    },
    "options": {
      "option1": "value1"
    }
  }
}
```

### generate

DSP Generation

#### Parameters

| Name       | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| model      | array  | No       | LLM model to use                     |
| signature  | string | Yes      | Signature of the data to extract     |
| input      | object | Yes      | Input data to process                |
| functions  | array  | No       | Functions usable for generation       |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "generate",
  "properties": {
    "model": ["model1", "model2"],
    "signature": "data_signature",
    "input": {
      "data": "data_to_process"
    },
    "functions": [
      {
        "name": "function1",
        "description": "function_description",
        "parameters": {
          "param1": "value1"
        },
        "func": ["sub_function1"]
      }
    ]
  }
}
```

### chainOfThought

DSP Chain of Thought

#### Parameters

| Name       | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| model      | array  | No       | LLM model to use                     |
| signature  | string | Yes      | Signature of the data to extract     |
| input      | object | Yes      | Input data to process                |
| functions  | array  | No       | Functions usable for the chain of thought |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "chainOfThought",
  "properties": {
    "model": ["model1", "model2"],
    "signature": "data_signature",
    "input": {
      "data": "data_to_process"
    },
    "functions": [
      {
        "name": "function1",
        "description": "function_description",
        "parameters": {
          "param1": "value1"
        },
        "func": ["sub_function1"]
      }
    ]
  }
}
```

### react

ReAct DSP

#### Parameters

| Name       | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| model      | array  | No       | LLM model to use                     |
| signature  | string | Yes      | Signature of the data to extract     |
| input      | object | Yes      | Input data to process                |
| functions  | array  | No       | Functions usable for generation       |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "react",
  "properties": {
    "model": ["model1", "model2"],
    "signature": "data_signature",
    "input": {
      "data": "data_to_process"
    },
    "functions": [
      {
        "name": "function1",
        "description": "function_description",
        "parameters": {
          "param1": "value1"
        },
        "func": ["sub_function1"]
      }
    ]
  }
}
```

### agent

DSP Agent

#### Parameters

| Name       | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| model      | array  | No       | LLM model to use                     |
| name       | string | Yes      | Name of the agent                    |
| description| string | Yes      | Description of the agent             |
| signature  | string | Yes      | Signature of the data to extract     |
| input      | object | No       | Input data to process                |
| functions  | array  | No       | Functions usable for generation       |
| agents     | array  | No       | Other agents usable by the agent     |

#### Example

```json
{
  "library": "@digipair/skill-dsp",
  "element": "agent",
  "properties": {
    "model": ["model1", "model2"],
    "name": "agent_name",
    "description": "agent_description",
    "signature": "data_signature",
    "input": {
      "data": "data_to_process"
    },
    "functions": [
      {
        "name": "function1",
        "description": "function_description",
        "parameters": {
          "param1": "value1"
        },
        "func": ["sub_function1"]
      }
    ],
    "agents": ["agent1", "agent2"]
  }
}
```

## Notes

- The functions `model`, `modelOpenAi`, `modelAzureOpenAi`, `modelOllama`, `generate`, `chainOfThought`, `react`, and `agent` are used to interact with different LLM models and to generate responses following the Stanford DSP.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.