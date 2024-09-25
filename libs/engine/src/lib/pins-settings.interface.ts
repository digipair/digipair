export interface PinsSettings {
  library: string;
  element: string;
  properties?: { [key: string]: any };
  conditions?: {
    if?: boolean;
    each?: any[];
  };
  pins?: PinsSettings[];
  events?: { [key: string]: PinsSettings[] };
}
