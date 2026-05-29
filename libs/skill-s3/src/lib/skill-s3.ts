/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import { Readable } from 'stream';

interface OauthConfig  {
  tokenUrl: string;
  clientId: string;
  clientSecret: string;
};


class S3Service {

  private async getOauthToken(authConfig: OauthConfig) {
    try {
      const res = await fetch(authConfig.tokenUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: authConfig.clientId,
            client_secret: authConfig.clientSecret,
          }),
        }
      );
      if (!res.ok) {
        throw new Error(`[SKILL-S3] access token error: ${res.status}`);
      }
      const data = await res.json();
      return data.access_token;

    } catch (error) {
      console.error(`[SKILL-S3] ACCESS OAUTH TOKEN FAILED : ${error}`);
      throw error;
    }
  }

  private getClient(config: any, oauthConfig?: OauthConfig) {
    const client = new S3Client(config);

    if (oauthConfig) {
      client.middlewareStack.add(
        (next) => async (args) => {
          const token = await this.getOauthToken(oauthConfig);
          
          const request = args.request as any;          
          request.headers ??= {};
          request.headers.Authorization = `Bearer ${token}`;

          return next(args);
        },
        {
          step: 'finalizeRequest',
          name: 'injectOauthToken',
        }
      );
    }

    return client;
  }



  async upload(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { bucket, key, content, config = context.privates.S3_CONFIG, oauthConfig = context.privates.S3_OAUTH_CONFIG } = params;

    const client = this.getClient(config, oauthConfig);

    const match = content.match(/^data:(.*?);base64,/);
    const contentType = match[1];

    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: Buffer.from(content.replace(/^data:.*;base64,/, ''), 'base64'),
      ContentType: contentType,
    });

    return await client.send(command);
  }

  async download(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { bucket, key, range, config = context.privates.S3_CONFIG, oauthConfig = context.privates.S3_OAUTH_CONFIG } = params;

    const client = this.getClient(config, oauthConfig);

    const command = new GetObjectCommand({ Bucket: bucket, Key: key, Range: range });
    const response = await client.send(command);
    const stream = response.Body as Readable;

    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    const base64 = buffer.toString('base64');

    return `data:${response.ContentType};base64,${base64}`;
  }

  async remove(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { bucket, key, config = context.privates.S3_CONFIG, oauthConfig = context.privates.S3_OAUTH_CONFIG } = params;

    const client = this.getClient(config, oauthConfig);

    const command = new DeleteObjectCommand({ Bucket: bucket, Key: key });

    return client.send(command);
  }

  async list(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { bucket, prefix = '', config = context.privates.S3_CONFIG, oauthConfig = context.privates.S3_OAUTH_CONFIG } = params;
    const client = this.getClient(config, oauthConfig);
    const command = new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix });

    return await client.send(command);
  }
}

// Export helpers
const service = new S3Service();

export const upload = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.upload(params, pinsSettingsList, context);

export const download = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.download(params, pinsSettingsList, context);

export const remove = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.remove(params, pinsSettingsList, context);

export const list = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.list(params, pinsSettingsList, context);
