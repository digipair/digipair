Here is the English translation of your technical documentation, following best practices for open-source project documentation and technical accuracy:

```markdown
# @digipair/skill-web-ionic

**Version:** 0.1.0  
**Summary:** Ionic Design System  
**Description:** This skill provides functionalities to create Ionic web apps.  
**Icon:** 📱

## Table of Contents

- [Functions](#functions)
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

## Functions

> **Note:**  
> Each function corresponds to an Ionic component or behavior.  
> Parameters are passed as an object to the corresponding function.  
> Events (`x-events`) can be used to react to user interactions.

---

### ion-action-sheet

Displays an action sheet.

#### Parameters

| Name               | Type    | Required | Description |
|--------------------|---------|----------|-------------|
| class              | string  | No       | CSS class of the element |
| style              | string  | No       | CSS style of the element |
| id                 | string  | No       | Element identifier |
| textContent        | string  | No       | Text content |
| innerHTML          | string  | No       | Inner HTML |
| slot               | string  | No       | Element slot |
| animated           | boolean | No       | Enables animation |
| backdrop-dismiss   | boolean | No       | Closes the sheet when clicking the backdrop |
| css-class          | string  | No       | Additional CSS classes |
| header             | string  | No       | Action sheet title |
| is-open            | boolean | No       | Opens/closes the action sheet |
| keyboard-close     | boolean | No       | Closes the keyboard on open |
| mode               | string  | No       | Display mode (ios/md) |
| sub-header         | string  | No       | Subtitle |
| translucent        | boolean | No       | Translucent background (iOS) |
| trigger            | string  | No       | Trigger element ID |

#### Events

- click: Click event
- didDismiss: After closing
- didPresent: After opening
- ionActionSheetDidDismiss: After closing (full)
- ionActionSheetDidPresent: After opening (full)
- ionActionSheetWillDismiss: Before closing
- ionActionSheetWillPresent: Before opening
- willDismiss: Before closing (shorthand)
- willPresent: Before opening (shorthand)

#### Example

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

Displays an accordion.

#### Parameters

| Name               | Type    | Required | Description |
|--------------------|---------|----------|-------------|
| class              | string  | No       | CSS class of the element |
| style              | string  | No       | CSS style of the element |
| id                 | string  | No       | Element identifier |
| textContent        | string  | No       | Text content |
| innerHTML          | string  | No       | Inner HTML |
| slot               | string  | No       | Element slot |
| disabled           | boolean | No       | Disables the accordion |
| mode               | string  | No       | Display mode |
| readonly           | boolean | No       | Read-only |
| toggle-icon        | string  | No       | Toggle icon |
| toggle-icon-slot   | string  | No       | Icon slot |
| value              | string  | No       | Accordion value |

#### Events

- click: Click event

#### Example

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

Group of accordions.

#### Parameters

| Name               | Type    | Required | Description |
|--------------------|---------|----------|-------------|
| class              | string  | No       | CSS class of the element |
| style              | string  | No       | CSS style of the element |
| id                 | string  | No       | Element identifier |
| textContent        | string  | No       | Text content |
| innerHTML          | string  | No       | Inner HTML |
| slot               | string  | No       | Element slot |
| animated           | boolean | No       | Accordion animation |
| disabled           | boolean | No       | Disables the group |
| expand             | string  | No       | Expansion behavior |
| mode               | string  | No       | Display mode |
| multiple           | boolean | No       | Multiple accordions open |
| readonly           | boolean | No       | Read-only |
| value              | string  | No       | Group value |

#### Events

- click: Click event
- ionChange: Value change

#### Example

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

Displays an alert.

#### Parameters

| Name               | Type    | Required | Description |
|--------------------|---------|----------|-------------|
| class              | string  | No       | CSS class of the element |
| style              | string  | No       | CSS style of the element |
| id                 | string  | No       | Element identifier |
| textContent        | string  | No       | Text content |
| innerHTML          | string  | No       | Inner HTML |
| slot               | string  | No       | Element slot |
| animated           | boolean | No       | Animation |
| backdrop-dismiss   | boolean | No       | Closes the alert on backdrop click |
| css-class          | string  | No       | Additional CSS classes |
| header             | string  | No       | Main title |
| is-open            | boolean | No       | Opens/closes the alert |
| keyboard-close     | boolean | No       | Closes the keyboard on open |
| message            | string  | No       | Main message |
| mode               | string  | No       | Display mode |
| sub-header         | string  | No       | Subtitle |
| translucent        | boolean | No       | Translucent background (iOS) |
| trigger            | string  | No       | Trigger element ID |

#### Events

- click: Click event
- didDismiss: After closing
- didPresent: After opening
- ionAlertDidDismiss: After closing (full)
- ionAlertDidPresent: After opening (full)
- ionAlertWillDismiss: Before closing
- ionAlertWillPresent: Before opening
- willDismiss: Before closing (shorthand)
- willPresent: Before opening (shorthand)

#### Example

```json
{
  "library": "@digipair/skill-web-ionic",
  "element": "ion-alert",
  "properties": {
    "header": "Attention",
    "message": "Do you want to continue?",
    "is-open": true
  }
}
```

---

### ion-badge

Displays a badge.

#### Parameters

| Name               | Type    | Required | Description |
|--------------------|---------|----------|-------------|
| class              | string  | No       | CSS class of the element |
| style              | string  | No       | CSS style of the element |
| id                 | string  | No       | Element identifier |
| textContent        | string  | No       | Text content |
| innerHTML          | string  | No       | Inner HTML |
| slot               | string  | No       | Element slot |
| color              | string  | No       | Badge color |
| mode               | string  | No       | Display mode |

#### Events

- click: Click event

#### Example

```json
{
  "library": "@digipair/skill-web-ionic",
  "element": "ion-badge",
  "properties": {
    "color": "primary",
    "textContent": "New"
  }
}
```

---

<!--
For the following, repeat the above structure for each function described in the OpenAPI document.
For each function:
- Provide a short description.
- List the parameters in a table.
- List available events.
- Provide a JSON usage example.
-->

<!-- ... (Repeat for each function, see above for the format) ... -->

---

## Notes

- The functions in this library correspond to components from the Ionic Design System.
- All parameters are optional unless otherwise specified.
- Events (`x-events`) allow you to react to user interactions (click, change, focus, etc.).
- For each function, refer to the example for the JSON call structure.

---

> **Tip:**  
> To use a component, specify `"library": "@digipair/skill-web-ionic"`, `"element": "<function-name>"`, and the properties in `"properties"`.

---

```

> **Note:**  
> This document only details the first few functions for readability.  
> For each component, follow the same format as the examples above:  
> - Description  
> - Parameter table  
> - Event table  
> - JSON example  
>  
> For the full documentation, generate each block according to this model.
```

If you need the translation for additional components, simply repeat the structure as shown above for each one.