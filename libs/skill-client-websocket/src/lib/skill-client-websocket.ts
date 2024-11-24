/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

const WS = typeof WebSocket === 'undefined' ? require('ws') : WebSocket;

class ClientWebSocketService {
  private ws!: WebSocket;
  private retryInterval!: number;
  private maxRetries!: number;
  private retryCount = 0;

  async send(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { websocket, message } = params;
    return websocket.send(JSON.stringify(message));
  }

  async close(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { websocket } = params;
    websocket.cwssForceClose = true;
    return websocket.close();
  }

  async connect(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      url = '',
      message = [],
      open = [],
      close = [],
      error = [],
      retryInterval = 1000,
      maxRetries = 10,
    } = params;

    this.retryInterval = retryInterval;
    this.maxRetries = maxRetries;

    // Crée une nouvelle instance WebSocket
    this.ws = new WS(url, { signal: context.protected?.signal });

    // Event onopen: Connexion réussie
    this.ws.onopen = async () => {
      this.retryCount = 0; // Réinitialise le compteur de tentatives après une connexion réussie
      await executePinsList(open, { ...context });
    };

    // Event onmessage: Réception d'un message
    this.ws.onmessage = async (event: any) => {
      await executePinsList(message, { ...context, message: JSON.parse(event.data) });
    };

    // Event onclose: Déconnexion
    this.ws.onclose = async () => {
      const reconnect = (this.ws as any).cwssForceClose ? false : this.reconnectWebSocket(params, _pinsSettingsList, context);

      if (!reconnect) {
        await executePinsList(close, { ...context });
      }
    };

    // Event onerror: Erreur
    this.ws.onerror = async (err: Event) => {
      await executePinsList(error, { ...context, error: err });
      this.ws.close(); // Ferme la connexion en cas d'erreur
    };

    return this.ws;
  }

  private reconnectWebSocket(params: any, pinsSettingsList: PinsSettings[], context: any) {
    if (this.retryCount >= this.maxRetries) {
      return false;
    }

    setTimeout(() => {
      this.retryCount++;
      this.retryInterval *= 2; // Double l'intervalle entre les tentatives
      this.connect(params, pinsSettingsList, context);
    }, this.retryInterval);

    return true;
  }
}

export const connect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ClientWebSocketService().connect(params, pinsSettingsList, context);

export const send = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ClientWebSocketService().send(params, pinsSettingsList, context);

export const close = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ClientWebSocketService().close(params, pinsSettingsList, context);