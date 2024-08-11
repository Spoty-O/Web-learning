import { Router } from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";
const routes = Router();

routes.use("/user", userRoutes);
routes.use("/task", taskRoutes);

export default routes;
