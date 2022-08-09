import { Router } from "express";
import { makeValidateBody } from "express-class-validator";
import { verifyToken } from "@middlewares/VerifyToken";
import { getDataForCreating, create, list } from "./controllers/TaskController";
import { TaskCreateDTO } from "./dtos/TaskCreateDTO";

const TaskRoutes = Router();
TaskRoutes.get("/fieldsData", verifyToken, getDataForCreating);
TaskRoutes.post("/", verifyToken, makeValidateBody(TaskCreateDTO), create);
TaskRoutes.get("/", verifyToken, list);

export { TaskRoutes }