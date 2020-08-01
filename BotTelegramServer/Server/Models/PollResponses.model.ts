import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey } from "sequelize-typescript";
import { DataTypes } from 'sequelize';
import PollResponsesInterface from '../Interfaces/PollResponses.interface'
import PollQuestions from './PollQuestions.model'


@Table(
  {
    tableName: "Poll_responses",
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

  @ForeignKey(() => PollQuestions)
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

export default PollResponses;