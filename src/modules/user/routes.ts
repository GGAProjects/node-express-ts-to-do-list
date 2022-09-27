import { Router } from "express";
import { manageErrors } from "../../utils/manageErrors";
import { login, register } from "./controllers/UserController";
import { UserCreateDTO } from "./dtos/UserCreateDTO";
import { UserLoginDTO } from "./dtos/UserLoginDTO";


const UserRoutes = Router();
UserRoutes.post("/register", manageErrors(UserCreateDTO), register);
UserRoutes.post("/login", manageErrors(UserLoginDTO), login);

export { UserRoutes }