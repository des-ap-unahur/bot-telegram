import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasMany, HasOne } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import RolesInterface from "../../Interfaces/Roles.interface";
import PollRolesAccess from "./PollRolesAccess.model";
import UserBackOffice from "./UserBackOffice.model";
import { pollRolesAccessRelation, userBackOfficeRelation } from "../Relations/Roles.relation";

@Table({
  tableName: "Roles",
  timestamps: true,
})

class Roles extends Model<Roles> implements RolesInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey(()=> PollRolesAccess)
  @ForeignKey(()=> UserBackOffice)
  @Column(DataTypes.NUMBER)
  role_id?: number;

  @Column(DataTypes.STRING)
  description!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasMany(() => PollRolesAccess, pollRolesAccessRelation)
  pollRolesAccess: PollRolesAccess

  @HasOne(() => UserBackOffice, userBackOfficeRelation)
  userBackOffice: UserBackOffice
}

export default Roles;
