/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';
import * as WS from 'isomorphic-ws';

class ClientWebSocketService {
  private ws!: WS;
  private retryInterval!: number;
  private maxRetries!: number;
  private retryCount = 0;

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
    this.ws = new WS(url);

    // Event onopen: Connexion réussie
    this.ws.onopen = async () => {
      this.retryCount = 0; // Réinitialise le compteur de tentatives après une connexion réussie
      await executePinsList(open, { ...context });
    };

    // Event onmessage: Réception d'un message
    this.ws.onmessage = notification => {
      executePinsList(message, { ...context, message: JSON.parse(notification.data as string) });
    };

    // Event onclose: Déconnexion
    this.ws.onclose = async () => {
      await executePinsList(close, { ...context });
      this.reconnectWebSocket(params, _pinsSettingsList, context);
    };

    // Event onerror: Erreur
    this.ws.onerror = err => {
      this.ws.close(); // Ferme la connexion en cas d'erreur
      executePinsList(error, { ...context, error: err });
    };

    return this.ws;
  }

  private reconnectWebSocket(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    if (this.retryCount >= this.maxRetries) {
      return;
    }

    setTimeout(() => {
      this.retryCount++;
      this.retryInterval *= 2; // Double l'intervalle entre les tentatives
      this.connect(params, _pinsSettingsList, context);
    }, this.retryInterval);
  }
}

export const connect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ClientWebSocketService().connect(params, pinsSettingsList, context);
