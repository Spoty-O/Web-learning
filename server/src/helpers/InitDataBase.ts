import { ModelCtor } from "sequelize-typescript";
import { User } from "../models/UserModel";
import DataBaseController from "../controllers/DataBaseController";
import dotenv from "dotenv";
import { Task } from "../models/TaskModel";
dotenv.config();

async function databaseInitialize() {
  let models_init: string[] | ModelCtor[] | undefined = [User, Task];
  console.log(models_init);
  const DBController = new DataBaseController(models_init);
  try {
    await DBController.connectDB();
    await DBController.sequelize.sync({ force: true });
    const users = await User.bulkCreate([
      { email: "ofdff", login: "dfdf", password: "dadadaf" },
      { email: "ofdfadadadadf", login: "dfdf", password: "dadadaf" },
    ]);
    for (const user of users) {
      await Task.create({ name: "Okay", text: "Go to shop", userId: user.id });
    }
    await DBController.disconnectDB();
  } catch (error) {
    console.log(error);
    await DBController.disconnectDB();
  }
}
databaseInitialize();
