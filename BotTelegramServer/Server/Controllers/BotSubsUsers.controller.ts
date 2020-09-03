import BotsubsUsersRepository from '../Entities/Repositories/BotSubsUsers.repository';
import BotSubsUsers from '../Entities/Models/BotSubsUsers.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotSubsUsersController {
  getBotSubsUsers = async (req: any, res: any): Promise<void> => {
      const botSubsUsers: BotSubsUsers[] = await BotsubsUsersRepository.getAll();
      res.send(botSubsUsers);
  };

  getBotSubsUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.get(id);
      res.send(botSubsUser);
  };

  postBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.post(body);
      res.send(botSubsUser);
  };

  updateBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.update(id, body);
      res.send(botSubsUser);
  };

  deleteBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      await BotsubsUsersRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
  };
}

export default new BotSubsUsersController();