import { PinsSettings } from '@digipair/engine';
import * as webPush from 'web-push';

class PushNotificationService {

  async sendPush(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { payload, subscription, mailto, 
      vapidPrivateKey = context.privates.WEB_PUSH_NOTIFICATION_PUBLIC_KEY ?? process.env['WEB_PUSH_NOTIFICATION_PUBLIC_KEY'],
      vapidPublicKey = context.privates.WEB_PUSH_NOTIFICATION_PRIVATE_KEY ?? process.env['WEB_PUSH_NOTIFICATION_PRIVATE_KEY'] } = params;
  
    webPush.setVapidDetails(
      `mailto:${mailto}`,
      vapidPublicKey,
      vapidPrivateKey
    );

    try {
      const response = await webPush.sendNotification(subscription, payload);
      return response;
    } catch (error) {
      console.error("Erreur d'envoi de la notification:", error);
    }
    return null;
  }
}

export const sendPush = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new PushNotificationService().sendPush(params, pinsSettingsList, context);
