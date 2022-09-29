"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("module-alias/register");
require("dotenv").config();
var routes_1 = require("./routes");
var app = (0, express_1.default)();
var corsOptions = {};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.router);
app.get('/', function (_req, res) {
    res.send('OK WTF2');
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Listening on port new version test' + port);
});
//# sourceMappingURL=index.js.map