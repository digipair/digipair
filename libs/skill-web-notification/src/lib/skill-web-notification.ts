import { PinsSettings } from '@digipair/engine';
import * as ToastifyJs from 'toastify-js';

const BASE_URL = 'https://cdn.jsdelivr.net/npm';
const Toastify = (ToastifyJs as any).default;

class NotificationService {
  constructor() {
    let link = document.querySelector('#digipair-skill-web-notification-css') as any;

    if (!link) {
      link = document.createElement('link');
      link.id = 'digipair-skill-web-notification-css';
      link.rel = 'stylesheet';
      link.href = `${BASE_URL}/toastify-js/src/toastify.min.css`;
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
}

export const information = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NotificationService().information(params, pinsSettingsList, context);

export const error = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NotificationService().error(params, pinsSettingsList, context);