import { Discussion, NewDiscussionRecipient } from 'pawnote';

import { Attachment } from './attachment';
import { GenericInterface } from './types';

export interface Chat extends GenericInterface {
  id: string;
  subject: string;
  recipient?: string;
  creator?: string;
  date: Date;
  ref?: Discussion;
}

export interface Recipient {
  id: string;
  name: string;
  class?: string;
  ref?: NewDiscussionRecipient;
}

export interface Message {
  id: string;
  content: string;
  author: string;
  subject: string;
  date: Date;
  attachments: Attachment[];
}
