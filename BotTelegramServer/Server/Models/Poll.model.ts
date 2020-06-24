import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import PollInterface from '../Interfaces/Poll.interface';
import PollQuestion  from '../Models/PollQuestion.model';
import PollRolesAcces from '../Models/PollRolesAccess.model';
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
}


Poll.hasMany(PollQuestion, {
  sourceKey: 'poll_id',
  foreignKey: 'poll_id',
  
});
Poll.hasOne(PollRolesAcces,{
  foreignKey:'poll_id',
  sourceKey: 'poll_id'
});


  export default Poll;