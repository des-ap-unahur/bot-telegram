import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import BotSubsUsersInterface from '../Interfaces/BotSubsUsers.interface';
import BotUsers from '../Models/BotUsers.model';

@Table(
  {
    tableName: "Bot_susc_users",
    timestamps: true,
  }
)

class BotSubsUsers extends Model<BotSubsUsers> implements BotSubsUsersInterface{
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  user_id?: number

  @Column(DataTypes.STRING)
  dni!: number;

  @Column(DataTypes.STRING)
  fname!: string;

  @Column(DataTypes.STRING)
  lname!: string;

  @Column(DataTypes.DATE)
  date_suscribe!: Date;

  @Column(DataTypes.BOOLEAN)
  verified!: boolean;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}

BotSubsUsers.hasOne(BotUsers,{
  foreignKey:'bot_user_id',
  sourceKey:'user_id'
});


export default BotSubsUsers;