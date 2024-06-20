import { PinsSettings } from '@digipair/engine';

class WebRequestService {
  async fetchJson(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { url, method = 'GET', body = {}, headers = [] } = params;

    const response = await fetch(url, {
      headers: {
        'content-type': 'application/json',
        ...headers.reduce((acc: any, item: any) => {
          acc[item.name] = item.value;
          return acc;
        }, {}),
      },
      body: method === 'GET' ? undefined : JSON.stringify(body),
      method,
    });

    const content = await response.json();
    return content;
  }
}

export const fetchJson = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebRequestService().fetchJson(params, pinsSettingsList, context);
