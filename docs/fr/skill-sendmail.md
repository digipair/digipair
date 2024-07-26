# @digipair/skill-sendmail

**Version:** 0.1.0  
**Summary:** Envoi de mail  
**Description:** Envoi de mail  
**Icon:** 📨

## Table des matières

- [Fonctions](#fonctions)
  - [send](#send)

## Fonctions

### send

Envoi de mail

#### Paramètres

| Nom      | Type   | Requis | Description                  |
|----------|--------|--------|------------------------------|
| from     | string | Oui    | Expéditeur du mail           |
| to       | string | Oui    | Destinataires du mail        |
| subject  | string | Oui    | Sujet du mail                |
| text     | string | Oui    | Texte du mail                |
| html     | string | Oui    | HTML du mail                 |
| config   | object | Non    | Configuration du serveur de mail |

#### Exemple

```json
{
  "library": "@digipair/skill-sendmail",
  "element": "send",
  "properties": {
    "from": "expediteur@example.com",
    "to": "destinataire@example.com",
    "subject": "Sujet du mail",
    "text": "Texte du mail",
    "html": "<p>HTML du mail</p>",
    "config": {
      "host": "smtp.example.com",
      "port": 587,
      "secure": false,
      "auth": {
        "user": "utilisateur",
        "pass": "motdepasse"
      }
    }
  }
}
```

## Notes

- La fonction `send` est utilisée pour envoyer un email avec les paramètres spécifiés.
- Assurez-vous de fournir des valeurs valides pour les paramètres `from`, `to`, `subject`, `text`, et `html`.
- Le paramètre `config` est optionnel et permet de spécifier la configuration du serveur de mail. Si ce paramètre n'est pas fourni, la configuration par défaut sera utilisée.
- La configuration du serveur de mail (`config`) peut inclure des détails tels que l'hôte (`host`), le port (`port`), la sécurité (`secure`), et les informations d'authentification (`auth`).