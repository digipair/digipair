# @digipair/skill-web-chatbot

**Version:** 0.1.0  
**Summary:** Affichage de chatbots  
**Description:** Intégration d'un chatbot interactif sur une page web pour améliorer l'engagement et la communication avec les utilisateurs.  
**Icon:** 🤖

## Table des matières

- [Fonctions](#fonctions)
  - [digipairChatbotFull](#digipairChatbotFull)
  - [digipairChatbot](#digipairChatbot)

## Fonctions

### digipairChatbotFull

Affiche une conversation avec un chatbot en pleine page.

#### Paramètres

| Nom              | Type   | Requis | Description                                                                 |
|------------------|--------|--------|-----------------------------------------------------------------------------|
| code             | string | Oui    | Digipair à afficher                                                         |
| apiUrl           | string | Non    | Adresse URL de la factory                                                   |
| commonExperience | string | Non    | Digipair qui partage les raisonnements communs avec tous les chatbots       |

#### Exemple

```json
{
  "library": "@digipair/skill-web-chatbot",
  "element": "digipairChatbotFull",
  "properties": {
    "code": "identifiant_du_digipair",
    "apiUrl": "https://example.com/api",
    "commonExperience": "identifiant_du_digipair_commun"
  }
}
```

### digipairChatbot

Affiche un chatbot sur une page internet.

#### Paramètres

| Nom              | Type   | Requis | Description                                                                 |
|------------------|--------|--------|-----------------------------------------------------------------------------|
| code             | string | Oui    | Digipair à afficher                                                         |
| apiUrl           | string | Non    | Adresse URL de la factory                                                   |
| commonExperience | string | Non    | Digipair qui partage les raisonnements communs avec tous les chatbots       |

#### Exemple

```json
{
  "library": "@digipair/skill-web-chatbot",
  "element": "digipairChatbot",
  "properties": {
    "code": "identifiant_du_digipair",
    "apiUrl": "https://example.com/api",
    "commonExperience": "identifiant_du_digipair_commun"
  }
}
```

## Notes

- Les fonctions `digipairChatbotFull` et `digipairChatbot` sont utilisées pour afficher respectivement un chatbot en pleine page et un chatbot intégré sur une page web.
- Assurez-vous de fournir un identifiant de digipair valide pour le paramètre `code`.
- Les paramètres `apiUrl` et `commonExperience` sont optionnels et permettent de configurer l'URL de la factory et de partager des raisonnements communs entre plusieurs chatbots.