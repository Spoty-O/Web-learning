import { Router } from "express";
import TaskController from "../controllers/TaskController";

const routes = Router();

routes.get("/", TaskController.get_task);
// routes.post("/", TaskController)
// routes.patch()
// routes.delete()

export default routes;
