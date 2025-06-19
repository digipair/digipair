# @digipair/skill-basic

**Version:** 0.1.0  
**Résumé:** Toolbox  
**Description:** Cette compétence fournit un ensemble d’outils de base pour manipuler des données et des comportements.  
**Icône:** 📝

## Table des matières

- [Fonctions](#fonctions)
  - [transform](#transform)
  - [setVariable](#setvariable)
  - [defer](#defer)
  - [interval](#interval)
  - [stopInterval](#stopinterval)
  - [stopDefer](#stopdefer)
  - [base64ToBuffer](#base64tobuffer)
  - [trycatch](#trycatch)

---

## Fonctions

### transform

Transforme une valeur en utilisant les mécanismes standards de transformation de données du moteur.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| value    | object  | Non    | Valeur à transformer                        |
| execute  | array   | Non    | Actions à appliquer à la donnée (pinsSettings) |

#### Exemple

```json
{
  "library": "@digipair/skill-basic",
  "element": "transform",
  "properties": {
    "value": { "foo": "bar" },
    "execute": [
      { "type": "uppercase", "field": "foo" }
    ]
  }
}
```

---

### setVariable

Enregistre une variable dans le contexte de la compétence.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| name     | object  | Oui    | Nom de la variable                          |
| value    | object  | Non    | Valeur à enregistrer                        |
| execute  | array   | Non    | Actions à appliquer à la donnée enregistrée (pinsSettings) |

#### Exemple

```json
{
  "library": "@digipair/skill-basic",
  "element": "setVariable",
  "properties": {
    "name": "maVariable",
    "value": 42,
    "execute": [
      { "type": "log", "message": "Variable enregistrée" }
    ]
  }
}
```

---

### defer

Exécute une action après un délai spécifié.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| time     | number  | Oui    | Temps en millisecondes avant exécution      |
| execute  | array   | Oui    | Actions à exécuter (pinsSettings)           |

#### Exemple

```json
{
  "library": "@digipair/skill-basic",
  "element": "defer",
  "properties": {
    "time": 1000,
    "execute": [
      { "type": "notify", "message": "Action différée exécutée" }
    ]
  }
}
```

---

### interval

Exécute une action à intervalles réguliers.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| time     | number  | Oui    | Temps en millisecondes entre chaque exécution |
| execute  | array   | Oui    | Actions à exécuter à chaque intervalle (pinsSettings) |

#### Exemple

```json
{
  "library": "@digipair/skill-basic",
  "element": "interval",
  "properties": {
    "time": 5000,
    "execute": [
      { "type": "refresh", "target": "data" }
    ]
  }
}
```

---

### stopInterval

Arrête l’exécution d’un intervalle.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| id       | object  | Oui    | Identifiant de l’intervalle à arrêter       |

#### Exemple

```json
{
  "library": "@digipair/skill-basic",
  "element": "stopInterval",
  "properties": {
    "id": "intervalId123"
  }
}
```

---

### stopDefer

Arrête l’exécution d’une action différée.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| id       | object  | Oui    | Identifiant de l’action différée à arrêter  |

#### Exemple

```json
{
  "library": "@digipair/skill-basic",
  "element": "stopDefer",
  "properties": {
    "id": "deferId456"
  }
}
```

---

### base64ToBuffer

Convertit une chaîne base64 en buffer.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| base64   | string  | Oui    | Fichier encodé en base64                    |

#### Exemple

```json
{
  "library": "@digipair/skill-basic",
  "element": "base64ToBuffer",
  "properties": {
    "base64": "SGVsbG8gd29ybGQ="
  }
}
```

---

### trycatch

Exécute une série d’actions et capture les erreurs éventuelles.

#### Paramètres

| Nom           | Type    | Requis | Description                                 |
|---------------|---------|--------|---------------------------------------------|
| executeTry    | array   | Oui    | Actions à exécuter (pinsSettings)           |
| executeCatch  | array   | Non    | Actions à exécuter en cas d’erreur (pinsSettings) |

#### Exemple

```json
{
  "library": "@digipair/skill-basic",
  "element": "trycatch",
  "properties": {
    "executeTry": [
      { "type": "dangerousAction" }
    ],
    "executeCatch": [
      { "type": "log", "message": "Erreur capturée" }
    ]
  }
}
```

---

## Notes

- Les fonctions de cette librairie sont conçues pour être utilisées dans des contextes d’automatisation ou de scripting, où la manipulation de données et la gestion d’exécution sont nécessaires.
- Le paramètre `execute` (ou variantes) attend généralement un tableau d’actions au format [pinsSettings](https://schemas.digipair.ai/pinsSettings).
- Les identifiants (`id`) pour les fonctions d’arrêt doivent correspondre à ceux retournés lors de la création des intervalles ou actions différées.
- Pour la conversion base64, assurez-vous que la chaîne fournie est correctement encodée.

---

**Pour toute contribution ou question, consultez le dépôt officiel de la librairie.**