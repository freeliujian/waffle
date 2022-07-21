
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

const cliPath = path.resolve(__dirname,'..');

const start = (config) => {
  console.log('start');
  console.log(config);
  const {mode} = config;

}

const run = async (config) => {

  try {
    return start(config);
  } catch (e) {
    console.error(chalk.red(`启动失败`), e);
    process.exit(1);
  }
};

module.exports = run 