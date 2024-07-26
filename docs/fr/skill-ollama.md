# @digipair/skill-ollama

**Version:** 0.1.0  
**Summary:** Communication avec un serveur Ollama  
**Description:** Exécution des models LLM via un serveur Ollama.  
**Icon:** 🚀

## Table des matières

- [Fonctions](#fonctions)
  - [model](#model)
  - [embeddings](#embeddings)

## Fonctions

### model

Exécution d'un modèle LLM depuis un serveur Ollama.

#### Paramètres

| Nom         | Type    | Requis | Description                                |
|-------------|---------|--------|--------------------------------------------|
| model       | string  | Oui    | Nom du model LLM à charger                 |
| temperature | number  | Non    | Temperature du model LLM                   |
| baseUrl     | string  | Non    | Adresse du serveur Ollama                  |
| format      | string  | Non    | Format de sortie des données générées par le model |

#### Exemple

```json
{
  "library": "@digipair/skill-ollama",
  "element": "model",
  "properties": {
    "model": "nom_du_model",
    "temperature": 0.7,
    "baseUrl": "http://adresse_du_serveur_ollama",
    "format": "json"
  }
}
```

### embeddings

Exécution d'un modèle d'embeddings depuis un serveur Ollama.

#### Paramètres

| Nom         | Type    | Requis | Description                                |
|-------------|---------|--------|--------------------------------------------|
| model       | string  | Oui    | Nom du model d'embeddings à charger        |
| temperature | number  | Non    | Temperature du model d'embeddings          |
| baseUrl     | string  | Non    | Adresse du serveur Ollama                  |

#### Exemple

```json
{
  "library": "@digipair/skill-ollama",
  "element": "embeddings",
  "properties": {
    "model": "nom_du_model",
    "temperature": 0.5,
    "baseUrl": "http://adresse_du_serveur_ollama"
  }
}
```

## Notes

- Les fonctions `model` et `embeddings` sont utilisées pour exécuter respectivement des modèles LLM et des modèles d'embeddings via un serveur Ollama.
- Assurez-vous de fournir un nom de modèle valide pour le paramètre `model`.
- Les paramètres `temperature`, `baseUrl`, et `format` sont optionnels et peuvent être ajustés selon les besoins spécifiques de l'exécution du modèle.