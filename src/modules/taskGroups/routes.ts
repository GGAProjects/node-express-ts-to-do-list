import { Router } from "express";
import { makeValidateBody } from "express-class-validator";
import { verifyToken } from "@middlewares/VerifyToken";
import { create, read, list, update, destroy } from "./controllers/TaskGroupController";
import { TaskGroupCreateDTO } from "./dtos/TaskGroupCreateDTO";
import { TaskGroupUpdateDTO } from "./dtos/TaskGroupUpdateDTO";

const TaskGroupRoutes = Router();
TaskGroupRoutes.post("/", verifyToken, makeValidateBody(TaskGroupCreateDTO), create);
TaskGroupRoutes.get("/:id", verifyToken, read);
TaskGroupRoutes.get("/", verifyToken, list);
TaskGroupRoutes.put("/:id", verifyToken, makeValidateBody(TaskGroupUpdateDTO), update);
TaskGroupRoutes.delete("/:id", verifyToken, destroy);

export { TaskGroupRoutes }