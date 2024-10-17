# @digipair/skill-factory

**Version:** 0.1.0  
**Summary:** Actions dans la factory Digipair  
**Description:** Actions dans la factory Digipair.  
**Icon:** 🛠

## Table des matières

- [Fonctions](#fonctions)
  - [start](#start)

## Fonctions

### start

Démarrage d'un raisonnement depuis la factory Digipair

#### Paramètres

| Nom       | Type   | Requis | Description                |
|-----------|--------|--------|----------------------------|
| digipair  | string | Non    | Propriétaire du raisonnement |
| reasoning | string | Oui    | Nom du raisonnement        |
| body      | object | Non    | Données à envoyer          |

#### Exemple

```json
{
  "library": "@digipair/skill-factory",
  "element": "start",
  "properties": {
    "digipair": "identifiant_du_propriétaire",
    "reasoning": "nom_du_raissonnement",
    "body": {
      "clé": "valeur"
    }
  }
}
```

## Notes

- La fonction `start` est utilisée pour démarrer un raisonnement spécifique dans la factory Digipair.
- Le paramètre `digipair` est optionnel et représente le propriétaire du raisonnement.
- Le paramètre `reasoning` est obligatoire et doit contenir le nom du raisonnement à démarrer.
- Le paramètre `body` est optionnel et peut contenir des données supplémentaires à envoyer lors du démarrage du raisonnement.