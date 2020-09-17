import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, HasMany, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import PollInterface from '../../Interfaces/Poll.interface';
import PollQuestion  from './PollQuestions.model';
import PollRolesAccess from './PollRolesAccess.model';

@Table(
  {
    tableName: "Poll",
    timestamps: true,
  }
)

class Poll extends Model<Poll> implements PollInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey( ()=> PollRolesAccess)
  @Column(DataTypes.NUMBER)
  poll_id?: number

  @Column(DataTypes.STRING)
  name!: string;

  @Column(DataTypes.STRING)
  description!: string;

  @Column(DataTypes.NUMBER)
  user_type_id: number;
  
  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasMany(()=>PollQuestion)
  questions: PollQuestion[]

  @HasMany(()=>PollRolesAccess)
  pollRolesAccess: PollRolesAccess[]
}

export default Poll;