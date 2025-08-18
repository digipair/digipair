/* eslint-disable @typescript-eslint/no-unused-vars */
// import { PinsSettings, executePinsList } from '@digipair/engine';
import { PinsSettings, executePinsList } from '@digipair/engine';
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

  async parseHtml(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { html, execute = [] } = params;
    const dom = new JSDOM(html);
    const result = await executePinsList(execute, {
      ...context,
      document: {
        querySelector: (selector: string) => this.querySelector(selector, dom.window.document),
        querySelectorAll: (selector: string) =>
          this.querySelectorAll(selector, dom.window.document),
      },
    }, `${context.__PATH__}.execute`);

    return result;
  }

  private querySelector(selector: string, parent: any): any {
    const element = parent?.querySelector(selector);

    return element
      ? {
          textContent: element.textContent,
          querySelector: (selector: string) => this.querySelector(selector, element),
          querySelectorAll: (selector: string) => this.querySelectorAll(selector, element),
          getAttribute: (name: string) => this.getAttribute(name, element),
        }
      : undefined;
  }

  private querySelectorAll(selector: string, parent: any): any {
    const elements = Array.from(parent?.querySelectorAll(selector) || []);

    return elements.map((element: any) => ({
      textContent: element.textContent,
      querySelector: (selector: string) => this.querySelector(selector, element),
      querySelectorAll: (selector: string) => this.querySelectorAll(selector, element),
      getAttribute: (name: string) => this.getAttribute(name, element),
    }));
  }

  private getAttribute(name: string, element: any): any {
    return element?.getAttribute(name);
  }
}

export const html2pins = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HtmlService().html2pins(params, pinsSettingsList, context);
export const pins2html = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HtmlService().pins2html(params, pinsSettingsList, context);
export const parseHtml = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HtmlService().parseHtml(params, pinsSettingsList, context);
