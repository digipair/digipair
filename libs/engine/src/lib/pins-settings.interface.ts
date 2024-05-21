export interface PinsSettings {
  element: string;
  name: string;
  description: string;
  library: string;
  properties?: { [key: string]: any };
  variables?: { [key: string]: any };
  conditions?: {
    if?: boolean;
    each?: any[];
  };
  pins?: PinsSettings[];
  events?: { [key: string]: PinsSettings[] };
  context?: any;
}
