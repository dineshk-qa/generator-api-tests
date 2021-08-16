/** *
 * This exports an async function that is triggered once after all test suites
 * More like a global afterAll for all test suites
 */
import chalk from 'chalk';

export default async () => {
  console.log(chalk.yellowBright('\nGlobal Teardown executed'));
};
