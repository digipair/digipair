import { config, executePinsList } from '@digipair/engine';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { promises } from 'fs';

config.set('LIBRARIES', {
  '@digipair/engine': require('@digipair/engine'),
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
  '@digipair/skill-keycloak': require('@digipair/skill-keycloak'),
  '@digipair/skill-git': require('@digipair/skill-git'),
  '@digipair/skill-debug': require('@digipair/skill-debug'),
  '@digipair/skill-cron': require('@digipair/skill-cron'),
  '@digipair/skill-http': require('@digipair/skill-http'),
  '@digipair/skill-linkedin': require('@digipair/skill-linkedin'),
  '@digipair/skill-microsoft': require('@digipair/skill-microsoft'),
  '@digipair/skill-mongodb': require('@digipair/skill-mongodb'),
  '@digipair/skill-nuki': require('@digipair/skill-nuki'),
  '@digipair/skill-pushbullet': require('@digipair/skill-pushbullet'),
  '@digipair/skill-sendmail': require('@digipair/skill-sendmail'),
  '@digipair/skill-smoobu': require('@digipair/skill-smoobu'),
  '@digipair/skill-temporal': require('@digipair/skill-temporal'),
  '@digipair/skill-twilio': require('@digipair/skill-twilio'),
});

@Injectable()
export class AppService implements OnModuleInit {
  async onModuleInit() {
    // start cron manager
    try {
      const skillCron = require('@digipair/skill-cron');
      const path = process.env.DIGIPAIRAI_ASSETS_PATH || './dist/apps/factory/assets';

      skillCron.initialize((path: string, digipair: string, reasoning: string) =>
        this.agent(path, digipair, reasoning, {}, [], null, {}),
      );
      skillCron.start(`${path}`);
    } catch (error) {
      console.error(error);
    }

    // start workflow manager
    try {
      const skillTemporal = require('@digipair/skill-temporal');

      if (process.env.TEMPORAL_CLUSTER_HOST) {
        skillTemporal.initialize();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async agent(
    path: string,
    digipair: string,
    reasoning: string,
    body: any,
    params: string[],
    method: string,
    headers: any,
  ): Promise<any> {
    let content: string;

    content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
    const config = JSON.parse(content);

    content = await promises.readFile(`${path}/${digipair}/${reasoning}.json`, 'utf8');
    const settings = JSON.parse(content);

    const context = {
      config: {
        VERSIONS: config.libraries,
      },
      privates: config.privates,
      variables: config.variables,
      request: {
        digipair,
        reasoning,
        method,
        body,
        params,
        headers,
      },
    };

    const result = executePinsList([settings], context);

    return result;
  }
}
