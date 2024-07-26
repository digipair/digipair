# @digipair/skill-microsoft

**Version:** 0.1.0  
**Summary:** Communication avec les services Microsoft  
**Description:** Cette compétence permet d'utiliser les services Microsoft.  
**Icon:** ❖

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

Exécute un service Microsoft.

#### Paramètres

| Nom                | Type   | Requis | Description                    |
|--------------------|--------|--------|--------------------------------|
| path               | string | Oui    | Chemin du service à exécuter   |
| method             | string | Non    | Méthode HTTP à utiliser        |
| body               | object | Non    | Valeur à envoyer               |
| version            | string | Non    | Version de l'API à utiliser    |
| headers            | object | Non    | En-têtes à envoyer             |
| OAUTH_CLIENT_ID    | string | Non    | Identifiant du client OAuth    |
| OAUTH_CLIENT_SECRET| string | Non    | Secret du client OAuth         |
| TENANT_ID          | string | Non    | ID du locataire                |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "request",
  "properties": {
    "path": "/v1.0/me",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### create

Ajoute une ressource Microsoft.

#### Paramètres

| Nom                | Type   | Requis | Description                    |
|--------------------|--------|--------|--------------------------------|
| path               | string | Oui    | Chemin du service à exécuter   |
| body               | object | Non    | Valeur à envoyer               |
| version            | string | Non    | Version de l'API à utiliser    |
| headers            | object | Non    | En-têtes à envoyer             |
| OAUTH_CLIENT_ID    | string | Non    | Identifiant du client OAuth    |
| OAUTH_CLIENT_SECRET| string | Non    | Secret du client OAuth         |
| TENANT_ID          | string | Non    | ID du locataire                |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "create",
  "properties": {
    "path": "/v1.0/me/contacts",
    "body": {
      "givenName": "John",
      "surname": "Doe"
    },
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### read

Lit une ressource Microsoft.

#### Paramètres

| Nom                | Type   | Requis | Description                    |
|--------------------|--------|--------|--------------------------------|
| path               | string | Oui    | Chemin du service à exécuter   |
| version            | string | Non    | Version de l'API à utiliser    |
| headers            | object | Non    | En-têtes à envoyer             |
| OAUTH_CLIENT_ID    | string | Non    | Identifiant du client OAuth    |
| OAUTH_CLIENT_SECRET| string | Non    | Secret du client OAuth         |
| TENANT_ID          | string | Non    | ID du locataire                |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "read",
  "properties": {
    "path": "/v1.0/me/contacts",
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### update

Modifie une ressource Microsoft.

#### Paramètres

| Nom                | Type   | Requis | Description                    |
|--------------------|--------|--------|--------------------------------|
| path               | string | Oui    | Chemin du service à exécuter   |
| body               | object | Non    | Valeur à envoyer               |
| version            | string | Non    | Version de l'API à utiliser    |
| headers            | object | Non    | En-têtes à envoyer             |
| OAUTH_CLIENT_ID    | string | Non    | Identifiant du client OAuth    |
| OAUTH_CLIENT_SECRET| string | Non    | Secret du client OAuth         |
| TENANT_ID          | string | Non    | ID du locataire                |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "update",
  "properties": {
    "path": "/v1.0/me/contacts/CONTACT_ID",
    "body": {
      "givenName": "Jane"
    },
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### partialUpdate

Modifie une partie d'une ressource Microsoft.

#### Paramètres

| Nom                | Type   | Requis | Description                    |
|--------------------|--------|--------|--------------------------------|
| path               | string | Oui    | Chemin du service à exécuter   |
| body               | object | Non    | Valeur à envoyer               |
| version            | string | Non    | Version de l'API à utiliser    |
| headers            | object | Non    | En-têtes à envoyer             |
| OAUTH_CLIENT_ID    | string | Non    | Identifiant du client OAuth    |
| OAUTH_CLIENT_SECRET| string | Non    | Secret du client OAuth         |
| TENANT_ID          | string | Non    | ID du locataire                |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "partialUpdate",
  "properties": {
    "path": "/v1.0/me/contacts/CONTACT_ID",
    "body": {
      "surname": "Smith"
    },
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

### remove

Supprime une ressource Microsoft.

#### Paramètres

| Nom                | Type   | Requis | Description                    |
|--------------------|--------|--------|--------------------------------|
| path               | string | Oui    | Chemin du service à exécuter   |
| version            | string | Non    | Version de l'API à utiliser    |
| headers            | object | Non    | En-têtes à envoyer             |
| OAUTH_CLIENT_ID    | string | Non    | Identifiant du client OAuth    |
| OAUTH_CLIENT_SECRET| string | Non    | Secret du client OAuth         |
| TENANT_ID          | string | Non    | ID du locataire                |

#### Exemple

```json
{
  "library": "@digipair/skill-microsoft",
  "element": "remove",
  "properties": {
    "path": "/v1.0/me/contacts/CONTACT_ID",
    "headers": {
      "Authorization": "Bearer ACCESS_TOKEN"
    }
  }
}
```

## Notes

- Les fonctions `request`, `create`, `read`, `update`, `partialUpdate`, et `remove` permettent d'interagir avec les services Microsoft en utilisant les chemins et les paramètres spécifiés.
- Assurez-vous de fournir les en-têtes d'autorisation appropriés et les identifiants OAuth si nécessaire pour chaque appel de fonction.