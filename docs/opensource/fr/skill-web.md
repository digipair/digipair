# @digipair/skill-web

**Version:** 0.1.0  
**Summary:** Affichage de pages web  
**Description:** Cette compétence englobe la connaissance et l'utilisation des technologies web nécessaires pour développer et maintenir des sites internet.  
**Icon:** 🌐

## Table des matières

- [Fonctions](#fonctions)
  - [executeFactory](#executefactory)
  - [page](#page)

## Fonctions

### executeFactory

Dans la factory

#### Description

Exécution d'une liste de capacité dans la factory.

#### Paramètres

| Nom     | Type   | Requis | Description                |
|---------|--------|--------|----------------------------|
| execute | array  | Oui    | Liste de capacité à exécuter |

#### Exemple

```json
{
  "library": "@digipair/skill-web",
  "element": "executeFactory",
  "properties": {
    "execute": [
      // Liste des capacités à exécuter
    ]
  }
}
```

### page

Page internet

#### Description

Affichage d'une page d'un site internet.

#### Paramètres

| Nom               | Type   | Requis | Description                                      |
|-------------------|--------|--------|--------------------------------------------------|
| body              | array  | Oui    | Contenu de la page                               |
| title             | string | Non    | Titre de la page                                 |
| favicon           | string | Non    | Icone de la page                                 |
| styleHtml         | string | Non    | Style CSS de l'élément HTML                      |
| styleBody         | string | Non    | Style CSS de l'élément BODY                      |
| factoryInitialize | array  | Non    | Action déclenchée lors de l'initialisation coté factory |
| browserInitialize | array  | Non    | Action déclenchée lors de l'initialisation coté navigateur |
| browserLoad       | array  | Non    | Action déclenchée lorsque la page est chargée coté navigateur |

#### Exemple

```json
{
  "library": "@digipair/skill-web",
  "element": "page",
  "properties": {
    "body": [
      // Contenu de la page
    ],
    "title": "Titre de la page",
    "favicon": "url_de_l_icone",
    "styleHtml": "css_pour_html",
    "styleBody": "css_pour_body",
    "factoryInitialize": [
      // Actions lors de l'initialisation coté factory
    ],
    "browserInitialize": [
      // Actions lors de l'initialisation coté navigateur
    ],
    "browserLoad": [
      // Actions lorsque la page est chargée coté navigateur
    ]
  }
}
```

## Notes

- La fonction `executeFactory` est utilisée pour exécuter une liste de capacités dans la factory.
- La fonction `page` permet d'afficher une page web avec des options de personnalisation telles que le titre, l'icône, et les styles CSS pour les éléments HTML et BODY.
- Les actions `factoryInitialize`, `browserInitialize`, et `browserLoad` permettent de définir des comportements spécifiques lors de différentes phases de l'affichage de la page.