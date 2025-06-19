# @digipair/skill-pdf2pic

**Version:** 0.1.0  
**Résumé:** PDF to image conversion  
**Description:** Convert PDF files to images  
**Icône:** 📕  

## Table des matières

- [Fonctions](#fonctions)
  - [convert](#convert)

---

## Fonctions

### convert

Convertit une page d’un fichier PDF en image encodée en base64.

#### Description

La fonction `convert` permet de convertir une page spécifique (ou la première page par défaut) d’un fichier PDF en une image, encodée en base64. Le format de sortie, la résolution (DPI) et la page à convertir peuvent être personnalisés.

#### Paramètres

| Nom      | Type    | Requis | Description                                                                 |
|----------|---------|--------|-----------------------------------------------------------------------------|
| file     | string  | Oui    | Fichier PDF à convertir (sous forme de chemin, buffer, ou base64 selon l’implémentation). |
| page     | number  | Non    | Numéro de la page à convertir (commence généralement à 1).                  |
| format   | string  | Non    | Format de l’image générée (ex: `"png"`, `"jpeg"`).                          |
| density  | number  | Non    | Résolution de l’image en DPI (dots per inch). Par défaut : 72.              |

#### Exemple d’utilisation

```js
const { convert } = require('@digipair/skill-pdf2pic');

// Exemple d'appel de la fonction
const result = await convert({
  file: '/chemin/vers/mon-fichier.pdf',
  page: 2,
  format: 'jpeg',
  density: 150
});

// result : { image: 'data:image/jpeg;base64,...' }
```

#### Exemple de payload JSON

```json
{
  "library": "@digipair/skill-pdf2pic",
  "element": "convert",
  "properties": {
    "file": "/chemin/vers/mon-fichier.pdf",
    "page": 1,
    "format": "png",
    "density": 96
  }
}
```

#### Valeur de retour

Un objet contenant l’image encodée en base64, généralement sous la forme suivante :

```js
{
  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
}
```

#### Notes

- Si le paramètre `page` n’est pas spécifié, la première page du PDF sera convertie.
- Le paramètre `density` permet d’ajuster la qualité de l’image générée. Une valeur plus élevée donne une meilleure qualité mais augmente la taille du fichier.
- Le paramètre `format` doit être compatible avec les formats supportés par la librairie (ex: `"png"`, `"jpeg"`).

---

## Notes générales

- Cette librairie est conçue pour être utilisée dans des environnements Node.js.
- Assurez-vous que le fichier PDF fourni est accessible et lisible par le processus Node.js.
- Pour des conversions en masse ou des fichiers volumineux, surveillez l’utilisation mémoire.

---

**@digipair/skill-pdf2pic** – Convertissez facilement vos PDF en images pour l’affichage, la prévisualisation ou l’export.