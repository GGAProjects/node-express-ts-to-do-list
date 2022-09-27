"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var routes_1 = require("./modules/user/routes");
var routes_2 = require("./modules/tasks/routes");
var routes_3 = require("./modules/taskCategories/routes");
var config_1 = require("./config");
var router = (0, express_1.Router)();
exports.router = router;
router.use(config_1.setupResponse);
router.use("/users", routes_1.UserRoutes);
router.use("/tasks", routes_2.TaskRoutes);
router.use("/taskCategories", routes_3.TaskCategoryRoutes);
//# sourceMappingURL=routes.js.map