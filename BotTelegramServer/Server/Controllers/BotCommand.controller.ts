import BotCommandRepository from '../Entities/Repositories/BotCommand.repository';
import BotCommand from '../Entities/Models/BotCommands.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';
import { botController } from '../Bot/Controller/Bot.controller';


class BotCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
      const botCommands: BotCommand[] = await BotCommandRepository.getAll();
      res.send(botCommands);
  };

  getCommandById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      const botCommands: BotCommand = await BotCommandRepository.get(id);
      res.send(botCommands);
  };

  getCommandsTypes = async (req: any, res: any): Promise<void> => {
      const botCommandsTypes: BotCommand[] = await BotCommandRepository.getCommandsTypes();
      res.send(botCommandsTypes);
  };
  
  getCommandsTypesById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      const botCommandsTypes: BotCommand = await BotCommandRepository.getCommandsTypesById(id);
      res.send(botCommandsTypes);

  };

  postCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
      const botCommands: BotCommand = await BotCommandRepository.post(body)
      await botController.refreshCommands();
      res.send(botCommands);
  };

  updateCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
      const botCommands: BotCommand = await BotCommandRepository.update(id, body);
      res.send(botCommands);
  };

  deleteCommand = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      await BotCommandRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
  };

}

export default new BotCommandController();
