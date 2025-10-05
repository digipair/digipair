import { PinsSettings } from '@digipair/engine';
import * as webPush from 'web-push';

class PushNotificationService {
  async sendPush(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      payload,
      subscription,
      mailto = context.privates.PUSH_NOTIFICATION_MAILTO,
      publicKey = context.variables.PUSH_NOTIFICATION_PUBLIC_KEY ||
        context.privates.PUSH_NOTIFICATION_PUBLIC_KEY,
      privateKey = context.privates.PUSH_NOTIFICATION_PRIVATE_KEY,
    } = params;

    webPush.setVapidDetails(`mailto:${mailto}`, publicKey, privateKey);

    const response = await webPush.sendNotification(subscription, payload);
    return response;
  }
}

export const sendPush = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PushNotificationService().sendPush(params, pinsSettingsList, context);
