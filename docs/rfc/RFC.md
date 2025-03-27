# RFC XXXX

**Request for Comments: XXXX**

**Titre :** Protocole Pin's - Transformation de Données par Agentic Mesh

**Auteur(s) :** [Nom(s) des auteurs]

**Statut :** Experimental

**Date :** [À définir]

---

## Résumé

Ce document décrit le protocole Pin's (Digipair Agentic Mesh Information Protocol), destiné à permettre la transformation structurée et dynamique de données par des agents intelligents interconnectés via un réseau décentralisé (Agentic Mesh). Le protocole vise à offrir une solution robuste, flexible et modulaire adaptée à divers contextes d'application, en réduisant les dépendances technologiques et en facilitant l'interopérabilité.

---

## Table des matières

- [RFC XXXX](#rfc-xxxx)
  - [Résumé](#résumé)
  - [Table des matières](#table-des-matières)
  - [1. Introduction](#1-introduction)
  - [2. Terminologie](#2-terminologie)
  - [3. Format et Structure du Protocole Pin's](#3-format-et-structure-du-protocole-pins)
    - [3.1 Langage Pin's](#31-langage-pins)
    - [3.2 Types de Raisonnements](#32-types-de-raisonnements)
    - [3.3 JSON typé](#33-json-typé)
  - [4. Formes et Types d'Agents](#4-formes-et-types-dagents)
    - [4.1 Chatbots](#41-chatbots)
    - [4.2 Actions réutilisables](#42-actions-réutilisables)
    - [4.3 Raisonnements spécifiques](#43-raisonnements-spécifiques)
  - [5. Organisation des Répertoires](#5-organisation-des-répertoires)
    - [5.1 Structure des fichiers](#51-structure-des-fichiers)
    - [5.2 Conventions de nommage](#52-conventions-de-nommage)
  - [6. L'agent "common"](#6-lagent-common)
  - [7. Configuration (fichier config.json)](#7-configuration-fichier-configjson)
    - [Métadonnées](#métadonnées)
    - [Librairies](#librairies)
    - [Variables et privates](#variables-et-privates)
  - [8. Factory d'agents](#8-factory-dagents)
    - [Composition](#composition)
    - [Exposition](#exposition)
  - [9. Librairies et Schémas OpenAPI](#9-librairies-et-schémas-openapi)
    - [`schema.json`](#schemajson)
    - [Description des éléments](#description-des-éléments)
  - [10. Notions fondamentales](#10-notions-fondamentales)
    - [Pin's (action)](#pins-action)
    - [Component](#component)
    - [Scene](#scene)
  - [11. Formats Low-code Supportés](#11-formats-low-code-supportés)
    - [Handlebars](#handlebars)
    - [FEEL (Friendly Enough Expression Language)](#feel-friendly-enough-expression-language)
  - [12. Conditions et Logique Dynamique](#12-conditions-et-logique-dynamique)
    - [`if`](#if)
    - [`each`](#each)
    - [Comportements particuliers](#comportements-particuliers)
  - [13. Indépendance du Transport](#13-indépendance-du-transport)
    - [Objectifs de cette indépendance](#objectifs-de-cette-indépendance)
    - [Rôle des librairies d’implémentation](#rôle-des-librairies-dimplémentation)
    - [Rôle de la factory](#rôle-de-la-factory)
  - [14. Alias et Redirections](#14-alias-et-redirections)
    - [Syntaxe de l'alias](#syntaxe-de-lalias)
    - [Exemple de déclaration d'alias](#exemple-de-déclaration-dalias)
    - [Exemple d'utilisation d'alias](#exemple-dutilisation-dalias)
    - [Alias obligatoires](#alias-obligatoires)
  - [15. Journalisation et Traçabilité](#15-journalisation-et-traçabilité)
    - [Données obligatoires à transmettre au logger](#données-obligatoires-à-transmettre-au-logger)
    - [Exemple de configuration de logger](#exemple-de-configuration-de-logger)
    - [Objectifs de la journalisation](#objectifs-de-la-journalisation)
  - [16. Raisonnements Spécifiques](#16-raisonnements-spécifiques)
    - [Raisonnement `conversation`](#raisonnement-conversation)
    - [Raisonnement `instant`](#raisonnement-instant)
    - [Raisonnement `builder`](#raisonnement-builder)
  - [17. Considérations de Sécurité](#17-considérations-de-sécurité)
  - [18. Conclusion](#18-conclusion)
  - [19. Références normatives](#19-références-normatives)

---

## 1. Introduction

Le protocole **Pin's** (Digipair Agentic Mesh Information Protocol) a été conçu dès l'origine pour s'adapter à une grande diversité de cas d'usages, ainsi qu'aux évolutions rapides des besoins fonctionnels, des contraintes techniques et du matériel (hardware). Sa structure modulaire et typée, alliée à une faible dépendance vis-à-vis des technologies ou protocoles de transport, en fait un socle robuste et flexible pour la conception d’agents intelligents.

Pin's vise à fournir un **protocole fondation** pour l’émergence du **collaborateur augmenté**, capable de s’intégrer dans un **réseau décentralisé de type Agentic Mesh**, où chaque agent peut coopérer, s’adapter et évoluer avec le système.

---

## 2. Terminologie

- **Agentic Mesh** : Réseau décentralisé d'agents intelligents interconnectés.
- **Pin's** : Unité d'exécution logique dans le protocole Pin's.
- **Factory d'agents** : Unité de déploiement et d'organisation des agents.
- **JSON typé** : Format JSON avec des types de données définis.
- **Raisonnement** : Logique ou action exécutée par un agent.

---

## 3. Format et Structure du Protocole Pin's

### 3.1 Langage Pin's

Le langage Pin’s repose sur un format JSON typé, permettant de structurer un raisonnement sous forme de blocs logiques, exécutables par des agents Digipair. Chaque Pin’s s’appuie sur une librairie (skill) et un élément fourni par cette librairie, qui détermine la structure attendue du raisonnement via ses propriétés.

### 3.2 Types de Raisonnements

Deux conventions de nommage permettent d’identifier rapidement l’intention d’usage d’un raisonnement :

- **action-** : Raisonnement exposé comme une action réutilisable par d'autres agents.
- **boost-** : Raisonnement exécutable dans le contexte conversationnel d’un chatbot.

### 3.3 JSON typé

Le format JSON typé permet de définir des structures de données avec des types spécifiques, assurant ainsi la cohérence et la validation des données échangées entre les agents.

---

## 4. Formes et Types d'Agents

### 4.1 Chatbots

Un agent de type chatbot autonome fonctionne comme une interface conversationnelle indépendante. Il peut interpréter les messages de l’utilisateur et exécuter des raisonnements de type `boost-`.

### 4.2 Actions réutilisables

Un agent peut proposer des actions unitaires réutilisables par d'autres agents ou services. Ces raisonnements sont nommés avec le préfixe `action-` et incluent une définition explicite des entrées attendues via le bloc `metadata.parameters`.

### 4.3 Raisonnements spécifiques

Le protocole Pin's permet la création de raisonnements exécutables dans des contextes particuliers grâce à l'extension par des librairies :

- **Webservices** : Appelables via HTTP.
- **Pages web** : Génération ou manipulation dynamique d'interface.
- **Déclencheurs IOT** : Exécution liée à des capteurs ou actionneurs connectés.
- **Programmation régulière** : Via des crons ou planifications internes.

---

## 5. Organisation des Répertoires

### 5.1 Structure des fichiers

Un agent standard est structuré comme suit :

```
mon-agent/
├── config.json
├── action-traitement-donnees.json
├── boost-analyse-demande.json
├── analyse-contextuelle.json
└── ...
```

### 5.2 Conventions de nommage

- Les fichiers de type `action-` ou `boost-` doivent respecter ce préfixe réservé.
- Tous les autres fichiers peuvent utiliser un nom libre (sauf `config.json`, `conversation.json`, `action-builder.json`, `action-instant.json`, `chat.json`, `history.json`, `metadata.json`, `notification.json` et `schema.json.json` qui sont réservés).
- Le nom doit être concis et refléter le rôle du raisonnement.

---

## 6. L'agent "common"

L’agent `common` joue un rôle fondamental en centralisant les raisonnements réutilisables de manière transversale par tous les autres agents. Il agit comme une bibliothèque partagée de blocs fonctionnels de bas niveau, permettant de factoriser les actions génériques et de garantir une cohérence dans les comportements de base.

---

## 7. Configuration (fichier config.json)

Le fichier `config.json` contient toutes les métadonnées nécessaires à l'identification de l’agent, ses dépendances techniques, ainsi que les variables partagées et secrets internes.

### Métadonnées

- `digipair` : Identifiant unique de l’agent.
- `name` : Nom affiché.
- `description` : Description fonctionnelle.
- `metadata` : Options graphiques (couleur principale, avatar, etc.).

### Librairies

Le bloc `libraries` référence l’ensemble des librairies Pin’s (ou skills) utilisées dans les raisonnements de l’agent. Chaque librairie est typée et versionnée.

### Variables et privates

- `variables` : Constantes partagées entre tous les Pin’s de l’agent.
- `privates` : Éléments sensibles non exposés à l’utilisateur final.

---

## 8. Factory d'agents

La **factory d'agents** est une unité de déploiement, d'organisation et d'exposition des agents dans l'écosystème Digipair. Elle permet de regrouper plusieurs agents sous une logique commune et de les rendre accessibles via une interface cohérente.

### Composition

Une factory est constituée :

- D’un ou plusieurs répertoires d’agents.
- D’une configuration de l’environnement d’exécution (droits, contexte, sécurité).
- D’un orchestrateur permettant de router les requêtes entrantes vers le bon agent ou raisonnement.

### Exposition

L'exposition des agents n'est pas définie par la RFC elle-même, mais laissée à la discrétion des implémenteurs ou de l'infrastructure d'accueil. La RFC spécifie uniquement le format et l'organisation des agents.

---

## 9. Librairies et Schémas OpenAPI

Les librairies, appelées **skills**, sont des modules fonctionnels versionnés, embarquant un ensemble d’éléments réutilisables dans les raisonnements Pin’s : actions, déclencheurs, transformateurs, ou encore composants d’interface.

### `schema.json`

Le fichier `schema.json` associé à une librairie décrit :

- Les paramètres attendus par chaque élément.
- Les types de données manipulés.
- Les déclencheurs ou comportements associés (ex : `onMessage`, `onOpen` pour des websockets).

### Description des éléments

Les éléments d’une librairie sont typiquement regroupés par nature :

- **skills** : Actions élémentaires (ex: `setVariable`, `invoke`).
- **components** : Structures de données partagées (ex: CV, utilisateur, événement).
- **scenes** : Points d’entrée déclencheurs d’un raisonnement, placés en tête d’un fichier Pin’s.

---

## 10. Notions fondamentales

### Pin's (action)

Un **Pin's** est une unité d'exécution logique. Chaque Pin's correspond à un appel d'élément (`element`) d'une librairie (`library`) avec ses propriétés spécifiques. Il constitue la brique de base d’un raisonnement.

### Component

Un **component** est une structure de données typée, utilisée comme entrée, sortie ou intermédiaire dans un raisonnement. Elle est décrite dans le `schema.json` d’une librairie, permettant d’assurer la compatibilité des données manipulées.

### Scene

Une **scene** est un Pin’s particulier servant de **point d’entrée principal** d’un raisonnement. Elle représente le déclencheur logique ou conversationnel initial, à partir duquel une chaîne d’actions sera exécutée.

---

## 11. Formats Low-code Supportés

### Handlebars

Handlebars est un moteur de template textuel permettant d’insérer dynamiquement des valeurs de variables dans des chaînes. Il est utilisé par défaut dans les blocs de type texte pour générer du texte à partir du contexte courant ou d’une entrée structurée.

### FEEL (Friendly Enough Expression Language)

FEEL est un langage d'expression lisible par des non-développeurs. Il permet d’écrire des conditions ou des expressions logiques de manière intuitive et typée, sans avoir besoin d’un langage de programmation classique. Il est activé dans les blocs de type texte lorsque le texte est préfixé par "EVALUATE:".

---

## 12. Conditions et Logique Dynamique

### `if`

Le bloc `if` permet de déclencher l’exécution d’un ou plusieurs Pin’s uniquement si une condition est vraie. Il est utile pour filtrer des cas spécifiques ou gérer des chemins conditionnels dans un raisonnement.

### `each`

Le bloc `each` permet de répéter un sous-ensemble de Pin’s pour chaque élément d’une liste. Il est généralement utilisé pour itérer sur une collection de données (utilisateurs, produits, lignes, etc.).

### Comportements particuliers

Lorsque les conditions `if` et `each` sont toutes les deux présentes dans la section condition, la condition `if` est vérifiée pour chacun des éléments de la liste `each`.

---

## 13. Indépendance du Transport

Le protocole Pin’s a été conçu de manière agnostique vis-à-vis des mécanismes de transport ou de communication. Il définit exclusivement la structure des raisonnements, leur organisation, leur typage et leurs points d’entrée — sans imposer un protocole de diffusion, de message ou d’exécution.

### Objectifs de cette indépendance

- Permettre une exécution sur divers supports (navigateur, serveur, IOT, etc.).
- Favoriser l’interopérabilité avec des systèmes existants (HTTP, WebSocket, PubSub, etc.).
- Découpler la logique métier des contraintes d’implémentation ou de déploiement.

### Rôle des librairies d’implémentation

L’intégration aux protocoles de transport est assurée par des **librairies spécialisées**, qui encapsulent les détails d’exécution. Par exemple :

- Une librairie `skill-http` permet de transformer un raisonnement Pin’s en endpoint HTTP.
- Une librairie `skill-sse` permet d'écouter ou d’envoyer des messages en temps réel via WebSocket.
- Une librairie `skill-cron` permet d’exécuter un raisonnement de manière planifiée.

### Rôle de la factory

La **factory** agit comme couche d’orchestration entre les agents et les canaux de transport. Elle :

- Détecte les types de raisonnements (ex : `boost-`, `action-`, scènes déclencheuses).
- Configure dynamiquement les points d’entrée associés.
- Applique les stratégies de routage, de sécurité et de contexte.
- Connecte les Pin’s aux librairies de transport adéquates.

---

## 14. Alias et Redirections

Le protocole Pin's intègre une mécanique d’**alias** permettant de référencer dynamiquement des librairies ou des agents, et de rediriger certains usages vers d'autres implémentations ou extensions. Cette fonctionnalité offre une couche d’abstraction souple, particulièrement utile dans un environnement distribué ou hybride.

### Syntaxe de l'alias

Un alias suit la nomenclature suivante dans un Pin’s :

```json
[alias]:[nom]
```

### Exemple de déclaration d'alias

```js
config.set('ALIAS', [
  {
    name: 'digipair',
    library: '@digipair/skill-factory',
    element: 'start',
    properties: {
      digipair: '{{settings.library}}',
      reasoning: 'action-{{settings.element}}',
      version: '{{settings.version}}',
      body: 'EVALUATE:settings.properties'
    }
  }
]);
```

### Exemple d'utilisation d'alias

```json
{
  "library": "digipair:extract-text",
  "element": "fromPdf",
  "properties": { ... }
}
```

### Alias obligatoires

Le protocole définit un alias obligatoire :

- **digipair** : Point d’accès générique vers des agents locaux ou distants de l'agentic mesh. Il sert de canal standardisé pour invoquer un raisonnement à travers la factory.

Des alias personnalisés peuvent être ajoutés par chaque factory pour introduire des surcouches métier, techniques ou spécifiques à un environnement donné.

---

## 15. Journalisation et Traçabilité

Dans un environnement agentic mesh, la traçabilité des décisions prises par les agents est essentielle pour garantir l’auditabilité, la compréhension métier, le débogage et la **re-jouabilité** des raisonnements.

Le protocole Pin's n'impose pas de moteur de logs spécifique, mais **recommande fortement** l’implémentation d’un système de journalisation centralisé au niveau de la **factory**. Celui-ci permet d’enregistrer les informations de contexte, les décisions prises, et les erreurs rencontrées lors de l’exécution de chaque raisonnement.

### Données obligatoires à transmettre au logger

Le moteur d’interprétation Pin’s doit fournir les données suivantes au système de log :

- `level` *(string)* : Le niveau de log (`INFO`, `DEBUG`, `ERROR`, etc.).
- `path` *(string)* : L'identifiant de l'étape ou de l'élément Pin's concerné (ex. : `pins[2].element`).
- `message` *(string)* : Un message lisible décrivant l'action ou l'événement.
- `context` *(any)* : Le contexte d'exécution (informations sur l'agent, la requête, les variables, etc.).
- `data` *(any, optionnel)* : Des données supplémentaires pertinentes (résultats, entrées, erreurs, etc.).

### Exemple de configuration de logger

```js
config.set('LOGGER', (level: string, path: string, message: string, context: any, data?: any) => {
  const time = new Date().toISOString();

  switch (level) {
    case 'INFO':
      console.log(`[${time}][${context.request.digipair}@${context.request.reasoning}][${path}] ${message}`);
      break;
    case 'ERROR':
      console.error(`[${time}][${context.request.digipair}@${context.request.reasoning}][${path}] ${message}`, data);
      break;
    case 'DEBUG':
      console.debug(`[${time}][${context.request.digipair}@${context.request.reasoning}][${path}] ${message}`, data);
      break;
    default:
      console.log(`[${time}][${context.request.digipair}@${context.request.reasoning}][${path}] ${message}`);
      break;
  }
});
```

### Objectifs de la journalisation

- **Traçabilité complète** : Chaque exécution est identifiée par agent, raisonnement et étape.
- **Re-jouabilité** : Possibilité de reproduire un raisonnement dans un autre contexte à partir des données enregistrées.
- **Compréhension métier** : Chaque décision est explicite, explicable, et documentée.
- **Débogage assisté** : Les développeurs peuvent retracer les erreurs et comportements inattendus.

---

## 16. Raisonnements Spécifiques

Le protocole Pin's introduit des types spécifiques de raisonnements pour faciliter les interactions en langage naturel avec les agents et permettre une génération dynamique de code Pin's. Ces raisonnements spécialisés couvrent trois cas d’usage majeurs :

### Raisonnement `conversation`

Ce raisonnement constitue un **point d’entrée conversationnel** destiné aux utilisateurs finaux. Il permet à l'utilisateur d’échanger directement avec l’agent en langage naturel via une interface dédiée (chatbot).

### Raisonnement `instant`

Ce type de raisonnement constitue un **point d’entrée immédiat** pour qu’un autre agent puisse exécuter une action ou interroger cet agent en langage naturel. Le fonctionnement est similaire au raisonnement `conversation`, mais destiné spécifiquement aux interactions inter-agents.

### Raisonnement `builder`

Le raisonnement `builder` permet à un agent tiers de **demander dynamiquement le code Pin's** correspondant à une action ou à une récupération d'information en langage naturel, afin de l’intégrer automatiquement dans ses propres raisonnements.

---

## 17. Considérations de Sécurité

Le protocole Pin's doit inclure des considérations de sécurité pour garantir l'intégrité, la confidentialité et la disponibilité des données et des services. Les implémenteurs doivent s'assurer que les agents et les librairies respectent les meilleures pratiques de sécurité, y compris l'authentification, l'autorisation et le chiffrement des données sensibles.

---

## 18. Conclusion

Le protocole Pin’s constitue une base solide et extensible pour la conception de raisonnements d’agents intelligents dans un contexte distribué. Grâce à sa structure modulaire, sa typisation explicite et son indépendance vis-à-vis des couches de transport, il permet une grande réutilisabilité des composants, tout en garantissant clarté, traçabilité et interopérabilité.

Pensé pour accompagner l’émergence du collaborateur augmenté, Pin’s favorise l’autonomie des équipes, l’agilité des systèmes et l’intégration fluide dans des environnements hybrides mêlant humains, IA et objets connectés.

---

## 19. Références normatives

Cette section doit inclure les références normatives pertinentes pour le protocole Pin's, telles que les spécifications OpenAPI, les standards de sécurité, et les normes de format de données.
