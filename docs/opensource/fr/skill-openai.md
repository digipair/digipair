# @digipair/skill-openai

**Version:** 0.1.0  
**Summary:** Communication avec les services d'OpenAI  
**Description:** Exécution des models LLM depuis les services d'OpenAI.  
**Icon:** 🚀

## Table des matières

- [Fonctions](#fonctions)
  - [model](#model)
  - [modelAzure](#modelAzure)
  - [embeddings](#embeddings)
  - [embeddingsAzure](#embeddingsAzure)

## Fonctions

### model

Modèle LLM OpenAI

#### Description

Cette fonction permet de charger et d'exécuter un modèle LLM depuis les services d'OpenAI.

#### Paramètres

| Nom       | Type   | Requis | Description                      |
|-----------|--------|--------|----------------------------------|
| modelName | string | Non    | Nom du modèle LLM à charger      |
| temperature| number | Non    | Temperature du modèle LLM        |
| baseUrl   | string | Non    | Adresse du serveur OpenAI        |
| apiKey    | string | Non    | Api Key OpenAI                   |

#### Exemple

```json
{
  "library": "@digipair/skill-openai",
  "element": "model",
  "properties": {
    "modelName": "text-davinci-003",
    "temperature": 0.7,
    "baseUrl": "https://api.openai.com",
    "apiKey": "votre_api_key"
  }
}
```

### modelAzure

Modèle LLM OpenAI sur Azure

#### Description

Cette fonction permet de charger et d'exécuter un modèle LLM depuis une instance Azure OpenAI.

#### Paramètres

| Nom                    | Type   | Requis | Description                              |
|------------------------|--------|--------|------------------------------------------|
| temperature            | number | Non    | Temperature du modèle LLM                |
| openAIApiKey           | string | Non    | API Key de l'instance Azure OpenAI       |
| openAIApiInstanceName  | string | Non    | Nom de l'instance Azure OpenAI           |
| deploymentName         | string | Oui    | Nom du déploiement Azure OpenAI          |
| openAIApiVersion       | string | Non    | Version de l'API Azure OpenAI            |

#### Exemple

```json
{
  "library": "@digipair/skill-openai",
  "element": "modelAzure",
  "properties": {
    "temperature": 0.7,
    "openAIApiKey": "votre_api_key",
    "openAIApiInstanceName": "votre_instance",
    "deploymentName": "votre_deploiement",
    "openAIApiVersion": "v1"
  }
}
```

### embeddings

Modèle d'embeddings OpenAI

#### Description

Cette fonction permet de charger et d'exécuter un modèle d'embeddings depuis les services d'OpenAI.

#### Paramètres

| Nom       | Type   | Requis | Description                          |
|-----------|--------|--------|--------------------------------------|
| modelName | string | Non    | Nom du modèle d'embeddings à charger |
| dimension | number | Non    | Dimension de l'embeddings à charger  |
| baseUrl   | string | Non    | Adresse du serveur OpenAI            |
| apiKey    | string | Non    | Api Key OpenAI                       |

#### Exemple

```json
{
  "library": "@digipair/skill-openai",
  "element": "embeddings",
  "properties": {
    "modelName": "text-embedding-ada-002",
    "dimension": 512,
    "baseUrl": "https://api.openai.com",
    "apiKey": "votre_api_key"
  }
}
```

### embeddingsAzure

Modèle d'embeddings OpenAI sur Azure

#### Description

Cette fonction permet de charger et d'exécuter un modèle d'embeddings depuis une instance Azure OpenAI.

#### Paramètres

| Nom                    | Type   | Requis | Description                              |
|------------------------|--------|--------|------------------------------------------|
| dimension              | number | Non    | Dimension de l'embeddings à charger      |
| openAIApiKey           | string | Non    | API Key de l'instance Azure OpenAI       |
| openAIApiInstanceName  | string | Non    | Nom de l'instance Azure OpenAI           |
| deploymentName         | string | Oui    | Nom du déploiement Azure OpenAI          |
| openAIApiVersion       | string | Non    | Version de l'API Azure OpenAI            |

#### Exemple

```json
{
  "library": "@digipair/skill-openai",
  "element": "embeddingsAzure",
  "properties": {
    "dimension": 512,
    "openAIApiKey": "votre_api_key",
    "openAIApiInstanceName": "votre_instance",
    "deploymentName": "votre_deploiement",
    "openAIApiVersion": "v1"
  }
}
```

## Notes

- Les fonctions `model` et `modelAzure` sont utilisées pour charger et exécuter des modèles LLM depuis les services d'OpenAI et Azure OpenAI respectivement.
- Les fonctions `embeddings` et `embeddingsAzure` sont utilisées pour charger et exécuter des modèles d'embeddings depuis les services d'OpenAI et Azure OpenAI respectivement.
- Assurez-vous de fournir les clés API et autres paramètres nécessaires pour chaque fonction afin de garantir une exécution correcte.