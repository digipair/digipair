# @digipair/skill-common

**Version:** 0.1.0  
**Summary:** Comportements par défauts des agents  
**Description:** La compétence permet de gérer les comportements par défauts des agents.  
**Icon:** 🚀

## Table des matières

- [Fonctions](#fonctions)
  - [metadata](#metadata)
  - [boosts](#boosts)

## Fonctions

### metadata

Lister les metadatas

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| digipair | string | Oui    | Identifiant du digipair |

#### Exemple

```json
{
  "library": "@digipair/skill-common",
  "element": "metadata",
  "properties": {
    "digipair": "identifiant_de_la_paire_digitale"
  }
}
```

### boosts

Lister les boosts

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| digipair | string | Oui    | Identifiant du digipair |

#### Exemple

```json
{
  "library": "@digipair/skill-common",
  "element": "boosts",
  "properties": {
    "digipair": "identifiant_de_la_paire_digitale"
  }
}
```

## Notes

- Les fonctions `metadata` et `boosts` sont utilisées pour lister respectivement les metadatas et les boosts associés à une paire digitale.
- Assurez-vous de fournir un identifiant de digipair valide pour le paramètre `digipair`.