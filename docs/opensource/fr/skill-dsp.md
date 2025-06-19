# @digipair/skill-dsp

**Version:** 0.1.0  
**Résumé:** LLM via DSP  
**Description:** La compétence permet de gérer la communication avec les LLMs selon le protocole Stanford DSP.  
**Icône:** 🚀

---

## Table des matières

- [Fonctions](#fonctions)
  - [model](#model)
  - [modelOpenAI](#modelopenai)
  - [modelAzureOpenAi](#modelazureopenai)
  - [modelOllama](#modelollama)
  - [generate](#generate)
  - [chainOfThought](#chainofthought)
  - [agent](#agent)
- [Schémas](#schémas)
  - [Function](#function)

---

## Fonctions

### model

Initialise un modèle LLM générique pour la génération ou le résumé système.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| name     | string  | Non    | Nom du modèle LLM à utiliser pour le résumé      |
| options  | object  | Non    | Options spécifiques du modèle LLM                |

#### Exemple

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

Initialise un modèle OpenAI pour la génération.

#### Paramètres

| Nom         | Type    | Requis | Description                                         |
|-------------|---------|--------|-----------------------------------------------------|
| apiKey      | string  | Non    | Clé API OpenAI                                      |
| apiURL      | object  | Non    | Adresse du serveur OpenAI                           |
| config      | object  | Non    | Configuration du modèle OpenAI                      |
| options     | object  | Non    | Options spécifiques du modèle OpenAI                |
| supportFor  | object  | Non    | Support de fonctionnalités spécifiques du modèle    |

#### Exemple

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

Initialise un modèle Azure OpenAI pour la génération.

#### Paramètres

| Nom            | Type    | Requis | Description                                         |
|----------------|---------|--------|-----------------------------------------------------|
| apiKey         | string  | Non    | Clé API Azure OpenAI                                |
| resourceName   | string  | Non    | Nom de la ressource Azure OpenAI                    |
| deploymentName | string  | Non    | Nom du déploiement Azure OpenAI                     |
| version        | string  | Non    | Version de l'API OpenAI                             |
| config         | object  | Non    | Configuration du modèle Azure OpenAI                |
| options        | object  | Non    | Options spécifiques du modèle Azure OpenAI          |

#### Exemple

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

Initialise un modèle Ollama pour la génération.

#### Paramètres

| Nom      | Type    | Requis | Description                                         |
|----------|---------|--------|-----------------------------------------------------|
| model    | string  | Oui    | Nom du modèle Ollama à utiliser pour la génération  |
| url      | string  | Non    | Adresse du serveur Ollama                           |
| apiKey   | string  | Non    | Clé API Ollama                                      |
| config   | object  | Non    | Configuration du modèle Ollama                      |
| options  | object  | Non    | Options spécifiques du modèle Ollama                |

#### Exemple

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

Génère une sortie à partir d'un modèle LLM selon le protocole DSP.

#### Paramètres

| Nom        | Type    | Requis | Description                                         |
|------------|---------|--------|-----------------------------------------------------|
| model      | array   | Non    | Modèle LLM à utiliser pour la génération            |
| streaming  | array   | Non    | Événement de streaming pour la génération           |
| signature  | string  | Oui    | Signature des données à extraire                    |
| input      | object  | Oui    | Données d'entrée à traiter                          |
| functions  | array   | Non    | Fonctions DSP utilisables pour la génération        |
| options    | object  | Non    | Options de génération                               |

#### Exemple

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
        "description": "Extrait les mots-clés",
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

Génère une chaîne de raisonnement (Chain of Thought) via DSP.

#### Paramètres

| Nom        | Type    | Requis | Description                                         |
|------------|---------|--------|-----------------------------------------------------|
| model      | array   | Non    | Modèle LLM à utiliser pour la génération            |
| streaming  | array   | Non    | Événement de streaming pour la génération           |
| signature  | string  | Oui    | Signature des données à extraire                    |
| input      | object  | Oui    | Données d'entrée à traiter                          |
| functions  | array   | Non    | Fonctions DSP utilisables pour la chaîne de pensée  |
| options    | object  | Non    | Options de génération                               |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "chainOfThought",
  "properties": {
    "model": [{ "name": "gpt-4" }],
    "streaming": [],
    "signature": "reasoning",
    "input": { "question": "Pourquoi le ciel est bleu ?" },
    "functions": [],
    "options": { "max_tokens": 512 }
  }
}
```

---

### agent

Crée un agent DSP pour la génération ou l'orchestration de tâches.

#### Paramètres

| Nom         | Type    | Requis | Description                                         |
|-------------|---------|--------|-----------------------------------------------------|
| model       | array   | Non    | Modèle LLM à utiliser pour la génération            |
| streaming   | array   | Non    | Événement de streaming pour la génération           |
| name        | string  | Oui    | Nom de l'agent                                      |
| description | string  | Oui    | Description de l'agent                              |
| signature   | string  | Oui    | Signature des données à extraire                    |
| input       | object  | Non    | Données d'entrée à traiter                          |
| functions   | array   | Non    | Fonctions DSP utilisables pour la génération        |
| agents      | array   | Non    | Autres agents utilisables par cet agent             |
| options     | object  | Non    | Options de génération                               |

#### Exemple

```json
{
  "library": "@digipair/skill-dsp",
  "element": "agent",
  "properties": {
    "model": [{ "name": "gpt-4" }],
    "streaming": [],
    "name": "assistant",
    "description": "Agent assistant pour la gestion des tâches",
    "signature": "task_management",
    "input": { "task": "Planifier une réunion" },
    "functions": [],
    "agents": [],
    "options": { "priority": "high" }
  }
}
```

---

## Schémas

### Function

Décrit une fonction DSP utilisable dans les paramètres `functions` des méthodes de génération.

| Propriété   | Type    | Requis | Description                        |
|-------------|---------|--------|------------------------------------|
| name        | string  | Oui    | Nom de la fonction                 |
| description | string  | Oui    | Description de la fonction         |
| parameters  | object  | Oui    | Paramètres de la fonction          |
| func        | array   | Oui    | Implémentation ou références DSP   |

#### Exemple

```json
{
  "name": "extractKeywords",
  "description": "Extrait les mots-clés d'un texte",
  "parameters": { "lang": "fr" },
  "func": []
}
```

---

## Notes

- Les fonctions de cette librairie permettent d'orchestrer différents modèles LLM (OpenAI, Azure, Ollama, etc.) via le protocole DSP.
- Les paramètres `model`, `streaming`, `functions`, et `agents` attendent généralement des objets ou tableaux conformes aux schémas DSP (voir documentation de la plateforme Digipair pour plus de détails).
- Les fonctions `generate`, `chainOfThought` et `agent` sont les points d'entrée principaux pour la génération, le raisonnement et l'orchestration d'agents via DSP.
- Les clés API et autres informations sensibles doivent être protégées et ne jamais être exposées côté client.

---

**Pour toute contribution ou question, consultez le dépôt officiel de la librairie.**