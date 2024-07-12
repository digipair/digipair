import { PinsSettings } from '@digipair/engine';

export type WorkflowArgs = {
  steps: PinsSettings[];
  context: any;
  options: any;
};

export const taskQueue = 'DIGIPAIR_WORKFLOW_TASK_QUEUE';
export const namespace = 'default';
