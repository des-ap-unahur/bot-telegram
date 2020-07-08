import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import UserTypesInterface from '../Interfaces/UserTypes.interface';
import BotCommand from './BotCommands.model';


@Table(
  {
    tableName: "Bot_commands",
    timestamps: true,
  }
)

class UserTypes extends Model<UserTypes> implements UserTypesInterface{
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  user_type_id?: number

  @Column(DataTypes.STRING)
  type!: string;

  @Column(DataTypes.STRING)
  description!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}


UserTypes.hasOne(BotCommand,{
  foreignKey: 'user_type_id',
  sourceKey: 'user_type_id'
})


export default UserTypes;