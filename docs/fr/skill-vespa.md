# @digipair/skill-vespa

**Version:** 0.1.0  
**Summary:** Communication avec une base Vespa  
**Description:** Cette compétence offre des fonctionnalités pour interagir avec les données d'une base vectorielle Vespa.  
**Icon:** 📘

## Table des matières

- [Fonctions](#fonctions)
  - [find](#find)
  - [search](#search)
  - [textSplitter](#textSplitter)
  - [push](#push)
  - [remove](#remove)

## Fonctions

### find

Récupérer des valeurs dans la base de données

#### Paramètres

| Nom        | Type   | Requis | Description                                |
|------------|--------|--------|--------------------------------------------|
| baseUrl    | string | Non    | Adresse du serveur Vespa                   |
| collection | string | Non    | Nom de la collection dans laquelle effectuer la recherche |
| limit      | number | Non    | Nombre maximum de réponses                 |
| orderby    | string | Non    | Organisation des réponses                  |
| query      | string | Oui    | Requête de recherche                       |
| grouping   | string | Non    | Filtre de regroupement des réponses        |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "find",
  "properties": {
    "baseUrl": "http://vespa-server.com",
    "collection": "myCollection",
    "limit": 10,
    "orderby": "date",
    "query": "search term",
    "grouping": "category"
  }
}
```

### search

Recherche sémantique dans une collection

#### Paramètres

| Nom        | Type   | Requis | Description                                |
|------------|--------|--------|--------------------------------------------|
| embeddings | array  | Non    | Modèle d'embeddings                        |
| baseUrl    | string | Non    | Adresse du serveur Vespa                   |
| collection | string | Non    | Nom de la collection                       |
| limit      | number | Non    | Nombre de résultats maximum                |
| orderby    | string | Non    | Organisation des résultats                 |
| targetHits | number | Non    | targetHits                                 |
| filter     | string | Non    | Filtres de recherche                       |
| language   | string | Oui    | Langue de recherche                        |
| query      | string | Oui    | Requête de recherche sémantique            |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "search",
  "properties": {
    "embeddings": ["model1", "model2"],
    "baseUrl": "http://vespa-server.com",
    "collection": "myCollection",
    "limit": 10,
    "orderby": "relevance",
    "targetHits": 5,
    "filter": "type:article",
    "language": "fr",
    "query": "recherche sémantique"
  }
}
```

### textSplitter

Découpe le texte en morceaux de texte

#### Paramètres

| Nom      | Type   | Requis | Description                                        |
|----------|--------|--------|----------------------------------------------------|
| size     | number | Non    | Taille des morceaux de texte                       |
| overlap  | number | Non    | Tolérance de différence de taille pour s'adapter au texte |
| source   | string | Oui    | Metadata indiquant la source de la donnée          |
| text     | string | Oui    | Texte à découper                                   |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "textSplitter",
  "properties": {
    "size": 200,
    "overlap": 50,
    "source": "document1",
    "text": "Ceci est un texte à découper en morceaux."
  }
}
```

### push

Ajouter des documents

#### Paramètres

| Nom        | Type   | Requis | Description                                |
|------------|--------|--------|--------------------------------------------|
| embeddings | array  | Non    | Modèle d'embeddings                        |
| baseUrl    | string | Non    | Adresse du serveur Vespa                   |
| collection | string | Non    | Nom de la collection dans laquelle ajouter les documents |
| documents  | array  | Oui    | Liste des documents à ajouter              |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "push",
  "properties": {
    "embeddings": ["model1", "model2"],
    "baseUrl": "http://vespa-server.com",
    "collection": "myCollection",
    "documents": [
      {"id": 1, "content": "Document 1"},
      {"id": 2, "content": "Document 2"}
    ]
  }
}
```

### remove

Supprimer des documents dans la base de données

#### Paramètres

| Nom        | Type   | Requis | Description                                |
|------------|--------|--------|--------------------------------------------|
| baseUrl    | string | Non    | Adresse du serveur Vespa                   |
| collection | string | Non    | Nom de la collection dans laquelle supprimer les documents |
| selection  | string | Oui    | Filtre correspondant aux documents à supprimer |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "remove",
  "properties": {
    "baseUrl": "http://vespa-server.com",
    "collection": "myCollection",
    "selection": "id:1"
  }
}
```

## Notes

- Les fonctions `find`, `search`, `textSplitter`, `push`, et `remove` sont utilisées pour interagir avec une base de données Vespa.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.