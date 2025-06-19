# @digipair/skill-web-chatbot

**Version:** 0.1.0  
**Résumé:** Display of chatbots  
**Description:** Integration of an interactive chatbot on a web page to enhance engagement and communication with users.  
**Icône:** 🤖

## Table des matières

- [Fonctions](#fonctions)
  - [digipair-chatbot-full](#digipair-chatbot-full)
  - [digipair-chatbot](#digipair-chatbot)

---

## Fonctions

### digipair-chatbot-full

Affiche une conversation avec un chatbot en mode plein écran (full-page).

#### Description

Cette fonction permet d'intégrer un chatbot interactif qui s'affiche en plein écran sur la page web, facilitant ainsi l'engagement et la communication avec les utilisateurs.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| code     | string | Oui    | Identifiant du Digipair à afficher |
| apiUrl   | string | Non    | URL de la factory                  |
| userId   | string | Non    | Identifiant unique de l'utilisateur|

#### Exemple

```json
{
  "library": "@digipair/skill-web-chatbot",
  "element": "digipair-chatbot-full",
  "properties": {
    "code": "identifiant_du_digipair",
    "apiUrl": "https://api.digipair.com/factory",
    "userId": "utilisateur_123"
  }
}
```

---

### digipair-chatbot

Affiche un chatbot sur une page web (mode intégré).

#### Description

Cette fonction permet d'intégrer un chatbot interactif directement sur une page web, sans occuper tout l'espace de la page, pour améliorer l'expérience utilisateur et la communication.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| code     | string | Oui    | Identifiant du Digipair à afficher |
| apiUrl   | string | Non    | URL de la factory                  |
| userId   | string | Non    | Identifiant unique de l'utilisateur|

#### Exemple

```json
{
  "library": "@digipair/skill-web-chatbot",
  "element": "digipair-chatbot",
  "properties": {
    "code": "identifiant_du_digipair",
    "apiUrl": "https://api.digipair.com/factory",
    "userId": "utilisateur_123"
  }
}
```

---

## Notes

- Les fonctions `digipair-chatbot-full` et `digipair-chatbot` permettent d'intégrer un chatbot sur une page web, respectivement en mode plein écran ou intégré.
- Le paramètre `code` est obligatoire et doit correspondre à l'identifiant du Digipair à afficher.
- Les paramètres `apiUrl` et `userId` sont optionnels et permettent de personnaliser l'instance du chatbot.
- Aucune variable de contexte privé ou d'environnement spécifique n'est requise pour ces fonctions.

---

**Pour toute contribution ou question, veuillez consulter le dépôt GitHub associé à la librairie.**