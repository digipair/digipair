# @digipair/skill-web-ocr

**Version:** 0.1.0  
**Résumé:** OCR Text Extraction  
**Description:** Cette compétence utilise la technologie OCR pour analyser des images et extraire du texte, permettant ainsi la saisie automatique de données.  
**Icône:** 📄

## Table des matières

- [Fonctions](#fonctions)
  - [digipair-input-ocr-selector](#digipair-input-ocr-selector)
  - [digipair-input-ocr](#digipair-input-ocr)

---

## Fonctions

### digipair-input-ocr-selector

**Résumé:** Extraire du texte d'une image présente dans le DOM  
**Description:** Élément permettant de récupérer le texte d'une image présente dans le DOM via un sélecteur CSS.

#### Paramètres

| Nom        | Type    | Requis | Description                                                                 |
|------------|---------|--------|-----------------------------------------------------------------------------|
| selector   | string  | Oui    | Sélecteur CSS de l'image présente dans le DOM                               |
| language   | string  | Oui    | Langue du texte à extraire                                                  |
| required   | boolean | Non    | Si le champ est requis, le boost ne peut être exécuté tant qu'une valeur n'a pas été saisie |

#### Exemple d'utilisation

```json
{
  "library": "@digipair/skill-web-ocr",
  "element": "digipair-input-ocr-selector",
  "properties": {
    "selector": "#image-a-analyser",
    "language": "fr",
    "required": true
  }
}
```

---

### digipair-input-ocr

**Résumé:** Extraire du texte d'une image fournie par l'utilisateur  
**Description:** Élément permettant d'extraire le texte d'une image fournie par l'utilisateur (upload).

#### Paramètres

| Nom      | Type    | Requis | Description                                                        |
|----------|---------|--------|--------------------------------------------------------------------|
| language | string  | Oui    | Langue du texte à extraire                                         |
| label    | string  | Non    | Texte affiché à l'utilisateur pour l'aider dans sa saisie          |
| accept   | string  | Non    | Types de fichiers acceptés (ex: "image/png, image/jpeg")            |
| required | boolean | Non    | Si le champ est requis pour exécuter le boost                      |

#### Exemple d'utilisation

```json
{
  "library": "@digipair/skill-web-ocr",
  "element": "digipair-input-ocr",
  "properties": {
    "language": "en",
    "label": "Veuillez importer une image à analyser",
    "accept": "image/png, image/jpeg",
    "required": false
  }
}
```

---

## Notes

- Les fonctions `digipair-input-ocr-selector` et `digipair-input-ocr` permettent d'intégrer facilement des capacités d'extraction de texte par OCR dans des applications web, soit à partir d'images déjà présentes dans le DOM, soit via l'import d'images par l'utilisateur.
- Le paramètre `language` doit être renseigné avec le code de langue approprié (ex: `"fr"` pour le français, `"en"` pour l'anglais).
- Le paramètre `required` permet de contrôler la validation du champ avant l'exécution du boost.
- Pour `digipair-input-ocr-selector`, assurez-vous que le sélecteur CSS pointe vers une image valide et accessible dans le DOM.
- Pour `digipair-input-ocr`, le paramètre `accept` permet de restreindre les types de fichiers que l'utilisateur peut importer.

---

**Pour toute contribution ou question, veuillez consulter le dépôt GitHub du projet.**