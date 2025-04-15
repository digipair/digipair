# @digipair/skill-mybuddy

**Version:** 0.1.0  
**Summary:** Gestion d'un robot myBuddy  
**Description:** gérer un robot elephant robotics myBuddy.  
**Icon:** 🤖

## Table des matières

- [Fonctions](#fonctions)
  - [sendAngles](#sendangles)
  - [getAngles](#getangles)
  - [powerOn](#poweron)
  - [powerOff](#poweroff)
  - [releaseAllServos](#releaseallservos)
  - [sendAngle](#sendangle)
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

## Fonctions

### sendAngles

Envoie la liste des angles.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| angles | array  | Oui    | Liste des angles à envoyer                                                            |
| speed  | number | Non    | Vitesse de déplacement                                                                |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sendAngles",
  "properties": {
    "device": 1,
    "angles": [30, 45, 60],
    "speed": 10
  }
}
```

### getAngles

Récupère la liste des angles.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

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

### powerOn

Allume tous les servos.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

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

### powerOff

Éteint tous les servos.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

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

### releaseAllServos

Relâche tous les servos.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

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

### sendAngle

Envoie un angle spécifique.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| id     | number | Oui    | Identifiant du servo concerné                                                         |
| degree | number | Oui    | Angle à envoyer                                                                       |
| speed  | number | Non    | Vitesse de déplacement                                                                |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sendAngle",
  "properties": {
    "device": 1,
    "id": 2,
    "degree": 45,
    "speed": 10
  }
}
```

### sendCoords

Envoie les coordonnées.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| coords | array  | Oui    | Liste des coordonnées à envoyer                                                       |
| speed  | number | Non    | Vitesse de déplacement                                                                |
| mode   | string | Non    | Mode de déplacement                                                                   |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sendCoords",
  "properties": {
    "device": 1,
    "coords": [100, 200],
    "speed": 10,
    "mode": "linear"
  }
}
```

### programPause

Pause le programme.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "programPause",
  "properties": {
    "device": 1
  }
}
```

### programResume

Reprend le programme.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "programResume",
  "properties": {
    "device": 1
  }
}
```

### stop

Arrête le programme.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "stop",
  "properties": {
    "device": 1
  }
}
```

### jogAngle

Déplace un angle spécifique.

#### Paramètres

| Nom       | Type   | Requis | Description                                                                           |
| --------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device    | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| joint_id  | number | Oui    | Identifiant de l'articulation concernée                                               |
| direction | string | Oui    | Direction de déplacement                                                              |
| speed     | number | Non    | Vitesse de déplacement                                                                |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "jogAngle",
  "properties": {
    "device": 1,
    "joint_id": 2,
    "direction": "up",
    "speed": 10
  }
}
```

### jogCoord

Déplace une coordonnée spécifique.

#### Paramètres

| Nom       | Type   | Requis | Description                                                                           |
| --------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device    | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| coord_id  | number | Oui    | Identifiant de la coordonnée concernée                                                |
| direction | string | Oui    | Direction de déplacement                                                              |
| speed     | number | Non    | Vitesse de déplacement                                                                |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "jogCoord",
  "properties": {
    "device": 1,
    "coord_id": 2,
    "direction": "forward",
    "speed": 10
  }
}
```

### jogStop

Arrête le déplacement.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "jogStop",
  "properties": {
    "device": 1
  }
}
```

### setEncoder

Définit une valeur d'encoder.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| joint_id | number | Oui    | Identifiant de l'articulation concernée                                               |
| encoder  | number | Oui    | Valeur de l'encoder à définir                                                         |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setEncoder",
  "properties": {
    "device": 1,
    "joint_id": 2,
    "encoder": 100
  }
}
```

### setEncoders

Définit les valeurs des encoders.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| encoders | array  | Oui    | Liste des valeurs des encoders à définir                                              |
| speed    | number | Non    | Vitesse de déplacement                                                                |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setEncoders",
  "properties": {
    "device": 1,
    "encoders": [100, 200, 300],
    "speed": 10
  }
}
```

### setSpeed

Définit la vitesse.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| speed  | number | Oui    | Vitesse à définir                                                                     |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setSpeed",
  "properties": {
    "device": 1,
    "speed": 10
  }
}
```

### setServoData

Définit les données d'un servo.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| servo_no | number | Oui    | Numéro du servo concerné                                                              |
| data_id  | number | Oui    | Identifiant des données à définir                                                     |
| value    | number | Oui    | Valeur à définir                                                                      |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setServoData",
  "properties": {
    "device": 1,
    "servo_no": 2,
    "data_id": 1,
    "value": 50
  }
}
```

### setServoCalibration

Définit l'étalonnage d'un servo.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| servo_no | number | Oui    | Numéro du servo concerné                                                              |

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

### releaseServo

Relâche un servo spécifique.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| servo_no | number | Oui    | Numéro du servo concerné                                                              |

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

### focusServo

Active un servo spécifique.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| servo_no | number | Oui    | Numéro du servo concerné                                                              |

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

### setPinMode

Définit le mode d'une broche.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| pin_no   | number | Oui    | Numéro de la broche concernée                                                         |
| pin_mode | string | Oui    | Mode de la broche à définir                                                           |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setPinMode",
  "properties": {
    "device": 1,
    "pin_no": 3,
    "pin_mode": "OUTPUT"
  }
}
```

### setDigitalOutput

Définit la sortie numérique d'une broche.

#### Paramètres

| Nom        | Type   | Requis | Description                                                                           |
| ---------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device     | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| pin_no     | number | Oui    | Numéro de la broche concernée                                                         |
| pin_signal | number | Oui    | Signal de la broche à définir                                                         |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setDigitalOutput",
  "properties": {
    "device": 1,
    "pin_no": 3,
    "pin_signal": 1
  }
}
```

### setGripperState

Définit l'état du gripper.

#### Paramètres

| Nom    | Type    | Requis | Description                                                                           |
| ------ | ------- | ------ | ------------------------------------------------------------------------------------- |
| device | number  | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| flag   | boolean | Oui    | État du gripper à définir                                                             |
| speed  | number  | Non    | Vitesse de déplacement                                                                |

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

### setGripperValue

Définit la valeur du gripper.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| value  | number | Oui    | Valeur du gripper à définir                                                           |
| speed  | number | Non    | Vitesse de déplacement                                                                |

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

### setGripperIni

Définit l'initialisation du gripper.

#### Paramètres

| Nom | Type | Requis | Description |
| --- | ---- | ------ | ----------- |
| -   | -    | Non    | -           |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setGripperIni",
  "properties": {}
}
```

### setBasicOutput

Définit la sortie de base d'une broche.

#### Paramètres

| Nom        | Type   | Requis | Description                                                                           |
| ---------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device     | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| pin_no     | number | Oui    | Numéro de la broche concernée                                                         |
| pin_signal | number | Oui    | Signal de la broche à définir                                                         |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setBasicOutput",
  "properties": {
    "device": 1,
    "pin_no": 3,
    "pin_signal": 1
  }
}
```

### setColor

Définit la couleur RGB.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| r      | number | Oui    | Valeur du rouge à définir                                                             |
| g      | number | Oui    | Valeur du vert à définir                                                              |
| b      | number | Oui    | Valeur du bleu à définir                                                              |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setColor",
  "properties": {
    "device": 1,
    "r": 255,
    "g": 0,
    "b": 0
  }
}
```

### isPowerOn

Vérifie si le device est allumé.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isPowerOn",
  "properties": {
    "device": 1
  }
}
```

### isControllerConnect

Vérifie si le contrôleur est connecté.

#### Paramètres

| Nom | Type | Requis | Description |
| --- | ---- | ------ | ----------- |
| -   | -    | Non    | -           |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isControllerConnect",
  "properties": {}
}
```

### getCoords

Récupère les coordonnées.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getCoords",
  "properties": {
    "device": 1
  }
}
```

### isInPosition

Vérifie si le device est en position.

#### Paramètres

| Nom    | Type    | Requis | Description                                                                           |
| ------ | ------- | ------ | ------------------------------------------------------------------------------------- |
| device | number  | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| data   | object  | Oui    | Données de position à vérifier                                                        |
| flag   | boolean | Oui    | Indicateur de position                                                                |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isInPosition",
  "properties": {
    "device": 1,
    "data": { "position": "home" },
    "flag": true
  }
}
```

### getEncoder

Récupère la valeur d'un encoder.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| joint_id | number | Oui    | Identifiant de l'articulation concernée                                               |

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

### getEncoders

Récupère les valeurs des encoders.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getEncoders",
  "properties": {
    "device": 1
  }
}
```

### getSpeed

Récupère la vitesse.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getSpeed",
  "properties": {
    "device": 1
  }
}
```

### getJointMin

Récupère l'angle minimum d'une articulation.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| joint_id | number | Oui    | Identifiant de l'articulation concernée                                               |

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

### getJointMax

Récupère l'angle maximum d'une articulation.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| joint_id | number | Oui    | Identifiant de l'articulation concernée                                               |

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

### isServoEnable

Vérifie si un servo est activé.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| servo_id | number | Oui    | Identifiant du servo concerné                                                         |

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

### isAllServoEnable

Vérifie si tous les servos sont activés.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isAllServoEnable",
  "properties": {
    "device": 1
  }
}
```

### getServodata

Récupère les données d'un servo.

#### Paramètres

| Nom      | Type   | Requis | Description                                                                           |
| -------- | ------ | ------ | ------------------------------------------------------------------------------------- |
| device   | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| servo_no | number | Oui    | Numéro du servo concerné                                                              |
| data_id  | number | Oui    | Identifiant des données à récupérer                                                   |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getServodata",
  "properties": {
    "device": 1,
    "servo_no": 2,
    "data_id": 1
  }
}
```

### getDigitalInput

Récupère l'entrée numérique d'une broche.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| pin_no | number | Oui    | Numéro de la broche concernée                                                         |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getDigitalInput",
  "properties": {
    "device": 1,
    "pin_no": 3
  }
}
```

### getGripperValue

Récupère la valeur du gripper.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

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

### getBasicOutput

Récupère la sortie de base d'une broche.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |
| pin_no | number | Oui    | Numéro de la broche concernée                                                         |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "getBasicOutput",
  "properties": {
    "device": 1,
    "pin_no": 3
  }
}
```

### isGripperMoving

Vérifie si le gripper est en mouvement.

#### Paramètres

| Nom    | Type   | Requis | Description                                                                           |
| ------ | ------ | ------ | ------------------------------------------------------------------------------------- |
| device | number | Oui    | Identifiant du device concerné (0 = Tous, 1 = Bras gauche, 2 = Bras droit, 3 = Corps) |

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

### sleep

Attend un certain temps.

#### Paramètres

| Nom  | Type   | Requis | Description                  |
| ---- | ------ | ------ | ---------------------------- |
| time | number | Oui    | Temps en secondes à attendre |

#### Exemple

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "sleep",
  "properties": {
    "time": 5
  }
}
```

## Notes

- Chaque fonction est conçue pour interagir avec le robot myBuddy et nécessite un identifiant de device valide.
- Assurez-vous de respecter les types de données spécifiés pour chaque paramètre lors de l'appel des fonctions.
