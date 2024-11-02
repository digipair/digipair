/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSession, createChannel } from 'better-sse';
import { PinsSettings } from '@digipair/engine';

class SSEService {
  private sessions = new Map();
  private channels = new Map();

  async registerSession(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { id } = params;
    const session = await createSession(context.protected.req, context.protected.res);

    if (id) {
      const start = context.privates.SSE_SESION_START || '';
      const name = `${start}__${context.request.digipair}_${context.request.reasoning}__${id}`;

      this.sessions.set(name, session);
      session.on('disconnected', () => {
        this.sessions.delete(name);
      });
    }

    return session;
  }

  async registerChannel(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { session, id = '' } = params;
    const start = context.privates.SSE_SESION_START || '';
    const name = `${start}__${context.request.digipair}_${context.request.reasoning}__${id}`;
    let channel = this.channels.get(name);
    if (!channel) {
      channel = createChannel(session);
      this.channels.set(name, channel);
    }

    const channelSession = session ?? (await this.registerSession({}, [], context));
    channel.register(channelSession);

    return channel;
  }

  async push(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      id,
      message,
      reasoning = context.request.reasoning,
    } = params;
    const digipair = context.request.digipair;
    const start = context.privates.SSE_SESION_START || '';
    const name = `${start}__${digipair}_${reasoning}__${id}`;
    const session = this.sessions.get(name);

    return session?.push(message);
  }

  async broadcast(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      message,
      reasoning = context.request.reasoning,
      id = '',
      event = 'message',
    } = params;
    const digipair = context.request.digipair;
    const start = context.privates.SSE_SESION_START || '';
    const name = `${start}__${digipair}_${reasoning}__${id}`;
    let channel = this.channels.get(name);

    return channel?.broadcast(message, event);
  }
}

const service = new SSEService();

export const registerSession = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.registerSession(params, pinsSettingsList, context);

export const registerChannel = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.registerChannel(params, pinsSettingsList, context);

export const push = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.push(params, pinsSettingsList, context);

export const broadcast = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  service.broadcast(params, pinsSettingsList, context);
