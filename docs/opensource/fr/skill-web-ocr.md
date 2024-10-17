# @digipair/skill-web-ocr

**Version:** 0.1.0  
**Summary:** Extraction de texte OCR  
**Description:** Cette compétence utilise la technologie OCR pour analyser les images et en extraire le texte, permettant ainsi une saisie automatique des données.  
**Icon:** 📄

## Table des matières

- [Fonctions](#fonctions)
  - [digipairInputOcrSelector](#digipairinputocrselector)
  - [digipairInputOcr](#digipairinputocr)

## Fonctions

### digipairInputOcrSelector

Extraire le texte depuis une image du DOM

#### Description

Element permettant de récupérer le texte à partir d'une image présente dans le DOM.

#### Paramètres

| Nom      | Type    | Requis | Description                                                                 |
|----------|---------|--------|-----------------------------------------------------------------------------|
| selector | string  | Oui    | Sélecteur CSS de l'image présente dans le DOM                                |
| language | string  | Oui    | Langue du texte à extraire                                                   |
| required | boolean | Non    | Lorsque le champ est requis, le boost ne peut pas être exécuté tant qu'aucune valeur n'a été saisie |

#### Exemple

```json
{
  "library": "@digipair/skill-web-ocr",
  "element": "digipairInputOcrSelector",
  "properties": {
    "selector": "#image-id",
    "language": "fr",
    "required": true
  }
}
```

### digipairInputOcr

Extraire le texte d'une image

#### Description

Element permettant d'extraire le texte à partir d'une image fournie par l'utilisateur.

#### Paramètres

| Nom      | Type    | Requis | Description                                                                 |
|----------|---------|--------|-----------------------------------------------------------------------------|
| language | string  | Oui    | Langue du texte à extraire                                                   |
| label    | string  | Non    | Texte affiché à l'utilisateur pour le guider dans sa saisie                  |
| accept   | string  | Non    | Type de fichiers acceptés                                                    |
| required | boolean | Non    | Champ requis pour exécuter le boost                                          |

#### Exemple

```json
{
  "library": "@digipair/skill-web-ocr",
  "element": "digipairInputOcr",
  "properties": {
    "language": "en",
    "label": "Please upload an image",
    "accept": "image/*",
    "required": false
  }
}
```

## Notes

- Les fonctions `digipairInputOcrSelector` et `digipairInputOcr` sont utilisées pour extraire du texte à partir d'images présentes dans le DOM ou fournies par l'utilisateur.
- Assurez-vous de fournir des sélecteurs CSS valides et des types de fichiers acceptés pour un fonctionnement optimal.