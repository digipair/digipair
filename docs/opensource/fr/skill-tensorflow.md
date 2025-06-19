# @digipair/skill-tensorflow

**Version:** 0.1.0  
**Résumé:** Deep Learning Analysis  
**Description:** Cette compétence permet d’analyser des données à l’aide du Deep Learning.  
**Icône:** 🤖

## Table des matières

- [Fonctions](#fonctions)
  - [cocoSsd](#cocossd)
  - [faceDetection](#facedetection)

---

## Fonctions

### cocoSsd

Détecte des objets dans une image à l’aide d’un modèle de type COCO-SSD.

#### Description

La fonction `cocoSsd` permet de détecter automatiquement les objets présents dans une image. Elle utilise un modèle de type COCO-SSD, avec la possibilité de spécifier la variante du modèle à utiliser.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                                  |
|--------|--------|--------|----------------------------------------------------------------------------------------------|
| image  | string | Oui    | Image à analyser (chemin local, base64, ou URL selon l’implémentation de la librairie)        |
| base   | string | Non    | Modèle de base à utiliser : `mobilenet_v1`, `mobilenet_v2`, ou `lite_mobilenet_v2` (optionnel) |

#### Exemple

```json
{
  "library": "@digipair/skill-tensorflow",
  "element": "cocoSsd",
  "properties": {
    "image": "chemin/vers/image.jpg",
    "base": "mobilenet_v2"
  }
}
```

---

### faceDetection

Détecte les visages présents dans une image.

#### Description

La fonction `faceDetection` permet de détecter les visages dans une image. Elle offre la possibilité de choisir l’environnement d’exécution du modèle de détection.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                                  |
|----------|--------|--------|----------------------------------------------------------------------------------------------|
| image    | string | Oui    | Image à analyser (chemin local, base64, ou URL selon l’implémentation de la librairie)        |
| runtime  | string | Non    | Environnement d’exécution : `mediapipe` ou `tfjs` (optionnel, par défaut selon la librairie) |

#### Exemple

```json
{
  "library": "@digipair/skill-tensorflow",
  "element": "faceDetection",
  "properties": {
    "image": "chemin/vers/image.jpg",
    "runtime": "mediapipe"
  }
}
```

---

## Notes

- Les fonctions `cocoSsd` et `faceDetection` sont conçues pour l’analyse d’images via des modèles de Deep Learning.
- Le paramètre `image` doit être fourni sous un format accepté par la librairie (chemin local, base64, ou URL).
- Le paramètre `base` pour `cocoSsd` et `runtime` pour `faceDetection` sont optionnels et permettent d’affiner le choix du modèle ou de l’environnement d’exécution.
- Assurez-vous que les dépendances nécessaires (TensorFlow.js, MediaPipe, etc.) sont installées et configurées dans votre environnement.

---

**Pour toute contribution ou question, veuillez consulter le dépôt GitHub associé à la librairie.**