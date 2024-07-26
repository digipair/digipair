# @digipair/skill-web-pdf

**Version:** 0.1.0  
**Summary:** Extraction de texte depuis un PDF  
**Description:** Cette compétence permet d'extraire le texte depuis un PDF.  
**Icon:** 📄

## Table des matières

- [Fonctions](#fonctions)
  - [digipairInputPdf](#digipairinputpdf)

## Fonctions

### digipairInputPdf

Extraire le texte d'un PDF

#### Description

Element permettant d'extraire le texte à partir d'un fichier PDF fourni par l'utilisateur.

#### Paramètres

| Nom      | Type    | Requis | Description                              |
|----------|---------|--------|------------------------------------------|
| label    | string  | Non    | Texte affiché à l'utilisateur pour le guider dans sa saisie |
| accept   | string  | Non    | Type de fichiers acceptés                |
| required | boolean | Non    | Champs requis pour exécuter le boost     |

#### Exemple

```json
{
  "library": "@digipair/skill-web-pdf",
  "element": "digipairInputPdf",
  "properties": {
    "label": "Veuillez télécharger votre fichier PDF",
    "accept": "application/pdf",
    "required": true
  }
}
```

## Notes

- La fonction `digipairInputPdf` est utilisée pour extraire le texte d'un fichier PDF fourni par l'utilisateur.
- Les paramètres `label`, `accept`, et `required` sont optionnels mais peuvent être utilisés pour personnaliser l'expérience utilisateur.
- Assurez-vous de fournir un fichier PDF valide pour que l'extraction de texte fonctionne correctement.