const supertest = require('supertest');
const chalk = require('chalk');

require('dotenv-safe').config();

const request = supertest(process.env.BASE_URL);

module.exports = {
  async fakeApiHelper() {
    const response = await request.get('/posts').catch((error) => error.response);
    if (response.status === 200) {
      return response.body[0].id;
    }
    return console.log(chalk.red('ERROR: API server not responding!'));
  },
};
