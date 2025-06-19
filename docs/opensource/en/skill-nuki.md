# @digipair/skill-nuki

**Version:** 0.1.0  
**Summary:** Management of a Nuki lock  
**Description:** This skill allows you to manage a Nuki lock.  
**Icon:** 🔐

---

## Table of Contents

- [Functions](#functions)
  - [unlock](#unlock)
  - [lock](#lock)

---

## Functions

### unlock

Unlocks a Nuki lock.

#### Parameters

| Name              | Type   | Required | Description                 |
| ----------------- | ------ | -------- | --------------------------- |
| id                | string | Yes      | Identifier of the Nuki lock |
| NUKI_API_KEY      | string | No       | Nuki API key                |
| NUKI_API_ENDPOINT | string | No       | Nuki API endpoint           |

#### Example

```json
{
  "library": "@digipair/skill-nuki",
  "element": "unlock",
  "properties": {
    "id": "nuki-lock-1234",
    "NUKI_API_KEY": "your_nuki_api_key",
    "NUKI_API_ENDPOINT": "https://api.nuki.io"
  }
}
```

---

### lock

Locks a Nuki lock.

#### Parameters

| Name              | Type   | Required | Description                 |
| ----------------- | ------ | -------- | --------------------------- |
| id                | string | Yes      | Identifier of the Nuki lock |
| NUKI_API_KEY      | string | No       | Nuki API key                |
| NUKI_API_ENDPOINT | string | No       | Nuki API endpoint           |

#### Example

```json
{
  "library": "@digipair/skill-nuki",
  "element": "lock",
  "properties": {
    "id": "nuki-lock-1234",
    "NUKI_API_KEY": "your_nuki_api_key",
    "NUKI_API_ENDPOINT": "https://api.nuki.io"
  }
}
```

---

## Notes

- The `unlock` and `lock` functions respectively unlock and lock a Nuki lock using its identifier.
- The `id` parameter is mandatory and must correspond to the unique identifier of the Nuki lock to be controlled.
- The `NUKI_API_KEY` and `NUKI_API_ENDPOINT` parameters are optional. If not provided, the default environment configuration will be used.
- Make sure that the provided API key has the necessary permissions to perform the requested action on the specified lock.

---

**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT
