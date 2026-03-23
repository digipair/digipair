/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { Connection, WorkflowClient, WorkflowExecutionInfo } from '@temporalio/client';
import { NativeConnection, Worker, WorkerOptions } from '@temporalio/worker';

import { dataSignal, workflow as workflowJob } from './workflows.js';
import { namespace, taskQueue } from './shared.js';
import * as activities from './activities.js';

class TemporalService {
  private client!: WorkflowClient;


  async initialize(address = 'localhost:7233', workerOptions?: Partial<WorkerOptions>) {
    const DEFAULT_WORKER_OPTIONS: Partial<WorkerOptions> = {
      maxConcurrentWorkflowTaskExecutions: 5,
      maxConcurrentActivityTaskExecutions: 3
    };
    const finalWorkerOptions: Partial<WorkerOptions> = {
      ...DEFAULT_WORKER_OPTIONS,
      ...workerOptions,
    };
    await this.startClient(address);
    await this.startWorker(address, finalWorkerOptions);
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

  private async startWorker(address: string, workerOptions: Partial<WorkerOptions>) {
    const connection = await NativeConnection.connect({
      address,
    });

    const worker = await Worker.create({
      connection,
      namespace,
      workflowsPath: require.resolve('./workflows'),
      activities,
      taskQueue,
      ...workerOptions
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
    const { id, steps, data = {}, options = context.privates.TEMPORAL_OPTIONS ?? {}, cancelSteps = [], failureSteps = [] } = params;
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
        maximumAttempts: 10,
        nonRetryableErrorTypes: [],
        ...(options.retry || {}),
      },
      startToCloseTimeout: '1 minute',
      heartbeatTimeout: '10s',
      ...options,
    };

    this.client.start(workflowJob, {
      args: [
        {
          steps,
          context: this.removeProtectedRecursively(context),
          data,
          options: workflowOptions,
          cancelSteps,
          failureSteps
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

  async cancel(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { id } = params;
    const prefix =
      context.privates.TEMPORAL_PREFIX ??
      process.env['TEMPORAL_PREFIX'] ??
      `digipair-workflow-${context.request.digipair}-${context.request.reasoning}-`;
    const handle = this.client.getHandle(`${prefix}${id}`);
    await handle.cancel();
  }

  async list(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { query = `ExecutionStatus = "Running"` } = params;
    const prefix =
      context.privates.TEMPORAL_PREFIX ??
      process.env['TEMPORAL_PREFIX'] ??
      `digipair-workflow-${context.request.digipair}-${context.request.reasoning}-`;

    const workflowIterator = this.client.list({
      query: `WorkflowId STARTS_WITH '${prefix}' AND (${query})`
    });
    const workflows = [] as WorkflowExecutionInfo[];
    for await (const workflow of workflowIterator) {
      workflows.push(workflow);
    }

    return workflows;
  }

  async describe(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { id } = params;
    const prefix =
      context.privates.TEMPORAL_PREFIX ??
      process.env['TEMPORAL_PREFIX'] ??
      `digipair-workflow-${context.request.digipair}-${context.request.reasoning}-`;
    const handle = this.client.getHandle(`${prefix}${id}`);

    return await handle.describe();
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

export const cancel = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.cancel(params, pinsSettingsList, context);

export const list = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.list(params, pinsSettingsList, context);

export const describe = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  instance.describe(params, pinsSettingsList, context);
