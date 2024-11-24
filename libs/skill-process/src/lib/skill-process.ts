import { PinsSettings } from '@digipair/engine';
import { Response } from 'express';
import { v4 } from 'uuid';

class ProcessService {
  private processList: {
    id: string;
    time: number;
    digipair: string;
    reasoning: string;
    abortController: AbortController;
    res: Response;
  }[] = [];

  add(digipair: string, reasoning: string, res: Response) {
    const id = v4();
    const abortController = new AbortController();
    const time = Date.now();

    this.processList.push({ id, time, digipair, reasoning, abortController, res });

    return { id, signal: abortController.signal };
  }

  remove(id: string) {
    const process = this.processList.find(p => p.id === id);
    process?.abortController.abort();
    this.processList = this.processList.filter(p => p.id !== id);
  }

  async stop(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { id } = params;
    const process = this.processList.find(p => p.id === id);

    if (!process) {
      return false;
    }

    process.abortController.abort();
    process.res?.status(503).send({ status: 'stopped' });
    this.processList = this.processList.filter(p => p.id !== id);

    return true;
  }

  async list(_params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    return this.processList.map(p => ({
      id: p.id,
      digipair: p.digipair,
      reasoning: p.reasoning,
      time: p.time,
    }));
  }
}

const instance = new ProcessService();

export const add = (digipair: string, reasoning: string, res: Response) =>
  instance.add(digipair, reasoning, res);

export const remove = (id: string) => instance.remove(id);

export const stop = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.stop(params, pinsSettingsList, context);

export const list = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.list(params, pinsSettingsList, context);
