/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { Connection, WorkflowClient, WorkflowExecutionInfo } from '@temporalio/client';
import { NativeConnection, Worker } from '@temporalio/worker';

import { dataSignal, workflow as workflowJob } from './workflows.js';
import { namespace, taskQueue } from './shared.js';
import * as activities from './activities.js';

class TemporalService {
  private client!: WorkflowClient;

  async initialize(address = 'localhost:7233') {
    await this.startClient(address);
    await this.startWorker(address);
  }

  private async startClient(address: string) {
    const connection = await Connection.connect({
      address,
    });

    this.client = new WorkflowClient({
      connection,
      namespace,
    });
  }

  private async startWorker(address: string) {
    const connection = await NativeConnection.connect({
      address,
    });

    const worker = await Worker.create({
      connection,
      namespace,
      workflowsPath: require.resolve('./workflows'),
      activities,
      taskQueue,
    });

    // Start accepting tasks from the Task Queue.
    worker.run();
  }

  private removeProtectedRecursively(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.removeProtectedRecursively(item));
    }

    const result = { ...obj };
    if ('protected' in result) {
      result.protected = undefined;
    }

    for (const key in result) {
      if (result.hasOwnProperty(key) && typeof result[key] === 'object' && result[key] !== null) {
        result[key] = this.removeProtectedRecursively(result[key]);
      }
    }

    return result;
  }

  async workflow(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { id, steps, data = {}, options = context.privates.TEMPORAL_OPTIONS ?? {} } = params;
    const prefix =
      context.privates.TEMPORAL_PREFIX ??
      process.env['TEMPORAL_PREFIX'] ??
      `digipair-workflow-${context.request.digipair}-${context.request.reasoning}-`;
    const workflowOptions = {
      // RetryPolicy specifies how to automatically handle retries if an Activity fails.
      retry: {
        initialInterval: '1 second',
        maximumInterval: '1 minute',
        backoffCoefficient: 2,
        maximumAttempts: 50,
        nonRetryableErrorTypes: [],
        ...(options.retry || {}),
      },
      startToCloseTimeout: '1 minute',
      ...options,
    };

    this.client.start(workflowJob, {
      args: [
        {
          steps,
          context: this.removeProtectedRecursively(context),
          data,
          options: workflowOptions,
        },
      ],
      taskQueue,
      workflowId: `${prefix}${id}`,
    });
  }

  async push(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { id, data } = params;
    const prefix =
      context.privates.TEMPORAL_PREFIX ??
      process.env['TEMPORAL_PREFIX'] ??
      `digipair-workflow-${context.request.digipair}-${context.request.reasoning}-`;
    const handle = this.client.getHandle(`${prefix}${id}`);
    await handle.signal(dataSignal, data);
  }

  async terminate(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { id } = params;
    const prefix =
      context.privates.TEMPORAL_PREFIX ??
      process.env['TEMPORAL_PREFIX'] ??
      `digipair-workflow-${context.request.digipair}-${context.request.reasoning}-`;
    const handle = this.client.getHandle(`${prefix}${id}`);
    await handle.terminate();
  }

  async list(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { query = `ExecutionStatus = "Running"` } = params;
    const prefix =
      context.privates.TEMPORAL_PREFIX ??
      process.env['TEMPORAL_PREFIX'] ??
      `digipair-workflow-${context.request.digipair}-${context.request.reasoning}-`;

    const workflowIterator = this.client.list({
      query: `(WorkflowId > '${prefix}' and WorkflowId < '${prefix}~') and (${query})`,
    });
    const workflows = [] as WorkflowExecutionInfo[];
    for await (const workflow of workflowIterator) {
      workflows.push(workflow);
    }

    return workflows;
  }
}

let instance: TemporalService;

export const initialize = (adresse: string) =>
  (instance = new TemporalService()).initialize(adresse);

export const workflow = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.workflow(params, pinsSettingsList, context);

export const push = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.push(params, pinsSettingsList, context);

export const terminate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.terminate(params, pinsSettingsList, context);

export const list = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.list(params, pinsSettingsList, context);
