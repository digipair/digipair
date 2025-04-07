# 📚 Documentation simplifiée — Librairie `@digipair/engine`

## 🔍 Introduction

Le **Digipair Engine** est un moteur d'exécution du **langage Pin's**, défini dans la [RFC XXXX - Protocole Pin's](#), permettant l’exécution de raisonnements dynamiques à partir de structures JSON typées. Ce moteur est **agnostique au transport**, ce qui le rend compatible avec le frontend (navigateur), le backend (Node.js), ou l'exécution dans le DOM (HTML).

---

## ⚙️ Objectifs

- Exécuter des **Pin's** de manière récursive avec prise en charge de conditions (`if`, `each`).
- Gérer dynamiquement des **librairies** (skills), en local ou via CDN.
- Générer dynamiquement des **éléments HTML** avec événements liés.
- **Journaliser** l’exécution pour traçabilité et debuggage.
- Prendre en charge les **templates Handlebars** et les expressions **FEEL** via `feelin`.

---

## 🧱 Composants Principaux

### `PinsSettings`

Structure d’un Pin’s JSON typé :

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

## 🛠️ Fonctions Clés

### `applyTemplate(value, context)`
- Compile une chaîne Handlebars (`{{variable}}`) dans le contexte donné.
- Prend en charge les expressions `EVALUATE:` évaluées avec **feelin**.
- Prend en charge l'expression `NOEVAL:` pour retournée sans transformation

---

### `preparePinsSettings(settings, context)`
- Résout dynamiquement les propriétés et conditions d’un Pin’s en appliquant les templates.

---

### `executePinsList(pinsList, context, path = "root")`
- Exécute une liste séquentielle de Pin’s en transmettant le contexte précédent.
- Pour chaque bloc Pin’s :
  - Applique les alias (`digipair:...`)
  - Gère les conditions `if` et `each`
  - Charge dynamiquement la librairie et exécute `library[element](...)`


---

### `generateElementFromPins(pins, parent, context)`
- Génére dynamiquement des éléments HTML dans le DOM (compatible `a-` pour WebXR).
- Attache les événements (`click`, `submit`, etc.) aux éléments.

---

## 🧩 Gestion des Alias

Déclarer des redirections logiques via :

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

Utilisation dans un Pin’s :

```json
{
  "library": "digipair:extract-text",
  "element": "fromPdf",
  "properties": { ... }
}
```

---

## 🧾 Journalisation

Configure un logger personnalisé :

```ts
config.set('LOGGER', (level, path, message, context, data?) => {
  console.log(`[${level}] ${path}: ${message}`, data);
});
```

Les logs incluent :
- `level`: INFO / ERROR / DEBUG
- `path`: ex. `root[2]`
- `message`: description lisible
- `context`: variables d’exécution
- `data`: données d’entrée ou résultat

---

## 🌐 Exécution Hybride (Browser / Node.js)

- **Frontend** : Supporte les imports dynamiques via CDN (`jsdelivr`)
- **Backend** : Compatible Node.js (`require(...)`)
- **HTML** : Génération d’éléments, évènements, attributs dynamiques

---

## 🔧 Installation

### ➤ Utilisation côté **Frontend (navigateur)**

```html
<script type="module">
  import * as Digipair from 'https://cdn.jsdelivr.net/npm/@digipair/engine@latest/dist/index.esm.js';
</script>
```

### ➤ Utilisation côté **Backend (Node.js)**

```bash
npm install @digipair/engine
```

```ts
import * as Digipair from '@digipair/engine';
```

---

## ⚙️ Configuration initiale

Avant d’exécuter quoi que ce soit, configurez la base :

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

## 🔁 Exécuter un raisonnement Pin’s

### ➤ Exemple minimal

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

## 🧱 Utiliser `executePinsList`

Exécute une séquence d’actions :

```ts
await Digipair.executePinsList([
  { library: '@digipair/skill-debug', element: 'log', properties: { label: 'Début' } },
  { library: 'custom', element: 'fetchData', properties: { url: 'https://api.com/data' } }
], { config: { VERSIONS: { custom: '1.0.0' } } });
```

---

## 🧩 Générer du HTML automatiquement

### ➤ Exemple simple (dans une page)

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

## 🛠️ Astuces de templating

| Syntaxe | Description |
|--------|-------------|
| `{{variable}}` | Valeur interpolée via Handlebars |
| `EVALUATE:expression` | Expression FEEL (Friendly Enough Expression Language) |

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

## 🧠 Exemple complet

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

## 🧩 Bonnes pratiques

- Utilisez les `ALIAS` pour uniformiser les appels à des agents externes
- Préparez les `config.VERSIONS` pour charger les bonnes versions de librairies
- Utilisez `generateElementFromPins` pour une intégration dynamique dans le DOM
