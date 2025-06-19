# @digipair/skill-web-notification

**Version:** 0.1.0  
**Résumé:** Display of notifications  
**Description:** Display of notifications on a web page  
**Icône:** 🔔

---

## Table des matières

- [Fonctions](#fonctions)
  - [information](#information)
  - [error](#error)
  - [confirm](#confirm)
  - [alert](#alert)

---

## Fonctions

### information

Affiche une notification d'information.

#### Paramètres

| Nom     | Type   | Requis | Description           |
|---------|--------|--------|-----------------------|
| message | string | Oui    | Message à afficher    |

#### Exemple

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "information",
  "properties": {
    "message": "Votre opération a bien été prise en compte."
  }
}
```

---

### error

Affiche une notification d'erreur.

#### Paramètres

| Nom     | Type   | Requis | Description           |
|---------|--------|--------|-----------------------|
| message | string | Oui    | Message à afficher    |

#### Exemple

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "error",
  "properties": {
    "message": "Une erreur est survenue lors du traitement."
  }
}
```

---

### confirm

Affiche une notification de confirmation, avec gestion d'actions selon la réponse de l'utilisateur.

#### Paramètres

| Nom     | Type    | Requis | Description                                         |
|---------|---------|--------|-----------------------------------------------------|
| message | string  | Oui    | Message à afficher                                  |
| ok      | array   | Non    | Actions à exécuter si l'utilisateur confirme        |
| ko      | array   | Non    | Actions à exécuter si l'utilisateur annule/refuse   |

> **Note :** Les objets d'actions (`ok` et `ko`) doivent suivre le schéma [pinsSettings](https://schemas.digipair.ai/pinsSettings).

#### Exemple

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "confirm",
  "properties": {
    "message": "Voulez-vous vraiment supprimer cet élément ?",
    "ok": [
      { "type": "navigate", "target": "/home" }
    ],
    "ko": [
      { "type": "log", "message": "Suppression annulée" }
    ]
  }
}
```

---

### alert

Affiche une notification d'alerte.

#### Paramètres

| Nom     | Type   | Requis | Description           |
|---------|--------|--------|-----------------------|
| message | string | Oui    | Message à afficher    |

#### Exemple

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "alert",
  "properties": {
    "message": "Attention, votre session va expirer."
  }
}
```

---

## Notes

- Toutes les fonctions de cette librairie sont destinées à afficher des notifications sur une page web.
- Les paramètres `message` sont obligatoires et doivent être des chaînes de caractères.
- Pour la fonction `confirm`, les paramètres `ok` et `ko` sont optionnels et permettent de définir des actions à exécuter selon la réponse de l'utilisateur.
- Les actions doivent être conformes au schéma [pinsSettings](https://schemas.digipair.ai/pinsSettings).
- Cette librairie ne fournit pas d'API HTTP, mais expose des fonctions JavaScript à utiliser dans vos projets.

---

**Auteur :** [@digipair](https://github.com/digipair)  
**Licence :** MIT

---