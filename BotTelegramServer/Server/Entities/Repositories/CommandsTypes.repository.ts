import CommandsTypes from "../Models/CommandsTypes.model";
import CommandsTypesInterface from "../../Interfaces/CommandTypes.interface";
import { Op } from "sequelize";


class CommandsTypesRepository {
  getAll = async (): Promise<CommandsTypes[]> => {
    const commandsTypes: CommandsTypes[] = await CommandsTypes.findAll({
      where: {
        command_type_id: {
          [Op.notIn]: [5, 6, 12, 13, 10]
        }
      }
    });
    return commandsTypes;
  };
  
  get = async (id: number): Promise<CommandsTypes> => {
    const commandsType: CommandsTypes = await CommandsTypes.findByPk(id);
    return commandsType;
  };
  
  post = async (data: CommandsTypesInterface): Promise<CommandsTypes> => {
    const commandsType: CommandsTypes = await CommandsTypes.create(data);
    return commandsType;
  }

  update = async (id: number, data: CommandsTypesInterface): Promise<CommandsTypes>=>{
    const commandsType: CommandsTypes = await CommandsTypes.findByPk(id);
    commandsType.update(data);
    return commandsType; 
  }

  delete = async (id: number): Promise<void> =>{
    const commandsType: CommandsTypes = await CommandsTypes.findByPk(id);
    commandsType.destroy();
  }
}

export default new CommandsTypesRepository();