import { PinsSettings } from '@digipair/engine';

class FactoryService {
  async start(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { digipair = context.request.digipair, reasoning, body = {} } = params;

    const response = await fetch(`${window.location.origin}/${digipair}/${reasoning}`, {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
      method: 'POST',
    });

    const content = await response.json();
    return content;
  }
}

export const start = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new FactoryService().start(params, pinsSettingsList, context);
