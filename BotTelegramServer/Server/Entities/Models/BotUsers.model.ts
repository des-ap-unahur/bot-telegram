import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, HasOne } from "sequelize-typescript";
import { DataTypes, Association } from "sequelize";
import BotUsersInterface from "../../Interfaces/BotUsers.interface";
import BotSubsUsers from "./BotSubsUsers.model";

@Table({
  tableName: "Bot_users",
  timestamps: true,
})

class BotUsers extends Model<BotUsers> implements BotUsersInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  bot_user_id?: number;

  @Column(DataTypes.STRING)
  user_type_id!: number;

  @Column(DataTypes.NUMBER)
  tel_user_id!: number;

  @Column(DataTypes.STRING)
  tel_lname!: string;

  @Column(DataTypes.STRING)
  tel_fname!: string;

  @Column(DataTypes.STRING)
  tel_username!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasOne(()=>BotSubsUsers)
  botSubUsers: BotSubsUsers
}

export default BotUsers;
