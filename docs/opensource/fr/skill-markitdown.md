# @digipair/skill-markitdown

**Version:** 0.1.0  
**Résumé:** Conversion de fichiers Markdown  
**Description:** Cette compétence permet de convertir des fichiers PDF, DOCX, etc. en Markdown.  
**Icône:** 📄

## Table des matières

- [Fonctions](#fonctions)
  - [convert](#convert)

---

## Fonctions

### convert

Convertir un fichier (PDF, DOCX, etc.) en Markdown.

#### Paramètres

| Nom    | Type   | Requis | Description                                 |
|--------|--------|--------|---------------------------------------------|
| file   | string | Oui    | Fichier à convertir (chemin ou buffer base64) |
| path   | string | Non    | Chemin vers l'exécutable markitdown         |

#### Exemple

```json
{
  "library": "@digipair/skill-markitdown",
  "element": "convert",
  "properties": {
    "file": "/chemin/vers/mon-fichier.pdf",
    "path": "/usr/local/bin/markitdown"
  }
}
```

#### Description détaillée

La fonction `convert` permet de convertir un fichier source (PDF, DOCX, etc.) en un fichier Markdown.  
Le paramètre `file` est obligatoire et doit contenir le chemin du fichier à convertir ou son contenu encodé en base64.  
Le paramètre optionnel `path` permet de spécifier le chemin personnalisé vers l’exécutable markitdown si celui-ci n’est pas dans le PATH système.

#### Valeur de retour

La fonction retourne le contenu du fichier converti au format Markdown sous forme de chaîne de caractères.

---

## Notes

- Assurez-vous que l’exécutable `markitdown` est installé et accessible sur votre système.
- Le paramètre `path` est utile si vous utilisez une version personnalisée ou non standard de l’exécutable.
- Les formats de fichiers supportés dépendent de la version de l’exécutable `markitdown` utilisé.
- Pour des raisons de sécurité, vérifiez toujours la source des fichiers à convertir.

---

**Auteur :** [@digipair](https://github.com/digipair)  
**Licence :** MIT