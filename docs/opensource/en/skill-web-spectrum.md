# @digipair/skill-web-spectrum

**Version:** 0.1.0  
**Summary:** Spectrum Design System  
**Description:** This skill allows users to create web interfaces using the Spectrum design system.  
**Icon:** 🎨

## Table of Contents

- [Functions](#functions)
  - [spTheme](#spTheme)
  - [spTable](#spTable)
  - [spTableHead](#spTableHead)
  - [spTableHeadCell](#spTableHeadCell)
  - [spTableBody](#spTableBody)
  - [spTableRow](#spTableRow)
  - [spTableCell](#spTableCell)
  - [spActionGroup](#spActionGroup)
  - [spActionButton](#spActionButton)
  - [spIcon](#spIcon)
  - [spDivider](#spDivider)
  - [spSearch](#spSearch)
  - [spTopNav](#spTopNav)
  - [spTopNavItem](#spTopNavItem)
  - [spActionMenu](#spActionMenu)
  - [spMenu](#spMenu)
  - [spMenuItem](#spMenuItem)
  - [spMenuDivider](#spMenuDivider)
  - [spIllustratedMessage](#spIllustratedMessage)
  - [spFieldLabel](#spFieldLabel)
  - [spTextfield](#spTextfield)
  - [spHelpText](#spHelpText)
  - [spButton](#spButton)
  - [spToast](#spToast)

## Functions

### spTheme

Interface theme

#### Parameters

| Name   | Type   | Required | Description                      |
|--------|--------|----------|----------------------------------|
| theme  | string | No       | Name of the theme to apply       |
| color  | string | No       | Color of the theme               |
| scale  | string | No       | Scale of the theme               |
| style  | string | No       | Customization of the theme styles|

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTheme",
  "properties": {
    "theme": "light",
    "color": "blue",
    "scale": "medium",
    "style": "custom-style"
  }
}
```

### spTable

Table of elements

#### Parameters

| Name      | Type   | Required | Description                                |
|-----------|--------|----------|--------------------------------------------|
| selects   | string | No       | Type of row selection in the table        |
| selected  | string | No       | Rows selected at table initialization      |

#### Events

| Name    | Type   | Required | Description                                |
|---------|--------|----------|--------------------------------------------|
| change  | array  | No       | Action triggered when row selection changes in the table |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTable",
  "properties": {
    "selects": "multiple",
    "selected": "row1,row2"
  },
  "events": {
    "change": []
  }
}
```

### spTableHead

Table header

#### Parameters

None

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableHead",
  "properties": {}
}
```

### spTableHeadCell

Table header cell

#### Parameters

| Name         | Type   | Required | Description                      |
|--------------|--------|----------|----------------------------------|
| textContent  | string | No       | Text of the header cell          |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableHeadCell",
  "properties": {
    "textContent": "Header Text"
  }
}
```

### spTableBody

Table body content

#### Parameters

None

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableBody",
  "properties": {}
}
```

### spTableRow

Table row

#### Parameters

| Name   | Type   | Required | Description                      |
|--------|--------|----------|----------------------------------|
| value  | string | No       | Identifier of the table row      |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableRow",
  "properties": {
    "value": "row1"
  }
}
```

### spTableCell

Table cell

#### Parameters

| Name         | Type   | Required | Description                      |
|--------------|--------|----------|----------------------------------|
| textContent  | string | No       | Text of the cell                 |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTableCell",
  "properties": {
    "textContent": "Cell Text"
  }
}
```

### spActionGroup

Action group

#### Parameters

| Name   | Type   | Required | Description                      |
|--------|--------|----------|----------------------------------|
| id     | string | No       | Identifier of the action group   |
| size   | string | No       | Size of the action group buttons  |
| dir    | string | No       | Text direction (ltr or rtl)      |
| style  | string | No       | Customization of the theme styles |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spActionGroup",
  "properties": {
    "id": "action-group-1",
    "size": "medium",
    "dir": "ltr",
    "style": "custom-style"
  }
}
```

### spActionButton

Action button to be included in an action group

#### Parameters

| Name             | Type    | Required | Description                      |
|------------------|---------|----------|----------------------------------|
| textContent      | string  | No       | Text of the button               |
| selected         | boolean | No       | Button selected                  |
| disabled         | boolean | No       | Button disabled                   |
| hold-affordance  | boolean | No       | Displays a check indicating the presence of an action list |
| quiet            | boolean | No       | Displays the button in quiet mode |
| toggle           | boolean | No       | Displays a toggleable button     |
| slot             | string  | No       | Icon placement                   |
| size             | string  | No       | Size of the button               |

#### Events

| Name    | Type   | Required | Description                                |
|---------|--------|----------|--------------------------------------------|
| click   | array  | No       | Action triggered when the button is clicked |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spActionButton",
  "properties": {
    "textContent": "Action",
    "selected": false,
    "disabled": false,
    "hold-affordance": false,
    "quiet": false,
    "toggle": false,
    "slot": "icon",
    "size": "medium"
  },
  "events": {
    "click": []
  }
}
```

### spIcon

Displays an icon

#### Parameters

| Name   | Type   | Required | Description                      |
|--------|--------|----------|----------------------------------|
| name   | string | No       | Name of the icon                 |
| size   | string | No       | Size of the icon                 |
| label  | string | No       | Label text for the icon          |
| src    | string | No       | Link to the image to display     |
| slot   | string | No       | Icon placement                   |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spIcon",
  "properties": {
    "name": "icon-name",
    "size": "medium",
    "label": "Icon Label",
    "src": "icon-src",
    "slot": "icon-slot"
  }
}
```

### spDivider

Divider bar

#### Parameters

| Name     | Type    | Required | Description                      |
|----------|---------|----------|----------------------------------|
| size     | string  | No       | Size of the divider bar          |
| style    | string  | No       | Customization of the theme styles |
| vertical | boolean | No       | Places the divider vertically     |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spDivider",
  "properties": {
    "size": "medium",
    "style": "custom-style",
    "vertical": false
  }
}
```

### spSearch

Search bar

#### Parameters

| Name     | Type    | Required | Description                      |
|----------|---------|----------|----------------------------------|
| disabled | boolean | No       | Search bar disabled               |
| quiet    | boolean | No       | Displays the search bar in quiet mode |

#### Events

| Name    | Type   | Required | Description                                |
|---------|--------|----------|--------------------------------------------|
| submit  | array  | No       | Action triggered when the search is submitted |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spSearch",
  "properties": {
    "disabled": false,
    "quiet": false
  },
  "events": {
    "submit": []
  }
}
```

### spTopNav

Horizontal navigation bar

#### Parameters

None

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTopNav",
  "properties": {}
}
```

### spTopNavItem

Element of the horizontal navigation bar

#### Parameters

| Name         | Type   | Required | Description                      |
|--------------|--------|----------|----------------------------------|
| textContent  | string | No       | Text of the navigation item      |
| href         | string | No       | Redirect address                 |
| style        | string | No       | Customization of the navigation bar styles |

#### Events

| Name    | Type   | Required | Description                                |
|---------|--------|----------|--------------------------------------------|
| click   | array  | No       | Action triggered when the button is clicked |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTopNavItem",
  "properties": {
    "textContent": "Home",
    "href": "/home",
    "style": "custom-style"
  },
  "events": {
    "click": []
  }
}
```

### spActionMenu

Action menu

#### Parameters

| Name       | Type    | Required | Description                      |
|------------|---------|----------|----------------------------------|
| label      | string  | No       | Description label of the menu    |
| placement  | string  | No       | Placement of the menu            |
| style      | string  | No       | Customization of the navigation bar styles |
| quiet      | boolean | No       | Enables quiet mode for the menu  |
| size       | string  | No       | Size of the action group buttons  |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spActionMenu",
  "properties": {
    "label": "Menu Label",
    "placement": "top",
    "style": "custom-style",
    "quiet": false,
    "size": "medium"
  }
}
```

### spMenu

Menu

#### Parameters

| Name        | Type    | Required | Description                      |
|-------------|---------|----------|----------------------------------|
| slot        | string  | No       | Description label of the menu    |
| style       | string  | No       | Customization of the navigation bar styles |
| selectable  | boolean | No       | Enables selectable mode for the menu |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spMenu",
  "properties": {
    "slot": "menu-slot",
    "style": "custom-style",
    "selectable": true
  }
}
```

### spMenuItem

Menu item

#### Parameters

| Name         | Type    | Required | Description                      |
|--------------|---------|----------|----------------------------------|
| textContent  | string  | No       | Text of the menu item            |
| href         | string  | No       | Link of the menu item            |
| value        | string  | No       | Value of the menu item           |
| disabled     | boolean | No       | Disabled item                    |
| selected     | boolean | No       | Selects the item in the menu     |

#### Events

| Name    | Type   | Required | Description                                |
|---------|--------|----------|--------------------------------------------|
| click   | array  | No       | Action triggered when the menu item is clicked |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spMenuItem",
  "properties": {
    "textContent": "Menu Item",
    "href": "/item",
    "value": "item1",
    "disabled": false,
    "selected": false
  },
  "events": {
    "click": []
  }
}
```

### spMenuDivider

Menu divider

#### Parameters

None

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spMenuDivider",
  "properties": {}
}
```

### spIllustratedMessage

Illustrated message

#### Parameters

| Name         | Type   | Required | Description                      |
|--------------|--------|----------|----------------------------------|
| heading      | string | Yes      | Title of the illustrated message  |
| description  | string | Yes      | Description of the illustrated message |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spIllustratedMessage",
  "properties": {
    "heading": "Illustrated Message",
    "description": "This is an illustrated message."
  }
}
```

### spFieldLabel

Form field label

#### Parameters

| Name         | Type    | Required | Description                      |
|--------------|---------|----------|----------------------------------|
| textContent  | string  | Yes      | Text of the element              |
| for          | string  | Yes      | Identifier of the associated field |
| required     | boolean | No       | Required field                   |
| size         | string  | No       | Size of the field                |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spFieldLabel",
  "properties": {
    "textContent": "Field Label",
    "for": "input-id",
    "required": true,
    "size": "medium"
  }
}
```

### spTextfield

Text input field

#### Parameters

| Name         | Type    | Required | Description                      |
|--------------|---------|----------|----------------------------------|
| id           | string  | No       | Identifier of the field          |
| name         | string  | No       | Name of the field                |
| placeholder  | string  | No       | Placeholder text of the field    |
| valid        | boolean | No       | Valid field                      |
| invalid      | boolean | No       | Invalid field                    |
| value        | string  | No       | Value of the field               |
| quiet        | boolean | No       | Field in quiet mode              |
| type         | string  | No       | Type of the field                |
| multiline    | boolean | No       | Multiline field                  |
| grows        | boolean | No       | Field that grows automatically   |
| pattern      | string  | No       | Pattern of the field             |
| size         | string  | No       | Size of the field                |
| style        | string  | No       | Customization of the styles      |

#### Events

| Name    | Type   | Required | Description                                |
|---------|--------|----------|--------------------------------------------|
| input   | array  | No       | Action triggered when input is entered in the field |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spTextfield",
  "properties": {
    "id": "textfield-id",
    "name": "textfield-name",
    "placeholder": "Enter text",
    "valid": true,
    "invalid": false,
    "value": "Initial value",
    "quiet": false,
    "type": "text",
    "multiline": false,
    "grows": false,
    "pattern": ".*",
    "size": "medium",
    "style": "custom-style"
  },
  "events": {
    "input": []
  }
}
```

### spHelpText

Help text

#### Parameters

| Name         | Type   | Required | Description                      |
|--------------|--------|----------|----------------------------------|
| textContent  | string | Yes      | Text of the element              |
| slot         | string | No       | Placement of the help text       |

#### Example

```json
{
  "library": "@digipair/skill-web-spectrum",
  "element": "spHelpText",
  "properties": {
    "textContent": "Help text",
    "slot": "help-slot"
  }
}
```

### spButton

Button

#### Parameters

| Name        | Type    | Required | Description                      |
|-------------|---------|----------|----------------------------------|
| id          | string  | No       | Identifier of the field          |
| textContent | string  | No       | Text of the element              |
| href        | string  | No       | Redirect address of the button   |