import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import BotCommandsInterface from '../Interfaces/BotCommands.interface';
import BotNestedCommands from '../Models/BotNestedCommands.model';
import BotResponses from '../Models/BotResponses.model';
import UserTypes from '../Models/UserTypes.model';
import CommandsTypes from '../Models/CommandsTypes.model';

@Table(
    {
      tableName: "Bot_commands",
      timestamps: true,
    }
  )
class BotCommands extends Model<BotCommands> implements BotCommandsInterface{
    @AutoIncrement
    @PrimaryKey
    @Column(DataTypes.NUMBER)
    bot_command_id?: number
  
    @Column(DataTypes.NUMBER)
    user_type_id!: number;

    @Column(DataTypes.STRING)
    tel_command!: string;
    
    @Column(DataTypes.STRING)
    name!: string;

    @Column(DataTypes.BOOLEAN)
    status!: boolean;

    @Column(DataTypes.STRING)
    description!: string;

    @Column(DataTypes.STRING)
    parameter!: string;

    @CreatedAt
      @Column(DataTypes.DATE)
      createdAt: Date;
    
      @UpdatedAt
      @Column(DataTypes.DATE)
      updatedAt: Date;
}
BotCommands.hasOne(BotNestedCommands,{
    foreignKey:'bot_father_id',
    sourceKey:'bot_command_id'
});
BotCommands.hasOne(BotNestedCommands,{
    foreignKey:'bot_child_id',
    sourceKey:'bot_command_id'
});

BotCommands.hasOne(BotResponses,{
    foreignKey: 'bot_response_id',
    sourceKey: 'bot_command_id'
});

BotCommands.hasMany(UserTypes,{
    foreignKey: 'user_type_id',
    sourceKey: 'user_type_id'
});

BotCommands.hasMany(CommandsTypes,{
    foreignKey: 'command_type_id',
    sourceKey: 'command_type_id'
});


export default BotCommands;