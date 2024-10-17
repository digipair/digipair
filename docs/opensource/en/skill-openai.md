# @digipair/skill-openai

**Version:** 0.1.0  
**Summary:** Communication with OpenAI services  
**Description:** Execution of LLM models from OpenAI services.  
**Icon:** 🚀

## Table of Contents

- [Functions](#functions)
  - [model](#model)
  - [modelAzure](#modelAzure)
  - [embeddings](#embeddings)
  - [embeddingsAzure](#embeddingsAzure)

## Functions

### model

OpenAI LLM Model

#### Description

This function allows you to load and execute an LLM model from OpenAI services.

#### Parameters

| Name       | Type   | Required | Description                      |
|------------|--------|----------|----------------------------------|
| modelName  | string | No       | Name of the LLM model to load    |
| temperature| number | No       | Temperature of the LLM model     |
| baseUrl    | string | No       | Address of the OpenAI server     |
| apiKey     | string | No       | OpenAI API Key                   |

#### Example

```json
{
  "library": "@digipair/skill-openai",
  "element": "model",
  "properties": {
    "modelName": "text-davinci-003",
    "temperature": 0.7,
    "baseUrl": "https://api.openai.com",
    "apiKey": "your_api_key"
  }
}
```

### modelAzure

OpenAI LLM Model on Azure

#### Description

This function allows you to load and execute an LLM model from an Azure OpenAI instance.

#### Parameters

| Name                    | Type   | Required | Description                              |
|-------------------------|--------|----------|------------------------------------------|
| temperature             | number | No       | Temperature of the LLM model             |
| openAIApiKey           | string | No       | API Key of the Azure OpenAI instance     |
| openAIApiInstanceName   | string | No       | Name of the Azure OpenAI instance        |
| deploymentName          | string | Yes      | Name of the Azure OpenAI deployment      |
| openAIApiVersion        | string | No       | Version of the Azure OpenAI API          |

#### Example

```json
{
  "library": "@digipair/skill-openai",
  "element": "modelAzure",
  "properties": {
    "temperature": 0.7,
    "openAIApiKey": "your_api_key",
    "openAIApiInstanceName": "your_instance",
    "deploymentName": "your_deployment",
    "openAIApiVersion": "v1"
  }
}
```

### embeddings

OpenAI Embeddings Model

#### Description

This function allows you to load and execute an embeddings model from OpenAI services.

#### Parameters

| Name       | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| modelName  | string | No       | Name of the embeddings model to load |
| dimension  | number | No       | Dimension of the embeddings to load  |
| baseUrl    | string | No       | Address of the OpenAI server         |
| apiKey     | string | No       | OpenAI API Key                       |

#### Example

```json
{
  "library": "@digipair/skill-openai",
  "element": "embeddings",
  "properties": {
    "modelName": "text-embedding-ada-002",
    "dimension": 512,
    "baseUrl": "https://api.openai.com",
    "apiKey": "your_api_key"
  }
}
```

### embeddingsAzure

OpenAI Embeddings Model on Azure

#### Description

This function allows you to load and execute an embeddings model from an Azure OpenAI instance.

#### Parameters

| Name                    | Type   | Required | Description                              |
|-------------------------|--------|----------|------------------------------------------|
| dimension               | number | No       | Dimension of the embeddings to load      |
| openAIApiKey           | string | No       | API Key of the Azure OpenAI instance     |
| openAIApiInstanceName   | string | No       | Name of the Azure OpenAI instance        |
| deploymentName          | string | Yes      | Name of the Azure OpenAI deployment      |
| openAIApiVersion        | string | No       | Version of the Azure OpenAI API          |

#### Example

```json
{
  "library": "@digipair/skill-openai",
  "element": "embeddingsAzure",
  "properties": {
    "dimension": 512,
    "openAIApiKey": "your_api_key",
    "openAIApiInstanceName": "your_instance",
    "deploymentName": "your_deployment",
    "openAIApiVersion": "v1"
  }
}
```

## Notes

- The `model` and `modelAzure` functions are used to load and execute LLM models from OpenAI and Azure OpenAI services, respectively.
- The `embeddings` and `embeddingsAzure` functions are used to load and execute embeddings models from OpenAI and Azure OpenAI services, respectively.
- Make sure to provide the necessary API keys and other parameters for each function to ensure correct execution.