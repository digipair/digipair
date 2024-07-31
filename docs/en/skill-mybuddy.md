# @digipair/skill-mybuddy

**Version:** 0.1.0  
**Summary:** Management of a myBuddy robot  
**Description:** This skill allows you to manage an elephant robotics myBuddy robot.  
**Icon:** 🤖

## Table of Contents

- [Functions](#functions)
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

## Functions

### sendAngles

Sends a list of angles.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| angles   | array  | Yes      | List of angles to send |
| speed    | number | No       | Movement speed |

#### Example

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

Retrieves the list of angles.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

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

### powerOn

Turns on all servos.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

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

### powerOff

Turns off all servos.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

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

### releaseAllServos

Releases all servos.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

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

### sendAngle

Sends a specific angle.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| id       | number | Yes      | Identifier of the concerned servo |
| degree   | number | Yes      | Angle to send |
| speed    | number | No       | Movement speed |

#### Example

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

Sends coordinates.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| coords   | array  | Yes      | List of coordinates to send |
| speed    | number | No       | Movement speed |
| mode     | string | No       | Movement mode |

#### Example

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

Pauses the program.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Resumes the program.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Stops the program.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Moves a specific angle.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| joint_id | number | Yes      | Identifier of the concerned joint |
| direction | string | Yes      | Direction of movement |
| speed    | number | No       | Movement speed |

#### Example

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

Moves a specific coordinate.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| coord_id | number | Yes      | Identifier of the concerned coordinate |
| direction | string | Yes      | Direction of movement |
| speed    | number | No       | Movement speed |

#### Example

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

Stops the movement.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Sets an encoder value.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| joint_id | number | Yes      | Identifier of the concerned joint |
| encoder  | number | Yes      | Value of the encoder to set |

#### Example

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

Sets the encoder values.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| encoders | array  | Yes      | List of encoder values to set |
| speed    | number | No       | Movement speed |

#### Example

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

Sets the speed.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| speed    | number | Yes      | Speed to set |

#### Example

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

Sets the data of a servo.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| servo_no | number | Yes      | Number of the concerned servo |
| data_id  | number | Yes      | Identifier of the data to set |
| value    | number | Yes      | Value to set |

#### Example

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

Sets the calibration of a servo.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| servo_no | number | Yes      | Number of the concerned servo |

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

### releaseServo

Releases a specific servo.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| servo_no | number | Yes      | Number of the concerned servo |

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

### focusServo

Activates a specific servo.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| servo_no | number | Yes      | Number of the concerned servo |

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

### setPinMode

Sets the mode of a pin.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| pin_no   | number | Yes      | Number of the concerned pin |
| pin_mode | string | Yes      | Mode of the pin to set |

#### Example

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

Sets the digital output of a pin.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| pin_no   | number | Yes      | Number of the concerned pin |
| pin_signal | number | Yes    | Signal of the pin to set |

#### Example

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

Sets the state of the gripper.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| flag     | boolean| Yes      | State of the gripper to set |
| speed    | number | No       | Movement speed |

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

### setGripperValue

Sets the value of the gripper.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| value    | number | Yes      | Value of the gripper to set |
| speed    | number | No       | Movement speed |

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

### setGripperIni

Sets the initialization of the gripper.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| -        | -      | No       | -           |

#### Example

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "setGripperIni",
  "properties": {}
}
```

### setBasicOutput

Sets the basic output of a pin.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| pin_no   | number | Yes      | Number of the concerned pin |
| pin_signal | number | Yes    | Signal of the pin to set |

#### Example

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

Sets the RGB color.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| r        | number | Yes      | Value of red to set |
| g        | number | Yes      | Value of green to set |
| b        | number | Yes      | Value of blue to set |

#### Example

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

Checks if the device is powered on.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Checks if the controller is connected.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| -        | -      | No       | -           |

#### Example

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isControllerConnect",
  "properties": {}
}
```

### getCoords

Retrieves the coordinates.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Checks if the device is in position.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| data     | object | Yes      | Position data to check |
| flag     | boolean| Yes      | Position indicator |

#### Example

```json
{
  "library": "@digipair/skill-mybuddy",
  "element": "isInPosition",
  "properties": {
    "device": 1,
    "data": {"position": "home"},
    "flag": true
  }
}
```

### getEncoder

Retrieves the value of an encoder.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| joint_id | number | Yes      | Identifier of the concerned joint |

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

### getEncoders

Retrieves the values of the encoders.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Retrieves the speed.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Retrieves the minimum angle of a joint.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| joint_id | number | Yes      | Identifier of the concerned joint |

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

### getJointMax

Retrieves the maximum angle of a joint.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| joint_id | number | Yes      | Identifier of the concerned joint |

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

### isServoEnable

Checks if a servo is enabled.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| servo_id | number | Yes      | Identifier of the concerned servo |

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

### isAllServoEnable

Checks if all servos are enabled.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

#### Example

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

Retrieves the data of a servo.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| servo_no | number | Yes      | Number of the concerned servo |
| data_id  | number | Yes      | Identifier of the data to retrieve |

#### Example

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

Retrieves the digital input of a pin.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| pin_no   | number | Yes      | Number of the concerned pin |

#### Example

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

Retrieves the value of the gripper.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

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

### getBasicOutput

Retrieves the basic output of a pin.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |
| pin_no   | number | Yes      | Number of the concerned pin |

#### Example

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

Checks if the gripper is moving.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| device   | number | Yes      | Identifier of the concerned device (0 = All, 1 = Left Arm, 2 = Right Arm, 3 = Body) |

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

### sleep

Waits for a certain time.

#### Parameters

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| time     | number | Yes      | Time in seconds to wait |

#### Example

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

- Each function is designed to interact with the myBuddy robot and requires a valid device identifier.
- Ensure to respect the specified data types for each parameter when calling the functions.