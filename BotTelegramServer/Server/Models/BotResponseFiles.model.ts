import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotResponseFilesInterface from "../Interfaces/BotResponseFiles.interface";
import BotResponses from "./BotResponses.model";

@Table({
  tableName: "Bot_responses_files",
  timestamps: true,
})
class BotResponseFiles extends Model<BotResponseFiles> implements BotResponseFilesInterface {
  @AutoIncrement
  @PrimaryKey
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
}

export default BotResponseFiles;
