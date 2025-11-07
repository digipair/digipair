import { Config } from 'jest';
import nxPreset from '@nx/jest/preset';

const config: Config = {
    ...nxPreset,
    displayName: 'factory',
    preset: '../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
                useESM: true,
            },
        ],
    },
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'js', 'html'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    moduleNameMapper: {
        '^@digipair/(.*)$': '<rootDir>/../../libs/$1/src/index.ts',
    },
    coverageDirectory: '../../coverage/apps/factory',
};

export default config;
