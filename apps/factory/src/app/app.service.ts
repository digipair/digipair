import { executePinsList } from '@digipair/engine';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { promises } from 'fs';

@Injectable()
export class AppService implements OnModuleInit {
  async onModuleInit() {
    const path = process.env.DIGIPAIR_AGENTS_PATH ? `${process.env.DIGIPAIR_AGENTS_PATH}/digipairs` : './factory/digipairs';

    // initialize factory skill
    const skillFactory = require('@digipair/skill-cron');
    skillFactory.initialize((_context: any, digipair: string, reasoning: string, body: any) =>
      this.agent(path, digipair, reasoning, body, [], null, {}),
    );

    // start cron manager
    try {
      const skillCron = require('@digipair/skill-cron');

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
