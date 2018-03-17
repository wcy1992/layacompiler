"use strict";
exports.__esModule = true;
var yargs = require("yargs");
var argv = yargs.option('params', {
    alias: 'p',
    describe: 'params',
    demand: true,
    type: 'string'
})
    .option('projectDir', {
    alias: 'd',
    describe: 'project directory',
    demand: true,
    type: 'string'
})
    .option('out', {
    alias: 'o',
    describe: 'output directory',
    demand: true,
    type: 'string'
})
    .option('modules', {
    alias: 'm',
    describe: 'modules',
    demand: false,
    type: 'string'
})
    .usage('Usage: layac [options]')
    .example('layac Bag,Fleet --params branch=<path/to/branch>;layaInterface=<path/to/layaInterface>')
    .help('h')
    .alias('h', 'help')
    .argv;
exports.argv = argv;
var projectDir = argv['projectDir'] || process.cwd();
exports.projectDir = projectDir;
//# sourceMappingURL=argv.js.map