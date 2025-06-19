# @digipair/skill-web-font-awesome

**Version:** 0.1.0  
**Summary:** Display of font-awesome icons  
**Description:** Display of font-awesome icons.  
**Icon:** 🎨

## Table des matières

- [Fonctions](#fonctions)
  - [digipairFontAwesomeIcon](#digipairfontawesomeicon)

---

## Fonctions

### digipairFontAwesomeIcon

Affiche une icône Font Awesome.

#### Paramètres

| Nom      | Type   | Requis | Description                        |
|----------|--------|--------|------------------------------------|
| name     | string | Oui    | Nom de l'icône Font Awesome à afficher. |
| category | object | Non    | Style personnalisé de l'icône (ex: solid, regular, brands, etc.). |
| slot     | string | Non    | Emplacement ou contexte d'affichage de l'icône. |

#### Exemple

```json
{
  "library": "@digipair/skill-web-font-awesome",
  "element": "digipairFontAwesomeIcon",
  "properties": {
    "name": "user",
    "category": { "style": "solid" },
    "slot": "header"
  }
}
```

#### Utilisation minimale

```json
{
  "library": "@digipair/skill-web-font-awesome",
  "element": "digipairFontAwesomeIcon",
  "properties": {
    "name": "check"
  }
}
```

---

## Notes

- Le paramètre `name` est obligatoire et doit correspondre au nom d'une icône Font Awesome valide (ex: `"user"`, `"check"`, `"home"`).
- Le paramètre `category` permet de spécifier le style de l'icône (par exemple, `{ "style": "solid" }`). Si non précisé, le style par défaut sera utilisé.
- Le paramètre `slot` peut être utilisé pour indiquer où l'icône doit être affichée dans l'interface utilisateur.
- Cette fonction ne fait pas d'appel HTTP, elle est destinée à être utilisée comme une fonction JavaScript dans votre projet.

---

## Bonnes pratiques

- Vérifiez que le nom de l'icône existe dans la version de Font Awesome utilisée.
- Utilisez le paramètre `category` pour harmoniser le style des icônes dans votre application.
- Utilisez le paramètre `slot` pour organiser l'affichage des icônes selon les besoins de votre interface.

---

## Exemple d'intégration

```js
import { digipairFontAwesomeIcon } from '@digipair/skill-web-font-awesome';

// Afficher une icône "user" en style "solid" dans l'en-tête
digipairFontAwesomeIcon({
  name: 'user',
  category: { style: 'solid' },
  slot: 'header'
});
```

---

## Licence

Ce projet est open source et distribué sous licence MIT.