# @digipair/skill-html

**Version :** 0.1.0  
**Résumé :** HTML Code Management  
**Description :** Cette compétence permet de gérer du code HTML.  
**Icône :** 🌐

## Table des matières

- [Fonctions](#fonctions)
  - [html2pins](#html2pins)
  - [pins2html](#pins2html)
  - [parseHtml](#parsehtml)

---

## Fonctions

### html2pins

Convertit du code HTML en "Pins".

#### Paramètres

| Nom      | Type   | Requis | Description                |
|----------|--------|--------|----------------------------|
| html     | string | Oui    | Code HTML à convertir      |
| library  | string | Non    | Bibliothèque de Pins à utiliser (optionnel) |

#### Exemple

```json
{
  "library": "@digipair/skill-html",
  "element": "html2pins",
  "properties": {
    "html": "<div>Hello World</div>",
    "library": "defaultPinsLibrary"
  }
}
```

---

### pins2html

Convertit une liste de "Pins" en code HTML.

#### Paramètres

| Nom   | Type   | Requis | Description           |
|-------|--------|--------|-----------------------|
| pins  | string | Oui    | Liste de Pins à convertir en HTML |

#### Exemple

```json
{
  "library": "@digipair/skill-html",
  "element": "pins2html",
  "properties": {
    "pins": "[{\"type\":\"text\",\"value\":\"Hello\"}]"
  }
}
```

---

### parseHtml

Analyse du code HTML et exécute une liste d'actions.

#### Paramètres

| Nom      | Type   | Requis | Description                                 |
|----------|--------|--------|---------------------------------------------|
| html     | string | Oui    | Code HTML à analyser                        |
| execute  | array  | Oui    | Liste d'actions à exécuter (format pinsSettings) |

#### Exemple

```json
{
  "library": "@digipair/skill-html",
  "element": "parseHtml",
  "properties": {
    "html": "<div>Test</div>",
    "execute": [
      {
        "action": "extractText",
        "selector": "div"
      }
    ]
  }
}
```

---

## Notes

- Les fonctions de cette librairie permettent de convertir du HTML en structure de données "Pins" et inversement, ainsi que d'analyser du HTML selon des actions personnalisées.
- Le paramètre `execute` de la fonction `parseHtml` doit être conforme au schéma `pinsSettings` (voir la documentation de référence pour le format exact).
- Assurez-vous de fournir un code HTML valide pour les fonctions `html2pins` et `parseHtml`.
- La bibliothèque de Pins (`library`) est optionnelle dans `html2pins` et permet de spécifier une bibliothèque personnalisée pour la conversion.

---

**Auteur :** [@digipair](https://github.com/digipair)  
**Licence :** MIT