# @digipair/skill-push-notification

**Version:** 0.1.0  
**Résumé:** Web Push Manipulation  
**Description:** Cette compétence permet d'envoyer des notifications WebPush.  
**Icône:** 📕  

## Table des matières

- [Fonctions](#fonctions)
  - [sendPush](#sendpush)
- [Notes](#notes)

---

## Fonctions

### sendPush

Envoyer une notification web push avec les valeurs spécifiées.

#### Description

La fonction `sendPush` permet d'envoyer une notification WebPush à un utilisateur abonné, en utilisant les informations de souscription et un payload personnalisé. Elle prend en charge l'authentification VAPID pour sécuriser l'envoi des notifications.

#### Paramètres

| Nom          | Type   | Requis | Description                                                                 |
|--------------|--------|--------|-----------------------------------------------------------------------------|
| subscription | object | Oui    | Objet de souscription utilisé pour envoyer la notification.                  |
| payload      | object | Oui    | Données à insérer dans la notification.                                     |
| privateKey   | string | Non    | Clé privée VAPID utilisée pour l'authentification.                          |
| publicKey    | string | Non    | Clé publique VAPID utilisée pour activer la souscription push.              |
| mailto       | string | Non    | Email administrateur pour la configuration VAPID (champ "mailto").          |

#### Exemple

```json
{
  "library": "@digipair/skill-push-notification",
  "element": "sendPush",
  "properties": {
    "subscription": {
      "endpoint": "https://fcm.googleapis.com/fcm/send/abc123...",
      "keys": {
        "p256dh": "BExxxxx...",
        "auth": "xxxxxx"
      }
    },
    "payload": {
      "title": "Nouveau message",
      "body": "Vous avez reçu un nouveau message.",
      "icon": "https://example.com/icon.png"
    },
    "privateKey": "VAPID_PRIVATE_KEY_OPTIONNELLE",
    "publicKey": "VAPID_PUBLIC_KEY_OPTIONNELLE",
    "mailto": "admin@example.com"
  }
}
```

#### Détail des paramètres

- **subscription** : Doit contenir au minimum les champs `endpoint` et `keys` (`p256dh`, `auth`) selon la spécification WebPush.
- **payload** : Objet libre, typiquement avec les champs `title`, `body`, `icon`, etc.
- **privateKey** et **publicKey** : Si non fournis, la configuration par défaut de la librairie sera utilisée.
- **mailto** : Permet de spécifier un contact administrateur pour la configuration VAPID.

---

## Notes

- La fonction `sendPush` est conçue pour être utilisée côté serveur, car elle nécessite l'accès à la clé privée VAPID.
- Assurez-vous que l'objet `subscription` respecte la structure attendue par le protocole WebPush.
- L'utilisation des clés VAPID est recommandée pour garantir la sécurité et l'authenticité des notifications.
- Le champ `payload` peut être adapté selon les besoins de l'application cliente (structure libre).
- Pour plus d'informations sur le protocole WebPush et VAPID, consultez la [documentation officielle Mozilla](https://developer.mozilla.org/fr/docs/Web/API/Push_API).

---

**Auteur :** [@digipair](https://github.com/digipair)  
**Licence :** MIT

---