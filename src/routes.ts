import { Router } from "express";
import { UserRoutes } from "./modules/user/routes";
// import { TaskRoutes } from "./modules/tasks/routes";
// import { TaskCategoryRoutes } from "./modules/taskCategories/routes";
import { setupResponse } from "./config";

const router = Router();
// router.get("/", (_req, res) => {
// 	res.json({
// 		status: 200,
// 		message: "Testing2"
// 	})
// })
router.use(setupResponse);
router.use("/users", UserRoutes)
// router.use("/tasks", TaskRoutes)
// router.use("/taskCategories", TaskCategoryRoutes)



export { router }