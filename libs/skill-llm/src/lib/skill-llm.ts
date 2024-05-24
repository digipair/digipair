/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePins, executePinsList } from '@digipair/engine';
import { RunnableSequence } from '@langchain/core/runnables';

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

  async invoke(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { execute, input = {} }: { execute: PinsSettings[]; input: any } = params;
    const chain = RunnableSequence.from([
      this.objectToInput(input),
      ...(await Promise.all(execute.map(pinsSettings => executePins(pinsSettings, context)))),
    ] as any);

    const result = await chain.invoke({});
    return result;
  }

  async reasoningStep(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { attributes } = params;
    const data: { [key: string]: any } = {};

    for (const attribute of attributes) {
      data[attribute.name] = async (previous: any) =>
        await executePinsList(attribute.value, {
          ...context,
          previous,
          parent: { previous: context.previous, steps: context.steps, parent: context.parent },
        });
    }

    return data;
  }
}

export const invoke = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LLMService().invoke(params, pinsSettingsList, context);

export const reasoningStep = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new LLMService().reasoningStep(params, pinsSettingsList, context);

