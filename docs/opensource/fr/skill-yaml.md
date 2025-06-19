# @digipair/skill-yaml

**Version:** 0.1.0  
**Summary:** YAML data management  
**Description:** This skill allows manipulating YAML data  
**Icon:** 📝

## Table des matières

- [Fonctions](#fonctions)
  - [load](#load)
  - [dump](#dump)

---

## Fonctions

### load

Charger des données YAML et les convertir en objet JavaScript.

#### Paramètres

| Nom     | Type   | Requis | Description                |
|---------|--------|--------|----------------------------|
| yaml    | string | Oui    | Données YAML à charger     |
| options | object | Non    | Options de chargement      |

#### Exemple

```json
{
  "library": "@digipair/skill-yaml",
  "element": "load",
  "properties": {
    "yaml": "foo: bar\nbaz: 42",
    "options": {
      "schema": "default"
    }
  }
}
```

---

### dump

Convertir un objet JavaScript en chaîne YAML.

#### Paramètres

| Nom     | Type   | Requis | Description                        |
|---------|--------|--------|------------------------------------|
| data    | string | Oui    | Données à convertir en YAML        |
| options | object | Non    | Options de conversion              |

#### Exemple

```json
{
  "library": "@digipair/skill-yaml",
  "element": "dump",
  "properties": {
    "data": {
      "foo": "bar",
      "baz": 42
    },
    "options": {
      "indent": 2
    }
  }
}
```

---

## Notes

- La fonction `load` permet de parser une chaîne YAML en un objet JavaScript.
- La fonction `dump` permet de sérialiser un objet JavaScript en YAML.
- Les options sont optionnelles et dépendent de l'implémentation sous-jacente du parseur YAML utilisé.
- Assurez-vous que les données fournies sont valides pour éviter les erreurs de parsing ou de conversion.