import * as yargs from 'yargs';
let argv: any = yargs.option('params', {
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

let projectDir: string = argv['projectDir'] || process.cwd();
export { argv, projectDir };