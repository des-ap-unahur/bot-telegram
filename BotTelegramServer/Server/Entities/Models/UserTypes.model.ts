import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasOne, HasMany } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import UserTypesInterface from "../../Interfaces/UserTypes.interface";
import BotCommands from "./BotCommands.model";
import BotUsers from "./BotUsers.model";

@Table({
  tableName: "User_types",
  timestamps: true,
})

class UserTypes extends Model<UserTypes> implements UserTypesInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey(()=> BotCommands)
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

  @HasMany(() => BotCommands, {
    sourceKey: "user_type_id",
    foreignKey: "user_type_id",
  } )
  botCommand: BotCommands;

  @HasMany( () => BotUsers,{
    sourceKey: "user_type_id",
    foreignKey: "user_type_id",
  } )
  botUsers: BotUsers 
}

export default UserTypes;
