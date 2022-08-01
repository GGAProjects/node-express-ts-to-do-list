import { Router } from "express";
import { UserRoutes } from "./modules/user/routes";

const router = Router();
router.use("/users", UserRoutes)

export { router }