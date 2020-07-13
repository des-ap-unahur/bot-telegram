import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import PollInterface from '../Interfaces/Poll.interface';
import PollQuestion  from './PollQuestions.model';

@Table(
  {
    tableName: "Poll",
    timestamps: true,
  }
)

class Poll extends Model<Poll> implements PollInterface {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.NUMBER)
  poll_id?: number

  @Column(DataTypes.STRING)
  name!: string;

  @Column(DataTypes.STRING)
  description!: string;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasMany(()=>PollQuestion)
  questions: PollQuestion[]
}

export default Poll;