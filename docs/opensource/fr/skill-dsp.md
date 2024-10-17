# @digipair/skill-dsp

**Version:** 0.1.0  
**Summary:** LLM via DSP de Stanford  
**Description:** La compétence permet de gérer la communication avec le LLM en suivant le DSP de Stanford.  
**Icon:** 🚀

## Table des matières

- [Fonctions](#fonctions)
  - [model](#model)
  - [modelOpenAi](#modelopenai)
  - [modelAzureOpenAi](#modelazureopenai)
  - [modelOllama](#modelollama)
  - [generate](#generate)
  - [chainOfThought](#chainofthought)
  - [react](#react)
  - [agent](#agent)

## Fonctions

### model

Modèle Générique

#### Paramètres

| Nom     | Type   | Requis | Description                          |
|---------|--------|--------|--------------------------------------|
| name    | string | Non    | Nom du model LLM à utiliser          |
| options | object | Non    | Options du modèle LLM                |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "model",
  "properties": {
    "name": "nom_du_model",
    "options": {
      "option1": "valeur1"
    }
  }
}
```

### modelOpenAi

Modèle OpenAI

#### Paramètres

| Nom      | Type   | Requis | Description                          |
|----------|--------|--------|--------------------------------------|
| apiKey   | string | Non    | Api Key OpenAI                       |
| apiURL   | object | Non    | Adresse du serveur OpenAI            |
| config   | object | Non    | Configuration du modèle OpenAI       |
| options  | object | Non    | Options du modèle OpenAI             |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelOpenAi",
  "properties": {
    "apiKey": "votre_api_key",
    "apiURL": {
      "url": "https://api.openai.com"
    },
    "config": {
      "param1": "valeur1"
    },
    "options": {
      "option1": "valeur1"
    }
  }
}
```

### modelAzureOpenAi

Modèle Azure OpenAI

#### Paramètres

| Nom            | Type   | Requis | Description                          |
|----------------|--------|--------|--------------------------------------|
| apiKey         | string | Non    | Api Key Azure OpenAI                 |
| resourceName   | string | Non    | Nom de la ressource Azure OpenAI     |
| deploymentName | string | Non    | Nom du déploiement Azure OpenAI      |
| version        | string | Non    | Version d'API OpenAI                 |
| config         | object | Non    | Configuration du modèle OpenAI       |
| options        | object | Non    | Options du modèle OpenAI             |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelAzureOpenAi",
  "properties": {
    "apiKey": "votre_api_key",
    "resourceName": "nom_de_la_ressource",
    "deploymentName": "nom_du_deploiement",
    "version": "v1",
    "config": {
      "param1": "valeur1"
    },
    "options": {
      "option1": "valeur1"
    }
  }
}
```

### modelOllama

Modèle Ollama

#### Paramètres

| Nom     | Type   | Requis | Description                          |
|---------|--------|--------|--------------------------------------|
| model   | string | Oui    | Nom du modèle Ollama à utiliser      |
| url     | string | Non    | Adresse du serveur Ollama            |
| apiKey  | string | Non    | Api Key Ollama                       |
| config  | object | Non    | Configuration du modèle Ollama       |
| options | object | Non    | Options du modèle Ollama             |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "modelOllama",
  "properties": {
    "model": "nom_du_model",
    "url": "https://api.ollama.com",
    "apiKey": "votre_api_key",
    "config": {
      "param1": "valeur1"
    },
    "options": {
      "option1": "valeur1"
    }
  }
}
```

### generate

Génération DSP

#### Paramètres

| Nom       | Type   | Requis | Description                          |
|-----------|--------|--------|--------------------------------------|
| model     | array  | Non    | Modèle LLM à utiliser                |
| signature | string | Oui    | Signature des données à extraire     |
| input     | object | Oui    | Données d'entrées à traiter          |
| functions | array  | Non    | Fonctions utilisables pour la génération |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "generate",
  "properties": {
    "model": ["model1", "model2"],
    "signature": "signature_des_donnees",
    "input": {
      "data": "données_à_traiter"
    },
    "functions": [
      {
        "name": "fonction1",
        "description": "description_de_la_fonction",
        "parameters": {
          "param1": "valeur1"
        },
        "func": ["sous_fonction1"]
      }
    ]
  }
}
```

### chainOfThought

Chaine de pensée DSP

#### Paramètres

| Nom       | Type   | Requis | Description                          |
|-----------|--------|--------|--------------------------------------|
| model     | array  | Non    | Modèle LLM à utiliser                |
| signature | string | Oui    | Signature des données à extraire     |
| input     | object | Oui    | Données d'entrées à traiter          |
| functions | array  | Non    | Fonctions utilisables pour la chaine de pensée |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "chainOfThought",
  "properties": {
    "model": ["model1", "model2"],
    "signature": "signature_des_donnees",
    "input": {
      "data": "données_à_traiter"
    },
    "functions": [
      {
        "name": "fonction1",
        "description": "description_de_la_fonction",
        "parameters": {
          "param1": "valeur1"
        },
        "func": ["sous_fonction1"]
      }
    ]
  }
}
```

### react

ReAct DSP

#### Paramètres

| Nom       | Type   | Requis | Description                          |
|-----------|--------|--------|--------------------------------------|
| model     | array  | Non    | Modèle LLM à utiliser                |
| signature | string | Oui    | Signature des données à extraire     |
| input     | object | Oui    | Données d'entrées à traiter          |
| functions | array  | Non    | Fonctions utilisables pour la génération |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "react",
  "properties": {
    "model": ["model1", "model2"],
    "signature": "signature_des_donnees",
    "input": {
      "data": "données_à_traiter"
    },
    "functions": [
      {
        "name": "fonction1",
        "description": "description_de_la_fonction",
        "parameters": {
          "param1": "valeur1"
        },
        "func": ["sous_fonction1"]
      }
    ]
  }
}
```

### agent

Agent DSP

#### Paramètres

| Nom       | Type   | Requis | Description                          |
|-----------|--------|--------|--------------------------------------|
| model     | array  | Non    | Modèle LLM à utiliser                |
| name      | string | Oui    | Nom de l'agent                       |
| description | string | Oui  | Description de l'agent               |
| signature | string | Oui    | Signature des données à extraire     |
| input     | object | Non    | Données d'entrées à traiter          |
| functions | array  | Non    | Fonctions utilisables pour la génération |
| agents    | array  | Non    | Autres agents utilisables par l'agent |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "agent",
  "properties": {
    "model": ["model1", "model2"],
    "name": "nom_de_l_agent",
    "description": "description_de_l_agent",
    "signature": "signature_des_donnees",
    "input": {
      "data": "données_à_traiter"
    },
    "functions": [
      {
        "name": "fonction1",
        "description": "description_de_la_fonction",
        "parameters": {
          "param1": "valeur1"
        },
        "func": ["sous_fonction1"]
      }
    ],
    "agents": ["agent1", "agent2"]
  }
}
```

## Notes

- Les fonctions `model`, `modelOpenAi`, `modelAzureOpenAi`, `modelOllama`, `generate`, `chainOfThought`, `react`, et `agent` sont utilisées pour interagir avec différents modèles LLM et pour générer des réponses en suivant le DSP de Stanford.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.