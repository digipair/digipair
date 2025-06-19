# @digipair/skill-exif

**Version:** 0.1.0  
**Résumé:** EXIF extraction  
**Description:** Cette compétence permet d’analyser et d’extraire les métadonnées EXIF des images.  
**Icône:** 🖼️

## Table des matières

- [Fonctions](#fonctions)
  - [parse](#parse)

---

## Fonctions

### parse

Analyse les données EXIF à partir du contenu d’une image.

#### Description

La fonction `parse` permet d’extraire les métadonnées EXIF d’une image fournie sous forme de chaîne encodée en base64 ou de chaîne binaire. Elle retourne les informations EXIF extraites, telles que la date de prise de vue, le modèle de l’appareil photo, les coordonnées GPS, etc.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                 |
|----------|--------|--------|-----------------------------------------------------------------------------|
| content  | string | Oui    | Contenu de l’image sous forme de chaîne encodée en base64 ou chaîne binaire. |

#### Exemple

```json
{
  "library": "@digipair/skill-exif",
  "element": "parse",
  "properties": {
    "content": "/9j/4AAQSkZJRgABAQAAAQABAAD..." // Chaîne base64 de l'image
  }
}
```

#### Exemple de résultat

```json
{
  "Make": "Canon",
  "Model": "Canon EOS 80D",
  "DateTimeOriginal": "2023:06:15 14:23:11",
  "GPSLatitude": 48.858844,
  "GPSLongitude": 2.294351,
  "Orientation": 1,
  // ... autres champs EXIF
}
```

---

## Notes

- La fonction `parse` ne prend en charge que les images dont le contenu est fourni sous forme de chaîne base64 ou binaire.
- Les métadonnées extraites dépendent des informations présentes dans l’image source.
- Cette compétence est utile pour l’analyse automatisée de photos, la gestion de catalogues d’images ou l’extraction de données de prise de vue.

---

**Auteur :** [@digipair](https://github.com/digipair)  
**Licence :** MIT