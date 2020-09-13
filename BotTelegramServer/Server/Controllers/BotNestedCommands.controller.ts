import BotNestedCommandsRepository from '../Entities/Repositories/BotNestedCommands.respository';
import BotNestedCommand from '../Entities/Models/BotNestedCommands.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotNestedCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
    const botNestedCommands: BotNestedCommand[] = await BotNestedCommandsRepository.getAll();
    res.send(botNestedCommands);
  };

  getCommandById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.get(id);
    notFoundValidator(res, botNestedCommand);
  };

  postCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.post(body);
    res.send(botNestedCommand);
  };

  updateCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.update(id, body);
    res.send(botNestedCommand);
  };

  deleteCommand = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    await execDelete(res, async () => {
      await BotNestedCommandsRepository.delete(id);
    })
  };
}

export default new BotNestedCommandController();
