import { Model, Column, Table, CreatedAt, UpdatedAt, ForeignKey, HasMany } from "sequelize-typescript";
import { DataTypes } from 'sequelize';
import PollRolesAccessInterface from '../../Interfaces/PollRolesAccess.interface';
import Roles from "./Roles.model";
import Poll from "./Poll.model";

@Table(
  {
    tableName: "Poll_roles_access",
    timestamps: true,
  }
)

class PollRolesAccess extends Model<PollRolesAccess> implements PollRolesAccessInterface {

  @ForeignKey( ()=> Roles)
  @Column(DataTypes.NUMBER)
  role_id?: number

  @ForeignKey( ()=> Poll)
  @Column(DataTypes.NUMBER)
  poll_id?: number

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasMany( ()=> Roles,{
  sourceKey:"role_id",
  foreignKey:"role_id",
  })
  roles: Roles

  @HasMany( ()=> Poll,{
    sourceKey:"poll_id",
    foreignKey:"poll_id",
    })
    poles: Poll
}

export default PollRolesAccess;