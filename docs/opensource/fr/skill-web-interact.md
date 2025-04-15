# @digipair/skill-web-interact

**Version:** 0.1.0  
**Summary:** Intéraction avec une page web  
**Description:** communiquer avec une page HTML côté navigateur.  
**Icon:** 📲

## Table des matières

- [Fonctions](#fonctions)
  - [dispatchEvent](#dispatchEvent)
  - [setAttribute](#setAttribute)
  - [getAttribute](#getAttribute)
  - [execute](#execute)
  - [goTo](#goTo)
  - [reload](#reload)
  - [upload](#upload)
  - [uploadText](#uploadText)
  - [capture](#capture)
  - [getMediaDevices](#getMediaDevices)

## Fonctions

### dispatchEvent

Émet un évènement sur un élément du DOM.

#### Paramètres

| Nom      | Type   | Requis | Description                                             |
| -------- | ------ | ------ | ------------------------------------------------------- |
| name     | string | Oui    | Nom de l'évènement à émettre.                           |
| selector | string | Oui    | Sélecteur CSS de l'élément qui va recevoir l'évènement. |
| detail   | object | Non    | Données transmises dans l'évènement.                    |

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

---

### setAttribute

Permet de modifier la valeur d'un attribut d'un élément du DOM.

#### Paramètres

| Nom       | Type   | Requis | Description                    |
| --------- | ------ | ------ | ------------------------------ |
| selector  | string | Oui    | Sélecteur CSS de l'élément.    |
| attribute | string | Oui    | Attribut à modifier.           |
| value     | object | Oui    | Nouvelle valeur de l'attribut. |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "setAttribute",
  "properties": {
    "selector": "#myElement",
    "attribute": "data-custom",
    "value": "newValue"
  }
}
```

---

### getAttribute

Permet de lire la valeur d'un attribut d'un élément du DOM.

#### Paramètres

| Nom       | Type   | Requis | Description                 |
| --------- | ------ | ------ | --------------------------- |
| selector  | string | Oui    | Sélecteur CSS de l'élément. |
| attribute | string | Oui    | Attribut à lire.            |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getAttribute",
  "properties": {
    "selector": "#myElement",
    "attribute": "data-custom"
  }
}
```

---

### execute

Exécute une méthode sur un élément du DOM.

#### Paramètres

| Nom      | Type   | Requis | Description                                            |
| -------- | ------ | ------ | ------------------------------------------------------ |
| name     | string | Oui    | Nom de la méthode à exécuter.                          |
| selector | string | Oui    | Sélecteur CSS de l'élément qui va exécuter la méthode. |
| args     | array  | Non    | Liste des arguments de la méthode.                     |

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

---

### goTo

Permet d'ouvrir une page web dans le navigateur.

#### Paramètres

| Nom    | Type   | Requis | Description                              |
| ------ | ------ | ------ | ---------------------------------------- |
| url    | string | Oui    | Adresse de la page web à ouvrir.         |
| target | string | Oui    | Fenêtre cible (ex: "\_blank", "\_self"). |

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

Permet de recharger la page actuelle.

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

Permet d'uploader un fichier binaire en base64.

#### Paramètres

| Nom    | Type   | Requis | Description              |
| ------ | ------ | ------ | ------------------------ |
| accept | string | Non    | Type de fichier accepté. |

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

Permet d'uploader un fichier en texte.

#### Paramètres

| Nom    | Type   | Requis | Description              |
| ------ | ------ | ------ | ------------------------ |
| accept | string | Non    | Type de fichier accepté. |

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

Permet de capturer une image de la webcam.

#### Paramètres

| Nom        | Type   | Requis | Description                                             |
| ---------- | ------ | ------ | ------------------------------------------------------- |
| deviceId   | string | Non    | Identifiant du périphérique de capture.                 |
| width      | number | Non    | Largeur de l'image capturée.                            |
| height     | number | Non    | Hauteur de l'image capturée.                            |
| facingMode | string | Non    | Mode de capture de l'image (ex: "user", "environment"). |

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "capture",
  "properties": {
    "deviceId": "myDeviceId",
    "width": 640,
    "height": 480,
    "facingMode": "user"
  }
}
```

---

### getMediaDevices

Liste les périphériques de capture disponibles.

#### Exemple

```json
{
  "library": "@digipair/skill-web-interact",
  "element": "getMediaDevices",
  "properties": {}
}
```

## Notes

- Les fonctions de cette librairie permettent d'interagir avec le DOM et d'effectuer diverses actions sur les éléments de la page web.
- Assurez-vous de fournir des sélecteurs CSS valides pour les paramètres `selector` et de respecter les types de données attendus pour chaque paramètre.
