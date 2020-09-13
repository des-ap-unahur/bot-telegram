import CommandsTypesRepository from '../Entities/Repositories/CommandsTypes.repository';
import CommandsTypes from '../Entities/Models/CommandsTypes.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class CommandsTypesController {
  getCommandsTypes = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const CommandsTypes: CommandsTypes[] = await CommandsTypesRepository.getAll();
      res.send(CommandsTypes);
=======
    const commandsTypes: CommandsTypes[] = await CommandsTypesRepository.getAll();
    res.send(commandsTypes);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getCommandTypeById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const CommandType: CommandsTypes = await CommandsTypesRepository.get(id);
      res.send(CommandType);
=======

    const commandType: CommandsTypes = await CommandsTypesRepository.get(id);
    notFoundValidator(res, commandType);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postCommandType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const CommandType: CommandsTypes = await CommandsTypesRepository.post(body);
      res.send(CommandType);
=======

    const commandType: CommandsTypes = await CommandsTypesRepository.post(body);
    res.send(commandType);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateCommandType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const CommandType: CommandsTypes = await CommandsTypesRepository.update(id, body);
      res.send(CommandType);
=======

    const commandType: CommandsTypes = await CommandsTypesRepository.update(id, body);
    res.send(commandType);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteCommandType = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await CommandsTypesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======
    
    await execDelete(res, async () => {
      await CommandsTypesRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new CommandsTypesController();
