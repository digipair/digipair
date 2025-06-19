# @digipair/skill-vespa

**Version:** 0.1.0  
**Résumé:** Communication avec une base de données Vespa  
**Description:** Cette compétence fournit des fonctionnalités pour interagir avec les données d'une base de données vectorielle Vespa.  
**Icône:** 📘

## Table des matières

- [Fonctions](#fonctions)
  - [find](#find)
  - [search](#search)
  - [textSplitter](#textsplitter)
  - [push](#push)
  - [remove](#remove)
  - [update](#update)

---

## Fonctions

### find

Récupérer des valeurs depuis la base de données.

#### Paramètres

| Nom         | Type    | Requis | Description                                      |
|-------------|---------|--------|--------------------------------------------------|
| baseUrl     | string  | Non    | Adresse du serveur Vespa                         |
| namespace   | string  | Non    | Namespace du document à mettre à jour            |
| collection  | string  | Non    | Nom de la collection à interroger                |
| limit       | number  | Non    | Nombre maximum de réponses                       |
| orderby     | string  | Non    | Ordre de tri des réponses                        |
| query       | string  | Oui    | Requête de recherche                             |
| grouping    | string  | Non    | Filtre de regroupement pour les réponses         |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "find",
  "properties": {
    "baseUrl": "https://vespa.example.com",
    "namespace": "default",
    "collection": "documents",
    "limit": 10,
    "orderby": "date DESC",
    "query": "machine learning",
    "grouping": "category"
  }
}
```

---

### search

Recherche sémantique dans une collection.

#### Paramètres

| Nom         | Type    | Requis | Description                                      |
|-------------|---------|--------|--------------------------------------------------|
| embeddings  | array   | Non    | Modèle(s) d'embeddings à utiliser                |
| baseUrl     | string  | Non    | Adresse du serveur Vespa                         |
| namespace   | string  | Non    | Namespace du document à mettre à jour            |
| collection  | string  | Non    | Nom de la collection                             |
| limit       | number  | Non    | Nombre maximum de résultats                      |
| orderby     | string  | Non    | Ordre de tri des résultats                       |
| targetHits  | number  | Non    | Nombre cible de résultats                        |
| filter      | string  | Non    | Filtres de recherche                             |
| language    | string  | Oui    | Langue de la recherche                           |
| query       | string  | Oui    | Requête de recherche sémantique                  |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "search",
  "properties": {
    "embeddings": ["openai-ada"],
    "baseUrl": "https://vespa.example.com",
    "namespace": "default",
    "collection": "articles",
    "limit": 5,
    "orderby": "score DESC",
    "targetHits": 3,
    "filter": "category:AI",
    "language": "fr",
    "query": "apprentissage profond"
  }
}
```

---

### textSplitter

Découpe un texte en morceaux.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| size     | number  | Non    | Taille des morceaux de texte                      |
| overlap  | number  | Non    | Tolérance de chevauchement pour ajuster le texte  |
| source   | string  | Oui    | Métadonnée indiquant la source des données        |
| text     | string  | Oui    | Texte à découper                                 |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "textSplitter",
  "properties": {
    "size": 512,
    "overlap": 32,
    "source": "rapport_annuel.pdf",
    "text": "Le machine learning est un sous-domaine de l'intelligence artificielle..."
  }
}
```

---

### push

Ajouter des documents à la base de données.

#### Paramètres

| Nom          | Type    | Requis | Description                                      |
|--------------|---------|--------|--------------------------------------------------|
| embeddings   | array   | Non    | Modèle(s) d'embeddings à utiliser                |
| baseUrl      | string  | Non    | Adresse du serveur Vespa                         |
| namespace    | string  | Non    | Namespace du document à mettre à jour            |
| collection   | string  | Non    | Nom de la collection à laquelle ajouter          |
| asynchronous | boolean | Non    | Ajout asynchrone des documents                   |
| documents    | array   | Oui    | Liste des documents à ajouter (objet JSON)       |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "push",
  "properties": {
    "embeddings": ["openai-ada"],
    "baseUrl": "https://vespa.example.com",
    "namespace": "default",
    "collection": "articles",
    "asynchronous": true,
    "documents": [
      { "id": "doc1", "title": "Introduction à Vespa", "content": "..." },
      { "id": "doc2", "title": "Recherche vectorielle", "content": "..." }
    ]
  }
}
```

---

### remove

Supprimer des documents de la base de données.

#### Paramètres

| Nom         | Type    | Requis | Description                                      |
|-------------|---------|--------|--------------------------------------------------|
| baseUrl     | string  | Non    | Adresse du serveur Vespa                         |
| namespace   | string  | Non    | Namespace du document à mettre à jour            |
| collection  | string  | Non    | Nom de la collection à supprimer                 |
| selection   | string  | Oui    | Filtre correspondant aux documents à supprimer   |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "remove",
  "properties": {
    "baseUrl": "https://vespa.example.com",
    "namespace": "default",
    "collection": "articles",
    "selection": "id:doc1"
  }
}
```

---

### update

Mettre à jour un document dans la base de données.

#### Paramètres

| Nom         | Type    | Requis | Description                                      |
|-------------|---------|--------|--------------------------------------------------|
| baseUrl     | string  | Non    | Adresse du serveur Vespa                         |
| namespace   | string  | Non    | Namespace du document à mettre à jour            |
| id          | string  | Oui    | ID du document à mettre à jour                   |
| collection  | string  | Non    | Nom de la collection dans laquelle mettre à jour |
| fields      | object  | Oui    | Champs à mettre à jour (objet JSON)              |

#### Exemple

```json
{
  "library": "@digipair/skill-vespa",
  "element": "update",
  "properties": {
    "baseUrl": "https://vespa.example.com",
    "namespace": "default",
    "id": "doc1",
    "collection": "articles",
    "fields": {
      "title": "Nouveau titre",
      "content": "Contenu mis à jour"
    }
  }
}
```

---

## Notes

- Les fonctions de cette librairie permettent d'interagir avec une base de données vectorielle Vespa pour la recherche, l'ajout, la suppression, la mise à jour et la découpe de texte.
- Les paramètres `baseUrl`, `namespace` et `collection` sont optionnels mais recommandés pour cibler précisément les opérations.
- Pour les opérations de recherche sémantique (`search`), il est conseillé de spécifier le modèle d'embeddings utilisé pour de meilleurs résultats.
- Les exemples fournis sont à adapter selon votre contexte d'utilisation et la structure de vos documents.