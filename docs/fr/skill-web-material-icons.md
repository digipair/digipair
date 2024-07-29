# @digipair/skill-web-material-icons

**Version:** 0.1.0  
**Summary:** Affichage d'icones material  
**Description:** Affichage des icones material.  
**Icon:** 🎨

## Table des matières

- [Fonctions](#fonctions)
  - [digipairMaterialIconsIcon](#digipairMaterialIconsIcon)

## Fonctions

### digipairMaterialIconsIcon

Afficher une icone Google Material

#### Paramètres

| Nom        | Type   | Requis | Description                  |
|------------|--------|--------|------------------------------|
| name       | string | Oui    | Nom de l'icone               |
| iconStyle  | object | Non    | Style personnalisé de l'icone|
| slot       | string | Non    | Emplacement de l'icone       |

#### Exemple

```json
{
  "library": "@digipair/skill-web-material-icons",
  "element": "digipairMaterialIconsIcon",
  "properties": {
    "name": "home",
    "iconStyle": {
      "color": "blue",
      "fontSize": "24px"
    },
    "slot": "start"
  }
}
```

## Notes

- La fonction `digipairMaterialIconsIcon` est utilisée pour afficher une icone Google Material.
- Le paramètre `name` est obligatoire et doit correspondre au nom de l'icone souhaitée.
- Le paramètre `iconStyle` est optionnel et permet de personnaliser le style de l'icone en utilisant un objet de style CSS.
- Le paramètre `slot` est optionnel et permet de spécifier l'emplacement de l'icone.