# @digipair/skill-worker

**Version:** 0.1.0  
**Résumé:** Worker  
**Description:** Digiworkers actions.  
**Icône:** 🛠

## Table des matières

- [Fonctions](#fonctions)
  - [activity](#activity)
  - [stop](#stop)
  - [task](#task)
  - [action](#action)

---

## Fonctions

### activity

Exécution d'une activité.

#### Paramètres

| Nom      | Type    | Requis | Description                |
|----------|---------|--------|----------------------------|
| name     | string  | Oui    | Nom de l'activité          |
| execute  | array   | Oui    | Commandes à exécuter (voir [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Exemple

```json
{
  "library": "@digipair/skill-worker",
  "element": "activity",
  "properties": {
    "name": "analyse-donnees",
    "execute": [
      { /* commande pinsSettings */ }
    ]
  }
}
```

---

### stop

Arrête le raisonnement en cours.

#### Paramètres

| Nom    | Type   | Requis | Description                |
|--------|--------|--------|----------------------------|
| value  | object | Non    | Valeur à retourner         |

#### Exemple

```json
{
  "library": "@digipair/skill-worker",
  "element": "stop",
  "properties": {
    "value": {
      "message": "Arrêt demandé par l'utilisateur"
    }
  }
}
```

---

### task

Exécution d'une tâche.

#### Paramètres

| Nom      | Type    | Requis | Description                |
|----------|---------|--------|----------------------------|
| execute  | array   | Oui    | Commandes à exécuter (voir [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Exemple

```json
{
  "library": "@digipair/skill-worker",
  "element": "task",
  "properties": {
    "execute": [
      { /* commande pinsSettings */ }
    ]
  }
}
```

---

### action

Action exécutable.

#### Paramètres

| Nom         | Type    | Requis | Description                |
|-------------|---------|--------|----------------------------|
| execute     | array   | Oui    | Commandes à exécuter (voir [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Métadonnées

| Nom        | Type    | Requis | Description                                   |
|------------|---------|--------|-----------------------------------------------|
| parameters | array   | Oui    | Paramètres d'entrée (voir schéma `Parameter`) |
| context    | boolean | Non    | Afficher le contexte d'exécution              |

##### Schéma `Parameter`

| Nom         | Type    | Requis | Description                |
|-------------|---------|--------|----------------------------|
| name        | string  | Oui    | Nom du paramètre           |
| summary     | string  | Oui    | Résumé                     |
| required    | boolean | Oui    | Indique si requis          |
| ignoreForAI | boolean | Non    | À ignorer pour l'IA        |
| schema      | object  | Oui    | Schéma du paramètre        |
| description | string  | Non    | Description                |

#### Exemple

```json
{
  "library": "@digipair/skill-worker",
  "element": "action",
  "properties": {
    "execute": [
      { /* commande pinsSettings */ }
    ]
  },
  "metadata": {
    "parameters": [
      {
        "name": "input",
        "summary": "Entrée principale",
        "required": true,
        "schema": { "type": "string" }
      }
    ],
    "context": true
  }
}
```

---

## Notes

- Les fonctions `activity`, `task` et `action` attendent des commandes à exécuter sous forme de tableau, selon le schéma [pinsSettings](https://schemas.digipair.ai/pinsSettings).
- La fonction `stop` permet d'interrompre le raisonnement en cours et peut retourner une valeur personnalisée.
- Les métadonnées de la fonction `action` permettent de spécifier les paramètres d'entrée attendus et d'indiquer si le contexte d'exécution doit être affiché.
- Le schéma `Parameter` permet de décrire précisément chaque paramètre d'entrée pour les actions complexes.