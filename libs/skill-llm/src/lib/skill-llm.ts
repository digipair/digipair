/* eslint-disable @typescript-eslint/no-unused-vars */
import { RunnableSequence } from '@langchain/core/runnables';
import * as engine from '@digipair/engine';

type PinsSettings = any;
const { executePins, executePinsList } = engine as any;

class LLMService {
  private objectToInput(obj: Record<string, any>): Record<string, () => any> {
    const result: Record<string, () => any> = {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = () => obj[key];
      }
    }

    return result;
  }

  async invoke(
    params: any,
    pinsSettingsList: PinsSettings[],
    context: any
  ) {
    const { input = {} } = params;
    const chain = RunnableSequence.from([
      this.objectToInput(input),
      ...await Promise.all(pinsSettingsList.map((pinsSettings) => executePins(pinsSettings, context)))
    ] as any);

    const result = await chain.invoke({});
    return result
  }

  async reasoningStep(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any
  ) {
    const { attributes } = params;
    const data: { [key: string]: any } = {};

    for (const attribute of attributes) {
      data[attribute.name] = (previous: any) => executePinsList(attribute.value, {...context, previous, parent: { previous: context.previous, parent: context.parent }});
    }

    return data;
  }

  async reasoningStepValue(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any
  ) {
    const { value } = params;
    return value;
  }
}

export const invoke = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new LLMService().invoke(params, pinsSettingsList, context);

export const reasoningStep = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new LLMService().reasoningStep(params, pinsSettingsList, context);

export const reasoningStepValue = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new LLMService().reasoningStepValue(params, pinsSettingsList, context);
