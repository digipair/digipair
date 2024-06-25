/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import * as nodemailer from 'nodemailer';

class SendMailService {
  async send(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { from, to, subject, text, html, config = context.privates.SENDMAIL_CONFIG } = params;
    const transporter = nodemailer.createTransport(config);
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    return info;
  }
}

export const send = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SendMailService().send(params, pinsSettingsList, context);
