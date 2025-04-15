# @digipair/skill-temporal

**Version:** 0.1.0  
**Summary:** Gestion des workflows temporal  
**Description:** gérer des workflows temporal.  
**Icon:** 👩‍💻

## Table des matières

- [Fonctions](#fonctions)
  - [activity](#activity)
  - [sleep](#sleep)
  - [condition](#condition)
  - [goto](#goto)
  - [stop](#stop)
  - [push](#push)
  - [terminate](#terminate)
  - [list](#list)
  - [workflow](#workflow)

## Fonctions

### activity

Définit une activité.

#### Paramètres

| Nom     | Type   | Requis | Description                  |
| ------- | ------ | ------ | ---------------------------- |
| name    | string | Non    | Nom de l'étape               |
| execute | array  | Oui    | Liste des actions à exécuter |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "activity",
  "properties": {
    "name": "étape1",
    "execute": [
      // Liste des actions à exécuter
    ]
  }
}
```

### sleep

Définit une période d'attente.

#### Paramètres

| Nom      | Type   | Requis | Description        |
| -------- | ------ | ------ | ------------------ |
| name     | string | Non    | Nom de l'étape     |
| duration | string | Oui    | Durée de l'attente |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "sleep",
  "properties": {
    "name": "étape2",
    "duration": "5m"
  }
}
```

### condition

Définit une condition d'attente dans un workflow.

#### Paramètres

| Nom       | Type   | Requis | Description                        |
| --------- | ------ | ------ | ---------------------------------- |
| condition | string | Oui    | Condition d'attente au format Feel |
| timeout   | number | Non    | Timeout de la condition            |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "condition",
  "properties": {
    "condition": "x > 5",
    "timeout": 300
  }
}
```

### goto

Définit une étape de destination dans le workflow.

#### Paramètres

| Nom    | Type   | Requis | Description                   |
| ------ | ------ | ------ | ----------------------------- |
| target | string | Oui    | Nom de l'étape de destination |
| name   | string | Non    | Nom de l'étape                |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "goto",
  "properties": {
    "target": "étape3",
    "name": "étape4"
  }
}
```

### stop

Arrête le workflow.

#### Paramètres

| Nom  | Type   | Requis | Description    |
| ---- | ------ | ------ | -------------- |
| name | string | Non    | Nom de l'étape |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "stop",
  "properties": {
    "name": "étape5"
  }
}
```

### push

Envoi de nouvelles données dans un workflow.

#### Paramètres

| Nom  | Type   | Requis | Description             |
| ---- | ------ | ------ | ----------------------- |
| id   | string | Oui    | Identifiant du workflow |
| data | object | Oui    | Données à envoyer       |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "push",
  "properties": {
    "id": "workflow123",
    "data": {
      "key": "value"
    }
  }
}
```

### terminate

Arrête un workflow.

#### Paramètres

| Nom | Type   | Requis | Description             |
| --- | ------ | ------ | ----------------------- |
| id  | string | Oui    | Identifiant du workflow |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "terminate",
  "properties": {
    "id": "workflow123"
  }
}
```

### list

Liste les workflows.

#### Paramètres

| Nom   | Type   | Requis | Description          |
| ----- | ------ | ------ | -------------------- |
| query | string | Non    | Requête de recherche |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "list",
  "properties": {
    "query": "status:active"
  }
}
```

### workflow

Exécute un workflow Temporal.

#### Paramètres

| Nom     | Type   | Requis | Description                  |
| ------- | ------ | ------ | ---------------------------- |
| id      | string | Oui    | Identifiant du workflow      |
| steps   | array  | Oui    | Exécute les étapes suivantes |
| data    | object | Non    | Données du workflow temporal |
| options | object | Non    | Options du workflow temporal |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "workflow",
  "properties": {
    "id": "workflow123",
    "steps": [
      // Liste des étapes
    ],
    "data": {
      "key": "value"
    },
    "options": {
      // Options du workflow
    }
  }
}
```

## Notes

- Les fonctions décrites permettent de gérer les différentes étapes et actions d'un workflow Temporal.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.
