# @digipair/skill-web-interact

**Version:** 0.1.0  
**Summary:** Intéraction avec une page web  
**Description:** Cette compétence permet aux utilisateurs de communiquer avec une page HTML coté navigateur.  
**Icon:** 📲

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

## Fonctions

### dispatchEvent

Emettre un évènement sur un élément du DOM.

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| name     | string | Oui    | Nom de l'évènement |
| selector | string | Oui    | Sélecteur CSS de l'élément qui va recevoir l'évènement |
| detail   | object | Non    | Données transmises dans l'évènement |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "dispatchEvent",
  "properties": {
    "name": "click",
    "selector": "#myButton",
    "detail": {
      "key": "value"
    }
  }
}
```

### setAttribute

Modifier la valeur d'un attribut d'un élément du DOM.

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| selector | string | Oui    | Sélecteur CSS de l'élément |
| attribute| string | Oui    | Attribut à modifier |
| value    | object | Oui    | Nouvelle valeur de l'attribut |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "setAttribute",
  "properties": {
    "selector": "#myInput",
    "attribute": "value",
    "value": "newValue"
  }
}
```

### getAttribute

Lire la valeur d'un attribut d'un élément du DOM.

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| selector | string | Oui    | Sélecteur CSS de l'élément |
| attribute| string | Oui    | Attribut à lire |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getAttribute",
  "properties": {
    "selector": "#myInput",
    "attribute": "value"
  }
}
```

### execute

Exécuter une méthode sur un élément du DOM.

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| name     | string | Oui    | Nom de la méthode |
| selector | string | Oui    | Sélecteur CSS de l'élément qui va exécuter la méthode |
| args     | array  | Non    | Liste des arguments de la méthode |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "execute",
  "properties": {
    "name": "focus",
    "selector": "#myInput",
    "args": []
  }
}
```

### goTo

Ouvrir une page web dans le navigateur.

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| url      | string | Oui    | Adresse de la page web |
| target   | string | Oui    | Fenêtre cible |

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

### reload

Recharger la page actuelle.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "reload",
  "properties": {}
}
```

### upload

Uploader un fichier binaire en base64.

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| accept   | string | Non    | Type de fichier accepté |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "upload",
  "properties": {
    "accept": "image/png"
  }
}
```

### uploadText

Uploader un fichier texte.

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| accept   | string | Non    | Type de fichier accepté |

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

## Notes

- Les fonctions de cette bibliothèque permettent d'interagir avec des éléments du DOM et de manipuler des pages web directement depuis le navigateur.
- Assurez-vous de fournir des sélecteurs CSS valides et des attributs/méthodes existants pour éviter les erreurs lors de l'exécution des fonctions.