import { PinsSettings } from '@digipair/engine';
import { defineSearchAttributeKey, SearchAttributeType } from '@temporalio/common';

export type WorkflowArgs = {
  steps: PinsSettings[];
  context: any;
  data: any;
  options: any;
  cancelSteps: PinsSettings[];
  failureSteps: PinsSettings[];
};

export const taskQueue = 'DIGIPAIR_WORKFLOW_TASK_QUEUE';
export const namespace = 'default';

// Search attribute (type KeywordList) listant les events actuellement écoutés par un workflow.
// Doit être enregistré dans le cluster : temporal operator search-attribute create --name DigipairEvents --type KeywordList
export const eventSearchAttribute = 'DigipairEvents';
export const eventSearchAttributeKey = defineSearchAttributeKey(
  eventSearchAttribute,
  SearchAttributeType.KEYWORD_LIST,
);
