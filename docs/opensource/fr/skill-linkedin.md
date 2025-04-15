# @digipair/skill-linkedin

**Version:** 0.1.0  
**Summary:** Communication avec les services LinkedIn  
**Description:** utiliser les services LinkedIn.  
**Icon:** 👤

## Table des matières

- [Fonctions](#fonctions)
  - [request](#request)
  - [create](#create)
  - [read](#read)
  - [update](#update)
  - [partialUpdate](#partialupdate)
  - [remove](#remove)

## Fonctions

### request

Exécute un service LinkedIn.

#### Paramètres

| Nom     | Type   | Requis | Description                  |
| ------- | ------ | ------ | ---------------------------- |
| path    | string | Oui    | Chemin du service à exécuter |
| method  | string | Non    | Méthode HTTP à utiliser      |
| body    | object | Non    | Valeur à envoyer             |
| version | string | Non    | Version de l'API à utiliser  |
| headers | object | Non    | En-têtes à envoyer           |
| TOKEN   | string | Non    | Jeton d'accès à utiliser     |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "request",
  "properties": {
    "path": "/v2/me",
    "method": "GET",
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### create

Ajoute une ressource LinkedIn.

#### Paramètres

| Nom     | Type   | Requis | Description                  |
| ------- | ------ | ------ | ---------------------------- |
| path    | string | Oui    | Chemin du service à exécuter |
| body    | object | Non    | Valeur à envoyer             |
| version | string | Non    | Version de l'API à utiliser  |
| headers | object | Non    | En-têtes à envoyer           |
| TOKEN   | string | Non    | Jeton d'accès à utiliser     |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "create",
  "properties": {
    "path": "/v2/ugcPosts",
    "body": {
      "author": "urn:li:person:<personId>",
      "lifecycleState": "PUBLISHED",
      "specificContent": {
        "com.linkedin.ugc.ShareContent": {
          "shareCommentary": {
            "text": "Hello World!"
          },
          "shareMediaCategory": "NONE"
        }
      },
      "visibility": {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
      }
    },
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### read

Lit une ressource LinkedIn.

#### Paramètres

| Nom     | Type   | Requis | Description                  |
| ------- | ------ | ------ | ---------------------------- |
| path    | string | Oui    | Chemin du service à exécuter |
| version | string | Non    | Version de l'API à utiliser  |
| headers | object | Non    | En-têtes à envoyer           |
| TOKEN   | string | Non    | Jeton d'accès à utiliser     |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "read",
  "properties": {
    "path": "/v2/me",
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### update

Modifie une ressource LinkedIn.

#### Paramètres

| Nom     | Type   | Requis | Description                  |
| ------- | ------ | ------ | ---------------------------- |
| path    | string | Oui    | Chemin du service à exécuter |
| body    | object | Non    | Valeur à envoyer             |
| version | string | Non    | Version de l'API à utiliser  |
| headers | object | Non    | En-têtes à envoyer           |
| TOKEN   | string | Non    | Jeton d'accès à utiliser     |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "update",
  "properties": {
    "path": "/v2/ugcPosts/<postId>",
    "body": {
      "specificContent": {
        "com.linkedin.ugc.ShareContent": {
          "shareCommentary": {
            "text": "Updated text"
          },
          "shareMediaCategory": "NONE"
        }
      }
    },
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### partialUpdate

Modifie une partie d'une ressource LinkedIn.

#### Paramètres

| Nom     | Type   | Requis | Description                  |
| ------- | ------ | ------ | ---------------------------- |
| path    | string | Oui    | Chemin du service à exécuter |
| body    | object | Non    | Valeur à envoyer             |
| version | string | Non    | Version de l'API à utiliser  |
| headers | object | Non    | En-têtes à envoyer           |
| TOKEN   | string | Non    | Jeton d'accès à utiliser     |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "partialUpdate",
  "properties": {
    "path": "/v2/ugcPosts/<postId>",
    "body": {
      "specificContent": {
        "com.linkedin.ugc.ShareContent": {
          "shareCommentary": {
            "text": "Partially updated text"
          }
        }
      }
    },
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

### remove

Supprime une ressource LinkedIn.

#### Paramètres

| Nom     | Type   | Requis | Description                  |
| ------- | ------ | ------ | ---------------------------- |
| path    | string | Oui    | Chemin du service à exécuter |
| version | string | Non    | Version de l'API à utiliser  |
| headers | object | Non    | En-têtes à envoyer           |
| TOKEN   | string | Non    | Jeton d'accès à utiliser     |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "remove",
  "properties": {
    "path": "/v2/ugcPosts/<postId>",
    "version": "2.0",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    }
  }
}
```

## Notes

- Les fonctions `request`, `create`, `read`, `update`, `partialUpdate`, et `remove` permettent d'interagir avec les services LinkedIn en exécutant des requêtes spécifiques.
- Assurez-vous de fournir un jeton d'accès valide pour le paramètre `TOKEN` afin d'autoriser les requêtes.
