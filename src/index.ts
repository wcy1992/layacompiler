#!/usr/bin/env node
import * as configGen from './configGen';
import * as moduleConfigGen from './moduleConfigGen';
import * as childProcess from 'child_process';
import { projectDir } from './argv';
import * as path from 'path';

configGen.exec();
moduleConfigGen.exec();
console.log(1)


let file: string = path.join(projectDir, '.actionScriptProperties');
let argStr: string = `${file};iflash=false;windowshow=false;chromerun=false`;
let child = childProcess.spawn(path.join(__dirname, '../tools/layajs.exe'), [argStr]);
child.stdout.on('data', function (chunk) {
  console.log(chunk.toString())
});
child.stderr.on('data', function (chunk) {
  console.log('error', chunk)
});
child.on('exit', function (code, signal) {
  console.log('exit', code, signal)
});