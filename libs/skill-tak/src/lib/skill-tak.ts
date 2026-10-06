/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';
import TAK, { TAKAPI, APIAuthCertificate, APIAuthPassword } from '@tak-ps/node-tak';
import { CoTParser } from '@tak-ps/node-cot';

class TakService {
  private resolveAuth(params: any, context: any) {
    const {
      cert = context.privates.TAK_CERT ?? process.env['TAK_CERT'],
      key = context.privates.TAK_KEY ?? process.env['TAK_KEY'],
      passphrase = context.privates.TAK_PASSPHRASE ?? process.env['TAK_PASSPHRASE'],
      ca = context.privates.TAK_CA ?? process.env['TAK_CA'],
      rejectUnauthorized = true,
    } = params;

    return { cert, key, passphrase, ca, rejectUnauthorized };
  }

  async enroll(params: any, _pins: PinsSettings[], context: any): Promise<any> {
    const {
      url = context.privates.TAK_ENROLL_URL ?? process.env['TAK_ENROLL_URL'],
      username = context.privates.TAK_USERNAME ?? process.env['TAK_USERNAME'],
      password = context.privates.TAK_PASSWORD ?? process.env['TAK_PASSWORD'],
    } = params;

    const api = await TAKAPI.init(new URL(url), new APIAuthPassword(username, password));
    const { cert, key, ca } = await api.Credentials.generate({ username });

    return { cert, key, ca };
  }

  async tak(params: any, _pins: PinsSettings[], context: any): Promise<any> {
    const { url = context.privates.TAK_URL ?? process.env['TAK_URL'], id, type } = params;
    const auth = this.resolveAuth(params, context);

    return TAK.connect(new URL(url), auth, { id, type });
  }

  async send(params: any, _pins: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_TAK, messages = [] } = params;
    const tak = await executePinsList(client, context, `${context.__PATH__}.client`);

    const cots = await Promise.all(
      (messages as any[]).map(message =>
        typeof message === 'string'
          ? CoTParser.from_xml(message)
          : CoTParser.from_geojson(message),
      ),
    );

    await tak.write(cots);
    await tak.flush();

    return { sent: cots.length };
  }

  async listen(params: any, _pins: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_TAK, execute = [] } = params;
    const tak = await executePinsList(client, context, `${context.__PATH__}.client`);

    tak.on('cot', async (cot: any) => {
      await executePinsList(
        execute,
        {
          ...context,
          cot: await CoTParser.to_geojson(cot),
        },
        `${context.__PATH__}.execute`,
      );
    });

    return tak;
  }

  async disconnect(params: any, _pins: PinsSettings[], context: any) {
    const { client } = params;

    client.destroy();
  }

  async api(params: any, _pins: PinsSettings[], context: any): Promise<any> {
    const { url = context.privates.TAK_API_URL ?? process.env['TAK_API_URL'] } = params;
    const { cert, key } = this.resolveAuth(params, context);

    return TAKAPI.init(new URL(url), new APIAuthCertificate(cert, key));
  }

  async request(params: any, _pins: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_TAK_API, path, options = {} } = params;
    const api = await executePinsList(client, context, `${context.__PATH__}.client`);

    return api.fetch(api.stdurl(path), options);
  }
}

export const enroll = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TakService().enroll(params, pinsSettingsList, context);

export const tak = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TakService().tak(params, pinsSettingsList, context);

export const send = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TakService().send(params, pinsSettingsList, context);

export const listen = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TakService().listen(params, pinsSettingsList, context);

export const disconnect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TakService().disconnect(params, pinsSettingsList, context);

export const api = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TakService().api(params, pinsSettingsList, context);

export const request = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TakService().request(params, pinsSettingsList, context);
