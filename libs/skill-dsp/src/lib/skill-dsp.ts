/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';
import {
  AxAI,
  AxAIAzureOpenAI,
  AxAIOllama,
  AxGen,
  AxChainOfThought,
  AxAgent,
  AxFunction,
  AxAIOpenAIBase,
  axModelInfoOpenAI,
  AxGenOut,
} from '@digipair/ax';

class DspService {
  private async prepareFunctions(functions: AxFunction[], context: any): Promise<AxFunction[]> {
    return await Promise.all(
      functions.map(async (f, i) => ({
        ...f,
        func: async (params: any) =>
          await executePinsList(
            f.func as any as PinsSettings[],
            { ...context, params },
            `${context.__PATH__}.functions[${i}]`,
          ),
      })),
    );
  }

  private mergeDeltas(base: Partial<AxGenOut>, delta: Partial<AxGenOut>) {
    for (const key of Object.keys(delta)) {
      const baseValue = base[key];
      const deltaValue = delta[key];

      if (baseValue === undefined && Array.isArray(deltaValue)) {
        base[key] = [...deltaValue];
      } else if (Array.isArray(baseValue) && Array.isArray(deltaValue)) {
        // Concatenate arrays
        base[key] = [...(baseValue ?? []), ...deltaValue];
      } else if (
        (baseValue === undefined || typeof baseValue === 'string') &&
        typeof deltaValue === 'string'
      ) {
        // Concatenate strings
        base[key] = (baseValue ?? '') + deltaValue;
      } else {
        // For all other types, overwrite with the new value
        base[key] = deltaValue;
      }
    }
    return base;
  }

  async model(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { name, options } = params;

    const modelInstance = new AxAI({ name, ...options });

    return modelInstance;
  }

  async modelOpenAI(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      apiKey = context.privates.OPENAI_API_KEY ?? process.env['OPENAI_API_KEY'],
      apiURL = context.privates.OPENAI_SERVER ?? process.env['OPENAI_SERVER'],
      config = { model: 'gpt-4o-mini' },
      supportFor = {
        functions: true,
        streaming: true,
        hasThinkingBudget: false,
        hasShowThoughts: false,
      },
      options,
    } = params;

    const modelInstance = new AxAIOpenAIBase({
      apiKey,
      apiURL,
      modelInfo: axModelInfoOpenAI,
      config,
      options,
      supportFor,
    });

    return modelInstance;
  }

  async modelAzureOpenAi(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      apiKey = context.privates.AZURE_OPENAI_API_KEY ?? process.env['AZURE_OPENAI_API_KEY'],
      resourceName = context.privates.AZURE_OPENAI_API_INSTANCE_NAME ??
        process.env['AZURE_OPENAI_API_INSTANCE_NAME'],
      deploymentName = context.privates.AZURE_OPENAI_API_DEPLOYMENT_NAME ??
        process.env['AZURE_OPENAI_API_DEPLOYMENT_NAME'],
      version = context.privates.AZURE_OPENAI_API_VERSION ??
        process.env['AZURE_OPENAI_API_VERSION'],
      config,
      options,
    } = params;

    const modelInstance = new AxAIAzureOpenAI({
      apiKey,
      resourceName,
      deploymentName,
      version,
      config,
      options,
    });

    return modelInstance;
  }

  async modelOllama(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      model,
      url = context.privates.OLLAMA_SERVER
        ? context.privates.OLLAMA_SERVER + '/v1'
        : process.env['OLLAMA_SERVER']
          ? process.env['OLLAMA_SERVER'] + '/v1'
          : 'http://localhost:11434/v1',
      apiKey,
      config,
      options,
    } = params;

    const modelInstance = new AxAIOllama({ model, url, apiKey, config, options });

    return modelInstance;
  }

  async generate(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      model = context.privates.MODEL_DSP,
      functions = [],
      options = {},
      streaming,
      signature,
      input,
    } = params;

    const modelInstance = await executePinsList(model, context, `${context.__PATH__}.model`);
    const gen = new AxGen(signature, {
      functions: await this.prepareFunctions(functions, context),
    });
    const generator = gen.streamingForward(modelInstance, input, options);
    let buffer = {} as any;
    let currentVersion = 0;

    for await (const item of generator) {
      if (streaming) {
        await executePinsList(
          streaming,
          { ...context, event: item },
          `${context.__PATH__}.streaming`,
        );
      }

      if (item.version !== currentVersion) {
        buffer = {};
      }
      currentVersion = item.version;
      buffer = this.mergeDeltas(buffer, item.delta);
    }
    const result = buffer;

    // add comsumption
    const ai: any = (modelInstance as any).ai ?? modelInstance;
    const consumption = ai.modelUsage;
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.addConsumption(
      context,
      ai.name,
      ai.defaults.model,
      consumption.promptTokens,
      consumption.completionTokens,
    );

    return result;
  }

  async chainOfThought(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      model = context.privates.MODEL_DSP,
      functions = [],
      options = {},
      streaming,
      signature,
      input,
    } = params;

    const modelInstance = await executePinsList(model, context, `${context.__PATH__}.model`);
    const gen = new AxChainOfThought(signature, {
      functions: await this.prepareFunctions(functions, context),
    });
    const generator = gen.streamingForward(modelInstance, input, options);
    let buffer = {} as any;
    let currentVersion = 0;

    for await (const item of generator) {
      if (streaming) {
        await executePinsList(
          streaming,
          { ...context, event: item },
          `${context.__PATH__}.streaming`,
        );
      }

      if (item.version !== currentVersion) {
        buffer = {};
      }
      currentVersion = item.version;
      buffer = this.mergeDeltas(buffer, item.delta);
    }
    const result = buffer;

    // add comsumption
    const ai: any = (modelInstance as any).ai ?? modelInstance;
    const consumption = ai.modelUsage;
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.addConsumption(
      context,
      ai.name,
      ai.defaults.model,
      consumption.promptTokens,
      consumption.completionTokens,
    );

    return result;
  }

  async agent(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      model = context.privates.MODEL_DSP,
      functions = [],
      agents = [],
      forward = true,
      options = {},
      streaming,
      name,
      description,
      signature,
      input,
    } = params;

    const modelInstance = await executePinsList(model, context, `${context.__PATH__}.model`);
    const agent = new AxAgent({
      name,
      description,
      signature,
      functions: await this.prepareFunctions(functions, context),
      agents: await Promise.all(
        agents.map(
          async (execute: PinsSettings, i: number) =>
            await executePinsList(
              [{ ...execute, properties: { ...execute.properties, forward: false } }],
              context,
              `${context.__PATH__}.agents[${i}]`,
            ),
        ),
      ),
    });

    if (!forward) {
      return agent;
    }

    const generator = agent.streamingForward(modelInstance, input, options);
    let buffer = {} as any;
    let currentVersion = 0;

    for await (const item of generator) {
      if (streaming) {
        await executePinsList(
          streaming,
          { ...context, event: item },
          `${context.__PATH__}.streaming`,
        );
      }

      if (item.version !== currentVersion) {
        buffer = {};
      }
      currentVersion = item.version;
      buffer = this.mergeDeltas(buffer, item.delta);
    }
    const result = buffer;

    // add comsumption
    const ai: any = (modelInstance as any).ai ?? modelInstance;
    const consumption = ai.modelUsage;
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.addConsumption(
      context,
      ai.name,
      ai.defaults.model,
      consumption.promptTokens,
      consumption.completionTokens,
    );

    return result;
  }
}

export const model = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().model(params, pinsSettingsList, context);

export const modelOpenAI = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().modelOpenAI(params, pinsSettingsList, context);

export const modelAzureOpenAi = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().modelAzureOpenAi(params, pinsSettingsList, context);

export const modelOllama = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().modelOllama(params, pinsSettingsList, context);

export const generate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().generate(params, pinsSettingsList, context);

export const chainOfThought = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().chainOfThought(params, pinsSettingsList, context);

export const agent = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().agent(params, pinsSettingsList, context);
