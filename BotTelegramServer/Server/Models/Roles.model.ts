import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import RolesInterface from '../Interfaces/Roles.interface';
import UserBackOffice from '../Models/UserBackOffice.model';
import PollRolesAccess from '../Models/PollRolesAccess.model';

@Table(
    {
      tableName: "Roles",
      timestamps: true,
    }
  )
class Roles extends Model<Roles> implements RolesInterface {
    @AutoIncrement
    @PrimaryKey
    @Column(DataTypes.NUMBER)
    role_id?: number
  
    @Column(DataTypes.STRING)
    description!: string;
  
    @CreatedAt
    @Column(DataTypes.DATE)
    createdAt: Date;
  
    @UpdatedAt
    @Column(DataTypes.DATE)
    updatedAt: Date;

}

Roles.hasOne(UserBackOffice,{
    foreignKey: 'user_role_id',
    sourceKey:'role_id'
});
Roles.hasOne(PollRolesAccess,{
    foreignKey:'role_id',
    sourceKey:'role_id'
});

export default Roles;
