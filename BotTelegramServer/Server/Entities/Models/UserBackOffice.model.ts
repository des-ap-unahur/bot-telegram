import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, HasMany, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import UserBackOfficeInterface from '../../Interfaces/UserBackOffice.interface';
import Roles from './Roles.model';

@Table(
  {
    tableName: "Backoffice_user",
    timestamps: true,
  }
)

class UserBackOffice extends Model<UserBackOffice> implements UserBackOfficeInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  back_user_id?: number

  @ForeignKey( ()=> Roles)
  @Column(DataTypes.NUMBER)
  user_role_id?: number

  @Column(DataTypes.STRING)
  fname!: string;

  @Column(DataTypes.STRING)
  lname!: string;

  @Column(DataTypes.STRING)
  email!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasMany( ()=> Roles)
  roles: Roles[]
}

export default UserBackOffice;