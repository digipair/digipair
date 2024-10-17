# @digipair/skill-vespa

**Version:** 0.1.0  
**Summary:** Communication with a Vespa database  
**Description:** This skill provides functionalities to interact with the data of a Vespa vector database.  
**Icon:** 📘

## Table of Contents

- [Functions](#functions)
  - [find](#find)
  - [search](#search)
  - [textSplitter](#textSplitter)
  - [push](#push)
  - [remove](#remove)

## Functions

### find

Retrieve values from the database

#### Parameters

| Name        | Type   | Required | Description                                |
|-------------|--------|----------|--------------------------------------------|
| baseUrl     | string | No       | Address of the Vespa server                |
| collection  | string | No       | Name of the collection to search in        |
| limit       | number | No       | Maximum number of responses                 |
| orderby     | string | No       | Organization of the responses               |
| query       | string | Yes      | Search query                               |
| grouping    | string | No       | Grouping filter for the responses          |

#### Example

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

Semantic search within a collection

#### Parameters

| Name        | Type   | Required | Description                                |
|-------------|--------|----------|--------------------------------------------|
| embeddings  | array  | No       | Embedding model                            |
| baseUrl     | string | No       | Address of the Vespa server                |
| collection  | string | No       | Name of the collection                     |
| limit       | number | No       | Maximum number of results                  |
| orderby     | string | No       | Organization of the results                |
| targetHits  | number | No       | targetHits                                 |
| filter      | string | No       | Search filters                             |
| language    | string | Yes      | Search language                            |
| query       | string | Yes      | Semantic search query                      |

#### Example

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
    "query": "semantic search"
  }
}
```

### textSplitter

Splits text into chunks

#### Parameters

| Name      | Type   | Required | Description                                        |
|-----------|--------|----------|----------------------------------------------------|
| size      | number | No       | Size of the text chunks                            |
| overlap   | number | No       | Size difference tolerance to fit the text          |
| source    | string | Yes      | Metadata indicating the source of the data         |
| text      | string | Yes      | Text to be split                                   |

#### Example

```json
{
  "library": "@digipair/skill-vespa",
  "element": "textSplitter",
  "properties": {
    "size": 200,
    "overlap": 50,
    "source": "document1",
    "text": "This is a text to be split into chunks."
  }
}
```

### push

Add documents

#### Parameters

| Name        | Type   | Required | Description                                |
|-------------|--------|----------|--------------------------------------------|
| embeddings  | array  | No       | Embedding model                            |
| baseUrl     | string | No       | Address of the Vespa server                |
| collection  | string | No       | Name of the collection to add documents to |
| documents   | array  | Yes      | List of documents to add                   |

#### Example

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

Delete documents from the database

#### Parameters

| Name        | Type   | Required | Description                                |
|-------------|--------|----------|--------------------------------------------|
| baseUrl     | string | No       | Address of the Vespa server                |
| collection  | string | No       | Name of the collection to delete documents from |
| selection   | string | Yes      | Filter corresponding to the documents to delete |

#### Example

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

- The functions `find`, `search`, `textSplitter`, `push`, and `remove` are used to interact with a Vespa database.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.