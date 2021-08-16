module.exports = {
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
  setupFilesAfterEnv: ['./config/jest.setup.js'],
  globalSetup: './config/jest.globalSetup.js',
  globalTeardown: './config/jest.globalTeardown.js',
};
