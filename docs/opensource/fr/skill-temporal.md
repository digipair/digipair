# @digipair/skill-temporal

**Version :** 0.1.0  
**Résumé :** Temporal workflow management  
**Description :** Cette compétence permet de gérer des workflows temporalisés.  
**Icône :** 👩‍💻

---

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

---

## Fonctions

### activity

Définit une activité dans un workflow temporal.

#### Paramètres

| Nom      | Type    | Requis | Description                |
|----------|---------|--------|----------------------------|
| name     | string  | Non    | Nom de l'étape             |
| execute  | array   | Oui    | Liste d'actions à exécuter |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "activity",
  "properties": {
    "name": "validation",
    "execute": [
      // Liste d'actions à exécuter (format pinsSettings)
    ]
  }
}
```

---

### sleep

Attend une durée spécifiée avant de poursuivre le workflow.

#### Paramètres

| Nom      | Type   | Requis | Description            |
|----------|--------|--------|------------------------|
| name     | string | Non    | Nom de l'étape         |
| duration | string | Oui    | Durée de l'attente (ex: "5s", "1m") |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "sleep",
  "properties": {
    "name": "pause",
    "duration": "10s"
  }
}
```

---

### condition

Attend qu'une condition soit remplie dans le workflow.

#### Paramètres

| Nom        | Type    | Requis | Description                                 |
|------------|---------|--------|---------------------------------------------|
| condition  | string  | Oui    | Condition d'attente au format FEEL          |
| timeout    | number  | Non    | Durée maximale d'attente (en secondes)      |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "condition",
  "properties": {
    "condition": "data.status == 'approved'",
    "timeout": 60
  }
}
```

---

### goto

Permet de passer à une étape spécifique du workflow.

#### Paramètres

| Nom     | Type   | Requis | Description                |
|---------|--------|--------|----------------------------|
| target  | string | Oui    | Nom de l'étape de destination |
| name    | string | Non    | Nom de l'étape courante    |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "goto",
  "properties": {
    "target": "finalisation",
    "name": "redirection"
  }
}
```

---

### stop

Arrête le workflow en cours.

#### Paramètres

| Nom   | Type   | Requis | Description        |
|-------|--------|--------|--------------------|
| name  | string | Non    | Nom de l'étape     |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "stop",
  "properties": {
    "name": "fin"
  }
}
```

---

### push

Envoie de nouvelles données à un workflow existant.

#### Paramètres

| Nom   | Type   | Requis | Description        |
|-------|--------|--------|--------------------|
| id    | string | Oui    | Identifiant du workflow |
| data  | object | Oui    | Données à envoyer  |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "push",
  "properties": {
    "id": "workflow_123",
    "data": {
      "status": "in_progress"
    }
  }
}
```

---

### terminate

Arrête définitivement un workflow.

#### Paramètres

| Nom   | Type   | Requis | Description        |
|-------|--------|--------|--------------------|
| id    | string | Oui    | Identifiant du workflow |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "terminate",
  "properties": {
    "id": "workflow_123"
  }
}
```

---

### list

Liste les workflows existants selon une requête optionnelle.

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| query  | string | Non    | Requête de recherche |

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

---

### workflow

Exécute un workflow temporal complet.

#### Paramètres

| Nom      | Type    | Requis | Description                        |
|----------|---------|--------|------------------------------------|
| id       | string  | Oui    | Identifiant du workflow            |
| steps    | array   | Oui    | Liste des étapes à exécuter (format pinsSettings) |
| data     | object  | Non    | Données initiales du workflow      |
| options  | object  | Non    | Options du workflow temporal       |

#### Exemple

```json
{
  "library": "@digipair/skill-temporal",
  "element": "workflow",
  "properties": {
    "id": "workflow_123",
    "steps": [
      // Liste des étapes (format pinsSettings)
    ],
    "data": {
      "userId": "abc123"
    },
    "options": {
      "retry": 3
    }
  }
}
```

---

## Notes

- Les fonctions de cette librairie permettent de modéliser, exécuter et contrôler des workflows temporalisés de façon flexible.
- Le format `pinsSettings` est utilisé pour décrire les actions ou étapes à exécuter dans les paramètres `execute` et `steps`.
- Les durées doivent être exprimées sous forme de chaînes (ex : `"5s"`, `"1m"`).
- La condition dans la fonction `condition` doit être au format FEEL (Friendly Enough Expression Language).
- L'identifiant de workflow (`id`) doit être unique pour chaque instance de workflow.

---

**Pour toute contribution ou question, merci de consulter le dépôt officiel de la librairie.**