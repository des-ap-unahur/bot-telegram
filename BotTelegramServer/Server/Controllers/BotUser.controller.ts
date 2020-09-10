import BotUserRepository from '../Entities/Repositories/BotUser.repository';
import BotUser from '../Entities/Models/BotUsers.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotUserController {
  getUsers = async (req: any, res: any): Promise<void> => {
    const botUsers: BotUser[] = await BotUserRepository.getAll();
    res.send(botUsers);
  };

  getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    const botUser: BotUser = await BotUserRepository.get(id);
    notFoundValidator(res, botUser);
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

    await execDelete(res, async () => {
      await BotUserRepository.delete(id);
    })
  };
}

export default new BotUserController();
