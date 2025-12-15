export interface PinsSettings {
  _properties: { [key: string]: any } | undefined;
  library: string;
  element: string;
  properties?: { [key: string]: any } | undefined;
  conditions?: {
    if?: boolean;
    each?: any[];
  };
  pins?: PinsSettings[];
  events?: { [key: string]: PinsSettings[] };
}
