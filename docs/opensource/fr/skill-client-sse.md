# @digipair/skill-client-sse

**Version:** 0.1.0  
**Summary:** Displaying Server Sent Events  
**Description:** This skill enables managing real-time communications on the client side.  
**Icon:** 🔗

## Table des matières

- [Fonctions](#fonctions)
  - [connect](#connect)

---

## Fonctions

### connect

Connecte le client à un flux SSE (Server-Sent Events) et permet de gérer les événements en temps réel côté client.

#### Paramètres

| Nom      | Type    | Requis | Description                                                        |
|----------|---------|--------|--------------------------------------------------------------------|
| url      | string  | Non    | URL du serveur SSE                                                 |
| event    | string  | Non    | Nom de l'événement à écouter                                       |
| options  | object  | Non    | Options de configuration pour la connexion SSE (fetch, headers, etc.) |
| message  | array   | Non    | Actions à déclencher lors de la réception d'un message             |
| open     | array   | Non    | Actions à déclencher lors de l'ouverture de la connexion           |
| close    | array   | Non    | Actions à déclencher lors de la fermeture de la connexion          |
| error    | array   | Non    | Actions à déclencher lors d'une erreur                             |

> **Note :** Les propriétés `message`, `open`, `close` et `error` attendent des listes d'actions au format [pinsSettings](https://schemas.digipair.ai/pinsSettings).

#### Exemple

```json
{
  "library": "@digipair/skill-client-sse",
  "element": "connect",
  "properties": {
    "url": "https://example.com/sse",
    "event": "update",
    "options": {
      "headers": {
        "Authorization": "Bearer <token>"
      }
    },
    "message": [
      {
        "type": "log",
        "params": { "level": "info", "message": "Message reçu !" }
      }
    ],
    "open": [
      {
        "type": "notify",
        "params": { "title": "Connexion ouverte", "body": "SSE connecté." }
      }
    ],
    "close": [
      {
        "type": "notify",
        "params": { "title": "Connexion fermée", "body": "SSE déconnecté." }
      }
    ],
    "error": [
      {
        "type": "log",
        "params": { "level": "error", "message": "Erreur SSE !" }
      }
    ]
  }
}
```

#### Description détaillée

La fonction `connect` permet d'établir une connexion SSE avec un serveur distant. Elle offre la possibilité de spécifier des actions à exécuter lors des différents événements du cycle de vie de la connexion :

- **message** : Actions déclenchées à chaque message reçu du serveur.
- **open** : Actions déclenchées à l'ouverture de la connexion.
- **close** : Actions déclenchées à la fermeture de la connexion.
- **error** : Actions déclenchées lors d'une erreur de connexion ou de transmission.

#### Utilisation typique

- Affichage en temps réel de notifications ou de données.
- Synchronisation d'état entre client et serveur sans polling.
- Réaction à des événements métiers côté client dès leur émission serveur.

---

## Notes

- Les actions à déclencher (`message`, `open`, `close`, `error`) doivent être conformes au schéma [pinsSettings](https://schemas.digipair.ai/pinsSettings).
- La connexion SSE est maintenue ouverte tant que le client ne la ferme pas explicitement ou qu'une erreur réseau ne survient.
- L'utilisation d'options personnalisées permet d'ajouter des headers ou de configurer la requête selon les besoins de sécurité ou d'authentification.

---

**Pour toute contribution ou question, consultez le dépôt GitHub associé à la librairie.**