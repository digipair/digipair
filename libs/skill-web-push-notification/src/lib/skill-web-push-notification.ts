import { PinsSettings } from '@digipair/engine';

class WebHttpNotificationService {
  private async registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.log('Service Worker not supported in this browser');
      return null;
    }

    try {
      const registration = await navigator.serviceWorker.register(
        '/assets/push-notification.worker.js',
      );
      return registration;
    } catch (error) {
      console.error('Error when registering the Service Worker', error);
      return null;
    }
  }

  private async subscribeToPushNotifications(registration: any, vapidPublicKey: string) {
    if (!('PushManager' in window)) {
      console.log('Push Manager not supported in this browser');
      return null;
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.log('Notification permission not granted');
        return null;
      }

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapidPublicKey,
      });

      return subscription;
    } catch (error) {
      console.error('Error when subscribing to push notifications', error);
      return null;
    }
  }

  async initialize(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { publicKey = context.variables.PUSH_NOTIFICATION_PUBLIC_KEY } = params;
    const registration = await this.registerServiceWorker();

    if (registration) {
      return await this.subscribeToPushNotifications(registration, publicKey);
    }
    return null;
  }
}

export const initialize = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebHttpNotificationService().initialize(params, pinsSettingsList, context);
