import { Volume, vol } from 'memfs';
import path from 'path';
import { jest } from '@jest/globals';

jest.mock('cel-js', () => ({}));
jest.mock('feelin', () => ({}));
jest.mock('fs', () => require('memfs').fs);
jest.mock('@digipair/engine', () => ({
    executePinsList: jest.fn().mockResolvedValue({ executed: true }),
    config: {
        set: jest.fn(),
        get: jest.fn(),
    },
}));

import { AppService } from './app.service';
import { executePinsList } from '@digipair/engine';

describe('AppService advanced roles and reasoning tests', () => {
    let service: AppService;

    beforeEach(() => {
        process.env.DIGIPAIR_FACTORY_PATH = '/factory';
        vol.reset();

        vol.fromJSON({
            // Default and common configs
            '/factory/default.json': JSON.stringify({
                libraries: { lodash: '4.17.21' },
                webLibraries: { react: '18.0.0' },
                privates: { secret: 'defaultSecret' },
                variables: { VAR_A: 'DEF', COMMON_FLAG: false },
            }),
            '/factory/digipairs/common/config.json': JSON.stringify({
                libraries: { axios: '1.3.0' },
                webLibraries: { vue: '3.3.0' },
                variables: { VAR_A: 'COMMON', COMMON_FLAG: true },
            }),
            '/factory/digipairs/common/fallback.json': JSON.stringify({ element: 'fallback-common' }),

            // Agent
            '/factory/digipairs/myAgent/config.json': JSON.stringify({
                libraries: { customAgentLib: '2.0.0' },
                webLibraries: { angular: '17.0.0' },
                privates: { agentPrivate: 'yes' },
                variables: { VAR_A: 'AGENT', VAR_B: 'BETA' },
                roles: { 'role-admin': 'latest', 'role-http': 'latest' },
            }),
            '/factory/digipairs/myAgent/reasoning.json': JSON.stringify({ element: 'page', message: 'agent reasoning' }),

            // --- Role admin hierarchy ---
            '/factory/digipairs/role-admin/config.json': JSON.stringify({
                libraries: { adminLib: '1.0.0', httpLib: '1.0.0' },
                variables: { VAR_A: 'ADMIN' },
                roles: { 'role-debug': 'latest' },
            }),
            '/factory/digipairs/role-admin/reasoning.json': JSON.stringify({ element: 'service', message: 'admin reasoning' }),

            '/factory/digipairs/role-debug/config.json': JSON.stringify({
                libraries: { debugLib: '1.0.1' },
                variables: { VAR_DEBUG: true },
            }),
            '/factory/digipairs/role-debug/fallback.json': JSON.stringify({ element: 'fallback-debug' }),

            // --- Role http hierarchy ---
            '/factory/digipairs/role-http/config.json': JSON.stringify({
                libraries: { httpLib: '1.1.1' },
                variables: { VAR_HTTP: 'OK', VAR_A: 'HTTP' },
                roles: { 'role-base': 'latest' },
            }),
            '/factory/digipairs/role-http/reasoning.json': JSON.stringify({ element: 'service', message: 'http reasoning' }),

            '/factory/digipairs/role-base/config.json': JSON.stringify({
                libraries: { baseLib: '0.9.9' },
                variables: { VAR_BASE: 'ROOT' },
            }),
            '/factory/digipairs/role-base/fallback.json': JSON.stringify({ element: 'fallback-base' }),
        });

        service = new AppService();
    });

    afterEach(() => {
        vol.reset();
        delete process.env.DIGIPAIR_FACTORY_PATH;
    });

    // -------------------- TEST CASES --------------------

    it('should deeply merge multiple roles with correct precedence', async () => {
        const merged = await service['mergeRolesForAgent'](
            '/factory/digipairs',
            { 'role-admin': 'latest', 'role-http': 'latest' }
        );

        expect(merged.libraries).toEqual({
            debugLib: '1.0.1',
            adminLib: '1.0.0',
            baseLib: '0.9.9',
            httpLib: '1.1.1', // last wins
        });

        expect(merged.variables).toEqual({
            VAR_A: 'HTTP', // last wins
            VAR_DEBUG: true,
            VAR_BASE: 'ROOT',
            VAR_HTTP: 'OK',
        });
    });


    it('should find first reasoning in last role inherit', async () => {
        const pathFound = await service['findFileInRoles'](
            '/factory/digipairs',
            { 'role-admin': 'latest', 'role-http': 'latest' },
            'reasoning.json'
        );

        expect(pathFound).toContain('role-http');
    });

    it('should execute correct reasoning with merged context', async () => {
        const res = { status: jest.fn() };

        const result = await service.agent(
            '/factory/digipairs',
            'myAgent',
            'reasoning',
            {},
            [],
            {},
            'POST',
            {},
            {},
            {},
            res,
            new AbortController().signal,
            true
        );

        expect(result).toEqual({ executed: true });

        const merged = await service['mergeRolesForAgent']('/factory/digipairs', {
            'role-admin': 'latest',
            'role-http': 'latest',
        });

        expect(merged.variables.VAR_A).toBe('HTTP');
    });

    it('should fall back through role chain when reasoning missing', async () => {
        const res = { status: jest.fn() };

        const output = await service.agent(
            '/factory/digipairs',
            'myAgent',
            'missing_reasoning',
            {},
            [],
            {},
            'POST',
            {},
            {},
            {},
            res,
            new AbortController().signal,
            false
        );

        expect(output).toEqual({ executed: true });
    });

    it('should respect priorityLast=false to reverse search order', async () => {
        const found = await service['findFileInRoles'](
            '/factory/digipairs',
            { 'role-admin': 'latest', 'role-http': 'latest' },
            'reasoning.json',
            Infinity,
            false
        );

        expect(found).toContain('role-admin');
    });
});
