/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import sharp from 'sharp';

type Sharp = any;

class SharpService {
  private async loadImage(content: string): Promise<{ image: Sharp; mimeType: string }> {
    const matches = content.match(/^data:(image\/[a-zA-Z]+);base64,(.+)$/);
    if (!matches) throw new Error('Invalid base64 image format');
    const [, mimeType, base64Data] = matches;
    const buffer = Buffer.from(base64Data, 'base64');
    return { image: sharp(buffer), mimeType };
  }

  private async toBase64(image: Sharp, outputMime: string): Promise<string> {
    const buffer = await image.toBuffer();
    return `data:${outputMime};base64,${buffer.toString('base64')}`;
  }

  async metadata(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content } = params;
    const { image } = await this.loadImage(content);
    return image.metadata();
  }

  async stats(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content } = params;
    const { image } = await this.loadImage(content);
    return image.stats();
  }

  async raw(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content } = params;
    const { image } = await this.loadImage(content);
    const buffer = await image.raw().toBuffer();
    return buffer.toString('base64');
  }

  async resize(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, width, height } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.resize(width, height);
    return this.toBase64(image, mimeType);
  }

  async rotate(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, angle } = params;
    const { image, mimeType } = await this.loadImage(content);
    if (typeof angle === 'number') {
      image.rotate(angle);
    } else {
      image.rotate(); // auto based on EXIF
    }
    return this.toBase64(image, mimeType);
  }

  async extract(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, left, top, width, height } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.extract({ left, top, width, height });
    return this.toBase64(image, mimeType);
  }

  async flip(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.flip();
    return this.toBase64(image, mimeType);
  }

  async flop(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.flop();
    return this.toBase64(image, mimeType);
  }

  async grayscale(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.grayscale();
    return this.toBase64(image, mimeType);
  }

  async negate(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.negate();
    return this.toBase64(image, mimeType);
  }

  async tint(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, r, g, b } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.tint({ r, g, b });
    return this.toBase64(image, mimeType);
  }

  async modulate(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, brightness, saturation, hue } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.modulate({ brightness, saturation, hue });
    return this.toBase64(image, mimeType);
  }

  async blur(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, radius } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.blur(radius);
    return this.toBase64(image, mimeType);
  }

  async sharpen(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content } = params;
    const { image, mimeType } = await this.loadImage(content);
    image.sharpen();
    return this.toBase64(image, mimeType);
  }

  async toFormat(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, format } = params;
    const { image } = await this.loadImage(content);
    image.toFormat(format);
    return this.toBase64(image, `image/${format}`);
  }

  async jpeg(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, quality = 80 } = params;
    const { image } = await this.loadImage(content);
    image.jpeg({ quality });
    return this.toBase64(image, 'image/jpeg');
  }

  async png(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, compressionLevel = 6 } = params;
    const { image } = await this.loadImage(content);
    image.png({ compressionLevel });
    return this.toBase64(image, 'image/png');
  }

  async webp(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, quality = 80 } = params;
    const { image } = await this.loadImage(content);
    image.webp({ quality });
    return this.toBase64(image, 'image/webp');
  }

  async avif(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, quality = 50 } = params;
    const { image } = await this.loadImage(content);
    image.avif({ quality });
    return this.toBase64(image, 'image/avif');
  }

  async composite(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { content, overlays } = params;
    const { image, mimeType } = await this.loadImage(content);

    const inputs = await Promise.all(
      overlays.map(async (overlay: any) => {
        const buffer = Buffer.from(overlay.input.replace(/^data:.*;base64,/, ''), 'base64');
        return { input: buffer, top: overlay.top, left: overlay.left };
      }),
    );

    image.composite(inputs);
    return this.toBase64(image, mimeType);
  }
}

export const metadata = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().metadata(params, pinsSettingsList, context);

export const stats = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().stats(params, pinsSettingsList, context);

export const raw = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().raw(params, pinsSettingsList, context);

export const resize = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().resize(params, pinsSettingsList, context);

export const rotate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().rotate(params, pinsSettingsList, context);

export const extract = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().extract(params, pinsSettingsList, context);

export const flip = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().flip(params, pinsSettingsList, context);

export const flop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().flop(params, pinsSettingsList, context);

export const grayscale = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().grayscale(params, pinsSettingsList, context);

export const negate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().negate(params, pinsSettingsList, context);

export const tint = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().tint(params, pinsSettingsList, context);

export const modulate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().modulate(params, pinsSettingsList, context);

export const blur = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().blur(params, pinsSettingsList, context);

export const sharpen = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().sharpen(params, pinsSettingsList, context);

export const toFormat = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().toFormat(params, pinsSettingsList, context);

export const jpeg = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().jpeg(params, pinsSettingsList, context);

export const png = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().png(params, pinsSettingsList, context);

export const webp = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().webp(params, pinsSettingsList, context);

export const avif = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().avif(params, pinsSettingsList, context);

export const composite = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SharpService().composite(params, pinsSettingsList, context);
