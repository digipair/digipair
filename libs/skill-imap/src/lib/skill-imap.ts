/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';
import { ImapFlow } from 'imapflow';
import { JSDOM } from 'jsdom';

class IMapService {
  private retryInterval!: number;
  private maxRetries!: number;
  private retryCount = 0;

  imap: ImapFlow | null = null;
  forceClose = false;

  private async parse(client: IMapService, message: any, attachments: string): Promise<any> {
    const contents = await (client.imap as any)?.downloadMany(
      message.seq.toString(),
      message.bodyStructure.childNodes?.map((node: any) => node.part) || ['1'],
    );

    const contentTextKey = Object.keys(contents).find(
      key =>
        message.bodyStructure.type === 'text/plain' ||
        (contents[key].meta.contentType === 'text/plain' &&
          !message.bodyStructure.childNodes?.find((node: any) => node.part === key)?.disposition),
    );
    const contentHtmlKey = Object.keys(contents).find(
      key =>
        message.bodyStructure.type === 'text/html' ||
        (contents[key].meta.contentType === 'text/html' &&
          !message.bodyStructure.childNodes?.find((node: any) => node.part === key)?.disposition),
    );

    let result = {
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

    if (result.contentHtml !== '' && result.contentText === '') {
      const dom = new JSDOM(result.contentHtml);
      result.contentText = dom.window.document.body.textContent;
    }

    return result;
  }

  private reconnect(params: any, pinsSettingsList: PinsSettings[], context: any) {
    if (this.retryCount >= this.maxRetries) {
      return false;
    }

    setTimeout(() => {
      this.retryCount++;
      this.retryInterval *= 2; // Double l'intervalle entre les tentatives
      this.connect(params, pinsSettingsList, context);
    }, this.retryInterval);

    return true;
  }

  async connect(params: any, pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      config,
      configExecute,
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
    let configuration = config;

    if (configExecute && configExecute.length > 0) {
      configuration = await executePinsList(configExecute, { ...context });
    }

    const client = (this.imap = new ImapFlow({ logger: false, ...configuration }));

    await client.connect();

    context.protected?.signal.addEventListener('abort', () => {
      this.forceClose = true;
      client.logout();
    });

    client.on('close', async () => {
      this.imap = null;
      const reconnect = this.forceClose ? false : this.reconnect(params, pinsSettingsList, context);

      if (!reconnect) {
        try {
          await executePinsList(close, { ...context, imap: this });
        } catch (error: any) {
          const skillLogger = require('@digipair/skill-logger');
          skillLogger.addLog(context, 'ERROR', error.message);
        }
      }
    });

    client.on('error', async data => {
      try {
        await executePinsList(error, { ...context, error: data, imap: this });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('exists', async data => {
      try {
        await executePinsList(exists, { ...context, data, imap: this });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('expunge', async data => {
      try {
        await executePinsList(expunge, { ...context, data, imap: this });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('flags', async data => {
      try {
        await executePinsList(flags, { ...context, data, imap: this });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('log', async data => {
      try {
        await executePinsList(log, { ...context, data, imap: this });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('mailboxClose', async data => {
      try {
        await executePinsList(mailboxClose, { ...context, data, imap: this });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    client.on('mailboxOpen', async data => {
      try {
        await executePinsList(mailboxOpen, { ...context, data, imap: this });
      } catch (error: any) {
        const skillLogger = require('@digipair/skill-logger');
        skillLogger.addLog(context, 'ERROR', error.message);
      }
    });

    try {
      await executePinsList(load, { ...context, imap: this });
    } catch (error: any) {
      const skillLogger = require('@digipair/skill-logger');
      skillLogger.addLog(context, 'ERROR', error.message);
    }

    return this;
  }

  async parseOne(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, message, attachments = 'NONE' } = params;
    return this.parse(client, message, attachments);
  }

  async parseAll(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, messages, attachments = 'NONE' } = params;

    const results = await Promise.all(
      messages.map(async (message: any) => await this.parse(client, message, attachments)),
    );

    return results;
  }

  async search(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, query, options = {} } = params;
    return client.imap.search(query, options);
  }

  async getMailboxLock(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path = 'INBOX', options = {} } = params;
    return client.imap.getMailboxLock(path, options);
  }

  async getQuota(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path } = params;
    return client.imap.getQuota(path);
  }

  async idle(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    return client.imap.idle();
  }

  async list(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, options = {} } = params;
    return client.imap.list(options);
  }

  async listTree(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, options = {} } = params;
    return client.imap.listTree(options);
  }

  async logout(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    client.forceClose = true;
    return client.imap.logout();
  }

  async mailboxClose(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    return client.imap.mailboxClose();
  }

  async mailboxCreate(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path } = params;
    return client.imap.mailboxCreate(path);
  }

  async mailboxDelete(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path } = params;
    return client.imap.mailboxDelete(path);
  }

  async mailboxOpen(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path = 'INBOX', options = {} } = params;
    return client.imap.mailboxOpen(path, options);
  }

  async mailboxRename(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path, newPath } = params;
    return client.imap.mailboxRename(path, newPath);
  }

  async mailboxSubscribe(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { client = context.imap, path } = params;
    return client.imap.mailboxSubscribe(path);
  }

  async mailboxUnsubscribe(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { client = context.imap, path } = params;
    return client.imap.mailboxUnsubscribe(path);
  }

  async messageCopy(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, destination, options = {} } = params;
    return client.imap.messageCopy(range, destination, options);
  }

  async messageDelete(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, options = {} } = params;
    return client.imap.messageDelete(range, options);
  }

  async messageFlagsAdd(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { client = context.imap, range, flags, options = {} } = params;
    return client.imap.messageFlagsAdd(range, flags, options);
  }

  async messageFlagsRemove(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { client = context.imap, range, flags, options = {} } = params;
    return client.imap.messageFlagsRemove(range, flags, options);
  }

  async messageFlagsSet(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any,
  ): Promise<any> {
    const { client = context.imap, range, flags, options = {} } = params;
    return client.imap.messageFlagsSet(range, flags, options);
  }

  async messageMove(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, destination, options = {} } = params;
    return client.imap.messageMove(range, destination, options);
  }

  async noop(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    return client.imap.noop();
  }

  async setFlagColor(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, flag, color } = params;
    return client.imap.setFlagColor(flag, color);
  }

  async status(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path, query } = params;
    return client.imap.status(path, query);
  }

  async append(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, path, content, flags = [], idate = Date.now() } = params;
    return client.imap.append(path, content, flags, idate);
  }

  async close(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap } = params;
    client.forceClose = true;
    return client.imap.close();
  }

  async download(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, part, options = {} } = params;
    return client.imap.download(range, part, options);
  }

  async downloadMany(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, parts, options = {} } = params;
    return client.imap.downloadMany(range, parts, options);
  }

  async fetch(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, query, options = {} } = params;
    return client.imap.fetch(range, query, options);
  }

  async fetchAll(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, range, query, options = {} } = params;
    return client.imap.fetchAll(range, query, options);
  }

  async fetchOne(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.imap, seq, query, options = {} } = params;
    return client.imap.fetchOne(seq, query, options);
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

export const append = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().append(params, pinsSettingsList, context);

export const close = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().close(params, pinsSettingsList, context);

export const download = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().download(params, pinsSettingsList, context);

export const downloadMany = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().downloadMany(params, pinsSettingsList, context);

export const fetch = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().fetch(params, pinsSettingsList, context);

export const fetchAll = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().fetchAll(params, pinsSettingsList, context);

export const fetchOne = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().fetchOne(params, pinsSettingsList, context);

export const parseAll = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().parseAll(params, pinsSettingsList, context);

export const parseOne = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new IMapService().parseOne(params, pinsSettingsList, context);
