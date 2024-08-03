# @digipair/skill-canvas

**Version:** 0.1.0  
**Summary:** Manipulation de dessins  
**Description:** Cette compétence permet aux utilisateurs de manipuler un canvas pour dessiner des éléments graphiques, charger des images, et effectuer diverses opérations de dessin.  
**Icon:** 🎨

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

## Fonctions

### canvas

Créer un canvas

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| width    | number | Oui    | Largeur du canvas |
| height   | number | Oui    | Hauteur du canvas |
| execute  | array  | Oui    | Liste des actions à exécuter sur le canvas |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "canvas",
  "properties": {
    "width": 800,
    "height": 600,
    "execute": [
      // Liste des actions à exécuter
    ]
  }
}
```

### loadImage

Charger une image

#### Paramètres

| Nom    | Type   | Requis | Description |
|--------|--------|--------|-------------|
| image  | string | Oui    | Image en base64 |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "loadImage",
  "properties": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
  }
}
```

### drawImage

Dessiner une image

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| image    | string | Oui    | Image à dessiner |
| x        | number | Oui    | Coordonnée X pour dessiner l'image |
| y        | number | Oui    | Coordonnée Y pour dessiner l'image |
| width    | number | Oui    | Largeur de l'image à dessiner |
| height   | number | Oui    | Hauteur de l'image à dessiner |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "drawImage",
  "properties": {
    "image": "[Image chargée avec la fonction loadImage]",
    "x": 100,
    "y": 150,
    "width": 200,
    "height": 100
  }
}
```

### strokeRect

Dessiner un rectangle

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| x        | number | Oui    | Coordonnée X du rectangle |
| y        | number | Oui    | Coordonnée Y du rectangle |
| width    | number | Oui    | Largeur du rectangle |
| height   | number | Oui    | Hauteur du rectangle |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "strokeRect",
  "properties": {
    "x": 50,
    "y": 50,
    "width": 200,
    "height": 100
  }
}
```

### fillRect

Dessiner un rectangle rempli

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| x        | number | Oui    | Coordonnée X du rectangle |
| y        | number | Oui    | Coordonnée Y du rectangle |
| width    | number | Oui    | Largeur du rectangle |
| height   | number | Oui    | Hauteur du rectangle |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillRect",
  "properties": {
    "x": 50,
    "y": 50,
    "width": 200,
    "height": 100
  }
}
```

### fillText

Écrire un texte

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| text     | string | Oui    | Texte à dessiner |
| x        | number | Oui    | Coordonnée X du texte |
| y        | number | Oui    | Coordonnée Y du texte |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillText",
  "properties": {
    "text": "Bonjour, monde!",
    "x": 100,
    "y": 150
  }
}
```

### strokeStyle

Définir le style du contour

#### Paramètres

| Nom    | Type   | Requis | Description |
|--------|--------|--------|-------------|
| style  | string | Oui    | Style de contour |

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

### fillStyle

Définir le style de remplissage

#### Paramètres

| Nom    | Type   | Requis | Description |
|--------|--------|--------|-------------|
| style  | string | Oui    | Style de remplissage |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "fillStyle",
  "properties": {
    "style": "#00FF00"
  }
}
```

### lineWidth

Définir la largeur du trait

#### Paramètres

| Nom    | Type   | Requis | Description |
|--------|--------|--------|-------------|
| style  | number | Oui    | Largeur du trait |

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

### measureText

Mesurer le texte

#### Paramètres

| Nom    | Type   | Requis | Description |
|--------|--------|--------|-------------|
| text   | string | Oui    | Texte à mesurer |

#### Exemple

```json
{
  "library": "@digipair/skill-canvas",
  "element": "measureText",
  "properties": {
    "text": "Bonjour, monde!"
  }
}
```

## Notes

- Chaque fonction permet d'interagir avec le canvas pour créer des dessins, charger des images, et manipuler le style de dessin.
- Assurez-vous de fournir des valeurs valides pour chaque paramètre afin d'obtenir les résultats souhaités.