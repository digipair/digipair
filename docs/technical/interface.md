# Documentation de la Communication entre le Chatbot et la Factory DIGIPAIR

## Vue d'ensemble

Cette documentation décrit les échanges entre un chatbot DIGIPAIR et la Factory DIGIPAIR. Elle couvre les phases d'initialisation, les interactions avec les boosts, et les conversations utilisateur classiques.

---

## 1. Initialisation du Chatbot

Lors du démarrage, le chatbot effectue une série d'appels pour configurer son affichage et récupérer les données nécessaires à son fonctionnement.

### 1.1 Récupération de l'historique

- **Service appelé** : `history`
- **Objectif** : Récupérer la liste des derniers messages échangés avec l'agent.
- **Paramètres** : ID de l'agent.
- **Format de retour** : Liste d'objets contenant :

  - `role` : "user" ou "assistant"
  - `content` : contenu du message
  - `uuid` : identifiant unique du message
  - `parent_history`: référence du message précédent
  - `parent_conversation` : référence de fil de discussion (1er message de la discussion)
  - `boost` : configuration du boost associé, le cas échéant
  - `boosts` : liste des boosts proposés à ce moment, si applicable
  - `sources` : sources d'information utilisées

Exemple de message avec boost :

```json
{
  "role": "assistant",
  "content": "Quel est l'identifiant de ce(tte) Web service ?",
  "uuid": "...",
  "boost": {
    "reasoning": "boost-add-reasoning",
    "step": "Execution",
    "prompt": true,
    "required": true,
    "context": {
      "digipair": "invoice-manager",
      "library": "@digipair/skill-service",
      "element": "service",
   0   "summary": "Web service"
    }
  }
}
```

### 1.2 Récupération des boosts

- **Service appelé** : `boosts`
- **Objectif** : Obtenir la liste des boosts (actions prédéfinies) disponibles pour ce chatbot.
- **Paramètres** : ID du chatbot ou de l'agent associé.
- **Format de retour** : Liste d’objets représentant les boosts disponibles.

  - `reasoning` : identifiant technique du boost utilisé dans les logs ou les services
  - `summary` : titre du boost (affiché à l'utilisateur)
  - `description` : explication de l'utilité du boost
  - `selector` : sélecteur DOM où le boost doit s'activer (par exemple `body`, `img`)
  - `url` : motif d'URL permettant d'identifier la page où le boost est disponible
  - `standalone` : booléen indiquant si le boost peut être déclenché de manière autonome

Exemple de réponse :

```json
[
  {
    "reasoning": "boost-form-auto",
    "summary": "Remplir un formulaire depuis une image",
    "description": "Boost de remplissage de formulaire depuis un scan",
    "selector": "body",
    "url": "^.*/fr-form-auto$",
    "standalone": false
  },
  {
    "reasoning": "boost-generate-form-from-image",
    "summary": "Générer un formulaire depuis une image",
    "description": "Transformer une image en formulaire éditable",
    "selector": "digipair-ai-web-form-js-editor",
    "url": "^.*/fr-form-editor$",
    "standalone": false
  }
]
```

### 1.3 Récupération des métadonnées

- **Service appelé** : `metadata`
- **Objectif** : Personnaliser l'affichage du chatbot (avatar, couleurs, nom, etc.).
- **Paramètres** : ID du chatbot ou de l'agent associé.
- **Format de retour** : Objet contenant :

  - `avatar` : image encodée en base64 utilisée comme illustration principale du chatbot
  - `color` : couleur principale (hexadécimale) utilisée pour le thème du chatbot
  - `config.VERSIONS` : dictionnaire des versions des bibliothèques utilisées par l’agent (ex : `@digipair/skill-service`, `@digipair/skill-chatbot`, etc.)
  - `variables` : espace de configuration additionnel pour des variables spécifiques au contexte ou à l’entreprise

Exemple de réponse :

```json
{
  "avatar": "data:image/png;base64,...",
  "color": "#3b82f6",
  "config": {
    "VERSIONS": {
      "@digipair/engine": "latest",
      "@digipair/skill-service": "latest",
      "@digipair/skill-chatbot": "latest",
      "@digipair/skill-llm": "latest",
      "@digipair/skill-dsp": "latest"
    }
  },
  "variables": {}
}
```

### 1.4 Connexion au flux SSE

- **Type** : Server-Sent Events (SSE)
- **Objectif** : Rester à l'écoute des notifications en temps réel (mises à jour, nouvelles réponses, etc.).
- **Paramètres** : Token d'authentification + ID du chatbot.
- **Types de messages reçus** :

  - `type: "step"` : indique une étape en cours d’exécution par un boost actif.

Exemple de message SSE :

```json
{
  "type": "step",
  "content": "Génération de la page"
}
```

- **Comportement attendu** : le chatbot relaie ce message à l'utilisateur pour l'informer de l'état d'avancement du traitement en cours.

---

## 2. Utilisation des Boosts

Les boosts permettent au chatbot de proposer des actions contextualisées à l'utilisateur. Le processus d'interaction avec un boost comprend deux étapes distinctes : l'initialisation du boost et son exécution.

### 2.1 Initialisation d’un Boost

Lorsque l'utilisateur sélectionne un boost (par clic ou déclencheur contextuel), une requête d'initialisation est envoyée à la Factory DIGIPAIR.

- **Données envoyées** :

  - `inputs` : liste vide (aucune donnée utilisateur encore fournie)
  - `userId` : identifiant de l’utilisateur
  - `context` : contexte DOM, ex. `element: body`

Exemple de payload :

```json
{
  "inputs": [],
  "userId": "fe647c8clkd",
  "context": {
    "element": "body"
  }
}
```

- **Données retournées** :

  - `assistant` : texte à afficher à l'utilisateur
  - `boost` : configuration enrichie du boost avec les champs nécessaires à l'exécution (inputs, prompt, etc.)
  - `uuid` : identifiant unique du message

Exemple de réponse :

```json
{
  "assistant": "A partir de quelle image souhaitez-vous remplir votre formulaire ?",
  "boost": {
    "reasoning": "boost-form-auto",
    "step": "Execution",
    "prompt": false,
    "required": false,
    "selector": "body",
    "url": "^.*/fr-form-auto$",
    "inputs": [
      {
        "library": "@digipair/skill-web-inputs",
        "element": "digipair-input-file",
        "properties": {
          "label": "Scan du formulaire",
          "accept": "image/jpeg"
        },
        "conditions": {}
      }
    ],
    "context": {
      "element": "body"
    }
  },
  "uuid": "426de3da-06a7-4cd7-9e33-9469b903aa9e"
}
```

### 2.2 Exécution d’un Boost

Une fois le formulaire ou les champs requis renseignés par l’utilisateur, le chatbot exécute le boost en transmettant toutes les données collectées.

- **Service appelé** : Service spécifique au boost (défini dans la configuration du boost).
- **Données envoyées** :

  - `inputs` : données utilisateur collectées (texte, fichiers, sélections, etc.)
  - `userId` : identifiant de l’utilisateur final
  - `step` : toujours `Execution`
  - `parent_history` / `parent_conversation` : références contextuelles
  - `context` : information sur le DOM ou la position de déclenchement

Exemple de payload :

```json
{
  "inputs": [
    {
      "value": "data:image/jpeg;base64,...",
      "content": "> coucours.jpg",
      "required": true
    }
  ],
  "userId": "fe647c8clkd",
  "step": "Execution",
  "parent_history": "beb800fa-b498-4115-9a65-7acd026381a2",
  "parent_conversation": "beb800fa-b498-4115-9a65-7acd026381a2",
  "context": {
    "element": "body"
  }
}
```

---

## 3. Conversation sans Boost activé

Si l'utilisateur envoie un message libre, sans cliquer sur un boost :

- **Service appelé** : `conversation`
- **Données envoyées** :

  - `prompt` : message de l’utilisateur (texte libre)
  - `inputs` : généralement vide
  - `userId` : identifiant de l’utilisateur
  - `context` : objet décrivant le contexte, souvent vide par défaut

Exemple de payload :

```json
{
  "prompt": "Bonjour, comment vas tu ?",
  "inputs": [],
  "userId": "fe647c8clkd",
  "context": {}
}
```

- **Données retournées** :

  - `assistant` : réponse générée par l’agent
  - `command` : liste d’instructions éventuelles à exécuter côté client
  - `boosts`, `sources`, `logs` : généralement null dans un échange classique
  - `boost` : null si aucun boost déclenché
  - `uuid`, `parent_conversation`, `parent_history` : identifiants de suivi contextuel

Exemple de réponse :

```json
{
  "assistant": "Bonjour ! Je vais bien, merci. Comment puis-je vous aider aujourd'hui ?",
  "command": [],
  "boosts": null,
  "sources": null,
  "logs": null,
  "boost": null,
  "parent_conversation": null,
  "parent_history": "6435831a-77e4-411a-8b7b-7b92e862cd68",
  "uuid": "1af2bc8c-3aca-45cc-8635-7e97ac4d2290"
}
```

---

## 4. Résumé des services utilisés

| Étape                       | Service appelé   | Description                               |
| --------------------------- | ---------------- | ----------------------------------------- |
| Initialisation - Histoire   | `history`        | Récupère les anciens messages échangés    |
| Initialisation - Boosts     | `boosts`         | Récupère la liste des boosts disponibles  |
| Initialisation - UI         | `metadata`       | Récupère les éléments visuels du chatbot  |
| Initialisation - Temps réel | SSE              | Récupère les notifications en direct      |
| Interaction - Boost         | Boost spécifique | Appelle le service lié à l’action boostée |
| Interaction - Libre         | `conversation`   | Engage une conversation sans boost activé |

---

## Notes complémentaires

- Le protocole de communication repose sur des appels HTTP REST pour les services, et SSE pour les notifications en temps réel.
- L’orchestration des appels est gérée côté frontend du chatbot et permet de gérer les boost des manière stateless.
