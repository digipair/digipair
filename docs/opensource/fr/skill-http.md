# @digipair/skill-http

**Version:** 0.1.0  
**Summary:** Communication avec les services HTTP  
**Description:** utiliser les services HTTP.  
**Icon:** 🌐

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

Exécute un service HTTP.

#### Paramètres

| Nom     | Type    | Requis | Description                   |
| ------- | ------- | ------ | ----------------------------- |
| path    | string  | Oui    | Adresse du service à exécuter |
| method  | string  | Non    | Méthode HTTP à utiliser       |
| body    | object  | Non    | Valeur à envoyer              |
| headers | object  | Non    | En-têtes à envoyer            |
| IS_JSON | boolean | Non    | Indique si l'API est en JSON  |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "request",
  "properties": {
    "path": "https://example.com/api",
    "method": "POST",
    "body": {
      "key": "value"
    },
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### create

Ajoute une ressource HTTP.

#### Paramètres

| Nom     | Type    | Requis | Description                   |
| ------- | ------- | ------ | ----------------------------- |
| path    | string  | Oui    | Adresse du service à exécuter |
| body    | object  | Non    | Valeur à envoyer              |
| headers | object  | Non    | En-têtes à envoyer            |
| IS_JSON | boolean | Non    | Indique si l'API est en JSON  |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "create",
  "properties": {
    "path": "https://example.com/api/resource",
    "body": {
      "name": "New Resource"
    },
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### read

Lit une ressource HTTP.

#### Paramètres

| Nom     | Type    | Requis | Description                   |
| ------- | ------- | ------ | ----------------------------- |
| path    | string  | Oui    | Adresse du service à exécuter |
| headers | object  | Non    | En-têtes à envoyer            |
| IS_JSON | boolean | Non    | Indique si l'API est en JSON  |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "read",
  "properties": {
    "path": "https://example.com/api/resource",
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### update

Modifie une ressource HTTP.

#### Paramètres

| Nom     | Type    | Requis | Description                   |
| ------- | ------- | ------ | ----------------------------- |
| path    | string  | Oui    | Adresse du service à exécuter |
| body    | object  | Non    | Valeur à envoyer              |
| headers | object  | Non    | En-têtes à envoyer            |
| IS_JSON | boolean | Non    | Indique si l'API est en JSON  |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "update",
  "properties": {
    "path": "https://example.com/api/resource",
    "body": {
      "name": "Updated Resource"
    },
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### partialUpdate

Modifie une partie d'une ressource HTTP.

#### Paramètres

| Nom     | Type    | Requis | Description                   |
| ------- | ------- | ------ | ----------------------------- |
| path    | string  | Oui    | Adresse du service à exécuter |
| body    | object  | Non    | Valeur à envoyer              |
| headers | object  | Non    | En-têtes à envoyer            |
| IS_JSON | boolean | Non    | Indique si l'API est en JSON  |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "partialUpdate",
  "properties": {
    "path": "https://example.com/api/resource",
    "body": {
      "name": "Partially Updated Resource"
    },
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

### remove

Supprime une ressource HTTP.

#### Paramètres

| Nom     | Type    | Requis | Description                   |
| ------- | ------- | ------ | ----------------------------- |
| path    | string  | Oui    | Adresse du service à exécuter |
| headers | object  | Non    | En-têtes à envoyer            |
| IS_JSON | boolean | Non    | Indique si l'API est en JSON  |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "remove",
  "properties": {
    "path": "https://example.com/api/resource",
    "headers": {
      "Authorization": "Bearer token"
    },
    "IS_JSON": true
  }
}
```

## Notes

- Les fonctions `request`, `create`, `read`, `update`, `partialUpdate`, et `remove` sont utilisées pour interagir avec des services HTTP.
- Assurez-vous de fournir une adresse de service valide pour le paramètre `path`.
- Les en-têtes et le corps des requêtes peuvent être personnalisés selon les besoins de l'API cible.
- Le paramètre `IS_JSON` doit être défini sur `true` si l'API attend des données au format JSON.
