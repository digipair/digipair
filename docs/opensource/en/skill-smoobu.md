# @digipair/skill-smoobu

**Version:** 0.1.0  
**Summary:** Management of rentals via Smoobu  
**Description:** This skill enables the use of the Smoobu service.  
**Icon:** 🏡

---

## Table of Contents

- [Functions](#functions)
  - [getReservationWithId](#getreservationwithid)
  - [sendMessage](#sendmessage)
  - [getAllReservations](#getallreservations)

---

## Functions

### getReservationWithId

Retrieve information about a Smoobu reservation by its identifier.

#### Parameters

| Name                | Type   | Required | Description                                                   |
| ------------------- | ------ | -------- | ------------------------------------------------------------- |
| reservationId       | string | Yes      | Smoobu reservation identifier                                 |
| SMOOBU_API_KEY      | string | No       | Smoobu API key (optional, can be set in the environment)      |
| SMOOBU_API_ENDPOINT | string | No       | Smoobu API endpoint (optional, can be set in the environment) |

#### Example

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "getReservationWithId",
  "properties": {
    "reservationId": "123456789",
    "SMOOBU_API_KEY": "your_smoobu_api_key",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com/v1"
  }
}
```

---

### sendMessage

Send a message to a Smoobu reservation.

#### Parameters

| Name                | Type   | Required | Description                                                   |
| ------------------- | ------ | -------- | ------------------------------------------------------------- |
| reservationId       | string | Yes      | Smoobu reservation identifier                                 |
| message             | string | Yes      | Message to send                                               |
| SMOOBU_API_KEY      | string | No       | Smoobu API key (optional, can be set in the environment)      |
| SMOOBU_API_ENDPOINT | string | No       | Smoobu API endpoint (optional, can be set in the environment) |

#### Example

```json
{
  "library": "@digipair/skill-smoobu",
  "element": "sendMessage",
  "properties": {
    "reservationId": "123456789",
    "message": "Welcome to our rental!",
    "SMOOBU_API_KEY": "your_smoobu_api_key",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com/v1"
  }
}
```

---

### getAllReservations

List Smoobu reservations with various available filters.

#### Parameters

| Name                 | Type   | Required | Description                                                   |
| -------------------- | ------ | -------- | ------------------------------------------------------------- |
| created_from         | string | No       | Creation date (from)                                          |
| created_to           | string | No       | Creation date (to)                                            |
| from                 | string | No       | Start date                                                    |
| to                   | string | No       | End date                                                      |
| modifiedFrom         | string | No       | Modification date (from)                                      |
| modifiedTo           | string | No       | Modification date (to)                                        |
| arrivalFrom          | string | No       | Arrival date (from)                                           |
| arrivalTo            | string | No       | Arrival date (to)                                             |
| departureFrom        | string | No       | Departure date (from)                                         |
| departureTo          | string | No       | Departure date (to)                                           |
| showCancellation     | string | No       | Show cancellations                                            |
| excludeBlocked       | string | No       | Exclude blocked periods                                       |
| page                 | string | No       | Results page                                                  |
| pageSize             | string | No       | Page size                                                     |
| apartmentId          | string | No       | Apartment identifier                                          |
| includeRelated       | string | No       | Include related details                                       |
| includePriceElements | string | No       | Include price elements                                        |
| SMOOBU_API_KEY       | string | No       | Smoobu API key (optional, can be set in the environment)      |
| SMOOBU_API_ENDPOINT  | string | No       | Smoobu API endpoint (optional, can be set in the environment) |

#### Example

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
    "SMOOBU_API_KEY": "your_smoobu_api_key",
    "SMOOBU_API_ENDPOINT": "https://api.smoobu.com/v1"
  }
}
```

---

## Notes

- The `SMOOBU_API_KEY` and `SMOOBU_API_ENDPOINT` parameters can be provided in the properties or set in the runtime environment.
- The functions are intended to be used in a JavaScript context, not via an HTTP API.
- Make sure to use the date formats expected by Smoobu (e.g., `YYYY-MM-DD`).
- For advanced usage, refer to the official Smoobu API documentation.

---

**@digipair/skill-smoobu** facilitates reservation management and communication with guests via Smoobu, while allowing flexible integration into your JavaScript projects.
