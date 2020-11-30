import CommandsTypesRepository from '../Entities/Repositories/CommandsTypes.repository';
import CommandsTypes from '../Entities/Models/CommandsTypes.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class CommandsTypesController {
  getCommandsTypes = async (req: any, res: any): Promise<void> => {
    const commandsTypes: CommandsTypes[] = await CommandsTypesRepository.getAll();
    res.send(commandsTypes);
  };

  getCommandTypeById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const commandType: CommandsTypes = await CommandsTypesRepository.get(id);
    notFoundValidator(res, commandType);
  };

  postCommandType = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    const commandType: CommandsTypes = await CommandsTypesRepository.post(body);
    res.send(commandType);
  };

  updateCommandType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const commandType: CommandsTypes = await CommandsTypesRepository.update(id, body);
    res.send(commandType);
  };

  deleteCommandType = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    await execDelete(res, async () => {
      await CommandsTypesRepository.delete(id);
    })
  };
}

export default new CommandsTypesController();
