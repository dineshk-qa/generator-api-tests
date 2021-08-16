/** *
 * This exports an async function that is triggered once before all test suites
 * More like a global beforeAll for all test suites
 */

import chalk from 'chalk';

export default async () => {
  console.log(chalk.yellowBright('\nGlobal Setup executed'));
};
