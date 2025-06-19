# @digipair/skill-web-material-icons

**Version:** 0.1.0  
**Résumé:** Display of material icons  
**Description:** Display of material icons.  
**Icône:** 🎨

## Table des matières

- [Fonctions](#fonctions)
  - [digipairMaterialIconsIcon](#digipairmaterialiconsicon)

---

## Fonctions

### digipairMaterialIconsIcon

Affiche une icône Google Material.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| name       | string | Oui    | Nom de l’icône Material à afficher |
| iconStyle  | object | Non    | Style personnalisé de l’icône      |
| slot       | string | Non    | Emplacement de l’icône             |

#### Exemple

```json
{
  "library": "@digipair/skill-web-material-icons",
  "element": "digipairMaterialIconsIcon",
  "properties": {
    "name": "home",
    "iconStyle": {
      "color": "red",
      "fontSize": "32px"
    },
    "slot": "start"
  }
}
```

#### Description détaillée

La fonction `digipairMaterialIconsIcon` permet d’afficher une icône provenant de la bibliothèque Google Material Icons.  
- Le paramètre `name` est obligatoire et correspond au nom de l’icône à afficher (par exemple : `"home"`, `"search"`, `"settings"`).
- Le paramètre optionnel `iconStyle` permet de personnaliser le style CSS de l’icône (par exemple : couleur, taille, etc.).
- Le paramètre optionnel `slot` permet de définir l’emplacement de l’icône dans une structure de layout (par exemple : `"start"`, `"end"`).

---

## Notes

- Assurez-vous que le nom de l’icône (`name`) correspond à une icône existante dans la bibliothèque Google Material Icons.
- Le paramètre `iconStyle` doit être un objet conforme aux propriétés CSS applicables à une icône.
- Cette fonction est conçue pour être utilisée dans des environnements web où l’affichage d’icônes Material est requis.