```markdown
# @digipair/skill-mybuddy

**Version:** 0.1.0  
**Résumé:** Management of a myBuddy robot  
**Description:** This skill allows you to manage an elephant robotics myBuddy robot.  
**Icon:** 🤖

---

## Table des matières

- [Fonctions](#fonctions)
  - [sendAngles](#sendangles)
  - [getAngles](#getangles)
  - [powerOn](#poweron)
  - [powerOff](#poweroff)
  - [releaseAllServos](#releaseallservos)
  - [sendAngle](#sendangle)
  - [sendCoord](#sendcoord)
  - [sendCoords](#sendcoords)
  - [programPause](#programpause)
  - [programResume](#programresume)
  - [stop](#stop)
  - [jogAngle](#jogangle)
  - [jogCoord](#jogcoord)
  - [jogStop](#jogstop)
  - [setEncoder](#setencoder)
  - [setEncoders](#setencoders)
  - [setSpeed](#setspeed)
  - [setServoData](#setservodata)
  - [setServoCalibration](#setservocalibration)
  - [releaseServo](#releaseservo)
  - [focusServo](#focusservo)
  - [setPinMode](#setpinmode)
  - [setDigitalOutput](#setdigitaloutput)
  - [setGripperState](#setgripperstate)
  - [setGripperValue](#setgrippervalue)
  - [setGripperIni](#setgripperini)
  - [setBasicOutput](#setbasicoutput)
  - [setColor](#setcolor)
  - [isPowerOn](#ispoweron)
  - [isControllerConnect](#iscontrollerconnect)
  - [getCoords](#getcoords)
  - [isInPosition](#isinposition)
  - [getEncoder](#getencoder)
  - [getEncoders](#getencoders)
  - [getSpeed](#getspeed)
  - [getJointMin](#getjointmin)
  - [getJointMax](#getjointmax)
  - [isServoEnable](#isservoenable)
  - [isAllServoEnable](#isallservoenable)
  - [getServodata](#getservodata)
  - [getDigitalInput](#getdigitalinput)
  - [getGripperValue](#getgrippervalue)
  - [getBasicOutput](#getbasicoutput)
  - [isGripperMoving](#isgrippermoving)
  - [sleep](#sleep)

---

## Fonctions

### sendAngles

Envoie une liste d'angles aux servomoteurs.

#### Paramètres

| Nom     | Type    | Requis | Description                                                                 |
|---------|---------|--------|-----------------------------------------------------------------------------|
| device  | number  | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| angles  | number[]| Oui    | Liste des angles à envoyer                                                 |
| speed   | number  | Non    | Vitesse de mouvement                                                       |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sendAngles",
  "properties": {
    "device": 0,
    "angles": [0, 45, 90, 135],
    "speed": 50
  }
}
```

---

### getAngles

Récupère la liste des angles actuels.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getAngles",
  "properties": {
    "device": 1
  }
}
```

---

### powerOn

Active tous les servomoteurs.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "powerOn",
  "properties": {
    "device": 0
  }
}
```

---

### powerOff

Désactive tous les servomoteurs.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "powerOff",
  "properties": {
    "device": 0
  }
}
```

---

### releaseAllServos

Libère tous les servomoteurs.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "releaseAllServos",
  "properties": {
    "device": 0
  }
}
```

---

### sendAngle

Envoie un angle spécifique à un servomoteur.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| id      | number | Oui    | Identifiant du servomoteur concerné                                         |
| degree  | number | Oui    | Angle à envoyer                                                             |
| speed   | number | Non    | Vitesse de mouvement                                                        |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sendAngle",
  "properties": {
    "device": 1,
    "id": 2,
    "degree": 90,
    "speed": 30
  }
}
```

---

### sendCoord

Envoie une coordonnée spécifique.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| id      | number | Oui    | Identifiant de la coordonnée à modifier                                     |
| coord   | number | Oui    | Valeur de la coordonnée à envoyer                                           |
| speed   | number | Non    | Vitesse de mouvement                                                        |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sendCoord",
  "properties": {
    "device": 2,
    "id": 1,
    "coord": 100,
    "speed": 20
  }
}
```

---

### sendCoords

Envoie une liste de coordonnées.

#### Paramètres

| Nom     | Type      | Requis | Description                                                                 |
|---------|-----------|--------|-----------------------------------------------------------------------------|
| device  | number    | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| coords  | number[]  | Oui    | Liste des coordonnées à envoyer                                             |
| speed   | number    | Non    | Vitesse de mouvement                                                        |
| mode    | string    | Non    | Mode de mouvement                                                           |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sendCoords",
  "properties": {
    "device": 1,
    "coords": [100, 200, 300],
    "speed": 40,
    "mode": "linear"
  }
}
```

---

### programPause

Met en pause le programme en cours.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "programPause",
  "properties": {
    "device": 0
  }
}
```

---

### programResume

Reprend le programme en pause.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "programResume",
  "properties": {
    "device": 0
  }
}
```

---

### stop

Arrête le programme en cours.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "stop",
  "properties": {
    "device": 0
  }
}
```

---

### jogAngle

Déplace un angle spécifique en mode jog.

#### Paramètres

| Nom        | Type   | Requis | Description                                                                 |
|------------|--------|--------|-----------------------------------------------------------------------------|
| device     | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| joint_id   | number | Oui    | Identifiant de l'articulation concernée                                     |
| direction  | string | Oui    | Direction du mouvement                                                      |
| speed      | number | Non    | Vitesse de mouvement                                                        |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "jogAngle",
  "properties": {
    "device": 1,
    "joint_id": 2,
    "direction": "positive",
    "speed": 10
  }
}
```

---

### jogCoord

Déplace une coordonnée spécifique en mode jog.

#### Paramètres

| Nom        | Type   | Requis | Description                                                                 |
|------------|--------|--------|-----------------------------------------------------------------------------|
| device     | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| coord_id   | number | Oui    | Identifiant de la coordonnée concernée                                      |
| direction  | string | Oui    | Direction du mouvement                                                      |
| speed      | number | Non    | Vitesse de mouvement                                                        |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "jogCoord",
  "properties": {
    "device": 2,
    "coord_id": 1,
    "direction": "negative",
    "speed": 15
  }
}
```

---

### jogStop

Arrête le mouvement jog en cours.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "jogStop",
  "properties": {
    "device": 0
  }
}
```

---

### setEncoder

Définit la valeur d'un encodeur.

#### Paramètres

| Nom       | Type   | Requis | Description                                                                 |
|-----------|--------|--------|-----------------------------------------------------------------------------|
| device    | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| joint_id  | number | Oui    | Identifiant de l'articulation concernée                                     |
| encoder   | number | Oui    | Valeur de l'encodeur à définir                                              |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setEncoder",
  "properties": {
    "device": 1,
    "joint_id": 2,
    "encoder": 1234
  }
}
```

---

### setEncoders

Définit les valeurs des encodeurs.

#### Paramètres

| Nom       | Type      | Requis | Description                                                                 |
|-----------|-----------|--------|-----------------------------------------------------------------------------|
| device    | number    | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| encoders  | number[]  | Oui    | Liste des valeurs d'encodeurs à définir                                     |
| speed     | number    | Non    | Vitesse de mouvement                                                        |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setEncoders",
  "properties": {
    "device": 0,
    "encoders": [100, 200, 300],
    "speed": 20
  }
}
```

---

### setSpeed

Définit la vitesse de mouvement.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| speed   | number | Oui    | Vitesse à définir                                                           |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setSpeed",
  "properties": {
    "device": 0,
    "speed": 50
  }
}
```

---

### setServoData

Définit une donnée spécifique d'un servomoteur.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                 |
|----------|--------|--------|-----------------------------------------------------------------------------|
| device   | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| servo_no | number | Oui    | Numéro du servomoteur concerné                                              |
| data_id  | number | Oui    | Identifiant de la donnée à définir                                          |
| value    | number | Oui    | Valeur à définir                                                            |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setServoData",
  "properties": {
    "device": 1,
    "servo_no": 2,
    "data_id": 3,
    "value": 100
  }
}
```

---

### setServoCalibration

Définit la calibration d'un servomoteur.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                 |
|----------|--------|--------|-----------------------------------------------------------------------------|
| device   | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| servo_no | number | Oui    | Numéro du servomoteur concerné                                              |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setServoCalibration",
  "properties": {
    "device": 1,
    "servo_no": 2
  }
}
```

---

### releaseServo

Libère un servomoteur spécifique.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                 |
|----------|--------|--------|-----------------------------------------------------------------------------|
| device   | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| servo_no | number | Oui    | Numéro du servomoteur concerné                                              |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "releaseServo",
  "properties": {
    "device": 1,
    "servo_no": 2
  }
}
```

---

### focusServo

Active un servomoteur spécifique.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                 |
|----------|--------|--------|-----------------------------------------------------------------------------|
| device   | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| servo_no | number | Oui    | Numéro du servomoteur concerné                                              |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "focusServo",
  "properties": {
    "device": 1,
    "servo_no": 2
  }
}
```

---

### setPinMode

Définit le mode d'une broche.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                 |
|----------|--------|--------|-----------------------------------------------------------------------------|
| device   | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| pin_no   | number | Oui    | Numéro de la broche concernée                                               |
| pin_mode | string | Oui    | Mode de la broche à définir                                                 |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setPinMode",
  "properties": {
    "device": 0,
    "pin_no": 5,
    "pin_mode": "output"
  }
}
```

---

### setDigitalOutput

Définit la sortie digitale d'une broche.

#### Paramètres

| Nom        | Type   | Requis | Description                                                                 |
|------------|--------|--------|-----------------------------------------------------------------------------|
| device     | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| pin_no     | number | Oui    | Numéro de la broche concernée                                               |
| pin_signal | number | Oui    | Signal de la broche à définir                                               |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setDigitalOutput",
  "properties": {
    "device": 0,
    "pin_no": 5,
    "pin_signal": 1
  }
}
```

---

### setGripperState

Définit l'état de la pince.

#### Paramètres

| Nom     | Type    | Requis | Description                                                                 |
|---------|---------|--------|-----------------------------------------------------------------------------|
| device  | number  | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| flag    | boolean | Oui    | État de la pince à définir                                                  |
| speed   | number  | Non    | Vitesse de mouvement                                                        |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setGripperState",
  "properties": {
    "device": 1,
    "flag": true,
    "speed": 10
  }
}
```

---

### setGripperValue

Définit la valeur de la pince.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| value   | number | Oui    | Valeur de la pince à définir                                                |
| speed   | number | Non    | Vitesse de mouvement                                                        |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setGripperValue",
  "properties": {
    "device": 1,
    "value": 50,
    "speed": 10
  }
}
```

---

### setGripperIni

Initialise la pince.

#### Paramètres

_Aucun paramètre requis._

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setGripperIni",
  "properties": {}
}
```

---

### setBasicOutput

Définit la sortie basique d'une broche.

#### Paramètres

| Nom        | Type   | Requis | Description                                                                 |
|------------|--------|--------|-----------------------------------------------------------------------------|
| device     | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| pin_no     | number | Oui    | Numéro de la broche concernée                                               |
| pin_signal | number | Oui    | Signal de la broche à définir                                               |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setBasicOutput",
  "properties": {
    "device": 0,
    "pin_no": 5,
    "pin_signal": 1
  }
}
```

---

### setColor

Définit la couleur RGB.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| r       | number | Oui    | Valeur rouge à définir                                                      |
| g       | number | Oui    | Valeur verte à définir                                                      |
| b       | number | Oui    | Valeur bleue à définir                                                      |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setColor",
  "properties": {
    "device": 0,
    "r": 255,
    "g": 100,
    "b": 50
  }
}
```

---

### isPowerOn

Vérifie si le device est alimenté.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isPowerOn",
  "properties": {
    "device": 0
  }
}
```

---

### isControllerConnect

Vérifie si le contrôleur est connecté.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isControllerConnect",
  "properties": {
    "device": 0
  }
}
```

---

### getCoords

Récupère les coordonnées actuelles.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getCoords",
  "properties": {
    "device": 0
  }
}
```

---

### isInPosition

Vérifie si le device est en position.

#### Paramètres

| Nom     | Type    | Requis | Description                                                                 |
|---------|---------|--------|-----------------------------------------------------------------------------|
| device  | number  | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| data    | object  | Oui    | Données de position à vérifier                                              |
| flag    | boolean | Oui    | Indicateur de position                                                      |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isInPosition",
  "properties": {
    "device": 0,
    "data": { "x": 100, "y": 200, "z": 300 },
    "flag": true
  }
}
```

---

### getEncoder

Récupère la valeur d'un encodeur.

#### Paramètres

| Nom       | Type   | Requis | Description                                                                 |
|-----------|--------|--------|-----------------------------------------------------------------------------|
| device    | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| joint_id  | number | Oui    | Identifiant de l'articulation concernée                                     |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getEncoder",
  "properties": {
    "device": 1,
    "joint_id": 2
  }
}
```

---

### getEncoders

Récupère les valeurs des encodeurs.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getEncoders",
  "properties": {
    "device": 0
  }
}
```

---

### getSpeed

Récupère la vitesse actuelle.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getSpeed",
  "properties": {
    "device": 0
  }
}
```

---

### getJointMin

Récupère l'angle minimum d'une articulation.

#### Paramètres

| Nom       | Type   | Requis | Description                                                                 |
|-----------|--------|--------|-----------------------------------------------------------------------------|
| device    | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| joint_id  | number | Oui    | Identifiant de l'articulation concernée                                     |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getJointMin",
  "properties": {
    "device": 1,
    "joint_id": 2
  }
}
```

---

### getJointMax

Récupère l'angle maximum d'une articulation.

#### Paramètres

| Nom       | Type   | Requis | Description                                                                 |
|-----------|--------|--------|-----------------------------------------------------------------------------|
| device    | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| joint_id  | number | Oui    | Identifiant de l'articulation concernée                                     |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getJointMax",
  "properties": {
    "device": 1,
    "joint_id": 2
  }
}
```

---

### isServoEnable

Vérifie si un servomoteur est activé.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                 |
|----------|--------|--------|-----------------------------------------------------------------------------|
| device   | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| servo_id | number | Oui    | Identifiant du servomoteur concerné                                         |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isServoEnable",
  "properties": {
    "device": 1,
    "servo_id": 2
  }
}
```

---

### isAllServoEnable

Vérifie si tous les servomoteurs sont activés.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isAllServoEnable",
  "properties": {
    "device": 0
  }
}
```

---

### getServodata

Récupère une donnée spécifique d'un servomoteur.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                 |
|----------|--------|--------|-----------------------------------------------------------------------------|
| device   | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| servo_no | number | Oui    | Numéro du servomoteur concerné                                              |
| data_id  | number | Oui    | Identifiant de la donnée à récupérer                                        |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getServodata",
  "properties": {
    "device": 1,
    "servo_no": 2,
    "data_id": 3
  }
}
```

---

### getDigitalInput

Récupère l'entrée digitale d'une broche.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| pin_no  | number | Oui    | Numéro de la broche concernée                                               |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getDigitalInput",
  "properties": {
    "device": 0,
    "pin_no": 5
  }
}
```

---

### getGripperValue

Récupère la valeur de la pince.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getGripperValue",
  "properties": {
    "device": 1
  }
}
```

---

### getBasicOutput

Récupère la sortie basique d'une broche.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|
| pin_no  | number | Oui    | Numéro de la broche concernée                                               |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getBasicOutput",
  "properties": {
    "device": 0,
    "pin_no": 5
  }
}
```

---

### isGripperMoving

Vérifie si la pince est en mouvement.

#### Paramètres

| Nom     | Type   | Requis | Description                                                                 |
|---------|--------|--------|-----------------------------------------------------------------------------|
| device  | number | Oui    | Identifiant du device (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps)|

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isGripperMoving",
  "properties": {
    "device": 1
  }
}
```

---

### sleep

Attend un certain temps (en secondes).

#### Paramètres

| Nom   | Type   | Requis | Description           |
|-------|--------|--------|-----------------------|
| time  | number | Oui    | Temps en secondes à attendre |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sleep",
  "properties": {
    "time": 2
  }
}
```

---

## Notes

- Tous les paramètres `device` utilisent la convention suivante :  
  `0 = Tous`, `1 = Bras gauche`, `2 = Bras droit`, `3 = Corps`.
- Les fonctions sont synchrones ou asynchrones selon l'implémentation de la librairie.
- Les exemples sont donnés au format d'appel JSON pour intégration dans un orchestrateur ou un moteur de scénario.
- Pour toute manipulation matérielle, assurez-vous que le robot est sous surveillance et dans un environnement sécurisé.
```
