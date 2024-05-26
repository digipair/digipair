import { config, executePins } from '@digipair/engine';
import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { join } from 'path';

config.set('LIBRARIES', {
  '@digipair/skill-chatbot': require('@digipair/skill-chatbot'),
  '@digipair/skill-common': require('@digipair/skill-common'),
  '@digipair/skill-llm': require('@digipair/skill-llm'),
  '@digipair/skill-ollama': require('@digipair/skill-ollama'),
  '@digipair/skill-openai': require('@digipair/skill-openai'),
  '@digipair/skill-vespa': require('@digipair/skill-vespa'),
  '@digipair/skill-web': require('@digipair/skill-web'),
  '@digipair/skill-editor': require('@digipair/skill-editor'),
  '@digipair/skill-service': require('@digipair/skill-service'),
  '@digipair/skill-dsp': require('@digipair/skill-dsp'),
  '@digipair/skill-data-management': require('@digipair/skill-data-management'),
});

@Injectable()
export class AppService {
  async agent(
    digipair: string,
    reasoning: string,
    body: any,
    params: string[],
    method: string,
  ): Promise<any> {
    let content: string;

    content = await promises.readFile(
      join(__dirname, `/assets/digipairs/${digipair}/config.json`),
      'utf8',
    );
    const config = JSON.parse(content);

    content = await promises.readFile(
      join(__dirname, `/assets/digipairs/${digipair}/${reasoning}.json`),
      'utf8',
    );
    const settings = JSON.parse(content);

    const context = {
      private: config.private,
      variables: config.variables,
      request: {
        digipair,
        reasoning,
        method,
        body,
        params,
      },
    };

    const options = {
      libraries: config.libraries,
    };

    const result = executePins(settings, context, options);

    return result;
  }
}
