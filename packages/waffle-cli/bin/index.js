const program = require('commander');
const semver = require('semver');
const yParser = require('yargs-parser');
const run = require('./run');

program
.version(require('../package.json').version)
.parse(process.argv);

if (!semver.satisfies(process.version, '>= 8.0.0')) {
    console.error(chalk.red("node 版本至少要大于8.0.0!"));
    process.exit(1);
}

const args = yParser(process.argv.slice(2));
const mode = args._[0] || '';
const { type } = args;
delete args.type;

(async () => {
    await run({
        mode,
        type,
        args,
    });
    process.exit(0);
})();


