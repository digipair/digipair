Here is the English translation of your technical documentation, adapted for clarity and technical accuracy:

```markdown
# @digipair/skill-mybuddy

**Version:** 0.1.0  
**Summary:** Management of a myBuddy robot  
**Description:** This skill allows you to manage an Elephant Robotics myBuddy robot.  
**Icon:** 🤖

---

## Table of Contents

- [Functions](#functions)
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

## Functions

### sendAngles

Sends a list of angles to the servomotors.

#### Parameters

| Name    | Type     | Required | Description                                                        |
|---------|----------|----------|--------------------------------------------------------------------|
| device  | number   | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| angles  | number[] | Yes      | List of angles to send                                             |
| speed   | number   | No       | Movement speed                                                     |

#### Example

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

Retrieves the current list of angles.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Activates all servomotors.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Deactivates all servomotors.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Releases all servomotors.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Sends a specific angle to a servomotor.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| id      | number | Yes      | Target servomotor identifier                                       |
| degree  | number | Yes      | Angle to send                                                      |
| speed   | number | No       | Movement speed                                                     |

#### Example

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

Sends a specific coordinate.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| id      | number | Yes      | Identifier of the coordinate to modify                             |
| coord   | number | Yes      | Value of the coordinate to send                                    |
| speed   | number | No       | Movement speed                                                     |

#### Example

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

Sends a list of coordinates.

#### Parameters

| Name    | Type      | Required | Description                                                        |
|---------|-----------|----------|--------------------------------------------------------------------|
| device  | number    | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| coords  | number[]  | Yes      | List of coordinates to send                                        |
| speed   | number    | No       | Movement speed                                                     |
| mode    | string    | No       | Movement mode                                                      |

#### Example

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

Pauses the current program.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Resumes the paused program.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Stops the current program.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Moves a specific joint angle in jog mode.

#### Parameters

| Name       | Type   | Required | Description                                                        |
|------------|--------|----------|--------------------------------------------------------------------|
| device     | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| joint_id   | number | Yes      | Target joint identifier                                            |
| direction  | string | Yes      | Movement direction                                                 |
| speed      | number | No       | Movement speed                                                     |

#### Example

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

Moves a specific coordinate in jog mode.

#### Parameters

| Name       | Type   | Required | Description                                                        |
|------------|--------|----------|--------------------------------------------------------------------|
| device     | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| coord_id   | number | Yes      | Target coordinate identifier                                       |
| direction  | string | Yes      | Movement direction                                                 |
| speed      | number | No       | Movement speed                                                     |

#### Example

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

Stops the current jog movement.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Sets the value of an encoder.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| joint_id  | number | Yes      | Target joint identifier                                            |
| encoder   | number | Yes      | Encoder value to set                                               |

#### Example

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

Sets the values of multiple encoders.

#### Parameters

| Name      | Type      | Required | Description                                                        |
|-----------|-----------|----------|--------------------------------------------------------------------|
| device    | number    | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| encoders  | number[]  | Yes      | List of encoder values to set                                      |
| speed     | number    | No       | Movement speed                                                     |

#### Example

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

Sets the movement speed.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| speed   | number | Yes      | Speed to set                                                       |

#### Example

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

Sets a specific data value for a servomotor.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| servo_no  | number | Yes      | Target servomotor number                                           |
| data_id   | number | Yes      | Data identifier to set                                             |
| value     | number | Yes      | Value to set                                                       |

#### Example

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

Sets the calibration for a servomotor.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| servo_no  | number | Yes      | Target servomotor number                                           |

#### Example

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

Releases a specific servomotor.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| servo_no  | number | Yes      | Target servomotor number                                           |

#### Example

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

Enables a specific servomotor.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| servo_no  | number | Yes      | Target servomotor number                                           |

#### Example

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

Sets the mode of a pin.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| pin_no    | number | Yes      | Target pin number                                                  |
| pin_mode  | string | Yes      | Pin mode to set                                                    |

#### Example

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

Sets the digital output of a pin.

#### Parameters

| Name        | Type   | Required | Description                                                        |
|-------------|--------|----------|--------------------------------------------------------------------|
| device      | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| pin_no      | number | Yes      | Target pin number                                                  |
| pin_signal  | number | Yes      | Pin signal to set                                                  |

#### Example

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

Sets the gripper state.

#### Parameters

| Name    | Type    | Required | Description                                                        |
|---------|---------|----------|--------------------------------------------------------------------|
| device  | number  | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| flag    | boolean | Yes      | Gripper state to set                                               |
| speed   | number  | No       | Movement speed                                                     |

#### Example

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

Sets the gripper value.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| value   | number | Yes      | Gripper value to set                                               |
| speed   | number | No       | Movement speed                                                     |

#### Example

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

Initializes the gripper.

#### Parameters

_No parameters required._

#### Example

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setGripperIni",
  "properties": {}
}
```

---

### setBasicOutput

Sets the basic output of a pin.

#### Parameters

| Name        | Type   | Required | Description                                                        |
|-------------|--------|----------|--------------------------------------------------------------------|
| device      | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| pin_no      | number | Yes      | Target pin number                                                  |
| pin_signal  | number | Yes      | Pin signal to set                                                  |

#### Example

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

Sets the RGB color.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| r       | number | Yes      | Red value to set                                                   |
| g       | number | Yes      | Green value to set                                                 |
| b       | number | Yes      | Blue value to set                                                  |

#### Example

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

Checks if the device is powered on.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Checks if the controller is connected.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Retrieves the current coordinates.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Checks if the device is in position.

#### Parameters

| Name    | Type    | Required | Description                                                        |
|---------|---------|----------|--------------------------------------------------------------------|
| device  | number  | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| data    | object  | Yes      | Position data to check                                             |
| flag    | boolean | Yes      | Position indicator                                                 |

#### Example

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

Retrieves the value of an encoder.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| joint_id  | number | Yes      | Target joint identifier                                            |

#### Example

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

Retrieves the values of all encoders.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Retrieves the current speed.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Retrieves the minimum angle of a joint.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| joint_id  | number | Yes      | Target joint identifier                                            |

#### Example

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

Retrieves the maximum angle of a joint.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| joint_id  | number | Yes      | Target joint identifier                                            |

#### Example

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

Checks if a servomotor is enabled.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| servo_id  | number | Yes      | Target servomotor identifier                                       |

#### Example

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

Checks if all servomotors are enabled.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Retrieves a specific data value from a servomotor.

#### Parameters

| Name      | Type   | Required | Description                                                        |
|-----------|--------|----------|--------------------------------------------------------------------|
| device    | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| servo_no  | number | Yes      | Target servomotor number                                           |
| data_id   | number | Yes      | Data identifier to retrieve                                        |

#### Example

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

Retrieves the digital input of a pin.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| pin_no  | number | Yes      | Target pin number                                                  |

#### Example

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

Retrieves the gripper value.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Retrieves the basic output of a pin.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |
| pin_no  | number | Yes      | Target pin number                                                  |

#### Example

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

Checks if the gripper is moving.

#### Parameters

| Name    | Type   | Required | Description                                                        |
|---------|--------|----------|--------------------------------------------------------------------|
| device  | number | Yes      | Device identifier (0 = All, 1 = Left arm, 2 = Right arm, 3 = Body) |

#### Example

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

Waits for a specified time (in seconds).

#### Parameters

| Name  | Type   | Required | Description                |
|-------|--------|----------|----------------------------|
| time  | number | Yes      | Time to wait in seconds    |

#### Example

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

- All `device` parameters use the following convention:  
  `0 = All`, `1 = Left arm`, `2 = Right arm`, `3 = Body`.
- Functions may be synchronous or asynchronous depending on the library implementation.
- Examples are provided in JSON call format for integration with an orchestrator or scenario engine.
- For any hardware manipulation, ensure the robot is supervised and in a safe environment.
```
If you need further adaptation (for example, for a specific documentation generator or API style), let me know!