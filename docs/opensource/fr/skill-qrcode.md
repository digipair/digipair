# @digipair/skill-qrcode

**Version:** 0.1.0  
**Résumé:** QRCode manipulation  
**Description:** Cette compétence permet de lire et de générer des QR codes.  
**Icône:** 🌐

## Table des matières

- [Fonctions](#fonctions)
  - [encode](#encode)
  - [decode](#decode)

---

## Fonctions

### encode

Génère un QR code à partir d'une chaîne de caractères.

#### Paramètres

| Nom   | Type   | Requis | Description         |
|-------|--------|--------|---------------------|
| data  | string | Oui    | Données à encoder   |

#### Exemple

```json
{
  "library": "@digipair/skill-qrcode",
  "element": "encode",
  "properties": {
    "data": "https://digipair.com"
  }
}
```

#### Résultat attendu

Retourne une image du QR code encodée en base64.

---

### decode

Décode un QR code à partir d'une image encodée en base64.

#### Paramètres

| Nom   | Type   | Requis | Description                        |
|-------|--------|--------|------------------------------------|
| image | string | Oui    | Image du QR code (base64) à décoder |

#### Exemple

```json
{
  "library": "@digipair/skill-qrcode",
  "element": "decode",
  "properties": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }
}
```

#### Résultat attendu

Retourne la chaîne de caractères décodée à partir du QR code.

---

## Notes

- La fonction `encode` permet de transformer n'importe quelle chaîne de caractères en QR code, utilisable pour le partage d'URL, de texte, etc.
- La fonction `decode` permet d'extraire les données contenues dans un QR code à partir d'une image encodée en base64.
- Assurez-vous que l'image fournie à la fonction `decode` soit bien un QR code valide et correctement encodé en base64.
- Ces fonctions sont destinées à être utilisées dans des environnements JavaScript et ne correspondent pas à des endpoints HTTP, mais à des appels de fonctions de la librairie.

---

**Auteur :** [@digipair](https://github.com/digipair)  
**Licence :** MIT