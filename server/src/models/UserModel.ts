import {
  AllowNull,
  Column,
  HasMany,
  Model,
  Table,
  DataType,
  PrimaryKey,
  Default,
  Unique,
  BeforeSave,
  AutoIncrement,
} from "sequelize-typescript";
import { CreationUserAttributes, UserAttributes } from "../types/UserTypes";
import { Task } from "./TaskModel";
import {
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
} from "sequelize";

@Table({
  timestamps: false,
})
export class User extends Model<UserAttributes, CreationUserAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  login!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(100))
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @HasMany(() => Task, { onDelete: "CASCADE", sourceKey: "id" })
  tasks!: Task[];

  // declare createTask: HasManyCreateAssociationMixin<Task>;
  // declare getTask: HasManyGetAssociationsMixin<Task>;
}
