# @digipair/skill-git

**Version:** 0.1.0  
**Résumé:** Management of a git repository  
**Description:** This skill allows you to manage a git repository.  
**Icône:** 💾

## Table des matières

- [Fonctions](#fonctions)
  - [commit](#commit)
  - [push](#push)
  - [show](#show)
  - [log](#log)

---

## Fonctions

### commit

Effectue un commit dans un dépôt GIT.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| path     | string | Non    | Chemin du dépôt GIT                |
| selector | string | Non    | Sélecteur des fichiers à committer |
| message  | string | Non    | Message de commit                  |

#### Exemple

```json
{
  "library": "@digipair/skill-git",
  "element": "commit",
  "properties": {
    "path": "/chemin/vers/mon/repo",
    "selector": "*.js",
    "message": "feat: ajout d'une nouvelle fonctionnalité"
  }
}
```

---

### push

Effectue un push des commits locaux vers le dépôt distant.

#### Paramètres

| Nom     | Type     | Requis | Description                                 |
|---------|----------|--------|---------------------------------------------|
| path    | string   | Non    | Chemin du dépôt GIT                         |
| options | string[] | Non    | Options envoyées lors du push (ex: `--force`) |

#### Exemple

```json
{
  "library": "@digipair/skill-git",
  "element": "push",
  "properties": {
    "path": "/chemin/vers/mon/repo",
    "options": ["--force"]
  }
}
```

---

### show

Affiche le détail d’un commit ou d’un objet GIT.

#### Paramètres

| Nom     | Type     | Requis | Description                                   |
|---------|----------|--------|-----------------------------------------------|
| path    | string   | Non    | Chemin du dépôt GIT                           |
| options | string[] | Non    | Options envoyées lors du git show             |

#### Exemple

```json
{
  "library": "@digipair/skill-git",
  "element": "show",
  "properties": {
    "path": "/chemin/vers/mon/repo",
    "options": ["--stat"]
  }
}
```

---

### log

Récupère l’historique des commits d’un dépôt GIT.

#### Paramètres

| Nom         | Type     | Requis | Description                                                                                                    |
|-------------|----------|--------|----------------------------------------------------------------------------------------------------------------|
| path        | string   | Non    | Chemin du dépôt GIT                                                                                            |
| file        | string   | Non    | Fichier concerné par le log                                                                                    |
| format      | string   | Non    | Format de sortie (pretty format)                                                                               |
| from        | string   | Non    | Identifiant du commit de départ                                                                                |
| to          | string   | Non    | Identifiant du commit de fin                                                                                   |
| mailMap     | boolean  | Non    | Active le mapping des emails dans les retours (nom/email)                                                      |
| maxCount    | number   | Non    | Limite le nombre de résultats                                                                                  |
| multiline   | boolean  | Non    | Active les valeurs multilignes dans le format par défaut                                                       |
| splitter    | string   | Non    | Séquence de caractères utilisée comme séparateur entre les champs (défaut: `ò`)                                |
| strictDate  | boolean  | Non    | Utilise un format de date ISO 8601 strict                                                                      |
| symmetric   | boolean  | Non    | Active la plage de révision symétrique plutôt que la plage à deux points                                       |

#### Exemple

```json
{
  "library": "@digipair/skill-git",
  "element": "log",
  "properties": {
    "path": "/chemin/vers/mon/repo",
    "file": "src/index.js",
    "format": "oneline",
    "from": "a1b2c3d",
    "to": "d4e5f6g",
    "mailMap": true,
    "maxCount": 10,
    "multiline": false,
    "splitter": "|||",
    "strictDate": true,
    "symmetric": false
  }
}
```

---

## Notes

- Toutes les fonctions sont accessibles via des appels de fonctions JavaScript, et non via une API HTTP.
- Les paramètres sont optionnels, mais il est recommandé de spécifier au minimum le chemin du dépôt (`path`) pour garantir le bon fonctionnement.
- Les options avancées de la fonction `log` permettent d’adapter la sortie à des besoins d’analyse ou d’intégration spécifiques.
- Assurez-vous que le contexte d’exécution dispose des droits nécessaires sur le dépôt GIT ciblé.

---

**@digipair/skill-git** facilite la gestion programmatique des dépôts GIT dans vos projets JavaScript.