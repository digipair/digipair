Here is the English translation of your technical documentation for the `@digipair/skill-imap` project:

---

# @digipair/skill-imap

**Version:** 0.1.0  
**Summary:** IMAP email management  
**Description:** This skill enables email management via IMAP.  
**Icon:** 📨

---

## Table of Contents

- [Functions](#functions)
  - [parseOne](#parseone)
  - [parseAll](#parseall)
  - [connect](#connect)
  - [search](#search)
  - [getMailboxLock](#getmailboxlock)
  - [getQuota](#getquota)
  - [idle](#idle)
  - [list](#list)
  - [listTree](#listtree)
  - [logout](#logout)
  - [mailboxClose](#mailboxclose)
  - [mailboxCreate](#mailboxcreate)
  - [mailboxDelete](#mailboxdelete)
  - [mailboxOpen](#mailboxopen)
  - [mailboxRename](#mailboxrename)
  - [mailboxSubscribe](#mailboxsubscribe)
  - [mailboxUnsubscribe](#mailboxunsubscribe)
  - [messageCopy](#messagecopy)
  - [messageDelete](#messagedelete)
  - [messageFlagsAdd](#messageflagsadd)
  - [messageFlagsRemove](#messageflagsremove)
  - [messageFlagsSet](#messageflagsset)
  - [messageMove](#messagemove)
  - [noop](#noop)
  - [setFlagColor](#setflagcolor)
  - [status](#status)
  - [append](#append)
  - [close](#close)
  - [download](#download)
  - [downloadMany](#downloadmany)
  - [fetch](#fetch)
  - [fetchAll](#fetchall)
  - [fetchOne](#fetchone)

---

## Functions

---

### parseOne

**Parse a single message**

#### Parameters

| Name        | Type   | Required | Description         |
|-------------|--------|----------|---------------------|
| client      | object | No       | IMAP client         |
| message     | object | Yes      | Message to parse    |
| attachments | string | No       | Attachments         |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "parseOne",
  "properties": {
    "message": { /* message object to parse */ }
  }
}
```

---

### parseAll

**Parse multiple messages**

#### Parameters

| Name        | Type    | Required | Description                |
|-------------|---------|----------|----------------------------|
| client      | object  | No       | IMAP client                |
| messages    | array   | Yes      | List of messages to parse  |
| attachments | string  | No       | Attachments                |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "parseAll",
  "properties": {
    "messages": [ /* list of message objects */ ]
  }
}
```

---

### connect

**Connect the IMAP client**

#### Parameters

| Name           | Type    | Required | Description                        |
|----------------|---------|----------|------------------------------------|
| config         | object  | No       | IMAP client configuration          |
| configExecute  | array   | No       | Configuration execution            |
| load           | array   | No       | Mailbox loading                    |
| close          | array   | No       | Mailbox closing                    |
| error          | array   | No       | Error handling                     |
| exists         | array   | No       | Existence check                    |
| expunge        | array   | No       | Mailbox expunge                    |
| flags          | array   | No       | Flags management                   |
| log            | array   | No       | Log                                |
| mailboxClose   | array   | No       | Mailbox close log                  |
| mailboxOpen    | array   | No       | Mailbox open log                   |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "connect",
  "properties": {
    "config": { /* IMAP configuration */ }
  }
}
```

---

### search

**Search for messages**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| query   | object | Yes      | Search query        |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "search",
  "properties": {
    "query": { /* search criteria */ }
  }
}
```

---

### getMailboxLock

**Retrieve a locked mailbox**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| path    | string | No       | Mailbox path        |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "getMailboxLock",
  "properties": {
    "path": "INBOX"
  }
}
```

---

### getQuota

**Retrieve mailbox quota**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| path    | string | Yes      | Mailbox path        |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "getQuota",
  "properties": {
    "path": "INBOX"
  }
}
```

---

### idle

**Wait for new messages**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "idle",
  "properties": {}
}
```

---

### list

**List mailboxes**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "list",
  "properties": {}
}
```

---

### listTree

**List mailboxes as a tree**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "listTree",
  "properties": {}
}
```

---

### logout

**Logout the client**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "logout",
  "properties": {}
}
```

---

### mailboxClose

**Close a mailbox**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxClose",
  "properties": {}
}
```

---

### mailboxCreate

**Create a mailbox**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| path    | string | Yes      | Mailbox path        |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxCreate",
  "properties": {
    "path": "NEW_MAILBOX"
  }
}
```

---

### mailboxDelete

**Delete a mailbox**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| path    | string | Yes      | Mailbox path        |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxDelete",
  "properties": {
    "path": "MAILBOX_TO_DELETE"
  }
}
```

---

### mailboxOpen

**Open a mailbox**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| path    | string | No       | Mailbox path        |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxOpen",
  "properties": {
    "path": "INBOX"
  }
}
```

---

### mailboxRename

**Rename a mailbox**

#### Parameters

| Name     | Type   | Required | Description                |
|----------|--------|----------|----------------------------|
| client   | object | No       | IMAP client                |
| path     | string | Yes      | Current mailbox path       |
| newPath  | string | Yes      | New mailbox path           |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxRename",
  "properties": {
    "path": "INBOX",
    "newPath": "ARCHIVES"
  }
}
```

---

### mailboxSubscribe

**Subscribe to a mailbox**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| path    | string | Yes      | Mailbox path        |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxSubscribe",
  "properties": {
    "path": "NEWSLETTER"
  }
}
```

---

### mailboxUnsubscribe

**Unsubscribe from a mailbox**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| path    | string | Yes      | Mailbox path        |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxUnsubscribe",
  "properties": {
    "path": "NEWSLETTER"
  }
}
```

---

### messageCopy

**Copy a message**

#### Parameters

| Name        | Type   | Required | Description         |
|-------------|--------|----------|---------------------|
| client      | object | No       | IMAP client         |
| range       | object | Yes      | Message range       |
| destination | string | Yes      | Destination         |
| options     | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageCopy",
  "properties": {
    "range": { /* message range */ },
    "destination": "ARCHIVES"
  }
}
```

---

### messageDelete

**Delete a message**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| range   | object | Yes      | Message range       |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageDelete",
  "properties": {
    "range": { /* message range */ }
  }
}
```

---

### messageFlagsAdd

**Add flags to a message**

#### Parameters

| Name    | Type    | Required | Description         |
|---------|---------|----------|---------------------|
| client  | object  | No       | IMAP client         |
| range   | object  | Yes      | Message range       |
| flags   | array   | Yes      | Flags to add        |
| options | object  | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageFlagsAdd",
  "properties": {
    "range": { /* message range */ },
    "flags": ["\\Seen"]
  }
}
```

---

### messageFlagsRemove

**Remove flags from a message**

#### Parameters

| Name    | Type    | Required | Description         |
|---------|---------|----------|---------------------|
| client  | object  | No       | IMAP client         |
| range   | object  | Yes      | Message range       |
| flags   | array   | Yes      | Flags to remove     |
| options | object  | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageFlagsRemove",
  "properties": {
    "range": { /* message range */ },
    "flags": ["\\Flagged"]
  }
}
```

---

### messageFlagsSet

**Set flags for a message**

#### Parameters

| Name    | Type    | Required | Description         |
|---------|---------|----------|---------------------|
| client  | object  | No       | IMAP client         |
| range   | object  | Yes      | Message range       |
| flags   | array   | Yes      | Flags to set        |
| options | object  | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageFlagsSet",
  "properties": {
    "range": { /* message range */ },
    "flags": ["\\Seen", "\\Answered"]
  }
}
```

---

### messageMove

**Move a message**

#### Parameters

| Name        | Type   | Required | Description         |
|-------------|--------|----------|---------------------|
| client      | object | No       | IMAP client         |
| range       | object | Yes      | Message range       |
| destination | string | Yes      | Destination         |
| options     | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageMove",
  "properties": {
    "range": { /* message range */ },
    "destination": "ARCHIVES"
  }
}
```

---

### noop

**No operation**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "noop",
  "properties": {}
}
```

---

### setFlagColor

**Set the color of a flag**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| flag    | string | Yes      | Flag                |
| color   | string | Yes      | Flag color          |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "setFlagColor",
  "properties": {
    "flag": "Important",
    "color": "#FF0000"
  }
}
```

---

### status

**Retrieve the status of a mailbox**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| path    | string | Yes      | Mailbox path        |
| query   | object | No       | Query               |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "status",
  "properties": {
    "path": "INBOX"
  }
}
```

---

### append

**Append a message**

#### Parameters

| Name    | Type    | Required | Description         |
|---------|---------|----------|---------------------|
| client  | object  | No       | IMAP client         |
| path    | string  | Yes      | Mailbox path        |
| content | string  | Yes      | Message content     |
| flags   | array   | No       | Flags               |
| idate   | number  | No       | Message date        |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "append",
  "properties": {
    "path": "INBOX",
    "content": "Message content"
  }
}
```

---

### close

**Close the client**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "close",
  "properties": {}
}
```

---

### download

**Download a message**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| range   | object | Yes      | Message range       |
| part    | string | No       | Message part        |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "download",
  "properties": {
    "range": { /* message range */ }
  }
}
```

---

### downloadMany

**Download multiple messages**

#### Parameters

| Name    | Type    | Required | Description             |
|---------|---------|----------|-------------------------|
| client  | object  | No       | IMAP client             |
| range   | object  | Yes      | Message range           |
| parts   | array   | Yes      | Message parts           |
| options | object  | No       | Options                 |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "downloadMany",
  "properties": {
    "range": { /* message range */ },
    "parts": ["HEADER", "TEXT"]
  }
}
```

---

### fetch

**Fetch messages**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| range   | object | Yes      | Message range       |
| query   | object | Yes      | Search query        |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "fetch",
  "properties": {
    "range": { /* message range */ },
    "query": { /* search criteria */ }
  }
}
```

---

### fetchAll

**Fetch all messages**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| range   | object | Yes      | Message range       |
| query   | object | Yes      | Search query        |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "fetchAll",
  "properties": {
    "range": { /* message range */ },
    "query": { /* search criteria */ }
  }
}
```

---

### fetchOne

**Fetch a single message**

#### Parameters

| Name    | Type   | Required | Description         |
|---------|--------|----------|---------------------|
| client  | object | No       | IMAP client         |
| seq     | number | Yes      | Message sequence    |
| query   | object | Yes      | Search query        |
| options | object | No       | Options             |

#### Example

```json
{
  "library": "@digipair/skill-imap",
  "element": "fetchOne",
  "properties": {
    "seq": 42,
    "query": { /* search criteria */ }
  }
}
```

---

## Notes

- All functions expect a `client` object representing the IMAP connection, unless otherwise specified.
- Required parameters must be provided for the function to work properly.
- Examples should be adapted to your usage context and the structure of your IMAP objects.
- For message operations, the `range` parameter can be an identifier, a sequence, or an object describing the message range.
- Advanced options depend on the underlying IMAP client implementation.

---

**For any questions or contributions, please refer to the project's GitHub repository.**