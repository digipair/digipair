# @digipair/skill-web-interact

**Version:** 0.1.0  
**Résumé:** Interaction avec une page web  
**Description:** Cette compétence permet aux utilisateurs de communiquer avec une page HTML côté client.  
**Icône:** 📲

## Table des matières

- [Fonctions](#fonctions)
  - [dispatchEvent](#dispatchevent)
  - [setAttribute](#setattribute)
  - [getAttribute](#getattribute)
  - [execute](#execute)
  - [goTo](#goto)
  - [reload](#reload)
  - [upload](#upload)
  - [uploadText](#uploadtext)
  - [capture](#capture)
  - [getMediaDevices](#getmediadevices)

---

## Fonctions

### dispatchEvent

Émet un événement sur un élément du DOM.

#### Paramètres

| Nom      | Type   | Requis | Description                                               |
|----------|--------|--------|-----------------------------------------------------------|
| name     | string | Oui    | Nom de l'événement à émettre                              |
| selector | string | Oui    | Sélecteur CSS de l'élément cible                          |
| detail   | object | Non    | Données à transmettre dans l'événement (optionnel)        |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "dispatchEvent",
  "properties": {
    "name": "customEvent",
    "selector": "#my-element",
    "detail": { "foo": "bar" }
  }
}
```

---

### setAttribute

Modifie la valeur d'un attribut d'un élément du DOM.

#### Paramètres

| Nom       | Type   | Requis | Description                                 |
|-----------|--------|--------|---------------------------------------------|
| selector  | string | Oui    | Sélecteur CSS de l'élément                  |
| attribute | string | Oui    | Nom de l'attribut à modifier                |
| value     | object | Oui    | Nouvelle valeur de l'attribut               |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "setAttribute",
  "properties": {
    "selector": "#my-element",
    "attribute": "data-status",
    "value": "active"
  }
}
```

---

### getAttribute

Lit la valeur d'un attribut d'un élément du DOM.

#### Paramètres

| Nom       | Type   | Requis | Description                                 |
|-----------|--------|--------|---------------------------------------------|
| selector  | string | Oui    | Sélecteur CSS de l'élément                  |
| attribute | string | Oui    | Nom de l'attribut à lire                    |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getAttribute",
  "properties": {
    "selector": "#my-element",
    "attribute": "data-status"
  }
}
```

---

### execute

Exécute une méthode sur un élément du DOM.

#### Paramètres

| Nom      | Type    | Requis | Description                                         |
|----------|---------|--------|-----------------------------------------------------|
| name     | string  | Oui    | Nom de la méthode à exécuter                        |
| selector | string  | Oui    | Sélecteur CSS de l'élément cible                    |
| args     | array   | Non    | Liste des arguments à passer à la méthode (optionnel)|

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "execute",
  "properties": {
    "name": "focus",
    "selector": "#input-field",
    "args": []
  }
}
```

---

### goTo

Ouvre une page web dans le navigateur.

#### Paramètres

| Nom    | Type   | Requis | Description                        |
|--------|--------|--------|------------------------------------|
| url    | string | Oui    | Adresse de la page web à ouvrir    |
| target | string | Non    | Fenêtre cible (ex: "_blank")       |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "goTo",
  "properties": {
    "url": "https://example.com",
    "target": "_blank"
  }
}
```

---

### reload

Recharge la page courante.

#### Paramètres

Aucun.

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "reload",
  "properties": {}
}
```

---

### upload

Permet de téléverser un fichier binaire (base64).

#### Paramètres

| Nom    | Type   | Requis | Description                        |
|--------|--------|--------|------------------------------------|
| accept | string | Non    | Type de fichier accepté (MIME type) |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "upload",
  "properties": {
    "accept": "image/*"
  }
}
```

---

### uploadText

Permet de téléverser un fichier texte.

#### Paramètres

| Nom    | Type   | Requis | Description                        |
|--------|--------|--------|------------------------------------|
| accept | string | Non    | Type de fichier accepté (MIME type) |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "uploadText",
  "properties": {
    "accept": "text/plain"
  }
}
```

---

### capture

Capture une image depuis la webcam.

#### Paramètres

| Nom        | Type   | Requis | Description                                 |
|------------|--------|--------|---------------------------------------------|
| deviceId   | string | Non    | ID du périphérique de capture               |
| width      | number | Non    | Largeur de l'image capturée                 |
| height     | number | Non    | Hauteur de l'image capturée                 |
| facingMode | string | Non    | Mode de capture (ex: "user", "environment") |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "capture",
  "properties": {
    "deviceId": "abcd1234",
    "width": 640,
    "height": 480,
    "facingMode": "user"
  }
}
```

---

### getMediaDevices

Liste les périphériques de capture disponibles.

#### Paramètres

Aucun.

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getMediaDevices",
  "properties": {}
}
```

---

## Notes

- Les sélecteurs CSS doivent cibler des éléments existants dans le DOM.
- Les fonctions de capture et d’upload nécessitent l’autorisation de l’utilisateur.
- Les méthodes exécutées via `execute` doivent être accessibles sur l’élément ciblé.
- Pour `goTo`, l’utilisation de `target: "_blank"` ouvrira la page dans un nouvel onglet.
- Les paramètres optionnels peuvent être omis si non nécessaires.