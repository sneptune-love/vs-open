#!/usr/bin/env node

const path = require('path');

const program = require('commander');

var shell = require('shelljs');

let filePath = "";

program
        .arguments('<path>')
        .usage('<path> [options]')
        .option('-d, --dir', 'open dirFile', false)
        .option('-f, --file', 'open a file', false)
        .action(item => filePath = path.resolve(item))
        .parse(process.argv)

if (!program.args.length) {
    program.help(); 
}

if (program.dir) {
    if (shell.exec(`code --folder-uri ${filePath}`).code !== 0) {
        console.log('未安装vscode，请重新安装vscode');
    }
} else {
    if (shell.exec(`code --file-uri ${filePath}`).code !== 0) {
        console.log('未安装vscode，请重新安装vscode');
    }
}




