import { PinsSettings } from '@digipair/engine';
import { AI, Generate } from 'llmclient';

const LLM_SERVER = process.env['LLM_SERVER'] ?? 'http://localhost:11434';

class DspService {
  async generate(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any
  ) {
    const {
      modelName = 'mistral',
      temperature = 0,
      keepAlive = '1440m',
      baseUrl = LLM_SERVER,
      debug = false,
      signature,
      input,
    } = params;

    const ai = AI('openai', {
      apiKey: 'ollama',
      apiURL: baseUrl + '/v1',
      config: { model: modelName, temperature, keepAlive },
      options: { debug },
    } as any);

    const gen = new Generate(ai, signature);

    return await gen.forward(input);
  }
}

export const generate = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new DspService().generate(params, pinsSettingsList, context);
