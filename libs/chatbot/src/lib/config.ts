import * as engine from '@digipair/engine';
import * as actionsChatbot from './pins/chatbot.actions';

engine.config.set('LIBRARIES', {
    '@digipair/actions-chatbot': actionsChatbot,
});

export const _config: { [key: string]: any } = {
  API_URL: 'https://service.digipair.ai/api',
  CHATBOT_URL: 'https://chatbot.digipair.ai',
  COMMON_EXPERIENCE: '6539213e2fc9cf277ab8e70c',
};
export const config = {
  set: (key: string, value: any) => {
    if (key === 'LIBRARIES' || key === 'BASE_URL') {
      engine.config.set('LIBRARIES', {
        '@digipair/actions-chatbot': actionsChatbot,
        ...value
      });
      return;
    }

    if (key === 'BASE_URL') {
      engine.config.set('BASE_URL', value);
      return;
    }

    _config[key] = value;
  },
};


