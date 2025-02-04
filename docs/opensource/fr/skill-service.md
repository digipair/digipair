# @digipair/skill-service

**Version:** 0.1.0  
**Summary:** Serveur HTTP  
**Description:** Cette compétence permet de gérer les réponses à des appels HTTP.  
**Icon:** 💻

## Table des matières

- [Fonctions](#fonctions)
  - [service](#service)
  - [task](#task)

## Fonctions

### service

Réponse à un appel HTTP.

#### Paramètres

| Nom      | Type   | Requis | Description            |
|----------|--------|--------|------------------------|
| execute  | array  | Oui    | Commandes à exécuter   |

#### Exemple

```json
{
  "library": "@digipair/skill-service",
  "element": "service",
  "properties": {
    "execute": [
      {
        // Exemple de commande à exécuter
      }
    ]
  }
}
```

## Notes

- Les fonctions `service` et `task` sont utilisées respectivement pour répondre à des appels HTTP et exécuter des tâches spécifiques.
- Assurez-vous de fournir une liste valide de commandes à exécuter pour le paramètre `execute`.