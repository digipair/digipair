import { executePinsList } from '@digipair/engine';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { promises } from 'fs';

@Injectable()
export class AppService implements OnModuleInit {
  async onModuleInit() {
    const path = process.env.DIGIPAIR_FACTORY_PATH
      ? `${process.env.DIGIPAIR_FACTORY_PATH}/digipairs`
      : './factory/digipairs';

    // initialize logs management
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.initialize();

    // initialize factory skill
    const skillFactory = require('@digipair/skill-factory');
    skillFactory.initialize((_context: any, digipair: string, reasoning: string, body: any) =>
      this.agent(path, digipair, reasoning, body, [], null, {}),
    );

    // start cron manager
    try {
      const skillCron = require('@digipair/skill-cron');

      skillCron.initialize((path: string, digipair: string, reasoning: string) =>
        this.agent(path, digipair, reasoning, {}, [], null, {}),
      );
      skillCron.start(path);
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
    let context: any;

    try {
      let content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
      const config = JSON.parse(content);

      context = {
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

      content = await promises.readFile(`${path}/${digipair}/${reasoning}.json`, 'utf8');
      const settings = JSON.parse(content);

      const result = await executePinsList([settings], context);

      return result;
    } catch (error) {
      if (!context) {
        console.error(error);
        return;
      }

      const skillLogger = require('@digipair/skill-logger');
      skillLogger.addLog(context, 'ERROR', error.message);
    }
  }
}
