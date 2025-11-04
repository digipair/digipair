import { executePinsList, config } from '@digipair/engine';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { existsSync, promises } from 'fs';
import { join } from 'path';



config.set('ALIAS', [
  {
    name: 'digipair',
    library: '@digipair/skill-factory',
    element: 'start',
    properties: {
      digipair: '{{settings.library}}',
      reasoning: '{{settings.element}}',
      version: '{{settings.version}}',
      body: 'FEEL:settings.properties',
    },
  },
]);

config.set('LOGGER', (level: string, path: string, message: string, context: any, data?: any) => {
  const time = new Date().toISOString();

  switch (level) {
    case 'INFO':
      console.log(
        `[${time}][${context.request.digipair}@${context.request.reasoning}][${path}] ${message}`,
      );
      break;
    case 'ERROR':
      console.error(
        `[${time}][${context.request.digipair}@${context.request.reasoning}][${path}] ${message}`,
        data,
      );
      break;
    case 'DEBUG':
      console.debug(
        `[${time}][${context.request.digipair}@${context.request.reasoning}][${path}] ${message}`,
        data,
      );
      break;
    default:
      console.log(
        `[${time}][${context.request.digipair}@${context.request.reasoning}][${path}] ${message}`,
      );
      break;
  }
});

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
        context.protected.req,
        context.protected.res,
        context.protected.signal,
      ),
    );

    // start cron manager
    try {
      const skillCron = require('@digipair/skill-cron');

      skillCron.initialize(
        async (
          path: string,
          digipair: string,
          reasoning: string,
          cronTime: string,
          cronId: string,
        ) => {
          const skillProcess = require('@digipair/skill-process');
          const { id, signal } = skillProcess.add(digipair, reasoning, null);

          try {
            await this.agent(
              path,
              digipair,
              reasoning,
              {},
              [],
              {},
              null,
              {},
              { cronTime, cronId },
              null,
              null,
              signal,
            );
            skillProcess.remove(id);
          } catch (error) {
            if (error.type !== 'DIGIPAIR_KEEPALIVE') {
              console.error(error);
              skillProcess.remove(id);
            }
          }
        },
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
    query: any,
    method: string | null,
    headers: any,
    requester: any,
    req: any,
    res: any,
    signal: AbortSignal,
    isHttpRequest = false,
  ): Promise<any> {
    const assets = process.env.DIGIPAIR_FACTORY_PATH || './factory';
    let context: any;

    try {
      let content: string;

      content = await promises.readFile(`${assets}/default.json`, 'utf8');
      const defaultConfig = JSON.parse(content);

      content = await promises.readFile(`${path}/common/config.json`, 'utf8');
      const commonConfig = JSON.parse(content);

      content = await promises.readFile(`${path}/${digipair}/config.json`, 'utf8');
      const config = JSON.parse(content);
      const roles = config?.roles ?? [];


      context = {
        ...requester,
        config: {
          VERSIONS: { ...defaultConfig.libraries, ...commonConfig.libraries, ...config.libraries },
          WEB_VERSIONS: {
            ...defaultConfig.webLibraries,
            ...commonConfig.webLibraries,
            ...config.webLibraries,
          },
        },
        privates: {
          ...requester.privates,
          ...defaultConfig.privates,
          ...commonConfig.privates,
          ...config.privates,
        },
        variables: {
          ...requester.variables,
          ...defaultConfig.variables,
          ...commonConfig.variables,
          ...config.variables,
        },
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

      if (existsSync(`${path}/${digipair}/${reasoning}.json`)) {
        content = await promises.readFile(`${path}/${digipair}/${reasoning}.json`, 'utf8');
      } else if (existsSync(`${path}/common/${reasoning}.json`) === true) {
        content = await promises.readFile(`${path}/common/${reasoning}.json`, 'utf8');
      } else if (existsSync(`${path}/${digipair}/fallback.json`)) {
        content = await promises.readFile(`${path}/${digipair}/fallback.json`, 'utf8');
      } else if (existsSync(`${path}/common/fallback.json`) === true) {
        content = await promises.readFile(`${path}/common/fallback.json`, 'utf8');
      } else {
        res.status(404);
        return { status: 'not found' };
      }

      const settings = JSON.parse(content);

      if (
        isHttpRequest === true &&
        settings.element !== 'page' &&
        settings.element !== 'service' &&
        settings.element !== 'event' &&
        settings.element !== 'boost'
      ) {
        // for external calls, only 'page' and 'service' elements are allowed
        res.status(400);
        return { status: 'bad request' };
      }

      const result = await executePinsList([settings], context, requester?.__PATH__ ?? 'reasoning');

      return result;
    } catch (error: any) {
      if (error.type === 'DIGIPAIR_KEEPALIVE') {
        throw error;
      }

      if (error.type === 'DIGIPAIR_STOP') {
        return error.value;
      }

      console.error(error);

      if (!context) {
        return;
      }

      const skillLogger = require('@digipair/skill-logger');
      skillLogger.addLog(context, 'ERROR', error.message);
    }
  }

  private async loadRoleConfig(basePath: string, roleName: string, visited = new Set()) {
    if (visited.has(roleName)) {
      console.warn(`Cycle detected in role inheritance: ${roleName}`);
      return {};
    }
    visited.add(roleName);

    const rolePath = join(basePath, roleName, 'config.json');
    if (!existsSync(rolePath)) return {};

    const content = await promises.readFile(rolePath, 'utf8');
    const config = JSON.parse(content);
    const inheritedRoles = config.roles ?? [];

    let mergedConfig = { ...config };

    // Process inherited roles first (priority: last wins)
    for (const roleObj of inheritedRoles) {
      const [roleName, version] = Object.entries(roleObj)[0];
      const subConfig = await this.loadRoleConfig(basePath, roleName, visited);

      // deep merge: inherited first, then override by current
      mergedConfig = {
        ...subConfig,
        ...mergedConfig,
        variables: { ...(subConfig.variables ?? {}), ...(mergedConfig.variables ?? {}) },
        privates: { ...(subConfig.privates ?? {}), ...(mergedConfig.privates ?? {}) },
        libraries: { ...(subConfig.libraries ?? {}), ...(mergedConfig.libraries ?? {}) },
        webLibraries: { ...(subConfig.webLibraries ?? {}), ...(mergedConfig.webLibraries ?? {}) },
      };
    }

    return mergedConfig;
  }
}
