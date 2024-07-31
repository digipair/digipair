# @digipair/skill-mongodb

**Version:** 0.1.0  
**Summary:** Access to a MongoDB database  
**Description:** This skill allows you to manage a MongoDB database.  
**Icon:** 💻

## Table of Contents

- [Functions](#functions)
  - [database](#database)
  - [find](#find)
  - [findOne](#findOne)
  - [findById](#findById)
  - [insertOne](#insertOne)
  - [updateOne](#updateOne)
  - [updateById](#updateById)

## Functions

### database

Connect to a MongoDB database

#### Parameters

| Name      | Type   | Required | Description                     |
|-----------|--------|----------|---------------------------------|
| url       | string | Yes      | MongoDB server address          |
| database  | string | Yes      | Name of the database            |

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

### find

Search in a MongoDB database

#### Parameters

| Name        | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| client      | array  | No       | Database connection client            |
| options     | object | No       | Search options                        |
| collection  | string | Yes      | Name of the collection               |
| filter      | object | Yes      | Search filter                        |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "find",
  "properties": {
    "collection": "my_collection",
    "filter": { "name": "example" }
  }
}
```

### findOne

Search for a single item in a MongoDB database

#### Parameters

| Name        | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| client      | array  | No       | Database connection client            |
| options     | object | No       | Search options                        |
| collection  | string | Yes      | Name of the collection               |
| filter      | object | Yes      | Search filter                        |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "findOne",
  "properties": {
    "collection": "my_collection",
    "filter": { "name": "example" }
  }
}
```

### findById

Search for an item by ID in a MongoDB database

#### Parameters

| Name        | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| client      | array  | No       | Database connection client            |
| options     | object | No       | Search options                        |
| collection  | string | Yes      | Name of the collection               |
| id          | object | Yes      | Identifier of the item               |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "findById",
  "properties": {
    "collection": "my_collection",
    "id": { "_id": "60c72b2f9b1d4c3d88f1e8b5" }
  }
}
```

### insertOne

Insert an item into a MongoDB database

#### Parameters

| Name        | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| client      | array  | No       | Database connection client            |
| options     | object | No       | Insert options                        |
| collection  | string | Yes      | Name of the collection               |
| document    | object | Yes      | Document to insert                   |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "insertOne",
  "properties": {
    "collection": "my_collection",
    "document": { "name": "example", "value": 123 }
  }
}
```

### updateOne

Update an item in a MongoDB database

#### Parameters

| Name        | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| client      | array  | No       | Database connection client            |
| options     | object | No       | Update options                        |
| collection  | string | Yes      | Name of the collection               |
| filter      | object | Yes      | Search filter                        |
| update      | object | Yes      | Update filter                        |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "updateOne",
  "properties": {
    "collection": "my_collection",
    "filter": { "name": "example" },
    "update": { "$set": { "value": 456 } }
  }
}
```

### updateById

Update an item by ID in a MongoDB database

#### Parameters

| Name        | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| client      | array  | No       | Database connection client            |
| options     | object | No       | Update options                        |
| id          | string | Yes      | Identifier of the item               |
| collection  | string | Yes      | Name of the collection               |
| update      | object | Yes      | Update filter                        |

#### Example

```json
{
  "library": "@digipair/skill-mongodb",
  "element": "updateById",
  "properties": {
    "collection": "my_collection",
    "id": "60c72b2f9b1d4c3d88f1e8b5",
    "update": { "$set": { "value": 789 } }
  }
}
```

## Notes

- The functions in this library allow you to manage common operations on a MongoDB database, such as connecting, searching, inserting, and updating documents.
- Make sure to provide the required parameters for each function to ensure their proper functioning.