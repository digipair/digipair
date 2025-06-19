# @digipair/skill-client-sse

**Version:** 0.1.0  
**Summary:** Manage Websockets clients  
**Description:** This skill enables managing real-time Websocket communications on the client side.  
**Icon:** 🔗

---

## Table des matières

- [Fonctions](#fonctions)
  - [connect](#connect)
  - [send](#send)
  - [close](#close)
- [Notes](#notes)

---

## Fonctions

### connect

Établit une connexion Websocket avec un serveur, avec gestion optionnelle de la reconnexion et des actions sur les événements du cycle de vie de la connexion.

#### Paramètres

| Nom            | Type     | Requis | Description                                                        |
|----------------|----------|--------|--------------------------------------------------------------------|
| url            | string   | Non    | URL du serveur Websocket                                           |
| retryInterval  | integer  | Non    | Intervalle de temps (ms) entre chaque tentative de reconnexion     |
| maxRetries     | integer  | Non    | Nombre maximal de tentatives de reconnexion                        |
| message        | array    | Non    | Actions à déclencher lors de la réception d'un message             |
| open           | array    | Non    | Actions à déclencher à l'ouverture de la connexion                 |
| close          | array    | Non    | Actions à déclencher à la fermeture de la connexion                |
| error          | array    | Non    | Actions à déclencher lors d'une erreur                             |

> **Note :** Les paramètres `message`, `open`, `close` et `error` attendent des listes d'actions au format [pinsSettings](https://schemas.digipair.ai/pinsSettings).

#### Exemple

```json
{
  "library": "@digipair/skill-client-sse",
  "element": "connect",
  "properties": {
    "url": "wss://example.com/socket",
    "retryInterval": 2000,
    "maxRetries": 5,
    "message": [
      { "type": "log", "payload": "Message reçu" }
    ],
    "open": [
      { "type": "log", "payload": "Connexion ouverte" }
    ],
    "close": [
      { "type": "log", "payload": "Connexion fermée" }
    ],
    "error": [
      { "type": "log", "payload": "Erreur de connexion" }
    ]
  }
}
```

---

### send

Envoie un message via une connexion Websocket existante.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| websocket  | object | Non    | Instance Websocket à utiliser      |
| message    | object | Oui    | Message à envoyer                  |

#### Exemple

```json
{
  "library": "@digipair/skill-client-sse",
  "element": "send",
  "properties": {
    "websocket": { /* référence à l'instance WebSocket */ },
    "message": { "type": "greeting", "content": "Bonjour !" }
  }
}
```

---

### close

Ferme une connexion Websocket existante.

#### Paramètres

| Nom        | Type   | Requis | Description                        |
|------------|--------|--------|------------------------------------|
| websocket  | object | Non    | Instance Websocket à fermer        |

#### Exemple

```json
{
  "library": "@digipair/skill-client-sse",
  "element": "close",
  "properties": {
    "websocket": { /* référence à l'instance WebSocket */ }
  }
}
```

---

## Notes

- La fonction `connect` permet de gérer la reconnexion automatique et d'attacher des actions personnalisées aux événements du Websocket.
- Les actions (`message`, `open`, `close`, `error`) doivent être définies selon le schéma [pinsSettings](https://schemas.digipair.ai/pinsSettings).
- Les fonctions `send` et `close` nécessitent une référence à l'instance WebSocket créée par `connect`.
- Assurez-vous que l'URL fournie à `connect` est valide et que le serveur cible supporte le protocole Websocket.
- Cette librairie est conçue pour être utilisée côté client (navigateur ou environnement JS compatible Websocket).