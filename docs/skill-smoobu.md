# @digipair/skill-smoobu

**Version:** 0.1.0  
**Summary:** Gestion des locations via Smoobu  
**Description:** Cette compétence permet d'utiliser le service Smoobu.  
**Icon:** 🏡

## Table des matières

- [Fonctions](#fonctions)
  - [getReservationWithId](#getReservationWithId)
  - [sendMessage](#sendMessage)
  - [getAllReservations](#getAllReservations)

## Fonctions

### getReservationWithId

Information d'une réservation Smoobu

#### Paramètres

| Nom                | Type   | Requis | Description                      |
|--------------------|--------|--------|----------------------------------|
| reservationId      | string | Oui    | Identifiant de la réservation    |
| SMOOBU_API_KEY     | string | Non    | Clé d'API Smoobu                 |
| SMOOBU_API_ENDPOINT| string | Non    | Endpoint de l'API Smoobu         |

#### Exemple

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "getReservationWithId",
  "properties": {
    "reservationId": "12345",
    "SMOOBU_API_KEY": "your_api_key",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com"
  }
}
```

### sendMessage

Envoi d'un message via Smoobu

#### Paramètres

| Nom                | Type   | Requis | Description                      |
|--------------------|--------|--------|----------------------------------|
| reservationId      | string | Oui    | Identifiant de la réservation    |
| message            | string | Oui    | Message à envoyer                |
| SMOOBU_API_KEY     | string | Non    | Clé d'API Smoobu                 |
| SMOOBU_API_ENDPOINT| string | Non    | Endpoint de l'API Smoobu         |

#### Exemple

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "sendMessage",
  "properties": {
    "reservationId": "12345",
    "message": "Votre réservation a été confirmée.",
    "SMOOBU_API_KEY": "your_api_key",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com"
  }
}
```

### getAllReservations

Liste des réservations Smoobu

#### Paramètres

| Nom                  | Type   | Requis | Description                      |
|----------------------|--------|--------|----------------------------------|
| created_from         | string | Non    | Date de création depuis          |
| created_to           | string | Non    | Date de création jusqu'à         |
| from                 | string | Non    | Date de début                    |
| to                   | string | Non    | Date de fin                      |
| modifiedFrom         | string | Non    | Date de modification depuis      |
| modifiedTo           | string | Non    | Date de modification jusqu'à     |
| arrivalFrom          | string | Non    | Date d'arrivée depuis            |
| arrivalTo            | string | Non    | Date d'arrivée jusqu'à           |
| departureFrom        | string | Non    | Date de départ depuis            |
| departureTo          | string | Non    | Date de départ jusqu'à           |
| showCancellation     | string | Non    | Afficher les annulations         |
| excludeBlocked       | string | Non    | Exclure les bloqués              |
| page                 | string | Non    | Page                             |
| pageSize             | string | Non    | Taille de la page                |
| apartmentId          | string | Non    | Identifiant de l'appartement     |
| includeRelated       | string | Non    | Inclure les détails              |
| includePriceElements | string | Non    | Inclure les éléments de prix     |
| SMOOBU_API_KEY       | string | Non    | Clé d'API Smoobu                 |
| SMOOBU_API_ENDPOINT  | string | Non    | Endpoint de l'API Smoobu         |

#### Exemple

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "getAllReservations",
  "properties": {
    "created_from": "2023-01-01",
    "created_to": "2023-12-31",
    "from": "2023-01-01",
    "to": "2023-12-31",
    "modifiedFrom": "2023-01-01",
    "modifiedTo": "2023-12-31",
    "arrivalFrom": "2023-01-01",
    "arrivalTo": "2023-12-31",
    "departureFrom": "2023-01-01",
    "departureTo": "2023-12-31",
    "showCancellation": "true",
    "excludeBlocked": "false",
    "page": "1",
    "pageSize": "10",
    "apartmentId": "apartment_123",
    "includeRelated": "true",
    "includePriceElements": "true",
    "SMOOBU_API_KEY": "your_api_key",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com"
  }
}
```

## Notes

- Les fonctions `getReservationWithId`, `sendMessage`, et `getAllReservations` permettent respectivement de récupérer les informations d'une réservation, d'envoyer un message via Smoobu, et de lister les réservations.
- Assurez-vous de fournir les paramètres requis pour chaque fonction afin de garantir leur bon fonctionnement.
- Les paramètres `SMOOBU_API_KEY` et `SMOOBU_API_ENDPOINT` sont optionnels mais peuvent être nécessaires selon votre configuration.