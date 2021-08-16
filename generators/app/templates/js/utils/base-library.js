const supertest = require('supertest');
const chalk = require('chalk');
const { v4: uuidv4 } = require('uuid');
require('dotenv-safe').config();

const request = supertest(process.env.BASE_URL);

module.exports = {
  async isApiHealthy() {
    console.log(chalk.yellow('Checking API health before test execution...'));
    const healthCheckResponse = await request.get('/posts');
    if (healthCheckResponse) {
      const healthStatusCode = healthCheckResponse.statusCode;
      if (healthStatusCode === 200) {
        console.log(chalk.green('API is healthy, moving forward with execution >>'));
      } else {
        console.log(chalk.red('API is down!!! Suspending test execution'));
        process.exit(1);
      }
    } else {
      console.log(chalk.red('Network Down!!! Suspending test execution'));
      process.exit(1);
    }
  },
  async authHeader() {
    return {
      'API-Key': process.env.API_KEY,
      'user-agent': 'API-Test',
    };
  },
  uuid() {
    return uuidv4();
  },
  delay(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  },
};
