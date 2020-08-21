import CommandsTypesRepository from '../Entities/Repositories/CommandsTypes.repository';
import CommandsTypes from '../Entities/Models/CommandsTypes.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class CommandsTypesController {
  getCommandsTypes = async (req: any, res: any): Promise<void> => {
    try {
      const CommandsTypes: CommandsTypes[] = await CommandsTypesRepository.getAll();
      res.send(CommandsTypes);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getCommandTypeById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      const CommandType: CommandsTypes = await CommandsTypesRepository.get(id);
      res.send(CommandType);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postCommandType = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const CommandType: CommandsTypes = await CommandsTypesRepository.post(body);
      res.send(CommandType);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateCommandType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const CommandType: CommandsTypes = await CommandsTypesRepository.update(id, body);
      res.send(CommandType);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteCommandType = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      await CommandsTypesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new CommandsTypesController();
