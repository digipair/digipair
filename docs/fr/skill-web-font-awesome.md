# @digipair/skill-web-font-awesome

**Version:** 0.1.0  
**Summary:** Affichage d'icones font-awesome  
**Description:** Affichage des icones font-awesome.  
**Icon:** 🎨

## Table des matières

- [Fonctions](#fonctions)
  - [digipairFontAwesomeIcon](#digipairfontawesomeicon)

## Fonctions

### digipairFontAwesomeIcon

Icone font-awesome

#### Description

Cette fonction permet d'afficher une icône font-awesome.

#### Paramètres

| Nom      | Type   | Requis | Description                      |
|----------|--------|--------|----------------------------------|
| name     | string | Oui    | Nom de l'icone                   |
| category | object | Non    | Style personnalisé de l'icone    |
| slot     | string | Non    | Emplacement de l'icone           |

#### Exemple

```json
{
  "library": "@digipair/skill-web-font-awesome",
  "element": "digipairFontAwesomeIcon",
  "properties": {
    "name": "fa-solid fa-star",
    "category": {
      "style": "solid",
      "size": "2x"
    },
    "slot": "icon-slot"
  }
}
```

## Notes

- La fonction `digipairFontAwesomeIcon` est utilisée pour afficher une icône font-awesome spécifique.
- Assurez-vous de fournir un nom d'icône valide pour le paramètre `name`.
- Le paramètre `category` est optionnel et peut être utilisé pour personnaliser le style de l'icône.
- Le paramètre `slot` est optionnel et peut être utilisé pour spécifier l'emplacement de l'icône.