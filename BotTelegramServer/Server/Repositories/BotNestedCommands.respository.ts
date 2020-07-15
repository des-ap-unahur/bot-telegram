import BotNestedCommand from "../Models/BotNestedCommands.model";
import BotNestedCommandInterface from "../Interfaces/BotNestedCommands.interface";

class BotNestedCommandRepository {
  getAll = async (): Promise<BotNestedCommand[]> => {
    const commands: BotNestedCommand[] = await BotNestedCommand.findAll();
    return commands;
  };
  
  get = async (id: number): Promise<BotNestedCommand> => {
    const command: BotNestedCommand = await BotNestedCommand.findByPk(id);
    return command;
  };
  
  post = async (data: BotNestedCommandInterface): Promise<BotNestedCommand> => {
    const command: BotNestedCommand = await BotNestedCommand.create(data);
    return command;
  }

  update = async (id: number, data: BotNestedCommandInterface): Promise<BotNestedCommand>=>{
    const command: BotNestedCommand = await BotNestedCommand.findByPk(id);
    command.update(data);
    return command;
  }

  delete = async (id: number): Promise<void> =>{
    const command: BotNestedCommand = await BotNestedCommand.findByPk(id);
    command.destroy();
  }
}

export default new BotNestedCommandRepository();