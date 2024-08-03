/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class WebInteractService {
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

  async goTo(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { url, target = '_self' } = params;
    window.open(url, target);
  }

  async reload(_params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    window.location.reload();
  }

  async upload(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { accept = '*' } = params;

    const result = await new Promise(resolve => {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = false;
      input.accept = accept;
      input.onchange = (event: any) => {
        const files = event.target.files;
        const file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve({ value: reader.result as string, filename: file.name });
        };
      };
      input.click();
    });

    return result;
  }

  async uploadText(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { accept = 'text/plain' } = params;

    const result = await new Promise(resolve => {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = false;
      input.accept = accept;
      input.onchange = (event: any) => {
        const files = event.target.files;
        const file = files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          resolve({ value: reader.result as string, filename: file.name });
        };
      };
      input.click();
    });

    return result;
  }

  async capture(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { deviceId, width = 4096, height = 2160, facingMode = 'environment' } = params;

    const constraints = {
      audio: false,
      video: {
        width: { ideal: width },
        height: { ideal: height },
        facingMode,
        deviceId
      }
    };

    const video = document.createElement('video');
    video.autoplay = true;
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
    await new Promise(resolve => video.onloadedmetadata = resolve);
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL('image/jpeg');
    stream.getTracks().forEach(track => track.stop());

    return image;
  }

  async getMediaDevices(_params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    return navigator.mediaDevices.enumerateDevices();
  }
}

export const setAttribute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().setAttribute(params, pinsSettingsList, context);

export const getAttribute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().getAttribute(params, pinsSettingsList, context);

export const dispatchEvent = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().dispatchEvent(params, pinsSettingsList, context);

export const execute = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().execute(params, pinsSettingsList, context);

export const goTo = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().goTo(params, pinsSettingsList, context);

export const reload = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().reload(params, pinsSettingsList, context);

export const upload = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().upload(params, pinsSettingsList, context);

export const uploadText = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().uploadText(params, pinsSettingsList, context);

export const capture = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().capture(params, pinsSettingsList, context);

export const getMediaDevices = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new WebInteractService().getMediaDevices(params, pinsSettingsList, context);
