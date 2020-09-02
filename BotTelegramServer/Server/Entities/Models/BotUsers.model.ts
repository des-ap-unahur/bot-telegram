import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, HasOne, ForeignKey, HasMany, BelongsTo } from "sequelize-typescript";
import { DataTypes, Association } from "sequelize";
import BotUsersInterface from "../../Interfaces/BotUsers.interface";
import BotSubsUsers from "./BotSubsUsers.model";
import UserTypes from "./UserTypes.model";
import PollResponses from "./PollResponses.model";

@Table({
  tableName: "Bot_users",
  timestamps: true,
})

class BotUsers extends Model<BotUsers> implements BotUsersInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey( ()=> PollResponses)
  @Column(DataTypes.NUMBER)
  bot_user_id?: number;

  @ForeignKey( ()=> UserTypes)
  @ForeignKey( ()=> BotSubsUsers)
  @Column(DataTypes.NUMBER)
  user_type_id!: number;

  @Column(DataTypes.NUMBER)
  tel_user_id!: number;

  @Column(DataTypes.STRING)
  tel_lname!: string;

  @Column(DataTypes.STRING)
  tel_lfname!: string;

  @Column(DataTypes.STRING)
  tel_username!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @BelongsTo(() => UserTypes)
  userTypes: UserTypes

  @HasOne(()=>BotSubsUsers)
  botSubUsers: BotSubsUsers

  @HasMany (() => PollResponses)
  pollResposes:PollResponses[] 
}

export default BotUsers;
