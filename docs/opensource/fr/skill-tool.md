# @digipair/skill-tool

**Version:** 0.1.0  
**Summary:** Tool  
**Description:** Digitool actions and triggers.  
**Icon:** 🛠

## Table des matières

- [Fonctions](#fonctions)
  - [stop](#stop)
  - [keepAlive](#keepalive)
  - [execute](#execute)
- [Blocs de scène](#blocs-de-scène)
  - [task](#task)
  - [action](#action)
  - [trigger](#trigger)
- [Schémas](#schémas)
  - [Parameter](#parameter)

---

## Fonctions

### stop

Arrête le raisonnement en cours.

#### Description

Permet d'arrêter le processus de raisonnement en cours. Peut éventuellement retourner une valeur personnalisée.

#### Paramètres

| Nom   | Type   | Requis | Description           |
|-------|--------|--------|-----------------------|
| value | object | Non    | Valeur à retourner    |

#### Exemple

```json
{
  "library": "@digipair/skill-tool",
  "element": "stop",
  "properties": {
    "value": {
      "message": "Arrêt demandé"
    }
  }
}
```

---

### keepAlive

Maintient le raisonnement actif.

#### Description

Permet de signaler que le raisonnement doit rester actif. Cette fonction ne prend aucun paramètre.

#### Paramètres

Aucun.

#### Exemple

```json
{
  "library": "@digipair/skill-tool",
  "element": "keepAlive",
  "properties": {}
}
```

---

### execute

Exécute une ou plusieurs actions Pin avec un contexte donné.

#### Description

Permet d'exécuter une liste d'actions (Pins) en leur fournissant un contexte d'exécution optionnel.

#### Paramètres

| Nom      | Type   | Requis | Description                |
|----------|--------|--------|----------------------------|
| execute  | array  | Oui    | Actions à exécuter (Pins)  |
| context  | object | Non    | Contexte d'exécution       |

- **execute** : Tableau d'actions à exécuter, chaque action doit suivre le schéma `pinsSettings`.
- **context** : Objet optionnel contenant le contexte d'exécution.

#### Exemple

```json
{
  "library": "@digipair/skill-tool",
  "element": "execute",
  "properties": {
    "execute": [
      {
        "pinId": "action1",
        "params": { "foo": "bar" }
      }
    ],
    "context": {
      "userId": "12345"
    }
  }
}
```

---

## Blocs de scène

### task

Exécution d'une tâche.

#### Description

Permet d'exécuter une ou plusieurs commandes dans le cadre d'une tâche.

#### Paramètres

| Nom     | Type  | Requis | Description              |
|---------|-------|--------|--------------------------|
| execute | array | Oui    | Commandes à exécuter     |

#### Exemple

```json
{
  "library": "@digipair/skill-tool",
  "element": "task",
  "properties": {
    "execute": [
      {
        "pinId": "cmd1",
        "params": { "foo": "bar" }
      }
    ]
  }
}
```

---

### action

Action exécutable.

#### Description

Définit une action pouvant être exécutée, avec des paramètres d'entrée et un contexte d'exécution optionnel.

#### Métadonnées

| Nom        | Type   | Requis | Description                |
|------------|--------|--------|----------------------------|
| parameters | array  | Oui    | Paramètres d'entrée        |
| context    | bool   | Non    | Afficher le contexte d'exécution |

#### Paramètres

| Nom     | Type  | Requis | Description              |
|---------|-------|--------|--------------------------|
| execute | array | Oui    | Commandes à exécuter     |

#### Exemple

```json
{
  "library": "@digipair/skill-tool",
  "element": "action",
  "properties": {
    "execute": [
      {
        "pinId": "cmd2",
        "params": { "foo": "bar" }
      }
    ]
  }
}
```

---

### trigger

Déclencheur exécutable.

#### Description

Définit un déclencheur pouvant être exécuté, avec des tags et des paramètres d'entrée.

#### Métadonnées

| Nom        | Type   | Requis | Description                |
|------------|--------|--------|----------------------------|
| tags       | array  | Oui    | Tags du déclencheur        |
| parameters | array  | Oui    | Paramètres d'entrée        |

#### Paramètres

| Nom     | Type  | Requis | Description              |
|---------|-------|--------|--------------------------|
| execute | array | Oui    | Commandes à exécuter     |

#### Exemple

```json
{
  "library": "@digipair/skill-tool",
  "element": "trigger",
  "properties": {
    "execute": [
      {
        "pinId": "cmd3",
        "params": { "foo": "bar" }
      }
    ]
  }
}
```

---

## Schémas

### Parameter

Décrit un paramètre d'entrée pour une action ou un déclencheur.

| Propriété    | Type    | Requis | Description                |
|--------------|---------|--------|----------------------------|
| name         | string  | Oui    | Nom du paramètre           |
| summary      | string  | Oui    | Résumé                     |
| required     | boolean | Oui    | Indique si requis          |
| ignoreForAI  | boolean | Non    | À ignorer pour l'IA        |
| schema       | object  | Oui    | Schéma du paramètre        |
| description  | string  | Non    | Description                |

---

## Notes

- Les fonctions et blocs de scène de `@digipair/skill-tool` permettent de piloter des actions, tâches et déclencheurs dans un environnement digital.
- Les paramètres de type `execute` attendent des objets conformes au schéma `pinsSettings` (voir documentation associée).
- Les métadonnées permettent de décrire les paramètres d'entrée et le contexte d'exécution pour une meilleure intégration dans des outils d'orchestration ou d'IA.
- Les exemples fournis sont à adapter selon le contexte d'utilisation et la structure attendue des actions Pins (`pinsSettings`).