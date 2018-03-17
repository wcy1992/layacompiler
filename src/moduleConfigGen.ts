import * as path from 'path';
import * as fs from 'fs';
import { argv, projectDir } from './argv';
import * as templateDelegate from './templateDelegate';
import { params } from './params';

function exec(): void {
    //根据module.json以及module name list来生成module.def
    const moduleDataPath: string = path.join(projectDir, 'module.json');
    if (!fs.existsSync(moduleDataPath)) return;

    const moduleTmplPath: string = path.join(__dirname, '../templates/module.def');
    const moduleTmpl: string = fs.readFileSync(moduleTmplPath).toString();
    let moduleData: any = fs.readFileSync(moduleDataPath).toString();
    moduleData  = templateDelegate.exec(moduleData, params);
    moduleData = JSON.parse(moduleData);

    let modules: any[] = [];
    let moduleNames: string[] = argv.modules && argv.modules.split(',');
    let data: any[] = [];
    for (let element in moduleData) {
        let item: any = Object.create(params);
        item.module = element;
        item.path = moduleData[element];
        data.push(item);
        argv.modules && moduleNames.indexOf(element) > -1 && modules.push(item);
    }
    if (moduleNames && moduleNames.length > modules.length) {
        throw new Error('one or more module names was not found.')
    }
    if (argv.modules)
        data = modules;
    let result: string = templateDelegate.exec(moduleTmpl, { list: data });
    result = templateDelegate.exec(result, { list: data });

    const out: string = path.join(projectDir, 'module.def');
    fs.writeFileSync(out, result);
}

export { exec }