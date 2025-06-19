# @digipair/skill-s3

**Version:** 0.1.0  
**Summary:** S3 File Manager  
**Description:** Manage files on AWS S3 (upload, download, delete, list).  
**Icon:** 🗂️

## Table of Contents

- [Functions](#functions)
  - [upload](#upload)
  - [download](#download)
  - [delete](#delete)
  - [list](#list)

---

## Functions

### upload

Upload a file to an S3 bucket.

#### Parameters

| Name    | Type   | Required | Description                                             |
| ------- | ------ | -------- | ------------------------------------------------------- |
| bucket  | string | Yes      | Name of the target S3 bucket.                           |
| key     | string | Yes      | Key (path) where the file will be stored in the bucket. |
| content | string | Yes      | File content encoded in base64 (with data URI prefix).  |
| config  | object | No       | AWS SDK client configuration (optional).                |

#### Example

```json
{
  "library": "@digipair/skill-s3",
  "element": "upload",
  "properties": {
    "bucket": "my-bucket",
    "key": "documents/report.pdf",
    "content": "data:application/pdf;base64,JVBERi0xLjQKJcfs...",
    "config": {
      "region": "eu-west-1",
      "accessKeyId": "AKIA...",
      "secretAccessKey": "..."
    }
  }
}
```

---

### download

Download a file from an S3 bucket.

#### Parameters

| Name   | Type   | Required | Description                                       |
| ------ | ------ | -------- | ------------------------------------------------- |
| bucket | string | Yes      | Name of the S3 bucket.                            |
| key    | string | Yes      | Key (path) of the file to download.               |
| range  | string | No       | Content range to download (e.g., "bytes=0-1023"). |
| config | object | No       | AWS SDK client configuration (optional).          |

#### Example

```json
{
  "library": "@digipair/skill-s3",
  "element": "download",
  "properties": {
    "bucket": "my-bucket",
    "key": "documents/report.pdf",
    "range": "bytes=0-1023",
    "config": {
      "region": "eu-west-1"
    }
  }
}
```

---

### delete

Delete a file from an S3 bucket.

#### Parameters

| Name   | Type   | Required | Description                              |
| ------ | ------ | -------- | ---------------------------------------- |
| bucket | string | Yes      | Name of the S3 bucket.                   |
| key    | string | Yes      | Key (path) of the file to delete.        |
| config | object | No       | AWS SDK client configuration (optional). |

#### Example

```json
{
  "library": "@digipair/skill-s3",
  "element": "delete",
  "properties": {
    "bucket": "my-bucket",
    "key": "documents/report.pdf",
    "config": {
      "region": "eu-west-1"
    }
  }
}
```

---

### list

List files in an S3 bucket, optionally filtered by prefix.

#### Parameters

| Name   | Type   | Required | Description                              |
| ------ | ------ | -------- | ---------------------------------------- |
| bucket | string | Yes      | Name of the S3 bucket.                   |
| prefix | string | No       | Prefix (folder) to filter objects.       |
| config | object | No       | AWS SDK client configuration (optional). |

#### Example

```json
{
  "library": "@digipair/skill-s3",
  "element": "list",
  "properties": {
    "bucket": "my-bucket",
    "prefix": "documents/",
    "config": {
      "region": "eu-west-1"
    }
  }
}
```

---

## Notes

- All functions require at least the bucket name (`bucket`) and, except for `list`, the object key (`key`).
- The `config` parameter allows you to customize the AWS configuration (region, credentials, etc.) if needed.
- The content of files to upload must be base64-encoded and include the data URI prefix.
- For the `download` function, the `range` parameter allows downloading a part of the file (optional).
- Make sure the AWS permissions associated with the client allow the desired operations on the bucket and objects.
