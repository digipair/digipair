/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';
import { ChatOllama } from '@langchain/community/chat_models/ollama';
import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama';

class OllamaService {
  async model(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      model = 'mistral',
      temperature = 0,
      keepAlive = '1440m',
      baseUrl = context.privates.OLLAMA_SERVER ??
        process.env['OLLAMA_SERVER'] ??
        'http://localhost:11434',
    } = params;
    const modelInstance = new ChatOllama({ model, temperature, keepAlive, baseUrl });

    return modelInstance;
  }

  async embeddings(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const {
      model = 'nomic-embed-text',
      baseUrl = context.privates.OLLAMA_SERVER ??
        process.env['OLLAMA_SERVER'] ??
        'http://localhost:11434',
    } = params;
    const modelInstance = new OllamaEmbeddings({
      model,
      baseUrl,
    });

    return modelInstance;
  }
}

export const model = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OllamaService().model(params, pinsSettingsList, context);

export const embeddings = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new OllamaService().embeddings(params, pinsSettingsList, context);
