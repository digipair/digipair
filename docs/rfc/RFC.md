# RFC - Protocole Pin's : Transformation de données par Agentic Mesh

## 1. Introduction

Le protocole **Pin's** (Digipair Agentic Mesh Information Protocol) a été conçu dès l'origine pour s'adapter à une grande diversité de cas d'usages, ainsi qu'aux évolutions rapides des besoins fonctionnels, des contraintes techniques et du matériel (hardware). Sa structure modulaire et typée, alliée à une faible dépendance vis-à-vis des technologies ou protocoles de transport, en fait un socle robuste et flexible pour la conception d’agents intelligents.

Pin's vise à fournir un **protocole fondation** pour l’émergence du **collaborateur augmenté**, capable de s’intégrer dans un **réseau décentralisé de type Agentic Mesh**, où chaque agent peut coopérer, s’adapter et évoluer avec le système.

## 2. Le langage Pin's

Le langage Pin’s repose sur un format JSON typé, permettant de structurer un raisonnement sous forme de blocs logiques, exécutables par des agents Digipair. Chaque Pin’s s’appuie sur une librairie (skill) et un élément fourni par cette librairie, qui détermine la structure attendue du raisonnement via ses propriétés.

### Format JSON

Le format d’un Pin’s dépend du `library` et de l’`element` invoqué. Ces derniers déterminent les `properties` nécessaires pour exécuter l’action ou la logique associée.

Les attributs `description` et `summary` sont utilisés uniquement pour les Pin’s de type **scene**, afin d’en faciliter la compréhension et la documentation humaine.

Le bloc `metadata.parameters` est utilisé uniquement dans les Pin’s de type **action** pour spécifier les paramètres attendus lors de leur appel par d’autres agents ou services.

### Types de raisonnements

Deux conventions de nommage permettent d’identifier rapidement l’intention d’usage d’un raisonnement :

- \`\` : Raisonnement exposé comme une **action réutilisable** par d'autres agents. Il spécifie ses entrées via `metadata.parameters`.
- \`\` : Raisonnement **exécutable dans le contexte conversationnel** d’un chatbot. Il peut contenir des interactions avec l’utilisateur ou l’environnement.

Cette nomenclature facilite l’automatisation, la réutilisation et l’orchestration des agents dans une factory ou un mesh d’agents intelligents.

- Format JSON
- Types de raisonnements : `action-`, `boost-`

## 3. Formes d'agents

Le protocole Pin’s permet de créer des agents aux formes variées selon leur contexte d’exécution, leurs capacités techniques et leur mode d’interaction avec les utilisateurs ou les autres agents. Cette flexibilité permet d’adapter les agents à une multitude de cas d’usage.

### Chatbot autonome

Un agent de type chatbot autonome fonctionne comme une interface conversationnelle indépendante. Il peut interpréter les messages de l’utilisateur et exécuter des raisonnements de type `boost-` ou `scene`, selon le contexte. Il est souvent utilisé pour automatiser un assistant virtuel ou une interface vocale.

### Chatbot intégré sur une page web

Dans ce cas, le chatbot s’intègre directement dans une application web et peut interagir avec le DOM (Document Object Model) de la page. Grâce à certaines librairies spécifiques, il peut lire, modifier ou écouter des éléments de l’interface utilisateur (formulaires, tableaux, boutons, etc.), ce qui en fait un agent particulièrement utile pour l’assistance intégrée ou le support client contextuel.

### Action exposée aux autres agents (type `action-`)

Un agent peut aussi proposer des actions unitaires réutilisables par d'autres agents ou services. Ces raisonnements sont nommés avec le préfixe `action-` et incluent une définition explicite des entrées attendues via le bloc `metadata.parameters`. Ces agents agissent comme des "compétences" injectables dans d'autres processus.

### Raisonnements spécifiques

Le protocole Pin's permet également la création de raisonnements exécutables dans des contextes particuliers grâce à l'extension par des librairies :

- **Webservices** : appelables via HTTP
- **Pages web** : génération ou manipulation dynamique d'interface
- **Déclencheurs IOT** : exécution liée à des capteurs ou actionneurs connectés
- **Programmation régulière** : via des crons ou planifications internes

Chaque extension est encapsulée dans une librairie et peut être combinée avec d'autres au sein d’un même agent.

- Chatbot autonome
- Chatbot intégré sur une page web (interaction DOM)
- Action exposée aux autres agents (type `action-`)
- Raisonnements spécifiques (webservices, pages web, déclencheurs IOT, etc.)

## 4. Organisation d'un répertoire d'agents

Chaque agent est défini dans un répertoire dédié contenant l'ensemble des éléments nécessaires à son exécution, sa configuration et son exposition dans la factory.

### Structure des fichiers

Un agent standard est structuré comme suit :

```
mon-agent/
├── config.json
├── action-traitement-donnees.json
├── boost-analyse-demande.json
├── analyse-contextuelle.json
└── ...
```

- `config.json` : configuration générale de l’agent (voir section 6), nom réservé
- `action-*.json` : fichiers de raisonnement de type action, appelables par d'autres agents
- `boost-*.json` : fichiers de raisonnement destinés à un usage conversationnel
- `*.json` : autres raisonnements internes ou spécifiques sans préfixe particulier

Une scène (`scene`) est un **type de Pin's** représentant le **point d’entrée principal** d’un raisonnement complexe, mais elle ne constitue pas un type de fichier indépendant : elle est définie comme un élément au sein d’un fichier Pin's.

### Convention de nommage

- Les fichiers de type `action-` ou `boost-` doivent respecter ce préfixe réservé
- Tous les autres fichiers peuvent utiliser un nom libre (sauf `config.json` qui est réservé)
- Le nom doit être concis et refléter le rôle du raisonnement

Cette organisation garantit lisibilité, maintenabilité et automatisation du déploiement des agents dans une factory ou un mesh d’agents intelligents.

- Les fichiers doivent commencer par un préfixe clair (`action-`, `boost-`, `scene-`, etc.)
- Le nom du fichier doit décrire le rôle ou la finalité du raisonnement de manière concise

Cette organisation garantit lisibilité, maintenabilité et automatisation du déploiement des agents dans une factory ou un mesh d’agents intelligents.

- Structure des fichiers
- Convention de nommage

## 5. Rôle de l'agent `common`

L’agent `common` joue un rôle fondamental dans l’écosystème Pin’s : il centralise les raisonnements réutilisables de manière transversale par tous les autres agents. Il agit comme une bibliothèque partagée de blocs fonctionnels de bas niveau, permettant de factoriser les actions génériques et de garantir une cohérence dans les comportements de base.

### Contenu typique de l’agent `common`

- Actions utilitaires : manipulation de variables, transformations de données, conditions logiques
- Intégrations transverses : notifications, logs, formats communs
- Pré/post-traitements partagés : initialisation de contexte, validation, nettoyage

### Objectif

L’objectif est de **réduire la duplication de logique** et d’**accélérer la construction de nouveaux agents** en fournissant un socle de raisonnements éprouvés, testés et versionnés. Les autres agents peuvent ainsi référencer les Pin’s de `common` comme des composants internes fiables.

### Utilisation

Un agent peut référencer une action définie dans `common` simplement en l’invoquant par son nom (`library: @digipair/common`, `element: mon-element`), ce qui permet une forte modularité du protocole Pin’s.

## 6. Fichier `config.json`

Le fichier `config.json` est au cœur de la configuration de chaque agent. Il contient toutes les métadonnées nécessaires à son identification, ses dépendances techniques, ainsi que les variables partagées et secrets internes.

### Métadonnées

Les champs suivants permettent de décrire l’agent et de personnaliser son apparence ou son intégration :

- `digipair` : identifiant unique de l’agent
- `name` : nom affiché
- `description` : description fonctionnelle
- `metadata` : options graphiques (couleur principale, avatar, etc.)

### Librairies

Le bloc `libraries` référence l’ensemble des librairies Pin’s (ou skills) utilisées dans les raisonnements de l’agent. Chaque librairie est typée et versionnée.

```json
"libraries": {
  "@digipair/skill-basic": "latest",
  "@digipair/skill-llm": "latest"
}
```

### Variables et privates

- `variables` : constantes partagées entre tous les Pin’s de l’agent (ex : noms de rôle, options standards)
- `privates` : éléments sensibles non exposés à l’utilisateur final (ex : modèles de document, clés API)

Ce fichier est strictement réservé et ne doit pas être utilisé comme Pin’s exécutable. Il joue un rôle fondamental dans l’intégration et la portabilité des agents.

- Métadonnées
- Variables et privates
- Librairies

## 7. La factory d'agents

La **factory d'agents** est une unité de déploiement, d'organisation et d'exposition des agents dans l'écosystème Digipair. Elle permet de regrouper plusieurs agents sous une logique commune et de les rendre accessibles via une interface cohérente.

### Composition

Une factory est constituée :

- d’un ou plusieurs répertoires d’agents
- d’une configuration de l’environnement d’exécution (droits, contexte, sécurité)
- d’un orchestrateur permettant de router les requêtes entrantes vers le bon agent ou raisonnement

Les agents d’une factory peuvent partager certaines ressources (`common`, variables d’environnement, logs, etc.) et collaborer entre eux.

### Exposition

L'exposition des agents n'est pas définie par la RFC elle-même, mais laissée à la discrétion des implémenteurs ou de l'infrastructure d'accueil. La RFC spécifie uniquement le format et l'organisation des agents.

Par convention, les factories peuvent exposer leurs agents selon différents canaux :

- API HTTP ou WebSocket
- Interface utilisateur intégrée (UI web ou widget chatbot)
- Connecteurs externes (Slack, Teams, API tierces)

L’organisation en factory permet également de gérer :

- les droits d'accès par rôle ou utilisateur
- les logs centralisés
- la supervision des exécutions

Chaque factory est conçue pour être portable, versionnable et compatible avec des systèmes distribués, ce qui favorise le déploiement en réseau agentic mesh.

- Composition
- Exposition

## 8. Librairies et schémas OpenAPI

Les librairies, appelées **skills**, sont des modules fonctionnels versionnés, embarquant un ensemble d’éléments réutilisables dans les raisonnements Pin’s : actions, déclencheurs, transformateurs, ou encore composants d’interface.

Chaque skill expose :

- des **éléments** identifiés par `element` dans les fichiers Pin’s
- un **schéma JSON** de description basé sur OpenAPI, permettant d’en valider les propriétés, types, et usages

### `schema.json`

Le fichier `schema.json` associé à une librairie décrit :

- les paramètres attendus par chaque élément
- les types de données manipulés
- les déclencheurs ou comportements associés (ex : `onMessage`, `onOpen` pour des websockets)

### Description des éléments

Les éléments d’une librairie sont typiquement regroupés par nature :

- **skills** : actions élémentaires (ex: `setVariable`, `invoke`)
- **components** : structures de données partagées (ex: CV, utilisateur, événement)
- **scenes** : points d’entrée déclencheurs d’un raisonnement, placés en tête d’un fichier Pin’s

Ces schémas assurent l’interopérabilité, la validation automatique et la documentation des comportements, tout en permettant aux outils d’analyse de comprendre le contenu et la structure d’un agent.

- `schema.json`
- Description des `skills`, `components`, `scenes`

## 9. Notions fondamentales

Le protocole Pin's repose sur plusieurs notions clés qui structurent la manière dont les agents manipulent, transforment et exposent les données dans un raisonnement.

### Pin's (action)

Un **Pin's** est une unité d'exécution logique. Chaque Pin's correspond à un appel d'élément (`element`) d'une librairie (`library`) avec ses propriétés spécifiques. Il constitue la brique de base d’un raisonnement.

### Component

Un **component** est une structure de données typée, utilisée comme entrée, sortie ou intermédiaire dans un raisonnement. Elle est décrite dans le `schema.json` d’une librairie, permettant d’assurer la compatibilité des données manipulées.

### Scene

Une **scene** est un Pin’s particulier servant de **point d’entrée principal** d’un raisonnement. Elle représente le déclencheur logique ou conversationnel initial, à partir duquel une chaîne d’actions sera exécutée.

Les scenes sont particulièrement utiles dans les agents de type `boost` ou dans les intégrations complexes (ex : déclenchement suite à un événement IOT, appel d’API, interaction utilisateur, etc.).

- Pin's (action)
- Component
- Scene

## 10. Formats low-code supportés

Pour permettre une plus grande expressivité dans les transformations de données, plusieurs formats low-code sont supportés dans les propriétés des éléments Pin’s.

### Handlebars

Handlebars est un moteur de template textuel permettant d’insérer dynamiquement des valeurs de variables dans des chaînes. Il est utilisé dans de nombreux éléments pour générer du texte à partir du contexte courant ou d’une entrée structurée.

Exemple :

```handlebars
Bonjour {{user.firstname}}, votre commande {{order.id}} est prête.
```

### FEEL (Friendly Enough Expression Language)

FEEL est un langage d'expression lisible par des non-développeurs. Il permet d’écrire des conditions ou des expressions logiques de manière intuitive et typée, sans avoir besoin d’un langage de programmation classique.

Il est souvent utilisé dans :

- les conditions `if` d’un raisonnement
- les expressions de mapping ou de filtrage

Exemple :

```feel
user.age > 18 and country = "FR"
```

Ces deux formats peuvent être combinés dans un même raisonnement pour produire des logiques puissantes tout en restant accessibles aux utilisateurs métier. - Handlebars - FEEL

## 11. Conditions dans les Pin's

Le protocole Pin’s permet l’usage de blocs de conditions pour rendre les raisonnements dynamiques, adaptables et pilotés par les données. Ces conditions s’expriment en FEEL (Friendly Enough Expression Language) et permettent de contrôler l’exécution des blocs d’action.

### `if`

Le bloc `if` permet de déclencher l’exécution d’un ou plusieurs Pin’s uniquement si une condition est vraie. Il est utile pour filtrer des cas spécifiques ou gérer des chemins conditionnels dans un raisonnement.

Exemple :

```json
{
  "if": "user.age > 18",
  "pins": [ ... ]
}
```

### `each`

Le bloc `each` permet de répéter un sous-ensemble de Pin’s pour chaque élément d’une liste. Il est généralement utilisé pour itérer sur une collection de données (utilisateurs, produits, lignes, etc.).

Exemple :

```json
{
  "each": "order.items",
  "item": "product",
  "pins": [ ... ]
}
```

Ces blocs permettent de composer des raisonnements complexes avec des logiques conditionnelles et des boucles, tout en restant lisibles et accessibles à des utilisateurs non développeurs. - `if` - `each` 

## 12. Indépendance vis-à-vis des protocoles de transport

Le protocole Pin’s a été conçu de manière agnostique vis-à-vis des mécanismes de transport ou de communication. Il définit exclusivement la structure des raisonnements, leur organisation, leur typage et leurs points d’entrée — sans imposer un protocole de diffusion, de message ou d’exécution.

### Objectifs de cette indépendance

- Permettre une exécution sur divers supports (navigateur, serveur, IOT, etc.)
- Favoriser l’interopérabilité avec des systèmes existants (HTTP, WebSocket, PubSub, etc.)
- Découpler la logique métier des contraintes d’implémentation ou de déploiement

### Rôle des librairies d’implémentation

L’intégration aux protocoles de transport est assurée par des **librairies spécialisées**, qui encapsulent les détails d’exécution. Par exemple :

- Une librairie `skill-http` permet de transformer un raisonnement Pin’s en endpoint HTTP
- Une librairie `skill-sse` permet d'écouter ou d’envoyer des messages en temps réel via WebSocket
- Une librairie `skill-cron` permet d’exécuter un raisonnement de manière planifiée

### Rôle de la factory

La **factory** agit comme couche d’orchestration entre les agents et les canaux de transport. Elle :

- détecte les types de raisonnements (ex : `boost-`, `action-`, scènes déclencheuses)
- configure dynamiquement les points d’entrée associés
- applique les stratégies de routage, de sécurité et de contexte
- connecte les Pin’s aux librairies de transport adéquates

Ainsi, la factory permet à un raisonnement Pin’s d’être exposé via différents canaux sans modification de sa logique, assurant portabilité, réutilisabilité et cohérence au sein d’un agentic mesh.



## Conclusion

Le protocole Pin’s constitue une base solide et extensible pour la conception de raisonnements d’agents intelligents dans un contexte distribué. Grâce à sa structure modulaire, sa typisation explicite et son indépendance vis-à-vis des couches de transport, il permet une grande réutilisabilité des composants, tout en garantissant clarté, traçabilité et interopérabilité.



Pensé pour accompagner l’émergence du collaborateur augmenté, Pin’s favorise l’autonomie des équipes, l’agilité des systèmes et l’intégration fluide dans des environnements hybrides mêlant humains, IA et objets connectés.



Cette RFC a pour vocation d’offrir un cadre de référence stable pour tous les acteurs souhaitant contribuer à l’écosystème Digipair, construire des agents compatibles ou développer des librairies spécialisées intégrables dans l’agentic mesh.





