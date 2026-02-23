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
      body: 'FEEL:settings.properties',
    },
  },
]);

config.set(
  'LOGGER',
  (level: string, logPath: string, message: string, context: any, data?: any) => {
    const time = new Date().toISOString();
    const prefix = `[${time}][${context.request.digipair}@${context.request.reasoning}][${logPath}]`;

    switch (level) {
      case 'INFO':
        console.log(`${prefix} ${message}`);
        break;
      case 'ERROR':
        console.error(`${prefix} ${message}`, data);
        break;
      case 'DEBUG':
        console.debug(`${prefix} ${message}`, data);
        break;
      default:
        console.log(`${prefix} ${message}`);
        break;
    }
  },
);

@Injectable()
export class AppService implements OnModuleInit {
  async onModuleInit() {
    const basePath = process.env.DIGIPAIR_FACTORY_PATH
      ? `${process.env.DIGIPAIR_FACTORY_PATH}/digipairs`
      : './factory/digipairs';

    // initialize logs management
    const skillLogger = require('@digipair/skill-logger');
    await skillLogger.initialize();

    // initialize factory skill
    const skillFactory = require('@digipair/skill-factory');
    skillFactory.initialize((context: any, digipair: string, reasoning: string, body: any) =>
      this.agent(
        basePath,
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
          basePath: string,
          digipair: string,
          reasoning: string,
          cronTime: string,
          cronId: string,
        ) => {
          const skillProcess = require('@digipair/skill-process');
          const { id, signal } = skillProcess.add(digipair, reasoning, null);

          try {
            await this.agent(
              basePath,
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
          } catch (error: any) {
            if (error.type !== 'DIGIPAIR_KEEPALIVE') {
              console.error(error);
              skillProcess.remove(id);
            }
          }
        },
      );
      skillCron.start(basePath);
    } catch (error) {
      console.error(error);
    }

    // start workflow manager
    try {
      const skillTemporal = require('@digipair/skill-temporal');

      if (process.env.TEMPORAL_CLUSTER_HOST) {
        skillTemporal.initialize(process.env.TEMPORAL_CLUSTER_HOST);
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
      // --- Load core configs ---
      let content: string | null;

      content = await promises.readFile(`${assets}/default.json`, 'utf8');
      const defaultConfig = JSON.parse(content);

      content = await promises.readFile(`${basePath}/common/config.json`, 'utf8');
      const commonConfig = JSON.parse(content);

      content = await promises.readFile(`${basePath}/${digipair}/config.json`, 'utf8');
      const config = JSON.parse(content);

      // --- Merge all roles configs recursively ---
      const defaultRoles = defaultConfig?.roles ?? {};
      const commonRoles = commonConfig?.roles ?? {};
      const roles = config?.roles ?? {};
      const defaultRolesMerged = await this.mergeRolesForAgent(basePath, defaultRoles);
      const commonRolesMerged = await this.mergeRolesForAgent(basePath, commonRoles);
      const rolesMerged = await this.mergeRolesForAgent(basePath, roles);
      // --- Build execution context ---
      context = {
        ...requester,
        config: {
          VERSIONS: {
            ...defaultRolesMerged.libraries,
            ...defaultConfig.libraries,
            ...commonRolesMerged.libraries,
            ...commonConfig.libraries,
            ...rolesMerged.libraries,
            ...config.libraries,
          },
          WEB_VERSIONS: {
            ...defaultRolesMerged.webLibraries,
            ...defaultConfig.webLibraries,
            ...commonRolesMerged.webLibraries,
            ...commonConfig.webLibraries,
            ...rolesMerged.webLibraries,
            ...config.webLibraries,
          },
        },
        privates: {
          ...requester.privates,
          ...defaultRolesMerged.privates,
          ...defaultConfig.privates,
          ...commonRolesMerged.privates,
          ...commonConfig.privates,
          ...rolesMerged.privates,
          ...config.privates,
        },
        variables: {
          ...requester.variables,
          ...defaultRolesMerged.variables,
          ...defaultConfig.variables,
          ...commonRolesMerged.variables,
          ...commonConfig.variables,
          ...rolesMerged.variables,
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

      // --- Reasoning lookup ---

      // 1. agent-specific reasoning
      content = await this.tryRead(path.join(basePath, digipair, `${reasoning}.json`));

      // 2. inherited roles (deep search)
      content ||= await (async () => {
        const rolePath = await this.findFileInRoles(basePath, roles, `${reasoning}.json`);
        return rolePath ? this.tryRead(rolePath) : null;
      })();

      // 3. common reasoning
      content ||= await this.tryRead(path.join(basePath, 'common', `${reasoning}.json`));

      // 3.b common roles reasoning
      content ||= await (async () => {
        const rolePath = await this.findFileInRoles(basePath, commonRoles, `${reasoning}.json`);
        return rolePath ? this.tryRead(rolePath) : null;
      })();

      // 3.c default roles reasoning
      content ||= await (async () => {
        const rolePath = await this.findFileInRoles(basePath, defaultRoles, `${reasoning}.json`);
        return rolePath ? this.tryRead(rolePath) : null;
      })();

      // 4. digipair fallback
      content ||= await this.tryRead(path.join(basePath, digipair, 'fallback.json'));

      // 5. fallback via inherited roles (deep search)
      content ||= await (async () => {
        const fb = await this.findFileInRoles(basePath, roles, 'fallback.json');
        return fb ? this.tryRead(fb) : null;
      })();

      // 6. final fallback
      content ||= await this.tryRead(path.join(basePath, 'common', 'fallback.json'));

      // 6.b final fallback via common roles (deep search)
      content ||= await (async () => {
        const fb = await this.findFileInRoles(basePath, commonRoles, 'fallback.json');
        return fb ? this.tryRead(fb) : null;
      })();

      // 6.c final fallback via default roles (deep search)
      content ||= await (async () => {
        const fb = await this.findFileInRoles(basePath, defaultRoles, 'fallback.json');
        return fb ? this.tryRead(fb) : null;
      })();

      if (!content) {
        res.status(404);
        return { status: 'not found' };
      }

      // --- Parse and execute reasoning ---
      const settings = JSON.parse(content);

      if (isHttpRequest && !['page', 'service', 'event', 'boost'].includes(settings.element)) {
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

      if (context) {
        console.error(error);
        const skillLogger = require('@digipair/skill-logger');
        (skillLogger as any).addLog(context, 'ERROR', error.message);
      }

      throw error;
    }
  }

  // --- UTILITIES ---
  private async tryRead(basePath: string | null): Promise<string | null> {
    if (basePath && existsSync(basePath)) {
      return promises.readFile(basePath, 'utf8');
    }
    return null;
  }

  /** Recursively load a role config and its inherited roles */
  private async loadRoleConfig(
    rolePath: string,
    roleName: string,
    _version = 'latest',
    visited = new Set<string>(),
  ) {
    const roleFile = path.join(rolePath, roleName, 'config.json');
    if (!existsSync(roleFile)) return {};

    if (visited.has(roleName)) {
      console.debug(`Circular role reference detected: ${roleName}`);
      return {};
    }
    visited.add(roleName);

    const content = await promises.readFile(roleFile, 'utf8');
    const config = JSON.parse(content);

    let mergedConfig = {};

    // Recursively merge inherited roles first (their settings can be overridden by this role)
    const entries = Object.entries(config?.roles ?? {});
    for (const [subRoleName, subVersion] of entries) {
      const subConfig = await this.loadRoleConfig(
        rolePath,
        subRoleName,
        subVersion as string,
        visited,
      );
      mergedConfig = this.mergeConfigs(mergedConfig, subConfig);
    }

    // Merge current role last (highest priority)
    mergedConfig = this.mergeConfigs(mergedConfig, config);
    return mergedConfig;
  }

  /** Merge role configuration objects */
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

  /** Merge all roles for a given agent */
  private async mergeRolesForAgent(basePath: string, roles: Record<string, string>): Promise<any> {
    let merged = {};
    const entries = Object.entries(this._filteringDigipairRoles(roles));
    for (const [roleName, version] of entries) {
      const roleConfig = await this.loadRoleConfig(basePath, roleName, version);
      merged = this.mergeConfigs(merged, roleConfig);
    }
    return merged;
  }

  /** Recursively find file, ie reasoning/fallback JSON, in roles or their parents */
  private async findFileInRoles(
    basePath: string,
    roles: Record<string, string>,
    targetFile: string,
  ): Promise<string | null> {
    let entries = Object.entries(this._filteringDigipairRoles(roles));
    entries = entries.reverse();

    for (const [roleName] of entries) {
      const rolePath = path.join(basePath, roleName);
      const filePath = path.join(rolePath, targetFile);

      if (existsSync(filePath)) {
        return filePath;
      }

      const configFile = path.join(rolePath, 'config.json');
      if (existsSync(configFile)) {
        const config = JSON.parse(await promises.readFile(configFile, 'utf8'));
        const found = await this.findFileInRoles(basePath, config.roles ?? {}, targetFile);
        if (found) return found;
      }
    }

    return null;
  }

  private _filteringDigipairRoles(roles: Record<string, string>): Record<string, string> {
    return Object.entries(roles).reduce<Record<string, string>>((acc, [roleName, value]) => {
      if (roleName.startsWith('digipair:')) {
        const cleanName = roleName.substring('digipair:'.length);
        acc[cleanName] = value;
      }
      return acc;
    }, {});
  }
}
