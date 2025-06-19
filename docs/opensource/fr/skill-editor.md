# @digipair/skill-editor

**Version:** 0.1.0  
**Résumé:** Editing Reasonings  
**Description:** The skill allows managing the editing of the reasonings of digipairs.  
**Icône:** 🏗

---

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
  - [metadata](#metadata)
  - [setAvatar](#setavatar)
  - [templates](#templates)
  - [schemas](#schemas)
  - [tools](#tools)

---

## Fonctions

### reasonings

Lister les reasonings d’un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| path     | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair | string | Oui    | Nom du digipair                             |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "reasonings",
  "properties": {
    "digipair": "nom_de_la_paire_digitale"
  }
}
```

---

### reasoning

Obtenir les informations d’un reasoning d’un digipair.

#### Paramètres

| Nom       | Type   | Requis | Description                                 |
|-----------|--------|--------|---------------------------------------------|
| path      | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair  | string | Oui    | Nom du digipair                             |
| reasoning | string | Oui    | Nom du reasoning                            |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "reasoning",
  "properties": {
    "digipair": "nom_de_la_paire_digitale",
    "reasoning": "nom_du_reasoning"
  }
}
```

---

### setReasoning

Enregistrer ou mettre à jour un reasoning pour un digipair.

#### Paramètres

| Nom       | Type   | Requis | Description                                 |
|-----------|--------|--------|---------------------------------------------|
| path      | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair  | string | Oui    | Nom du digipair                             |
| reasoning | string | Oui    | Nom du reasoning                            |
| value     | object | Oui    | Contenu du reasoning à sauvegarder          |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "setReasoning",
  "properties": {
    "digipair": "nom_de_la_paire_digitale",
    "reasoning": "nom_du_reasoning",
    "value": { "contenu": "..." }
  }
}
```

---

### removeReasoning

Supprimer un reasoning d’un digipair.

#### Paramètres

| Nom       | Type   | Requis | Description                                 |
|-----------|--------|--------|---------------------------------------------|
| path      | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair  | string | Oui    | Nom du digipair                             |
| reasoning | string | Oui    | Nom du reasoning                            |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "removeReasoning",
  "properties": {
    "digipair": "nom_de_la_paire_digitale",
    "reasoning": "nom_du_reasoning"
  }
}
```

---

### digipairs

Lister les digipairs disponibles.

#### Paramètres

| Nom  | Type   | Requis | Description                              |
|------|--------|--------|------------------------------------------|
| path | string | Non    | Chemin d’accès au répertoire des digipairs |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "digipairs",
  "properties": {}
}
```

---

### digipair

Obtenir les informations d’un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| path     | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair | string | Oui    | Nom du digipair                             |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "digipair",
  "properties": {
    "digipair": "nom_de_la_paire_digitale"
  }
}
```

---

### setDigipair

Enregistrer ou mettre à jour un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| path     | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair | string | Oui    | Nom du digipair                             |
| value    | object | Oui    | Contenu du digipair à sauvegarder           |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "setDigipair",
  "properties": {
    "digipair": "nom_de_la_paire_digitale",
    "value": { "contenu": "..." }
  }
}
```

---

### removeDigipair

Supprimer un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| path     | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair | string | Oui    | Nom du digipair                             |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "removeDigipair",
  "properties": {
    "digipair": "nom_de_la_paire_digitale"
  }
}
```

---

### addDigipair

Ajouter un nouveau digipair à partir d’un template.

#### Paramètres

| Nom           | Type   | Requis | Description                                 |
|---------------|--------|--------|---------------------------------------------|
| path          | string | Non    | Chemin d’accès au répertoire du digipair    |
| templatesPath | string | Non    | Chemin du répertoire des templates          |
| template      | string | Oui    | Template à utiliser                         |
| data          | object | Oui    | Données de remplacement pour le template    |
| digipair      | string | Oui    | Nom du digipair                             |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "addDigipair",
  "properties": {
    "template": "nom_du_template",
    "data": { "clé": "valeur" },
    "digipair": "nom_de_la_paire_digitale"
  }
}
```

---

### metadata

Obtenir les métadonnées d’un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| path     | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair | string | Oui    | Nom du digipair                             |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "metadata",
  "properties": {
    "digipair": "nom_de_la_paire_digitale"
  }
}
```

---

### setAvatar

Définir l’avatar d’un digipair.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| path     | string | Non    | Chemin d’accès au répertoire du digipair    |
| digipair | string | Oui    | Nom du digipair                             |
| avatar   | string | Oui    | Avatar du digipair                          |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "setAvatar",
  "properties": {
    "digipair": "nom_de_la_paire_digitale",
    "avatar": "url_ou_base64_de_l_avatar"
  }
}
```

---

### templates

Lister les templates disponibles.

#### Paramètres

| Nom  | Type   | Requis | Description                              |
|------|--------|--------|------------------------------------------|
| path | string | Non    | Chemin d’accès au répertoire des templates |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "templates",
  "properties": {}
}
```

---

### schemas

Lister les schémas des librairies.

#### Paramètres

| Nom       | Type   | Requis | Description                                 |
|-----------|--------|--------|---------------------------------------------|
| libraries | object | Oui    | Liste des librairies                        |
| language  | string | Oui    | Langue du schéma                            |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "schemas",
  "properties": {
    "libraries": { "lib1": true, "lib2": true },
    "language": "fr"
  }
}
```

---

### tools

Lister les outils disponibles.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| language | string | Oui    | Langue des outils                           |

#### Exemple

```json
{
  "library": "@digipair/skill-editor",
  "element": "tools",
  "properties": {
    "language": "fr"
  }
}
```

---

## Notes

- Toutes les fonctions sont accessibles via des appels de fonctions JavaScript, et non via une API HTTP.
- Le paramètre `path` est optionnel et permet de spécifier un chemin personnalisé pour l’accès aux ressources.
- Les paramètres obligatoires doivent toujours être fournis pour garantir le bon fonctionnement des fonctions.
- Les objets passés en paramètre (`value`, `data`, `libraries`) doivent respecter la structure attendue par la fonction cible.
- Les exemples fournis illustrent l’utilisation typique de chaque fonction dans un contexte d’intégration.

---

**Pour toute contribution ou question, veuillez consulter le dépôt GitHub associé à la librairie.**