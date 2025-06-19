# @digipair/skill-vespa

**Version:** 0.1.0  
**Summary:** Communication with a Vespa database  
**Description:** This skill provides features to interact with data in a Vespa vector database.  
**Icon:** 📘

## Table of Contents

- [Functions](#functions)
  - [find](#find)
  - [search](#search)
  - [textSplitter](#textsplitter)
  - [push](#push)
  - [remove](#remove)
  - [update](#update)

---

## Functions

### find

Retrieve values from the database.

#### Parameters

| Name       | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| baseUrl    | string | No       | Vespa server address              |
| namespace  | string | No       | Document namespace to update      |
| collection | string | No       | Name of the collection to query   |
| limit      | number | No       | Maximum number of responses       |
| orderby    | string | No       | Sort order of the responses       |
| query      | string | Yes      | Search query                      |
| grouping   | string | No       | Grouping filter for the responses |

#### Example

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

Semantic search within a collection.

#### Parameters

| Name       | Type   | Required | Description                  |
| ---------- | ------ | -------- | ---------------------------- |
| embeddings | array  | No       | Embedding model(s) to use    |
| baseUrl    | string | No       | Vespa server address         |
| namespace  | string | No       | Document namespace to update |
| collection | string | No       | Name of the collection       |
| limit      | number | No       | Maximum number of results    |
| orderby    | string | No       | Sort order of the results    |
| targetHits | number | No       | Target number of results     |
| filter     | string | No       | Search filters               |
| language   | string | Yes      | Search language              |
| query      | string | Yes      | Semantic search query        |

#### Example

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

Split a text into chunks.

#### Parameters

| Name    | Type   | Required | Description                          |
| ------- | ------ | -------- | ------------------------------------ |
| size    | number | No       | Size of the text chunks              |
| overlap | number | No       | Overlap tolerance to adjust the text |
| source  | string | Yes      | Metadata indicating the data source  |
| text    | string | Yes      | Text to split                        |

#### Example

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

Add documents to the database.

#### Parameters

| Name         | Type    | Required | Description                             |
| ------------ | ------- | -------- | --------------------------------------- |
| embeddings   | array   | No       | Embedding model(s) to use               |
| baseUrl      | string  | No       | Vespa server address                    |
| namespace    | string  | No       | Document namespace to update            |
| collection   | string  | No       | Name of the collection to add to        |
| asynchronous | boolean | No       | Asynchronous document addition          |
| documents    | array   | Yes      | List of documents to add (JSON objects) |

#### Example

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

Delete documents from the database.

#### Parameters

| Name       | Type   | Required | Description                             |
| ---------- | ------ | -------- | --------------------------------------- |
| baseUrl    | string | No       | Vespa server address                    |
| namespace  | string | No       | Document namespace to update            |
| collection | string | No       | Name of the collection to delete from   |
| selection  | string | Yes      | Filter matching the documents to delete |

#### Example

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

Update a document in the database.

#### Parameters

| Name       | Type   | Required | Description                         |
| ---------- | ------ | -------- | ----------------------------------- |
| baseUrl    | string | No       | Vespa server address                |
| namespace  | string | No       | Document namespace to update        |
| id         | string | Yes      | ID of the document to update        |
| collection | string | No       | Name of the collection to update in |
| fields     | object | Yes      | Fields to update (JSON object)      |

#### Example

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
      "title": "New title",
      "content": "Updated content"
    }
  }
}
```

---

## Notes

- The functions in this library allow you to interact with a Vespa vector database for search, addition, deletion, update, and text splitting.
- The `baseUrl`, `namespace`, and `collection` parameters are optional but recommended to precisely target operations.
- For semantic search operations (`search`), it is recommended to specify the embedding model used for best results.
- The provided examples should be adapted to your use case and the structure of your documents.
