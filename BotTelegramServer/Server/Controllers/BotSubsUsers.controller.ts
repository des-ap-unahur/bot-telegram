import BotsubsUsersRepository from '../Entities/Repositories/BotSubsUsers.repository';
import BotSubsUsers from '../Entities/Models/BotSubsUsers.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotSubsUsersController {
  getBotSubsUsers = async (req: any, res: any): Promise<void> => {
    try {
      const botSubsUsers: BotSubsUsers[] = await BotsubsUsersRepository.getAll();
      res.send(botSubsUsers);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getBotSubsUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.get(id);
      res.send(botSubsUser);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    
    try {
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.post(body);
      res.send(botSubsUser);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.update(id, body);
      res.send(botSubsUser);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await BotsubsUsersRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new BotSubsUsersController();