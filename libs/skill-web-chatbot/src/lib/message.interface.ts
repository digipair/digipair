export interface Message {
  role: 'assistant' | 'user';
  content: string;
  uuid?: string;
  boost?: any;
  boosts?: any[];
  sources?: any[];
  files?: any[];
  parent_history?: string;
}
