# @digipair/skill-sharp

**Version:** 0.1.0  
**Résumé:** Traitement d'image avancé  
**Description:** Cette compétence fournit des fonctions avancées de traitement d'image en s'appuyant sur la librairie Sharp.  
**Icône:** 🖼️

## Table des matières

- [Fonctions](#fonctions)
  - [metadata](#metadata)
  - [stats](#stats)
  - [raw](#raw)
  - [resize](#resize)
  - [rotate](#rotate)
  - [extract](#extract)
  - [flip](#flip)
  - [flop](#flop)
  - [grayscale](#grayscale)
  - [negate](#negate)
  - [tint](#tint)
  - [modulate](#modulate)
  - [blur](#blur)
  - [sharpen](#sharpen)
  - [toFormat](#toformat)
  - [jpeg](#jpeg)
  - [png](#png)
  - [webp](#webp)
  - [avif](#avif)
  - [composite](#composite)

---

## Fonctions

### metadata

Retourne les métadonnées de l'image (dimensions, format, EXIF, etc.).

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "metadata",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### stats

Retourne des statistiques sur l'image (moyenne, écart-type, etc.).

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "stats",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### raw

Retourne le buffer brut de l'image sous forme de base64.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "raw",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### resize

Redimensionne l'image.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| content  | string  | Oui    | Contenu de l'image encodé en base64         |
| width    | integer | Oui    | Largeur cible en pixels                     |
| height   | integer | Oui    | Hauteur cible en pixels                     |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "resize",
  "properties": {
    "content": "<base64_image>",
    "width": 200,
    "height": 100
  }
}
```

---

### rotate

Fait pivoter l'image (angle optionnel).

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| content  | string  | Oui    | Contenu de l'image encodé en base64         |
| angle    | integer | Non    | Angle de rotation en degrés (ex: 90)        |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "rotate",
  "properties": {
    "content": "<base64_image>",
    "angle": 90
  }
}
```

---

### extract

Extrait une région de l'image.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| content  | string  | Oui    | Contenu de l'image encodé en base64         |
| left     | integer | Oui    | Position horizontale du coin supérieur gauche |
| top      | integer | Oui    | Position verticale du coin supérieur gauche |
| width    | integer | Oui    | Largeur de la région à extraire             |
| height   | integer | Oui    | Hauteur de la région à extraire             |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "extract",
  "properties": {
    "content": "<base64_image>",
    "left": 10,
    "top": 20,
    "width": 100,
    "height": 50
  }
}
```

---

### flip

Retourne l'image verticalement.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "flip",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### flop

Retourne l'image horizontalement.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "flop",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### grayscale

Convertit l'image en niveaux de gris.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "grayscale",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### negate

Inverse les couleurs de l'image.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "negate",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### tint

Applique une teinte colorée à l'image.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| content  | string  | Oui    | Contenu de l'image encodé en base64         |
| r        | integer | Oui    | Valeur rouge (0-255)                        |
| g        | integer | Oui    | Valeur verte (0-255)                        |
| b        | integer | Oui    | Valeur bleue (0-255)                        |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "tint",
  "properties": {
    "content": "<base64_image>",
    "r": 255,
    "g": 0,
    "b": 0
  }
}
```

---

### modulate

Ajuste la luminosité, la saturation et la teinte.

#### Paramètres

| Nom        | Type    | Requis | Description                                 |
|------------|---------|--------|---------------------------------------------|
| content    | string  | Oui    | Contenu de l'image encodé en base64         |
| brightness | number  | Non    | Facteur de luminosité (ex: 1.2)             |
| saturation | number  | Non    | Facteur de saturation (ex: 0.8)             |
| hue        | number  | Non    | Décalage de teinte (en degrés)              |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "modulate",
  "properties": {
    "content": "<base64_image>",
    "brightness": 1.1,
    "saturation": 0.9,
    "hue": 90
  }
}
```

---

### blur

Applique un effet de flou.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| content  | string  | Oui    | Contenu de l'image encodé en base64         |
| radius   | number  | Non    | Rayon du flou (ex: 2.5)                     |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "blur",
  "properties": {
    "content": "<base64_image>",
    "radius": 2.5
  }
}
```

---

### sharpen

Accentue l'image.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "sharpen",
  "properties": {
    "content": "<base64_image>"
  }
}
```

---

### toFormat

Convertit l'image dans un autre format.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image encodé en base64         |
| format   | string | Oui    | Format cible : `jpeg`, `png`, `webp`, `avif`|

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "toFormat",
  "properties": {
    "content": "<base64_image>",
    "format": "webp"
  }
}
```

---

### jpeg

Exporte l'image au format JPEG.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| content  | string  | Oui    | Contenu de l'image encodé en base64         |
| quality  | integer | Non    | Qualité JPEG (0-100, défaut: 80)            |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "jpeg",
  "properties": {
    "content": "<base64_image>",
    "quality": 90
  }
}
```

---

### png

Exporte l'image au format PNG.

#### Paramètres

| Nom             | Type    | Requis | Description                                 |
|-----------------|---------|--------|---------------------------------------------|
| content         | string  | Oui    | Contenu de l'image encodé en base64         |
| compressionLevel| integer | Non    | Niveau de compression (0-9, défaut: 6)      |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "png",
  "properties": {
    "content": "<base64_image>",
    "compressionLevel": 9
  }
}
```

---

### webp

Exporte l'image au format WebP.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| content  | string  | Oui    | Contenu de l'image encodé en base64         |
| quality  | integer | Non    | Qualité WebP (0-100, défaut: 80)            |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "webp",
  "properties": {
    "content": "<base64_image>",
    "quality": 75
  }
}
```

---

### avif

Exporte l'image au format AVIF.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| content  | string  | Oui    | Contenu de l'image encodé en base64         |
| quality  | integer | Non    | Qualité AVIF (0-100, défaut: 50)            |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "avif",
  "properties": {
    "content": "<base64_image>",
    "quality": 60
  }
}
```

---

### composite

Superpose d'autres images (ex: watermark).

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| content  | string | Oui    | Contenu de l'image de base encodé en base64 |
| overlays | array  | Oui    | Tableau d'objets `{ input, top, left }` où `input` est une image base64, `top` et `left` sont les coordonnées de superposition |

#### Exemple

```json
{
  "library": "@digipair/skill-sharp",
  "element": "composite",
  "properties": {
    "content": "<base64_image>",
    "overlays": [
      {
        "input": "<base64_overlay>",
        "top": 10,
        "left": 20
      }
    ]
  }
}
```

---

## Notes

- Toutes les fonctions attendent le contenu de l'image sous forme de chaîne base64 dans le paramètre `content`.
- Les fonctions de conversion/export (`toFormat`, `jpeg`, `png`, `webp`, `avif`) retournent l'image dans le format demandé, encodée en base64.
- Pour les fonctions nécessitant des paramètres optionnels, les valeurs par défaut sont utilisées si le paramètre n'est pas fourni.
- La fonction `composite` permet de superposer plusieurs images sur l'image de base, utile pour les filigranes ou montages.
- Assurez-vous que les images en base64 soient valides et correctement encodées pour éviter les erreurs de traitement.