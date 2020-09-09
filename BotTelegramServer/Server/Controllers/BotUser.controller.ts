import BotUserRepository from '../Entities/Repositories/BotUser.repository';
import BotUser from '../Entities/Models/BotUsers.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotUserController {
  getUsers = async (req: any, res: any): Promise<void> => {
    const botUsers: BotUser[] = await BotUserRepository.getAll();
    res.send(botUsers);
  };

  getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    const botUser: BotUser = await BotUserRepository.get(id);
    res.send(botUser);
  };

  postUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    const botUser: BotUser = await BotUserRepository.post(body);
    res.send(botUser);
  };

  updateUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const botUser: BotUser = await BotUserRepository.update(id, body);
    res.send(botUser);
  };

  deleteUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    await BotUserRepository.delete(id);
    res.sendStatus(HttpStatus.OK);
  };
}

export default new BotUserController();
