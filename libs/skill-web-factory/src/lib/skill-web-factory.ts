import { PinsSettings } from '@digipair/engine';

class FactoryService {
  async post(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { digipair, reasoning, body } = params;

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

  async get(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { digipair, reasoning } = params;

    const response = await fetch(`${window.location.origin}/${digipair}/${reasoning}`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
    });

    const content = await response.json();
    return content;
  }
}

export const post = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new FactoryService().post(params, pinsSettingsList, context);

export const get = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new FactoryService().get(params, pinsSettingsList, context);
