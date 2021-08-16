/* eslint-disable no-undef */
const fs = require('fs');

// eslint-disable-next-line no-unused-vars
function setEnvParams(currentValue, newValue) {
  const envFile = fs.readFileSync('./.env', 'utf8');
  const result = envFile.replace(currentValue, newValue);
  fs.writeFileSync('./.env', result, 'utf8');
}
const { TEST_ENV } = process.env;

switch (TEST_ENV) {
  case 'dev':
    fs.copyFileSync('./envs/.env.dev', './.env');
    break;
  case 'sandbox':
    fs.copyFileSync('./envs/.env.sandbox', './.env');
    break;
  default:
    fs.copyFileSync('./envs/.env.sandbox', './.env');
    break;
}

/** *
 * Set the secret keys at runtime, reading from from CI env variables
 */

// setEnvParams('CLIENT_SECRET', $CLIENT_SECRET);
