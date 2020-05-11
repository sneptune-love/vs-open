#!/usr/bin/env node

const path = require('path');

const fs = require('fs');

const program = require('commander');

const shell = require('shelljs');

let pkg = fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8');

let version = JSON.parse(pkg).version;

program
        .version(version)
        .arguments('<path>')
        .usage('<path> [options]')
        .action(item => filePath = path.resolve(item))
        .parse(process.argv)

if (!program.args.length) {
    program.help(); 
}

if (shell.exec(`code --file-uri ${filePath}`).code !== 0) {
    console.log('未安装vscode，请重新安装vscode');
}



