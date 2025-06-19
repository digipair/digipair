# @digipair/skill-web-editor

**Version:** 0.1.0  
**Résumé:** Display of the reasoning editor  
**Description:** Editing of AI reasonings.  
**Icône:** 🏗

## Table des matières

- [Fonctions](#fonctions)
  - [digipairEditor](#digipairEditor)

---

## Fonctions

### digipairEditor

No-code editor for AI reasonings.

Permet d'afficher et d'éditer un raisonnement d'IA via un éditeur visuel no-code. Cette fonction est conçue pour intégrer un éditeur de raisonnement dans une application web, avec diverses options de personnalisation.

#### Paramètres

| Nom                   | Type    | Requis | Description                                 |
|-----------------------|---------|--------|---------------------------------------------|
| id                    | string  | Non    | Id de l'élément à éditer.                   |
| reasoning             | object  | Oui    | Informations du raisonnement à éditer.      |
| schemas               | object  | Non    | Liste des schémas de compétences.           |
| menuColor             | string  | Non    | Couleur du texte du menu.                   |
| menuBackgroundColor   | string  | Non    | Couleur de fond du menu.                    |
| contentStyle          | string  | Non    | Style personnalisé du conteneur.            |
| language              | string  | Non    | Langue de l'éditeur.                        |

#### Exemple d'utilisation

```js
import { digipairEditor } from '@digipair/skill-web-editor';

digipairEditor({
  id: "editor-1",
  reasoning: {
    // ...structure du raisonnement à éditer
  },
  schemas: {
    // ...schémas de compétences optionnels
  },
  menuColor: "#333333",
  menuBackgroundColor: "#f5f5f5",
  contentStyle: "padding: 20px; border-radius: 8px;",
  language: "fr"
});
```

#### Exemple de configuration JSON

```json
{
  "library": "@digipair/skill-web-editor",
  "element": "digipairEditor",
  "properties": {
    "id": "editor-1",
    "reasoning": {
      "name": "Raisonnement exemple",
      "steps": []
    },
    "schemas": {
      "skillA": { "type": "object", "properties": {} }
    },
    "menuColor": "#333333",
    "menuBackgroundColor": "#f5f5f5",
    "contentStyle": "padding: 20px; border-radius: 8px;",
    "language": "fr"
  }
}
```

#### Notes

- Le paramètre `reasoning` est obligatoire et doit contenir la structure du raisonnement à éditer.
- Les paramètres de personnalisation (`menuColor`, `menuBackgroundColor`, `contentStyle`, `language`) sont optionnels et permettent d'adapter l'éditeur à l'interface de votre application.
- `schemas` permet de fournir des schémas de compétences pour enrichir l'expérience d'édition.
- Cette fonction ne réalise pas d'appel HTTP, elle s'utilise comme une fonction JavaScript classique.

---

## Notes générales

- La fonction `digipairEditor` est le point d'entrée principal de la librairie pour intégrer un éditeur de raisonnement IA dans une application web.
- Assurez-vous de fournir un objet `reasoning` valide pour garantir le bon fonctionnement de l'éditeur.
- Pour une personnalisation avancée, utilisez les paramètres de style et de langue selon vos besoins.