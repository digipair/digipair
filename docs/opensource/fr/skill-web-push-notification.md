# @digipair/skill-web-push-notification

**Version:** 0.1.0  
**Résumé:** Permettre à l'utilisateur de recevoir des notifications push  
**Description:** Cette compétence permet à l'utilisateur de recevoir des notifications via WebPush pour des mises à jour en temps réel.  
**Icône:** 📕  

## Table des matières

- [Fonctions](#fonctions)
  - [initialize](#initialize)

---

## Fonctions

### initialize

Enregistre l'utilisateur pour recevoir des notifications push.

#### Description

La fonction `initialize` permet d'enregistrer l'utilisateur afin qu'il puisse recevoir des notifications push en temps réel via le service WebPush. Elle peut utiliser une clé publique VAPID pour activer l'abonnement aux notifications.

#### Paramètres

| Nom        | Type   | Requis | Description                                      |
|------------|--------|--------|--------------------------------------------------|
| publicKey  | string | Non    | Clé publique VAPID utilisée pour l'abonnement.   |

#### Exemple d'utilisation

```js
import { initialize } from '@digipair/skill-web-push-notification';

// Exemple avec une clé publique VAPID
initialize({
  publicKey: 'BEl6...votreClePublique...Qw'
});

// Exemple sans clé publique (utilisation de la configuration par défaut)
initialize();
```

#### Exemple d'appel JSON

```json
{
  "library": "@digipair/skill-web-push-notification",
  "element": "initialize",
  "properties": {
    "publicKey": "BEl6...votreClePublique...Qw"
  }
}
```

#### Notes

- Le paramètre `publicKey` est optionnel. Si non fourni, la fonction utilisera la configuration par défaut du service.
- Cette fonction doit être appelée dans un contexte où l'utilisateur peut accepter les notifications (typiquement dans un navigateur compatible avec les notifications push).
- Assurez-vous que l'utilisateur a donné son consentement pour recevoir des notifications push.

---

## Notes générales

- La librairie `@digipair/skill-web-push-notification` est conçue pour faciliter l'intégration des notifications push Web dans vos applications JavaScript.
- Pour un fonctionnement optimal, vérifiez la compatibilité du navigateur et la disponibilité du service worker.
- Pour plus d'informations sur la configuration des notifications push et des clés VAPID, consultez la [documentation WebPush MDN](https://developer.mozilla.org/fr/docs/Web/API/Push_API).

---

**Auteur:** Équipe DigiPair  
**Licence:** MIT  
**Version:** 0.1.0