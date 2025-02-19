import { PinsSettings, config } from '@digipair/engine';
import { promises } from 'fs';

class LoggerService {
  async initialize(path = process.env['DIGIPAIR_LOGS_PATH'] ?? './factory/logs') {
    // create logs directory if it doesn't exist
    await promises.mkdir(`${path}/factory`, { recursive: true });

    // create consumption-daily directory if it doesn't exist
    await promises.mkdir(`${path}/consumption-daily`, { recursive: true });

    // create consumption-monthly directory if it doesn't exist
    await promises.mkdir(`${path}/consumption-monthly`, { recursive: true });
  }

  async addLog(context: any, type: string, message: string, data?: any) {
    const DIGIPAIR_LOGS_PATH =
      context.privates.DIGIPAIR_LOGS_PATH ?? process.env['DIGIPAIR_LOGS_PATH'] ?? './factory/logs';
    const current = new Date();
    const line = {
      date: current.getTime(),
      digipair: context.request.digipair,
      reasoning: context.request.reasoning,
      type,
      message,
    };

    config.log({ level: type, path: context.__PATH__, message, context, data });

    await promises.appendFile(
      `${DIGIPAIR_LOGS_PATH}/factory/${current.toISOString().split('T')[0]}.jsonl`,
      '\n' + JSON.stringify(line),
      'utf8',
    );
  }

  async addConsumption(
    context: any,
    service: string,
    model: string,
    promptTokens: number,
    completionTokens: number,
  ) {
    const DIGIPAIR_LOGS_PATH =
      context.privates.DIGIPAIR_LOGS_PATH ?? process.env['DIGIPAIR_LOGS_PATH'] ?? './factory/logs';
    const current = new Date();
    const line = {
      date: current.getTime(),
      digipair: context.request.digipair,
      reasoning: context.request.reasoning,
      service,
      model,
      promptTokens,
      completionTokens,
    };

    await promises.appendFile(
      `${DIGIPAIR_LOGS_PATH}/consumption-daily/${current.toISOString().split('T')[0]}.jsonl`,
      '\n' + JSON.stringify(line),
      'utf8',
    );
  }

  async computeDailyConsumption(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      date,
      path = context.privates.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/logs',
    } = params;
    let result: any;

    try {
      const text = await promises.readFile(`${path}/consumption-daily/${date}.jsonl`, 'utf8');
      const lines = text.split('\n').filter(line => line !== '');
      result = lines.map((line: string) => JSON.parse(line));
    } catch (error) {
      result = [];
    }

    const dayLines = result.reduce((acc: any, curr: any) => {
      let line = acc.find(
        (line: any) =>
          line.digipair === curr.digipair &&
          line.reasoning === curr.reasoning &&
          line.service === curr.service &&
          line.model === curr.model,
      );

      if (!line) {
        line = {
          date,
          digipair: curr.digipair,
          reasoning: curr.reasoning,
          service: curr.service,
          model: curr.model,
          promptTokens: 0,
          completionTokens: 0,
        };
        acc.push(line);
      }

      line.promptTokens += curr.promptTokens;
      line.completionTokens += curr.completionTokens;

      return acc;
    }, []);

    await promises.appendFile(
      `${path}/consumption-monthly/${date.substring(0, 7)}.jsonl`,
      '\n' + dayLines.map((line: any) => JSON.stringify(line)).join('\n'),
      'utf8',
    );
  }

  async read(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      date,
      type = 'factory', // consumption-daily, consumption-monthly, factory
      path = context.privates.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/logs',
    } = params;
    let result: any[];

    try {
      const text = await promises.readFile(`${path}/${type}/${date}.jsonl`, 'utf8');
      const lines = text.split('\n').filter(line => line !== '');
      result = lines.map((line: string) => JSON.parse(line));
    } catch (error) {
      result = [];
    }

    return result;
  }

  async list(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      type = 'factory', // consumption-daily, consumption-monthly, factory
      path = context.privates.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/logs',
    } = params;

    const files = (await promises.readdir(`${path}/${type}`))
      .filter(file => /\.jsonl$/g.test(file))
      .map(file => file.split('.')[0]);

    return files;
  }

  async cleaning(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      type = 'factory', // consumption-daily, consumption-monthly, factory
      to,
      path = context.privates.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/logs',
    } = params;
    const files = await promises.readdir(`${path}/${type}`);

    for (const file of files) {
      const stats = await promises.stat(`${path}/${type}/${file}`);
      if (stats.mtime.getTime() < to) {
        promises.unlink(`${path}/${type}/${file}`);
      }
    }
  }
}

export const initialize = (path?: string) => new LoggerService().initialize(path);

export const addLog = (context: any, type: string, message: string) =>
  new LoggerService().addLog(context, type, message);

export const addConsumption = (
  context: any,
  service: string,
  model: string,
  promptTokens: number,
  completionTokens: number,
) => new LoggerService().addConsumption(context, service, model, promptTokens, completionTokens);

// ----------------------------
// Methods for the skill
// ----------------------------

export const computeDailyConsumption = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new LoggerService().computeDailyConsumption(params, pinsSettingsList, context);

export const read = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().read(params, pinsSettingsList, context);

export const list = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().list(params, pinsSettingsList, context);

export const cleaning = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().cleaning(params, pinsSettingsList, context);
