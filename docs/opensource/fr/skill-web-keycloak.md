# @digipair/skill-web-keycloak

**Version:** 0.1.0  
**Summary:** Authentification web Keycloak  
**Description:** gérer une authentification Keycloak coté navigateur.  
**Icon:** 🔑

## Table des matières

- [Fonctions](#fonctions)
  - [initialize](#initialize)
  - [isLogged](#islogged)
  - [token](#token)
  - [logout](#logout)
  - [login](#login)

## Fonctions

### initialize

Initialise l'authentification Keycloak.

#### Paramètres

| Nom      | Type   | Requis | Description                 |
| -------- | ------ | ------ | --------------------------- |
| url      | string | Non    | Adresse du serveur Keycloak |
| realm    | string | Non    | Realm Keycloak              |
| clientId | string | Non    | ClientId Keycloak           |

#### Exemple

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "initialize",
  "properties": {
    "url": "https://keycloak.example.com",
    "realm": "example-realm",
    "clientId": "example-client-id"
  }
}
```

### isLogged

Vérifie si l'utilisateur est identifié.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "isLogged",
  "properties": {}
}
```

### token

Récupère le token Keycloak.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "token",
  "properties": {}
}
```

### logout

Déconnecte l'utilisateur de Keycloak.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "logout",
  "properties": {}
}
```

### login

Connecte l'utilisateur à Keycloak.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "login",
  "properties": {}
}
```

## Notes

- Les fonctions `initialize`, `isLogged`, `token`, `logout`, et `login` sont utilisées pour gérer l'authentification Keycloak côté navigateur.
- Assurez-vous de fournir les paramètres corrects pour la fonction `initialize` afin de configurer correctement l'authentification Keycloak.
