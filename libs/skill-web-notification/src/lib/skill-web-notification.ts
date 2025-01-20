import { PinsSettings, executePinsList } from '@digipair/engine';
import * as ToastifyJs from 'toastify-js';

const Toastify = (ToastifyJs as any).default;

class NotificationService {
  constructor() {
    const globalInstance: any = typeof window === 'undefined' ? global : window;
    const config = globalInstance.__DIGIPAIR_CONFIG__;
    const version = '1.12.0';
    let link = document.querySelector('#digipair-skill-web-notification-css') as any;

    if (!link) {
      link = document.createElement('link');
      link.id = 'digipair-skill-web-notification-css';
      link.rel = 'stylesheet';
      link.href = `${config.BASE_URL}/toastify-js@${version}/src/toastify.min.css`;
      link.type = 'text/css';
      document.head.appendChild(link);
    }
  }

  async information(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { message } = params;

    Toastify({
      text: message,
      position: 'center',
      style: {
        'font-family': '"Poppins", sans-serif',
        background: '#52DFDB',
      },
      duration: 3000,
    }).showToast();
  }

  async error(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { message } = params;

    Toastify({
      text: message,
      position: 'center',
      style: {
        'font-family': '"Poppins", sans-serif',
        background: 'linear-gradient(90deg, rgba(121,9,9,1) 0%, rgba(203,62,62,1) 100%)',
      },
      duration: 3000,
    }).showToast();
  }

  async confirm(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { message, ok = [], ko = [] } = params;

    if (!window.confirm(message)) {
      await executePinsList(ko, context);
      return false;
    }

    await executePinsList(ok, context);
    return true;
  }

  async alert(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { message } = params;

    return window.alert(message);
  }
}

export const information = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NotificationService().information(params, pinsSettingsList, context);

export const error = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NotificationService().error(params, pinsSettingsList, context);

export const confirm = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NotificationService().confirm(params, pinsSettingsList, context);

export const alert = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NotificationService().alert(params, pinsSettingsList, context);
