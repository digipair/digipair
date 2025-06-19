# @digipair/skill-imap

**Version:** 0.1.0  
**Résumé:** IMAP email management  
**Description:** Cette compétence permet de gérer les emails via IMAP.  
**Icône:** 📨

---

## Table des matières

- [Fonctions](#fonctions)
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

## Fonctions

---

### parseOne

**Parsage d'un message**

#### Paramètres

| Nom         | Type   | Requis | Description         |
|-------------|--------|--------|---------------------|
| client      | object | Non    | Client IMAP         |
| message     | object | Oui    | Message à parser    |
| attachments | string | Non    | Pièces jointes      |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "parseOne",
  "properties": {
    "message": { /* objet message à parser */ }
  }
}
```

---

### parseAll

**Parsage de plusieurs messages**

#### Paramètres

| Nom         | Type    | Requis | Description                |
|-------------|---------|--------|----------------------------|
| client      | object  | Non    | Client IMAP                |
| messages    | array   | Oui    | Liste des messages à parser|
| attachments | string  | Non    | Pièces jointes             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "parseAll",
  "properties": {
    "messages": [ /* liste d'objets message */ ]
  }
}
```

---

### connect

**Connexion du client IMAP**

#### Paramètres

| Nom            | Type    | Requis | Description                        |
|----------------|---------|--------|------------------------------------|
| config         | object  | Non    | Configuration du client IMAP       |
| configExecute  | array   | Non    | Exécution de configuration         |
| load           | array   | Non    | Chargement des boîtes mail         |
| close          | array   | Non    | Fermeture des boîtes mail          |
| error          | array   | Non    | Gestion des erreurs                |
| exists         | array   | Non    | Vérification d'existence           |
| expunge        | array   | Non    | Expunge des boîtes mail            |
| flags          | array   | Non    | Gestion des drapeaux               |
| log            | array   | Non    | Log                                |
| mailboxClose   | array   | Non    | Log fermeture boîte mail           |
| mailboxOpen    | array   | Non    | Log ouverture boîte mail           |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "connect",
  "properties": {
    "config": { /* configuration IMAP */ }
  }
}
```

---

### search

**Recherche de messages**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| query   | object | Oui    | Requête de recherche|
| options | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "search",
  "properties": {
    "query": { /* critères de recherche */ }
  }
}
```

---

### getMailboxLock

**Récupérer une boîte mail verrouillée**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| path    | string | Non    | Chemin de la boîte  |
| options | object | Non    | Options             |

#### Exemple

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

**Récupérer le quota d'une boîte mail**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |
| path   | string | Oui    | Chemin de la boîte  |

#### Exemple

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

**Attendre de nouveaux messages**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "idle",
  "properties": {}
}
```

---

### list

**Lister les boîtes mail**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| options | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "list",
  "properties": {}
}
```

---

### listTree

**Lister les boîtes mail sous forme d'arbre**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| options | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "listTree",
  "properties": {}
}
```

---

### logout

**Déconnexion du client**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "logout",
  "properties": {}
}
```

---

### mailboxClose

**Fermer une boîte mail**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxClose",
  "properties": {}
}
```

---

### mailboxCreate

**Créer une boîte mail**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |
| path   | string | Oui    | Chemin de la boîte  |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxCreate",
  "properties": {
    "path": "NOUVELLE_BOITE"
  }
}
```

---

### mailboxDelete

**Supprimer une boîte mail**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |
| path   | string | Oui    | Chemin de la boîte  |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "mailboxDelete",
  "properties": {
    "path": "BOITE_A_SUPPRIMER"
  }
}
```

---

### mailboxOpen

**Ouvrir une boîte mail**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| path    | string | Non    | Chemin de la boîte  |
| options | object | Non    | Options             |

#### Exemple

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

**Renommer une boîte mail**

#### Paramètres

| Nom     | Type   | Requis | Description                |
|---------|--------|--------|----------------------------|
| client  | object | Non    | Client IMAP                |
| path    | string | Oui    | Chemin de la boîte actuelle|
| newPath | string | Oui    | Nouveau chemin             |

#### Exemple

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

**S'abonner à une boîte mail**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |
| path   | string | Oui    | Chemin de la boîte  |

#### Exemple

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

**Se désabonner d'une boîte mail**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |
| path   | string | Oui    | Chemin de la boîte  |

#### Exemple

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

**Copier un message**

#### Paramètres

| Nom         | Type   | Requis | Description         |
|-------------|--------|--------|---------------------|
| client      | object | Non    | Client IMAP         |
| range       | object | Oui    | Plage de messages   |
| destination | string | Oui    | Destination         |
| options     | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageCopy",
  "properties": {
    "range": { /* plage de messages */ },
    "destination": "ARCHIVES"
  }
}
```

---

### messageDelete

**Supprimer un message**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| range   | object | Oui    | Plage de messages   |
| options | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageDelete",
  "properties": {
    "range": { /* plage de messages */ }
  }
}
```

---

### messageFlagsAdd

**Ajouter des drapeaux à un message**

#### Paramètres

| Nom     | Type    | Requis | Description         |
|---------|---------|--------|---------------------|
| client  | object  | Non    | Client IMAP         |
| range   | object  | Oui    | Plage de messages   |
| flags   | array   | Oui    | Drapeaux à ajouter  |
| options | object  | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageFlagsAdd",
  "properties": {
    "range": { /* plage de messages */ },
    "flags": ["\\Seen"]
  }
}
```

---

### messageFlagsRemove

**Retirer des drapeaux d'un message**

#### Paramètres

| Nom     | Type    | Requis | Description         |
|---------|---------|--------|---------------------|
| client  | object  | Non    | Client IMAP         |
| range   | object  | Oui    | Plage de messages   |
| flags   | array   | Oui    | Drapeaux à retirer  |
| options | object  | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageFlagsRemove",
  "properties": {
    "range": { /* plage de messages */ },
    "flags": ["\\Flagged"]
  }
}
```

---

### messageFlagsSet

**Définir les drapeaux d'un message**

#### Paramètres

| Nom     | Type    | Requis | Description         |
|---------|---------|--------|---------------------|
| client  | object  | Non    | Client IMAP         |
| range   | object  | Oui    | Plage de messages   |
| flags   | array   | Oui    | Drapeaux à définir  |
| options | object  | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageFlagsSet",
  "properties": {
    "range": { /* plage de messages */ },
    "flags": ["\\Seen", "\\Answered"]
  }
}
```

---

### messageMove

**Déplacer un message**

#### Paramètres

| Nom         | Type   | Requis | Description         |
|-------------|--------|--------|---------------------|
| client      | object | Non    | Client IMAP         |
| range       | object | Oui    | Plage de messages   |
| destination | string | Oui    | Destination         |
| options     | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "messageMove",
  "properties": {
    "range": { /* plage de messages */ },
    "destination": "ARCHIVES"
  }
}
```

---

### noop

**Aucune opération**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "noop",
  "properties": {}
}
```

---

### setFlagColor

**Définir la couleur d'un drapeau**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |
| flag   | string | Oui    | Drapeau             |
| color  | string | Oui    | Couleur du drapeau  |

#### Exemple

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

**Récupérer le statut d'une boîte mail**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |
| path   | string | Oui    | Chemin de la boîte  |
| query  | object | Non    | Requête             |

#### Exemple

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

**Ajouter un message**

#### Paramètres

| Nom    | Type    | Requis | Description         |
|--------|---------|--------|---------------------|
| client | object  | Non    | Client IMAP         |
| path   | string  | Oui    | Chemin de la boîte  |
| content| string  | Oui    | Contenu du message  |
| flags  | array   | Non    | Drapeaux            |
| idate  | number  | Non    | Date du message     |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "append",
  "properties": {
    "path": "INBOX",
    "content": "Contenu du message"
  }
}
```

---

### close

**Fermer le client**

#### Paramètres

| Nom    | Type   | Requis | Description         |
|--------|--------|--------|---------------------|
| client | object | Non    | Client IMAP         |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "close",
  "properties": {}
}
```

---

### download

**Télécharger un message**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| range   | object | Oui    | Plage de messages   |
| part    | string | Non    | Partie du message   |
| options | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "download",
  "properties": {
    "range": { /* plage de messages */ }
  }
}
```

---

### downloadMany

**Télécharger plusieurs messages**

#### Paramètres

| Nom     | Type    | Requis | Description         |
|---------|---------|--------|---------------------|
| client  | object  | Non    | Client IMAP         |
| range   | object  | Oui    | Plage de messages   |
| parts   | array   | Oui    | Parties des messages|
| options | object  | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "downloadMany",
  "properties": {
    "range": { /* plage de messages */ },
    "parts": ["HEADER", "TEXT"]
  }
}
```

---

### fetch

**Récupérer des messages**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| range   | object | Oui    | Plage de messages   |
| query   | object | Oui    | Requête de recherche|
| options | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "fetch",
  "properties": {
    "range": { /* plage de messages */ },
    "query": { /* critères de recherche */ }
  }
}
```

---

### fetchAll

**Récupérer tous les messages**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| range   | object | Oui    | Plage de messages   |
| query   | object | Oui    | Requête de recherche|
| options | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "fetchAll",
  "properties": {
    "range": { /* plage de messages */ },
    "query": { /* critères de recherche */ }
  }
}
```

---

### fetchOne

**Récupérer un message**

#### Paramètres

| Nom     | Type   | Requis | Description         |
|---------|--------|--------|---------------------|
| client  | object | Non    | Client IMAP         |
| seq     | number | Oui    | Séquence du message |
| query   | object | Oui    | Requête de recherche|
| options | object | Non    | Options             |

#### Exemple

```json
{
  "library": "@digipair/skill-imap",
  "element": "fetchOne",
  "properties": {
    "seq": 42,
    "query": { /* critères de recherche */ }
  }
}
```

---

## Notes

- Toutes les fonctions attendent un objet `client` représentant la connexion IMAP, sauf indication contraire.
- Les paramètres obligatoires sont à fournir impérativement pour le bon fonctionnement de la fonction.
- Les exemples sont à adapter selon votre contexte d'utilisation et la structure de vos objets IMAP.
- Pour les opérations sur les messages, le paramètre `range` peut être un identifiant, une séquence ou un objet décrivant la plage de messages.
- Les options avancées dépendent de l'implémentation du client IMAP sous-jacent.

---

**Pour toute question ou contribution, consultez le dépôt GitHub du projet.**