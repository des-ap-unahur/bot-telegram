import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  HasMany,
  ForeignKey,
  HasOne,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import BotCommandsInterface from "../../Interfaces/BotCommands.interface";
import CommandsTypes from "./CommandsTypes.model";
import BotNestedCommands from "./BotNestedCommands.model";
import UserTypes from "./UserTypes.model";
import BotResponses from "./BotResponses.model";

@Table({
  tableName: "Bot_commands",
  timestamps: true,
})
class BotCommands extends Model<BotCommands> implements BotCommandsInterface {
  @AutoIncrement
  @PrimaryKey
  @ForeignKey(()  => BotNestedCommands)
  @ForeignKey( () => BotResponses)
  @Column(DataTypes.NUMBER)
  bot_command_id?: number;

  @ForeignKey(() => UserTypes)
  @Column(DataTypes.NUMBER)
  user_type_id!: number;

  @Column(DataTypes.STRING)
  tel_command!: string;

  @ForeignKey(() => CommandsTypes)
  @Column(DataTypes.NUMBER)
  command_type_id!: number;

  @Column(DataTypes.STRING)
  name!: string;

  @Column(DataTypes.BOOLEAN)
  status!: boolean;

  @CreatedAt
  @Column(DataTypes.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataTypes.DATE)
  updatedAt: Date;

  @HasOne(() => CommandsTypes, {
    sourceKey: "command_type_id",
    foreignKey: "command_type_id",
  })
  commandsTypes: CommandsTypes;

  @HasOne(()  =>  BotResponses,{
    sourceKey: "bot_command_id",
    foreignKey: "bot_id",
  })
  botResponses: BotResponses;

  //comentado hasta aclararsu funcion
  // @HasOne(()  =>  BotNestedCommands,{
  //   sourceKey: "bot_command_id",
  //   foreignKey: "bot_child_id",
  // })
  // botNestedCommands: BotNestedCommands;

  @HasOne(()  =>  BotNestedCommands,{
    sourceKey: "bot_command_id",
    foreignKey: "bot_father_id",
  })
  botNestedCommands: BotNestedCommands;
  
  @HasOne(()  =>  UserTypes,{
    sourceKey: "user_type_id",
    foreignKey: "user_type_id",
  })
  userTypes: UserTypes;



}

export default BotCommands;
