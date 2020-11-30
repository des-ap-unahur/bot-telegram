import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey, HasOne } from "sequelize-typescript";
import { DataTypes } from 'sequelize';
import PollResponsesInterface from '../../Interfaces/PollResponses.interface'
import PollQuestions from './PollQuestions.model'
import BotUsers from "./BotUsers.model";
import { botUserRelation } from "../Relations/PollResponses.relation";

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

  @ForeignKey(() => BotUsers)
  @Column(DataTypes.NUMBER)
  user_id!: number

  @ForeignKey(() => PollQuestions)
  @Column(DataTypes.NUMBER)
  response_id?: number;

  @Column(DataTypes.STRING)
  response!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasOne(() => BotUsers, botUserRelation)
  botUsers: BotUsers[]
}

export default PollResponses;