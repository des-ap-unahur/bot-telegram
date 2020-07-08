import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import PollQuestionInterface from '../Interfaces/PollQuestion.interface'
import Poll from './Poll.model'
import PollResponses from './PollResponses.model';

@Table(
  {
    tableName: "Poll_question",
    timestamps: true,
  }
)

class PollQuestion extends Model<PollQuestion> implements PollQuestionInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  poll_question_id?: number

  @Column(DataTypes.NUMBER)
  poll_id!: number

  @Column(DataTypes.STRING)
  question!: string;

  @Column(DataTypes.STRING)
  description!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;
}

PollQuestion.hasOne(Poll,{
  foreignKey:'poll_id',
  sourceKey: 'poll_id'
})

PollQuestion.hasMany(PollResponses,{
  foreignKey:'response_id',
  sourceKey:'poll_question_id'
})

export default PollQuestion;