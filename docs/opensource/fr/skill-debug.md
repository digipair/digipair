# @digipair/skill-debug

**Version:** 0.1.0  
**Résumé:** Debugging  
**Description:** Cette compétence permet aux utilisateurs de déboguer les actions exécutées sur la factory, en fournissant des outils et des fonctionnalités pour identifier et résoudre les problèmes.  
**Icône:** 🔧

## Table des matières

- [Fonctions](#fonctions)
  - [log](#log)

---

## Fonctions

### log

Afficher un message dans les logs.

#### Description

La fonction `log` permet d'afficher un message dans les logs, facilitant ainsi le suivi et le débogage des actions exécutées. Elle accepte un sujet, un type de log optionnel, ainsi qu'une valeur additionnelle à afficher.

#### Paramètres

| Nom    | Type   | Requis | Description                      |
|--------|--------|--------|----------------------------------|
| label  | string | Oui    | Sujet du log                     |
| type   | string | Non    | Type de log (ex: info, error...) |
| value  | object | Non    | Valeur additionnelle à afficher  |

#### Exemple

```json
{
  "library": "@digipair/skill-debug",
  "element": "log",
  "properties": {
    "label": "Initialisation de la factory",
    "type": "info",
    "value": {
      "factoryId": "abc123",
      "status": "started"
    }
  }
}
```

#### Exemple minimal

```json
{
  "library": "@digipair/skill-debug",
  "element": "log",
  "properties": {
    "label": "Erreur lors de la connexion"
  }
}
```

---

## Notes

- La fonction `log` est principalement utilisée pour le suivi et le débogage des processus internes de la factory.
- Le paramètre `type` peut être utilisé pour catégoriser les logs (par exemple : `info`, `warning`, `error`).
- Le paramètre `value` permet d'ajouter des informations contextuelles supplémentaires au log.
- Assurez-vous de fournir un `label` explicite pour faciliter l'identification du message dans les logs.