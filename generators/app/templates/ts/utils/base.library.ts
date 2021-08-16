import supertest from 'supertest';
import chalk from 'chalk';
import 'dotenv-safe/config';
import { v4 as uuidv4 } from 'uuid';
import { AuthHeader } from '../types/common';

const request = supertest(process.env.BASE_URL);

const base = {
  isApiHealthy: async (): Promise<any> => {
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
  setAuthHeader: (): AuthHeader => ({
    'Api-Key': process.env.API_KEY,
    'user-agent': 'API-Test',
  }),
  uuid: (): string => uuidv4(),
  delay: (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
};

export default base;
