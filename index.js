#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CURR_DIR = process.cwd();
const TEMPLATE_PATH = `${__dirname}/ts-three-webpack`;

const log = (args) => console.log('\x1b[34m%s\x1b[0m', args);

const copyFolderSync = (from, to) => {
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
};

const handleInput = () => {
  const inputPath = process.argv[2];
  if (!inputPath) {
    log('wrong input...');
    return;
  }
  const projectPath = path.join(CURR_DIR, inputPath);
  fs.mkdirSync(projectPath, { recursive: true });
  copyFolderSync(TEMPLATE_PATH, projectPath);
  log(`project created at: ${projectPath}`);
};

handleInput();
