import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasMany, HasOne } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotNestedCommandsInterface from "../../Interfaces/BotNestedCommands.interface";
import BotCommands from "./BotCommands.model";

@Table({
  tableName: "Bot_nested_commands",
  timestamps: true,
})

class BotNestedCommands extends Model<BotNestedCommands> implements BotNestedCommandsInterface {
  @AutoIncrement
  @PrimaryKey
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

  @HasMany(() => BotCommands, {
    sourceKey: "bot_child_id",
    foreignKey: "bot_command_id",
  })
  botCommand: BotCommands;
}


export default BotNestedCommands;
