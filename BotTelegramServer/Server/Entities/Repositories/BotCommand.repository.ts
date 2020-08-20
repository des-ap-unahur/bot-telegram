import BotCommand from "../Models/BotCommands.model";
import BotCommandInterface from "../../Interfaces/BotCommands.interface";
import CommandTypes from '../Models/CommandsTypes.model';


class BotCommandRepository {
  getAll = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll();
    return commands;
  };

  getCommandsTypes = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll({include:[CommandTypes]});
    return commands;
  }

  getCommandsTypesById = async (id:number): Promise<BotCommand> => {
    const commands: BotCommand = await BotCommand.findByPk(id,{include:[CommandTypes]});
    return commands;
  }

  get = async (id: number): Promise<BotCommand> => {
    const command: BotCommand = await BotCommand.findByPk(id);
    return command;
  };
  
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
