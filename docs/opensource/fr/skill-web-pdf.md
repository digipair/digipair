# @digipair/skill-web-pdf

**Version:** 0.1.0  
**Résumé:** Extraction de texte depuis un PDF  
**Description:** Cette compétence permet d'extraire du texte à partir d'un fichier PDF.  
**Icône:** 📄

## Table des matières

- [Fonctions](#fonctions)
  - [digipair-input-pdf](#digipair-input-pdf)

---

## Fonctions

### digipair-input-pdf

Extraire le texte d'un fichier PDF fourni par l'utilisateur.

#### Description

Cette fonction permet d'extraire le texte contenu dans un fichier PDF. L'utilisateur fournit le fichier PDF, et la fonction retourne le texte extrait. Elle peut être utilisée dans des interfaces où l'utilisateur doit charger un PDF pour en obtenir le contenu textuel.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| label    | string  | Non    | Texte affiché à l'utilisateur pour l'aider dans son action. |
| accept   | string  | Non    | Types de fichiers acceptés (ex: ".pdf").         |
| required | boolean | Non    | Indique si le champ est obligatoire pour exécuter la fonction. |

#### Exemple d'utilisation

```json
{
  "library": "@digipair/skill-web-pdf",
  "element": "digipair-input-pdf",
  "properties": {
    "label": "Sélectionnez un fichier PDF à analyser",
    "accept": ".pdf",
    "required": true
  }
}
```

#### Exemple de résultat attendu

```json
{
  "text": "Contenu textuel extrait du fichier PDF."
}
```

---

## Notes

- La fonction `digipair-input-pdf` est conçue pour être intégrée dans des interfaces utilisateur où l'extraction de texte depuis un PDF est nécessaire.
- Le paramètre `accept` permet de restreindre le type de fichiers sélectionnables par l'utilisateur (par défaut, ".pdf").
- Le paramètre `label` améliore l'expérience utilisateur en affichant un texte d'aide.
- Le paramètre `required` permet de rendre la sélection du fichier obligatoire ou non.
- Aucun schéma de données additionnel n'est requis pour cette fonction.

---

**Auteur:** [@digipair](https://github.com/digipair)  
**Licence:** MIT (à confirmer selon le projet)