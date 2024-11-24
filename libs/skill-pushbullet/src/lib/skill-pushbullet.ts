/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class PushbulletService {
  private TARGET_DEVICE_ID: string;
  private PUSHBULLET_ACCESS_TOKEN: string;
  private API_ENDPOINT: string;

  constructor(context: any, params: any) {
    this.PUSHBULLET_ACCESS_TOKEN =
      context.privates.PUSHBULLET_ACCESS_TOKEN ??
      params?.PUSHBULLET_ACCESS_TOKEN ??
      process.env['PUSHBULLET_ACCESS_TOKEN'];
    this.TARGET_DEVICE_ID =
      context.privates.PUSHBULLET_TARGET_DEVICE_ID ??
      params?.PUSHBULLET_TARGET_DEVICE_ID ??
      process.env['PUSHBULLET_TARGET_DEVICE_ID'];

    this.API_ENDPOINT =
      context.privates.PUSHBULLET_API_ENDPOINT ??
      params?.PUSHBULLET_API_ENDPOINT ??
      process.env['PUSHBULLET_API_ENDPOINT'] ??
      'https://api.pushbullet.com/v2';
  }

  async call(url: string, method: string, data: any, headers: any, signal: AbortSignal) {
    const response = await fetch(`${this.API_ENDPOINT}${url}`, {
      signal,
      method,
      headers: {
        'Access-Token': this.PUSHBULLET_ACCESS_TOKEN,
        ...headers,
      },
      body: data,
    });
    if (!response.ok) throw new Error('[SKILL-PUSHBULLET] REQUEST FAILED: ' + response.status);
    return await response.json();
  }

  async sendSms(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { message, phoneNumber } = params;
    return await this.call(
      '/texts',
      'POST',
      JSON.stringify({
        data: {
          addresses: [phoneNumber],
          message,
          target_device_iden: this.TARGET_DEVICE_ID,
        },
      }),
      {
        'Content-Type': 'application/json',
      },
      context.protected?.signal,
    );
  }
}

export const sendSms = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PushbulletService(context, params).sendSms(params, pinsSettingsList, context);
