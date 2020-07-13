import BotNestedCommandsRepository from '../Repositories/BotNestedCommands.respository';
import BotNestedCommand from '../Models/BotNestedCommands.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';

class BotNestedCommandController {
  getCommands = async (req: any, res: any): Promise<void> => {
    try {
      const botNestedCommands: BotNestedCommand[] = await BotNestedCommandsRepository.getAll();
      res.send(botNestedCommands);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getCommandById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.get(id);
      res.send(botNestedCommand);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.post(body);
      res.send(botNestedCommand);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateCommand = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const botNestedCommand: BotNestedCommand = await BotNestedCommandsRepository.update(id, body);
      res.send(botNestedCommand);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteCommand = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await BotNestedCommandsRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new BotNestedCommandController();
