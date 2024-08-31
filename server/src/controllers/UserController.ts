import { Request, Response, NextFunction } from "express";
import ApiError from "../helpers/ApiErrors";
import { User } from "../models/UserModel";
import { CreationUserAttributes } from "../types/UserTypes";

class UserController {
  static async get_user(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.log(error);
      return next(ApiError.internal("Server error!"));
    }
  }

  static async user_check(
    req: Request<undefined, undefined, { id: number }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return next(ApiError.notFound("User not found."));
      }
      res.locals.user = user;
      return next();
    } catch (error) {
      console.log(error);
      return next(ApiError.internal("Server error!"));
    }
  }

  static async create_user(
    req: Request<undefined, undefined, CreationUserAttributes>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, login, password } = req.body;
      console.log(req.body);
      if (await User.findOne({ where: { email: email } })) {
        return next(ApiError.conflict("User already exists."));
      }
      const user = await User.create(req.body);
      if (!user) {
        return next(ApiError.internal("User account creation error."));
      }
      return res.json(user);
    } catch (error) {
      console.log(error);
      return next(ApiError.internal("Server error!"));
    }
  }

  static async delete_user(
    req: Request<undefined, undefined, { id: number }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return next(ApiError.notFound("User not found"));
      }
      await user.destroy();
      return res.json({ message: "User deleted." });
    } catch (error) {
      console.log(error);
      return next(ApiError.internal("Server error!"));
    }
  }
}

export default UserController;
