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
  }

  async getAttribute(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { selector, attribute } = params;
    const element = document.querySelector(selector) as any;

    return element[attribute] ?? element.getAttribute(attribute);
  }

  async dispatchEvent(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { selector, name, detail } = params;
    const element = document.querySelector(selector) as any;

    element.dispatchEvent(new CustomEvent(name, { detail }));
  }

  async execute(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { selector, name, args = [] } = params;
    const element = document.querySelector(selector) as any;

    return element[name](...args);
  }

  async goTo(_params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    window.location.reload();
  }

  async reload(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { url, target = '_self' } = params;
    window.open(url, target);
  }
}

export const setAttribute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().setAttribute(params, pinsSettingsList, context);

export const getAttribute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().getAttribute(params, pinsSettingsList, context);

export const dispatchEvent = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().dispatchEvent(params, pinsSettingsList, context);

export const execute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().execute(params, pinsSettingsList, context);

export const goTo = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().goTo(params, pinsSettingsList, context);

export const reload = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().reload(params, pinsSettingsList, context);
