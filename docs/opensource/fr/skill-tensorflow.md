# @digipair/skill-tensorflow

**Version:** 0.1.0  
**Summary:** Analyse par Deep Learning  
**Description:** Cette compétence permet aux utilisateurs d'analyser des données par Deep Learning.  
**Icon:** 🤖

## Table des matières

- [Fonctions](#fonctions)
  - [cocoSsd](#cocosd)
  - [faceDetection](#facedetection)

## Fonctions

### cocoSsd

Détecte les objets dans une image.

#### Paramètres

| Nom    | Type   | Requis | Description                     |
|--------|--------|--------|---------------------------------|
| image  | string | Oui    | Image à analyser                |

#### Exemple

```json
{
  "library": "@digipair/skill-tensorflow",
  "element": "cocoSsd",
  "properties": {
    "image": "data:image/jpeg;base64,..."
  }
}
```

### faceDetection

Détecte les visages dans une image.

#### Paramètres

| Nom    | Type   | Requis | Description                     |
|--------|--------|--------|---------------------------------|
| image  | string | Oui    | Image à analyser                |

#### Exemple

```json
{
  "library": "@digipair/skill-tensorflow",
  "element": "faceDetection",
  "properties": {
    "image": "data:image/jpeg;base64,..."
  }
}
```

## Notes

- Les fonctions `cocoSsd` et `faceDetection` sont utilisées pour détecter respectivement les objets et les visages dans une image fournie.
- Assurez-vous de fournir une image valide au format base64 pour le paramètre `image`.