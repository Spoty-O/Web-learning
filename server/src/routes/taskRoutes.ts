import { Router } from "express";
import TaskController from "../controllers/TaskController";
import UserController from "../controllers/UserController";

const routes = Router();

routes.get("/", TaskController.get_task);
routes.get("/all", UserController.user_check, TaskController.get_tasks)
// routes.post("/", TaskController)
// routes.patch()
// routes.delete()

export default routes;
