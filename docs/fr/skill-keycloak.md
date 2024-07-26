# @digipair/skill-keycloak

**Version:** 0.1.0  
**Summary:** Affichage de pages web sécurisée  
**Description:** Cette compétence englobe la connaissance et l'utilisation des technologies web nécessaires pour développer et maintenir des sites internet sécurisés par Keycloak.  
**Icon:** 🔐

## Table des matières

- [Fonctions](#fonctions)
  - [executeFactory](#executefactory)
  - [login](#login)
  - [logout](#logout)
  - [page](#page)
  - [service](#service)
  - [boost](#boost)

## Fonctions

### executeFactory

Exécution d'une liste de capacité dans la factory.

#### Paramètres

| Nom      | Type    | Requis | Description                                |
|----------|---------|--------|--------------------------------------------|
| execute  | array   | Oui    | Liste de capacité à exécuter               |
| secured  | boolean | Non    | Sécurise l'exécution via un token Keycloak |

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "executeFactory",
  "properties": {
    "execute": ["capacité1", "capacité2"],
    "secured": true
  }
}
```

### login

Identification de l'utilisateur sur le site internet via le serveur Keycloak.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "login",
  "properties": {}
}
```

### logout

Désidentification de l'utilisateur sur le site internet via le serveur Keycloak.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "logout",
  "properties": {}
}
```

### page

Affichage d'une page d'un site internet sécurisée par Keycloak.

#### Paramètres

| Nom                | Type   | Requis | Description                                                                 |
|--------------------|--------|--------|-----------------------------------------------------------------------------|
| body               | array  | Oui    | Contenu de la page                                                          |
| title              | string | Non    | Titre de la page                                                            |
| favicon            | string | Non    | Icone de la page                                                            |
| styleHtml          | string | Non    | Style CSS de l'élément HTML                                                 |
| styleBody          | string | Non    | Style CSS de l'élément BODY                                                 |
| url                | string | Non    | Adresse du serveur Keycloak                                                 |
| realm              | string | Non    | Realm du serveur Keycloak                                                   |
| clientId           | string | Non    | Client ID du serveur Keycloak                                               |
| factoryUrl         | string | Non    | Adresse de la factory Digipair                                              |
| factoryInitialize  | array  | Non    | Action déclenchée lors de l'initialisation coté factory                     |
| browserInitialize  | array  | Non    | Action déclenchée lors de l'initialisation coté navigateur                  |
| browserLoad        | array  | Non    | Action déclenchée lorsque la page est chargée coté navigateur               |
| unlogged           | array  | Non    | Action déclenchée lorsque la page est chargée coté navigateur si l'utilisateur n'est pas identifié |
| logged             | array  | Non    | Action déclenchée lorsque la page est chargée coté navigateur si l'utilisateur est identifié |

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "page",
  "properties": {
    "body": ["contenu1", "contenu2"],
    "title": "Titre de la page",
    "favicon": "favicon.ico",
    "styleHtml": "body { background-color: #f0f0f0; }",
    "styleBody": "margin: 0;",
    "url": "https://keycloak.example.com",
    "realm": "example-realm",
    "clientId": "example-client-id",
    "factoryUrl": "https://factory.example.com",
    "factoryInitialize": ["action1", "action2"],
    "browserInitialize": ["action1", "action2"],
    "browserLoad": ["action1", "action2"],
    "unlogged": ["action1", "action2"],
    "logged": ["action1", "action2"]
  }
}
```

### service

Réponse à un appel http sécurisé par Keycloak.

#### Paramètres

| Nom      | Type   | Requis | Description                                |
|----------|--------|--------|--------------------------------------------|
| execute  | array  | Oui    | Commandes à exécuter                       |
| secured  | string | Non    | Accès autorisé seulement si un token Keycloak est fourni |
| url      | string | Non    | Adresse du serveur Keycloak                |
| realm    | string | Non    | Realm du serveur Keycloak                  |

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "service",
  "properties": {
    "execute": ["commande1", "commande2"],
    "secured": "token-keycloak",
    "url": "https://keycloak.example.com",
    "realm": "example-realm"
  }
}
```

### boost

Boost proposé par le Digipair sécurisé par Keycloak.

#### Paramètres

| Nom      | Type   | Requis | Description                                |
|----------|--------|--------|--------------------------------------------|
| boosts   | array  | Oui    | Liste des déclencheurs du boost            |
| execute  | array  | Non    | Liste des actions à exécuter               |
| secured  | string | Non    | Accès autorisé seulement si un token Keycloak est fourni |
| url      | string | Non    | Adresse du serveur Keycloak                |
| realm    | string | Non    | Realm du serveur Keycloak                  |

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "boost",
  "properties": {
    "boosts": [
      {
        "name": "boost1",
        "prompt": true,
        "required": true,
        "text": "Texte du boost",
        "selector": "#selector",
        "url": "https://example.com",
        "inputs": ["input1", "input2"]
      }
    ],
    "execute": ["action1", "action2"],
    "secured": "token-keycloak",
    "url": "https://keycloak.example.com",
    "realm": "example-realm"
  }
}
```

## Notes

- Les fonctions `executeFactory`, `login`, `logout`, `page`, `service`, et `boost` sont utilisées pour gérer les interactions avec un site internet sécurisé par Keycloak.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.