import { executePinsList, config } from '@digipair/engine';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { existsSync, promises } from 'fs';
import * as path from 'path';



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
    basePath: string,
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
      // --- Load default/common/agent config ---
      const defaultConfig = JSON.parse(await promises.readFile(`${assets}/default.json`, 'utf8'));
      const commonConfig = JSON.parse(await promises.readFile(`${basePath}/common/config.json`, 'utf8'));
      const config = JSON.parse(await promises.readFile(`${basePath}/${digipair}/config.json`, 'utf8'));

      // --- Merge roles recursively ---
      const roles = config?.roles ?? {};
      const rolesMerged = await this.mergeRolesForAgent(basePath, roles);

      // --- Build context ---
      context = {
        ...requester,
        config: {
          VERSIONS: { ...defaultConfig.libraries, ...commonConfig.libraries, ...rolesMerged.libraries, ...config.libraries },
          WEB_VERSIONS: {
            ...defaultConfig.webLibraries,
            ...commonConfig.webLibraries,
            ...rolesMerged.webLibraries,
            ...config.webLibraries
          },
        },
        privates: {
          ...requester.privates,
          ...defaultConfig.privates,
          ...commonConfig.privates,
          ...rolesMerged.privates,
          ...config.privates
        },
        variables: {
          ...requester.variables,
          ...defaultConfig.variables,
          ...commonConfig.variables,
          ...rolesMerged.variables,
          ...config.variables
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

      // --- Reasoning lookup ---
      let content: string | null = null;

      const agentFile = path.join(basePath, digipair, `${reasoning}.json`);
      if (existsSync(agentFile)) {
        content = await promises.readFile(agentFile, 'utf8');
      }
      if (!content) {
        content = this.findReasoningInRoles(basePath, roles, reasoning).then(f => f ? promises.readFile(f, 'utf8') : null) as any;
      }

      if (!content && existsSync(`${basePath}/common/${reasoning}.json`) === true) {
        content = await promises.readFile(`${basePath}/common/${reasoning}.json`, 'utf8');
      } else if (!content && existsSync(`${basePath}/${digipair}/fallback.json`)) {
        content = await promises.readFile(`${basePath}/${digipair}/fallback.json`, 'utf8');
      } else if (!content && existsSync(`${basePath}/common/fallback.json`) === true) {
        content = await promises.readFile(`${basePath}/common/fallback.json`, 'utf8');
      }

      if (!content){
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

  private async loadRoleConfig(rolePath: string, roleName: string, version = 'latest', visited = new Set<string>()) {
    const roleFile = path.join(rolePath, roleName,`config.json`);
    if (!existsSync(roleFile)) return {};

    if (visited.has(roleName)) {
      console.warn(`Circular role reference detected: ${roleName}`);
      return {};
    }
    visited.add(roleName);

    const content = await promises.readFile(roleFile, 'utf8');
    const config = JSON.parse(content);

    let mergedConfig = {};

    // Recursively merge inherited roles (priority to last)
    const entries = Object.entries(config?.roles ?? {}).reverse();
    for (const [subRoleName, subVersion] of entries) {
      const subConfig = await this.loadRoleConfig(rolePath, subRoleName, subVersion as string, visited);
      mergedConfig = this.mergeConfigs(mergedConfig, subConfig);
    }

    // Merge current role last (highest priority)
    mergedConfig = this.mergeConfigs(mergedConfig, config);
    return mergedConfig;
  }

  private mergeConfigs(base: any, override: any) {
    return {
      ...base,
      ...override,
      variables: { ...(base.variables ?? {}), ...(override.variables ?? {}) },
      privates: { ...(base.privates ?? {}), ...(override.privates ?? {}) },
      libraries: { ...(base.libraries ?? {}), ...(override.libraries ?? {}) },
      webLibraries: { ...(base.webLibraries ?? {}), ...(override.webLibraries ?? {}) },
    };
  }
  private async mergeRolesForAgent(basePath: string, roles: Record<string,string>): Promise<any> {
    let merged = {};
    const entries = Object.entries(roles).reverse(); // last added role = highest priority
    for (const [roleName, version] of entries) {
      const roleConfig = await this.loadRoleConfig(`${basePath}/roles`, roleName, version);
      merged = this.mergeConfigs(merged, roleConfig);
    }
    return merged;
  }

  private async findReasoningInRoles(basePath: string, roles: Record<string,string>, reasoning: string): Promise<string | null> {
    const entries = Object.entries(roles).reverse(); // last added role = first search
    for (const [roleName] of entries) {
      const rolePath = path.join(basePath, 'roles', roleName);
      const reasoningFile = path.join(rolePath, `${reasoning}.json`);
      if (existsSync(reasoningFile)) return reasoningFile;

      // check inherited roles recursively
      const configFile = path.join(rolePath, 'config.json');
      if (existsSync(configFile)) {
        const content = await promises.readFile(configFile, 'utf8');
        const config = JSON.parse(content);
        const found = await this.findReasoningInRoles(basePath, config.roles ?? {}, reasoning);
        if (found) return found;
      }
    }
    return null;
  }
}
