# @digipair/skill-llm

**Version:** 0.1.0  
**Summary:** Gestion de modèles LLM  
**Description:** La compétence @digipair/skill-llm est une compétence qui permet d'utiliser un modèle de langage à grande échelle.  
**Icon:** 🚀

## Table des matières

- [Fonctions](#fonctions)
  - [invoke](#invoke)
  - [reasoningStep](#reasoningStep)
  - [basic](#basic)
  - [vision](#vision)
  - [summarization](#summarization)

## Fonctions

### invoke

Raisonnement LLM

#### Paramètres

| Nom      | Type   | Requis | Description |
|----------|--------|--------|-------------|
| execute  | array  | Oui    | Exécuter |
| input    | object | Non    | Données d'entrée |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "invoke",
  "properties": {
    "execute": [
      // Contenu de https://schemas.digipair.ai/pinsSettings
    ],
    "input": {
      // Données d'entrée
    }
  }
}
```

### reasoningStep

Etape de raisonnement

#### Paramètres

| Nom        | Type  | Requis | Description |
|------------|-------|--------|-------------|
| attributes | array | Oui    | Données |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "reasoningStep",
  "properties": {
    "attributes": [
      {
        "name": "exampleName",
        "value": [
          // Contenu de https://schemas.digipair.ai/pinsSettings
        ]
      }
    ]
  }
}
```

### basic

Générer

Génération de texte via un model LLM

#### Paramètres

| Nom    | Type   | Requis | Description |
|--------|--------|--------|-------------|
| prompt | string | Oui    | Prompt à exécuter via le model LLM |
| model  | array  | Non    | Modèle LLM à charger |
| schema | object | Non    | Schema JSON des données à extraire |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "basic",
  "properties": {
    "prompt": "Votre prompt ici",
    "model": [
      // Contenu de https://schemas.digipair.ai/pinsSettings
    ],
    "schema": {
      // Schema JSON des données à extraire
    }
  }
}
```

### vision

Voir

Utiliser un model LLM qui sait lire des images et du texte en entrée

#### Paramètres

| Nom    | Type   | Requis | Description |
|--------|--------|--------|-------------|
| model  | array  | Non    | Modèle Vision à charger |
| prompt | string | Oui    | Prompt à exécuter sur le modèle LLM |
| image  | string | Oui    | Image en base 64 |
| schema | object | Non    | Schema JSON des données à extraire |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "vision",
  "properties": {
    "model": [
      // Contenu de https://schemas.digipair.ai/pinsSettings
    ],
    "prompt": "Votre prompt ici",
    "image": "base64_encoded_image",
    "schema": {
      // Schema JSON des données à extraire
    }
  }
}
```

### summarization

Résumer un texte

Résumer un texte via un model LLM

#### Paramètres

| Nom                    | Type    | Requis | Description |
|------------------------|---------|--------|-------------|
| model                  | array   | Non    | Modèle LLM à charger |
| chunkSize              | number  | Non    | Taille des morceaux de texte |
| type                   | string  | Non    | Algorithme à utiliser pour résumer le texte |
| prompt                 | string  | Oui    | Texte à résumer |
| combineMapPrompt       | string  | Non    | combineMapPrompt |
| combinePrompt          | string  | Non    | combinePrompt |
| returnIntermediateSteps| boolean | Non    | returnIntermediateSteps |
| refinePrompt           | string  | Non    | refinePrompt |
| questionPrompt         | string  | Non    | questionPrompt |
| verbose                | boolean | Non    | Ajoute des logs de debug |

#### Exemple

```json
{
  "library": "@digipair/skill-llm",
  "element": "summarization",
  "properties": {
    "model": [
      // Contenu de https://schemas.digipair.ai/pinsSettings
    ],
    "chunkSize": 1000,
    "type": "algorithme",
    "prompt": "Texte à résumer",
    "combineMapPrompt": "Votre combineMapPrompt ici",
    "combinePrompt": "Votre combinePrompt ici",
    "returnIntermediateSteps": true,
    "refinePrompt": "Votre refinePrompt ici",
    "questionPrompt": "Votre questionPrompt ici",
    "verbose": true
  }
}
```

## Notes

- Les fonctions `invoke`, `reasoningStep`, `basic`, `vision`, et `summarization` sont utilisées pour interagir avec des modèles de langage à grande échelle (LLM) pour diverses tâches telles que le raisonnement, la génération de texte, l'analyse d'images et la summarisation de texte.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.