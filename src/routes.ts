import { Router } from "express";
import { UserRoutes } from "./modules/user/routes";
import { TaskRoutes } from "./modules/tasks/routes";
import { TaskGroupRoutes } from "./modules/taskGroups/routes";
// import { setupResponse } from "./config";

const router = Router();
// router.use(setupResponse);
router.use("/users", UserRoutes)
router.use("/tasks", TaskRoutes)
router.use("/taskGroups", TaskGroupRoutes)

export { router }