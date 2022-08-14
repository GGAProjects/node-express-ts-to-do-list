import { Router } from "express";
import { verifyToken } from "@middlewares/VerifyToken";
import { manageErrors } from "@src/utils/manageErrors";
import { create, read, list, update, destroy } from "./controllers/TaskGroupController";
import { TaskGroupCreateDTO } from "./dtos/TaskGroupCreateDTO";
import { TaskGroupUpdateDTO } from "./dtos/TaskGroupUpdateDTO";

const TaskGroupRoutes = Router();
TaskGroupRoutes.post("/", verifyToken, manageErrors(TaskGroupCreateDTO), create);
TaskGroupRoutes.get("/:id", verifyToken, read);
TaskGroupRoutes.get("/", verifyToken, list);
TaskGroupRoutes.put("/:id", verifyToken, manageErrors(TaskGroupUpdateDTO), update);
TaskGroupRoutes.delete("/:id", verifyToken, destroy);

export { TaskGroupRoutes }