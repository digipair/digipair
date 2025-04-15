# @digipair/skill-twilio

**Version:** 0.1.0  
**Summary:** Gestion des communications via Twilio  
**Description:** utiliser le service Twilio.  
**Icon:** 🗣

## Table des matières

- [Fonctions](#fonctions)
  - [sendSms](#sendsms)
  - [sendWhatsapp](#sendwhatsapp)

## Fonctions

### sendSms

Envoi d'un SMS via Twilio

#### Paramètres

| Nom                 | Type   | Requis | Description                         |
| ------------------- | ------ | ------ | ----------------------------------- |
| message             | string | Oui    | Message à envoyer par SMS           |
| phoneNumber         | string | Oui    | Numéro de téléphone du destinataire |
| TWILIO_FROM_NUMBER  | string | Non    | Numéro Twilio                       |
| TWILIO_SID          | string | Non    | Identifiant Twilio                  |
| TWILIO_TOKEN        | string | Non    | Clé d'API Twilio                    |
| TWILIO_API_ENDPOINT | string | Non    | Endpoint de l'API Twilio            |

#### Exemple

```json
{
  "library": "@digipair/skill-twilio",
  "element": "sendSms",
  "properties": {
    "message": "Bonjour, ceci est un test.",
    "phoneNumber": "+1234567890",
    "TWILIO_FROM_NUMBER": "+0987654321",
    "TWILIO_SID": "your_twilio_sid",
    "TWILIO_TOKEN": "your_twilio_token",
    "TWILIO_API_ENDPOINT": "https://api.twilio.com"
  }
}
```

### sendWhatsapp

Envoi d'un message WhatsApp via Twilio

#### Paramètres

| Nom                 | Type   | Requis | Description                         |
| ------------------- | ------ | ------ | ----------------------------------- |
| message             | string | Oui    | Message à envoyer par WhatsApp      |
| phoneNumber         | string | Oui    | Numéro de téléphone du destinataire |
| TWILIO_FROM_NUMBER  | string | Non    | Numéro Twilio                       |
| TWILIO_SID          | string | Non    | Identifiant Twilio                  |
| TWILIO_TOKEN        | string | Non    | Clé d'API Twilio                    |
| TWILIO_API_ENDPOINT | string | Non    | Endpoint de l'API Twilio            |

#### Exemple

```json
{
  "library": "@digipair/skill-twilio",
  "element": "sendWhatsapp",
  "properties": {
    "message": "Bonjour, ceci est un test via WhatsApp.",
    "phoneNumber": "+1234567890",
    "TWILIO_FROM_NUMBER": "+0987654321",
    "TWILIO_SID": "your_twilio_sid",
    "TWILIO_TOKEN": "your_twilio_token",
    "TWILIO_API_ENDPOINT": "https://api.twilio.com"
  }
}
```

## Notes

- Les fonctions `sendSms` et `sendWhatsapp` sont utilisées pour envoyer respectivement des messages SMS et WhatsApp via le service Twilio.
- Assurez-vous de fournir les informations d'identification Twilio correctes (`TWILIO_SID`, `TWILIO_TOKEN`, etc.) si elles ne sont pas déjà configurées dans votre environnement.
