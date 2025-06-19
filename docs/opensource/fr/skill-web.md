# @digipair/skill-web

**Version:** 0.1.0  
**Résumé:** Web page display  
**Description:** Cette compétence englobe la connaissance et l'utilisation des technologies web nécessaires pour développer et maintenir des sites web.  
**Icône:** 🌐

## Table des matières

- [Fonctions](#fonctions)
  - [executeFactory](#executefactory)
  - [page](#page)

---

## Fonctions

### executeFactory

Exécution d'une liste de capacités dans la factory.

#### Description

Permet d'exécuter une liste de capacités (capabilities) dans le contexte de la factory. Chaque capacité est définie selon le schéma `pinsSettings`.

#### Paramètres

| Nom      | Type    | Requis | Description                        |
|----------|---------|--------|------------------------------------|
| execute  | array   | Oui    | Liste des capacités à exécuter. Chaque élément doit suivre le schéma `pinsSettings`. |

#### Exemple

```json
{
  "library": "@digipair/skill-web",
  "element": "executeFactory",
  "properties": {
    "execute": [
      {
        // Objet pinsSettings
      },
      {
        // Objet pinsSettings
      }
    ]
  }
}
```

---

### page

Affichage d'une page d'un site web.

#### Description

Permet d'afficher une page web en définissant son contenu, son en-tête, ses styles, et des actions à différents moments du cycle de vie de la page (initialisation, chargement, etc.).

#### Paramètres

| Nom                | Type    | Requis | Description                                                                 |
|--------------------|---------|--------|-----------------------------------------------------------------------------|
| body               | array   | Oui    | Contenu de la page. Chaque élément doit suivre le schéma `pinsSettings`.    |
| head               | array   | Non    | En-tête de la page. Chaque élément doit suivre le schéma `pinsSettings`.    |
| ssr                | boolean | Non    | Active le rendu côté serveur (Server Side Rendering).                       |
| styleHtml          | string  | Non    | Style CSS appliqué à l'élément HTML racine.                                 |
| styleBody          | string  | Non    | Style CSS appliqué à l'élément BODY.                                        |
| factoryInitialize  | array   | Non    | Actions déclenchées lors de l'initialisation de la factory (`pinsSettings`).|
| browserInitialize  | array   | Non    | Actions déclenchées lors de l'initialisation du navigateur (`pinsSettings`).|
| browserLoad        | array   | Non    | Actions déclenchées lors du chargement de la page dans le navigateur (`pinsSettings`).|
| confirmBeforeUnload| string  | Non    | Message de confirmation affiché avant de quitter la page.                   |

#### Exemple

```json
{
  "library": "@digipair/skill-web",
  "element": "page",
  "properties": {
    "body": [
      {
        // Objet pinsSettings pour le contenu principal
      }
    ],
    "head": [
      {
        // Objet pinsSettings pour l'en-tête
      }
    ],
    "ssr": true,
    "styleHtml": "background: #fff;",
    "styleBody": "margin: 0; padding: 0;",
    "factoryInitialize": [
      {
        // Action à l'init de la factory
      }
    ],
    "browserInitialize": [
      {
        // Action à l'init du navigateur
      }
    ],
    "browserLoad": [
      {
        // Action au chargement de la page
      }
    ],
    "confirmBeforeUnload": "Êtes-vous sûr de vouloir quitter cette page ?"
  }
}
```

---

## Notes

- Le schéma `pinsSettings` doit être respecté pour tous les objets attendus dans les tableaux de paramètres.
- La fonction `executeFactory` est principalement utilisée pour orchestrer des capacités dans un contexte de factory, tandis que la fonction `page` permet de définir l'affichage et le comportement d'une page web complète.
- Les paramètres optionnels permettent de personnaliser le rendu, le style et les actions de la page à différents moments de son cycle de vie.
- Utilisez `confirmBeforeUnload` pour protéger l'utilisateur contre la perte de données lors de la fermeture ou du rechargement de la page.

---

**Pour toute contribution ou question, veuillez consulter la documentation officielle ou ouvrir une issue sur le dépôt GitHub du projet.**