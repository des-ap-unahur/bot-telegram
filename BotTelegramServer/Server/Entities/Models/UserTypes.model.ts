import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasOne, HasMany } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import UserTypesInterface from "../../Interfaces/UserTypes.interface";
import BotCommands from "./BotCommands.model";
import BotUsers from "./BotUsers.model";
import { botCommandRelation, botUsersRelation } from "../Relations/UserTypes.relation";

@Table({
  tableName: "User_types",
  timestamps: true,
})

class UserTypes extends Model<UserTypes> implements UserTypesInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey(() => BotCommands)
  @ForeignKey(() => BotUsers)
  @Column(DataTypes.NUMBER)
  user_type_id?: number;

  @Column(DataTypes.STRING)
  type!: string;

  @Column(DataTypes.STRING)
  description!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasMany(() => BotCommands, botCommandRelation)
  botCommand: BotCommands;

  @HasMany(() => BotUsers, botUsersRelation)
  botUsers: BotUsers 
}

export default UserTypes;
