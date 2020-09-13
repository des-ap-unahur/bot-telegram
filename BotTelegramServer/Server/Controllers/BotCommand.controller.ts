import BotCommandRepository from '../Entities/Repositories/BotCommand.repository';
import BotCommand from '../Entities/Models/BotCommands.model';
import { botController } from '../Bot/Controller/Bot.controller';
import execDelete from '../Utils/ExecDelete.utils';
import notFoundValidator from '../Utils/NotFoundValidator.utils';


class BotCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const botCommands: BotCommand[] = await BotCommandRepository.getAll();
      res.send(botCommands);
=======
    const botCommands: BotCommand[] = await BotCommandRepository.getAll();
    res.send(botCommands);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getCommandById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const botCommands: BotCommand = await BotCommandRepository.get(id);
      res.send(botCommands);
  };

  getCommandsTypes = async (req: any, res: any): Promise<void> => {
      const botCommandsTypes: BotCommand[] = await BotCommandRepository.getCommandsTypes();
      res.send(botCommandsTypes);
=======

    const botCommands: BotCommand = await BotCommandRepository.get(id);
    notFoundValidator(res, botCommands);
  };

  getCommandsTypes = async (req: any, res: any): Promise<void> => {
    const botCommandsTypes: BotCommand[] = await BotCommandRepository.getCommandsTypes();
    res.send(botCommandsTypes);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
  
  getCommandsTypesById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const botCommandsTypes: BotCommand = await BotCommandRepository.getCommandsTypesById(id);
      res.send(botCommandsTypes);

=======

    const botCommandsTypes: BotCommand = await BotCommandRepository.getCommandsTypesById(id);
    notFoundValidator(res, botCommandsTypes);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const botCommands: BotCommand = await BotCommandRepository.post(body)
      await botController.refreshCommands();
      res.send(botCommands);
=======
    
    const botCommands: BotCommand = await BotCommandRepository.post(body)
    await botController.refreshCommands();
    res.send(botCommands);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const botCommands: BotCommand = await BotCommandRepository.update(id, body);
      res.send(botCommands);
=======

    const botCommands: BotCommand = await BotCommandRepository.update(id, body);
    res.send(botCommands);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteCommand = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await BotCommandRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await BotCommandRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

}

export default new BotCommandController();
