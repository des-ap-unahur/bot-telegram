import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasMany, HasOne } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotNestedCommandsInterface from "../../Interfaces/BotNestedCommands.interface";
import BotCommands from "./BotCommands.model";
import { botCommandChildRelation } from "../Relations/BotNestedCommands.relation";

@Table({
  tableName: "Bot_nested_commands",
  timestamps: true,
})

class BotNestedCommands extends Model<BotNestedCommands> implements BotNestedCommandsInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  bot_nested_command_id?: number;

  @ForeignKey(() => BotCommands)
  @Column(DataTypes.NUMBER)
  bot_father_id?: number;

  @ForeignKey(()  => BotCommands)
  @Column(DataTypes.NUMBER)
  bot_child_id!: number;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasOne(() => BotCommands, botCommandChildRelation)
  botCommand: BotCommands;
}

export default BotNestedCommands;
