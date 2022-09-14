import { Router } from "express";
import { verifyToken } from "@middlewares/VerifyToken";
import { manageErrors } from "@src/utils/manageErrors";
import { create, read, list, update, destroy } from "./controllers/TaskCategoryController";
import { TaskCategoryCreateDTO } from "./dtos/TaskCategoryCreateDTO";
import { TaskCategoryUpdateDTO } from "./dtos/TaskCategoryUpdateDTO";

const TaskCategoryRoutes = Router();
TaskCategoryRoutes.post("/", verifyToken, manageErrors(TaskCategoryCreateDTO), create);
TaskCategoryRoutes.get("/:id", verifyToken, read);
TaskCategoryRoutes.get("/", verifyToken, list);
TaskCategoryRoutes.put("/:id", verifyToken, manageErrors(TaskCategoryUpdateDTO), update);
TaskCategoryRoutes.delete("/:id", verifyToken, destroy);

export { TaskCategoryRoutes }