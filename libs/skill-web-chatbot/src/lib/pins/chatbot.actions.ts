import { PinsSettings } from '@digipair/engine';

class DomService {
  async executeRemoteReasoning(
    { digipair, reasoning, input, apiUrl }: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const response = await fetch(`${apiUrl}/${digipair}/${reasoning}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...context.input,
        ...input,
      }),
    });

    const result = await response.json();

    if (response.status >= 400) {
      throw new Error(result.message);
    }

    return result;
  }

  async setElementAttribute(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { selector, attribute, value } = params.element;
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

export const setElementAttribute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().setElementAttribute(params, pinsSettingsList, context);

export const dispatchEvent = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DomService().dispatchEvent(params, pinsSettingsList, context);

export const executeRemoteReasoning = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new DomService().executeRemoteReasoning(params, pinsSettingsList, context);
