"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
var express_1 = require("express");
var manageErrors_1 = require("@src/utils/manageErrors");
var UserController_1 = require("./controllers/UserController");
var UserCreateDTO_1 = require("./dtos/UserCreateDTO");
var UserLoginDTO_1 = require("./dtos/UserLoginDTO");
var UserRoutes = (0, express_1.Router)();
exports.UserRoutes = UserRoutes;
UserRoutes.post("/register", (0, manageErrors_1.manageErrors)(UserCreateDTO_1.UserCreateDTO), UserController_1.register);
UserRoutes.post("/login", (0, manageErrors_1.manageErrors)(UserLoginDTO_1.UserLoginDTO), UserController_1.login);
//# sourceMappingURL=routes.js.map