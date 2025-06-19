# @digipair/skill-common

**Version :** 0.1.0  
**Résumé :** Comportements par défaut des agents  
**Description :** La compétence permet de gérer les comportements par défaut des agents.  
**Icône :** 🚀

---

## Table des matières

- [Fonctions](#fonctions)
  - [infos](#infos)
  - [metadata](#metadata)
  - [boosts](#boosts)
  - [schema](#schema)
  - [context](#context)
- [Notes](#notes)

---

## Fonctions

### infos

Lister les informations

#### Paramètres

| Nom      | Type   | Requis | Description                      |
|----------|--------|--------|----------------------------------|
| digipair | string | Oui    | Nom ou identifiant du digipair   |

#### Exemple

```json
{
  "library": "@digipair/skill-common",
  "element": "infos",
  "properties": {
    "digipair": "identifiant_de_la_paire_digitale"
  }
}
```

---

### metadata

Lister les métadonnées

#### Paramètres

| Nom      | Type   | Requis | Description                      |
|----------|--------|--------|----------------------------------|
| digipair | string | Oui    | Nom ou identifiant du digipair   |

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

---

### boosts

Lister les boosts

#### Paramètres

| Nom      | Type   | Requis | Description                      |
|----------|--------|--------|----------------------------------|
| digipair | string | Oui    | Nom ou identifiant du digipair   |

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

---

### schema

Obtenir le schéma associé à un digipair

#### Paramètres

| Nom      | Type   | Requis | Description                      |
|----------|--------|--------|----------------------------------|
| digipair | string | Oui    | Nom ou identifiant du digipair   |

#### Exemple

```json
{
  "library": "@digipair/skill-common",
  "element": "schema",
  "properties": {
    "digipair": "identifiant_de_la_paire_digitale"
  }
}
```

---

### context

Obtenir le contexte pour un digipair et un raisonnement

#### Paramètres

| Nom        | Type   | Requis | Description                          |
|------------|--------|--------|--------------------------------------|
| digipair   | string | Oui    | Nom ou identifiant du digipair       |
| reasoning  | string | Oui    | Nom ou identifiant du reasoning      |

#### Exemple

```json
{
  "library": "@digipair/skill-common",
  "element": "context",
  "properties": {
    "digipair": "identifiant_de_la_paire_digitale",
    "reasoning": "nom_du_raisonnement"
  }
}
```

---

## Notes

- Toutes les fonctions requièrent au minimum le paramètre `digipair` (identifiant de la paire digitale).
- La fonction `context` nécessite également le paramètre `reasoning`.
- Assurez-vous de fournir des identifiants valides pour chaque paramètre requis.
- Ces fonctions sont destinées à être utilisées dans un environnement JavaScript, et non via une API HTTP.
- Les noms des fonctions correspondent aux éléments à invoquer dans la librairie `@digipair/skill-common`.

---

**Exemple d'utilisation générique :**

```js
const result = await skillCommon.<fonction>({
  digipair: "identifiant_de_la_paire_digitale",
  // reasoning: "nom_du_raisonnement" // si nécessaire
});
```

---

**Pour toute contribution ou question, veuillez consulter la documentation officielle ou ouvrir une issue sur le dépôt du projet.**