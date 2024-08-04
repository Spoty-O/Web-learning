import { Router } from "express";
import UserController from "../controllers/UserController";

const routes = Router();

routes.get("/", UserController.get_user);
routes.post("/", UserController.create_user)

export default routes;
