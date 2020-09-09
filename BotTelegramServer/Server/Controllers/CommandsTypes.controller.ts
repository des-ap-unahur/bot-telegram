import CommandsTypesRepository from '../Entities/Repositories/CommandsTypes.repository';
import CommandsTypes from '../Entities/Models/CommandsTypes.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class CommandsTypesController {
  getCommandsTypes = async (req: any, res: any): Promise<void> => {
    const CommandsTypes: CommandsTypes[] = await CommandsTypesRepository.getAll();
    res.send(CommandsTypes);
  };

  getCommandTypeById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const CommandType: CommandsTypes = await CommandsTypesRepository.get(id);
    res.send(CommandType);
  };

  postCommandType = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    const CommandType: CommandsTypes = await CommandsTypesRepository.post(body);
    res.send(CommandType);
  };

  updateCommandType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const CommandType: CommandsTypes = await CommandsTypesRepository.update(id, body);
    res.send(CommandType);
  };

  deleteCommandType = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    await CommandsTypesRepository.delete(id);
    res.sendStatus(HttpStatus.OK);
  };
}

export default new CommandsTypesController();
