/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';
import { ImapFlow } from 'imapflow';

class IMapService {
  async connect(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      config,
      load = [],
      close = [],
      error = [],
      exists = [],
      expunge = [],
      flags = [],
      log = [],
      mailboxClose = [],
      mailboxOpen = [],
    } = params;
    const client = new ImapFlow({ logger: false, ...config });

    await client.connect();

    context.protected?.signal.addEventListener('abort', () => {
      client.logout();
    });

    client.on('close', async () => {
      try {
        await executePinsList(close, { ...context, imap: client });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('error', async data => {
      try {
        await executePinsList(error, { ...context, error: data, imap: client });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('exists', async data => {
      try {
        await executePinsList(exists, { ...context, data, imap: client });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('expunge', async data => {
      try {
        await executePinsList(expunge, { ...context, data, imap: client });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('flags', async data => {
      try {
        await executePinsList(flags, { ...context, data, imap: client });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('log', async data => {
      try {
        await executePinsList(log, { ...context, data, imap: client });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('mailboxClose', async data => {
      try {
        await executePinsList(mailboxClose, { ...context, data, imap: client });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('mailboxOpen', async data => {
      try {
        await executePinsList(mailboxOpen, { ...context, data, imap: client });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    try {
      await executePinsList(load, { ...context, imap: client });
    } catch (error: any) {
      const skillLogger = require('@digipair/skill-logger');
      skillLogger.addLog(context, 'ERROR', error.message);
    }

    return client;
  }

  async search(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, query, attachments = 'FULL' } = params;
    let messages: any[];

    const list = await client.search(query);
    const results = await client.fetchAll(list, {
      envelope: true,
      uid: true,
      bodyStructure: true,
    });

    messages = await Promise.all(
      results.map(async (message: any) => {
        const contents = await client.downloadMany(
          message.seq.toString(),
          message.bodyStructure.childNodes?.map((node: any) => node.part) || ['1'],
        );

        const contentTextKey = Object.keys(contents).find(
          key =>
            contents[key].meta.contentType === 'text/plain' &&
            !message.bodyStructure.childNodes?.find((node: any) => node.part === key)?.disposition,
        );
        const contentHtmlKey = Object.keys(contents).find(
          key =>
            contents[key].meta.contentType === 'text/html' &&
            !message.bodyStructure.childNodes?.find((node: any) => node.part === key)?.disposition,
        );

        return {
          ...message,
          contentText:
            contentTextKey !== undefined ? contents[contentTextKey].content.toString('UTF8') : '',
          contentHtml:
            contentHtmlKey !== undefined ? contents[contentHtmlKey].content.toString('UTF8') : '',
          attachments: Object.keys(contents)
            .filter(key => key !== contentTextKey && key !== contentHtmlKey)
            .filter((node: any) =>
              attachments === 'FULL'
                ? true
                : attachments === 'INLINE'
                  ? node.disposition !== 'attachment'
                  : false,
            )
            .map(key => ({
              meta: contents[key].meta,
              content: contents[key].content.toString('base64'),
            })),
        };
      }),
    );

    return messages;
  }

  async getMailboxLock(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path = 'INBOX', options = {} } = params;
    return client.getMailboxLock(path, options);
  }

  async getQuota(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path } = params;
    return client.getQuota(path);
  }

  async idle(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    return client.idle();
  }

  async list(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, options = {} } = params;
    return client.list(options);
  }

  async listTree(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, options = {} } = params;
    return client.listTree(options);
  }

  async logout(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    return client.logout();
  }

  async mailboxClose(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    return client.mailboxClose();
  }

  async mailboxCreate(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path } = params;
    return client.mailboxCreate(path);
  }

  async mailboxDelete(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path } = params;
    return client.mailboxDelete(path);
  }

  async mailboxOpen(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path, options = {} } = params;
    return client.mailboxOpen(path, options);
  }

  async mailboxRename(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path, newPath } = params;
    return client.mailboxRename(path, newPath);
  }

  async mailboxSubscribe(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path } = params;
    return client.mailboxSubscribe(path);
  }

  async mailboxUnsubscribe(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path } = params;
    return client.mailboxUnsubscribe(path);
  }

  async messageCopy(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, destination, options = {} } = params;
    return client.messageCopy(range, destination, options);
  }

  async messageDelete(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, options = {} } = params;
    return client.messageDelete(range, options);
  }

  async messageFlagsAdd(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, flags, options = {} } = params;
    return client.messageFlagsAdd(range, flags, options);
  }

  async messageFlagsRemove(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, flags, options = {} } = params;
    return client.messageFlagsRemove(range, flags, options);
  }

  async messageFlagsSet(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, flags, options = {} } = params;
    return client.messageFlagsSet(range, flags, options);
  }

  async messageMove(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, destination, options = {} } = params;
    return client.messageMove(range, destination, options);
  }

  async noop(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    return client.noop();
  }

  async setFlagColor(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, flag, color } = params;
    return client.setFlagColor(flag, color);
  }

  async status(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path, query } = params;
    return client.status(path, query);
  }
}

export const connect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().connect(params, pinsSettingsList, context);

export const search = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().search(params, pinsSettingsList, context);

export const getMailboxLock = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().getMailboxLock(params, pinsSettingsList, context);

export const getQuota = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().getQuota(params, pinsSettingsList, context);

export const idle = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().idle(params, pinsSettingsList, context);

export const list = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().list(params, pinsSettingsList, context);

export const listTree = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().listTree(params, pinsSettingsList, context);

export const logout = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().logout(params, pinsSettingsList, context);

export const mailboxClose = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().mailboxClose(params, pinsSettingsList, context);

export const mailboxCreate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().mailboxCreate(params, pinsSettingsList, context);

export const mailboxDelete = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().mailboxDelete(params, pinsSettingsList, context);

export const mailboxOpen = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().mailboxOpen(params, pinsSettingsList, context);

export const mailboxRename = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().mailboxRename(params, pinsSettingsList, context);

export const mailboxSubscribe = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().mailboxSubscribe(params, pinsSettingsList, context);

export const mailboxUnsubscribe = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().mailboxUnsubscribe(params, pinsSettingsList, context);

export const messageCopy = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().messageCopy(params, pinsSettingsList, context);

export const messageDelete = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().messageDelete(params, pinsSettingsList, context);

export const messageFlagsAdd = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().messageFlagsAdd(params, pinsSettingsList, context);

export const messageFlagsRemove = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().messageFlagsRemove(params, pinsSettingsList, context);

export const messageFlagsSet = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().messageFlagsSet(params, pinsSettingsList, context);

export const messageMove = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().messageMove(params, pinsSettingsList, context);

export const noop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().noop(params, pinsSettingsList, context);

export const setFlagColor = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().setFlagColor(params, pinsSettingsList, context);

export const status = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().status(params, pinsSettingsList, context);