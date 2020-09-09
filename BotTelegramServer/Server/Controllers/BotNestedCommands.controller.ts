import BotNestedCommandsRepository from '../Entities/Repositories/BotNestedCommands.respository';
import BotNestedCommand from '../Entities/Models/BotNestedCommands.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotNestedCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
    const botNestedCommands: BotNestedCommand[] = await BotNestedCommandsRepository.getAll();
    res.send(botNestedCommands);
  };

  getCommandById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.get(id);
    res.send(botNestedCommand);
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

    await BotNestedCommandsRepository.delete(id);
    res.sendStatus(HttpStatus.OK);
  };
}

export default new BotNestedCommandController();
