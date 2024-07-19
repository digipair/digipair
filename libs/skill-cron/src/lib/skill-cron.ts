/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { promises } from 'fs';
import { CronJob } from 'cron';
import { v4 } from 'uuid';

class CronService {
  private jobs: { [key: string]: CronJob } = {};
  private startTask!: Function;

  async initialize(startTask: Function) {
    this.startTask = startTask;
  }

  async start(path: string) {
    const content = await promises.readFile(`${path}/planning.json`, 'utf8');
    const planning = JSON.parse(`[${content}]`);

    for (const plan of planning) {
      const job = new CronJob(
        plan.time,
        async () => {
          await this.startTask(path, plan.digipair, plan.reasoning);
        },
        null,
        !!plan.enabled,
        'Europe/Paris',
      );

      if (this.jobs[plan.id]) {
        this.jobs[plan.id].stop();
      }

      this.jobs[plan.id] = job;
    }
  }

  private addJob(path: string, id: string, digipair: string, reasoning: string, time: string) {
    const job = new CronJob(
      time,
      async () => {
        await this.startTask(path, digipair, reasoning);
      },
      null,
      true,
      'Europe/Paris',
    );

    if (this.jobs[id]) {
      this.jobs[id].stop();
    }

    this.jobs[id] = job;
  }

  private deleteJob(id: string) {
    if (!this.jobs[id]) {
      return;
    }

    this.jobs[id].stop();
    delete this.jobs[id];
  }

  private enableJob(id: string) {
    if (!this.jobs[id]) {
      return;
    }

    this.jobs[id].start();
  }

  private disableJob(id: string) {
    if (!this.jobs[id]) {
      return;
    }

    this.jobs[id].stop();
  }

  async crons(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ?? (process.env['DIGIPAIR_AGENTS_PATH']
        ? `${process.env['DIGIPAIR_AGENTS_PATH']}/digipairs`
        : './factory/digipairs'),
    } = params;

    const text = await promises.readFile(`${path}/planning.json`, 'utf8');
    const crons = JSON.parse(`[${text}]`);

    return crons;
  }

  async addCron(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ?? (process.env['DIGIPAIR_AGENTS_PATH']
        ? `${process.env['DIGIPAIR_AGENTS_PATH']}/digipairs`
        : './factory/digipairs'),
      time,
      digipair,
      reasoning,
    } = params;

    const cron = {
      id: v4(),
      time,
      digipair,
      reasoning,
      enabled: true,
    };
    await promises.appendFile(`${path}/planning.json`, '\n' + JSON.stringify(cron), 'utf8');
    this.addJob(path, cron.id, digipair, reasoning, time);

    return cron;
  }

  async deleteCron(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ?? (process.env['DIGIPAIR_AGENTS_PATH']
        ? `${process.env['DIGIPAIR_AGENTS_PATH']}/digipairs`
        : './factory/digipairs'),
      id,
    } = params;

    const text = await promises.readFile(`${path}/planning.json`, 'utf8');
    const crons = JSON.parse(`[${text}]`).filter((cron: any) => cron.id !== id);
    const ndjson = crons.map(JSON.stringify).join('\n');

    this.deleteJob(id);
    await promises.writeFile(`${path}/planning.json`, ndjson, 'utf8');

    return { id };
  }

  async enableCron(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ?? (process.env['DIGIPAIR_AGENTS_PATH']
        ? `${process.env['DIGIPAIR_AGENTS_PATH']}/digipairs`
        : './factory/digipairs'),
      id,
    } = params;

    const text = await promises.readFile(`${path}/planning.json`, 'utf8');
    const crons = JSON.parse(`[${text}]`);
    const cron = crons.find((cron: any) => cron.id === id);

    cron.enabled = true;

    const ndjson = crons.map(JSON.stringify).join('\n');
    await promises.writeFile(`${path}/planning.json`, ndjson, 'utf8');

    this.enableJob(id);

    return cron;
  }

  async disableCron(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      path = context.privates?.EDITOR_PATH ?? (process.env['DIGIPAIR_AGENTS_PATH']
        ? `${process.env['DIGIPAIR_AGENTS_PATH']}/digipairs`
        : './factory/digipairs'),
      id,
    } = params;

    const text = await promises.readFile(`${path}/planning.json`, 'utf8');
    const crons = JSON.parse(`[${text}]`);
    const cron = crons.find((cron: any) => cron.id === id);

    cron.enabled = false;
    this.disableJob(id);

    const ndjson = crons.map(JSON.stringify).join('\n');
    await promises.writeFile(`${path}/planning.json`, ndjson, 'utf8');

    return cron;
  }
}

let instance: CronService;

export const initialize = (launcher: Function) =>
  (instance = new CronService()).initialize(launcher);

export const start = (path: string) => instance.start(path);

export const crons = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.crons(params, pinsSettingsList, context);

export const addCron = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.addCron(params, pinsSettingsList, context);

export const deleteCron = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.deleteCron(params, pinsSettingsList, context);

export const enableCron = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.enableCron(params, pinsSettingsList, context);

export const disableCron = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.disableCron(params, pinsSettingsList, context);
