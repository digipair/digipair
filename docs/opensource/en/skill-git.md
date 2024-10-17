# @digipair/skill-git

**Version:** 0.1.0  
**Summary:** Git repository management  
**Description:** This skill allows you to manage a Git repository.  
**Icon:** 💾

## Table of Contents

- [Functions](#functions)
  - [commit](#commit)
  - [push](#push)
  - [show](#show)
  - [log](#log)

## Functions

### commit

Perform a commit in the GIT repository.

#### Parameters

| Name     | Type   | Required | Description                          |
|----------|--------|----------|--------------------------------------|
| path     | string | No       | Path of the GIT repository           |
| selector | string | No       | Selector for the files to commit     |
| message  | string | No       | Commit message                       |

#### Example

```json
{
  "library": "@digipair/skill-git",
  "element": "commit",
  "properties": {
    "path": "/path/to/repo",
    "selector": "*.js",
    "message": "Initial commit"
  }
}
```

### push

Push commits to the GIT repository.

#### Parameters

| Name     | Type     | Required | Description                          |
|----------|----------|----------|--------------------------------------|
| path     | string   | No       | Path of the GIT repository           |
| options  | string[] | No       | Options sent during the push         |

#### Example

```json
{
  "library": "@digipair/skill-git",
  "element": "push",
  "properties": {
    "path": "/path/to/repo",
    "options": ["--force"]
  }
}
```

### show

Display information about a commit in the GIT repository.

#### Parameters

| Name     | Type     | Required | Description                          |
|----------|----------|----------|--------------------------------------|
| path     | string   | No       | Path of the GIT repository           |
| options  | string[] | No       | Options sent during the git show     |

#### Example

```json
{
  "library": "@digipair/skill-git",
  "element": "show",
  "properties": {
    "path": "/path/to/repo",
    "options": ["--stat"]
  }
}
```

### log

Display the commit log in the GIT repository.

#### Parameters

| Name        | Type    | Required | Description                                                                 |
|-------------|---------|----------|-----------------------------------------------------------------------------|
| path        | string  | No       | Path of the GIT repository                                                   |
| file        | string  | No       | File related to the log                                                      |
| format      | string  | No       | Output format described in pretty format                                     |
| from        | string  | No       | Starting commit identifier                                                   |
| to          | string  | No       | Ending commit identifier                                                     |
| mailMap     | boolean | No       | Enables the use of email mapping in return values                           |
| maxCount    | number  | No       | Limits the number of results to return                                       |
| multiline   | boolean | No       | Enables multiline values in the default format                               |
| splitter    | string  | No       | Character sequence to use as a delimiter between fields in the log          |
| strictDate  | boolean | No       | Switches the author date value to a strict ISO 8601 format                 |
| symmetric   | boolean | No       | Enables the symmetric revision range instead of the two-dot range           |

#### Example

```json
{
  "library": "@digipair/skill-git",
  "element": "log",
  "properties": {
    "path": "/path/to/repo",
    "file": "index.js",
    "format": "pretty",
    "from": "commit1",
    "to": "commit2",
    "mailMap": true,
    "maxCount": 10,
    "multiline": false,
    "splitter": "ò",
    "strictDate": true,
    "symmetric": false
  }
}
```

## Notes

- The functions `commit`, `push`, `show`, and `log` are used to manage basic operations on a GIT repository.
- Ensure to provide the appropriate parameters for each function to guarantee their proper functioning.