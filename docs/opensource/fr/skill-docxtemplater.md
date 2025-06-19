# @digipair/skill-docxtemplater

**Version:** 0.1.0  
**Summary:** Word document generation  
**Description:** This skill allows generating Word documents from templates.  
**Icon:** 🔗

## Table des matières

- [Fonctions](#fonctions)
  - [generate](#generate)

---

## Fonctions

### generate

Génère un document Word à partir d'un template `.docx` et de données fournies.

#### Paramètres

| Nom      | Type   | Requis | Description                                                        |
|----------|--------|--------|--------------------------------------------------------------------|
| template | string | Oui    | Template Word au format base64 (.docx)                             |
| data     | object | Oui    | Données à injecter dans le template (clé/valeur pour le remplissage)|

#### Exemple

```json
{
  "library": "@digipair/skill-docxtemplater",
  "element": "generate",
  "properties": {
    "template": "UEsDBBQABgAIAAAAIQ...",
    "data": {
      "firstName": "Jean",
      "lastName": "Dupont",
      "date": "2024-06-01"
    }
  }
}
```

#### Description détaillée

La fonction `generate` permet de créer dynamiquement un document Word en injectant des données dans un template `.docx` fourni au format base64.  
Le template doit être un fichier Word valide contenant des balises de fusion (par exemple, `{firstName}`) qui seront remplacées par les valeurs correspondantes du paramètre `data`.

#### Exemple d'utilisation en JavaScript

```js
import { generate } from '@digipair/skill-docxtemplater';

const templateBase64 = 'UEsDBBQABgAIAAAAIQ...'; // Votre template .docx encodé en base64
const data = {
  firstName: 'Jean',
  lastName: 'Dupont',
  date: '2024-06-01'
};

const result = await generate({ template: templateBase64, data });
// result : Buffer ou base64 du document Word généré
```

#### Résultat

La fonction retourne le document Word généré, généralement sous forme de buffer ou de chaîne base64, prêt à être téléchargé ou stocké.

---

## Notes

- Le template doit être un fichier Word (.docx) encodé en base64.
- Les clés de l'objet `data` doivent correspondre aux balises présentes dans le template Word.
- Cette fonction est idéale pour générer des contrats, attestations, rapports, etc., de manière automatisée à partir de modèles personnalisés.

---

**Pour toute question ou contribution, consultez le dépôt GitHub du projet.**