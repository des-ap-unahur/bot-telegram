import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotResponseFilesInterface from "../../Interfaces/BotResponseFiles.interface";
import BotResponses from "./BotResponses.model";
import { botResponseRelation } from "../Relations/BotResponseFiles.relation";

@Table({
  tableName: "Bot_response_files",
  timestamps: true,
})

class BotResponseFiles extends Model<BotResponseFiles> implements BotResponseFilesInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  bot_respose_files_id?: number;

  @ForeignKey(() => BotResponses)
  @Column(DataTypes.NUMBER)
  bot_response_id?: number;

  @Column(DataTypes.STRING)
  filename!: string;

  @Column(DataTypes.STRING)
  description!: string;

  @Column(DataTypes.STRING)
  url!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @BelongsTo(() => BotResponses, botResponseRelation)
  botResponses: BotResponses
}

export default BotResponseFiles;
