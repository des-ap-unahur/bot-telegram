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

@Table({
  tableName: "Bot_commands",
  timestamps: true,
})
class BotCommands extends Model<BotCommands> implements BotCommandsInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  bot_command_id?: number;

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

  @HasOne(() => CommandsTypes, {
    sourceKey: "command_type_id",
    foreignKey: "command_type_id",
  })
  commandsTypes: CommandsTypes;
}

export default BotCommands;
