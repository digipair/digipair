# @digipair/skill-web-keycloak

**Version:** 0.1.0  
**Résumé:** Keycloak Web Authentication  
**Description:** Cette compétence permet de gérer l’authentification Keycloak côté navigateur.  
**Icône:** 🔑

## Table des matières

- [Fonctions](#fonctions)
  - [initialize](#initialize)
  - [isLogged](#islogged)
  - [token](#token)
  - [logout](#logout)
  - [login](#login)

---

## Fonctions

### initialize

Initialise l’authentification Keycloak.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| url      | string | Non    | Adresse du serveur Keycloak        |
| realm    | string | Non    | Nom du Realm Keycloak              |
| clientId | string | Non    | Identifiant du client Keycloak     |

#### Exemple

```json
{
  "library": "@digipair/skill-web-keycloak",
  "element": "initialize",
  "properties": {
    "url": "https://keycloak.example.com",
    "realm": "mon-realm",
    "clientId": "mon-client"
  }
}
```

---

### isLogged

Vérifie si l’utilisateur est actuellement identifié auprès de Keycloak.

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

---

### token

Récupère le token d’authentification Keycloak de l’utilisateur courant.

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

---

### logout

Déconnecte l’utilisateur de Keycloak.

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

---

### login

Connecte l’utilisateur à Keycloak.

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

---

## Notes

- La fonction `initialize` doit être appelée avant toute opération d’authentification pour configurer la connexion à Keycloak.
- Les fonctions `login` et `logout` permettent respectivement de connecter et déconnecter l’utilisateur.
- `isLogged` permet de vérifier l’état d’authentification de l’utilisateur.
- `token` permet de récupérer le token JWT pour les appels authentifiés.
- Tous les paramètres sont optionnels pour `initialize`, mais il est recommandé de les renseigner pour une configuration correcte.
- Cette librairie est conçue pour être utilisée côté navigateur.