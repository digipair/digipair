# @digipair/skill-markdown-manager

**Version:** 0.1.0  
**Résumé:** Gestionnaire Markdown 
**Description:** Traiter des markdown, découpage, ...  
**Icône:** 📄

## Table des matières

- [Functions](#functions)
  - [splitMdIntoSections](#splitMdIntoSections)

---

## Fonctions

### splitMdIntoSections

Découpe le markdown en sections par rapport aux titres, source docx.

#### Paramètres

| Nom  | Type   | Requis   | Description                             |
| ---- | ------ | -------- | --------------------------------------- |
| md   | string | Oui      | Markdown à découper en sections         |

#### Exemple

```json
{
  "library": "@digipair/skill-markdown-manager",
  "element": "splitMdIntoSections",
  "properties": {
    "md": "# Le machine learning est un sous-domaine de l'intelligence artificielle..."
  }
}
```

#### Valeur retournée

La fonction retourne le markdown découpé en sections sous forme d'un tableau d'objets avec title et content.

---



**Author:** [@digipair](https://github.com/digipair)  
**License:** MIT
