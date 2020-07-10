import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import CommandTypesInterface from "../Interfaces/CommandTypes.interface";

@Table({
  tableName: "Command_types",
  timestamps: true,
})

class CommandTypes extends Model<CommandTypes>
  implements CommandTypesInterface {
  @AutoIncrement
  @PrimaryKey
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
}

export default CommandTypes;
