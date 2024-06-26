/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

class DspService {
  async model(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { AxAI } = await eval(`import('@ax-llm/ax')`);
    const { name, options } = params;

    const modelInstance = new AxAI({ name, ...options });

    return modelInstance;
  }

  async modelOpenAI(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { AxAIOpenAI } = await eval(`import('@ax-llm/ax')`);
    const {
      apiKey = context.privates.OPENAI_API_KEY ?? process.env['OPENAI_API_KEY'],
      apiURL = context.privates.OPENAI_SERVER ?? process.env['OPENAI_SERVER'],
      config,
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
    const { AxAIAzureOpenAI } = await eval(`import('@ax-llm/ax')`);
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
    const { AxAIOllama } = await eval(`import('@ax-llm/ax')`);
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
    const { AxGenerate } = await eval(`import('@ax-llm/ax')`);
    const { model = context.privates.MODEL_DSP, signature, input } = params;

    const modelInstance = await executePinsList(model, context);
    const gen = new AxGenerate(modelInstance, signature);
    const result = await gen.forward(input);

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
