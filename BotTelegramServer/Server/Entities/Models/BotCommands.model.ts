import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  HasMany,
  ForeignKey,
  HasOne,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotCommandsInterface from "../../Interfaces/BotCommands.interface";
import CommandsTypes from "./CommandsTypes.model";
import BotNestedCommands from "./BotNestedCommands.model";
import UserTypes from "./UserTypes.model";
import BotResponses from "./BotResponses.model";
import { 
  botNestedCommandFatherRelation,
  botNestedChildrenCommandRelation,
  commandTypeRelation,
  userTypeRelation,
  botResponsesRelation
} from "../Relations/BotCommands.relation";

@Table({
  tableName: "Bot_commands",
  timestamps: true,
})

class BotCommands extends Model<BotCommands> implements BotCommandsInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey(()  => BotNestedCommands)
  @ForeignKey(() => BotResponses)
  @Column(DataTypes.NUMBER)
  bot_command_id?: number;

  @ForeignKey(() => UserTypes)
  @Column(DataTypes.NUMBER)
  user_type_id!: number;

  @Column(DataTypes.STRING)
  tel_command!: string;

  @ForeignKey(() => CommandsTypes)
  @Column(DataTypes.NUMBER)
  command_type_id!: number;

  @Column(DataTypes.STRING)
  name!: string;

  @Column(DataTypes.BOOLEAN)
  status!: boolean;

  @Column(DataTypes.STRING)
  description!: string;

  @Column(DataTypes.STRING)
  parameter!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasOne(() => CommandsTypes, commandTypeRelation)
  commandsTypes: CommandsTypes;

  @HasOne(() => BotNestedCommands, botNestedChildrenCommandRelation)
  botNestedCommands: BotNestedCommands;

  @HasOne(() => BotNestedCommands, botNestedCommandFatherRelation)
  botNestedCommand: BotNestedCommands;
  
  @HasOne(() => UserTypes, userTypeRelation)
  userTypes: UserTypes;

  @HasOne(() => BotResponses, botResponsesRelation)
  botResponses: BotResponses;

}

export default BotCommands;
