# @digipair/skill-chatbot

**Version:** 0.1.0  
**Résumé:** Communication avec le chatbot  
**Description:** La compétence permet de gérer la communication avec le chatbot.  
**Icône:** 🤖

---

## Table des matières

- [Fonctions](#fonctions)
  - [answer](#answer)
  - [execute](#execute)
- [Schémas de données](#schémas-de-données)
  - [Step](#step)
  - [Boost](#boost)
  - [ContextParameter](#contextparameter)
- [Notes](#notes)

---

## Fonctions

### answer

Générer une réponse du chatbot, incluant la réponse de l’assistant, les commandes exécutées, les boosts proposés, les sources utilisées, et d’autres informations contextuelles.

#### Paramètres

| Nom                | Type     | Requis | Description                                              |
|--------------------|----------|--------|----------------------------------------------------------|
| assistant          | string   | Oui    | Réponse de l’assistant                                   |
| command            | object[] | Non    | Commandes exécutées sur le chatbot                       |
| boosts             | object[] | Non    | Liste des boosts proposés                                |
| sources            | object[] | Non    | Liste des sources utilisées pour répondre à l’utilisateur|
| logs               | object   | Non    | Informations utiles pour le débogage                     |
| boost              | object   | Non    | Boost à exécuter en réponse à ce message                 |
| parent_conversation| string   | Non    | Conversation parente                                     |
| parent_history     | string   | Non    | Message parent                                           |
| session            | string   | Non    | Session                                                  |
| uuid               | string   | Non    | Identifiant du message                                   |

#### Exemple

```json
{
  "library": "@digipair/skill-chatbot",
  "element": "answer",
  "properties": {
    "assistant": "Bonjour, comment puis-je vous aider ?",
    "command": [{ "type": "search", "query": "informations" }],
    "boosts": [{ "selector": "#main", "step": "init" }],
    "sources": [{ "type": "document", "id": "doc-123" }],
    "logs": { "debug": "Aucune erreur détectée" },
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

Exécuter une étape d’un boost.

#### Paramètres

| Nom   | Type   | Requis | Description                        |
|-------|--------|--------|------------------------------------|
| step  | string | Oui    | Nom de l’étape à exécuter          |

#### Exemple

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

## Schémas de données

### Step

Décrit une étape d’un boost.

| Propriété | Type     | Requis | Description                |
|-----------|----------|--------|----------------------------|
| name      | string   | Oui    | Nom de l’étape             |
| execute   | object[] | Oui    | Actions à exécuter         |

#### Exemple

```json
{
  "name": "validation",
  "execute": [
    { "type": "check", "params": { "field": "email" } }
  ]
}
```

---

### Boost

Décrit un boost proposé ou exécuté.

| Propriété | Type     | Requis | Description                |
|-----------|----------|--------|----------------------------|
| prompt    | boolean  | Non    | Affiche un prompt utilisateur |
| required  | boolean  | Non    | Est requis                  |
| selector  | string   | Non    | Sélecteur CSS               |
| url       | string   | Non    | URL ou regex associée       |
| step      | string   | Non    | Étape associée              |
| inputs    | object[] | Non    | Entrées pour le boost       |

#### Exemple

```json
{
  "prompt": true,
  "required": false,
  "selector": "#main",
  "url": "https://example.com",
  "step": "init",
  "inputs": [
    { "type": "text", "name": "username" }
  ]
}
```

---

### ContextParameter

Paramètre de contexte utilisé dans les boosts.

| Propriété  | Type    | Requis | Description                |
|------------|---------|--------|----------------------------|
| name       | string  | Oui    | Nom du paramètre           |
| summary    | string  | Oui    | Résumé                     |
| required   | boolean | Oui    | Est requis                 |
| schema     | object  | Oui    | Schéma du paramètre        |
| description| string  | Non    | Description                |

#### Exemple

```json
{
  "name": "userId",
  "summary": "Identifiant utilisateur",
  "required": true,
  "schema": { "type": "string" },
  "description": "Identifiant unique de l'utilisateur"
}
```

---

## Notes

- Les fonctions `answer` et `execute` sont utilisées pour gérer la communication et l’exécution d’actions dans le chatbot.
- Les schémas `Step`, `Boost` et `ContextParameter` permettent de structurer les actions, les propositions et le contexte du chatbot.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir le bon fonctionnement de la librairie.
- Cette documentation s’applique à l’utilisation des fonctions JavaScript de la librairie, et non à une API HTTP.