import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { DataTypes } from 'sequelize';
import PollRolesAccessInterface from '../Interfaces/PollRolesAccess.interface';
import Roles from './Roles.model';
import Poll from './Poll.model';

@Table(
  {
    tableName: "Poll_roles_access",
    timestamps: true,
  }
)
class PollRolesAccess extends Model<PollRolesAccess> implements PollRolesAccessInterface {

  @Column(DataTypes.NUMBER)
  role_id?: number

  @Column(DataTypes.NUMBER)
  poll_id?: number

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}



  export default PollRolesAccess;