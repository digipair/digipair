# @digipair/skill-web-debug

**Version:** 0.1.0  
**Résumé:** Web Page Debugging  
**Description:** Cette compétence permet de déboguer des applications web, en fournissant des outils et fonctionnalités pour identifier et résoudre les problèmes.  
**Icône:** 🔧

## Table des matières

- [Fonctions](#fonctions)
  - [log](#log)

---

## Fonctions

### log

Afficher un message dans la console JavaScript.

#### Description

La fonction `log` permet d'afficher un message personnalisé dans la console du navigateur ou de l'environnement d'exécution JavaScript. Elle est utile pour le débogage, le suivi d'événements ou l'affichage d'informations contextuelles lors de l'exécution d'une application web.

#### Paramètres

| Nom    | Type   | Requis | Description                        |
|--------|--------|--------|------------------------------------|
| label  | string | Oui    | Sujet ou titre du message à logger |
| type   | string | Non    | Type de log (ex: 'info', 'warn', 'error', etc.) |
| value  | object | Non    | Valeur additionnelle à afficher (objet, données, etc.) |

#### Exemple d'utilisation

```javascript
import { log } from '@digipair/skill-web-debug';

// Exemple simple
log({
  label: "Chargement de la page",
  type: "info"
});

// Exemple avec valeur additionnelle
log({
  label: "Erreur lors de la récupération des données",
  type: "error",
  value: { code: 404, message: "Not Found" }
});
```

#### Exemple JSON

```json
{
  "library": "@digipair/skill-web-debug",
  "element": "log",
  "properties": {
    "label": "Connexion réussie",
    "type": "success",
    "value": { "userId": 12345 }
  }
}
```

#### Notes

- Le paramètre `label` est obligatoire et doit être une chaîne de caractères décrivant le sujet du log.
- Le paramètre `type` permet de catégoriser le message (par exemple : `info`, `warn`, `error`, `debug`, etc.). Si non spécifié, le type par défaut est utilisé.
- Le paramètre `value` peut contenir n'importe quel objet ou donnée supplémentaire à afficher dans la console.
- Cette fonction est principalement destinée à un usage de débogage et ne doit pas être utilisée pour le logging de production sensible.

---

## Notes générales

- La fonction `log` est conçue pour faciliter le débogage des applications web en centralisant l'affichage des messages dans la console.
- Assurez-vous de ne pas exposer d'informations sensibles dans les logs, surtout en environnement de production.
- Cette librairie s'intègre facilement dans tout projet JavaScript nécessitant des outils de débogage simples et efficaces.