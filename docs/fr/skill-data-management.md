# @digipair/skill-data-management

**Version:** 0.1.0  
**Summary:** Gestion des données  
**Description:** Cette compétence permet manipuler et transformer les données.  
**Icon:** 📝

## Table des matières

- [Fonctions](#fonctions)
  - [transform](#transform)
  - [setVariable](#setvariable)
  - [struct2array](#struct2array)
  - [jsonParse](#jsonparse)

## Fonctions

### transform

Transformer la donnée

#### Description

Transforme une valeur grâce aux mécaniques standard de transformation de données du moteur.

#### Paramètres

| Nom     | Type   | Requis | Description                              |
|---------|--------|--------|------------------------------------------|
| value   | object | Non    | Valeur à transformer                     |
| execute | array  | Non    | Actions à appliquer sur la donnée        |

#### Exemple

```json
{
  "library": "@digipair/skill-data-management",
  "element": "transform",
  "properties": {
    "value": {
      "key": "value"
    },
    "execute": [
      {
        "action": "transformAction",
        "parameters": {}
      }
    ]
  }
}
```

### setVariable

Enregistrer la variable

#### Description

Enregistre la variable dans le contexte de la compétence.

#### Paramètres

| Nom     | Type   | Requis | Description                              |
|---------|--------|--------|------------------------------------------|
| name    | object | Oui    | Nom de la variable                       |
| value   | object | Non    | Valeur à enregistrer                     |
| execute | array  | Non    | Actions à appliquer sur la donnée enregistrée |

#### Exemple

```json
{
  "library": "@digipair/skill-data-management",
  "element": "setVariable",
  "properties": {
    "name": {
      "variableName": "example"
    },
    "value": {
      "key": "value"
    },
    "execute": [
      {
        "action": "setAction",
        "parameters": {}
      }
    ]
  }
}
```

### struct2array

Convertir une structure en tableau

#### Description

Convertit une structure de données en tableau.

#### Paramètres

| Nom   | Type   | Requis | Description                      |
|-------|--------|--------|----------------------------------|
| value | object | Oui    | Structure de données à convertir |

#### Exemple

```json
{
  "library": "@digipair/skill-data-management",
  "element": "struct2array",
  "properties": {
    "value": {
      "key1": "value1",
      "key2": "value2"
    }
  }
}
```

### jsonParse

Parse un JSON

#### Description

Parse une chaîne de caractère JSON.

#### Paramètres

| Nom   | Type   | Requis | Description                                      |
|-------|--------|--------|--------------------------------------------------|
| value | string | Oui    | Chaîne de caractère au format JSON à convertir en structure de données |

#### Exemple

```json
{
  "library": "@digipair/skill-data-management",
  "element": "jsonParse",
  "properties": {
    "value": "{\"key\": \"value\"}"
  }
}
```

## Notes

- Les fonctions `transform`, `setVariable`, `struct2array`, et `jsonParse` sont utilisées pour manipuler et transformer les données dans différents contextes.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.