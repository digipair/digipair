# 📚 Documentation simplifiée — `@digipair/engine`

## 🔍 Introduction

Le **Digipair Engine** est un moteur d'exécution du langage **Pin's**, défini dans la *RFC XXXX - Protocole Pin's*. Il permet l’exécution de raisonnements dynamiques à partir de structures JSON typées.

Agnostique au transport, il peut être utilisé :

* côté **frontend** (navigateur),
* côté **backend** (Node.js),
* ou dans le **DOM** (HTML).

---

## ⚙ Objectifs

* Exécution récursive de Pin’s avec conditions (`if`, `each`)
* Gestion dynamique de librairies (skills) locales ou distantes (CDN)
* Génération dynamique d’éléments HTML + gestion des événements
* Journalisation pour la traçabilité et le debug
* Support des templates Handlebars et des expressions **FEEL** via `feelin`

---

## 🧱 Composants Principaux

### `PinsSettings`

```ts
interface PinsSettings {
  library: string;
  element: string;
  properties?: { [key: string]: any };
  conditions?: { if?: boolean; each?: any[] };
  pins?: PinsSettings[];
  events?: { [event: string]: PinsSettings[] };
}
```

---

## 🛠 Fonctions Clés

### `applyTemplate(value, context)`

* Compile une chaîne Handlebars (`{{variable}}`) dans un contexte
* Gère :

  * `EVALUATE:` avec `feelin`
  * `NOEVAL:` pour retour brut

### `preparePinsSettings(settings, context)`

* Applique dynamiquement les templates et conditions d’un Pin’s

### `executePinsList(pinsList, context, path = "root")`

* Exécute une séquence de Pin’s avec :

  * Résolution d’alias (`digipair:...`)
  * Conditions `if` et `each`
  * Chargement dynamique des librairies

### `generateElementFromPins(pins, parent, context)`

* Génère des éléments HTML dynamiques (DOM / WebXR)
* Attache les événements (`click`, `submit`, etc.)

---

## 🧩 Gestion des Alias

### Déclaration

```ts
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

### Utilisation

```json
{
  "library": "digipair:extract-text",
  "element": "fromPdf",
  "properties": { ... }
}
```

---

## 🧾 Journalisation

### Exemple de configuration

```ts
config.set('LOGGER', (level, path, message, context, data?) => {
  console.log(`[${level}] ${path}: ${message}`, data);
});
```

Les logs incluent :

* `level` : INFO / ERROR / DEBUG
* `path` : exemple `root[2]`
* `message` : description lisible
* `context` : variables d’exécution
* `data` : entrées / sorties

---

## 🌐 Exécution Hybride

| Environnement | Particularité                                    |
| ------------- | ------------------------------------------------ |
| **Frontend**  | Import dynamique via CDN (`jsdelivr`)            |
| **Backend**   | Support Node.js (`require`, `import`)            |
| **HTML**      | Génération DOM, événements, attributs dynamiques |

---

## 🔧 Installation

### Côté **Frontend**

```html
<script type="module">
  import * as Digipair from 'https://cdn.jsdelivr.net/npm/@digipair/engine@latest/dist/index.esm.js';
</script>
```

### Côté **Backend**

```bash
npm install @digipair/engine
```

```ts
import * as Digipair from '@digipair/engine';
```

---

## ⚙ Configuration Initiale

```ts
Digipair.config.set('BASE_URL', 'https://cdn.jsdelivr.net/npm');
Digipair.config.set('LOGGER', (level, path, message, context, data) => {
  console.log(`[${level}] ${path}: ${message}`, data);
});
Digipair.config.set('ALIAS', [
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

---

## 🔁 Exécuter un Raisonnement Pin’s

### Exemple minimal

```ts
const settings = {
  library: 'web',
  element: 'consoleLog',
  properties: {
    message: 'Bonjour {{user.name}} !'
  }
};

await Digipair.executePins(settings, {
  user: { name: 'Alice' }
});
```

---

## 🧱 `executePinsList`

```ts
await Digipair.executePinsList([
  {
    library: '@digipair/skill-debug',
    element: 'log',
    properties: { label: 'Début' }
  },
  {
    library: 'custom',
    element: 'fetchData',
    properties: { url: 'https://api.com/data' }
  }
], {
  config: { VERSIONS: { custom: '1.0.0' } }
});
```

---

## 🧩 Générer du HTML Automatiquement

### Exemple

```ts
const pin = {
  library: 'web',
  element: 'button',
  properties: {
    textContent: 'Cliquez ici',
    id: 'btn'
  },
  events: {
    click: [
      {
        library: '@digipair/skill-web-debug',
        element: 'log',
        properties: {
          message: 'EVALUATE:"Clicked at " + getTime(now())'
        }
      }
    ]
  }
};

await Digipair.generateElementFromPins(pin, document.body, {});
```

---

## 🛠 Astuces de Templating

| Syntaxe        | Description                   |
| -------------- | ----------------------------- |
| `{{variable}}` | Valeur Handlebars interpolée  |
| `EVALUATE:`    | Expression évaluée via FEEL   |
| `NOEVAL:`      | Chaîne retournée telle quelle |

---

## 🔍 Utiliser `each` et `if`

```json
{
  "library": "web",
  "element": "div",
  "conditions": {
    "each": [1, 2, 3],
    "if": "EVALUATE:item % 2 === 1"
  },
  "properties": {
    "textContent": "EVALUATE:\"Item: \" + item"
  }
}
```

Résultat : Affiche uniquement les éléments impairs (1 et 3).

---

## 🧠 Exemple Complet

```ts
const pins = [
  {
    library: '@digipair/skill-debug',
    element: 'log',
    properties: {
      label: 'Bienvenue {{user}}'
    }
  }
];

await Digipair.executePinsList(pins, {
  user: 'Jean'
});
```

---

## ✅ Bonnes Pratiques

* Utilisez les **ALIAS** pour standardiser les appels
* Préparez les `config.VERSIONS` pour garantir la compatibilité des librairies
* Intégrez dans le DOM via `generateElementFromPins` pour des expériences dynamiques