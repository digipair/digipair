import { PinsSettings } from '@digipair/engine';
import * as ToastifyJs from 'toastify-js';

const Toastify = (ToastifyJs as any).default;

class EditorService {
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
  new EditorService().information(params, pinsSettingsList, context);

export const error = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new EditorService().error(params, pinsSettingsList, context);
