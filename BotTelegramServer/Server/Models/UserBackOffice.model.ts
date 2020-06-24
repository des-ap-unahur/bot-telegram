import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import UserBackOfficeInterface from '../Interfaces/UserBackOffice.interface';
import Roles from '../Models/Roles.model';
@Table(
    {
      tableName: "user",
      timestamps: true,
    }
  )
class UserBackOffice extends Model<UserBackOffice> implements UserBackOfficeInterface{

    @AutoIncrement
    @PrimaryKey
    @Column(DataTypes.NUMBER)
    user_role_id?: number

    @Column(DataTypes.NUMBER)
    back_user_id?: number
  
    @Column(DataTypes.STRING)
    fname!: string;
  
    @Column(DataTypes.STRING)
    lname!: string;

    @Column(DataTypes.STRING)
    email!: string;
  
    @Column(DataTypes.NUMBER)
    telephone!: number;
  
    @CreatedAt
    @Column(DataTypes.DATE)
    createdAt: Date;
  
    @UpdatedAt
    @Column(DataTypes.DATE)
    updatedAt: Date;

}

UserBackOffice.hasMany(Roles,{
  foreignKey:'role_id',
  sourceKey:'user_role_id'
})

export default UserBackOffice;