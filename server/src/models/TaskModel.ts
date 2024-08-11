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
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { ITaskAttributes, ITaskCreationAttributes } from "../types/TaskTypes";
import { User } from "./UserModel";

@Table({
  timestamps: false,
})
export class Task extends Model<ITaskAttributes, ITaskCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  name!: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  text!: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => User, { foreignKey: "userId" })
  user!: User;
}
