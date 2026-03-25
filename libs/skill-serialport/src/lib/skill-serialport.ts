/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { SerialPort } from 'serialport';

class SerialPortService {
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async read(ser: SerialPort, timeout: number, type: 'size' | 'delimiter', value: number): Promise<number[]> {
    return new Promise(resolve => {
      const buffer: number[] = [];

      const instance = setTimeout(() => {
        ser.removeListener('data', onData);
        resolve(buffer);
      }, timeout);

      const onData = (chunk: Buffer) => {
        for (const byte of chunk) {
          buffer.push(byte);
        }

        let end = false;
        if (type === 'size' && buffer.length >= value) {
          end = true;
        } else if (type === 'delimiter' && buffer.includes(value)) {
          end = true;
        }

        if (type === 'size' && buffer.length >= value) {
          clearTimeout(instance);
          ser.removeListener('data', onData);
          resolve(buffer);
        }
      };

      ser.on('data', onData);
    });
  }

  async command(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      data,
      type = 'delimiter',
      value = '\n'.charCodeAt(0),
      sleep = 1000,
      timeout = 3000,
      config = context.privates.SERIALPORT_CONFIG,
    } = params;
    const command = Buffer.from(data);

    return new Promise((resolve, reject) => {
      const ser = new SerialPort(config);

      ser.on('error', err => {
        reject(err);
      });

      ser.on('open', async () => {
        await ser.write(command);

        await this.sleep(sleep);

        const reponse = await this.read(ser, timeout, type, value);

        ser.close();

        resolve(reponse);
      });
    });
  }

  async write(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { data, sleep = 1000, config = context.privates.SERIALPORT_CONFIG } = params;
    const command = Buffer.from(data);

    return new Promise((resolve, reject) => {
      const ser = new SerialPort(config);

      ser.on('error', err => {
        reject(err);
      });

      ser.on('open', async () => {
        await ser.write(command);

        await this.sleep(sleep);

        ser.close();

        resolve({});
      });
    });
  }
}

// Export helpers
export const write = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SerialPortService().write(params, pinsSettingsList, context);

export const command = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SerialPortService().command(params, pinsSettingsList, context);
