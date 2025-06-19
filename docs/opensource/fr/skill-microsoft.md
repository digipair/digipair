# @digipair/skill-microsoft

**Version:** 0.1.0  
**Summary:** Communication with Microsoft services  
**Description:** This skill allows the use of Microsoft services  
**Icon:** ❖

---

## Table des matières

- [Fonctions](#fonctions)
  - [request](#request)
  - [create](#create)
  - [read](#read)
  - [update](#update)
  - [partialUpdate](#partialupdate)
  - [remove](#remove)
- [Notes](#notes)

---

## Fonctions

### request

Exécute un service Microsoft générique.

#### Paramètres

| Nom                  | Type   | Requis | Description                                      |
|----------------------|--------|--------|--------------------------------------------------|
| path                 | string | Oui    | Chemin du service à exécuter                     |
| method               | string | Non    | Méthode HTTP à utiliser (GET, POST, etc.)        |
| body                 | object | Non    | Valeur à envoyer                                |
| version              | string | Non    | Version de l'API à utiliser                      |
| headers              | object | Non    | En-têtes à envoyer                               |
| OAUTH_CLIENT_ID      | string | Non    | OAuth client ID                                  |
| OAUTH_CLIENT_SECRET  | string | Non    | OAuth client secret                              |
| TENANT_ID            | string | Non    | Tenant ID                                        |
| type                 | string | Non    | Type de sortie attendu du service                |
| contentType          | string | Non    | Type de contenu de la requête                    |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "request",
  "properties": {
    "path": "/me/messages",
    "method": "GET",
    "OAUTH_CLIENT_ID": "votre_client_id",
    "OAUTH_CLIENT_SECRET": "votre_client_secret",
    "TENANT_ID": "votre_tenant_id"
  }
}
```

---

### create

Ajoute une ressource Microsoft.

#### Paramètres

| Nom                  | Type   | Requis | Description                                      |
|----------------------|--------|--------|--------------------------------------------------|
| path                 | string | Oui    | Chemin du service à exécuter                     |
| body                 | object | Non    | Valeur à envoyer                                |
| version              | string | Non    | Version de l'API à utiliser                      |
| headers              | object | Non    | En-têtes à envoyer                               |
| OAUTH_CLIENT_ID      | string | Non    | OAuth client ID                                  |
| OAUTH_CLIENT_SECRET  | string | Non    | OAuth client secret                              |
| TENANT_ID            | string | Non    | Tenant ID                                        |
| type                 | string | Non    | Type de sortie attendu du service                |
| contentType          | string | Non    | Type de contenu de la requête                    |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "create",
  "properties": {
    "path": "/me/events",
    "body": {
      "subject": "Réunion",
      "start": { "dateTime": "2024-06-01T10:00:00", "timeZone": "Europe/Paris" },
      "end": { "dateTime": "2024-06-01T11:00:00", "timeZone": "Europe/Paris" }
    },
    "OAUTH_CLIENT_ID": "votre_client_id",
    "OAUTH_CLIENT_SECRET": "votre_client_secret",
    "TENANT_ID": "votre_tenant_id"
  }
}
```

---

### read

Lit une ressource Microsoft.

#### Paramètres

| Nom                  | Type   | Requis | Description                                      |
|----------------------|--------|--------|--------------------------------------------------|
| path                 | string | Oui    | Chemin du service à exécuter                     |
| version              | string | Non    | Version de l'API à utiliser                      |
| headers              | object | Non    | En-têtes à envoyer                               |
| OAUTH_CLIENT_ID      | string | Non    | OAuth client ID                                  |
| OAUTH_CLIENT_SECRET  | string | Non    | OAuth client secret                              |
| TENANT_ID            | string | Non    | Tenant ID                                        |
| type                 | string | Non    | Type de sortie attendu du service                |
| contentType          | string | Non    | Type de contenu de la requête                    |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "read",
  "properties": {
    "path": "/me",
    "OAUTH_CLIENT_ID": "votre_client_id",
    "OAUTH_CLIENT_SECRET": "votre_client_secret",
    "TENANT_ID": "votre_tenant_id"
  }
}
```

---

### update

Modifie une ressource Microsoft.

#### Paramètres

| Nom                  | Type   | Requis | Description                                      |
|----------------------|--------|--------|--------------------------------------------------|
| path                 | string | Oui    | Chemin du service à exécuter                     |
| body                 | object | Non    | Valeur à envoyer                                |
| version              | string | Non    | Version de l'API à utiliser                      |
| headers              | object | Non    | En-têtes à envoyer                               |
| OAUTH_CLIENT_ID      | string | Non    | OAuth client ID                                  |
| OAUTH_CLIENT_SECRET  | string | Non    | OAuth client secret                              |
| TENANT_ID            | string | Non    | Tenant ID                                        |
| type                 | string | Non    | Type de sortie attendu du service                |
| contentType          | string | Non    | Type de contenu de la requête                    |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "update",
  "properties": {
    "path": "/me",
    "body": {
      "displayName": "Nouveau Nom"
    },
    "OAUTH_CLIENT_ID": "votre_client_id",
    "OAUTH_CLIENT_SECRET": "votre_client_secret",
    "TENANT_ID": "votre_tenant_id"
  }
}
```

---

### partialUpdate

Modifie partiellement une ressource Microsoft.

#### Paramètres

| Nom                  | Type   | Requis | Description                                      |
|----------------------|--------|--------|--------------------------------------------------|
| path                 | string | Oui    | Chemin du service à exécuter                     |
| body                 | object | Non    | Valeur à envoyer                                |
| version              | string | Non    | Version de l'API à utiliser                      |
| headers              | object | Non    | En-têtes à envoyer                               |
| OAUTH_CLIENT_ID      | string | Non    | OAuth client ID                                  |
| OAUTH_CLIENT_SECRET  | string | Non    | OAuth client secret                              |
| TENANT_ID            | string | Non    | Tenant ID                                        |
| type                 | string | Non    | Type de sortie attendu du service                |
| contentType          | string | Non    | Type de contenu de la requête                    |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "partialUpdate",
  "properties": {
    "path": "/me",
    "body": {
      "jobTitle": "Développeur"
    },
    "OAUTH_CLIENT_ID": "votre_client_id",
    "OAUTH_CLIENT_SECRET": "votre_client_secret",
    "TENANT_ID": "votre_tenant_id"
  }
}
```

---

### remove

Supprime une ressource Microsoft.

#### Paramètres

| Nom                  | Type   | Requis | Description                                      |
|----------------------|--------|--------|--------------------------------------------------|
| path                 | string | Oui    | Chemin du service à exécuter                     |
| version              | string | Non    | Version de l'API à utiliser                      |
| headers              | object | Non    | En-têtes à envoyer                               |
| OAUTH_CLIENT_ID      | string | Non    | OAuth client ID                                  |
| OAUTH_CLIENT_SECRET  | string | Non    | OAuth client secret                              |
| TENANT_ID            | string | Non    | Tenant ID                                        |
| type                 | string | Non    | Type de sortie attendu du service                |
| contentType          | string | Non    | Type de contenu de la requête                    |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "remove",
  "properties": {
    "path": "/me/events/{eventId}",
    "OAUTH_CLIENT_ID": "votre_client_id",
    "OAUTH_CLIENT_SECRET": "votre_client_secret",
    "TENANT_ID": "votre_tenant_id"
  }
}
```

---

## Notes

- Toutes les fonctions nécessitent généralement une authentification OAuth valide (OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, TENANT_ID).
- Le paramètre `path` correspond au chemin du service Microsoft Graph ou d'autres API Microsoft.
- Le paramètre `type` permet de spécifier le format de sortie attendu (ex: `json`, `text`, etc.).
- Le paramètre `contentType` permet de spécifier le type MIME de la requête (ex: `application/json`).
- Les paramètres `headers` permettent d'ajouter des en-têtes personnalisés à la requête.
- Les fonctions `create`, `update` et `partialUpdate` nécessitent généralement un paramètre `body` décrivant la ressource à créer ou modifier.
- Les exemples fournis sont à adapter selon le service Microsoft ciblé et les droits d'accès de l'application.