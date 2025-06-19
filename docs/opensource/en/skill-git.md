# @digipair/skill-git

**Version:** 0.1.0  
**Summary:** Management of a git repository  
**Description:** This skill allows you to manage a git repository.  
**Icon:** 💾

## Table of Contents

- [Functions](#functions)
  - [commit](#commit)
  - [push](#push)
  - [show](#show)
  - [log](#log)

---

## Functions

### commit

Performs a commit in a GIT repository.

#### Parameters

| Name     | Type   | Required | Description                       |
| -------- | ------ | -------- | --------------------------------- |
| path     | string | No       | Path to the GIT repository        |
| selector | string | No       | File selector for files to commit |
| message  | string | No       | Commit message                    |

#### Example

```json
{
  "library": "@digipair/skill-git",
  "element": "commit",
  "properties": {
    "path": "/path/to/my/repo",
    "selector": "*.js",
    "message": "feat: add a new feature"
  }
}
```

---

### push

Pushes local commits to the remote repository.

#### Parameters

| Name    | Type     | Required | Description                                  |
| ------- | -------- | -------- | -------------------------------------------- |
| path    | string   | No       | Path to the GIT repository                   |
| options | string[] | No       | Options passed during push (e.g., `--force`) |

#### Example

```json
{
  "library": "@digipair/skill-git",
  "element": "push",
  "properties": {
    "path": "/path/to/my/repo",
    "options": ["--force"]
  }
}
```

---

### show

Displays the details of a commit or a GIT object.

#### Parameters

| Name    | Type     | Required | Description                |
| ------- | -------- | -------- | -------------------------- |
| path    | string   | No       | Path to the GIT repository |
| options | string[] | No       | Options passed to git show |

#### Example

```json
{
  "library": "@digipair/skill-git",
  "element": "show",
  "properties": {
    "path": "/path/to/my/repo",
    "options": ["--stat"]
  }
}
```

---

### log

Retrieves the commit history of a GIT repository.

#### Parameters

| Name       | Type    | Required | Description                                                   |
| ---------- | ------- | -------- | ------------------------------------------------------------- |
| path       | string  | No       | Path to the GIT repository                                    |
| file       | string  | No       | File concerned by the log                                     |
| format     | string  | No       | Output format (pretty format)                                 |
| from       | string  | No       | Starting commit identifier                                    |
| to         | string  | No       | Ending commit identifier                                      |
| mailMap    | boolean | No       | Enables email mapping in the output (name/email)              |
| maxCount   | number  | No       | Limits the number of results                                  |
| multiline  | boolean | No       | Enables multiline values in the default format                |
| splitter   | string  | No       | Character sequence used as a field separator (default: `ò`)   |
| strictDate | boolean | No       | Uses strict ISO 8601 date format                              |
| symmetric  | boolean | No       | Enables symmetric revision range instead of the two-dot range |

#### Example

```json
{
  "library": "@digipair/skill-git",
  "element": "log",
  "properties": {
    "path": "/path/to/my/repo",
    "file": "src/index.js",
    "format": "oneline",
    "from": "a1b2c3d",
    "to": "d4e5f6g",
    "mailMap": true,
    "maxCount": 10,
    "multiline": false,
    "splitter": "|||",
    "strictDate": true,
    "symmetric": false
  }
}
```

---

## Notes

- All functions are accessible via JavaScript function calls, not via an HTTP API.
- All parameters are optional, but it is recommended to specify at least the repository path (`path`) to ensure proper operation.
- The advanced options of the `log` function allow you to tailor the output for specific analysis or integration needs.
- Make sure the execution context has the necessary permissions on the targeted GIT repository.

---

**@digipair/skill-git** facilitates programmatic management of GIT repositories in your JavaScript projects.
