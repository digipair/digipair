# @digipair/skill-mongodb

**Version:** 0.1.0  
**Summary:** Access to a MongoDB database  
**Description:** This skill allows you to manage a MongoDB database.  
**Icon:** 💻

## Table of Contents

- [Functions](#functions)
  - [database](#database)
  - [find](#find)
  - [findOne](#findone)
  - [findById](#findbyid)
  - [insertOne](#insertone)
  - [updateOne](#updateone)
  - [updateById](#updatebyid)

---

## Functions

### database

Connects to a MongoDB database.

#### Parameters

| Name     | Type   | Required | Description            |
| -------- | ------ | -------- | ---------------------- |
| url      | string | Yes      | MongoDB server address |
| database | string | Yes      | Name of the database   |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "database",
  "properties": {
    "url": "mongodb://localhost:27017",
    "database": "my_database"
  }
}
```

---

### find

Searches for documents in a MongoDB collection.

#### Parameters

| Name       | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| client     | array  | No       | Database connection client |
| options    | object | No       | Search options             |
| collection | string | Yes      | Name of the collection     |
| filter     | object | Yes      | Search filter              |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "find",
  "properties": {
    "collection": "users",
    "filter": { "age": { "$gt": 18 } }
  }
}
```

---

### findOne

Searches for a single document in a MongoDB collection.

#### Parameters

| Name       | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| client     | array  | No       | Database connection client |
| options    | object | No       | Search options             |
| collection | string | Yes      | Name of the collection     |
| filter     | object | Yes      | Search filter              |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "findOne",
  "properties": {
    "collection": "users",
    "filter": { "email": "example@domain.com" }
  }
}
```

---

### findById

Searches for a document by its identifier in a MongoDB collection.

#### Parameters

| Name       | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| client     | array  | No       | Database connection client |
| options    | object | No       | Search options             |
| collection | string | Yes      | Name of the collection     |
| id         | object | Yes      | Document identifier        |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "findById",
  "properties": {
    "collection": "users",
    "id": { "$oid": "60c72b2f9b1e8a5f8c8e4d3a" }
  }
}
```

---

### insertOne

Inserts a document into a MongoDB collection.

#### Parameters

| Name       | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| client     | array  | No       | Database connection client |
| options    | object | No       | Insert options             |
| collection | string | Yes      | Name of the collection     |
| document   | object | Yes      | Document to insert         |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "insertOne",
  "properties": {
    "collection": "users",
    "document": { "name": "Dupont", "age": 30 }
  }
}
```

---

### updateOne

Updates a document in a MongoDB collection.

#### Parameters

| Name       | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| client     | array  | No       | Database connection client |
| options    | object | No       | Update options             |
| collection | string | Yes      | Name of the collection     |
| filter     | object | Yes      | Search filter              |
| update     | object | Yes      | Update operations          |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "updateOne",
  "properties": {
    "collection": "users",
    "filter": { "email": "example@domain.com" },
    "update": { "$set": { "age": 31 } }
  }
}
```

---

### updateById

Updates a document by its identifier in a MongoDB collection.

#### Parameters

| Name       | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| client     | array  | No       | Database connection client |
| options    | object | No       | Update options             |
| id         | string | Yes      | Document identifier        |
| collection | string | Yes      | Name of the collection     |
| update     | object | Yes      | Update operations          |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "updateById",
  "properties": {
    "collection": "users",
    "id": "60c72b2f9b1e8a5f8c8e4d3a",
    "update": { "$set": { "name": "Durand" } }
  }
}
```

---

## Notes

- Functions generally require a prior connection to the database using the `database` function.
- The `client` parameter can be omitted if the connection is managed internally or via the execution context.
- Filters and updates must follow MongoDB syntax.
- For identifiers (`id`), use the appropriate format (e.g., ObjectId for MongoDB).

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT
