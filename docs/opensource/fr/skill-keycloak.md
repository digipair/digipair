# @digipair/skill-keycloak

**Version:** 0.1.0  
**Résumé:** Display of secure web pages  
**Description:** This skill encompasses the knowledge and use of web technologies necessary to develop and maintain websites secured by Keycloak.  
**Icône:** 🔐

---

## Table des matières

- [Fonctions](#fonctions)
  - [executeFactory](#executefactory)
  - [login](#login)
  - [logout](#logout)
- [Blocs de scène](#blocs-de-scène)
  - [page](#page)
  - [service](#service)
  - [boost](#boost)
- [Schémas de données](#schémas-de-données)
  - [SecuredInput](#securedinput)
  - [SecuredStep](#securedstep)
  - [ContextParameter](#contextparameter)

---

## Fonctions

### executeFactory

Exécution d'une liste de capacités dans la factory.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| execute  | array   | Oui    | Liste des capacités à exécuter (`pinsSettings`)  |
| secured  | boolean | Non    | Sécurise l'exécution via un token Keycloak       |

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "executeFactory",
  "properties": {
    "execute": [
      { /* objet pinsSettings */ }
    ],
    "secured": true
  }
}
```

---

### login

Authentification de l'utilisateur sur le site via le serveur Keycloak.

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

---

### logout

Déconnexion de l'utilisateur du site via le serveur Keycloak.

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

---

## Blocs de scène

### page

Affichage d'une page web sécurisée par Keycloak.

#### Paramètres

| Nom                  | Type    | Requis | Description                                                                 |
|----------------------|---------|--------|-----------------------------------------------------------------------------|
| body                 | array   | Oui    | Contenu de la page (`pinsSettings`)                                         |
| head                 | array   | Non    | En-tête de la page (`pinsSettings`)                                         |
| ssr                  | boolean | Non    | Rendu côté serveur                                                          |
| styleHtml            | string  | Non    | Style CSS de l'élément HTML                                                 |
| styleBody            | string  | Non    | Style CSS de l'élément BODY                                                 |
| url                  | string  | Non    | Adresse du serveur Keycloak                                                 |
| realm                | string  | Non    | Realm du serveur Keycloak                                                   |
| clientId             | string  | Non    | Client ID du serveur Keycloak                                               |
| factoryUrl           | string  | Non    | Adresse de la factory Digipair                                              |
| factoryInitialize    | array   | Non    | Action déclenchée lors de l'initialisation de la factory (`pinsSettings`)   |
| browserInitialize    | array   | Non    | Action déclenchée lors de l'initialisation du navigateur (`pinsSettings`)   |
| browserLoad          | array   | Non    | Action déclenchée au chargement de la page (`pinsSettings`)                 |
| unlogged             | array   | Non    | Action si l'utilisateur n'est pas authentifié (`pinsSettings`)              |
| logged               | array   | Non    | Action si l'utilisateur est authentifié (`pinsSettings`)                    |
| confirmBeforeUnload  | string  | Non    | Message de confirmation avant de quitter la page                            |

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "page",
  "properties": {
    "body": [
      { /* objet pinsSettings */ }
    ],
    "url": "https://keycloak.example.com",
    "realm": "myrealm",
    "clientId": "myclientid"
  }
}
```

---

### service

Réponse à un appel HTTP sécurisé par Keycloak.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| execute  | array   | Oui    | Commandes à exécuter (`pinsSettings`)            |
| secured  | string  | Non    | Accès autorisé uniquement avec un token Keycloak |
| url      | string  | Non    | Adresse du serveur Keycloak                      |
| realm    | string  | Non    | Realm du serveur Keycloak                        |

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "service",
  "properties": {
    "execute": [
      { /* objet pinsSettings */ }
    ],
    "secured": "token_keycloak"
  }
}
```

---

### boost

Boost sécurisé proposé par Digipair via Keycloak.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| steps    | array   | Oui    | Étapes à exécuter (`SecuredStep`)                |
| secured  | string  | Non    | Accès autorisé uniquement avec un token Keycloak |
| url      | string  | Non    | Adresse du serveur Keycloak                      |
| realm    | string  | Non    | Realm du serveur Keycloak                        |

#### Métadonnées

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| standalone | boolean | Oui  | Le boost est-il autonome ?                       |
| selector   | string  | Non  | Sélecteur CSS                                    |
| url        | string  | Non  | URL RegEx                                        |
| context    | array   | Oui  | Schéma de contexte (`ContextParameter`)          |

#### Exemple

```json
{
  "library": "@digipair/skill-keycloak",
  "element": "boost",
  "properties": {
    "steps": [
      {
        "name": "step1",
        "execute": [
          { /* objet pinsSettings */ }
        ]
      }
    ],
    "secured": "token_keycloak"
  }
}
```

---

## Schémas de données

### SecuredInput

Entrée sécurisée.

| Propriété | Type    | Description                       |
|-----------|---------|-----------------------------------|
| prompt    | boolean |                                   |
| required  | boolean |                                   |
| selector  | string  |                                   |
| url       | string  |                                   |
| inputs    | array   | Liste d'objets `pinsSettings`     |

---

### SecuredStep

Étape d'exécution sécurisée.

| Propriété | Type    | Requis | Description         |
|-----------|---------|--------|---------------------|
| name      | string  | Oui    | Nom de l'étape      |
| execute   | array   | Oui    | Actions à exécuter (`pinsSettings`) |

---

### ContextParameter

Paramètre de contexte.

| Propriété   | Type    | Requis | Description   |
|-------------|---------|--------|--------------|
| name        | string  | Oui    | Nom          |
| summary     | string  | Oui    | Résumé       |
| required    | boolean | Oui    | Requis       |
| schema      | object  | Oui    | Schéma       |
| description | string  | Non    | Description  |

---

## Notes

- Les objets `pinsSettings` sont des objets de configuration/action propres à Digipair, à adapter selon votre usage.
- L'intégration avec Keycloak nécessite la configuration correcte des paramètres `url`, `realm` et `clientId` selon votre serveur Keycloak.
- Les fonctions `login` et `logout` gèrent respectivement l'authentification et la déconnexion de l'utilisateur.
- Les blocs de scène permettent de composer des pages, services ou boosts sécurisés par Keycloak, adaptés à différents contextes d'usage.