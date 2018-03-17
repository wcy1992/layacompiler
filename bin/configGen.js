"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var argv_1 = require("./argv");
var params_1 = require("./params");
var templateDelegate = require("./templateDelegate");
function exec() {
    var file = '.actionScriptProperties';
    //generate data
    var dataPath = path.join(argv_1.projectDir, 'config.json');
    var dataTmpl = fs.readFileSync(dataPath).toString();
    dataTmpl = templateDelegate.exec(dataTmpl, params_1.params);
    var data = JSON.parse(dataTmpl);
    data.outputFolderLocation = argv_1.argv['out'];
    //generate .actionScriptProperties content
    var configPath = path.join(__dirname, '../templates', file);
    var configTmpl = fs.readFileSync(configPath).toString();
    configTmpl = templateDelegate.exec(configTmpl, data);
    //generate .actionScriptProperties file
    var out = path.join(argv_1.projectDir, file);
    fs.writeFileSync(out, configTmpl);
}
exports.exec = exec;
//# sourceMappingURL=configGen.js.map