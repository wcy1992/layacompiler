#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var configGen = require("./configGen");
var moduleConfigGen = require("./moduleConfigGen");
var childProcess = require("child_process");
var argv_1 = require("./argv");
var path = require("path");
configGen.exec();
moduleConfigGen.exec();
console.log(1);
var file = path.join(argv_1.projectDir, '.actionScriptProperties');
var argStr = file + ";iflash=false;windowshow=false;chromerun=false";
var child = childProcess.spawn(path.join(__dirname, '../tools/layajs.exe'), [argStr]);
child.stdout.on('data', function (chunk) {
    console.log(chunk.toString());
});
child.stderr.on('data', function (chunk) {
    console.log('error', chunk);
});
child.on('exit', function (code, signal) {
    console.log('exit', code, signal);
});
//# sourceMappingURL=index.js.map