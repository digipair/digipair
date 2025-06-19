# @digipair/skill-nuki

**Version:** 0.1.0  
**Résumé:** Management of a Nuki lock  
**Description:** This skill allows you to manage a Nuki lock.  
**Icône:** 🔐

---

## Table des matières

- [Fonctions](#fonctions)
  - [unlock](#unlock)
  - [lock](#lock)

---

## Fonctions

### unlock

Déverrouille une serrure Nuki.

#### Paramètres

| Nom               | Type   | Requis | Description                |
|-------------------|--------|--------|----------------------------|
| id                | string | Oui    | Identifiant de la serrure Nuki |
| NUKI_API_KEY      | string | Non    | Clé API Nuki               |
| NUKI_API_ENDPOINT | string | Non    | Endpoint de l'API Nuki     |

#### Exemple

```json
{
  "library": "@digipair/skill-nuki",
  "element": "unlock",
  "properties": {
    "id": "nuki-lock-1234",
    "NUKI_API_KEY": "votre_cle_api_nuki",
    "NUKI_API_ENDPOINT": "https://api.nuki.io"
  }
}
```

---

### lock

Verrouille une serrure Nuki.

#### Paramètres

| Nom               | Type   | Requis | Description                |
|-------------------|--------|--------|----------------------------|
| id                | string | Oui    | Identifiant de la serrure Nuki |
| NUKI_API_KEY      | string | Non    | Clé API Nuki               |
| NUKI_API_ENDPOINT | string | Non    | Endpoint de l'API Nuki     |

#### Exemple

```json
{
  "library": "@digipair/skill-nuki",
  "element": "lock",
  "properties": {
    "id": "nuki-lock-1234",
    "NUKI_API_KEY": "votre_cle_api_nuki",
    "NUKI_API_ENDPOINT": "https://api.nuki.io"
  }
}
```

---

## Notes

- Les fonctions `unlock` et `lock` permettent respectivement de déverrouiller et verrouiller une serrure Nuki à partir de son identifiant.
- Le paramètre `id` est obligatoire et doit correspondre à l'identifiant unique de la serrure Nuki à contrôler.
- Les paramètres `NUKI_API_KEY` et `NUKI_API_ENDPOINT` sont optionnels. Si non fournis, la configuration par défaut de l'environnement sera utilisée.
- Assurez-vous que la clé API fournie dispose des droits nécessaires pour effectuer l'action demandée sur la serrure spécifiée.

---

**Auteur :** [@digipair](https://github.com/digipair)  
**Licence :** MIT