import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import BotResponsesInterface from '../Interfaces/BotResponses.interface';
import BotResponseFiles from '../Models/BotResponseFiles.model';
import BotCommands from '/Models/BotCommands.model';
@Table(
    {
      tableName: "Bot_responses",
      timestamps: true,
    }
  )
class BotResponses extends Model<BotResponses> implements BotResponsesInterface{
    @AutoIncrement
    @PrimaryKey
    @Column(DataTypes.NUMBER)
    bot_id?: number
  
    @Column(DataTypes.STRING)
    response!: string;
  
    @Column(DataTypes.STRING)
    description!: string;

    @CreatedAt
      @Column(DataTypes.DATE)
      createdAt: Date;
    
      @UpdatedAt
      @Column(DataTypes.DATE)
      updatedAt: Date;
}
BotResponses.hasOne(BotCommands,{
    foreignKey:'bot_command_id',
    sourceKey:'bot_response_id'
});

BotResponses.hasOne(BotResponseFiles,{
    foreignKey: 'bot_response_id',
    sourceKey: 'bot_response_id'
})

export default BotResponses;