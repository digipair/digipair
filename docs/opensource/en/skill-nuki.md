# @digipair/skill-nuki

**Version:** 0.1.0  
**Summary:** Management of a Nuki lock  
**Description:** This skill allows you to manage a Nuki lock.  
**Icon:** 🔐

## Table of Contents

- [Functions](#functions)
  - [unlock](#unlock)
  - [lock](#lock)

## Functions

### unlock

Unlocks a Nuki lock.

#### Parameters

| Name               | Type   | Required | Description                |
|--------------------|--------|----------|----------------------------|
| id                 | string | Yes      | Identifier of the lock     |
| NUKI_API_KEY       | string | No       | Nuki API key               |
| NUKI_API_ENDPOINT  | string | No       | Nuki API endpoint          |

#### Example

```json
{
  "library": "@digipair/skill-nuki",
  "element": "unlock",
  "properties": {
    "id": "lock_identifier",
    "NUKI_API_KEY": "your_api_key",
    "NUKI_API_ENDPOINT": "https://api.nuki.io"
  }
}
```

### lock

Locks a Nuki lock.

#### Parameters

| Name               | Type   | Required | Description                |
|--------------------|--------|----------|----------------------------|
| id                 | string | Yes      | Identifier of the lock     |
| NUKI_API_KEY       | string | No       | Nuki API key               |
| NUKI_API_ENDPOINT  | string | No       | Nuki API endpoint          |

#### Example

```json
{
  "library": "@digipair/skill-nuki",
  "element": "lock",
  "properties": {
    "id": "lock_identifier",
    "NUKI_API_KEY": "your_api_key",
    "NUKI_API_ENDPOINT": "https://api.nuki.io"
  }
}
```

## Notes

- The `unlock` and `lock` functions are used respectively to open and close a Nuki lock.
- Make sure to provide a valid lock identifier for the `id` parameter.
- The `NUKI_API_KEY` and `NUKI_API_ENDPOINT` parameters are optional and can be used to specify a custom API key and endpoint for the Nuki API.