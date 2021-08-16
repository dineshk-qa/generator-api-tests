import supertest from 'supertest';
import chalk from 'chalk';
import 'dotenv-safe/config';

const request = supertest(process.env.BASE_URL);

const helper = {
  littleHelper: async (): Promise<any> => {
    const response: supertest.Response = await request.get('/posts').catch((error) => error.response);
    if (response.status === 200) {
      return response.body[0].id;
    }
    return console.log(chalk.red('ERROR: API server not responding!'));
  },
};
export default helper;
