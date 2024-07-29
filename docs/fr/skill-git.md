# @digipair/skill-git

**Version:** 0.1.0  
**Summary:** Gestion d'un dépôt git  
**Description:** Cette compétence permet de gérer un dépôt git.  
**Icon:** 💾

## Table des matières

- [Fonctions](#fonctions)
  - [commit](#commit)
  - [push](#push)
  - [show](#show)
  - [log](#log)

## Fonctions

### commit

Effectuer un commit dans le dépôt GIT.

#### Paramètres

| Nom      | Type   | Requis | Description              |
|----------|--------|--------|--------------------------|
| path     | string | Non    | Path du dépôt GIT        |
| selector | string | Non    | Sélecteur des fichiers à commiter |
| message  | string | Non    | Message du commit        |

#### Exemple

```json
{
  "library": "@digipair/skill-git",
  "element": "commit",
  "properties": {
    "path": "/path/to/repo",
    "selector": "*.js",
    "message": "Initial commit"
  }
}
```

### push

Effectuer un push des commits dans le dépôt GIT.

#### Paramètres

| Nom      | Type     | Requis | Description                    |
|----------|----------|--------|--------------------------------|
| path     | string   | Non    | Path du dépôt GIT              |
| options  | string[] | Non    | Options envoyées lors du push  |

#### Exemple

```json
{
  "library": "@digipair/skill-git",
  "element": "push",
  "properties": {
    "path": "/path/to/repo",
    "options": ["--force"]
  }
}
```

### show

Afficher les informations d'un commit dans le dépôt GIT.

#### Paramètres

| Nom      | Type     | Requis | Description                    |
|----------|----------|--------|--------------------------------|
| path     | string   | Non    | Path du dépôt GIT              |
| options  | string[] | Non    | Options envoyées lors du git show |

#### Exemple

```json
{
  "library": "@digipair/skill-git",
  "element": "show",
  "properties": {
    "path": "/path/to/repo",
    "options": ["--stat"]
  }
}
```

### log

Afficher le journal des commits dans le dépôt GIT.

#### Paramètres

| Nom         | Type    | Requis | Description                                                                 |
|-------------|---------|--------|-----------------------------------------------------------------------------|
| path        | string  | Non    | Path du dépôt GIT                                                           |
| file        | string  | Non    | Fichier concerné par le log                                                 |
| format      | string  | Non    | Format de sortie décrit au pretty format                                    |
| from        | string  | Non    | Identifiant du commit de départ                                             |
| to          | string  | Non    | Identifiant du commit de fin                                                |
| mailMap     | boolean | Non    | Active l'utilisation du mapping des emails dans les valeurs de retour       |
| maxCount    | number  | Non    | Limite le nombre de résultats à retourner                                   |
| multiline   | boolean | Non    | Active les valeurs multilignes dans le format par défaut                    |
| splitter    | string  | Non    | Séquence de caractères à utiliser comme délimiteur entre les champs dans le journal |
| strictDate  | boolean | Non    | Bascule la valeur de la date d'auteur à un format ISO 8601 strict           |
| symmetric   | boolean | Non    | Active le symmetric revision range plutôt que le two-dot range              |

#### Exemple

```json
{
  "library": "@digipair/skill-git",
  "element": "log",
  "properties": {
    "path": "/path/to/repo",
    "file": "index.js",
    "format": "pretty",
    "from": "commit1",
    "to": "commit2",
    "mailMap": true,
    "maxCount": 10,
    "multiline": false,
    "splitter": "ò",
    "strictDate": true,
    "symmetric": false
  }
}
```

## Notes

- Les fonctions `commit`, `push`, `show`, et `log` sont utilisées pour gérer les opérations de base sur un dépôt GIT.
- Assurez-vous de fournir les paramètres appropriés pour chaque fonction afin de garantir leur bon fonctionnement.