import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import BotNestedCommandsInterface from '../Interfaces/BotNestedCommands.interface';
import BotCommands from '../Models/BotCommands.model';

@Table(
    {
      tableName: "Bot_nested_commands",
      timestamps: true,
    }
  )
class BotNestedCommands extends Model<BotNestedCommands> implements BotNestedCommandsInterface{
    @AutoIncrement
    @PrimaryKey
    @Column(DataTypes.NUMBER)
    bot_father_id?: number
  
    @Column(DataTypes.NUMBER)
    bot_child_id!: number;
  
    @CreatedAt
      @Column(DataTypes.DATE)
      createdAt: Date;
    
      @UpdatedAt
      @Column(DataTypes.DATE)
      updatedAt: Date;
}
BotNestedCommands.hasOne(BotCommands,{
    foreignKey:'bot_father_id',
    sourceKey:'bot_command_id'
});
BotNestedCommands.hasOne(BotCommands,{
    foreignKey:'bot_child_id',
    sourceKey:'bot_command_id'
});


export default BotNestedCommands;