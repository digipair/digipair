# @digipair/skill-http

**Version:** 0.1.0  
**Résumé:** Communication avec des services HTTP  
**Description:** Cette compétence permet l'utilisation de services HTTP.  
**Icône:** 🌐

## Table des matières

- [@digipair/skill-http](#digipairskill-http)
  - [Table des matières](#table-des-matières)
  - [Fonctions](#fonctions)
    - [request](#request)
      - [Paramètres](#paramètres)
      - [Exemple](#exemple)
    - [create](#create)
      - [Paramètres](#paramètres-1)
      - [Exemple](#exemple-1)
    - [read](#read)
      - [Paramètres](#paramètres-2)
      - [Exemple](#exemple-2)
    - [update](#update)
      - [Paramètres](#paramètres-3)
      - [Exemple](#exemple-3)
    - [partialUpdate](#partialupdate)
      - [Paramètres](#paramètres-4)
      - [Exemple](#exemple-4)
    - [remove](#remove)
      - [Paramètres](#paramètres-5)
      - [Exemple](#exemple-5)
    - [upload](#upload)
      - [Paramètres](#paramètres-6)
      - [Exemple](#exemple-6)
  - [Schémas](#schémas)
    - [UploadParameters](#uploadparameters)
  - [Notes](#notes)

---

## Fonctions

### request

Exécute un service HTTP générique.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| path     | string | Oui    | Adresse du service à exécuter      |
| method   | string | Non    | Méthode HTTP à utiliser (GET, POST, etc.) |
| body     | object | Non    | Valeur à envoyer                   |
| headers  | object | Non    | En-têtes à envoyer                 |
| type     | string | Non    | Type de réponse attendu            |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "request",
  "properties": {
    "path": "https://api.example.com/data",
    "method": "POST",
    "body": { "key": "value" },
    "headers": { "Authorization": "Bearer token" },
    "type": "json"
  }
}
```

---

### create

Ajoute une ressource HTTP.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| path     | string | Oui    | Adresse du service à exécuter      |
| body     | object | Non    | Valeur à envoyer                   |
| headers  | object | Non    | En-têtes à envoyer                 |
| type     | string | Non    | Type de réponse attendu            |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "create",
  "properties": {
    "path": "https://api.example.com/resource",
    "body": { "name": "Nouvelle ressource" },
    "headers": { "Content-Type": "application/json" },
    "type": "json"
  }
}
```

---

### read

Lit une ressource HTTP.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| path     | string | Oui    | Adresse du service à exécuter      |
| headers  | object | Non    | En-têtes à envoyer                 |
| type     | string | Non    | Type de réponse attendu            |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "read",
  "properties": {
    "path": "https://api.example.com/resource/123",
    "headers": { "Authorization": "Bearer token" },
    "type": "json"
  }
}
```

---

### update

Modifie une ressource HTTP.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| path     | string | Oui    | Adresse du service à exécuter      |
| body     | object | Non    | Valeur à envoyer                   |
| headers  | object | Non    | En-têtes à envoyer                 |
| type     | string | Non    | Type de réponse attendu            |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "update",
  "properties": {
    "path": "https://api.example.com/resource/123",
    "body": { "name": "Ressource modifiée" },
    "headers": { "Content-Type": "application/json" },
    "type": "json"
  }
}
```

---

### partialUpdate

Modifie partiellement une ressource HTTP.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| path     | string | Oui    | Adresse du service à exécuter      |
| body     | object | Non    | Valeur à envoyer                   |
| headers  | object | Non    | En-têtes à envoyer                 |
| type     | string | Non    | Type de réponse attendu            |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "partialUpdate",
  "properties": {
    "path": "https://api.example.com/resource/123",
    "body": { "status": "archived" },
    "headers": { "Content-Type": "application/json" },
    "type": "json"
  }
}
```

---

### remove

Supprime une ressource HTTP.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| path     | string | Oui    | Adresse du service à exécuter      |
| headers  | object | Non    | En-têtes à envoyer                 |
| type     | string | Non    | Type de réponse attendu            |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "remove",
  "properties": {
    "path": "https://api.example.com/resource/123",
    "headers": { "Authorization": "Bearer token" },
    "type": "json"
  }
}
```

---

### upload

Upload une ressource HTTP (fichier ou données multipart).

#### Paramètres

| Nom        | Type                | Requis | Description                        |
|------------|---------------------|--------|------------------------------------|
| path       | string              | Oui    | Adresse du service à exécuter      |
| method     | string              | Non    | Méthode HTTP à utiliser            |
| parameters | UploadParameters[]  | Oui    | Paramètres à envoyer (voir [UploadParameters](#uploadparameters)) |
| headers    | object              | Non    | En-têtes à envoyer                 |
| type       | string              | Non    | Type de réponse attendu            |

#### Exemple

```json
{
  "library": "@digipair/skill-http",
  "element": "upload",
  "properties": {
    "path": "https://api.example.com/upload",
    "method": "POST",
    "parameters": [
      {
        "name": "file",
        "type": "image/png",
        "value": "<Base64>"
      }
    ],
    "headers": { "Authorization": "Bearer token" },
    "type": "json"
  }
}
```

---

## Schémas

### UploadParameters

Paramètres pour l'upload de fichiers ou de données.

| Nom   | Type   | Description                |
|-------|--------|----------------------------|
| name  | string | Nom du paramètre/fichier   |
| type  | string | Type MIME du contenu       |
| value | object | Valeur (base64) |

---

## Notes

- Toutes les fonctions attendent un objet `properties` contenant les paramètres décrits ci-dessus.
- Le paramètre `type` permet de spécifier le format de la réponse attendue (`json`, `text`, `blob`, etc.).
- Pour l'upload, le paramètre `parameters` doit être un tableau d'objets respectant le schéma [UploadParameters](#uploadparameters).
- Les en-têtes (`headers`) sont optionnels mais recommandés pour l'authentification ou la gestion du contenu.
- Les fonctions sont pensées pour être utilisées dans un contexte d'orchestration d'agents ou de scripts automatisés.

---

**Pour toute question ou contribution, consultez le dépôt GitHub associé à la librairie.**