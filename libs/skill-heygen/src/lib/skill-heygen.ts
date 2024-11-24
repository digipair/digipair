/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class HeygenService {
  async newSession(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      serverUrl = context.privates.HEYGEN_SERVER_URL ?? process.env['HEYGEN_SERVER_URL'],
      apiKey = context.privates.HEYGEN_API_KEY ?? process.env['HEYGEN_API_KEY'],
      quality = 'low',
      avatar = '',
      voice = '',
    } = params;

    const response = await fetch(`${serverUrl}/v1/streaming.new`, {
      signal: context.protected?.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({
        quality,
        avatar_name: avatar,
        voice: {
          voice_id: voice,
        },
      }),
    });
    if (response.status === 500) {
      throw new Error('Server error');
    } else {
      const data = await response.json();
      return data.data;
    }
  }

  async handleICE(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      serverUrl = context.privates.HEYGEN_SERVER_URL ?? process.env['HEYGEN_SERVER_URL'],
      apiKey = context.privates.HEYGEN_API_KEY ?? process.env['HEYGEN_API_KEY'],
      sessionId,
      candidate,
    } = params;

    const response = await fetch(`${serverUrl}/v1/streaming.ice`, {
      signal: context.protected?.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({ session_id: sessionId, candidate }),
    });
    if (response.status === 500) {
      throw new Error('Server error');
    } else {
      const data = await response.json();
      return data;
    }
  }

  async startSession(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      serverUrl = context.privates.HEYGEN_SERVER_URL ?? process.env['HEYGEN_SERVER_URL'],
      apiKey = context.privates.HEYGEN_API_KEY ?? process.env['HEYGEN_API_KEY'],
      sessionId,
      sdp,
    } = params;

    const response = await fetch(`${serverUrl}/v1/streaming.start`, {
      signal: context.protected?.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({ session_id: sessionId, sdp }),
    });
    if (response.status === 500) {
      throw new Error('Server error');
    } else {
      const data = await response.json();
      return data.data;
    }
  }

  async talk(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      serverUrl = context.privates.HEYGEN_SERVER_URL ?? process.env['HEYGEN_SERVER_URL'],
      apiKey = context.privates.HEYGEN_API_KEY ?? process.env['HEYGEN_API_KEY'],
      sessionId,
      text,
    } = params;

    const response = await fetch(`${serverUrl}/v1/streaming.task`, {
      signal: context.protected?.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({ session_id: sessionId, text }),
    });
    if (response.status === 500) {
      throw new Error('Server error');
    } else {
      const data = await response.json();
      return data.data;
    }
  }

  async stop(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      serverUrl = context.privates.HEYGEN_SERVER_URL ?? process.env['HEYGEN_SERVER_URL'],
      apiKey = context.privates.HEYGEN_API_KEY ?? process.env['HEYGEN_API_KEY'],
      sessionId,
    } = params;

    const response = await fetch(`${serverUrl}/v1/streaming.stop`, {
      signal: context.protected?.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({ session_id: sessionId }),
    });
    if (response.status === 500) {
      throw new Error('Server error');
    } else {
      const data = await response.json();
      return data.data;
    }
  }
}

export const newSession = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HeygenService().newSession(params, pinsSettingsList, context);

export const handleICE = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HeygenService().handleICE(params, pinsSettingsList, context);

export const startSession = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HeygenService().startSession(params, pinsSettingsList, context);

export const talk = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HeygenService().talk(params, pinsSettingsList, context);

export const stop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new HeygenService().stop(params, pinsSettingsList, context);
