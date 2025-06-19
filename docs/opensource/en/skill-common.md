# @digipair/skill-common

**Version:** 0.1.0  
**Summary:** Default agent behaviors  
**Description:** This skill manages the default behaviors of agents.  
**Icon:** 🚀

---

## Table of Contents

- [Functions](#functions)
  - [infos](#infos)
  - [metadata](#metadata)
  - [boosts](#boosts)
  - [schema](#schema)
  - [context](#context)
- [Notes](#notes)

---

## Functions

### infos

List information

#### Parameters

| Name     | Type   | Required | Description                        |
| -------- | ------ | -------- | ---------------------------------- |
| digipair | string | Yes      | Name or identifier of the digipair |

#### Example

```json
{
  "library": "@digipair/skill-common",
  "element": "infos",
  "properties": {
    "digipair": "digital_pair_identifier"
  }
}
```

---

### metadata

List metadata

#### Parameters

| Name     | Type   | Required | Description                        |
| -------- | ------ | -------- | ---------------------------------- |
| digipair | string | Yes      | Name or identifier of the digipair |

#### Example

```json
{
  "library": "@digipair/skill-common",
  "element": "metadata",
  "properties": {
    "digipair": "digital_pair_identifier"
  }
}
```

---

### boosts

List boosts

#### Parameters

| Name     | Type   | Required | Description                        |
| -------- | ------ | -------- | ---------------------------------- |
| digipair | string | Yes      | Name or identifier of the digipair |

#### Example

```json
{
  "library": "@digipair/skill-common",
  "element": "boosts",
  "properties": {
    "digipair": "digital_pair_identifier"
  }
}
```

---

### schema

Get the schema associated with a digipair

#### Parameters

| Name     | Type   | Required | Description                        |
| -------- | ------ | -------- | ---------------------------------- |
| digipair | string | Yes      | Name or identifier of the digipair |

#### Example

```json
{
  "library": "@digipair/skill-common",
  "element": "schema",
  "properties": {
    "digipair": "digital_pair_identifier"
  }
}
```

---

### context

Get the context for a digipair and a reasoning

#### Parameters

| Name      | Type   | Required | Description                         |
| --------- | ------ | -------- | ----------------------------------- |
| digipair  | string | Yes      | Name or identifier of the digipair  |
| reasoning | string | Yes      | Name or identifier of the reasoning |

#### Example

```json
{
  "library": "@digipair/skill-common",
  "element": "context",
  "properties": {
    "digipair": "digital_pair_identifier",
    "reasoning": "reasoning_name"
  }
}
```

---

## Notes

- All functions require at least the `digipair` parameter (the digital pair identifier).
- The `context` function also requires the `reasoning` parameter.
- Make sure to provide valid identifiers for each required parameter.
- These functions are intended to be used in a JavaScript environment, not via an HTTP API.
- The function names correspond to the elements to invoke in the `@digipair/skill-common` library.

---

**Generic usage example:**

```js
const result = await skillCommon.<function>({
  digipair: "digital_pair_identifier",
  // reasoning: "reasoning_name" // if required
});
```

---

**For any contributions or questions, please refer to the official documentation or open an issue on the project repository.**
