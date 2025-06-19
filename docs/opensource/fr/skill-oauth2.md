# @digipair/skill-oauth2

**Version:** 0.1.0  
**Résumé:** OAuth2 Authorization Management  
**Description:** Cette compétence permet de gérer les autorisations OAuth2.  
**Icône:** 🔐

## Table des matières

- [Fonctions](#fonctions)
  - [authorizationCodeUrl](#authorizationcodeurl)
  - [authorizationCodeAccessToken](#authorizationcodeaccesstoken)
  - [authorizationCodeCreateToken](#authorizationcodecreatetoken)
  - [resourceOwnerPasswordAccessToken](#resourceownerpasswordaccesstoken)
  - [resourceOwnerPasswordCreateToken](#resourceownerpasswordcreatetoken)
  - [clientCredentialsAccessToken](#clientcredentialsaccesstoken)
  - [clientCredentialsCreateToken](#clientcredentialscreatetoken)
  - [tokenExpired](#tokenexpired)
  - [tokenRefresh](#tokenrefresh)
  - [tokenRevoke](#tokenrevoke)
  - [tokenRevokeAll](#tokenrevokeall)

---

## Fonctions

### authorizationCodeUrl

Récupère l'URL d'autorisation OAuth2 (Authorization Code Grant).

#### Paramètres

| Nom    | Type   | Requis | Description                |
|--------|--------|--------|----------------------------|
| config | object | Oui    | Configuration OAuth2       |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "authorizationCodeUrl",
  "properties": {
    "config": {
      "clientId": "votre_client_id",
      "redirectUri": "https://votre.app/callback",
      "scope": "openid profile",
      "authorizationEndpoint": "https://provider.com/oauth2/authorize"
    }
  }
}
```

---

### authorizationCodeAccessToken

Récupère un jeton d'accès via le flux Authorization Code.

#### Paramètres

| Nom         | Type   | Requis | Description                |
|-------------|--------|--------|----------------------------|
| config      | object | Oui    | Configuration OAuth2       |
| tokenParams | object | Oui    | Paramètres du token        |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "authorizationCodeAccessToken",
  "properties": {
    "config": {
      "clientId": "votre_client_id",
      "clientSecret": "votre_secret",
      "tokenEndpoint": "https://provider.com/oauth2/token"
    },
    "tokenParams": {
      "code": "code_reçu",
      "redirectUri": "https://votre.app/callback"
    }
  }
}
```

---

### authorizationCodeCreateToken

Crée un objet token à partir d'un access token (Authorization Code Grant).

#### Paramètres

| Nom         | Type   | Requis | Description                |
|-------------|--------|--------|----------------------------|
| config      | object | Oui    | Configuration OAuth2       |
| accessToken | object | Oui    | Jeton d'accès              |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "authorizationCodeCreateToken",
  "properties": {
    "config": {
      "clientId": "votre_client_id"
    },
    "accessToken": {
      "access_token": "jeton",
      "expires_in": 3600
    }
  }
}
```

---

### resourceOwnerPasswordAccessToken

Récupère un jeton d'accès via le flux Resource Owner Password Credentials.

#### Paramètres

| Nom         | Type   | Requis | Description                |
|-------------|--------|--------|----------------------------|
| config      | object | Oui    | Configuration OAuth2       |
| tokenParams | object | Oui    | Paramètres du token        |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "resourceOwnerPasswordAccessToken",
  "properties": {
    "config": {
      "clientId": "votre_client_id",
      "clientSecret": "votre_secret",
      "tokenEndpoint": "https://provider.com/oauth2/token"
    },
    "tokenParams": {
      "username": "utilisateur",
      "password": "motdepasse"
    }
  }
}
```

---

### resourceOwnerPasswordCreateToken

Crée un objet token à partir d'un access token (Resource Owner Password Credentials).

#### Paramètres

| Nom         | Type   | Requis | Description                |
|-------------|--------|--------|----------------------------|
| config      | object | Oui    | Configuration OAuth2       |
| accessToken | object | Oui    | Jeton d'accès              |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "resourceOwnerPasswordCreateToken",
  "properties": {
    "config": {
      "clientId": "votre_client_id"
    },
    "accessToken": {
      "access_token": "jeton",
      "expires_in": 3600
    }
  }
}
```

---

### clientCredentialsAccessToken

Récupère un jeton d'accès via le flux Client Credentials.

#### Paramètres

| Nom         | Type   | Requis | Description                |
|-------------|--------|--------|----------------------------|
| config      | object | Oui    | Configuration OAuth2       |
| tokenParams | object | Oui    | Paramètres du token        |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "clientCredentialsAccessToken",
  "properties": {
    "config": {
      "clientId": "votre_client_id",
      "clientSecret": "votre_secret",
      "tokenEndpoint": "https://provider.com/oauth2/token"
    },
    "tokenParams": {
      "scope": "api.read"
    }
  }
}
```

---

### clientCredentialsCreateToken

Crée un objet token à partir d'un access token (Client Credentials).

#### Paramètres

| Nom         | Type   | Requis | Description                |
|-------------|--------|--------|----------------------------|
| config      | object | Oui    | Configuration OAuth2       |
| accessToken | object | Oui    | Jeton d'accès              |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "clientCredentialsCreateToken",
  "properties": {
    "config": {
      "clientId": "votre_client_id"
    },
    "accessToken": {
      "access_token": "jeton",
      "expires_in": 3600
    }
  }
}
```

---

### tokenExpired

Vérifie si un token est expiré.

#### Paramètres

| Nom   | Type   | Requis | Description |
|-------|--------|--------|-------------|
| token | object | Oui    | Jeton       |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "tokenExpired",
  "properties": {
    "token": {
      "access_token": "jeton",
      "expires_at": 1712345678
    }
  }
}
```

---

### tokenRefresh

Rafraîchit un token.

#### Paramètres

| Nom   | Type   | Requis | Description |
|-------|--------|--------|-------------|
| token | object | Oui    | Jeton       |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "tokenRefresh",
  "properties": {
    "token": {
      "refresh_token": "jeton_refresh"
    }
  }
}
```

---

### tokenRevoke

Révoque un token.

#### Paramètres

| Nom   | Type   | Requis | Description         |
|-------|--------|--------|---------------------|
| token | object | Oui    | Jeton à révoquer    |
| type  | string | Oui    | Type de révocation  |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "tokenRevoke",
  "properties": {
    "token": {
      "access_token": "jeton"
    },
    "type": "access_token"
  }
}
```

---

### tokenRevokeAll

Révoque tous les tokens associés.

#### Paramètres

| Nom   | Type   | Requis | Description |
|-------|--------|--------|-------------|
| token | object | Oui    | Jeton       |

#### Exemple

```json
{
  "library": "@digipair/skill-oauth2",
  "element": "tokenRevokeAll",
  "properties": {
    "token": {
      "access_token": "jeton"
    }
  }
}
```

---

## Notes

- Les objets `config` et `tokenParams` doivent respecter la structure attendue par votre fournisseur OAuth2.
- Les fonctions de création de token (`authorizationCodeCreateToken`, `resourceOwnerPasswordCreateToken`, `clientCredentialsCreateToken`) servent à encapsuler un access token dans un objet token standardisé.
- Les fonctions de révocation et de rafraîchissement nécessitent généralement que le token contienne les champs appropriés (`refresh_token`, etc.).
- Assurez-vous de sécuriser vos identifiants et secrets OAuth2.