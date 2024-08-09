import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';

class LoggerService {
  async initialize(path = process.env['DIGIPAIR_LOGS_PATH'] ?? './factory/digipairs/logs') {
    // create logs directory if it doesn't exist
    await promises.mkdir(`${path}/factory`, { recursive: true });

    // create consumption-daily directory if it doesn't exist
    await promises.mkdir(`${path}/consumption-daily`, { recursive: true });

    // create consumption-monthly directory if it doesn't exist
    await promises.mkdir(`${path}/consumption-monthly`, { recursive: true });
  }

  async addConsumption(
    context: any,
    service: string,
    model: string,
    promptTokens: number,
    completionTokens: number,
  ) {
    const DIGIPAIR_LOGS_PATH =
      context.DIGIPAIR_LOGS_PATH ??
      process.env['DIGIPAIR_LOGS_PATH'] ??
      './factory/digipairs/logs';
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
      path = context.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/digipairs/logs',
    } = params;
    const text = await promises.readFile(`${path}/consumption-daily/${date}.jsonl`, 'utf8');
    const lines = text.split('\n').filter(line => line !== '');
    const result = lines.map((line: string) => JSON.parse(line));

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
    }, []);

    await promises.appendFile(
      `${path}/consumption-monthly/${date.substring(0, 7)}.jsonl`,
      '\n' + dayLines.map((line: any) => JSON.stringify(line)).join('\n'),
      'utf8',
    );
  }

  async consumptions(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      date,
      path = context.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/digipairs/logs',
    } = params;
    const text = await promises.readFile(`${path}/consumption-daily/${date}.jsonl`, 'utf8');
    const lines = text.split('\n').filter(line => line !== '');
    const result = lines.map((line: string) => JSON.parse(line));

    return result;
  }

  async dailyConsumptions(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/digipairs/logs',
    } = params;

    const files = (await promises.readdir(`${path}/consumption-daily`)).map(
      file => file.split('.')[0],
    );

    return files;
  }

  async monthlyConsumptions(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/digipairs/logs',
    } = params;

    const files = (await promises.readdir(`${path}/consumption-monthly`)).map(
      file => file.split('.')[0],
    );

    return files;
  }

  async addLog(context: any, type: string, message: string) {
    const DIGIPAIR_LOGS_PATH =
      context.DIGIPAIR_LOGS_PATH ??
      process.env['DIGIPAIR_LOGS_PATH'] ??
      './factory/digipairs/logs';
    const current = new Date();
    const line = {
      date: current.getTime(),
      digipair: context.request.digipair,
      reasoning: context.request.reasoning,
      type,
      message,
    };

    await promises.appendFile(
      `${DIGIPAIR_LOGS_PATH}/${current.toISOString().split('T')[0]}.jsonl`,
      '\n' + JSON.stringify(line),
      'utf8',
    );
  }

  async logs(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      date,
      path = context.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/digipairs/logs',
    } = params;
    const text = await promises.readFile(`${path}/factory/${date}.jsonl`, 'utf8');
    const lines = text.split('\n').filter(line => line !== '');
    const result = lines.map((line: string) => JSON.parse(line));

    return result;
  }

  async dailyLogs(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/digipairs/logs',
    } = params;

    const files = (await promises.readdir(`${path}/factory`))
      .filter(file => /\.jsonl$/g.test(file))
      .map(file => file.split('.')[0]);

    return files;
  }

  async clearOldLogs(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      type,
      to,
      path = context.DIGIPAIR_LOGS_PATH ??
        process.env['DIGIPAIR_LOGS_PATH'] ??
        './factory/digipairs/logs',
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

export const addConsumption = (
  context: any,
  service: string,
  model: string,
  promptTokens: number,
  completionTokens: number,
) => new LoggerService().addConsumption(context, service, model, promptTokens, completionTokens);

export const computeDailyConsumption = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any,
) => new LoggerService().computeDailyConsumption(params, pinsSettingsList, context);

export const consumptions = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().consumptions(params, pinsSettingsList, context);

export const dailyConsumptions = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().dailyConsumptions(params, pinsSettingsList, context);

export const monthlyConsumptions = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().monthlyConsumptions(params, pinsSettingsList, context);

export const addLog = (context: any, type: string, message: string) =>
  new LoggerService().addLog(context, type, message);

export const logs = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().logs(params, pinsSettingsList, context);

export const dailyLogs = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().dailyLogs(params, pinsSettingsList, context);

export const clearOldLogs = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LoggerService().clearOldLogs(params, pinsSettingsList, context);
