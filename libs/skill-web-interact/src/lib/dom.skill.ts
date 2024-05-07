/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class DomService {
  async setAttribute(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { selector, attribute, value } = params;
    const element = document.querySelector(selector) as any;

    if (attribute === 'textContent') {
      element.textContent = value;
    } else if (attribute === 'value') {
      element.value = value;
    } else if (typeof value === 'string') {
      element.setAttribute(attribute, value);
    } else {
      element['__' + attribute] = value;
      element.requestUpdate();
    }

    return;
  }

  async dispatchEvent(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { selector, name, detail } = params;
    const element = document.querySelector(selector) as any;

    element.dispatchEvent(new CustomEvent(name, { detail }));

    return;
  }
}

export const setAttribute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().setAttribute(params, pinsSettingsList, context);

export const dispatchEvent = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().dispatchEvent(params, pinsSettingsList, context);
