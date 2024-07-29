# @digipair/skill-web-notification

**Version:** 0.1.0  
**Summary:** Affichage de notification  
**Description:** Affichage de notifications sur une page web  
**Icon:** 🔔

## Table des matières

- [Fonctions](#fonctions)
  - [information](#information)
  - [error](#error)
  - [confirm](#confirm)
  - [alert](#alert)

## Fonctions

### information

Affiche une notification d'information.

#### Paramètres

| Nom      | Type   | Requis | Description         |
|----------|--------|--------|---------------------|
| message  | string | Oui    | Message à afficher  |

#### Exemple

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "information",
  "properties": {
    "message": "Ceci est une notification d'information"
  }
}
```

### error

Affiche une notification d'erreur.

#### Paramètres

| Nom      | Type   | Requis | Description         |
|----------|--------|--------|---------------------|
| message  | string | Oui    | Message à afficher  |

#### Exemple

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "error",
  "properties": {
    "message": "Ceci est une notification d'erreur"
  }
}
```

### confirm

Affiche une notification de confirmation.

#### Paramètres

| Nom      | Type   | Requis | Description                                      |
|----------|--------|--------|--------------------------------------------------|
| message  | string | Oui    | Message à afficher                               |
| ok       | array  | Non    | Actions à effectuer si c'est confirmé            |
| ko       | array  | Non    | Actions à effectuer si ce n'est pas confirmé     |

#### Exemple

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "confirm",
  "properties": {
    "message": "Ceci est une notification de confirmation",
    "ok": ["action1", "action2"],
    "ko": ["action3"]
  }
}
```

### alert

Affiche une notification d'alerte.

#### Paramètres

| Nom      | Type   | Requis | Description         |
|----------|--------|--------|---------------------|
| message  | string | Oui    | Message à afficher  |

#### Exemple

```json
{
  "library": "@digipair/skill-web-notification",
  "element": "alert",
  "properties": {
    "message": "Ceci est une notification d'alerte"
  }
}
```

## Notes

- Les fonctions `information`, `error`, `confirm`, et `alert` sont utilisées pour afficher respectivement des notifications d'information, d'erreur, de confirmation, et d'alerte sur une page web.
- Assurez-vous de fournir un message valide pour le paramètre `message`.
- Les paramètres `ok` et `ko` de la fonction `confirm` sont optionnels et permettent de définir des actions à effectuer en fonction de la confirmation ou non de l'utilisateur.