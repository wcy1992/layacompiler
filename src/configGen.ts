import * as path from 'path';
import * as fs from 'fs';
import { argv, projectDir } from './argv';
import { params } from './params';
import * as templateDelegate from './templateDelegate';

function exec(): void {
    const file: string = '.actionScriptProperties';
    //generate data
    const dataPath: string = path.join(projectDir, 'config.json');
    let dataTmpl: string = fs.readFileSync(dataPath).toString();
    dataTmpl = templateDelegate.exec(dataTmpl, params);
    let data: any = JSON.parse(dataTmpl);
    data.outputFolderLocation = argv['out'];

    //generate .actionScriptProperties content
    const configPath: string = path.join(__dirname, '../templates', file);
    let configTmpl: string = fs.readFileSync(configPath).toString();
    configTmpl = templateDelegate.exec(configTmpl, data);

    //generate .actionScriptProperties file
    const out: string = path.join(projectDir, file);
    fs.writeFileSync(out, configTmpl);
}

export { exec }