# @digipair/skill-sendmail

**Version:** 0.1.0  
**Summary:** Send Mail  
**Description:** Send Mail  
**Icon:** 📨

## Table des matières

- [Fonctions](#fonctions)
  - [send](#send)

---

## Fonctions

### send

Envoyer un email à un ou plusieurs destinataires.

#### Paramètres

| Nom         | Type    | Requis | Description                        |
|-------------|---------|--------|------------------------------------|
| from        | string  | Oui    | Expéditeur de l'email              |
| to          | string  | Oui    | Destinataires de l'email           |
| subject     | string  | Oui    | Sujet de l'email                   |
| text        | string  | Oui    | Corps du message en texte brut     |
| html        | string  | Oui    | Corps du message en HTML           |
| attachments | array   | Non    | Pièces jointes                     |
| config      | object  | Non    | Configuration du serveur de mail   |

#### Détail des paramètres

- **from** : Adresse email de l'expéditeur (ex: `noreply@exemple.com`)
- **to** : Adresse(s) email du ou des destinataires, séparées par des virgules si plusieurs (ex: `user1@exemple.com,user2@exemple.com`)
- **subject** : Sujet de l'email.
- **text** : Contenu du message en texte brut.
- **html** : Contenu du message au format HTML.
- **attachments** : Tableau d'objets représentant les pièces jointes (voir la documentation de votre implémentation pour le format attendu).
- **config** : Objet de configuration pour le serveur SMTP ou le service d'envoi (ex: host, port, auth, etc.).

#### Exemple

```json
{
  "library": "@digipair/skill-sendmail",
  "element": "send",
  "properties": {
    "from": "noreply@exemple.com",
    "to": "destinataire@exemple.com",
    "subject": "Bienvenue !",
    "text": "Bonjour, ceci est un email de test.",
    "html": "<p>Bonjour, ceci est un <b>email</b> de test.</p>",
    "attachments": [
      {
        "filename": "document.pdf",
        "content": "<base64>"
      }
    ],
    "config": {
      "host": "smtp.exemple.com",
      "port": 587,
      "auth": {
        "user": "utilisateur",
        "pass": "motdepasse"
      }
    }
  }
}
```

---

## Notes

- Tous les champs requis doivent être renseignés pour garantir l'envoi de l'email.
- Le champ `attachments` est optionnel et doit respecter le format attendu par la librairie d'envoi d'email utilisée.
- Le champ `config` permet de surcharger la configuration SMTP par défaut si besoin.
- La fonction `send` n'est pas une API HTTP mais une fonction JavaScript à invoquer dans votre code.

---

**Pour toute question ou contribution, consultez le dépôt GitHub du projet.**