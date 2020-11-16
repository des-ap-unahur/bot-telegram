import BotNestedCommand from "../Models/BotNestedCommands.model";
import BotNestedCommandInterface from "../../Interfaces/BotNestedCommands.interface";


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

  updateNestedCommands = async (data: BotNestedCommandInterface[]): Promise<any>=>{
   

    
    const nestedCommandsList = await Promise.all(data.map(e=>BotNestedCommand.findByPk(e.bot_nested_command_id)));
    const result =await Promise.all(nestedCommandsList.map(e=>{
      e.bot_child_id= data.find(data=>data.bot_nested_command_id===e.bot_nested_command_id).bot_child_id,
      e.bot_father_id = data.find(data=>data.bot_father_id === e.bot_father_id).bot_father_id
      e.save();
    }));
    return {message:"ok"};
  
    }
  delete = async (id: number): Promise<void> =>{
    const command: BotNestedCommand = await BotNestedCommand.findByPk(id);
    command.destroy();
  }
}

export default new BotNestedCommandRepository();