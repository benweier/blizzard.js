const CLIEngine = require('eslint').CLIEngine;
const chalk = require('chalk');
const glob = require('glob-all');
const cli = new CLIEngine({});

const lint = function lint (patterns) {
  describe('eslint', () => {

    glob.sync(patterns).forEach(file => {
      test('should have no errors in ' + file, function () {
        const report = cli.executeOnFiles([file]);

        if (report.errorCount) {
          throw new Error(
            chalk.red('Code does not pass linting rules')
          );
        }
      });
    });

  });
};

describe('Code Standards', () => {
  lint(['index.js', 'lib/**/*.js', 'test/**/*.js']);
});
