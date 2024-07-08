/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class TwilioService {
  private FROM_NUMBER: string;
  private TWILIO_SID: string;
  private TWILIO_TOKEN: string;
  private API_ENDPOINT: string;

  constructor(context: any, params: any) {
    this.TWILIO_SID =
      context.privates.TWILIO_SID ?? params?.TWILIO_SID ?? process.env['TWILIO_SID'];
    this.TWILIO_TOKEN =
      context.privates.TWILIO_TOKEN ?? params?.TWILIO_TOKEN ?? process.env['TWILIO_TOKEN'];
    this.FROM_NUMBER =
      context.privates.TWILIO_FROM_NUMBER ??
      params?.TWILIO_FROM_NUMBER ??
      process.env['TWILIO_FROM_NUMBER'];

    this.API_ENDPOINT =
      context.privates.TWILIO_API_ENDPOINT ??
      params?.TWILIO_API_ENDPOINT ??
      process.env['TWILIO_API_ENDPOINT'] ??
      'https://api.twilio.com/2010-04-01';
  }

  async call(url: string, method: string, data: any, headers: any) {
    const response = await fetch(`${this.API_ENDPOINT}${url}`, {
      method,
      headers: {
        Authorization: 'Basic ' + btoa(this.TWILIO_SID + ':' + this.TWILIO_TOKEN),
        ...headers,
      },
      body: data,
    });
    if (!response.ok) throw new Error('[SKILL-TWILIO] REQUEST FAILED: ' + response.status);
    return await response.json();
  }

  async sendSms(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
    whatsapp: boolean = false,
  ): Promise<any> {
    const { message, phoneNumber } = params;
    return await this.call(
      `/Accounts/${this.TWILIO_SID}/Messages.json`,
      'POST',
      `From=${encodeURIComponent(`${whatsapp ? 'whatsapp:' : ''}${this.FROM_NUMBER}`)}&Body=${encodeURIComponent(message)}&To=${encodeURIComponent(`${whatsapp ? 'whatsapp:' : ''}${phoneNumber}`)}`,
      {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    );
  }
}

export const sendSms = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TwilioService(context, params).sendSms(params, pinsSettingsList, context);

export const sendWhatsapp = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TwilioService(context, params).sendSms(params, pinsSettingsList, context, true);
