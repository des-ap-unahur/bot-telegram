import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import PollResponsesInterface from '../Interfaces/PollResponses.interface'
import PollQuestion from './PollQuestion.model'
import BotUsers from './BotUsers.model';

@Table(
  {
    tableName: "Poll_response",
    timestamps: true,
  }
)

class PollResponses extends Model<PollResponses> implements PollResponsesInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  poll_response_id?: number

 
  @Column(DataTypes.NUMBER)
  user_id!: number

  @Column(DataTypes.STRING)
  response_id!: number;

  @Column(DataTypes.STRING)
  response!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}

PollResponses.hasMany(PollQuestion,{
  foreignKey:'poll_question_id',
  sourceKey: 'response_id'
});

PollResponses.hasMany(BotUsers,{
  foreignKey:'user_type_id',
  sourceKey:'user_id'
});

export default PollResponses;