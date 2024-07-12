declare module '@digipair/engine' {
  export type PinsSettings = any;

  type CONFIG_KEY = 'BASE_URL' | 'LIBRARIES';
  export declare const config: {
    set: (key: CONFIG_KEY, value: any) => void;
  };
  export declare const applyTemplate: (value: any, context: any) => any;
  export declare const executePinsList: (
    pinsSettingsList: PinsSettings[],
    context: any,
  ) => Promise<any>;
  export declare const generateElementFromPins: (
    pinsSettings: PinsSettings,
    parent: Element,
    context: any,
  ) => Promise<Element | void>;
  export declare const preparePinsSettings: (
    settings: PinsSettings,
    context: any,
  ) => Promise<PinsSettings>;
  export {};
}
