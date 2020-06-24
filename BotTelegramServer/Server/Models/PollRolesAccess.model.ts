import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey } from 'sequelize-typescript';
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
 PollRolesAccess.hasOne(Roles,{
     foreignKey:'roles_id',
     sourceKey: 'roles_id'
 });
 
 PollRolesAccess.hasOne(Poll,{
     foreignKey: 'poll_id',
     sourceKey: 'poll_id'
 })



  export default PollRolesAccess;