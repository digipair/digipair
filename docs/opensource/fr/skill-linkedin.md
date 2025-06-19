# @digipair/skill-linkedin

**Version :** 0.1.0  
**Résumé :** Communication avec les services LinkedIn  
**Description :** Cette compétence permet d'utiliser les services LinkedIn.  
**Icône :** 👤

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

Exécute un service LinkedIn générique.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| path     | string  | Oui    | Chemin du service à exécuter                |
| method   | string  | Non    | Méthode HTTP à utiliser (GET, POST, etc.)   |
| body     | object  | Non    | Valeur à envoyer                            |
| version  | string  | Non    | Version de l'API à utiliser                 |
| headers  | object  | Non    | En-têtes à envoyer                          |
| TOKEN    | string  | Non    | Jeton d'accès à utiliser                    |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "request",
  "properties": {
    "path": "/v2/me",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    },
    "TOKEN": "<votre_token>"
  }
}
```

---

### create

Ajoute une ressource LinkedIn.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| path     | string  | Oui    | Chemin du service à exécuter                |
| body     | object  | Non    | Valeur à envoyer                            |
| version  | string  | Non    | Version de l'API à utiliser                 |
| headers  | object  | Non    | En-têtes à envoyer                          |
| TOKEN    | string  | Non    | Jeton d'accès à utiliser                    |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "create",
  "properties": {
    "path": "/v2/posts",
    "body": {
      "content": "Nouveau post LinkedIn"
    },
    "TOKEN": "<votre_token>"
  }
}
```

---

### read

Lit une ressource LinkedIn.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| path     | string  | Oui    | Chemin du service à exécuter                |
| version  | string  | Non    | Version de l'API à utiliser                 |
| headers  | object  | Non    | En-têtes à envoyer                          |
| TOKEN    | string  | Non    | Jeton d'accès à utiliser                    |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "read",
  "properties": {
    "path": "/v2/me",
    "TOKEN": "<votre_token>"
  }
}
```

---

### update

Modifie une ressource LinkedIn.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| path     | string  | Oui    | Chemin du service à exécuter                |
| body     | object  | Non    | Valeur à envoyer                            |
| version  | string  | Non    | Version de l'API à utiliser                 |
| headers  | object  | Non    | En-têtes à envoyer                          |
| TOKEN    | string  | Non    | Jeton d'accès à utiliser                    |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "update",
  "properties": {
    "path": "/v2/posts/12345",
    "body": {
      "content": "Mise à jour du post"
    },
    "TOKEN": "<votre_token>"
  }
}
```

---

### partialUpdate

Modifie partiellement une ressource LinkedIn.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| path     | string  | Oui    | Chemin du service à exécuter                |
| body     | object  | Non    | Valeur à envoyer                            |
| version  | string  | Non    | Version de l'API à utiliser                 |
| headers  | object  | Non    | En-têtes à envoyer                          |
| TOKEN    | string  | Non    | Jeton d'accès à utiliser                    |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "partialUpdate",
  "properties": {
    "path": "/v2/posts/12345",
    "body": {
      "content": "Mise à jour partielle"
    },
    "TOKEN": "<votre_token>"
  }
}
```

---

### remove

Supprime une ressource LinkedIn.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| path     | string  | Oui    | Chemin du service à exécuter                |
| version  | string  | Non    | Version de l'API à utiliser                 |
| headers  | object  | Non    | En-têtes à envoyer                          |
| TOKEN    | string  | Non    | Jeton d'accès à utiliser                    |

#### Exemple

```json
{
  "library": "@digipair/skill-linkedin",
  "element": "remove",
  "properties": {
    "path": "/v2/posts/12345",
    "TOKEN": "<votre_token>"
  }
}
```

---

## Notes

- Toutes les fonctions nécessitent le paramètre `path` pour spécifier la ressource ou le service LinkedIn ciblé.
- Le paramètre `TOKEN` est requis pour l'authentification auprès de l'API LinkedIn.
- Les paramètres `headers` et `version` sont optionnels et permettent de personnaliser la requête.
- Utilisez la fonction `request` pour des appels génériques ou personnalisés à l'API LinkedIn.
- Les fonctions `create`, `read`, `update`, `partialUpdate` et `remove` correspondent respectivement aux opérations CRUD classiques sur les ressources LinkedIn.
- Assurez-vous de respecter les droits d'accès et les quotas imposés par l'API LinkedIn lors de l'utilisation de ces fonctions.