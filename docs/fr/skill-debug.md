# @digipair/skill-debug

**Version:** 0.1.0  
**Summary:** Debug de la factory  
**Description:** Cette compétence permet aux utilisateurs de déboguer des actions exécutées sur la factory, offrant des outils et des fonctionnalités pour identifier et résoudre les problèmes.  
**Icon:** 🔧

## Table des matières

- [Fonctions](#fonctions)
  - [log](#log)

## Fonctions

### log

Afficher dans les logs

#### Description

Element permettant d'afficher un message dans les logs.

#### Paramètres

| Nom   | Type   | Requis | Description                |
|-------|--------|--------|----------------------------|
| label | string | Oui    | Sujet du log               |
| type  | string | Non    | Type de log                |
| value | object | Non    | Valeur supplémentaire à afficher |

#### Exemple

```json
{
  "library": "@digipair/skill-debug",
  "element": "log",
  "properties": {
    "label": "Erreur critique",
    "type": "error",
    "value": {
      "code": 500,
      "message": "Erreur interne du serveur"
    }
  }
}
```

## Notes

- La fonction `log` est utilisée pour afficher des messages dans les logs, ce qui est utile pour le débogage et le suivi des actions exécutées sur la factory.
- Le paramètre `label` est obligatoire et doit contenir le sujet du log.
- Les paramètres `type` et `value` sont optionnels. Le `type` peut être utilisé pour spécifier le type de log (par exemple, "info", "warning", "error"), et `value` peut contenir des informations supplémentaires à afficher dans le log.