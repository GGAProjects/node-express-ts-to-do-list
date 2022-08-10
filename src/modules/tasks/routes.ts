import { Router } from "express";
import { makeValidateBody } from "express-class-validator";
import { verifyToken } from "@middlewares/VerifyToken";
import { getDataForCreating, create, read, list, update, destroy } from "./controllers/TaskController";
import { TaskCreateDTO } from "./dtos/TaskCreateDTO";
import { TaskUpdateDTO } from "./dtos/TaskUpdateDTO";

const TaskRoutes = Router();
TaskRoutes.get("/fieldsData", verifyToken, getDataForCreating);
TaskRoutes.post("/", verifyToken, makeValidateBody(TaskCreateDTO), create);
TaskRoutes.get("/:id", verifyToken, read);
TaskRoutes.get("/", verifyToken, list);
TaskRoutes.put("/:id", verifyToken, makeValidateBody(TaskUpdateDTO), update);
TaskRoutes.delete("/:id", verifyToken, destroy);

export { TaskRoutes }