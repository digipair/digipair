# @digipair/skill-webcam

**Version:** 0.1.0  
**Summary:** Gestion de la webcam  
**Description:** accéder aux images des webcams.  
**Icon:** 📷

## Table des matières

- [Fonctions](#fonctions)
  - [capture](#capture)
  - [list](#list)

## Fonctions

### capture

Capture une image de la webcam.

#### Paramètres

| Nom     | Type    | Requis | Description                                                  |
| ------- | ------- | ------ | ------------------------------------------------------------ |
| width   | number  | Non    | Largeur de l'image.                                          |
| height  | number  | Non    | Hauteur de l'image.                                          |
| quality | number  | Non    | Qualité de l'image (valeur entre 1 et 100).                  |
| output  | string  | Non    | Type de sortie de l'image (jpeg, png).                       |
| device  | string  | Non    | Nom de la caméra à utiliser.                                 |
| verbose | boolean | Non    | Affiche des informations supplémentaires lors de la capture. |

#### Exemple

```json
{
  "library": "@digipair/skill-webcam",
  "element": "capture",
  "properties": {
    "width": 1280,
    "height": 720,
    "quality": 90,
    "output": "jpeg",
    "device": "Webcam de bureau",
    "verbose": true
  }
}
```

### list

Retourne la liste des webcams présentes sur le système.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-webcam",
  "element": "list",
  "properties": {}
}
```

## Notes

- La fonction `capture` permet de prendre une photo à partir de la webcam avec des options personnalisables pour la taille, la qualité et le format de l'image.
- La fonction `list` permet d'obtenir une liste des webcams disponibles sur le système, ce qui peut être utile pour sélectionner une caméra spécifique à utiliser avec la fonction `capture`.
- Assurez-vous que la webcam est correctement connectée et accessible avant d'utiliser ces fonctions.
