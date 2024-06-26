import { config as configEngine } from '@digipair/engine';
import * as actionsChatbot from './pins/chatbot.actions';

configEngine.set('LIBRARIES', {
  '@digipair/actions-chatbot': actionsChatbot,
});

type CONFIG_KEY = 'API_URL' | 'COMMON_EXPERIENCE' | 'BASE_URL' | 'LIBRARIES' | 'VERSIONS';
export const _config = {
  API_URL: window.location.origin,
  COMMON_EXPERIENCE: 'common',
};
export const config = {
  set: (key: CONFIG_KEY, value: any) => {
    if (key === 'LIBRARIES') {
      configEngine.set('LIBRARIES', {
        '@digipair/actions-chatbot': actionsChatbot,
        ...value,
      });
      return;
    }

    if (['BASE_URL', 'VERSIONS'].indexOf(key) >= 0) {
      configEngine.set('BASE_URL', value);
      return;
    }

    _config[key as 'API_URL' | 'COMMON_EXPERIENCE'] = value;
  },
};
