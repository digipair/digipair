# @digipair/skill-web

**Version:** 0.1.0  
**Summary:** Web page display  
**Description:** This skill encompasses the knowledge and use of web technologies necessary for developing and maintaining websites.  
**Icon:** 🌐

## Table of Contents

- [Functions](#functions)
  - [executeFactory](#executefactory)
  - [page](#page)

## Functions

### executeFactory

In the factory

#### Description

Executes a list of capabilities in the factory.

#### Parameters

| Name    | Type   | Required | Description                       |
|---------|--------|----------|-----------------------------------|
| execute | array  | Yes      | List of capabilities to execute   |

#### Example

```json
{
  "library": "@digipair/skill-web",
  "element": "executeFactory",
  "properties": {
    "execute": [
      // List of capabilities to execute
    ]
  }
}
```

### page

Web page

#### Description

Displays a page of a website.

#### Parameters

| Name               | Type   | Required | Description                                      |
|-------------------|--------|----------|--------------------------------------------------|
| body              | array  | Yes      | Content of the page                              |
| title             | string | No       | Title of the page                                |
| favicon           | string | No       | Icon of the page                                 |
| styleHtml         | string | No       | CSS style for the HTML element                   |
| styleBody         | string | No       | CSS style for the BODY element                   |
| factoryInitialize | array  | No       | Action triggered during factory initialization    |
| browserInitialize | array  | No       | Action triggered during browser initialization    |
| browserLoad       | array  | No       | Action triggered when the page is loaded in the browser |

#### Example

```json
{
  "library": "@digipair/skill-web",
  "element": "page",
  "properties": {
    "body": [
      // Content of the page
    ],
    "title": "Page Title",
    "favicon": "icon_url",
    "styleHtml": "css_for_html",
    "styleBody": "css_for_body",
    "factoryInitialize": [
      // Actions during factory initialization
    ],
    "browserInitialize": [
      // Actions during browser initialization
    ],
    "browserLoad": [
      // Actions when the page is loaded in the browser
    ]
  }
}
```

## Notes

- The `executeFactory` function is used to execute a list of capabilities in the factory.
- The `page` function allows displaying a web page with customization options such as title, icon, and CSS styles for HTML and BODY elements.
- The `factoryInitialize`, `browserInitialize`, and `browserLoad` actions allow defining specific behaviors during different phases of the page display.