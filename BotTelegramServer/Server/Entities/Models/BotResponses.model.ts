import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasOne } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotResponsesInterface from "../../Interfaces/BotResponses.interface";
import BotCommands from "./BotCommands.model";
import BotResponseFiles from "./BotResponseFiles.model";
import { botCommandRelation, botResponseFileRelation } from "../Relations/BotResponses.relation";

@Table({
  tableName: "Bot_responses",
  timestamps: true,
})

class BotResponses extends Model<BotResponses>
  implements BotResponsesInterface {
  @AutoIncrement 
  @PrimaryKey
  @ForeignKey(() => BotResponseFiles)
  @Column(DataTypes.NUMBER)
  bot_response_id?: number;

  @ForeignKey(() => BotCommands)
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

  @HasOne(() => BotCommands, botCommandRelation)
  botCommand: BotCommands

  @HasOne(() => BotResponseFiles, botResponseFileRelation)
  botResponseFiles: BotResponseFiles
}

export default BotResponses;
