# @digipair/skill-llm

**Version:** 0.1.0  
**Résumé:** Lanchain  
**Description:** La compétence `@digipair/skill-llm` permet l’utilisation d’un modèle de langage à grande échelle (LLM) pour la génération de texte, le raisonnement, la vision (analyse d’images et de texte), et la synthèse de texte.  
**Icône:** 🚀

---

## Table des matières

- [Fonctions](#fonctions)
  - [invoke](#invoke)
  - [reasoningStep](#reasoningstep)
  - [basic](#basic)
  - [vision](#vision)
  - [summarization](#summarization)
- [Notes](#notes)

---

## Fonctions

### invoke

Effectue un raisonnement LLM sur une séquence d’actions et des données d’entrée optionnelles.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| execute  | array   | Oui    | Liste d’actions à exécuter (pinsSettings).       |
| input    | object  | Non    | Données d’entrée optionnelles pour le raisonnement.|

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "invoke",
  "properties": {
    "execute": [
      // Liste d’objets pinsSettings
    ],
    "input": {
      // Données d’entrée optionnelles
    }
  }
}
```

---

### reasoningStep

Exécute une étape de raisonnement avec des attributs spécifiques.

#### Paramètres

| Nom        | Type   | Requis | Description                                 |
|------------|--------|--------|---------------------------------------------|
| attributes | array  | Oui    | Liste d’attributs de l’étape de raisonnement (voir ci-dessous). |

**Structure d’un attribut (`reasonningStepAttribute`):**

| Nom   | Type   | Requis | Description                |
|-------|--------|--------|----------------------------|
| name  | string | Oui    | Nom de l’attribut          |
| value | array  | Oui    | Valeur (pinsSettings)      |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "reasoningStep",
  "properties": {
    "attributes": [
      {
        "name": "exemple",
        "value": [
          // Liste d’objets pinsSettings
        ]
      }
    ]
  }
}
```

---

### basic

Génère du texte à partir d’un prompt via un modèle LLM.

#### Paramètres

| Nom     | Type    | Requis | Description                                         |
|---------|---------|--------|-----------------------------------------------------|
| prompt  | string  | Oui    | Prompt à exécuter via le modèle LLM                 |
| model   | array   | Non    | Modèle LLM à charger (pinsSettings)                 |
| schema  | object  | Non    | Schéma JSON des données à extraire                  |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "basic",
  "properties": {
    "prompt": "Explique la théorie de la relativité.",
    "model": [
      // Liste d’objets pinsSettings
    ],
    "schema": {
      // Schéma JSON optionnel
    }
  }
}
```

---

### vision

Utilise un modèle LLM capable d’analyser des images et du texte.

#### Paramètres

| Nom     | Type    | Requis | Description                                         |
|---------|---------|--------|-----------------------------------------------------|
| model   | array   | Non    | Modèle de vision à charger (pinsSettings)           |
| prompt  | string  | Oui    | Prompt à exécuter sur le modèle LLM                 |
| image   | string  | Oui    | Image encodée en base64                             |
| schema  | object  | Non    | Schéma JSON des données à extraire                  |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "vision",
  "properties": {
    "prompt": "Décris ce que tu vois sur l’image.",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "model": [
      // Liste d’objets pinsSettings
    ],
    "schema": {
      // Schéma JSON optionnel
    }
  }
}
```

---

### summarization

Résume un texte via un modèle LLM avec diverses options de configuration.

#### Paramètres

| Nom                    | Type     | Requis | Description                                         |
|------------------------|----------|--------|-----------------------------------------------------|
| model                  | array    | Non    | Modèle LLM à charger (pinsSettings)                 |
| chunkSize              | number   | Non    | Taille des segments de texte                        |
| type                   | string   | Non    | Algorithme de résumé à utiliser                     |
| prompt                 | string   | Oui    | Texte à résumer                                     |
| combineMapPrompt       | string   | Non    | Prompt de combinaison (map)                         |
| combinePrompt          | string   | Non    | Prompt de combinaison                               |
| returnIntermediateSteps| boolean  | Non    | Retourne les étapes intermédiaires                  |
| refinePrompt           | string   | Non    | Prompt de raffinement                               |
| questionPrompt         | string   | Non    | Prompt de question                                  |
| verbose                | boolean  | Non    | Active les logs de debug                            |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "summarization",
  "properties": {
    "prompt": "Voici un long texte à résumer...",
    "model": [
      // Liste d’objets pinsSettings
    ],
    "chunkSize": 500,
    "type": "map-reduce",
    "combineMapPrompt": "Résumé intermédiaire :",
    "combinePrompt": "Résumé final :",
    "returnIntermediateSteps": false,
    "refinePrompt": "Peux-tu améliorer ce résumé ?",
    "questionPrompt": "Quelles sont les idées principales ?",
    "verbose": true
  }
}
```

---

## Notes

- Les objets `pinsSettings` référencés dans les paramètres doivent suivre le schéma défini par [https://schemas.digipair.ai/pinsSettings](https://schemas.digipair.ai/pinsSettings).
- Les fonctions de cette librairie permettent d’exploiter la puissance des LLM pour des tâches variées : génération, raisonnement, vision, et synthèse.
- Pour chaque fonction, adaptez les paramètres selon vos besoins et le modèle LLM utilisé.
- Les champs optionnels peuvent être omis si non nécessaires.
- Pour la fonction `vision`, l’image doit être encodée en base64.

---

**Pour toute contribution ou question, consultez la documentation officielle ou ouvrez une issue sur le dépôt GitHub du projet.**