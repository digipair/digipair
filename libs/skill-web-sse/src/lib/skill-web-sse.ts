/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSession, createChannel } from 'better-sse';
import { PinsSettings, executePinsList } from '@digipair/engine';

class WebSSEService {
  private sessions = new Map();

  async connect(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { url = '', connection = 'default', message = [] } = params;
    const session = new EventSource(url);

    this.sessions.set(connection, session);

    session.addEventListener('message', ({ data }) => {
      executePinsList(message, { ...context, message: JSON.parse(data), connection });
    });

    return session;
  }
}

const service = new WebSSEService();

export const connect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.connect(params, pinsSettingsList, context);
