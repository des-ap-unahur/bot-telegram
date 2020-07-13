import BotCommand from "../Models/BotCommands.model";
import BotCommandInterface from "../Interfaces/BotCommands.interface";

class BotCommandRepository {
  getAll = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll();
    return commands;
  };
  
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
