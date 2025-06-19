# @digipair/skill-pushbullet

**Version :** 0.1.0  
**Résumé :** Management of the Pushbullet service  
**Description :** This skill allows the use of the Pushbullet service.  
**Icône :** 💬

## Table des matières

- [Fonctions](#fonctions)
  - [sendSms](#sendsms)

---

## Fonctions

### sendSms

Envoie un SMS via le service Pushbullet.

#### Paramètres

| Nom                         | Type   | Requis | Description                        |
|-----------------------------|--------|--------|------------------------------------|
| message                     | string | Oui    | Message à envoyer                  |
| phoneNumber                 | string | Oui    | Numéro de téléphone du destinataire|
| PUSHBULLET_ACCESS_TOKEN     | string | Non    | Clé API Pushbullet                 |
| PUSHBULLET_TARGET_DEVICE_ID | string | Non    | ID de l'appareil Pushbullet cible  |
| PUSHBULLET_API_ENDPOINT     | string | Non    | Endpoint de l'API Pushbullet       |

#### Variables de contexte privé ou d'environnement

Aucune variable de contexte privé ou d'environnement spécifique n'est requise par défaut.  
Toutefois, les paramètres optionnels `PUSHBULLET_ACCESS_TOKEN`, `PUSHBULLET_TARGET_DEVICE_ID` et `PUSHBULLET_API_ENDPOINT` peuvent être fournis via l'environnement ou le contexte privé selon l'intégration.

#### Exemple

```json
{
  "library": "@digipair/skill-pushbullet",
  "element": "sendSms",
  "properties": {
    "message": "Bonjour, ceci est un test.",
    "phoneNumber": "+33612345678",
    "PUSHBULLET_ACCESS_TOKEN": "o.xxxxxxxx", // optionnel si déjà configuré
    "PUSHBULLET_TARGET_DEVICE_ID": "ujpah72o0sjAoRtnM0jc", // optionnel
    "PUSHBULLET_API_ENDPOINT": "https://api.pushbullet.com/v2" // optionnel
  }
}
```

---

## Notes

- La fonction `sendSms` permet d'envoyer un SMS via le service Pushbullet à un numéro de téléphone donné.
- Les paramètres `PUSHBULLET_ACCESS_TOKEN`, `PUSHBULLET_TARGET_DEVICE_ID` et `PUSHBULLET_API_ENDPOINT` sont optionnels et peuvent être définis globalement dans l'environnement ou passés directement à la fonction.
- Assurez-vous que le compte Pushbullet utilisé dispose des droits nécessaires pour envoyer des SMS et que le device cible est bien configuré pour cette action.
- En cas d'erreur d'envoi, vérifiez la validité de la clé API et du device ID.

---

**Pour toute contribution ou question, consultez le dépôt GitHub associé à la librairie.**