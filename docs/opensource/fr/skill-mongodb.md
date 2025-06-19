# @digipair/skill-mongodb

**Version :** 0.1.0  
**Résumé :** Accès à une base de données MongoDB  
**Description :** Cette compétence permet de gérer une base de données MongoDB.  
**Icône :** 💻

## Table des matières

- [Fonctions](#fonctions)
  - [database](#database)
  - [find](#find)
  - [findOne](#findone)
  - [findById](#findbyid)
  - [insertOne](#insertone)
  - [updateOne](#updateone)
  - [updateById](#updatebyid)

---

## Fonctions

### database

Connecte à une base de données MongoDB.

#### Paramètres

| Nom       | Type   | Requis | Description                |
|-----------|--------|--------|----------------------------|
| url       | string | Oui    | Adresse du serveur MongoDB |
| database  | string | Oui    | Nom de la base de données  |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "database",
  "properties": {
    "url": "mongodb://localhost:27017",
    "database": "ma_base"
  }
}
```

---

### find

Recherche des documents dans une collection MongoDB.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| client     | array  | Non    | Client de connexion à la base      |
| options    | object | Non    | Options de recherche               |
| collection | string | Oui    | Nom de la collection               |
| filter     | object | Oui    | Filtre de recherche                |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "find",
  "properties": {
    "collection": "utilisateurs",
    "filter": { "age": { "$gt": 18 } }
  }
}
```

---

### findOne

Recherche un document dans une collection MongoDB.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| client     | array  | Non    | Client de connexion à la base      |
| options    | object | Non    | Options de recherche               |
| collection | string | Oui    | Nom de la collection               |
| filter     | object | Oui    | Filtre de recherche                |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "findOne",
  "properties": {
    "collection": "utilisateurs",
    "filter": { "email": "exemple@domaine.com" }
  }
}
```

---

### findById

Recherche un document par identifiant dans une collection MongoDB.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| client     | array  | Non    | Client de connexion à la base      |
| options    | object | Non    | Options de recherche               |
| collection | string | Oui    | Nom de la collection               |
| id         | object | Oui    | Identifiant du document            |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "findById",
  "properties": {
    "collection": "utilisateurs",
    "id": { "$oid": "60c72b2f9b1e8a5f8c8e4d3a" }
  }
}
```

---

### insertOne

Insère un document dans une collection MongoDB.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| client     | array  | Non    | Client de connexion à la base      |
| options    | object | Non    | Options d'insertion                |
| collection | string | Oui    | Nom de la collection               |
| document   | object | Oui    | Document à insérer                 |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "insertOne",
  "properties": {
    "collection": "utilisateurs",
    "document": { "nom": "Dupont", "age": 30 }
  }
}
```

---

### updateOne

Met à jour un document dans une collection MongoDB.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| client     | array  | Non    | Client de connexion à la base      |
| options    | object | Non    | Options de mise à jour             |
| collection | string | Oui    | Nom de la collection               |
| filter     | object | Oui    | Filtre de recherche                |
| update     | object | Oui    | Opérations de mise à jour          |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "updateOne",
  "properties": {
    "collection": "utilisateurs",
    "filter": { "email": "exemple@domaine.com" },
    "update": { "$set": { "age": 31 } }
  }
}
```

---

### updateById

Met à jour un document par identifiant dans une collection MongoDB.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| client     | array  | Non    | Client de connexion à la base      |
| options    | object | Non    | Options de mise à jour             |
| id         | string | Oui    | Identifiant du document            |
| collection | string | Oui    | Nom de la collection               |
| update     | object | Oui    | Opérations de mise à jour          |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "updateById",
  "properties": {
    "collection": "utilisateurs",
    "id": "60c72b2f9b1e8a5f8c8e4d3a",
    "update": { "$set": { "nom": "Durand" } }
  }
}
```

---

## Notes

- Les fonctions nécessitent généralement une connexion préalable à la base de données via la fonction `database`.
- Le paramètre `client` peut être omis si la connexion est gérée en interne ou via le contexte d'exécution.
- Les filtres et updates doivent respecter la syntaxe MongoDB.
- Pour les identifiants (`id`), utilisez le format approprié (ex : ObjectId pour MongoDB).

---

**Auteur :** [@digipair](https://github.com/digipair)  
**Licence :** MIT