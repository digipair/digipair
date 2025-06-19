# @digipair/skill-webcam

**Version:** 0.1.0  
**Résumé:** Webcam Management  
**Description:** Cette compétence permet d'accéder aux images de la webcam.  
**Icône:** 📷

## Table des matières

- [Fonctions](#fonctions)
  - [capture](#capture)
  - [list](#list)

---

## Fonctions

### capture

Capture une image depuis la webcam.

#### Paramètres

| Nom      | Type     | Requis | Description                                      |
|----------|----------|--------|--------------------------------------------------|
| width    | number   | Non    | Largeur de l'image capturée                      |
| height   | number   | Non    | Hauteur de l'image capturée                      |
| quality  | number   | Non    | Qualité de l'image (dépend du format de sortie)  |
| output   | string   | Non    | Type de sortie de l'image (`jpeg`, `png`)        |
| device   | string   | Non    | Nom de la caméra à utiliser                      |
| verbose  | boolean  | Non    | Affiche des informations supplémentaires         |

#### Exemple

```json
{
  "library": "@digipair/skill-webcam",
  "element": "capture",
  "properties": {
    "width": 1280,
    "height": 720,
    "quality": 90,
    "output": "jpeg",
    "device": "USB Camera",
    "verbose": true
  }
}
```

---

### list

Retourne la liste des webcams présentes sur le système.

#### Paramètres

Aucun paramètre requis.

#### Exemple

```json
{
  "library": "@digipair/skill-webcam",
  "element": "list",
  "properties": {}
}
```

---

## Notes

- La fonction `capture` permet de personnaliser la capture d'image via plusieurs paramètres optionnels (dimensions, qualité, format, choix de la caméra, etc.).
- La fonction `list` permet d'obtenir la liste des webcams disponibles sur le système.
- Assurez-vous que les permissions d'accès à la webcam sont accordées à l'application avant d'utiliser ces fonctions.
- Le paramètre `output` accepte généralement les valeurs `jpeg` ou `png` selon le support de la librairie.
- Le paramètre `device` peut être utilisé pour sélectionner une caméra spécifique si plusieurs sont présentes.

---

**@digipair/skill-webcam** facilite la gestion et l'accès aux webcams dans vos applications JavaScript.