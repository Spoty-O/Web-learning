import { Request, Response, NextFunction } from "express";
import ApiError from "../helpers/ApiErrors";
import { Task } from "../models/TaskModel";
import { ITaskCreationAttributes } from "../types/TaskTypes";

class TaskController {
  static async get_task(
    req: Request<undefined, undefined, { id: number }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.body;
      const task = await Task.findByPk(id);
      if (!task) {
        return next(ApiError.notFound("Task not found."));
      }
      return res.json(task);
    } catch (error) {
      console.log(error);
      return next(ApiError.internal("Server error!"));
    }
  }

  //   static async create_task(
  //     req: Request<undefined, undefined, CreationUserAttributes>,
  //     res: Response,
  //     next: NextFunction
  //   ) {
  //     try {
  //       const { email, login, password } = req.body;
  //       console.log(req.body);
  //       if (await User.findOne({ where: { email: email } })) {
  //         return next(ApiError.conflict("User already exists."));
  //       }
  //       const user = await User.create(req.body);
  //       if (!user) {
  //         return next(ApiError.internal("User account creation error."));
  //       }
  //       return res.json(user);
  //     } catch (error) {
  //       console.log(error);
  //       return next(ApiError.internal("Server error!"));
  //     }
  //   }
}

export default TaskController;
