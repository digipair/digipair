# @digipair/skill-s3

**Version:** 0.1.0  
**Résumé:** S3 File Manager  
**Description:** Manipulez des fichiers sur AWS S3 (upload, download, delete, list).  
**Icône:** 🗂️

## Table des matières

- [Fonctions](#fonctions)
  - [upload](#upload)
  - [download](#download)
  - [delete](#delete)
  - [list](#list)

---

## Fonctions

### upload

Uploader un fichier dans un bucket S3.

#### Paramètres

| Nom       | Type   | Requis | Description                                                  |
|-----------|--------|--------|--------------------------------------------------------------|
| bucket    | string | Oui    | Nom du bucket S3 cible.                                      |
| key       | string | Oui    | Clé (chemin) où le fichier sera stocké dans le bucket.       |
| content   | string | Oui    | Contenu du fichier encodé en base64 (avec préfixe data URI). |
| config    | object | Non    | Configuration du client AWS SDK (optionnelle).               |
| maxSizeMb | number | Oui    | Taille max du fichier en Mo (optionnelle).                   |


#### Exemple

```json
{
  "library": "@digipair/skill-s3",
  "element": "upload",
  "properties": {
    "bucket": "my-bucket",
    "key": "documents/report.pdf",
    "content": "data:application/pdf;base64,JVBERi0xLjQKJcfs...",
    "config": {
      "region": "eu-west-1",
      "accessKeyId": "AKIA...",
      "secretAccessKey": "..."
    },
    "maxSizeMb": 50
  },
}
```

---

### download

Télécharger un fichier depuis un bucket S3.

#### Paramètres

| Nom      | Type   | Requis | Description                                                        |
|----------|--------|--------|--------------------------------------------------------------------|
| bucket   | string | Oui    | Nom du bucket S3.                                                  |
| key      | string | Oui    | Clé (chemin) du fichier à télécharger.                             |
| range    | string | Non    | Plage de contenu à télécharger (ex: "bytes=0-1023").                |
| config   | object | Non    | Configuration du client AWS SDK (optionnelle).                     |

#### Exemple

```json
{
  "library": "@digipair/skill-s3",
  "element": "download",
  "properties": {
    "bucket": "my-bucket",
    "key": "documents/report.pdf",
    "range": "bytes=0-1023",
    "config": {
      "region": "eu-west-1"
    }
  }
}
```

---

### delete

Supprimer un fichier d’un bucket S3.

#### Paramètres

| Nom      | Type   | Requis | Description                                                        |
|----------|--------|--------|--------------------------------------------------------------------|
| bucket   | string | Oui    | Nom du bucket S3.                                                  |
| key      | string | Oui    | Clé (chemin) du fichier à supprimer.                               |
| config   | object | Non    | Configuration du client AWS SDK (optionnelle).                     |

#### Exemple

```json
{
  "library": "@digipair/skill-s3",
  "element": "delete",
  "properties": {
    "bucket": "my-bucket",
    "key": "documents/report.pdf",
    "config": {
      "region": "eu-west-1"
    }
  }
}
```

---

### list

Lister les fichiers d’un bucket S3, éventuellement filtrés par préfixe.

#### Paramètres

| Nom      | Type   | Requis | Description                                                        |
|----------|--------|--------|--------------------------------------------------------------------|
| bucket   | string | Oui    | Nom du bucket S3.                                                  |
| prefix   | string | Non    | Préfixe (dossier) pour filtrer les objets.                         |
| config   | object | Non    | Configuration du client AWS SDK (optionnelle).                     |

#### Exemple

```json
{
  "library": "@digipair/skill-s3",
  "element": "list",
  "properties": {
    "bucket": "my-bucket",
    "prefix": "documents/",
    "config": {
      "region": "eu-west-1"
    }
  }
}
```

---

## Notes

- Toutes les fonctions nécessitent au minimum le nom du bucket (`bucket`) et, sauf pour `list`, la clé de l’objet (`key`).
- Le paramètre `config` permet de personnaliser la configuration AWS (région, credentials, etc.) si besoin.
- Le contenu des fichiers à uploader doit être encodé en base64 et inclure le préfixe data URI.
- Pour la fonction `download`, le paramètre `range` permet de télécharger une partie du fichier (optionnel).
- Assurez-vous que les permissions AWS associées au client permettent les opérations souhaitées sur le bucket et les objets concernés.