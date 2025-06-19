# @digipair/skill-canvas

**Version:** 0.1.0  
**Summary:** Drawing manipulation  
**Description:** This skill allows users to manipulate a canvas to draw graphic elements, load images, and perform various drawing operations.  
**Icon:** 🎨

---

## Table des matières

- [Fonctions](#fonctions)
  - [canvas](#canvas)
  - [loadImage](#loadimage)
  - [drawImage](#drawimage)
  - [strokeRect](#strokerect)
  - [fillRect](#fillrect)
  - [fillText](#filltext)
  - [strokeStyle](#strokestyle)
  - [fillStyle](#fillstyle)
  - [lineWidth](#linewidth)
  - [measureText](#measuretext)

---

## Fonctions

### canvas

Créer un canvas et exécuter des actions de dessin.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| width    | number  | Oui    | Largeur du canvas                                |
| height   | number  | Oui    | Hauteur du canvas                                |
| execute  | array   | Oui    | Liste d'actions à exécuter sur le canvas         |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "canvas",
  "properties": {
    "width": 800,
    "height": 600,
    "execute": [
      { "element": "fillRect", "properties": { "x": 10, "y": 10, "width": 100, "height": 50 } }
    ]
  }
}
```

---

### loadImage

Charger une image à partir d'une chaîne base64.

#### Paramètres

| Nom   | Type   | Requis | Description                |
|-------|--------|--------|----------------------------|
| image | string | Oui    | Image au format base64     |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "loadImage",
  "properties": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }
}
```

---

### drawImage

Dessiner une image sur le canvas aux coordonnées spécifiées.

#### Paramètres

| Nom    | Type   | Requis | Description                        |
|--------|--------|--------|------------------------------------|
| image  | string | Oui    | Image à dessiner (base64 ou id)    |
| x      | number | Oui    | Coordonnée X                       |
| y      | number | Oui    | Coordonnée Y                       |
| width  | number | Oui    | Largeur de l'image à dessiner      |
| height | number | Oui    | Hauteur de l'image à dessiner      |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "drawImage",
  "properties": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "x": 50,
    "y": 100,
    "width": 200,
    "height": 150
  }
}
```

---

### strokeRect

Dessiner le contour d'un rectangle aux coordonnées spécifiées.

#### Paramètres

| Nom    | Type   | Requis | Description                  |
|--------|--------|--------|------------------------------|
| x      | number | Oui    | Coordonnée X du rectangle    |
| y      | number | Oui    | Coordonnée Y du rectangle    |
| width  | number | Oui    | Largeur du rectangle         |
| height | number | Oui    | Hauteur du rectangle         |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "strokeRect",
  "properties": {
    "x": 20,
    "y": 30,
    "width": 120,
    "height": 80
  }
}
```

---

### fillRect

Dessiner un rectangle rempli aux coordonnées spécifiées.

#### Paramètres

| Nom    | Type   | Requis | Description                  |
|--------|--------|--------|------------------------------|
| x      | number | Oui    | Coordonnée X du rectangle    |
| y      | number | Oui    | Coordonnée Y du rectangle    |
| width  | number | Oui    | Largeur du rectangle         |
| height | number | Oui    | Hauteur du rectangle         |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillRect",
  "properties": {
    "x": 40,
    "y": 60,
    "width": 200,
    "height": 100
  }
}
```

---

### fillText

Écrire du texte aux coordonnées spécifiées.

#### Paramètres

| Nom   | Type   | Requis | Description              |
|-------|--------|--------|--------------------------|
| text  | string | Oui    | Texte à dessiner         |
| x     | number | Oui    | Coordonnée X du texte    |
| y     | number | Oui    | Coordonnée Y du texte    |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillText",
  "properties": {
    "text": "Hello, Canvas!",
    "x": 100,
    "y": 200
  }
}
```

---

### strokeStyle

Définir le style de contour utilisé pour les dessins.

#### Paramètres

| Nom   | Type   | Requis | Description         |
|-------|--------|--------|---------------------|
| style | string | Oui    | Style de contour    |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "strokeStyle",
  "properties": {
    "style": "#FF0000"
  }
}
```

---

### fillStyle

Définir le style de remplissage utilisé pour les dessins.

#### Paramètres

| Nom   | Type   | Requis | Description         |
|-------|--------|--------|---------------------|
| style | string | Oui    | Style de remplissage|

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillStyle",
  "properties": {
    "style": "rgba(0,255,0,0.5)"
  }
}
```

---

### lineWidth

Définir l'épaisseur du trait utilisé pour les dessins.

#### Paramètres

| Nom   | Type   | Requis | Description         |
|-------|--------|--------|---------------------|
| style | number | Oui    | Largeur du trait    |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "lineWidth",
  "properties": {
    "style": 5
  }
}
```

---

### measureText

Mesurer le texte spécifié et retourner les métriques.

#### Paramètres

| Nom   | Type   | Requis | Description         |
|-------|--------|--------|---------------------|
| text  | string | Oui    | Texte à mesurer     |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "measureText",
  "properties": {
    "text": "Sample text"
  }
}
```

---

## Notes

- Toutes les fonctions sont conçues pour être utilisées dans un contexte de manipulation de canvas en JavaScript.
- Les paramètres `x`, `y`, `width`, `height` sont exprimés en pixels.
- Les styles (`strokeStyle`, `fillStyle`) acceptent les formats CSS standards (hexadécimal, rgb, rgba, etc.).
- Pour les actions complexes, utilisez la fonction `canvas` avec une liste d'actions dans le paramètre `execute`.
- L'image peut être une chaîne base64 ou un identifiant d'image préalablement chargé via `loadImage`.