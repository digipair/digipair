# @digipair/skill-mongodb

**Version:** 0.1.0  
**Summary:** Accès à une base MongoDB  
**Description:** Cette compétence permet de gérer une base de données MongoDB.  
**Icon:** 💻

## Table des matières

- [Fonctions](#fonctions)
  - [database](#database)
  - [find](#find)
  - [findOne](#findOne)
  - [findById](#findById)
  - [insertOne](#insertOne)
  - [updateOne](#updateOne)
  - [updateById](#updateById)

## Fonctions

### database

Connecter à une base MongoDB

#### Paramètres

| Nom       | Type   | Requis | Description               |
|-----------|--------|--------|---------------------------|
| url       | string | Oui    | Adresse du serveur MongoDB|
| database  | string | Oui    | Nom de la base de données |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "database",
  "properties": {
    "url": "mongodb://localhost:27017",
    "database": "ma_base_de_donnees"
  }
}
```

### find

Rechercher dans une base MongoDB

#### Paramètres

| Nom        | Type   | Requis | Description                          |
|------------|--------|--------|--------------------------------------|
| client     | array  | Non    | Client de connexion à la base de données |
| options    | object | Non    | Options de recherche                 |
| collection | string | Oui    | Nom de la collection                 |
| filter     | object | Oui    | Filtre de recherche                  |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "find",
  "properties": {
    "collection": "ma_collection",
    "filter": { "nom": "exemple" }
  }
}
```

### findOne

Rechercher un élément dans une base MongoDB

#### Paramètres

| Nom        | Type   | Requis | Description                          |
|------------|--------|--------|--------------------------------------|
| client     | array  | Non    | Client de connexion à la base de données |
| options    | object | Non    | Options de recherche                 |
| collection | string | Oui    | Nom de la collection                 |
| filter     | object | Oui    | Filtre de recherche                  |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "findOne",
  "properties": {
    "collection": "ma_collection",
    "filter": { "nom": "exemple" }
  }
}
```

### findById

Rechercher un élément par ID dans une base MongoDB

#### Paramètres

| Nom        | Type   | Requis | Description                          |
|------------|--------|--------|--------------------------------------|
| client     | array  | Non    | Client de connexion à la base de données |
| options    | object | Non    | Options de recherche                 |
| collection | string | Oui    | Nom de la collection                 |
| id         | object | Oui    | Identifiant de l'élément             |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "findById",
  "properties": {
    "collection": "ma_collection",
    "id": { "_id": "60c72b2f9b1d4c3d88f1e8b5" }
  }
}
```

### insertOne

Insérer un élément dans une base MongoDB

#### Paramètres

| Nom        | Type   | Requis | Description                          |
|------------|--------|--------|--------------------------------------|
| client     | array  | Non    | Client de connexion à la base de données |
| options    | object | Non    | Options de recherche                 |
| collection | string | Oui    | Nom de la collection                 |
| document   | object | Oui    | Document à insérer                   |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "insertOne",
  "properties": {
    "collection": "ma_collection",
    "document": { "nom": "exemple", "valeur": 123 }
  }
}
```

### updateOne

Mettre à jour un élément dans une base MongoDB

#### Paramètres

| Nom        | Type   | Requis | Description                          |
|------------|--------|--------|--------------------------------------|
| client     | array  | Non    | Client de connexion à la base de données |
| options    | object | Non    | Options de recherche                 |
| collection | string | Oui    | Nom de la collection                 |
| filter     | object | Oui    | Filtre de recherche                  |
| update     | object | Oui    | Filtre de mise à jour                |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "updateOne",
  "properties": {
    "collection": "ma_collection",
    "filter": { "nom": "exemple" },
    "update": { "$set": { "valeur": 456 } }
  }
}
```

### updateById

Mettre à jour un élément par ID dans une base MongoDB

#### Paramètres

| Nom        | Type   | Requis | Description                          |
|------------|--------|--------|--------------------------------------|
| client     | array  | Non    | Client de connexion à la base de données |
| options    | object | Non    | Options de recherche                 |
| id         | string | Oui    | Identifiant de l'élément             |
| collection | string | Oui    | Nom de la collection                 |
| update     | object | Oui    | Filtre de mise à jour                |

#### Exemple

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "updateById",
  "properties": {
    "collection": "ma_collection",
    "id": "60c72b2f9b1d4c3d88f1e8b5",
    "update": { "$set": { "valeur": 789 } }
  }
}
```

## Notes

- Les fonctions de cette bibliothèque permettent de gérer les opérations courantes sur une base de données MongoDB, telles que la connexion, la recherche, l'insertion et la mise à jour de documents.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.