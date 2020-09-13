import BotNestedCommandsRepository from '../Entities/Repositories/BotNestedCommands.respository';
import BotNestedCommand from '../Entities/Models/BotNestedCommands.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotNestedCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const botNestedCommands: BotNestedCommand[] = await BotNestedCommandsRepository.getAll();
      res.send(botNestedCommands);
=======
    const botNestedCommands: BotNestedCommand[] = await BotNestedCommandsRepository.getAll();
    res.send(botNestedCommands);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getCommandById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.get(id);
      res.send(botNestedCommand);

=======
    
    const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.get(id);
    notFoundValidator(res, botNestedCommand);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.post(body);
      res.send(botNestedCommand);
=======

    const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.post(body);
    res.send(botNestedCommand);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.update(id, body);
      res.send(botNestedCommand);
=======

    const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.update(id, body);
    res.send(botNestedCommand);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteCommand = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await BotNestedCommandsRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await BotNestedCommandsRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new BotNestedCommandController();
