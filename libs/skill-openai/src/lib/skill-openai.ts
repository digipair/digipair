/* eslint-disable @typescript-eslint/no-unused-vars */
import { AzureOpenAI, OpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { PinsSettings } from '@digipair/engine';

class OpenAIService {
  async model(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      modelName = 'gpt-4o',
      temperature = 0,
      baseURL = context.privates.OPENAI_SERVER ?? process.env['OPENAI_SERVER'],
      apiKey = context.privates.OPENAI_API_KEY ?? process.env['OPENAI_API_KEY'],
    } = params;
    const model = new OpenAI({ modelName, temperature, configuration: { baseURL, apiKey } });

    return model;
  }

  async modelAzure(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      temperature = 0,
      azureOpenAIApiKey = context.privates.AZURE_OPENAI_API_KEY ??
        process.env['AZURE_OPENAI_API_KEY'],
      azureOpenAIApiInstanceName = context.privates.AZURE_OPENAI_API_INSTANCE_NAME ??
        process.env['AZURE_OPENAI_API_INSTANCE_NAME'],
      azureOpenAIApiDeploymentName = context.privates.AZURE_OPENAI_API_DEPLOYMENT_NAME ??
        process.env['AZURE_OPENAI_API_DEPLOYMENT_NAME'],
      azureOpenAIApiVersion = context.privates.AZURE_OPENAI_API_VERSION ??
        process.env['AZURE_OPENAI_API_VERSION'],
    } = params;
    const model = new AzureOpenAI({
      azureOpenAIApiKey,
      azureOpenAIApiInstanceName,
      azureOpenAIApiDeploymentName,
      azureOpenAIApiVersion,
      temperature,
    });

    return model;
  }

  async embeddings(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      modelName = 'text-embedding-3-small',
      dimensions = 1024,
      baseURL = context.privates.OPENAI_SERVER ?? process.env['OPENAI_SERVER'],
      apiKey = context.privates.OPENAI_API_KEY ?? process.env['OPENAI_API_KEY'],
    } = params;
    const modelInstance = new OpenAIEmbeddings({
      modelName,
      dimensions,
      configuration: { baseURL, apiKey },
    });

    return modelInstance;
  }
}

export const model = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpenAIService().model(params, pinsSettingsList, context);

export const modelAzure = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpenAIService().modelAzure(params, pinsSettingsList, context);

export const embeddings = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpenAIService().embeddings(params, pinsSettingsList, context);
