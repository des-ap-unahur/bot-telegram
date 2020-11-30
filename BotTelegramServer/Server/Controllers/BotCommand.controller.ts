import BotCommandRepository from '../Entities/Repositories/BotCommand.repository';
import BotCommand from '../Entities/Models/BotCommands.model';
import { botController } from '../Bot/Controller/Bot.controller';
import execDelete from '../Utils/ExecDelete.utils';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
    const botCommands: BotCommand[] = await BotCommandRepository.getAll();
    res.send(botCommands);
  };

  getCommandsWithAllRelations = async (req: any, res: any): Promise<void> => {
    const paginationData = req.query;
    if(paginationData.page){
      const botCommands: BotCommand[] = await BotCommandRepository.getCommandWithAllRelationPagination(paginationData);
      res.send(botCommands);
    } else {
      const botCommands: BotCommand[] = await BotCommandRepository.getCommandWithAllRelation();
      res.send(botCommands);
    }
  };

  getCommandById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const botCommands: BotCommand = await BotCommandRepository.get(id);
    notFoundValidator(res, botCommands);
  };

  getCommandsTypes = async (req: any, res: any): Promise<void> => {
    const botCommandsTypes: BotCommand[] = await BotCommandRepository.getCommandsTypes();
    res.send(botCommandsTypes);
  };
  
  getCommandsTypesById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const botCommandsTypes: BotCommand = await BotCommandRepository.getCommandsTypesById(id);
    notFoundValidator(res, botCommandsTypes);
  };

  getCount = async (req: any, res: any): Promise<void> => {
    const count: number = await BotCommandRepository.getCount();
    res.send({count}).status(HttpStatus.OK);
  };

  refreshCommand = async (req: any, res: any): Promise<void> => {
    await botController.refreshCommands();
    res.sendStatus(HttpStatus.OK);
  }

  postCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    
    const botCommands: BotCommand = await BotCommandRepository.post(body)
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

    await execDelete(res, async () => {
     res.send(await BotCommandRepository.delete(id));
    })
  };

}

export default new BotCommandController();
