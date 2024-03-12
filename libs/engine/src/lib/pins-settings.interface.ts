export interface PinsSettings {
  element: string;
  name: string;
  description: string;
  library: string;
  properties?: { [key: string]: any };
  variables?: { [key: string]: any };
  requests?: { [key: string]: PinsSettings };
  pins?: PinsSettings[];
  events?: { [key: string]: PinsSettings };
  context?: any;
}
