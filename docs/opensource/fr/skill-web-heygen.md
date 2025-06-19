# @digipair/skill-web-heygen

**Version:** 0.1.0  
**Résumé:** Heygen Display  
**Description:** Cette compétence permet de gérer l’affichage des avatars Heygen.  
**Icône:** 🔗

## Table des matières

- [Fonctions](#fonctions)
  - [digipair-heygen](#digipair-heygen)
- [Événements](#événements)
  - [status](#status)
  - [message](#message)
  - [icecandidate](#icecandidate)
- [Notes](#notes)

---

## Fonctions

### digipair-heygen

Affiche un avatar interactif Heygen dans la page web.

#### Paramètres

| Nom         | Type   | Requis | Description                        |
|-------------|--------|--------|------------------------------------|
| videoStyle  | string | Non    | Style CSS appliqué à la balise vidéo. |
| class       | string | Non    | Classe CSS de l’élément.           |
| style       | string | Non    | Style CSS de l’élément.            |
| id          | string | Non    | Identifiant de l’élément.          |

#### Exemple

```json
{
  "library": "@digipair/skill-web-heygen",
  "element": "digipair-heygen",
  "properties": {
    "videoStyle": "width:100%;border-radius:8px;",
    "class": "heygen-avatar",
    "style": "margin: 10px;",
    "id": "avatar-heygen-1"
  }
}
```

---

## Événements

Les fonctions de cette librairie peuvent déclencher les événements suivants :

### status

- **Résumé :** Sur changement de statut
- **Description :** Action déclenchée lors d’un changement de statut de l’avatar Heygen.
- **Payload :** Tableau d’objets de configuration (`pinsSettings`).

### message

- **Résumé :** Sur réception de message
- **Description :** Action déclenchée lors de la réception d’un message.
- **Payload :** Tableau d’objets de configuration (`pinsSettings`).

### icecandidate

- **Résumé :** Sur réception d’icecandidate
- **Description :** Action déclenchée lors de la réception d’un candidat ICE (WebRTC).
- **Payload :** Tableau d’objets de configuration (`pinsSettings`).

---

## Notes

- Les paramètres sont tous optionnels et permettent de personnaliser l’intégration de l’avatar Heygen dans votre interface web.
- Les événements peuvent être utilisés pour réagir dynamiquement aux changements d’état ou aux messages reçus par l’avatar.
- Le schéma `pinsSettings` référencé dans les événements doit être consulté pour connaître la structure exacte des données transmises.
- Cette librairie ne fournit pas d’API HTTP, mais expose des fonctions JavaScript à intégrer dans vos projets frontend.

---

**Pour toute contribution ou question, consultez le dépôt officiel de la librairie.**