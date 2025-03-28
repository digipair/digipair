export interface Message {
  role: 'assistant' | 'user';
  content: string;
  uuid?: string;
  boost?: any;
  boosts?: any[];
  sources?: any[];
  parent_conversation?: string;
  parent_history?: string;
}
