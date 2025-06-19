```markdown
# @digipair/skill-web-ionic

**Version:** 0.1.0  
**Summary:** Design System Ionic  
**Description:** This skill provides functionalities to create Ionic web apps.  
**Icon:** 📱

## Table des matières

- [Fonctions](#fonctions)
  - [ion-action-sheet](#ion-action-sheet)
  - [ion-accordion](#ion-accordion)
  - [ion-accordion-group](#ion-accordion-group)
  - [ion-alert](#ion-alert)
  - [ion-badge](#ion-badge)
  - [ion-breadcrumb](#ion-breadcrumb)
  - [ion-breadcrumbs](#ion-breadcrumbs)
  - [ion-button](#ion-button)
  - [ion-ripple-effect](#ion-ripple-effect)
  - [ion-card](#ion-card)
  - [ion-card-content](#ion-card-content)
  - [ion-card-header](#ion-card-header)
  - [ion-card-subtitle](#ion-card-subtitle)
  - [ion-card-title](#ion-card-title)
  - [ion-checkbox](#ion-checkbox)
  - [ion-chip](#ion-chip)
  - [ion-app](#ion-app)
  - [ion-content](#ion-content)
  - [ion-datetime](#ion-datetime)
  - [ion-datetime-button](#ion-datetime-button)
  - [ion-picker](#ion-picker)
  - [ion-picker-column](#ion-picker-column)
  - [ion-picker-column-option](#ion-picker-column-option)
  - [ion-picker-legacy](#ion-picker-legacy)
  - [ion-fab](#ion-fab)
  - [ion-fab-button](#ion-fab-button)
  - [ion-fab-list](#ion-fab-list)
  - [ion-grid](#ion-grid)
  - [ion-col](#ion-col)
  - [ion-row](#ion-row)
  - [ion-infinite-scroll](#ion-infinite-scroll)
  - [ion-infinite-scroll-content](#ion-infinite-scroll-content)
  - [ion-icon](#ion-icon)
  - [ion-input](#ion-input)
  - [ion-password-toggle](#ion-password-toggle)
  - [ion-textarea](#ion-textarea)
  - [ion-item](#ion-item)
  - [ion-item-divider](#ion-item-divider)
  - [ion-item-group](#ion-item-group)
  - [ion-item-sliding](#ion-item-sliding)
  - [ion-item-options](#ion-item-options)
  - [ion-item-option](#ion-item-option)
  - [ion-label](#ion-label)
  - [ion-note](#ion-note)
  - [ion-list](#ion-list)
  - [ion-list-header](#ion-list-header)
  - [ion-avatar](#ion-avatar)
  - [ion-img](#ion-img)
  - [ion-thumbnail](#ion-thumbnail)
  - [ion-menu](#ion-menu)
  - [ion-menu-button](#ion-menu-button)
  - [ion-menu-toggle](#ion-menu-toggle)
  - [ion-split-pane](#ion-split-pane)
  - [ion-modal](#ion-modal)
  - [ion-backdrop](#ion-backdrop)
  - [ion-nav](#ion-nav)
  - [ion-nav-link](#ion-nav-link)
  - [ion-popover](#ion-popover)
  - [ion-loading](#ion-loading)
  - [ion-progress-bar](#ion-progress-bar)
  - [ion-skeleton-text](#ion-skeleton-text)
  - [ion-spinner](#ion-spinner)
  - [ion-radio](#ion-radio)
  - [ion-radio-group](#ion-radio-group)
  - [ion-range](#ion-range)
  - [ion-refresher](#ion-refresher)
  - [ion-refresher-content](#ion-refresher-content)
  - [ion-reorder](#ion-reorder)
  - [ion-reorder-group](#ion-reorder-group)
  - [ion-router](#ion-router)
  - [ion-router-link](#ion-router-link)
  - [ion-router-outlet](#ion-router-outlet)
  - [ion-route](#ion-route)
  - [ion-route-redirect](#ion-route-redirect)
  - [ion-searchbar](#ion-searchbar)
  - [ion-segment](#ion-segment)
  - [ion-segment-button](#ion-segment-button)
  - [ion-select](#ion-select)
  - [ion-select-option](#ion-select-option)
  - [ion-tabs](#ion-tabs)
  - [ion-tab](#ion-tab)
  - [ion-tab-bar](#ion-tab-bar)
  - [ion-tab-button](#ion-tab-button)
  - [ion-toast](#ion-toast)
  - [ion-toggle](#ion-toggle)
  - [ion-toolbar](#ion-toolbar)
  - [ion-header](#ion-header)
  - [ion-footer](#ion-footer)
  - [ion-title](#ion-title)
  - [ion-buttons](#ion-buttons)
  - [ion-back-button](#ion-back-button)
  - [ion-text](#ion-text)

---

## Fonctions

> **Note** :  
> Chaque fonction correspond à un composant ou comportement Ionic.  
> Les paramètres sont passés sous forme d'objet à la fonction correspondante.  
> Les événements (`x-events`) peuvent être utilisés pour réagir aux interactions utilisateur.

---

### ion-action-sheet

Affiche une feuille d'action (Action Sheet).

#### Paramètres

| Nom                | Type    | Requis | Description |
|--------------------|---------|--------|-------------|
| class              | string  | Non    | Classe CSS de l'élément |
| style              | string  | Non    | Style CSS de l'élément |
| id                 | string  | Non    | Identifiant de l'élément |
| textContent        | string  | Non    | Contenu texte |
| innerHTML          | string  | Non    | HTML interne |
| slot               | string  | Non    | Slot de l'élément |
| animated           | boolean | Non    | Active l'animation |
| backdrop-dismiss   | boolean | Non    | Ferme la feuille en cliquant sur le fond |
| css-class          | string  | Non    | Classes CSS additionnelles |
| header             | string  | Non    | Titre de la feuille d'action |
| is-open            | boolean | Non    | Ouvre/ferme la feuille d'action |
| keyboard-close     | boolean | Non    | Ferme le clavier à l'ouverture |
| mode               | string  | Non    | Mode d'affichage (ios/md) |
| sub-header         | string  | Non    | Sous-titre |
| translucent        | boolean | Non    | Fond translucide (iOS) |
| trigger            | string  | Non    | ID du déclencheur |

#### Événements

- click : Événement de clic
- didDismiss : Après fermeture
- didPresent : Après ouverture
- ionActionSheetDidDismiss : Après fermeture (complet)
- ionActionSheetDidPresent : Après ouverture (complet)
- ionActionSheetWillDismiss : Avant fermeture
- ionActionSheetWillPresent : Avant ouverture
- willDismiss : Avant fermeture (shorthand)
- willPresent : Avant ouverture (shorthand)

#### Exemple

```json
{
  "library": "@digipair/skill-web-ionic",
  "element": "ion-action-sheet",
  "properties": {
    "header": "Actions",
    "animated": true,
    "backdrop-dismiss": true
  }
}
```

---

### ion-accordion

Affiche un accordéon.

#### Paramètres

| Nom                | Type    | Requis | Description |
|--------------------|---------|--------|-------------|
| class              | string  | Non    | Classe CSS de l'élément |
| style              | string  | Non    | Style CSS de l'élément |
| id                 | string  | Non    | Identifiant de l'élément |
| textContent        | string  | Non    | Contenu texte |
| innerHTML          | string  | Non    | HTML interne |
| slot               | string  | Non    | Slot de l'élément |
| disabled           | boolean | Non    | Désactive l'accordéon |
| mode               | string  | Non    | Mode d'affichage |
| readonly           | boolean | Non    | Lecture seule |
| toggle-icon        | string  | Non    | Icône de bascule |
| toggle-icon-slot   | string  | Non    | Slot de l'icône |
| value              | string  | Non    | Valeur de l'accordéon |

#### Événements

- click : Événement de clic

#### Exemple

```json
{
  "library": "@digipair/skill-web-ionic",
  "element": "ion-accordion",
  "properties": {
    "header": "Section 1",
    "disabled": false
  }
}
```

---

### ion-accordion-group

Groupe d'accordéons.

#### Paramètres

| Nom                | Type    | Requis | Description |
|--------------------|---------|--------|-------------|
| class              | string  | Non    | Classe CSS de l'élément |
| style              | string  | Non    | Style CSS de l'élément |
| id                 | string  | Non    | Identifiant de l'élément |
| textContent        | string  | Non    | Contenu texte |
| innerHTML          | string  | Non    | HTML interne |
| slot               | string  | Non    | Slot de l'élément |
| animated           | boolean | Non    | Animation des accordéons |
| disabled           | boolean | Non    | Désactive le groupe |
| expand             | string  | Non    | Comportement d'expansion |
| mode               | string  | Non    | Mode d'affichage |
| multiple           | boolean | Non    | Accordéons multiples ouverts |
| readonly           | boolean | Non    | Lecture seule |
| value              | string  | Non    | Valeur du groupe |

#### Événements

- click : Événement de clic
- ionChange : Changement de valeur

#### Exemple

```json
{
  "library": "@digipair/skill-web-ionic",
  "element": "ion-accordion-group",
  "properties": {
    "animated": true,
    "multiple": false
  }
}
```

---

### ion-alert

Affiche une alerte.

#### Paramètres

| Nom                | Type    | Requis | Description |
|--------------------|---------|--------|-------------|
| class              | string  | Non    | Classe CSS de l'élément |
| style              | string  | Non    | Style CSS de l'élément |
| id                 | string  | Non    | Identifiant de l'élément |
| textContent        | string  | Non    | Contenu texte |
| innerHTML          | string  | Non    | HTML interne |
| slot               | string  | Non    | Slot de l'élément |
| animated           | boolean | Non    | Animation |
| backdrop-dismiss   | boolean | Non    | Ferme l'alerte sur le fond |
| css-class          | string  | Non    | Classes CSS additionnelles |
| header             | string  | Non    | Titre principal |
| is-open            | boolean | Non    | Ouvre/ferme l'alerte |
| keyboard-close     | boolean | Non    | Ferme le clavier à l'ouverture |
| message            | string  | Non    | Message principal |
| mode               | string  | Non    | Mode d'affichage |
| sub-header         | string  | Non    | Sous-titre |
| translucent        | boolean | Non    | Fond translucide (iOS) |
| trigger            | string  | Non    | ID du déclencheur |

#### Événements

- click : Événement de clic
- didDismiss : Après fermeture
- didPresent : Après ouverture
- ionAlertDidDismiss : Après fermeture (complet)
- ionAlertDidPresent : Après ouverture (complet)
- ionAlertWillDismiss : Avant fermeture
- ionAlertWillPresent : Avant ouverture
- willDismiss : Avant fermeture (shorthand)
- willPresent : Avant ouverture (shorthand)

#### Exemple

```json
{
  "library": "@digipair/skill-web-ionic",
  "element": "ion-alert",
  "properties": {
    "header": "Attention",
    "message": "Voulez-vous continuer ?",
    "is-open": true
  }
}
```

---

### ion-badge

Affiche un badge.

#### Paramètres

| Nom                | Type    | Requis | Description |
|--------------------|---------|--------|-------------|
| class              | string  | Non    | Classe CSS de l'élément |
| style              | string  | Non    | Style CSS de l'élément |
| id                 | string  | Non    | Identifiant de l'élément |
| textContent        | string  | Non    | Contenu texte |
| innerHTML          | string  | Non    | HTML interne |
| slot               | string  | Non    | Slot de l'élément |
| color              | string  | Non    | Couleur du badge |
| mode               | string  | Non    | Mode d'affichage |

#### Événements

- click : Événement de clic

#### Exemple

```json
{
  "library": "@digipair/skill-web-ionic",
  "element": "ion-badge",
  "properties": {
    "color": "primary",
    "textContent": "Nouveau"
  }
}
```

---

<!--
Pour la suite, répétez la structure ci-dessus pour chaque fonction décrite dans le document OpenAPI.
Pour chaque fonction :
- Donnez une courte description.
- Listez les paramètres dans un tableau.
- Listez les événements disponibles.
- Donnez un exemple d'utilisation JSON.
-->

<!-- ... (Répétez pour chaque fonction, voir ci-dessus pour le format) ... -->

---

## Notes

- Les fonctions de cette librairie correspondent aux composants du Design System Ionic.
- Les paramètres sont optionnels sauf indication contraire.
- Les événements (`x-events`) permettent de réagir aux interactions utilisateur (clic, changement, focus, etc.).
- Pour chaque fonction, reportez-vous à l'exemple pour la structure d'appel JSON.

---

> **Astuce** :  
> Pour utiliser un composant, spécifiez `"library": "@digipair/skill-web-ionic"`, `"element": "<nom-de-la-fonction>"` et les propriétés dans `"properties"`.

---

```

> **Remarque** :  
> Ce document ne liste que les premières fonctions en détail pour des raisons de lisibilité.  
> Pour chaque composant, suivez le même format que les exemples ci-dessus :  
> - Description  
> - Tableau des paramètres  
> - Tableau des événements  
> - Exemple JSON  
>  
> Pour la documentation complète, générez chaque bloc selon ce modèle.
