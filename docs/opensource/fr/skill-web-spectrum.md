# @digipair/skill-web-spectrum

**Version:** 0.1.0  
**Summary:** Design System Spectrum  
**Description:** créer des interfaces web en utilisant le design system Spectrum.  
**Icon:** 🎨

## Table des matières

- [Fonctions](#fonctions)
  - [spTheme](#spTheme)
  - [spTable](#spTable)
  - [spTableHead](#spTableHead)
  - [spTableHeadCell](#spTableHeadCell)
  - [spTableBody](#spTableBody)
  - [spTableRow](#spTableRow)
  - [spTableCell](#spTableCell)
  - [spActionGroup](#spActionGroup)
  - [spActionButton](#spActionButton)
  - [spIcon](#spIcon)
  - [spDivider](#spDivider)
  - [spSearch](#spSearch)
  - [spTopNav](#spTopNav)
  - [spTopNavItem](#spTopNavItem)
  - [spActionMenu](#spActionMenu)
  - [spMenu](#spMenu)
  - [spMenuItem](#spMenuItem)
  - [spMenuDivider](#spMenuDivider)
  - [spIllustratedMessage](#spIllustratedMessage)
  - [spFieldLabel](#spFieldLabel)
  - [spTextfield](#spTextfield)
  - [spHelpText](#spHelpText)
  - [spButton](#spButton)
  - [spToast](#spToast)

## Fonctions

### spTheme

Thème de l'interface

#### Paramètres

| Nom   | Type   | Requis | Description                          |
| ----- | ------ | ------ | ------------------------------------ |
| theme | string | Non    | Nom du thème à appliquer             |
| color | string | Non    | Couleur du thème                     |
| scale | string | Non    | Echelle du thème                     |
| style | string | Non    | Personnalisation des styles du thème |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTheme",
  "properties": {
    "theme": "light",
    "color": "blue",
    "scale": "medium",
    "style": "custom-style"
  }
}
```

### spTable

Tableau d'éléments

#### Paramètres

| Nom      | Type   | Requis | Description                                        |
| -------- | ------ | ------ | -------------------------------------------------- |
| selects  | string | Non    | Type de sélection des lignes du tableau            |
| selected | string | Non    | Lignes sélectionnées à l'initialisation du tableau |

#### Événements

| Nom    | Type  | Requis | Description                                                                      |
| ------ | ----- | ------ | -------------------------------------------------------------------------------- |
| change | array | Non    | Action déclenchée lors d'une modification de sélection de lignes dans le tableau |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTable",
  "properties": {
    "selects": "multiple",
    "selected": "row1,row2"
  },
  "events": {
    "change": []
  }
}
```

### spTableHead

Entête d'un tableau

#### Paramètres

Aucun

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableHead",
  "properties": {}
}
```

### spTableHeadCell

Cellule d'entête d'un tableau

#### Paramètres

| Nom         | Type   | Requis | Description                  |
| ----------- | ------ | ------ | ---------------------------- |
| textContent | string | Non    | Texte de la cellule d'entête |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableHeadCell",
  "properties": {
    "textContent": "Header Text"
  }
}
```

### spTableBody

Contenu d'un tableau

#### Paramètres

Aucun

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableBody",
  "properties": {}
}
```

### spTableRow

Ligne d'un tableau

#### Paramètres

| Nom   | Type   | Requis | Description                        |
| ----- | ------ | ------ | ---------------------------------- |
| value | string | Non    | Identifiant de la ligne du tableau |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableRow",
  "properties": {
    "value": "row1"
  }
}
```

### spTableCell

Cellule d'un tableau

#### Paramètres

| Nom         | Type   | Requis | Description         |
| ----------- | ------ | ------ | ------------------- |
| textContent | string | Non    | Texte de la cellule |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableCell",
  "properties": {
    "textContent": "Cell Text"
  }
}
```

### spActionGroup

Groupe d'actions

#### Paramètres

| Nom   | Type   | Requis | Description                                   |
| ----- | ------ | ------ | --------------------------------------------- |
| id    | string | Non    | Identifiant du groupe d'actions               |
| size  | string | Non    | Taille des boutons du groupe d'actions        |
| dir   | string | Non    | Direction de l'écriture du texte (ltr ou rtl) |
| style | string | Non    | Personnalisation des styles du thème          |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spActionGroup",
  "properties": {
    "id": "action-group-1",
    "size": "medium",
    "dir": "ltr",
    "style": "custom-style"
  }
}
```

### spActionButton

Bouton d'action à intégrer dans un groupe d'actions

#### Paramètres

| Nom             | Type    | Requis | Description                                                   |
| --------------- | ------- | ------ | ------------------------------------------------------------- |
| textContent     | string  | Non    | Texte du bouton                                               |
| selected        | boolean | Non    | Bouton sélectionné                                            |
| disabled        | boolean | Non    | Bouton désactivé                                              |
| hold-affordance | boolean | Non    | Affiche une coche indiquant la présence d'une liste d'actions |
| quiet           | boolean | Non    | Affiche le bouton en mode discret                             |
| toggle          | boolean | Non    | Affiche un bouton activable/désactivable                      |
| slot            | string  | Non    | Emplacement de l'icone                                        |
| size            | string  | Non    | Taille du bouton                                              |

#### Événements

| Nom   | Type  | Requis | Description                                    |
| ----- | ----- | ------ | ---------------------------------------------- |
| click | array | Non    | Action déclenchée lors d'un clic sur le bouton |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spActionButton",
  "properties": {
    "textContent": "Action",
    "selected": false,
    "disabled": false,
    "hold-affordance": false,
    "quiet": false,
    "toggle": false,
    "slot": "icon",
    "size": "medium"
  },
  "events": {
    "click": []
  }
}
```

### spIcon

Affiche une icone

#### Paramètres

| Nom   | Type   | Requis | Description                  |
| ----- | ------ | ------ | ---------------------------- |
| name  | string | Non    | Nom de l'icone               |
| size  | string | Non    | Taille de l'icone            |
| label | string | Non    | Texte d'étiquette de l'icone |
| src   | string | Non    | Lien de l'image à afficher   |
| slot  | string | Non    | Emplacement de l'icone       |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spIcon",
  "properties": {
    "name": "icon-name",
    "size": "medium",
    "label": "Icon Label",
    "src": "icon-src",
    "slot": "icon-slot"
  }
}
```

### spDivider

Barre de séparation

#### Paramètres

| Nom      | Type    | Requis | Description                                |
| -------- | ------- | ------ | ------------------------------------------ |
| size     | string  | Non    | Taille de la barre de séparation           |
| style    | string  | Non    | Personnalisation des styles du thème       |
| vertical | boolean | Non    | Place la barre de séparation verticalement |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spDivider",
  "properties": {
    "size": "medium",
    "style": "custom-style",
    "vertical": false
  }
}
```

### spSearch

Barre de recherche

#### Paramètres

| Nom      | Type    | Requis | Description                                   |
| -------- | ------- | ------ | --------------------------------------------- |
| disabled | boolean | Non    | Barre de recherche désactivée                 |
| quiet    | boolean | Non    | Affiche la barre de recherche en mode discret |

#### Événements

| Nom    | Type  | Requis | Description                                             |
| ------ | ----- | ------ | ------------------------------------------------------- |
| submit | array | Non    | Action déclenchée lors de la soumission de la recherche |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spSearch",
  "properties": {
    "disabled": false,
    "quiet": false
  },
  "events": {
    "submit": []
  }
}
```

### spTopNav

Barre de navigation horizontale

#### Paramètres

Aucun

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTopNav",
  "properties": {}
}
```

### spTopNavItem

Element de la barre de navigation horizontale

#### Paramètres

| Nom         | Type   | Requis | Description                                           |
| ----------- | ------ | ------ | ----------------------------------------------------- |
| textContent | string | Non    | Texte de l'élément de navigation                      |
| href        | string | Non    | Adresse de redirection                                |
| style       | string | Non    | Personnalisation des styles de la barre de navigation |

#### Événements

| Nom   | Type  | Requis | Description                                    |
| ----- | ----- | ------ | ---------------------------------------------- |
| click | array | Non    | Action déclenchée lors d'un clic sur le bouton |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTopNavItem",
  "properties": {
    "textContent": "Home",
    "href": "/home",
    "style": "custom-style"
  },
  "events": {
    "click": []
  }
}
```

### spActionMenu

Menu d'actions

#### Paramètres

| Nom       | Type    | Requis | Description                                           |
| --------- | ------- | ------ | ----------------------------------------------------- |
| label     | string  | Non    | Etiquette de description du menu                      |
| placement | string  | Non    | Emplacement du menu                                   |
| style     | string  | Non    | Personnalisation des styles de la barre de navigation |
| quiet     | boolean | Non    | Active le mode discret du menu                        |
| size      | string  | Non    | Taille des boutons du groupe d'actions                |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spActionMenu",
  "properties": {
    "label": "Menu Label",
    "placement": "top",
    "style": "custom-style",
    "quiet": false,
    "size": "medium"
  }
}
```

### spMenu

Menu

#### Paramètres

| Nom        | Type    | Requis | Description                                           |
| ---------- | ------- | ------ | ----------------------------------------------------- |
| slot       | string  | Non    | Etiquette de description du menu                      |
| style      | string  | Non    | Personnalisation des styles de la barre de navigation |
| selectable | boolean | Non    | Active le mode sélectionnable du menu                 |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spMenu",
  "properties": {
    "slot": "menu-slot",
    "style": "custom-style",
    "selectable": true
  }
}
```

### spMenuItem

Element du menu

#### Paramètres

| Nom         | Type    | Requis | Description                        |
| ----------- | ------- | ------ | ---------------------------------- |
| textContent | string  | Non    | Texte de l'élément du menu         |
| href        | string  | Non    | Lien de l'élément du menu          |
| value       | string  | Non    | Valeur de l'élément du menu        |
| disabled    | boolean | Non    | Elément désactivé                  |
| selected    | boolean | Non    | Sélectionne l'élément dans le menu |

#### Événements

| Nom   | Type  | Requis | Description                                            |
| ----- | ----- | ------ | ------------------------------------------------------ |
| click | array | Non    | Action déclenchée lors d'un clic sur l'élément du menu |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spMenuItem",
  "properties": {
    "textContent": "Menu Item",
    "href": "/item",
    "value": "item1",
    "disabled": false,
    "selected": false
  },
  "events": {
    "click": []
  }
}
```

### spMenuDivider

Diviseur du menu

#### Paramètres

Aucun

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spMenuDivider",
  "properties": {}
}
```

### spIllustratedMessage

Message illustré

#### Paramètres

| Nom         | Type   | Requis | Description                     |
| ----------- | ------ | ------ | ------------------------------- |
| heading     | string | Oui    | Titre du message illustré       |
| description | string | Oui    | Description du message illustré |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spIllustratedMessage",
  "properties": {
    "heading": "Illustrated Message",
    "description": "This is an illustrated message."
  }
}
```

### spFieldLabel

Etiquette de champ de formulaire

#### Paramètres

| Nom         | Type    | Requis | Description                  |
| ----------- | ------- | ------ | ---------------------------- |
| textContent | string  | Oui    | Texte de l'élément           |
| for         | string  | Oui    | Identifiant du champ associé |
| required    | boolean | Non    | Champ requis                 |
| size        | string  | Non    | Taille du champ              |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spFieldLabel",
  "properties": {
    "textContent": "Field Label",
    "for": "input-id",
    "required": true,
    "size": "medium"
  }
}
```

### spTextfield

Champs texte de formulaire

#### Paramètres

| Nom         | Type    | Requis | Description                       |
| ----------- | ------- | ------ | --------------------------------- |
| id          | string  | Non    | Identifiant du champ              |
| name        | string  | Non    | Nom du champ                      |
| placeholder | string  | Non    | Texte de placeholder du champ     |
| valide      | boolean | Non    | Champ valide                      |
| invalide    | boolean | Non    | Champ invalide                    |
| value       | string  | Non    | Valeur du champ                   |
| quiet       | boolean | Non    | Champ en mode discret             |
| type        | string  | Non    | Type du champ                     |
| multiline   | boolean | Non    | Champ multiligne                  |
| grows       | boolean | Non    | Champ qui grandit automatiquement |
| pattern     | string  | Non    | Pattern du champ                  |
| size        | string  | Non    | Taille du champ                   |
| style       | string  | Non    | Personnalisation des styles       |

#### Événements

| Nom   | Type  | Requis | Description                                       |
| ----- | ----- | ------ | ------------------------------------------------- |
| input | array | Non    | Action déclenchée lors de la saisie dans le champ |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTextfield",
  "properties": {
    "id": "textfield-id",
    "name": "textfield-name",
    "placeholder": "Enter text",
    "valide": true,
    "invalide": false,
    "value": "Initial value",
    "quiet": false,
    "type": "text",
    "multiline": false,
    "grows": false,
    "pattern": ".*",
    "size": "medium",
    "style": "custom-style"
  },
  "events": {
    "input": []
  }
}
```

### spHelpText

Texte d'aide

#### Paramètres

| Nom         | Type   | Requis | Description                 |
| ----------- | ------ | ------ | --------------------------- |
| textContent | string | Oui    | Texte de l'élément          |
| slot        | string | Non    | Emplacement du texte d'aide |

#### Exemple

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spHelpText",
  "properties": {
    "textContent": "Help text",
    "slot": "help-slot"
  }
}
```

### spButton

Bouton

#### Paramètres

| Nom         | Type   | Requis | Description               |
| ----------- | ------ | ------ | ------------------------- |
| id          | string | Non    | Identifiant du champ      |
| textContent | string | Non    | Texte de l'élément        |
| href        | string | Non    | Adresse de redirection du |
