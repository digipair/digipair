/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AzureChatOpenAI,
  AzureOpenAIEmbeddings,
  ChatOpenAI,
  OpenAIEmbeddings,
} from '@langchain/openai';
import { PinsSettings } from '@digipair/engine';

class OpenAIService {
  async model(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      modelName = 'gpt-4o-mini',
      temperature = 0,
      baseURL = context.privates.OPENAI_SERVER ?? process.env['OPENAI_SERVER'],
      apiKey = context.privates.OPENAI_API_KEY ?? process.env['OPENAI_API_KEY'],
    } = params;
    const model = new ChatOpenAI({ modelName, temperature, configuration: { baseURL, apiKey } });

    return model;
  }

  async modelAzure(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      deploymentName,
      temperature = 0,
      openAIApiInstanceName = context.privates.AZURE_OPENAI_API_INSTANCE_NAME ??
        process.env['AZURE_OPENAI_API_INSTANCE_NAME'],
      openAIApiKey = context.privates.AZURE_OPENAI_API_KEY ?? process.env['AZURE_OPENAI_API_KEY'],
      openAIApiVersion = context.privates.AZURE_OPENAI_API_VERSION ??
        process.env['AZURE_OPENAI_API_VERSION'],
    } = params;
    const model = new AzureChatOpenAI({
      deploymentName,
      temperature,
      openAIApiKey,
      openAIApiVersion,
      azureOpenAIApiInstanceName: openAIApiInstanceName,
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

  async embeddingsAzure(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      deploymentName,
      dimensions = 1024,
      openAIApiKey = context.privates.AZURE_OPENAI_API_KEY ?? process.env['AZURE_OPENAI_API_KEY'],
      openAIApiInstanceName = context.privates.AZURE_OPENAI_API_INSTANCE_NAME ??
        process.env['AZURE_OPENAI_API_INSTANCE_NAME'],
      openAIApiVersion = context.privates.AZURE_OPENAI_API_VERSION ??
        process.env['AZURE_OPENAI_API_VERSION'],
    } = params;
    const modelInstance = new AzureOpenAIEmbeddings({
      deploymentName,
      dimensions,
      apiKey: openAIApiKey,
      azureOpenAIApiInstanceName: openAIApiInstanceName,
      openAIApiVersion,
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

export const embeddingsAzure = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpenAIService().embeddingsAzure(params, pinsSettingsList, context);
