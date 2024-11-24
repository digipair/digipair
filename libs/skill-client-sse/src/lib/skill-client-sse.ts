/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';
import { fetchEventSource } from '@microsoft/fetch-event-source';

class ClientSSEService {
  async connect(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      url = '',
      event = 'message',
      message = [],
      open = [],
      close = [],
      error = [],
      options = {},
    } = params;

    await fetchEventSource(url, {
      signal: context.protected?.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      onmessage: (notification: any) => {
        if (notification.event !== event) {
          return;
        }

        executePinsList(message, { ...context, message: JSON.parse(notification.data) });
      },
      onopen: async () => {
        await executePinsList(open, { ...context });
      },
      onclose: () => {
        executePinsList(close, { ...context });
      },
      onerror(err) {
        if (error.length === 0) {
          console.error(err);
        }

        executePinsList(error, { ...context, error: err });
      },
      ...options,
    });
  }
}

export const connect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ClientSSEService().connect(params, pinsSettingsList, context);
