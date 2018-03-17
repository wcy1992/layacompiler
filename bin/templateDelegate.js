"use strict";
exports.__esModule = true;
var Handlebars = require("handlebars");
function exec(tmpl, data) {
    var template = Handlebars.compile(tmpl);
    var result = template(data);
    return result;
}
exports.exec = exec;
//# sourceMappingURL=templateDelegate.js.map