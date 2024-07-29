# @digipair/skill-cron

**Version:** 0.1.0  
**Summary:** Gestion des tâches planifiées  
**Description:** La compétence permet de gérer l'exécution des tâches planifiées.  
**Icon:** 📆

## Table des matières

- [Fonctions](#fonctions)
  - [crons](#crons)
  - [addCron](#addcron)
  - [deleteCron](#deletecron)
  - [enableCron](#enablecron)
  - [disableCron](#disablecron)

## Fonctions

### crons

Liste des tâches planifiées.

#### Paramètres

| Nom   | Type   | Requis | Description                           |
|-------|--------|--------|---------------------------------------|
| path  | string | Non    | Chemin d'accès vers le répertoire des digipairs |

#### Exemple

```json
{
  "library": "@digipair/skill-cron",
  "element": "crons",
  "properties": {
    "path": "/chemin/vers/repertoire"
  }
}
```

### addCron

Ajoute une planification.

#### Paramètres

| Nom       | Type   | Requis | Description                                      |
|-----------|--------|--------|--------------------------------------------------|
| path      | string | Non    | Chemin d'accès vers le répertoire des digipairs  |
| time      | string | Oui    | Planification au format cron                     |
| digipair  | string | Oui    | Nom du digipair qui exécute le raisonnement      |
| reasoning | string | Oui    | Nom du raisonnement à exécuter                   |

#### Exemple

```json
{
  "library": "@digipair/skill-cron",
  "element": "addCron",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "time": "0 0 * * *",
    "digipair": "nom_du_digipair",
    "reasoning": "nom_du_raisonnement"
  }
}
```

### deleteCron

Supprime une planification.

#### Paramètres

| Nom   | Type   | Requis | Description                                      |
|-------|--------|--------|--------------------------------------------------|
| path  | string | Non    | Chemin d'accès vers le répertoire des digipairs  |
| id    | string | Oui    | Identifiant de la planification                  |

#### Exemple

```json
{
  "library": "@digipair/skill-cron",
  "element": "deleteCron",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "id": "identifiant_de_la_planification"
  }
}
```

### enableCron

Active une planification.

#### Paramètres

| Nom   | Type   | Requis | Description                                      |
|-------|--------|--------|--------------------------------------------------|
| path  | string | Non    | Chemin d'accès vers le répertoire des digipairs  |
| id    | string | Oui    | Identifiant de la planification                  |

#### Exemple

```json
{
  "library": "@digipair/skill-cron",
  "element": "enableCron",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "id": "identifiant_de_la_planification"
  }
}
```

### disableCron

Désactive une planification.

#### Paramètres

| Nom   | Type   | Requis | Description                                      |
|-------|--------|--------|--------------------------------------------------|
| path  | string | Non    | Chemin d'accès vers le répertoire des digipairs  |
| id    | string | Oui    | Identifiant de la planification                  |

#### Exemple

```json
{
  "library": "@digipair/skill-cron",
  "element": "disableCron",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "id": "identifiant_de_la_planification"
  }
}
```

## Notes

- Les fonctions `crons`, `addCron`, `deleteCron`, `enableCron`, et `disableCron` sont utilisées pour gérer les tâches planifiées dans le système.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.