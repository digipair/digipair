# @digipair/skill-factory

**Version :** 0.1.0  
**Résumé :** Actions in the Digipair factory  
**Description :** Actions in the Digipair factory.  
**Icône :** 🛠

---

## Table des matières

- [Fonctions](#fonctions)
  - [start](#start)
  - [execute](#execute)
  - [keepAlive](#keepalive)
  - [stop](#stop)
- [Blocs de scène](#blocs-de-scène)
  - [task](#task)
  - [action](#action)
  - [trigger](#trigger)

---

## Fonctions

### start

Démarre un raisonnement depuis la factory Digipair.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| digipair   | string | Non    | Propriétaire du raisonnement       |
| reasoning  | string | Oui    | Nom du raisonnement                |
| body       | object | Non    | Données à transmettre              |
| factory    | string | Non    | Nom de la factory                  |

#### Exemple

```json
{
  "library": "@digipair/skill-factory",
  "element": "start",
  "properties": {
    "digipair": "identifiant_de_la_paire_digitale",
    "reasoning": "nom_du_raisonnement",
    "body": { "clé": "valeur" },
    "factory": "nom_de_la_factory"
  }
}
```

---

### execute

Exécute une ou plusieurs actions Pin avec un contexte donné.

#### Paramètres

| Nom      | Type    | Requis | Description                        |
|----------|---------|--------|------------------------------------|
| execute  | array   | Oui    | Actions à exécuter (Pin settings)  |
| context  | object  | Non    | Contexte d'exécution               |

> **Remarque :** Le schéma des éléments du tableau `execute` doit suivre la spécification [pinsSettings](https://schemas.digipair.ai/pinsSettings).

#### Exemple

```json
{
  "library": "@digipair/skill-factory",
  "element": "execute",
  "properties": {
    "execute": [
      { "pin": "action1", "params": { "clé": "valeur" } }
    ],
    "context": { "utilisateur": "alice" }
  }
}
```

---

### keepAlive

Maintient le raisonnement actif.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-factory",
  "element": "keepAlive",
  "properties": {}
}
```

---

### stop

Arrête le raisonnement en cours.

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| value  | object | Non    | Valeur à retourner  |

#### Exemple

```json
{
  "library": "@digipair/skill-factory",
  "element": "stop",
  "properties": {
    "value": { "message": "Arrêt demandé" }
  }
}
```

---

## Blocs de scène

### task

Exécution d'une tâche.

#### Paramètres

| Nom      | Type    | Requis | Description                        |
|----------|---------|--------|------------------------------------|
| execute  | array   | Oui    | Commandes à exécuter (Pin settings)|

#### Exemple

```json
{
  "library": "@digipair/skill-factory",
  "element": "task",
  "properties": {
    "execute": [
      { "pin": "action1", "params": { "clé": "valeur" } }
    ]
  }
}
```

---

### action

Action exécutable.

#### Métadonnées

| Nom        | Type    | Requis | Description                        |
|------------|---------|--------|------------------------------------|
| parameters | array   | Oui    | Paramètres d'entrée                |
| context    | boolean | Non    | Afficher le contexte d'exécution   |

#### Paramètres

| Nom      | Type    | Requis | Description                        |
|----------|---------|--------|------------------------------------|
| execute  | array   | Oui    | Commandes à exécuter (Pin settings)|

#### Exemple

```json
{
  "library": "@digipair/skill-factory",
  "element": "action",
  "properties": {
    "execute": [
      { "pin": "action2", "params": { "clé": "valeur" } }
    ]
  }
}
```

---

### trigger

Déclencheur exécutable.

#### Métadonnées

| Nom        | Type    | Requis | Description                        |
|------------|---------|--------|------------------------------------|
| tags       | array   | Oui    | Tags du déclencheur                |
| parameters | array   | Oui    | Paramètres d'entrée                |

#### Paramètres

| Nom      | Type    | Requis | Description                        |
|----------|---------|--------|------------------------------------|
| execute  | array   | Oui    | Commandes à exécuter (Pin settings)|

#### Exemple

```json
{
  "library": "@digipair/skill-factory",
  "element": "trigger",
  "properties": {
    "execute": [
      { "pin": "action3", "params": { "clé": "valeur" } }
    ]
  }
}
```

---

## Notes

- Les fonctions de cette librairie permettent de piloter des raisonnements et des actions dans la factory Digipair.
- Les paramètres de type `execute` attendent des objets conformes au schéma [pinsSettings](https://schemas.digipair.ai/pinsSettings).
- Les blocs de scène (`task`, `action`, `trigger`) sont utilisés pour orchestrer des séquences d'actions ou de déclencheurs dans des scénarios complexes.
- Assurez-vous de fournir les paramètres requis pour chaque fonction ou bloc de scène selon vos besoins.