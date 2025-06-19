# @digipair/skill-twilio

**Version:** 0.1.0  
**Summary:** Management of communications via Twilio  
**Description:** This skill allows the use of the Twilio service  
**Icon:** 🗣

## Table des matières

- [Fonctions](#fonctions)
  - [sendSms](#sendsms)
  - [sendWhatsapp](#sendwhatsapp)

---

## Fonctions

### sendSms

Envoi d'un SMS via Twilio.

#### Paramètres

| Nom                  | Type   | Requis | Description                        |
|----------------------|--------|--------|------------------------------------|
| message              | string | Oui    | Message à envoyer par SMS          |
| phoneNumber          | string | Oui    | Numéro de téléphone du destinataire|
| TWILIO_FROM_NUMBER   | string | Non    | Numéro Twilio émetteur             |
| TWILIO_SID           | string | Non    | Identifiant Twilio                 |
| TWILIO_TOKEN         | string | Non    | Clé API Twilio                     |
| TWILIO_API_ENDPOINT  | string | Non    | Endpoint API Twilio                |

#### Exemple

```json
{
  "library": "@digipair/skill-twilio",
  "element": "sendSms",
  "properties": {
    "message": "Bonjour, ceci est un SMS envoyé via Twilio.",
    "phoneNumber": "+33612345678",
    "TWILIO_FROM_NUMBER": "+33123456789",
    "TWILIO_SID": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "TWILIO_TOKEN": "your_twilio_token",
    "TWILIO_API_ENDPOINT": "https://api.twilio.com"
  }
}
```

---

### sendWhatsapp

Envoi d'un message WhatsApp via Twilio.

#### Paramètres

| Nom                  | Type   | Requis | Description                            |
|----------------------|--------|--------|----------------------------------------|
| message              | string | Oui    | Message à envoyer par WhatsApp         |
| phoneNumber          | string | Oui    | Numéro de téléphone du destinataire    |
| TWILIO_FROM_NUMBER   | string | Non    | Numéro Twilio émetteur                 |
| TWILIO_SID           | string | Non    | Identifiant Twilio                     |
| TWILIO_TOKEN         | string | Non    | Clé API Twilio                         |
| TWILIO_API_ENDPOINT  | string | Non    | Endpoint API Twilio                    |

#### Exemple

```json
{
  "library": "@digipair/skill-twilio",
  "element": "sendWhatsapp",
  "properties": {
    "message": "Bonjour, ceci est un message WhatsApp envoyé via Twilio.",
    "phoneNumber": "+33612345678",
    "TWILIO_FROM_NUMBER": "whatsapp:+33123456789",
    "TWILIO_SID": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "TWILIO_TOKEN": "your_twilio_token",
    "TWILIO_API_ENDPOINT": "https://api.twilio.com"
  }
}
```

---

## Notes

- Les fonctions `sendSms` et `sendWhatsapp` permettent d'envoyer respectivement des SMS et des messages WhatsApp via le service Twilio.
- Les paramètres `TWILIO_FROM_NUMBER`, `TWILIO_SID`, `TWILIO_TOKEN` et `TWILIO_API_ENDPOINT` peuvent être fournis dans les propriétés ou être définis dans l'environnement d'exécution.
- Assurez-vous que le numéro de téléphone du destinataire est au format international (ex: `+33612345678`).
- Pour WhatsApp, le champ `TWILIO_FROM_NUMBER` doit être préfixé par `whatsapp:` (ex: `whatsapp:+33123456789`).

---

**Contactez l'équipe technique pour toute question ou problème d'intégration.**