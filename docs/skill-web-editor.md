# @digipair/skill-web-editor

**Version:** 0.1.0  
**Summary:** Affichage de l'éditeur de raisonnements  
**Description:** Edition de raisonnements IA.  
**Icon:** 🏗

## Table des matières

- [Fonctions](#fonctions)
  - [digipairEditor](#digipairEditor)

## Fonctions

### digipairEditor

Editeur no-code de raisonnements IA

#### Paramètres

| Nom                  | Type   | Requis | Description                              |
|----------------------|--------|--------|------------------------------------------|
| digipair             | object | Oui    | Informations du digipair propriétaire du raisonnement |
| reasoning            | object | Oui    | Informations du raisonnement à éditer    |
| schemas              | object | Oui    | Liste des schemas des compétences privées|
| menuColor            | string | Non    | Couleur de texte du menu                 |
| menuBackgroundColor  | string | Non    | Couleur de fond du menu                  |
| contentStyle         | string | Non    | Style personnalisé du conteneur          |

#### Exemple

```json
{
  "library": "@digipair/skill-web-editor",
  "element": "digipairEditor",
  "properties": {
    "digipair": {
      "id": "12345",
      "name": "Example Digipair"
    },
    "reasoning": {
      "id": "67890",
      "description": "Example Reasoning"
    },
    "schemas": {
      "schema1": {
        "type": "object",
        "properties": {
          "property1": {
            "type": "string"
          }
        }
      }
    },
    "menuColor": "#FFFFFF",
    "menuBackgroundColor": "#000000",
    "contentStyle": "padding: 10px; border: 1px solid #ccc;"
  }
}
```

## Notes

- La fonction `digipairEditor` est utilisée pour afficher un éditeur no-code permettant de manipuler des raisonnements IA.
- Les paramètres `menuColor`, `menuBackgroundColor`, et `contentStyle` sont optionnels et permettent de personnaliser l'apparence de l'éditeur.
- Assurez-vous de fournir des objets valides pour les paramètres `digipair`, `reasoning`, et `schemas`.