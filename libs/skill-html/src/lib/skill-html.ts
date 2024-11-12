/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { JSDOM } from 'jsdom';

class HtmlService {
  async html2pins(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { html, library = 'web' } = params;
    const dom = new JSDOM(html);
    const pins = this.generatePinsFromElements(
      Array.from(dom.window.document.querySelectorAll('body > *')),
      library,
    );

    return pins;
  }

  private generatePinsFromElements(elements: Element[], library: string): any {
    const pinsList = elements.map(element => this.generatePinsFromElement(element, library));
    return pinsList;
  }

  private generatePinsFromElement(element: Element, library: string): any {
    const attributes = element.getAttributeNames().reduce(
      (obj: any, name: string) => ({
        ...obj,
        [name]: element.getAttribute(name),
      }),
      {},
    );

    if (element.children.length === 0 && element.textContent) {
      attributes.textContent = element.textContent;
    }

    const pins = {
      library,
      element: element.tagName.toLowerCase(),
      properties: attributes,
      pins: this.generatePinsFromElements(Array.from(element.children), library),
    };

    return pins;
  }

  async pins2html(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { pins } = params;
    const dom = new JSDOM();
    const element = dom.window.document.createElement('section');
    await this.generateElementsFromPins(pins, element, dom);

    return element.innerHTML;
  }

  private async generateElementsFromPins(
    pinsList: PinsSettings[],
    parent: Element,
    dom: any,
  ): Promise<void> {
    for (let i = 0; i < pinsList.length; i++) {
      const item = pinsList[i];
      await this.generateElementFromPins(item, parent, dom);
    }
  }

  private async generateElementFromPins(
    pinsSettings: PinsSettings,
    parent: Element,
    dom: any,
  ): Promise<void> {
    const element = dom.window.document.createElement(pinsSettings.element);

    // const settings = await preparePinsSettings(pinsSettings, context);
    const settings = pinsSettings as any;
    Object.entries(settings.properties || {}).forEach(([key, value]) => {
      if (key === 'textContent') {
        element.textContent = value;
      } else if (key === 'innerHTML') {
        element.innerHTML = value;
      } else if (typeof value === 'string') {
        element.setAttribute(key, value);
      } else {
        (element as any)[key] = value;
      }
    });

    const pinsList = settings.pins || [];
    await this.generateElementsFromPins(pinsList, element, dom);

    parent.appendChild(element);
  }
}

export const html2pins = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HtmlService().html2pins(params, pinsSettingsList, context);
export const pins2html = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HtmlService().pins2html(params, pinsSettingsList, context);
