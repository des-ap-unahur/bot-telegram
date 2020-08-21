import BotUserRepository from '../Entities/Repositories/BotUser.repository';
import BotUser from '../Entities/Models/BotUsers.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotUserController {
  getUsers = async (req: any, res: any): Promise<void> => {
    try {
      const botUsers: BotUser[] = await BotUserRepository.getAll();
      res.send(botUsers);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      const botUser: BotUser = await BotUserRepository.get(id);
      res.send(botUser);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const botUser: BotUser = await BotUserRepository.post(body);
      res.send(botUser);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const botUser: BotUser = await BotUserRepository.update(id, body);
      res.send(botUser);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await BotUserRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new BotUserController();
