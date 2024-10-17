# @digipair/skill-common

**Version:** 0.1.0  
**Summary:** Default behaviors of agents  
**Description:** This skill allows managing the default behaviors of agents.  
**Icon:** 🚀

## Table of Contents

- [Functions](#functions)
  - [metadata](#metadata)
  - [boosts](#boosts)

## Functions

### metadata

List the metadata

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| digipair  | string | Yes      | Identifier of the digipair |

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

### boosts

List the boosts

#### Parameters

| Name      | Type   | Required | Description |
|-----------|--------|----------|-------------|
| digipair  | string | Yes      | Identifier of the digipair |

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

## Notes

- The `metadata` and `boosts` functions are used to list the metadata and boosts associated with a digital pair, respectively.
- Make sure to provide a valid digipair identifier for the `digipair` parameter.