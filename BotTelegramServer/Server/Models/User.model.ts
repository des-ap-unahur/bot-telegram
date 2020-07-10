import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import UserInterface from '../Interfaces/User.interface';

@Table(
  {
    tableName: "user",
    timestamps: true,
  }
)

class User extends Model<User> implements UserInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  id?: number

  @Column(DataTypes.STRING)
  username!: string;

  @Column(DataTypes.STRING)
  email!: string;

  @Column(DataTypes.STRING)
  password!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}

export default User;