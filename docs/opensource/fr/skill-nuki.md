# @digipair/skill-nuki

**Version:** 0.1.0  
**Summary:** Gestion d'une serrure Nuki  
**Description:** gérer une serrure Nuki.  
**Icon:** 🔐

## Table des matières

- [Fonctions](#fonctions)
  - [unlock](#unlock)
  - [lock](#lock)

## Fonctions

### unlock

Ouvre une serrure Nuki.

#### Paramètres

| Nom               | Type   | Requis | Description               |
| ----------------- | ------ | ------ | ------------------------- |
| id                | string | Oui    | Identifiant de la serrure |
| NUKI_API_KEY      | string | Non    | Clé d'API Nuki            |
| NUKI_API_ENDPOINT | string | Non    | Endpoint de l'API Nuki    |

#### Exemple

```json
{
  "library": "@digipair/skill-nuki",
  "element": "unlock",
  "properties": {
    "id": "identifiant_de_la_serrure",
    "NUKI_API_KEY": "votre_cle_api",
    "NUKI_API_ENDPOINT": "https://api.nuki.io"
  }
}
```

### lock

Ferme une serrure Nuki.

#### Paramètres

| Nom               | Type   | Requis | Description               |
| ----------------- | ------ | ------ | ------------------------- |
| id                | string | Oui    | Identifiant de la serrure |
| NUKI_API_KEY      | string | Non    | Clé d'API Nuki            |
| NUKI_API_ENDPOINT | string | Non    | Endpoint de l'API Nuki    |

#### Exemple

```json
{
  "library": "@digipair/skill-nuki",
  "element": "lock",
  "properties": {
    "id": "identifiant_de_la_serrure",
    "NUKI_API_KEY": "votre_cle_api",
    "NUKI_API_ENDPOINT": "https://api.nuki.io"
  }
}
```

## Notes

- Les fonctions `unlock` et `lock` sont utilisées respectivement pour ouvrir et fermer une serrure Nuki.
- Assurez-vous de fournir un identifiant de serrure valide pour le paramètre `id`.
- Les paramètres `NUKI_API_KEY` et `NUKI_API_ENDPOINT` sont optionnels et peuvent être utilisés pour spécifier une clé d'API et un endpoint personnalisés pour l'API Nuki.
