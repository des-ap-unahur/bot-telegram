import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasOne, HasMany } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotResponsesInterface from "../../Interfaces/BotResponses.interface";
import BotNestedCommands from "./BotNestedCommands.model";
import BotCommands from "./BotCommands.model";
import BotResponseFiles from "./BotResponseFiles.model";

@Table({
  tableName: "Bot_responses",
  timestamps: true,
})

class BotResponses extends Model<BotResponses>
  implements BotResponsesInterface {
  @AutoIncrement 
  @PrimaryKey
  @ForeignKey( () => BotResponseFiles)
  @Column(DataTypes.NUMBER)
  bot_response_id?: number;

  @ForeignKey( () => BotCommands)
  @Column(DataTypes.NUMBER)
  bot_id?: number;

  @Column(DataTypes.STRING)
  response!: string;

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

  @HasMany( () => BotCommands, {
    sourceKey: "bot_id",
    foreignKey: "bot_command_id",
  })
  botCommand: BotCommands[]

  @HasOne( () => BotResponseFiles,{
    sourceKey:"bot_response_id",
    foreignKey:"bot_response_id",
  })
  botResponseFiles: BotResponseFiles
}

export default BotResponses;
