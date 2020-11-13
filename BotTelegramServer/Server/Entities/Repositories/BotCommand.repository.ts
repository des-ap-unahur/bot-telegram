import BotCommand from "../Models/BotCommands.model";
import BotCommandInterface from "../../Interfaces/BotCommands.interface";
import CommandTypes from '../Models/CommandsTypes.model';
import BotResponses from "../Models/BotResponses.model";
import BotResponseFiles from "../Models/BotResponseFiles.model";
import BotNestedCommands from "../Models/BotNestedCommands.model";
import UserTypes from "../Models/UserTypes.model";
import paginate from "../../Utils/Paginate.utils";


class BotCommandRepository {
  getAll = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll({ include: [CommandTypes,UserTypes,BotNestedCommands,{ model:BotResponses,include:[BotResponseFiles] }] });
    return commands;
  }

  getCommandWithAllRelationsFilteredByStatus = async (): Promise<BotCommand[]> => {
    const commands: BotCommand [] = await BotCommand.findAll({ 
      include: [CommandTypes,UserTypes, {model: BotNestedCommands, include: [BotCommand]},{ model:BotResponses,include:[BotResponseFiles]}],where:{status:true}});
      console.log(commands)
    return commands;
  }

  getCommandWithAllRelation = async (): Promise<BotCommand[]> => {
    const commands: BotCommand [] = await BotCommand.findAll({ 
      include: [CommandTypes,UserTypes, {model: BotNestedCommands, include: [BotCommand]},{ model:BotResponses,include:[BotResponseFiles]}],
    });
    return commands;
  }
  
  getCommandWithAllRelationPagination = async (paginationData: any): Promise<any> => {
    const { count, rows: botCommands } = await BotCommand.findAndCountAll({ 
      include: [CommandTypes,UserTypes, {model: BotNestedCommands, include: [BotCommand]},{ model:BotResponses,include:[BotResponseFiles]}],
      ...paginate(paginationData)
    });
    const total = count;

    return { total , botCommands};
  }

  getCommandsTypes = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll( { include:[CommandTypes]} );
    return commands;
  }

  getCommandsTypesById = async (id:number): Promise<BotCommand> => {
    const commands: BotCommand = await BotCommand.findByPk(id,{include:[CommandTypes]});
    return commands;
  }

  get = async (id: number): Promise<BotCommand> => {
    const command: BotCommand = await BotCommand.findByPk(id);
    return command;
  }
  
  post = async (data: BotCommandInterface): Promise<BotCommand> => {
    const command: BotCommand = await BotCommand.create(data);
    return command;
  }

  update = async (id: number, data: BotCommandInterface): Promise<BotCommand>=>{
    const command: BotCommand = await BotCommand.findByPk(id);
    command.update(data);
    return command;
  }

  delete = async (id: number): Promise<void> =>{
    const command: BotCommand = await BotCommand.findByPk(id);
    command.destroy();
  }
}

export default new BotCommandRepository();
