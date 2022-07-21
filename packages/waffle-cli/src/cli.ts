import program from 'commander';
import semver from 'semver';
import yParser from 'yargs-parser';
import chalk from 'chalk';
const run = require('./run');

program
.version(require("../package.json").version, "-v -V")
.description("查看版本命令")
.parse(process.argv);

program.command('help')
.alias('-h')
.description('帮助命令')
.action(function(name, other) {
    console.log(`
帮助命令

支持的命令:
version, -v,-V 输出当前框架的版本
help,-h 输出帮助程序

Example call:
$ waffle-cli <command> --help`)
}).parse(process.argv);

program.command('dev').description('框架开发命令').action(function() {
    const dev = require('../lib/dev');
    dev();
});

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
})()


