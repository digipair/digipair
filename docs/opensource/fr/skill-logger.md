# @digipair/skill-logger

**Version:** 0.1.0  
**Résumé:** Log and LLM consumption management  
**Description:** Log and LLM consumption management  
**Icône:** 🔢

## Table des matières

- [Fonctions](#fonctions)
  - [read](#read)
  - [list](#list)
  - [computeDailyConsumption](#computedailyconsumption)
  - [cleaning](#cleaning)

---

## Fonctions

### read

Lire les logs pour une journée donnée.

#### Paramètres

| Nom   | Type   | Requis | Description                                                                                  |
|-------|--------|--------|----------------------------------------------------------------------------------------------|
| date  | string | Oui    | Date des logs à lire (format attendu : `YYYY-MM-DD`).                                        |
| type  | string | Non    | Type de logs à lire (`factory`, `consumption-daily`, `consumption-monthly`).                 |
| path  | string | Non    | Chemin d'accès du répertoire Digipair.                                                       |

#### Exemple

```json
{
  "library": "@digipair/skill-logger",
  "element": "read",
  "properties": {
    "date": "2024-06-01",
    "type": "consumption-daily",
    "path": "/data/digipair"
  }
}
```

---

### list

Lister les jours pour lesquels des logs existent.

#### Paramètres

| Nom   | Type   | Requis | Description                                                                                  |
|-------|--------|--------|----------------------------------------------------------------------------------------------|
| type  | string | Non    | Type de logs à lister (`factory`, `consumption-daily`, `consumption-monthly`).               |
| path  | string | Non    | Chemin d'accès du répertoire Digipair.                                                       |

#### Exemple

```json
{
  "library": "@digipair/skill-logger",
  "element": "list",
  "properties": {
    "type": "factory",
    "path": "/data/digipair"
  }
}
```

---

### computeDailyConsumption

Calculer et enregistrer la consommation quotidienne dans le fichier de consommation mensuelle LLM.

#### Paramètres

| Nom   | Type   | Requis | Description                                                                                  |
|-------|--------|--------|----------------------------------------------------------------------------------------------|
| date  | string | Oui    | Date de la consommation LLM à ajouter au fichier mensuel (format attendu : `YYYY-MM-DD`).    |
| path  | string | Non    | Chemin d'accès du répertoire Digipair.                                                       |

#### Exemple

```json
{
  "library": "@digipair/skill-logger",
  "element": "computeDailyConsumption",
  "properties": {
    "date": "2024-06-01",
    "path": "/data/digipair"
  }
}
```

---

### cleaning

Supprimer les anciens fichiers de logs.

#### Paramètres

| Nom   | Type   | Requis | Description                                                                                  |
|-------|--------|--------|----------------------------------------------------------------------------------------------|
| to    | number | Oui    | Date (timestamp) jusqu'à laquelle les logs doivent être conservés.                           |
| type  | string | Non    | Type de logs à supprimer (`factory`, `consumption-daily`, `consumption-monthly`).            |
| path  | string | Non    | Chemin d'accès du répertoire Digipair.                                                       |

#### Exemple

```json
{
  "library": "@digipair/skill-logger",
  "element": "cleaning",
  "properties": {
    "to": 1717200000,
    "type": "consumption-daily",
    "path": "/data/digipair"
  }
}
```

---

## Notes

- Les fonctions de la librairie `@digipair/skill-logger` permettent de gérer la lecture, la liste, le calcul de consommation et le nettoyage des logs liés à l'utilisation de LLM.
- Les paramètres `type` acceptent les valeurs : `factory`, `consumption-daily`, `consumption-monthly`.
- Le paramètre `path` permet de spécifier un chemin personnalisé pour le répertoire Digipair.
- Pour la suppression (`cleaning`), le paramètre `to` doit être un timestamp Unix (nombre de secondes depuis 1970-01-01T00:00:00Z).

---

**Contact** : Pour toute question ou contribution, veuillez consulter le dépôt GitHub associé à la librairie.