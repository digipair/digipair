Here is the English technical documentation for **@digipair/skill-editor**, translated with attention to technical accuracy and clarity:

---

# @digipair/skill-editor

**Version:** 0.1.0  
**Summary:** Editing Reasonings  
**Description:** This skill allows you to manage the editing of digipair reasonings.  
**Icon:** 🏗

---

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
  - [metadata](#metadata)
  - [setAvatar](#setavatar)
  - [templates](#templates)
  - [schemas](#schemas)
  - [tools](#tools)

---

## Functions

### reasonings

List the reasonings of a digipair.

#### Parameters

| Name     | Type   | Required | Description                                 |
|----------|--------|----------|---------------------------------------------|
| path     | string | No       | Path to the digipair directory              |
| digipair | string | Yes      | Name of the digipair                        |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "reasonings",
  "properties": {
    "digipair": "digital_pair_name"
  }
}
```

---

### reasoning

Get information about a specific reasoning of a digipair.

#### Parameters

| Name      | Type   | Required | Description                                 |
|-----------|--------|----------|---------------------------------------------|
| path      | string | No       | Path to the digipair directory              |
| digipair  | string | Yes      | Name of the digipair                        |
| reasoning | string | Yes      | Name of the reasoning                       |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "reasoning",
  "properties": {
    "digipair": "digital_pair_name",
    "reasoning": "reasoning_name"
  }
}
```

---

### setReasoning

Save or update a reasoning for a digipair.

#### Parameters

| Name      | Type   | Required | Description                                 |
|-----------|--------|----------|---------------------------------------------|
| path      | string | No       | Path to the digipair directory              |
| digipair  | string | Yes      | Name of the digipair                        |
| reasoning | string | Yes      | Name of the reasoning                       |
| value     | object | Yes      | Content of the reasoning to save            |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "setReasoning",
  "properties": {
    "digipair": "digital_pair_name",
    "reasoning": "reasoning_name",
    "value": { "content": "..." }
  }
}
```

---

### removeReasoning

Delete a reasoning from a digipair.

#### Parameters

| Name      | Type   | Required | Description                                 |
|-----------|--------|----------|---------------------------------------------|
| path      | string | No       | Path to the digipair directory              |
| digipair  | string | Yes      | Name of the digipair                        |
| reasoning | string | Yes      | Name of the reasoning                       |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "removeReasoning",
  "properties": {
    "digipair": "digital_pair_name",
    "reasoning": "reasoning_name"
  }
}
```

---

### digipairs

List available digipairs.

#### Parameters

| Name | Type   | Required | Description                                 |
|------|--------|----------|---------------------------------------------|
| path | string | No       | Path to the digipairs directory             |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "digipairs",
  "properties": {}
}
```

---

### digipair

Get information about a digipair.

#### Parameters

| Name     | Type   | Required | Description                                 |
|----------|--------|----------|---------------------------------------------|
| path     | string | No       | Path to the digipair directory              |
| digipair | string | Yes      | Name of the digipair                        |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "digipair",
  "properties": {
    "digipair": "digital_pair_name"
  }
}
```

---

### setDigipair

Save or update a digipair.

#### Parameters

| Name     | Type   | Required | Description                                 |
|----------|--------|----------|---------------------------------------------|
| path     | string | No       | Path to the digipair directory              |
| digipair | string | Yes      | Name of the digipair                        |
| value    | object | Yes      | Content of the digipair to save             |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "setDigipair",
  "properties": {
    "digipair": "digital_pair_name",
    "value": { "content": "..." }
  }
}
```

---

### removeDigipair

Delete a digipair.

#### Parameters

| Name     | Type   | Required | Description                                 |
|----------|--------|----------|---------------------------------------------|
| path     | string | No       | Path to the digipair directory              |
| digipair | string | Yes      | Name of the digipair                        |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "removeDigipair",
  "properties": {
    "digipair": "digital_pair_name"
  }
}
```

---

### addDigipair

Add a new digipair from a template.

#### Parameters

| Name          | Type   | Required | Description                                 |
|---------------|--------|----------|---------------------------------------------|
| path          | string | No       | Path to the digipair directory              |
| templatesPath | string | No       | Path to the templates directory             |
| template      | string | Yes      | Template to use                             |
| data          | object | Yes      | Replacement data for the template           |
| digipair      | string | Yes      | Name of the digipair                        |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "addDigipair",
  "properties": {
    "template": "template_name",
    "data": { "key": "value" },
    "digipair": "digital_pair_name"
  }
}
```

---

### metadata

Get the metadata of a digipair.

#### Parameters

| Name     | Type   | Required | Description                                 |
|----------|--------|----------|---------------------------------------------|
| path     | string | No       | Path to the digipair directory              |
| digipair | string | Yes      | Name of the digipair                        |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "metadata",
  "properties": {
    "digipair": "digital_pair_name"
  }
}
```

---

### setAvatar

Set the avatar of a digipair.

#### Parameters

| Name     | Type   | Required | Description                                 |
|----------|--------|----------|---------------------------------------------|
| path     | string | No       | Path to the digipair directory              |
| digipair | string | Yes      | Name of the digipair                        |
| avatar   | string | Yes      | Avatar of the digipair (URL or base64)      |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "setAvatar",
  "properties": {
    "digipair": "digital_pair_name",
    "avatar": "avatar_url_or_base64"
  }
}
```

---

### templates

List available templates.

#### Parameters

| Name | Type   | Required | Description                                 |
|------|--------|----------|---------------------------------------------|
| path | string | No       | Path to the templates directory             |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "templates",
  "properties": {}
}
```

---

### schemas

List the schemas of the libraries.

#### Parameters

| Name      | Type   | Required | Description                                 |
|-----------|--------|----------|---------------------------------------------|
| libraries | object | Yes      | List of libraries                           |
| language  | string | Yes      | Schema language                             |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "schemas",
  "properties": {
    "libraries": { "lib1": true, "lib2": true },
    "language": "en"
  }
}
```

---

### tools

List available tools.

#### Parameters

| Name     | Type   | Required | Description                                 |
|----------|--------|----------|---------------------------------------------|
| language | string | Yes      | Language of the tools                       |

#### Example

```json
{
  "library": "@digipair/skill-editor",
  "element": "tools",
  "properties": {
    "language": "en"
  }
}
```

---

## Notes

- All functions are accessible via JavaScript function calls, not via an HTTP API.
- The `path` parameter is optional and allows you to specify a custom path for resource access.
- All required parameters must be provided to ensure proper function operation.
- Objects passed as parameters (`value`, `data`, `libraries`) must conform to the structure expected by the target function.
- The provided examples illustrate typical usage of each function in an integration context.

---

**For any contributions or questions, please refer to the GitHub repository associated with this library.**