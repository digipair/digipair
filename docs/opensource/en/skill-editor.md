# @digipair/skill-editor

**Version:** 0.1.0  
**Summary:** Editing Reasonings  
**Description:** This skill allows for the management of editing reasonings for digipairs.  
**Icon:** 🏗

## Table of Contents

- [Functions](#functions)
  - [reasonings](#reasonings)
  - [reasoning](#reasoning)
  - [setReasoning](#setreasoning)
  - [removeReasoning](#removereasoning)
  - [digipairs](#digipairs)
  - [digipair](#digipair)
  - [setDigipair](#setdigipair)
  - [removeDigipair](#removedigipair)
  - [addDigipair](#adddigipair)

## Functions

### reasonings

Lists the reasonings of a digipair.

#### Parameters

| Name      | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| path      | string | No       | Path to the digipair's directory    |
| digipair  | string | Yes      | Name of the digipair                 |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "reasonings",
  "properties": {
    "path": "/path/to/directory",
    "digipair": "digipair_name"
  }
}
```

### reasoning

Information of a reasoning.

#### Parameters

| Name       | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| path       | string | No       | Path to the digipair's directory    |
| digipair   | string | Yes      | Name of the digipair                 |
| reasoning  | string | Yes      | Name of the reasoning                 |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "reasoning",
  "properties": {
    "path": "/path/to/directory",
    "digipair": "digipair_name",
    "reasoning": "reasoning_name"
  }
}
```

### setReasoning

Saving a reasoning.

#### Parameters

| Name       | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| path       | string | No       | Path to the digipair's directory    |
| digipair   | string | Yes      | Name of the digipair                 |
| reasoning  | string | Yes      | Name of the reasoning                 |
| value      | object | Yes      | Content of the reasoning to save      |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "setReasoning",
  "properties": {
    "path": "/path/to/directory",
    "digipair": "digipair_name",
    "reasoning": "reasoning_name",
    "value": {
      "key": "value"
    }
  }
}
```

### removeReasoning

Deleting a reasoning.

#### Parameters

| Name       | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| path       | string | No       | Path to the digipair's directory    |
| digipair   | string | Yes      | Name of the digipair                 |
| reasoning  | string | Yes      | Name of the reasoning                 |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "removeReasoning",
  "properties": {
    "path": "/path/to/directory",
    "digipair": "digipair_name",
    "reasoning": "reasoning_name"
  }
}
```

### digipairs

Lists the available digipairs.

#### Parameters

| Name  | Type   | Required | Description                          |
|-------|--------|----------|--------------------------------------|
| path  | string | No       | Path to the digipair's directory    |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "digipairs",
  "properties": {
    "path": "/path/to/directory"
  }
}
```

### digipair

Information of a digipair.

#### Parameters

| Name      | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| path      | string | No       | Path to the digipair's directory    |
| digipair  | string | Yes      | Name of the digipair                 |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "digipair",
  "properties": {
    "path": "/path/to/directory",
    "digipair": "digipair_name"
  }
}
```

### setDigipair

Saving a digipair.

#### Parameters

| Name      | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| path      | string | No       | Path to the digipair's directory    |
| digipair  | string | Yes      | Name of the digipair                 |
| value     | object | Yes      | Content of the digipair to save      |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "setDigipair",
  "properties": {
    "path": "/path/to/directory",
    "digipair": "digipair_name",
    "value": {
      "key": "value"
    }
  }
}
```

### removeDigipair

Deleting a digipair.

#### Parameters

| Name      | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| path      | string | No       | Path to the digipair's directory    |
| digipair  | string | Yes      | Name of the digipair                 |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "removeDigipair",
  "properties": {
    "path": "/path/to/directory",
    "digipair": "digipair_name"
  }
}
```

### addDigipair

Adds a digipair.

#### Parameters

| Name      | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| path      | string | No       | Path to the digipair's directory    |
| digipair  | string | Yes      | Name of the digipair                 |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "addDigipair",
  "properties": {
    "path": "/path/to/directory",
    "digipair": "digipair_name"
  }
}
```

## Notes

- The functions in this library allow for the management of reasonings and digipairs.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.