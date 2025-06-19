# @digipair/skill-pdf

**Version:** 0.1.0  
**Résumé:** PDF Manipulation  
**Description:** Cette compétence permet de manipuler des fichiers PDF pour extraire ou remplir des formulaires.  
**Icône:** 📕  

## Table des matières

- [Fonctions](#fonctions)
  - [fillForm](#fillform)
  - [getFields](#getfields)
  - [getSize](#getsize)

---

## Fonctions

### fillForm

Remplit un formulaire PDF avec les valeurs spécifiées.

#### Description

La fonction `fillForm` permet de remplir un formulaire PDF à partir d’un fichier PDF encodé en base64 et d’un objet de données. Il est également possible d’aplatir le formulaire après remplissage.

#### Paramètres

| Nom      | Type    | Requis | Description                                      |
|----------|---------|--------|--------------------------------------------------|
| file     | string  | Oui    | Fichier PDF encodé en base64 à remplir           |
| data     | object  | Oui    | Données à insérer dans le PDF (clé/valeur)       |
| flatten  | boolean | Non    | Aplatir le formulaire après remplissage (option) |

#### Exemple

```json
{
  "library": "@digipair/skill-pdf",
  "element": "fillForm",
  "properties": {
    "file": "<base64_pdf>",
    "data": {
      "Nom": "Dupont",
      "Prénom": "Jean"
    },
    "flatten": true
  }
}
```

---

### getFields

Extrait les champs d’un formulaire PDF.

#### Description

La fonction `getFields` permet d’extraire la liste des champs présents dans un formulaire PDF à partir d’un fichier PDF encodé en base64.

#### Paramètres

| Nom   | Type   | Requis | Description                            |
|-------|--------|--------|----------------------------------------|
| file  | string | Oui    | Fichier PDF encodé en base64 à analyser|

#### Exemple

```json
{
  "library": "@digipair/skill-pdf",
  "element": "getFields",
  "properties": {
    "file": "<base64_pdf>"
  }
}
```

---

### getSize

Retourne le nombre de pages d’un PDF.

#### Description

La fonction `getSize` permet d’obtenir le nombre de pages d’un fichier PDF à partir d’un fichier PDF encodé en base64.

#### Paramètres

| Nom   | Type   | Requis | Description                        |
|-------|--------|--------|------------------------------------|
| file  | string | Oui    | Fichier PDF encodé en base64 à analyser |

#### Exemple

```json
{
  "library": "@digipair/skill-pdf",
  "element": "getSize",
  "properties": {
    "file": "<base64_pdf>"
  }
}
```

---

## Notes

- Les fichiers PDF doivent être fournis sous forme de chaînes encodées en base64.
- Pour `fillForm`, le paramètre `data` doit correspondre aux noms des champs du formulaire PDF.
- Le paramètre `flatten` de `fillForm` permet de rendre le formulaire non modifiable après remplissage.
- Les fonctions sont conçues pour être utilisées dans des environnements JavaScript, et non via une API HTTP.

---

**Auteur:** [@digipair](https://github.com/digipair)  
**Licence:** MIT

---

*Cette documentation a été générée automatiquement à partir de la spécification OpenAPI de la librairie.*