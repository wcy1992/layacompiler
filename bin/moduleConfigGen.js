"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var argv_1 = require("./argv");
var templateDelegate = require("./templateDelegate");
var params_1 = require("./params");
function exec() {
    //根据module.json以及module name list来生成module.def
    var moduleDataPath = path.join(argv_1.projectDir, 'module.json');
    if (!fs.existsSync(moduleDataPath))
        return;
    var moduleTmplPath = path.join(__dirname, '../templates/module.def');
    var moduleTmpl = fs.readFileSync(moduleTmplPath).toString();
    var moduleData = fs.readFileSync(moduleDataPath).toString();
    moduleData = templateDelegate.exec(moduleData, params_1.params);
    moduleData = JSON.parse(moduleData);
    var modules = [];
    var moduleNames = argv_1.argv.modules && argv_1.argv.modules.split(',');
    var data = [];
    for (var element in moduleData) {
        var item = Object.create(params_1.params);
        item.module = element;
        item.path = moduleData[element];
        data.push(item);
        argv_1.argv.modules && moduleNames.indexOf(element) > -1 && modules.push(item);
    }
    if (moduleNames && moduleNames.length > modules.length) {
        throw new Error('one or more module names was not found.');
    }
    if (argv_1.argv.modules)
        data = modules;
    var result = templateDelegate.exec(moduleTmpl, { list: data });
    result = templateDelegate.exec(result, { list: data });
    var out = path.join(argv_1.projectDir, 'module.def');
    fs.writeFileSync(out, result);
}
exports.exec = exec;
//# sourceMappingURL=moduleConfigGen.js.map