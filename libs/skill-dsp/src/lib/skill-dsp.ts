/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';
import {
  AxAI,
  AxAIOpenAI,
  AxAIAzureOpenAI,
  AxAIOllama,
  AxGen,
  AxChainOfThought,
  AxAgent,
  AxFunction,
  AxGenOptions,
  AxReAct,
} from '@ax-llm/ax';

class DspService {
  private async prepareFunctions(functions: AxFunction[], context: any): Promise<AxFunction[]> {
    return await Promise.all(
      functions.map(async f => ({
        ...f,
        func: async params =>
          await executePinsList(f.func as any as PinsSettings[], { ...context, params }),
      })),
    );
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
      options,
    } = params;

    const modelInstance = new AxAIOpenAI({
      apiKey,
      apiURL,
      config,
      options,
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
    const { model = context.privates.MODEL_DSP, functions = [], signature, input } = params;

    const modelInstance = await executePinsList(model, context);
    const gen = new AxGen(signature, {
      functions: await this.prepareFunctions(functions, context),
    });
    const result = await gen.forward(modelInstance, input);

    // add comsumption
    const ai = modelInstance.ai ?? modelInstance;
    const consumption = ai.modelUsage;
    const modelInfo = ai.getModelInfo();
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.addConsumption(
      context,
      modelInfo.provider,
      modelInfo.name,
      consumption.promptTokens,
      consumption.completionTokens,
    );

    return result;
  }

  async chainOfThought(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { model = context.privates.MODEL_DSP, functions = [], signature, input } = params;

    const modelInstance = await executePinsList(model, context);
    const gen = new AxChainOfThought(signature, {
      functions: await this.prepareFunctions(functions, context),
    });
    const result = await gen.forward(modelInstance, input);

    // add comsumption
    const ai = modelInstance.ai ?? modelInstance;
    const consumption = ai.modelUsage;
    const modelInfo = ai.getModelInfo();
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.addConsumption(
      context,
      modelInfo.provider,
      modelInfo.name,
      consumption.promptTokens,
      consumption.completionTokens,
    );

    return result;
  }

  async react(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { model = context.privates.MODEL_DSP, functions = [], signature, input } = params;

    const modelInstance = await executePinsList(model, context);
    const gen = new AxReAct(signature, {
      functions: await this.prepareFunctions(functions, context),
    });
    const result = await gen.forward(modelInstance, input);

    // add comsumption
    const ai = modelInstance.ai ?? modelInstance;
    const consumption = ai.modelUsage;
    const modelInfo = ai.getModelInfo();
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.addConsumption(
      context,
      modelInfo.provider,
      modelInfo.name,
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
      name,
      description,
      signature,
      input,
    } = params;

    const modelInstance = await executePinsList(model, context);
    const agent = new AxAgent({
      name,
      description,
      signature,
      functions: await this.prepareFunctions(functions, context),
      agents: await Promise.all(
        agents.map(
          async (execute: PinsSettings) =>
            await executePinsList(
              [{ ...execute, properties: { ...execute.properties, forward: false } }],
              context,
            ),
        ),
      ),
    });

    if (!forward) {
      return agent;
    }

    const result = await agent.forward(modelInstance, input);

    // add comsumption
    const ai = modelInstance.ai ?? modelInstance;
    const consumption = ai.modelUsage;
    const modelInfo = ai.getModelInfo();
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.addConsumption(
      context,
      modelInfo.provider,
      modelInfo.name,
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

export const react = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().react(params, pinsSettingsList, context);

export const agent = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().agent(params, pinsSettingsList, context);
