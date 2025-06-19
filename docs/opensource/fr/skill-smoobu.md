# @digipair/skill-smoobu

**Version :** 0.1.0  
**Résumé :** Management of rentals via Smoobu  
**Description :** This skill allows the use of the Smoobu service.  
**Icône :** 🏡

---

## Table des matières

- [Fonctions](#fonctions)
  - [getReservationWithId](#getreservationwithid)
  - [sendMessage](#sendmessage)
  - [getAllReservations](#getallreservations)

---

## Fonctions

### getReservationWithId

Obtenir les informations d'une réservation Smoobu à partir de son identifiant.

#### Paramètres

| Nom                | Type   | Requis | Description                |
|--------------------|--------|--------|----------------------------|
| reservationId      | string | Oui    | Identifiant de réservation Smoobu |
| SMOOBU_API_KEY     | string | Non    | Clé API Smoobu (optionnel, peut être défini dans l'environnement) |
| SMOOBU_API_ENDPOINT| string | Non    | Endpoint de l'API Smoobu (optionnel, peut être défini dans l'environnement) |

#### Exemple

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "getReservationWithId",
  "properties": {
    "reservationId": "123456789",
    "SMOOBU_API_KEY": "votre_cle_api_smoobu",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com/v1"
  }
}
```

---

### sendMessage

Envoyer un message à une réservation Smoobu.

#### Paramètres

| Nom                | Type   | Requis | Description                |
|--------------------|--------|--------|----------------------------|
| reservationId      | string | Oui    | Identifiant de réservation Smoobu |
| message            | string | Oui    | Message à envoyer          |
| SMOOBU_API_KEY     | string | Non    | Clé API Smoobu (optionnel, peut être défini dans l'environnement) |
| SMOOBU_API_ENDPOINT| string | Non    | Endpoint de l'API Smoobu (optionnel, peut être défini dans l'environnement) |

#### Exemple

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "sendMessage",
  "properties": {
    "reservationId": "123456789",
    "message": "Bienvenue dans notre location !",
    "SMOOBU_API_KEY": "votre_cle_api_smoobu",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com/v1"
  }
}
```

---

### getAllReservations

Lister les réservations Smoobu avec de nombreux filtres disponibles.

#### Paramètres

| Nom                   | Type   | Requis | Description                        |
|-----------------------|--------|--------|------------------------------------|
| created_from          | string | Non    | Date de création (à partir de)     |
| created_to            | string | Non    | Date de création (jusqu'à)         |
| from                  | string | Non    | Date de début                      |
| to                    | string | Non    | Date de fin                        |
| modifiedFrom          | string | Non    | Date de modification (à partir de) |
| modifiedTo            | string | Non    | Date de modification (jusqu'à)     |
| arrivalFrom           | string | Non    | Date d'arrivée (à partir de)       |
| arrivalTo             | string | Non    | Date d'arrivée (jusqu'à)           |
| departureFrom         | string | Non    | Date de départ (à partir de)       |
| departureTo           | string | Non    | Date de départ (jusqu'à)           |
| showCancellation      | string | Non    | Afficher les annulations           |
| excludeBlocked        | string | Non    | Exclure les périodes bloquées      |
| page                  | string | Non    | Page de résultats                  |
| pageSize              | string | Non    | Taille de la page                  |
| apartmentId           | string | Non    | Identifiant de l'appartement       |
| includeRelated        | string | Non    | Inclure les détails associés       |
| includePriceElements  | string | Non    | Inclure les éléments de prix       |
| SMOOBU_API_KEY        | string | Non    | Clé API Smoobu (optionnel, peut être défini dans l'environnement) |
| SMOOBU_API_ENDPOINT   | string | Non    | Endpoint de l'API Smoobu (optionnel, peut être défini dans l'environnement) |

#### Exemple

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "getAllReservations",
  "properties": {
    "from": "2024-06-01",
    "to": "2024-06-30",
    "apartmentId": "987654321",
    "page": "1",
    "pageSize": "50",
    "SMOOBU_API_KEY": "votre_cle_api_smoobu",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com/v1"
  }
}
```

---

## Notes

- Les paramètres `SMOOBU_API_KEY` et `SMOOBU_API_ENDPOINT` peuvent être fournis dans les propriétés ou définis dans l'environnement d'exécution.
- Les fonctions sont destinées à être utilisées dans un contexte JavaScript, et non via une API HTTP.
- Assurez-vous de respecter les formats de date attendus par Smoobu (ex : `YYYY-MM-DD`).
- Pour des usages avancés, référez-vous à la documentation officielle de l’API Smoobu.

---

**@digipair/skill-smoobu** facilite la gestion des réservations et la communication avec les locataires via Smoobu, tout en permettant une intégration flexible dans vos projets JavaScript.