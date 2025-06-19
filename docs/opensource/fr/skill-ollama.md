# @digipair/skill-ollama

**Version:** 0.1.0  
**Résumé:** Communication avec un serveur Ollama  
**Description:** Exécution de modèles LLM via un serveur Ollama.  
**Icône:** 🚀

## Table des matières

- [Fonctions](#fonctions)
  - [model](#model)
  - [embeddings](#embeddings)

---

## Fonctions

### model

Exécute un modèle LLM depuis un serveur Ollama.

#### Paramètres

| Nom         | Type    | Requis | Description                                              |
|-------------|---------|--------|----------------------------------------------------------|
| model       | string  | Oui    | Nom du modèle LLM à charger                              |
| temperature | number  | Non    | Température du modèle LLM                                |
| baseUrl     | string  | Non    | Adresse du serveur Ollama                                |
| format      | string  | Non    | Format de sortie des données générées par le modèle      |

#### Exemple d'utilisation

```js
const result = await model({
  model: "llama2",
  temperature: 0.7,
  baseUrl: "http://localhost:11434",
  format: "json"
});
```

#### Exemple d'appel JSON

```json
{
  "library": "@digipair/skill-ollama",
  "element": "model",
  "properties": {
    "model": "llama2",
    "temperature": 0.7,
    "baseUrl": "http://localhost:11434",
    "format": "json"
  }
}
```

---

### embeddings

Exécute un modèle d'embeddings depuis un serveur Ollama.

#### Paramètres

| Nom         | Type    | Requis | Description                                              |
|-------------|---------|--------|----------------------------------------------------------|
| model       | string  | Oui    | Nom du modèle d'embeddings à charger                     |
| temperature | number  | Non    | Température du modèle d'embeddings                       |
| baseUrl     | string  | Non    | Adresse du serveur Ollama                                |

#### Exemple d'utilisation

```js
const result = await embeddings({
  model: "nomic-embed-text",
  temperature: 0.5,
  baseUrl: "http://localhost:11434"
});
```

#### Exemple d'appel JSON

```json
{
  "library": "@digipair/skill-ollama",
  "element": "embeddings",
  "properties": {
    "model": "nomic-embed-text",
    "temperature": 0.5,
    "baseUrl": "http://localhost:11434"
  }
}
```

---

## Notes

- Les fonctions `model` et `embeddings` permettent d'interagir avec un serveur Ollama pour exécuter respectivement des modèles LLM et des modèles d'embeddings.
- Le paramètre `model` est obligatoire pour chaque fonction et doit correspondre au nom du modèle disponible sur le serveur Ollama.
- Le paramètre `baseUrl` permet de spécifier l'adresse du serveur Ollama si elle diffère de la valeur par défaut.
- Le paramètre `temperature` ajuste la créativité des réponses générées par le modèle (plus la valeur est élevée, plus les réponses sont variées).
- Le paramètre `format` (pour la fonction `model`) permet de définir le format de sortie souhaité (par exemple : `json`, `text`, etc.).

---

**Contact & Support**  
Pour toute question ou contribution, veuillez consulter le dépôt GitHub du projet ou contacter l'équipe de développement.