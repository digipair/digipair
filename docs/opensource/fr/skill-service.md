# @digipair/skill-service

**Version:** 0.1.0  
**Résumé:** Services  
**Description:** Cette compétence permet de gérer les réponses aux appels HTTP.  
**Icône:** 💻

## Table des matières

- [Fonctions](#fonctions)
  - [send](#send)
  - [status](#status)
  - [headers](#headers)
- [Blocs de scène](#blocs-de-scène)
  - [service](#service)

---

## Fonctions

### send

Envoyer une requête HTTP.

#### Paramètres

| Nom   | Type   | Requis | Description            |
|-------|--------|--------|------------------------|
| body  | object | Non    | Corps de la requête    |

#### Exemple

```json
{
  "library": "@digipair/skill-service",
  "element": "send",
  "properties": {
    "body": {
      "message": "Hello world",
      "userId": 123
    }
  }
}
```

---

### status

Envoyer un code de statut HTTP.

#### Paramètres

| Nom  | Type   | Requis | Description         |
|------|--------|--------|---------------------|
| code | number | Oui    | Code de retour HTTP |

#### Exemple

```json
{
  "library": "@digipair/skill-service",
  "element": "status",
  "properties": {
    "code": 200
  }
}
```

---

### headers

Envoyer des en-têtes HTTP.

#### Paramètres

| Nom     | Type   | Requis | Description      |
|---------|--------|--------|------------------|
| headers | object | Oui    | En-têtes HTTP    |

#### Exemple

```json
{
  "library": "@digipair/skill-service",
  "element": "headers",
  "properties": {
    "headers": {
      "Content-Type": "application/json",
      "X-Custom-Header": "value"
    }
  }
}
```

---

## Blocs de scène

### service

Réponse à un appel HTTP.

#### Paramètres

| Nom      | Type   | Requis | Description           |
|----------|--------|--------|-----------------------|
| execute  | array  | Oui    | Commandes à exécuter  |

#### Exemple

```json
{
  "library": "@digipair/skill-service",
  "element": "service",
  "properties": {
    "execute": [
      {
        "element": "status",
        "properties": { "code": 200 }
      },
      {
        "element": "headers",
        "properties": { "headers": { "Content-Type": "application/json" } }
      },
      {
        "element": "send",
        "properties": { "body": { "message": "OK" } }
      }
    ]
  }
}
```

---

## Notes

- Les fonctions `send`, `status` et `headers` sont conçues pour être utilisées dans le cadre de la gestion de réponses à des appels HTTP dans un service Javascript.
- Le bloc de scène `service` permet d'orchestrer l'envoi du code de statut, des en-têtes et du corps de la réponse.
- Les paramètres doivent être adaptés selon le contexte d'utilisation et le format attendu par le client HTTP.