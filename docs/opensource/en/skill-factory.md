# @digipair/skill-factory

**Version:** 0.1.0  
**Summary:** Actions in the Digipair factory  
**Description:** Actions in the Digipair factory.  
**Icon:** 🛠

## Table of Contents

- [Functions](#functions)
  - [start](#start)

## Functions

### start

Starts a reasoning from the Digipair factory.

#### Parameters

| Name      | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| digipair  | string | No       | Owner of the reasoning      |
| reasoning | string | Yes      | Name of the reasoning       |
| body      | object | No       | Data to send               |

#### Example

```json
{
  "library": "@digipair/skill-factory",
  "element": "start",
  "properties": {
    "digipair": "owner_identifier",
    "reasoning": "reasoning_name",
    "body": {
      "key": "value"
    }
  }
}
```

## Notes

- The `start` function is used to initiate a specific reasoning in the Digipair factory.
- The `digipair` parameter is optional and represents the owner of the reasoning.
- The `reasoning` parameter is mandatory and must contain the name of the reasoning to start.
- The `body` parameter is optional and can contain additional data to be sent when starting the reasoning.