# @digipair/skill-web-inputs

**Version:** 0.1.0  
**Summary:** Saisie de données dans les boosts  
**Description:** saisir des données dans les boosts.  
**Icon:** 📥

## Table des matières

- [Fonctions](#fonctions)
  - [digipairInputDomAttribute](#digipairinputdomattribute)
  - [digipairInputFetch](#digipairinputfetch)
  - [digipairInputFile](#digipairinputfile)
  - [digipairInputHidden](#digipairinputhidden)
  - [digipairInputJson](#digipairinputjson)
  - [digipairInputText](#digipairinputtext)

## Fonctions

### digipairInputDomAttribute

Lire un attribut d'un élément du DOM

#### Paramètres

| Nom       | Type    | Requis | Description                          |
| --------- | ------- | ------ | ------------------------------------ |
| selector  | string  | Oui    | Sélecteur CSS de l'élément du DOM    |
| attribute | string  | Oui    | Nom de l'attribut à lire             |
| required  | boolean | Non    | Champs requis pour exécuter le boost |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputDomAttribute",
  "properties": {
    "selector": ".my-element",
    "attribute": "data-value",
    "required": true
  }
}
```

### digipairInputFetch

Récupérer les données d'une URL

#### Paramètres

| Nom      | Type    | Requis | Description                                |
| -------- | ------- | ------ | ------------------------------------------ |
| url      | string  | Oui    | Adresse du service web à appeler           |
| type     | string  | Oui    | Type de données à récupérer (json ou text) |
| required | boolean | Non    | Champs requis pour exécuter le boost       |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputFetch",
  "properties": {
    "url": "https://api.example.com/data",
    "type": "json",
    "required": true
  }
}
```

### digipairInputFile

Lecture d'un fichier binaire

#### Paramètres

| Nom      | Type    | Requis | Description                                                 |
| -------- | ------- | ------ | ----------------------------------------------------------- |
| label    | string  | Non    | Texte affiché à l'utilisateur pour le guider dans sa saisie |
| accept   | string  | Non    | Type de fichiers acceptés                                   |
| required | boolean | Non    | Champs requis pour exécuter le boost                        |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputFile",
  "properties": {
    "label": "Veuillez sélectionner un fichier",
    "accept": ".png,.jpg",
    "required": false
  }
}
```

### digipairInputHidden

Retourne les données cachées

#### Paramètres

| Nom      | Type    | Requis | Description                          |
| -------- | ------- | ------ | ------------------------------------ |
| value    | object  | Oui    | Données à envoyer au boost           |
| required | boolean | Non    | Champs requis pour exécuter le boost |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputHidden",
  "properties": {
    "value": { "key": "value" },
    "required": true
  }
}
```

### digipairInputJson

Lecture d'un fichier JSON

#### Paramètres

| Nom      | Type    | Requis | Description                                                 |
| -------- | ------- | ------ | ----------------------------------------------------------- |
| label    | string  | Non    | Texte affiché à l'utilisateur pour le guider dans sa saisie |
| accept   | string  | Non    | Type de fichiers acceptés                                   |
| required | boolean | Non    | Champs requis pour exécuter le boost                        |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputJson",
  "properties": {
    "label": "Veuillez sélectionner un fichier JSON",
    "accept": ".json",
    "required": false
  }
}
```

### digipairInputText

Lecture d'un fichier texte

#### Paramètres

| Nom      | Type    | Requis | Description                                                 |
| -------- | ------- | ------ | ----------------------------------------------------------- |
| label    | string  | Non    | Texte affiché à l'utilisateur pour le guider dans sa saisie |
| accept   | string  | Non    | Type de fichiers acceptés                                   |
| required | boolean | Non    | Champs requis pour exécuter le boost                        |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputText",
  "properties": {
    "label": "Veuillez sélectionner un fichier texte",
    "accept": ".txt",
    "required": false
  }
}
```

## Notes

- Les fonctions de cette bibliothèque sont utilisées pour interagir avec différents types d'entrées utilisateur et de données dans les boosts.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.
