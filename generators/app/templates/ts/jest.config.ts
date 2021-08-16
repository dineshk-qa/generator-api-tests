import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*)+(spec|test).[jt]s?(x)'],
  verbose: true,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        expand: true,
      },
    ],
    [
      'jest-junit',
      {
        outputDirectory: './html-report',
        outputName: 'junit.xml',
      },
    ],
  ],
  setupFilesAfterEnv: ['./config/jest.setup.ts'],
  globalSetup: './config/jest.globalSetup.ts',
  globalTeardown: './config/jest.globalTeardown.ts',
};

export default config;
