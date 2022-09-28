"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
var express_1 = require("express");
var UserController_1 = require("./controllers/UserController");
var UserRoutes = (0, express_1.Router)();
exports.UserRoutes = UserRoutes;
UserRoutes.post("/register", UserController_1.register);
UserRoutes.post("/login", UserController_1.login);
//# sourceMappingURL=routes.js.map