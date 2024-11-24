import { executePinsList, config } from '@digipair/engine';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { existsSync, promises } from 'fs';

config.set('ALIAS', [
  {
    name: 'digipair',
    library: '@digipair/skill-factory',
    element: 'start',
    properties: {
      digipair: '{{settings.library}}',
      reasoning: '{{settings.element}}',
      body: 'EVALUATE:settings.properties',
    },
  },
]);

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
    skillFactory.initialize((context: any, digipair: string, reasoning: string, body: any) =>
      this.agent(
        path,
        digipair,
        reasoning,
        body,
        [],
        {},
        null,
        {},
        context,
        null,
        null,
        context.protected.signal,
      ),
    );

    // start cron manager
    try {
      const skillCron = require('@digipair/skill-cron');

      skillCron.initialize(async (path: string, digipair: string, reasoning: string) => {
        const skillProcess = require('@digipair/skill-process');
        const { id, signal } = skillProcess.add(digipair, reasoning, null);

        try {
          await this.agent(path, digipair, reasoning, {}, [], {}, null, {}, {}, null, null, signal);
          skillProcess.remove(id);
        } catch (error) {
          skillProcess.remove(id);
        }
      });
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
    query: any,
    method: string,
    headers: any,
    requester: any,
    req: any,
    res: any,
    signal: AbortSignal,
  ): Promise<any> {
    let context: any;

    try {
      let content: string;

      if (existsSync(`${path}/${digipair}/${reasoning}.json`)) {
        content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
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
            query,
            headers,
          },
          protected: {
            req,
            res,
            signal,
          },
        };

        content = await promises.readFile(`${path}/${digipair}/${reasoning}.json`, 'utf8');
      } else if (existsSync(`${path}/common/${reasoning}.json`) === true) {
        content = await promises.readFile(`${path}/common/config.json`, 'utf8');
        const configCommon = JSON.parse(content);

        content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
        const config = JSON.parse(content);

        context = {
          config: {
            VERSIONS: { ...configCommon.libraries, ...config.libraries },
          },
          privates: { ...configCommon.privates, ...config.privates },
          variables: { ...configCommon.variables, ...config.variables },
          request: {
            digipair,
            reasoning,
            method,
            body,
            params,
            query,
            headers,
          },
          protected: {
            req,
            res,
            signal,
          },
          requester,
        };

        content = await promises.readFile(`${path}/common/${reasoning}.json`, 'utf8');
      } else if (existsSync(`${path}/${digipair}/fallback.json`)) {
        content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
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
            query,
            headers,
          },
          protected: {
            req,
            res,
            signal,
          },
        };

        content = await promises.readFile(`${path}/${digipair}/fallback.json`, 'utf8');
      } else if (existsSync(`${path}/common/fallback.json`) === true) {
        content = await promises.readFile(`${path}/common/config.json`, 'utf8');
        const configCommon = JSON.parse(content);

        content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
        const config = JSON.parse(content);

        context = {
          config: {
            VERSIONS: { ...configCommon.libraries, ...config.libraries },
          },
          privates: { ...configCommon.privates, ...config.privates },
          variables: { ...configCommon.variables, ...config.variables },
          request: {
            digipair,
            reasoning,
            method,
            body,
            params,
            query,
            headers,
          },
          protected: {
            req,
            res,
            signal,
          },
          requester,
        };

        content = await promises.readFile(`${path}/common/fallback.json`, 'utf8');
      } else {
        throw new Error(`Reasoning ${digipair}/${reasoning} Not Found`);
      }

      const settings = JSON.parse(content);
      const result = await executePinsList([settings], context);

      return result;
    } catch (error) {
      if (error === 'DIGIPAIR_KEEPALIVE') {
        throw error;
      }

      console.error(error);

      if (!context) {
        return;
      }

      const skillLogger = require('@digipair/skill-logger');
      skillLogger.addLog(context, 'ERROR', error.message);
    }
  }
}
