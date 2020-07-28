import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import UserTypesInterface from "../Interfaces/UserTypes.interface";

@Table({
  tableName: "User_types",
  timestamps: true,
})

class UserTypes extends Model<UserTypes> implements UserTypesInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  user_type_id?: number;

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

export default UserTypes;
