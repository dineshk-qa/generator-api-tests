/** *
 * This exports an async function that is triggered once after all test suites
 * More like a global afterAll for all test suites
 */
const chalk = require('chalk');

module.exports = async () => {
  console.log(chalk.yellowBright('\nGlobal Teardown executed'));
};
