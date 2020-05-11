#!/usr/bin/env node

const path = require('path');

const program = require('commander');

var shell = require('shelljs');

let filePath = "";

program
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



