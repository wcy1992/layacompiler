"use strict";
exports.__esModule = true;
var argv_1 = require("./argv");
var params = {};
exports.params = params;
var paramsStr = argv_1.argv.params;
var pairs = paramsStr.split(';');
for (var i = 0; i < pairs.length; i++) {
    if (!pairs[i])
        continue;
    var pairStr = pairs[i];
    var pair = pairStr.split('=');
    params[pair[0]] = pair[1];
}
//# sourceMappingURL=params.js.map