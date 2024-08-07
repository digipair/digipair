import { PinsSettings } from '@digipair/engine';
import mybuddy from '@marcbuils/mybuddy';

const TIMEOUT_READ_COMMANDS = 1000;

class MyBuddyService {
  private async connect(params: any, context: any) {
    const { MY_BUDDY = context.privates.MY_BUDDY ?? { port: '/dev/ttyACM0', baud: 115200 } } = params;
    return mybuddy.connect(MY_BUDDY.port, MY_BUDDY.baud);
  }

  // Actions
  async sendAngles(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, angles, speed = 50 } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.sendAngles(device, angles, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async powerOn(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.powerOn(device));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async powerOff(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.powerOff(device));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async releaseAllServos(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.releaseAllServos(device));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async sendAngle(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, id, degree, speed = 50 } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.sendAngle(device, id, degree, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async sendCoord(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, id, coord, speed = 50 } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.sendCoord(device, id, coord, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async sendCoords(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, coords, speed = 50, mode = 0 } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.sendCoords(device, coords, speed, mode));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async programPause(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.programPause(device));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async programResume(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.programResume(device));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async stop(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.stop(device));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async jogAngle(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, joint_id, direction, speed } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.jogAngle(device, joint_id, direction, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async jogCoord(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, coord_id, direction, speed } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.jogCoord(device, coord_id, direction, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async jogStop(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.jogStop(device));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setEncoder(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, joint_id, encoder } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setEncoder(device, joint_id, encoder));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setEncoders(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, encoders, speed } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setEncoders(device, encoders, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setSpeed(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, speed } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setSpeed(device, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setServoData(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, servo_no, data_id, value } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setServoData(device, servo_no, data_id, value));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setServoCalibration(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, servo_no } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setServoCalibration(device, servo_no));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async releaseServo(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, servo_no } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.releaseServo(device, servo_no));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async focusServo(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, servo_no } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.focusServo(device, servo_no));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setPinMode(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, pin_no, pin_mode } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setPinMode(device, pin_no, pin_mode));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setDigitalOutput(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, pin_no, pin_signal } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setDigitalOutput(device, pin_no, pin_signal));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setGripperState(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, flag, speed } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setGripperState(device, flag, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setGripperValue(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, value, speed } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setGripperValue(device, value, speed));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setGripperIni(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setGripperIni());
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setBasicOutput(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, pin_no, pin_signal } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setBasicOutput(device, pin_no, pin_signal));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  async setColor(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, r, g, b } = params;
    const connection = await this.connect(params, context);
    const result = connection.write(mybuddy.setColor(device, r, g, b));
    await new Promise((resolve) => setTimeout(resolve, 50));
    connection.close();
    return result;
  }

  // Data Retrieval
  async getAngles(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_ANGLES, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });
      
      connection.write(mybuddy.getAngles(device));
    });
  }

  async isPowerOn(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.IS_POWER_ON, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.isPowerOn(device));
    });
  }

  async isControllerConnect(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.IS_CONTROLLER_CONNECTED, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.isControllerConnect());
    });
  }

  async getCoords(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_COORDS, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getCoords(device));
    });
  }

  async isInPosition(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, data, flag } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.IS_IN_POSITION, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.isInPosition(device, data, flag));
    });
  }

  async getEncoder(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, joint_id } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_ENCODER, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getEncoder(device, joint_id));
    });
  }

  async getEncoders(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_ENCODER, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getEncoders(device));
    });
  }

  async getSpeed(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_SPEED, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getSpeed(device));
    });
  }

  async getJointMin(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, joint_id } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_JOINT_MIN_ANGLE, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getJointMin(device, joint_id));
    });
  }

  async getJointMax(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, joint_id } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_JOINT_MAX_ANGLE, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getJointMax(device, joint_id));
    });
  }

  async isServoEnable(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, servo_id } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.IS_SERVO_ENABLE, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.isServoEnable(device, servo_id));
    });
  }

  async isAllServoEnable(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.IS_ALL_SERVO_ENABLE, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.isAllServoEnable(device));
    });
  }

  async getServodata(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, servo_no, data_id } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_SERVO_DATA, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getServodata(device, servo_no, data_id));
    });
  }

  async getDigitalInput(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, pin_no } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_DIGITAL_INPUT, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getDigitalInput(device, pin_no));
    });
  }

  async getGripperValue(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_GRIPPER_VALUE, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getGripperValue(device));
    });
  }

  async getBasicOutput(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device, pin_no } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.GET_BASIC_INPUT, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.getBasicOutput(device, pin_no));
    });
  }

  async isGripperMoving(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { device } = params;
    const connection = await this.connect(params, context);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        connection.close();
        reject('TIMEOUT_READ_COMMANDS');
      }, TIMEOUT_READ_COMMANDS);

      connection.on('data', (data: Buffer) => {
        if (
          data[0] === 0xfe &&
          data[1] === 0xfe &&
          data[2] === device &&
          data[4] === parseInt(mybuddy.COMMAND.IS_GRIPPER_MOVING, 16)
        ) {
          clearTimeout(timeoutId);
          const result = mybuddy.processReceived(data);
          connection.close();
          resolve(result);
        }
      });

      connection.write(mybuddy.isGripperMoving(device));
    });
  }

  // TOOLS
  async sleep(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { time } = params;

    await new Promise(resolve => setTimeout(resolve, time * 1000));

    return context.previous;
  }
}

export const sendAngles = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().sendAngles(params, pinsSettingsList, context);

export const getAngles = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getAngles(params, pinsSettingsList, context);

// Add other export functions for actions and data retrieval methods
export const powerOn = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().powerOn(params, pinsSettingsList, context);

export const powerOff = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().powerOff(params, pinsSettingsList, context);

export const releaseAllServos = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().releaseAllServos(params, pinsSettingsList, context);

export const sendAngle = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().sendAngle(params, pinsSettingsList, context);

export const sendCoord = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().sendCoord(params, pinsSettingsList, context);

export const sendCoords = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().sendCoords(params, pinsSettingsList, context);

export const programPause = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().programPause(params, pinsSettingsList, context);

export const programResume = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().programResume(params, pinsSettingsList, context);

export const stop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().stop(params, pinsSettingsList, context);

export const jogAngle = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().jogAngle(params, pinsSettingsList, context);

export const jogCoord = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().jogCoord(params, pinsSettingsList, context);

export const jogStop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().jogStop(params, pinsSettingsList, context);

export const setEncoder = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setEncoder(params, pinsSettingsList, context);

export const setEncoders = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setEncoders(params, pinsSettingsList, context);

export const setSpeed = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setSpeed(params, pinsSettingsList, context);

export const setServoData = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setServoData(params, pinsSettingsList, context);

export const setServoCalibration = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setServoCalibration(params, pinsSettingsList, context);

export const releaseServo = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().releaseServo(params, pinsSettingsList, context);

export const focusServo = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().focusServo(params, pinsSettingsList, context);

export const setPinMode = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setPinMode(params, pinsSettingsList, context);

export const setDigitalOutput = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setDigitalOutput(params, pinsSettingsList, context);

export const setGripperState = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setGripperState(params, pinsSettingsList, context);

export const setGripperValue = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setGripperValue(params, pinsSettingsList, context);

export const setGripperIni = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setGripperIni(params, pinsSettingsList, context);

export const setBasicOutput = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setBasicOutput(params, pinsSettingsList, context);

export const setColor = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().setColor(params, pinsSettingsList, context);

export const isPowerOn = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().isPowerOn(params, pinsSettingsList, context);

export const isControllerConnect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().isControllerConnect(params, pinsSettingsList, context);

export const getCoords = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getCoords(params, pinsSettingsList, context);

export const isInPosition = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().isInPosition(params, pinsSettingsList, context);

export const getEncoder = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getEncoder(params, pinsSettingsList, context);

export const getEncoders = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getEncoders(params, pinsSettingsList, context);

export const getSpeed = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getSpeed(params, pinsSettingsList, context);

export const getJointMin = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getJointMin(params, pinsSettingsList, context);

export const getJointMax = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getJointMax(params, pinsSettingsList, context);

export const isServoEnable = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().isServoEnable(params, pinsSettingsList, context);

export const isAllServoEnable = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().isAllServoEnable(params, pinsSettingsList, context);

export const getServodata = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getServodata(params, pinsSettingsList, context);

export const getDigitalInput = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getDigitalInput(params, pinsSettingsList, context);

export const getGripperValue = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getGripperValue(params, pinsSettingsList, context);

export const getBasicOutput = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().getBasicOutput(params, pinsSettingsList, context);

export const isGripperMoving = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().isGripperMoving(params, pinsSettingsList, context);

export const sleep = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MyBuddyService().sleep(params, pinsSettingsList, context);
