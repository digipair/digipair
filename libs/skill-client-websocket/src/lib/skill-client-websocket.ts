/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

const WS = typeof WebSocket === 'undefined' ? require('ws') : WebSocket;

class ClientWebSocketService {
  private retryInterval!: number;
  private maxRetries!: number;
  private retryCount = 0;

  ws: WebSocket | null = null;
  cwssForceClose = false;

  async send(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { websocket = context.websocket, message } = params;
    return websocket.ws?.send(JSON.stringify(message));
  }

  async close(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { websocket = context.websocket } = params;
    websocket.cwssForceClose = true;
    return websocket.ws?.close();
  }

  async connect(params: any, pinsSettingsList: PinsSettings[], context: any): Promise<any> {
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
    this.ws = new WS(url, { signal: context.protected?.signal }) as WebSocket;

    // Event onopen: Connexion réussie
    this.ws.onopen = async () => {
      this.retryCount = 0; // Réinitialise le compteur de tentatives après une connexion réussie

      try {
        await executePinsList(open, { ...context, websocket: this });
      } catch (error: any) {
        console.error(error);

        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    };

    // Event onmessage: Réception d'un message
    this.ws.onmessage = async (event: any) => {
      try {
        await executePinsList(message, {
          ...context,
          message: JSON.parse(event.data),
          websocket: this,
        });
      } catch (error: any) {
        console.error(error);

        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    };

    // Event onclose: Déconnexion
    this.ws.onclose = async () => {
      this.ws = null;
      const reconnect = this.cwssForceClose
        ? false
        : this.reconnectWebSocket(params, pinsSettingsList, context);

      if (!reconnect) {
        try {
          await executePinsList(close, { ...context, websocket: this });
        } catch (error: any) {
          console.error(error);

          const skillLogger = require('@digipair/skill-logger');
          skillLogger.addLog(context, 'ERROR', error.message);
        }
      }
    };

    // Event onerror: Erreur
    this.ws.onerror = async (err: Event) => {
      try {
        await executePinsList(error, { ...context, error: err, websocket: this });
      } catch (error: any) {
        console.error(error);
        
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }

      this.ws?.close(); // Ferme la connexion en cas d'erreur
    };

    return this;
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
