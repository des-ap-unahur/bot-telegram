import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  HasOne,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";

import { DataTypes } from "sequelize";
import CommandTypesInterface from "../Interfaces/CommandTypes.interface";
import BotCommands from "./BotCommands.model";

@Table({
  tableName: "Command_types",
  timestamps: true,
})
class CommandTypes extends Model<CommandTypes>
  implements CommandTypesInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey(() => BotCommands)
  @Column(DataTypes.NUMBER)
  command_type_id?: number;

  @Column(DataTypes.STRING)
  type!: string;

  @Column(DataTypes.STRING)
  description!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasMany(() => BotCommands, {
    sourceKey: "command_type_id",
    foreignKey: "command_type_id",
  })
  botCommand: BotCommands;
}

export default CommandTypes;
