import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import GuaraniUsersInterface from "../../Interfaces/GuaraniUsers.interface";

@Table({
  tableName: "Guarani_users",
  timestamps: true,
})

class GuaraniUsers extends Model<GuaraniUsers> implements GuaraniUsersInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  dni?: number;

  @Column(DataTypes.STRING)
  email!: string;

  @Column(DataTypes.NUMBER)
  phone_number!: number;
  
  @Column(DataTypes.STRING)
  profile!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}

export default GuaraniUsers;
