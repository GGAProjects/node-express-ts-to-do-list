"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("module-alias/register");
require("dotenv").config();
var app = (0, express_1.default)();
app.get('/', function (_req, res) {
    res.send('OK');
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Listening on port new version test' + port);
});
//# sourceMappingURL=index.js.map