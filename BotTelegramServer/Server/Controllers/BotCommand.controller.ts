import BotCommandRepository from '../Repositories/BotCommand.repository';
import BotCommand from '../Models/BotCommands.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';

class BotCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
    try {
      const botCommands: BotCommand[] = await BotCommandRepository.getAll();
      res.send(botCommands);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new BotCommandController();
