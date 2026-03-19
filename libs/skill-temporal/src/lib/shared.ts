import { PinsSettings } from '@digipair/engine';
import { WorkflowClient } from '@temporalio/client';

export type WorkflowArgs = {
  steps: PinsSettings[];
  context: any;
  data: any;
  options: any;
  cancelProcessSteps: PinsSettings[];
};

export const taskQueue = 'DIGIPAIR_WORKFLOW_TASK_QUEUE';
export const namespace = 'default';

// Shared client pour les activités
let _sharedClient: WorkflowClient | null = null;

export function setSharedClient(client: WorkflowClient) {
  _sharedClient = client;
}

export function getSharedClient(): WorkflowClient | null {
  return _sharedClient;
}