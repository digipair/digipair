import { PinsSettings } from "@digipair/engine";

class WebHttpNotificationService {

  private async registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
        console.log('Service Worker non pris en charge dans ce navigateur.');
        return null;
    }

    try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        return registration;
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement du Service Worker:', error);
        return null;
    }
  }

  private async subscribeToPushNotifications(registration: any, vapidPublicKey: string) {
      if (!('PushManager' in window)) {
          console.log('Push Manager non pris en charge dans ce navigateur.');
          return null;
      }

      try {
          const permission = await Notification.requestPermission();
          if (permission !== 'granted') {
              console.log('Permission de notification non accordée');
              return null;
          }

          const subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: vapidPublicKey
          });

          return subscription;
      } catch (error) {
          console.error('Erreur lors de l\'abonnement aux notifications push:', error);
          return null;
      }
  }

  async initialize(params: any, _pinsSettingsList: PinsSettings[], context: any) {
      const { vapidPublicKey = context.privates.WEB_PUSH_NOTIFICATION_PUBLIC_KEY ?? process.env['WEB_PUSH_NOTIFICATION_PUBLIC_KEY'] } = params;
      const registration = await this.registerServiceWorker();

      if (registration) {
          return await this.subscribeToPushNotifications(registration, vapidPublicKey);
      }
      return null;
  }
}

export const initialize = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
    new WebHttpNotificationService().initialize(params, pinsSettingsList, context);
  