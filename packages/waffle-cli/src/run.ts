
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';

const cliPath = path.resolve(__dirname,'..');

const start = (config:any) => {
  console.log('start');
  console.log(config);
  const {name} = config;
  
}

const run = async (config:any) => {

try {
    return start(config);
  } catch (e) {
    console.error(chalk.red(`启动失败`), e);
    process.exit(1);
  }
};

module.exports = run;