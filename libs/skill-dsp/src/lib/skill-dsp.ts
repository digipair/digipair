import { PinsSettings, executePinsList } from '@digipair/engine';

const OLLAMA_SERVER = process.env['OLLAMA_SERVER'] ?? 'http://localhost:11434';

class DspService {
  async model(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { AI } = await eval(`import('llmclient')`);
    const {
      apiKey = 'none',
      modelName = 'mistral',
      temperature = 0,
      keepAlive = 0,
      baseUrl = OLLAMA_SERVER,
      debug = false,
    } = params;

    const model = AI('openai', {
      apiKey,
      apiURL: baseUrl + '/v1',
      config: { model: modelName, temperature, keepAlive },
      options: { debug },
    } as any);

    return model;
  }

  async generate(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { Generate } = await eval(`import('llmclient')`);
    const { model = context.privates.MODEL_DSP, signature, input } = params;

    const modelInstance = await executePinsList(model, context);
    const gen = new Generate(modelInstance, signature);
    const result = await gen.forward(input);

    return result;
  }
}

export const model = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().model(params, pinsSettingsList, context);

export const generate = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new DspService().generate(params, pinsSettingsList, context);
