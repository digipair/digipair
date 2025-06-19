# @digipair/skill-heygen

**Version:** 0.1.0  
**Résumé:** Heygen API  
**Description:** Cette compétence permet de gérer la communication avec les serveurs Heygen.  
**Icône:** 🔗

## Table des matières

- [Fonctions](#fonctions)
  - [newSession](#newsession)
  - [handleICE](#handleice)
  - [startSession](#startsession)
  - [talk](#talk)
  - [stop](#stop)

---

## Fonctions

### newSession

Créer une nouvelle session Heygen.

#### Paramètres

| Nom        | Type   | Requis | Description                |
|------------|--------|--------|----------------------------|
| serverUrl  | string | Non    | URL du serveur Heygen      |
| apiKey     | string | Non    | Clé API Heygen             |
| quality    | string | Non    | Qualité de la voix         |
| avatar     | string | Oui    | Avatar vocal               |
| voice      | string | Oui    | Voix à utiliser            |

#### Exemple

```json
{
  "library": "@digipair/skill-heygen",
  "element": "newSession",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "votre_cle_api",
    "quality": "high",
    "avatar": "avatar_id",
    "voice": "voice_id"
  }
}
```

---

### handleICE

Gérer un candidat ICE pour une session Heygen.

#### Paramètres

| Nom        | Type   | Requis | Description                |
|------------|--------|--------|----------------------------|
| serverUrl  | string | Non    | URL du serveur Heygen      |
| apiKey     | string | Non    | Clé API Heygen             |
| sessionId  | string | Oui    | Identifiant de session     |
| candidate  | object | Oui    | Candidat ICE               |

#### Exemple

```json
{
  "library": "@digipair/skill-heygen",
  "element": "handleICE",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "votre_cle_api",
    "sessionId": "session_123",
    "candidate": {
      "candidate": "candidate:842163049 1 udp 1677729535 192.168.1.2 56143 typ srflx raddr 0.0.0.0 rport 0"
    }
  }
}
```

---

### startSession

Démarrer une session Heygen existante.

#### Paramètres

| Nom        | Type   | Requis | Description                |
|------------|--------|--------|----------------------------|
| serverUrl  | string | Non    | URL du serveur Heygen      |
| apiKey     | string | Non    | Clé API Heygen             |
| sessionId  | string | Oui    | Identifiant de session     |
| sdp        | object | Oui    | Objet SDP                  |

#### Exemple

```json
{
  "library": "@digipair/skill-heygen",
  "element": "startSession",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "votre_cle_api",
    "sessionId": "session_123",
    "sdp": {
      "type": "offer",
      "sdp": "v=0..."
    }
  }
}
```

---

### talk

Envoyer un texte à dire dans une session Heygen.

#### Paramètres

| Nom        | Type   | Requis | Description                |
|------------|--------|--------|----------------------------|
| serverUrl  | string | Non    | URL du serveur Heygen      |
| apiKey     | string | Non    | Clé API Heygen             |
| sessionId  | string | Oui    | Identifiant de session     |
| text       | string | Oui    | Texte à prononcer          |

#### Exemple

```json
{
  "library": "@digipair/skill-heygen",
  "element": "talk",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "votre_cle_api",
    "sessionId": "session_123",
    "text": "Bonjour, comment puis-je vous aider ?"
  }
}
```

---

### stop

Arrêter une session Heygen.

#### Paramètres

| Nom        | Type   | Requis | Description                |
|------------|--------|--------|----------------------------|
| serverUrl  | string | Non    | URL du serveur Heygen      |
| apiKey     | string | Non    | Clé API Heygen             |
| sessionId  | string | Oui    | Identifiant de session     |

#### Exemple

```json
{
  "library": "@digipair/skill-heygen",
  "element": "stop",
  "properties": {
    "serverUrl": "https://api.heygen.com",
    "apiKey": "votre_cle_api",
    "sessionId": "session_123"
  }
}
```

---

## Notes

- Les fonctions de cette librairie permettent de gérer le cycle de vie d'une session Heygen (création, démarrage, interaction, arrêt) ainsi que la gestion des candidats ICE pour la communication WebRTC.
- Les paramètres `serverUrl` et `apiKey` sont optionnels mais recommandés pour la connexion à un serveur Heygen personnalisé ou sécurisé.
- Assurez-vous de fournir des identifiants valides pour les paramètres obligatoires (`avatar`, `voice`, `sessionId`, etc.).
- Les objets complexes comme `candidate` et `sdp` doivent respecter la structure attendue par Heygen.