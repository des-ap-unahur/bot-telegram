import { Model, Column, Table, CreatedAt, UpdatedAt, ForeignKey, HasMany, HasOne } from "sequelize-typescript";
import { DataTypes } from 'sequelize';
import PollRolesAccessInterface from '../../Interfaces/PollRolesAccess.interface';
import Roles from "./Roles.model";
import Poll from "./Poll.model";
import { roleRelation, pollRelation } from "../Relations/PollRolesAccess.relation";

@Table(
  {
    tableName: "Polls_roles_access",
    timestamps: true,
  }
)

class PollRolesAccess extends Model<PollRolesAccess> implements PollRolesAccessInterface {

  @ForeignKey(()=> Roles)
  @Column(DataTypes.NUMBER)
  role_id?: number

  @ForeignKey(()=> Poll)
  @Column(DataTypes.NUMBER)
  poll_id?: number

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasOne(() => Roles, roleRelation)
  roles: Roles

  @HasOne(() => Poll, pollRelation)
  poles: Poll
}

export default PollRolesAccess;