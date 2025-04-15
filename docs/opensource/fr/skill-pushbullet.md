# @digipair/skill-pushbullet

**Version:** 0.1.0  
**Summary:** Gestion du service Pushbullet  
**Description:** utiliser le service Pushbullet.  
**Icon:** 💬

## Table des matières

- [Fonctions](#fonctions)
  - [sendSms](#sendsms)

## Fonctions

### sendSms

Envoi un SMS via Pushbullet

#### Paramètres

| Nom                         | Type   | Requis | Description                            |
| --------------------------- | ------ | ------ | -------------------------------------- |
| message                     | string | Oui    | Message à envoyer                      |
| phoneNumber                 | string | Oui    | Numéro de téléphone du destinataire    |
| PUSHBULLET_ACCESS_TOKEN     | string | Non    | Clé d'API Pushbullet                   |
| PUSHBULLET_TARGET_DEVICE_ID | string | Non    | Identifiant du périphérique Pushbullet |
| PUSHBULLET_API_ENDPOINT     | string | Non    | Endpoint de l'API Pushbullet           |

#### Exemple

```json
{
  "library": "@digipair/skill-pushbullet",
  "element": "sendSms",
  "properties": {
    "message": "Bonjour, ceci est un test.",
    "phoneNumber": "+33123456789",
    "PUSHBULLET_ACCESS_TOKEN": "votre_cle_api",
    "PUSHBULLET_TARGET_DEVICE_ID": "identifiant_peripherique",
    "PUSHBULLET_API_ENDPOINT": "https://api.pushbullet.com/v2"
  }
}
```

## Notes

- La fonction `sendSms` permet d'envoyer un SMS en utilisant le service Pushbullet.
- Les paramètres `PUSHBULLET_ACCESS_TOKEN`, `PUSHBULLET_TARGET_DEVICE_ID`, et `PUSHBULLET_API_ENDPOINT` sont optionnels. Si non fournis, les valeurs par défaut configurées dans votre environnement seront utilisées.
- Assurez-vous de fournir un message et un numéro de téléphone valides pour les paramètres `message` et `phoneNumber`.
