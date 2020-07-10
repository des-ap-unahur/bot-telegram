import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, ForeignKey } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import PollQuestionInterface from "../Interfaces/PollQuestion.interface";
import Poll from "./Poll.model";

@Table({
  tableName: "Poll_question",
  timestamps: true,
})

class PollQuestion extends Model<PollQuestion>
  implements PollQuestionInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  poll_question_id?: number;

  @ForeignKey(() => Poll)
  @Column(DataTypes.NUMBER)
  poll_id!: number;

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

export default PollQuestion;
