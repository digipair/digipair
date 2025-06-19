# @digipair/skill-process

**Version:** 0.1.0  
**Résumé:** Process management  
**Description:** Cette compétence permet de gérer les processus.  
**Icône:** 📕

## Table des matières

- [Fonctions](#fonctions)
  - [stop](#stop)
  - [list](#list)

---

## Fonctions

### stop

Arrêter un processus en cours d'exécution.

#### Paramètres

| Nom | Type   | Requis | Description                        |
|-----|--------|--------|------------------------------------|
| id  | string | Oui    | Identifiant du processus à arrêter |

#### Exemple

```json
{
  "library": "@digipair/skill-process",
  "element": "stop",
  "properties": {
    "id": "processus_123"
  }
}
```

---

### list

Lister les processus en cours d'exécution.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-process",
  "element": "list",
  "properties": {}
}
```

---

## Notes

- La fonction `stop` nécessite l'identifiant du processus à arrêter.
- La fonction `list` retourne la liste des processus actuellement en cours d'exécution.
- Ces fonctions sont destinées à être utilisées dans un environnement JavaScript et ne correspondent pas à des endpoints HTTP, mais à des appels de fonctions de la librairie.