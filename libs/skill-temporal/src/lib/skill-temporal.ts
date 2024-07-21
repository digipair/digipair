/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { Connection, WorkflowClient } from '@temporalio/client';
import { NativeConnection, Worker } from '@temporalio/worker';

import { dataSignal, workflow as workflowJob } from './workflows';
import { namespace, taskQueue } from './shared';
import * as activities from './activities';

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
        maximumAttempts: 500,
        nonRetryableErrorTypes: [],
        ...(options.retry || {}),
      },
      startToCloseTimeout: '1 minute',
      ...options,
    };

    this.client.start(workflowJob, {
      args: [{ steps, context, data, options: workflowOptions }],
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
