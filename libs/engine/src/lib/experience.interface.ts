/* eslint-disable @typescript-eslint/no-explicit-any */
import { PinsSettings } from './pins-settings.interface';

export interface Experience {
  _id?: string;
  name: string;
  version: number;
  variables: { [key: string]: any };
  libraries: { [key: string]: string };
  scenes: PinsSettings[];
  environment?: PinsSettings;
}
