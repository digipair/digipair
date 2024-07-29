# @digipair/skill-web-jsoneditor

**Version:** 0.1.0  
**Summary:** Editeur JSON  
**Description:** Cette compétence permet d'afficher un éditeur JSON dans une page web. L'utilisateur peut modifier le contenu JSON et récupérer le contenu modifié.  
**Icon:** 📐

## Table des matières

- [Fonctions](#fonctions)
  - [digipair-jsoneditor](#digipair-jsoneditor)

## Fonctions

### digipair-jsoneditor

Editeur JSON

#### Paramètres

| Nom           | Type   | Requis | Description                          |
|---------------|--------|--------|--------------------------------------|
| json          | object | Non    | Contenu json à afficher dans l'éditeur |
| contentStyle  | string | Non    | Style personnalisé du conteneur      |

#### Événements

| Nom    | Type   | Requis | Description                                |
|--------|--------|--------|--------------------------------------------|
| change | array  | Non    | Action déclenchée lors d'un changement dans l'éditeur |

#### Exemple

```json
{
  "library": "@digipair/skill-web-jsoneditor",
  "element": "digipair-jsoneditor",
  "properties": {
    "json": {
      "key": "value"
    },
    "contentStyle": "width: 100%; height: 400px;"
  },
  "events": {
    "change": [
      {
        "type": "update",
        "timestamp": "2023-10-01T12:00:00Z"
      }
    ]
  }
}
```

## Notes

- La fonction `digipair-jsoneditor` permet d'intégrer un éditeur JSON dans une page web.
- Les paramètres `json` et `contentStyle` sont optionnels mais peuvent être utilisés pour personnaliser l'éditeur.
- L'événement `change` peut être utilisé pour capturer les modifications effectuées dans l'éditeur JSON.