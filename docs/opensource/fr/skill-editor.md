# @digipair/skill-editor

**Version:** 0.1.0  
**Summary:** Editions des raisonnements  
**Description:** La compétence permet de gérer l'édition des raisonnements des digipairs.  
**Icon:** 🏗

## Table des matières

- [Fonctions](#fonctions)
  - [reasonings](#reasonings)
  - [reasoning](#reasoning)
  - [setReasoning](#setreasoning)
  - [removeReasoning](#removereasoning)
  - [digipairs](#digipairs)
  - [digipair](#digipair)
  - [setDigipair](#setdigipair)
  - [removeDigipair](#removedigipair)
  - [addDigipair](#adddigipair)

## Fonctions

### reasonings

Liste les raisonnements d'un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                          |
|----------|--------|--------|--------------------------------------|
| path     | string | Non    | Chemin d'accès vers le répertoire du digipair |
| digipair | string | Oui    | Nom du digipair                      |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "reasonings",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "digipair": "nom_du_digipair"
  }
}
```

### reasoning

Informations d'un raisonnement.

#### Paramètres

| Nom       | Type   | Requis | Description                          |
|-----------|--------|--------|--------------------------------------|
| path      | string | Non    | Chemin d'accès vers le répertoire du digipair |
| digipair  | string | Oui    | Nom du digipair                      |
| reasoning | string | Oui    | Nom du raisonnement                  |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "reasoning",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "digipair": "nom_du_digipair",
    "reasoning": "nom_du_raisonnement"
  }
}
```

### setReasoning

Enregistrement d'un raisonnement.

#### Paramètres

| Nom       | Type   | Requis | Description                          |
|-----------|--------|--------|--------------------------------------|
| path      | string | Non    | Chemin d'accès vers le répertoire du digipair |
| digipair  | string | Oui    | Nom du digipair                      |
| reasoning | string | Oui    | Nom du raisonnement                  |
| value     | object | Oui    | Contenu du raisonnement à sauvegarder |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "setReasoning",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "digipair": "nom_du_digipair",
    "reasoning": "nom_du_raisonnement",
    "value": {
      "key": "value"
    }
  }
}
```

### removeReasoning

Suppression d'un raisonnement.

#### Paramètres

| Nom       | Type   | Requis | Description                          |
|-----------|--------|--------|--------------------------------------|
| path      | string | Non    | Chemin d'accès vers le répertoire du digipair |
| digipair  | string | Oui    | Nom du digipair                      |
| reasoning | string | Oui    | Nom du raisonnement                  |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "removeReasoning",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "digipair": "nom_du_digipair",
    "reasoning": "nom_du_raisonnement"
  }
}
```

### digipairs

Liste des digipairs disponibles.

#### Paramètres

| Nom  | Type   | Requis | Description                          |
|------|--------|--------|--------------------------------------|
| path | string | Non    | Chemin d'accès vers le répertoire du digipair |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "digipairs",
  "properties": {
    "path": "/chemin/vers/repertoire"
  }
}
```

### digipair

Informations d'un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                          |
|----------|--------|--------|--------------------------------------|
| path     | string | Non    | Chemin d'accès vers le répertoire du digipair |
| digipair | string | Oui    | Nom du digipair                      |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "digipair",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "digipair": "nom_du_digipair"
  }
}
```

### setDigipair

Enregistrement d'un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                          |
|----------|--------|--------|--------------------------------------|
| path     | string | Non    | Chemin d'accès vers le répertoire du digipair |
| digipair | string | Oui    | Nom du digipair                      |
| value    | object | Oui    | Contenu du raisonnement à sauvegarder |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "setDigipair",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "digipair": "nom_du_digipair",
    "value": {
      "key": "value"
    }
  }
}
```

### removeDigipair

Suppression d'un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                          |
|----------|--------|--------|--------------------------------------|
| path     | string | Non    | Chemin d'accès vers le répertoire du digipair |
| digipair | string | Oui    | Nom du digipair                      |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "removeDigipair",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "digipair": "nom_du_digipair"
  }
}
```

### addDigipair

Ajoute un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                          |
|----------|--------|--------|--------------------------------------|
| path     | string | Non    | Chemin d'accès vers le répertoire du digipair |
| digipair | string | Oui    | Nom du digipair                      |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "addDigipair",
  "properties": {
    "path": "/chemin/vers/repertoire",
    "digipair": "nom_du_digipair"
  }
}
```

## Notes

- Les fonctions de cette bibliothèque permettent de gérer les raisonnements et les digipairs.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.