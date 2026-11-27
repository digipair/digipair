/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import AdmZip from 'adm-zip';
import { lookup as lookupMimeType } from 'mime-types';
import { gunzipSync, gzipSync } from 'zlib';

const MIME_TYPES: Record<string, string> = {
  zip: 'application/zip',
  tar: 'application/x-tar',
  'tar.gz': 'application/gzip',
};

interface ArchiveFile {
  filename: string;
  content: string;
}

class ArchiveService {
  private toBuffer(content: string): Buffer {
    const data = (content ?? '').replace(/^data:.*;base64,/, '');
    return Buffer.from(data, 'base64');
  }

  private toDataUrl(buffer: Buffer, mimeType: string): string {
    return `data:${mimeType};base64,${buffer.toString('base64')}`;
  }

  private mimeTypeFromFilename(filename: string): string {
    return lookupMimeType(filename) || 'application/octet-stream';
  }

  private detectFormat(buffer: Buffer): 'zip' | 'tar' | 'tar.gz' {
    if (buffer.length >= 2 && buffer[0] === 0x1f && buffer[1] === 0x8b) {
      return 'tar.gz';
    }
    if (buffer.length >= 2 && buffer[0] === 0x50 && buffer[1] === 0x4b) {
      return 'zip';
    }
    return 'tar';
  }

  private streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      stream.on('data', chunk => chunks.push(chunk as Buffer));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });
  }

  private compressZip(files: ArchiveFile[]): Buffer {
    const zip = new AdmZip();
    for (const file of files) {
      zip.addFile(file.filename, this.toBuffer(file.content));
    }
    return zip.toBuffer();
  }

  private extractZip(buffer: Buffer): ArchiveFile[] {
    const zip = new AdmZip(buffer);
    return zip
      .getEntries()
      .filter(entry => !entry.isDirectory)
      .map(entry => ({
        filename: entry.entryName,
        content: this.toDataUrl(entry.getData(), this.mimeTypeFromFilename(entry.entryName)),
      }));
  }

  private async compressTar(files: ArchiveFile[], gzip: boolean): Promise<Buffer> {
    const { pack: createPack } = require('tar-stream');
    const pack = createPack();
    const collector = this.streamToBuffer(pack);

    for (const file of files) {
      const buffer = this.toBuffer(file.content);
      await new Promise<void>((resolve, reject) => {
        pack.entry({ name: file.filename, size: buffer.length }, buffer, (error: any) =>
          error ? reject(error) : resolve(),
        );
      });
    }
    pack.finalize();

    const tarBuffer = await collector;
    return gzip ? gzipSync(tarBuffer) : tarBuffer;
  }

  private extractTar(buffer: Buffer, gzip: boolean): Promise<ArchiveFile[]> {
    const { extract: createExtract } = require('tar-stream');
    const tarBuffer = gzip ? gunzipSync(buffer) : buffer;

    return new Promise((resolve, reject) => {
      const extract = createExtract();
      const files: ArchiveFile[] = [];

      extract.on('entry', (header: any, stream: NodeJS.ReadableStream, next: () => void) => {
        if (header.type !== 'file') {
          stream.resume();
          return next();
        }
        this.streamToBuffer(stream)
          .then(content => {
            files.push({
              filename: header.name,
              content: this.toDataUrl(content, this.mimeTypeFromFilename(header.name)),
            });
            next();
          })
          .catch(reject);
      });
      extract.on('finish', () => resolve(files));
      extract.on('error', reject);
      extract.end(tarBuffer);
    });
  }

  async compress(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { files = [], format = 'zip' } = params;

    let buffer: Buffer;
    switch (format) {
      case 'zip':
        buffer = this.compressZip(files);
        break;
      case 'tar':
        buffer = await this.compressTar(files, false);
        break;
      case 'tar.gz':
        buffer = await this.compressTar(files, true);
        break;
      default:
        throw new Error(`Unsupported archive format: ${format}`);
    }

    return this.toDataUrl(buffer, MIME_TYPES[format]);
  }

  async extract(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { file } = params;
    const buffer = this.toBuffer(file);
    const format = params.format ?? this.detectFormat(buffer);

    switch (format) {
      case 'zip':
        return this.extractZip(buffer);
      case 'tar':
        return this.extractTar(buffer, false);
      case 'tar.gz':
        return this.extractTar(buffer, true);
      default:
        throw new Error(`Unsupported archive format: ${format}`);
    }
  }
}

export const compress = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ArchiveService().compress(params, pinsSettingsList, context);

export const extract = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ArchiveService().extract(params, pinsSettingsList, context);
