# @digipair/skill-sse

**Version:** 0.1.0  
**Summary:** Server Sent Events  
**Description:** This skill enables real-time communication management.  
**Icon:** 🔗

## Table des matières

- [Fonctions](#fonctions)
  - [registerSession](#registersession)
  - [registerChannel](#registerchannel)
  - [push](#push)
  - [broadcast](#broadcast)

---

## Fonctions

### registerSession

Initialise une session SSE (Server Sent Events).

#### Paramètres

| Nom           | Type    | Requis | Description                                      |
|---------------|---------|--------|--------------------------------------------------|
| id            | string  | Oui    | Identifiant unique de la session                 |
| disconnected  | array   | Non    | Actions à exécuter lors de la déconnexion (voir [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Exemple

```json
{
  "library": "@digipair/skill-sse",
  "element": "registerSession",
  "properties": {
    "id": "session_12345",
    "disconnected": [
      {
        "type": "notify",
        "message": "Session disconnected"
      }
    ]
  }
}
```

---

### registerChannel

Initialise un canal SSE et y ajoute éventuellement une session.

#### Paramètres

| Nom           | Type    | Requis | Description                                      |
|---------------|---------|--------|--------------------------------------------------|
| session       | object  | Non    | Instance de session à ajouter au canal           |
| id            | string  | Non    | Identifiant du canal                             |
| disconnected  | array   | Non    | Actions à exécuter lors de la déconnexion (voir [pinsSettings](https://schemas.digipair.ai/pinsSettings)) |

#### Exemple

```json
{
  "library": "@digipair/skill-sse",
  "element": "registerChannel",
  "properties": {
    "session": { "id": "session_12345" },
    "id": "channel_abc",
    "disconnected": [
      {
        "type": "log",
        "message": "Channel disconnected"
      }
    ]
  }
}
```

---

### push

Envoie un message SSE à une session spécifique.

#### Paramètres

| Nom         | Type    | Requis | Description                                      |
|-------------|---------|--------|--------------------------------------------------|
| id          | string  | Oui    | Identifiant unique de la session                 |
| message     | object  | Oui    | Message à envoyer                               |
| reasoning   | string  | Non    | Nom du raisonnement associé                      |
| digipair    | string  | Non    | Identifiant Digipair                             |

#### Exemple

```json
{
  "library": "@digipair/skill-sse",
  "element": "push",
  "properties": {
    "id": "session_12345",
    "message": { "text": "Hello, world!" },
    "reasoning": "greeting",
    "digipair": "dp_001"
  }
}
```

---

### broadcast

Diffuse un message SSE à tous les membres d’un canal ou globalement.

#### Paramètres

| Nom         | Type    | Requis | Description                                      |
|-------------|---------|--------|--------------------------------------------------|
| message     | object  | Oui    | Message à diffuser                               |
| event       | string  | Non    | Nom de l’événement                               |
| id          | string  | Non    | Identifiant du canal                             |
| reasoning   | string  | Non    | Nom du raisonnement associé                      |
| digipair    | string  | Non    | Identifiant Digipair                             |

#### Exemple

```json
{
  "library": "@digipair/skill-sse",
  "element": "broadcast",
  "properties": {
    "message": { "text": "System update available" },
    "event": "update",
    "id": "channel_abc",
    "reasoning": "system",
    "digipair": "dp_001"
  }
}
```

---

## Notes

- Les fonctions de cette librairie permettent de gérer des sessions et des canaux SSE pour la communication temps réel.
- Le paramètre `disconnected` permet de spécifier des actions à exécuter lors de la perte de connexion.
- Les objets de type `message` sont libres et peuvent contenir toute structure adaptée à votre usage.
- Pour plus de détails sur la structure des actions de déconnexion, consultez le schéma [pinsSettings](https://schemas.digipair.ai/pinsSettings).
- L’utilisation de `reasoning` et `digipair` est optionnelle et dépend de votre logique métier.