/* eslint-disable @typescript-eslint/no-unused-vars */
import { OpenAI, OpenAIEmbeddings } from '@langchain/openai';
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

  async embeddings(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      modelName = 'text-embedding-3-large',
      baseURL = context.privates.OPENAI_SERVER ?? process.env['OPENAI_SERVER'],
      apiKey = context.privates.OPENAI_API_KEY ?? process.env['OPENAI_API_KEY'],
    } = params;
    const modelInstance = new OpenAIEmbeddings({
      modelName,
      configuration: { baseURL, apiKey },
    });

    return modelInstance;
  }
}

export const model = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpenAIService().model(params, pinsSettingsList, context);

export const embeddings = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OpenAIService().embeddings(params, pinsSettingsList, context);
