# @digipair/skill-web-jsoneditor

**Version:** 0.1.0  
**Résumé:** JSON Editor  
**Description:** Cette compétence permet d'afficher un éditeur JSON sur une page web. L'utilisateur peut modifier le contenu JSON et récupérer le contenu modifié.  
**Icône:** 📐

## Table des matières

- [Fonctions](#fonctions)
  - [digipair-jsoneditor](#digipair-jsoneditor)
- [Événements](#événements)
  - [change](#change)
- [Notes](#notes)

---

## Fonctions

### digipair-jsoneditor

Affiche un éditeur JSON interactif sur la page web. Permet à l'utilisateur de visualiser, modifier et récupérer un objet JSON.

#### Paramètres

| Nom           | Type    | Requis | Description                                      |
|---------------|---------|--------|--------------------------------------------------|
| id            | string  | Non    | Identifiant de l'élément conteneur.              |
| json          | object  | Non    | Contenu JSON à afficher dans l'éditeur.          |
| contentStyle  | string  | Non    | Style CSS personnalisé pour le conteneur.        |

#### Exemple d'utilisation

```json
{
  "library": "@digipair/skill-web-jsoneditor",
  "element": "digipair-jsoneditor",
  "properties": {
    "id": "json-editor-container",
    "json": {
      "name": "John Doe",
      "age": 30
    },
    "contentStyle": "width: 100%; height: 400px; border: 1px solid #ccc;"
  }
}
```

---

## Événements

### change

Déclenché lorsqu'une modification est effectuée dans l'éditeur JSON.

| Nom      | Type   | Description                                                        |
|----------|--------|--------------------------------------------------------------------|
| change   | array  | Action(s) à exécuter lors d'une modification dans l'éditeur.       |

**Schéma des items :** [pinsSettings](https://schemas.digipair.ai/pinsSettings)

#### Exemple d'écoute d'événement

```json
{
  "library": "@digipair/skill-web-jsoneditor",
  "element": "digipair-jsoneditor",
  "properties": {
    "json": { "foo": "bar" }
  },
  "events": {
    "change": [
      {
        "type": "log",
        "message": "Le contenu JSON a été modifié."
      }
    ]
  }
}
```

---

## Notes

- L'éditeur JSON peut être stylisé via la propriété `contentStyle` pour s'adapter à votre interface.
- L'événement `change` permet de réagir dynamiquement aux modifications de l'utilisateur (sauvegarde, validation, etc.).
- Si aucun paramètre n'est fourni, l'éditeur s'affichera vide et utilisera les styles par défaut.
- Cette librairie est idéale pour intégrer rapidement un éditeur JSON dans une application web ou un backoffice.

---

**Pour toute contribution ou question, consultez le dépôt officiel de la librairie.**