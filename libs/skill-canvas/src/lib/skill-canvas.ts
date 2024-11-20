import { executePinsList, PinsSettings } from '@digipair/engine';

class CanvasService {
  private base64ToImage(base64: string) {
    const data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(data, 'base64');
    return buffer;
  }

  async canvas(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { width, height, execute } = params;
    const { createCanvas } =
      typeof window === 'undefined'
        ? require('canvas')
        : {
            createCanvas: (width: number, height: number) => {
              const canvas = document.createElement('canvas');
              canvas.width = width;
              canvas.height = height;
              return canvas;
            },
          };

    const instance = createCanvas(width, height);
    const ctx = instance.getContext('2d');

    await executePinsList(execute, { ...context, canvas: { ctx } });

    return instance.toDataURL();
  }

  async loadImage(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { image } = params;
    const { loadImageCanvas } =
      typeof window === 'undefined'
        ? require('canvas')
        : {
            loadImageCanvas: (src: string) =>
              new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = err => reject(err);
                img.src = src;
              }),
          };

    return loadImageCanvas(typeof window === 'undefined' ? this.base64ToImage(image) : image);
  }

  async drawImage(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { image, x, y, width, height } = params;
    context.canvas.ctx.drawImage(image, x, y, width, height);
  }

  async strokeRect(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { x, y, width, height } = params;
    context.canvas.ctx.strokeRect(x, y, width, height);
  }

  async fillRect(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { x, y, width, height } = params;
    context.canvas.ctx.fillRect(x, y, width, height);
  }

  async fillText(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { text, x, y } = params;
    context.canvas.ctx.fillText(text, x, y);
  }

  async strokeStyle(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { style } = params;
    context.canvas.ctx.strokeStyle = style;
  }

  async fillStyle(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { style } = params;
    context.canvas.ctx.fillStyle = style;
  }

  async lineWidth(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { style } = params;
    context.canvas.ctx.lineWidth = style;
  }

  async measureText(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { text } = params;
    context.canvas.ctx.measureText(text);
  }
}

export const canvas = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().canvas(params, pinsSettingsList, context);

export const loadImage = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().loadImage(params, pinsSettingsList, context);

export const drawImage = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().drawImage(params, pinsSettingsList, context);

export const strokeRect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().strokeRect(params, pinsSettingsList, context);

export const fillRect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().fillRect(params, pinsSettingsList, context);

export const fillText = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().fillText(params, pinsSettingsList, context);

export const strokeStyle = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().strokeStyle(params, pinsSettingsList, context);

export const fillStyle = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().fillStyle(params, pinsSettingsList, context);

export const lineWidth = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().lineWidth(params, pinsSettingsList, context);

export const measureText = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new CanvasService().measureText(params, pinsSettingsList, context);
