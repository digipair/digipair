# @digipair/skill-chatbot

**Version:** 0.1.0  
**Summary:** Communication avec le chatbot  
**Description:** La compétence permet de gérer la communication avec le chatbot.  
**Icon:** 🤖

## Table des matières

- [Fonctions](#fonctions)
  - [chatbot](#chatbot)
  - [find](#find)
  - [search](#search)
  - [history](#history)
  - [getRole](#getRole)
  - [setRole](#setRole)
  - [answer](#answer)

## Fonctions

### chatbot

Retourner au chatbot

#### Paramètres

| Nom            | Type   | Requis | Description                                    |
|----------------|--------|--------|------------------------------------------------|
| assistant      | string | Oui    | Réponse de l'assistant                         |
| command        | array  | Non    | Commande exécutée sur le chatbot               |
| sources        | array  | Non    | Liste des sources utilisées pour répondre      |
| logs           | object | Non    | Informations utiles pour déboguer le raisonnement |
| model          | array  | Non    | Modèle LLM à charger                           |
| embeddings     | array  | Non    | Modèle d'embeddings à charger                  |
| baseUrlVespa   | string | Non    | Url du serveur Vespa                           |
| promptSummary  | string | Non    | Prompt utilisé pour le résumé système          |

#### Exemple

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "chatbot",
  "properties": {
    "assistant": "réponse de l'assistant",
    "command": ["commande1", "commande2"],
    "sources": [{"source1": "value1"}],
    "logs": {"log1": "value1"},
    "model": ["model1"],
    "embeddings": ["embedding1"],
    "baseUrlVespa": "http://vespa.server",
    "promptSummary": "Résumé du prompt"
  }
}
```

### find

Récupérer des données dans l'historique de conversation

#### Paramètres

| Nom      | Type   | Requis | Description                |
|----------|--------|--------|----------------------------|
| limit    | number | Non    | Limite                     |
| orderby  | string | Non    | Ordre                      |
| query    | string | Oui    | Requête                    |
| baseUrl  | string | Non    | Url du serveur Vespa       |

#### Exemple

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "find",
  "properties": {
    "limit": 10,
    "orderby": "date",
    "query": "historique de conversation",
    "baseUrl": "http://vespa.server"
  }
}
```

### search

Rechercher des données dans l'historique de conversation

#### Paramètres

| Nom         | Type   | Requis | Description                |
|-------------|--------|--------|----------------------------|
| embeddings  | array  | Non    | Modèle d'embeddings à charger |
| limit       | number | Non    | Limite                     |
| orderby     | string | Non    | Ordre                      |
| targetHits  | number | Non    | Cibles de résultats        |
| query       | string | Oui    | Requête                    |
| baseUrl     | string | Non    | Url du serveur Vespa       |
| language    | string | Non    | Langue de recherche        |
| filter      | string | Non    | Filtre de recherche        |

#### Exemple

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "search",
  "properties": {
    "embeddings": ["embedding1"],
    "limit": 10,
    "orderby": "date",
    "targetHits": 5,
    "query": "recherche dans l'historique",
    "baseUrl": "http://vespa.server",
    "language": "fr",
    "filter": "type:message"
  }
}
```

### history

Historique

#### Paramètres

| Nom        | Type   | Requis | Description                |
|------------|--------|--------|----------------------------|
| baseUrl    | string | Non    | Url du serveur Vespa       |
| maxHistory | number | Non    | Nombre d'éléments maximum  |
| system     | string | Non    | Système                    |
| question   | string | Non    | Question de l'assistant    |

#### Exemple

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "history",
  "properties": {
    "baseUrl": "http://vespa.server",
    "maxHistory": 50,
    "system": "système1",
    "question": "question de l'assistant"
  }
}
```

### getRole

Récupération du rôle

#### Paramètres

| Nom      | Type   | Requis | Description                |
|----------|--------|--------|----------------------------|
| role     | string | Oui    | Nom du rôle                |
| baseUrl  | string | Non    | Url du serveur Vespa       |

#### Exemple

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "getRole",
  "properties": {
    "role": "nom_du_rôle",
    "baseUrl": "http://vespa.server"
  }
}
```

### setRole

Mise à jour du rôle

#### Paramètres

| Nom      | Type   | Requis | Description                |
|----------|--------|--------|----------------------------|
| role     | string | Oui    | Nom du rôle                |
| value    | string | Oui    | Valeur du rôle             |
| baseUrl  | string | Non    | Url du serveur Vespa       |

#### Exemple

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "setRole",
  "properties": {
    "role": "nom_du_rôle",
    "value": "valeur_du_rôle",
    "baseUrl": "http://vespa.server"
  }
}
```

### answer

Réponse du chatbot

#### Paramètres

| Nom        | Type   | Requis | Description                                    |
|------------|--------|--------|------------------------------------------------|
| assistant  | string | Oui    | Réponse de l'assistant                         |
| command    | array  | Non    | Commandes exécutées sur le chatbot             |
| boosts     | object | Non    | Liste des boosts proposés                      |
| sources    | array  | Non    | Liste des sources utilisées pour répondre      |
| logs       | object | Non    | Informations utiles pour déboguer le raisonnement |

#### Exemple

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "answer",
  "properties": {
    "assistant": "réponse de l'assistant",
    "command": ["commande1", "commande2"],
    "boosts": {"boost1": "value1"},
    "sources": [{"source1": "value1"}],
    "logs": {"log1": "value1"}
  }
}
```

## Notes

- Les fonctions `chatbot`, `find`, `search`, `history`, `getRole`, `setRole`, et `answer` sont utilisées pour interagir avec le chatbot et gérer les données de conversation.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.