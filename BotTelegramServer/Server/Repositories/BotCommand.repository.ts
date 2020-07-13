import BotCommand from "../Models/BotCommands.model";
import BotCommandInterface from "../Interfaces/BotCommands.interface";

class BotCommandRepository {
  getAll = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll();
    return commands;
  };
  
  get = async (id: number): Promise<BotCommand> => {
    const commands: BotCommand = await BotCommand.findByPk(id);
    return commands;
  };
  
  post = async (data: BotCommandInterface): Promise<BotCommand> => {
    const command: BotCommand = await BotCommand.create(data);
    return command;
  }

  update = async (data: BotCommandInterface): Promise<void>=>{
    const command: BotCommand = await BotCommand.findByPk(data.bot_command_id);
    command.update(data);
  }

  delete = async (id: number): Promise<void> =>{
    const command: BotCommand = await BotCommand.findByPk(id);
    command.destroy();
  }
}

export default new BotCommandRepository();
