# @digipair/skill-web-debug

**Version:** 0.1.0  
**Summary:** Debug de page web  
**Description:** déboguer des applications web, offrant des outils et des fonctionnalités pour identifier et résoudre les problèmes.  
**Icon:** 🔧

## Table des matières

- [Fonctions](#fonctions)
  - [log](#log)

## Fonctions

### log

Afficher dans la console

#### Description

Element permettant d'afficher un message dans la console javascript.

#### Paramètres

| Nom   | Type   | Requis | Description                      |
| ----- | ------ | ------ | -------------------------------- |
| label | string | Oui    | Sujet du log                     |
| type  | string | Non    | Type de log                      |
| value | object | Non    | Valeur supplémentaire à afficher |

#### Exemple

```json
{
  "library": "@digipair/skill-web-debug",
  "element": "log",
  "properties": {
    "label": "Erreur",
    "type": "error",
    "value": {
      "message": "Une erreur est survenue"
    }
  }
}
```

## Notes

- La fonction `log` est utilisée pour afficher des messages dans la console JavaScript, ce qui est utile pour le débogage des applications web.
- Le paramètre `label` est obligatoire et représente le sujet du log.
- Les paramètres `type` et `value` sont optionnels. `type` peut être utilisé pour spécifier le type de log (par exemple, "info", "warning", "error"), et `value` peut contenir des informations supplémentaires à afficher dans la console.
