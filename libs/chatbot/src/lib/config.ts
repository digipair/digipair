import * as engine from '@digipair/engine';
import * as actionsChatbot from './pins/chatbot.actions';

const configEngine = (engine as any).config;

configEngine.set('LIBRARIES', {
    '@digipair/actions-chatbot': actionsChatbot,
});

type CONFIG_KEY = 'API_URL' | 'COMMON_EXPERIENCE' | 'BASE_URL' | 'LIBRARIES';
export const _config = {
  API_URL: 'https://service.digipair.ai/api',
  COMMON_EXPERIENCE: 'common',
};
export const config = {
  set: (key: CONFIG_KEY, value: any) => {
    if (key === 'LIBRARIES') {
      configEngine.set('LIBRARIES', {
        '@digipair/actions-chatbot': actionsChatbot,
        ...value
      });
      return;
    }

    if (key === 'BASE_URL') {
      configEngine.set('BASE_URL', value);
      return;
    }

    _config[key] = value;
  },
};
