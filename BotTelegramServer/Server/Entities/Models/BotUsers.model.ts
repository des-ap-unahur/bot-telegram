import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, HasOne, ForeignKey, HasMany, BelongsTo } from "sequelize-typescript";
import { DataTypes, Association } from "sequelize";
import BotUsersInterface from "../../Interfaces/BotUsers.interface";
import BotSubsUsers from "./BotSubsUsers.model";
import UserTypes from "./UserTypes.model";
import PollResponses from "./PollResponses.model";
import GuaraniUsers from "./GuaraniUsers.models";
import { guaraniUserRelation } from "../Relations/BotUsers.relation";

@Table({
  tableName: "Bot_users",
  timestamps: true,
})

class BotUsers extends Model<BotUsers> implements BotUsersInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey(() => PollResponses)
  @Column(DataTypes.NUMBER)
  bot_user_id?: number;

  @ForeignKey(() => UserTypes)
  @ForeignKey(() => BotSubsUsers)
  @Column(DataTypes.NUMBER)
  user_type_id!: number;

  @ForeignKey(() => GuaraniUsers)
  @Column(DataTypes.NUMBER)
  guarani_user_id!: number;

  @Column(DataTypes.NUMBER)
  tel_user_id!: number;

  @Column(DataTypes.STRING)
  tel_last_name!: string;

  @Column(DataTypes.STRING)
  tel_first_name!: string;

  @Column(DataTypes.STRING)
  tel_username!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasOne(() => UserTypes)
  userTypes: UserTypes

  @HasOne(() => GuaraniUsers, guaraniUserRelation)
  guaraniUser: GuaraniUsers

  @HasOne(() => BotSubsUsers)
  botSubUsers: BotSubsUsers

  @HasMany (() => PollResponses)
  pollResposes:PollResponses[] 
}

export default BotUsers;
