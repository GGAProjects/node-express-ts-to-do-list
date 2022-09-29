"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCategoryRoutes = void 0;
var express_1 = require("express");
var VerifyToken_1 = require("@middlewares/VerifyToken");
var manageErrors_1 = require("@src/utils/manageErrors");
var TaskCategoryController_1 = require("./controllers/TaskCategoryController");
var TaskCategoryCreateDTO_1 = require("./dtos/TaskCategoryCreateDTO");
var TaskCategoryUpdateDTO_1 = require("./dtos/TaskCategoryUpdateDTO");
var TaskCategoryRoutes = (0, express_1.Router)();
exports.TaskCategoryRoutes = TaskCategoryRoutes;
TaskCategoryRoutes.post("/", VerifyToken_1.verifyToken, (0, manageErrors_1.manageErrors)(TaskCategoryCreateDTO_1.TaskCategoryCreateDTO), TaskCategoryController_1.create);
TaskCategoryRoutes.get("/:id", VerifyToken_1.verifyToken, TaskCategoryController_1.read);
TaskCategoryRoutes.get("/", VerifyToken_1.verifyToken, TaskCategoryController_1.list);
TaskCategoryRoutes.put("/:id", VerifyToken_1.verifyToken, (0, manageErrors_1.manageErrors)(TaskCategoryUpdateDTO_1.TaskCategoryUpdateDTO), TaskCategoryController_1.update);
TaskCategoryRoutes.delete("/:id", VerifyToken_1.verifyToken, TaskCategoryController_1.destroy);
//# sourceMappingURL=routes.js.map