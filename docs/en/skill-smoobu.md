# @digipair/skill-smoobu

**Version:** 0.1.0  
**Summary:** Management of rentals via Smoobu  
**Description:** This skill allows the use of the Smoobu service.  
**Icon:** 🏡

## Table of Contents

- [Functions](#functions)
  - [getReservationWithId](#getReservationWithId)
  - [sendMessage](#sendMessage)
  - [getAllReservations](#getAllReservations)

## Functions

### getReservationWithId

Information about a Smoobu reservation

#### Parameters

| Name                | Type   | Required | Description                      |
|---------------------|--------|----------|----------------------------------|
| reservationId       | string | Yes      | Reservation identifier           |
| SMOOBU_API_KEY      | string | No       | Smoobu API key                   |
| SMOOBU_API_ENDPOINT | string | No       | Smoobu API endpoint              |

#### Example

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

Send a message via Smoobu

#### Parameters

| Name                | Type   | Required | Description                      |
|---------------------|--------|----------|----------------------------------|
| reservationId       | string | Yes      | Reservation identifier           |
| message             | string | Yes      | Message to send                  |
| SMOOBU_API_KEY      | string | No       | Smoobu API key                   |
| SMOOBU_API_ENDPOINT | string | No       | Smoobu API endpoint              |

#### Example

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "sendMessage",
  "properties": {
    "reservationId": "12345",
    "message": "Your reservation has been confirmed.",
    "SMOOBU_API_KEY": "your_api_key",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com"
  }
}
```

### getAllReservations

List of Smoobu reservations

#### Parameters

| Name                  | Type   | Required | Description                      |
|-----------------------|--------|----------|----------------------------------|
| created_from          | string | No       | Creation date from               |
| created_to            | string | No       | Creation date to                 |
| from                  | string | No       | Start date                       |
| to                    | string | No       | End date                         |
| modifiedFrom          | string | No       | Modification date from           |
| modifiedTo            | string | No       | Modification date to             |
| arrivalFrom           | string | No       | Arrival date from                |
| arrivalTo             | string | No       | Arrival date to                  |
| departureFrom         | string | No       | Departure date from              |
| departureTo           | string | No       | Departure date to                |
| showCancellation      | string | No       | Show cancellations               |
| excludeBlocked        | string | No       | Exclude blocked                  |
| page                  | string | No       | Page                             |
| pageSize              | string | No       | Page size                        |
| apartmentId           | string | No       | Apartment identifier             |
| includeRelated        | string | No       | Include related details          |
| includePriceElements  | string | No       | Include price elements           |
| SMOOBU_API_KEY        | string | No       | Smoobu API key                   |
| SMOOBU_API_ENDPOINT   | string | No       | Smoobu API endpoint              |

#### Example

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

- The functions `getReservationWithId`, `sendMessage`, and `getAllReservations` allow you to retrieve reservation information, send a message via Smoobu, and list reservations, respectively.
- Ensure to provide the required parameters for each function to guarantee their proper functioning.
- The parameters `SMOOBU_API_KEY` and `SMOOBU_API_ENDPOINT` are optional but may be necessary depending on your configuration.