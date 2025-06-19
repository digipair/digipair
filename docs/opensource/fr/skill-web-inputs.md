# @digipair/skill-web-inputs

**Version :** 0.1.0  
**Résumé :** Data entry in boosts  
**Description :** Cette compétence permet la saisie de données dans les boosts.  
**Icône :** 📥

## Table des matières

- [Fonctions](#fonctions)
  - [digipairInputDomAttribute](#digipairinputdomattribute)
  - [digipairInputFetch](#digipairinputfetch)
  - [digipairInputFile](#digipairinputfile)
  - [digipairInputHidden](#digipairinputhidden)
  - [digipairInputJson](#digipairinputjson)
  - [digipairInputText](#digipairinputtext)

---

## Fonctions

### digipairInputDomAttribute

Lire un attribut d’un élément du DOM.

#### Paramètres

| Nom        | Type    | Requis | Description                                 |
|------------|---------|--------|---------------------------------------------|
| selector   | string  | Oui    | Sélecteur CSS de l’élément DOM              |
| attribute  | string  | Oui    | Nom de l’attribut à lire                    |
| required   | boolean | Non    | Champs requis pour exécuter le boost        |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputDomAttribute",
  "properties": {
    "selector": "#mon-element",
    "attribute": "data-id",
    "required": true
  }
}
```

---

### digipairInputFetch

Récupérer des données depuis une URL.

#### Paramètres

| Nom      | Type    | Requis | Description                                         |
|----------|---------|--------|-----------------------------------------------------|
| url      | string  | Oui    | Adresse du service web à appeler                    |
| type     | string  | Oui    | Type de données à récupérer (`json` ou `text`)      |
| required | boolean | Non    | Champs requis pour exécuter le boost                |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputFetch",
  "properties": {
    "url": "https://api.exemple.com/data",
    "type": "json",
    "required": false
  }
}
```

---

### digipairInputFile

Lire un fichier binaire (format base64).

#### Paramètres

| Nom      | Type    | Requis | Description                                              |
|----------|---------|--------|----------------------------------------------------------|
| label    | string  | Non    | Texte affiché à l’utilisateur pour guider la saisie      |
| accept   | string  | Non    | Types de fichiers acceptés (ex: `.png, .jpg`)            |
| required | boolean | Non    | Champs requis pour exécuter le boost                     |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputFile",
  "properties": {
    "label": "Sélectionnez un fichier",
    "accept": ".png,.jpg",
    "required": true
  }
}
```

---

### digipairInputHidden

Retourner des données cachées au boost.

#### Paramètres

| Nom      | Type    | Requis | Description                                 |
|----------|---------|--------|---------------------------------------------|
| value    | object  | Oui    | Données à envoyer au boost                  |
| required | boolean | Non    | Champs requis pour exécuter le boost        |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputHidden",
  "properties": {
    "value": { "secret": "valeur" },
    "required": false
  }
}
```

---

### digipairInputJson

Lire un fichier JSON.

#### Paramètres

| Nom      | Type    | Requis | Description                                              |
|----------|---------|--------|----------------------------------------------------------|
| label    | string  | Non    | Texte affiché à l’utilisateur pour guider la saisie      |
| accept   | string  | Non    | Types de fichiers acceptés (ex: `.json`)                 |
| required | boolean | Non    | Champs requis pour exécuter le boost                     |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputJson",
  "properties": {
    "label": "Importer un fichier JSON",
    "accept": ".json",
    "required": true
  }
}
```

---

### digipairInputText

Lire un fichier texte.

#### Paramètres

| Nom      | Type    | Requis | Description                                              |
|----------|---------|--------|----------------------------------------------------------|
| label    | string  | Non    | Texte affiché à l’utilisateur pour guider la saisie      |
| accept   | string  | Non    | Types de fichiers acceptés (ex: `.txt`)                  |
| required | boolean | Non    | Champs requis pour exécuter le boost                     |

#### Exemple

```json
{
  "library": "@digipair/skill-web-inputs",
  "element": "digipairInputText",
  "properties": {
    "label": "Importer un fichier texte",
    "accept": ".txt",
    "required": false
  }
}
```

---

## Notes

- Les fonctions de cette librairie sont conçues pour faciliter la saisie et la récupération de données dans le contexte des boosts.
- Les paramètres `required` permettent de spécifier si la saisie est obligatoire pour l’utilisateur.
- Pour les fonctions de type fichier (`digipairInputFile`, `digipairInputJson`, `digipairInputText`), le paramètre `accept` permet de restreindre les types de fichiers sélectionnables.
- La fonction `digipairInputDomAttribute` permet d’extraire dynamiquement une valeur du DOM, utile pour des intégrations avancées.
- La fonction `digipairInputHidden` est utile pour injecter des données non visibles par l’utilisateur dans le flux du boost.