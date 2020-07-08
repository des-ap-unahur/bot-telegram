import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import BotUsersInterface from '../Interfaces/BotUsers.interface';
import PollResponses from './PollResponses.model';
import BotSubsUsers from './BotSubsUsers.model';

@Table(
  {
    tableName: "Bot_users",
    timestamps: true,
  }
)

class BotUsers extends Model<BotUsers> implements BotUsersInterface{
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  bot_user_id?: number

  @Column(DataTypes.STRING)
  user_type_id!: number;

  @Column(DataTypes.NUMBER)
  tel_user_id!: number;

  @Column(DataTypes.STRING)
  tel_lname!: string;

  @Column(DataTypes.STRING)
  tel_fname!: string;

  @Column(DataTypes.STRING)
  tel_username!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}

BotUsers.hasMany(PollResponses,{
  foreignKey:'user_id',
  sourceKey:'user_type_id'
});

BotUsers.hasOne(BotSubsUsers,{
  foreignKey: 'user_id',
  sourceKey: 'bot_user_id'
})


export default BotUsers;