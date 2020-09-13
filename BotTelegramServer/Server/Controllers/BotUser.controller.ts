import BotUserRepository from '../Entities/Repositories/BotUser.repository';
import BotUser from '../Entities/Models/BotUsers.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotUserController {
  getUsers = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const botUsers: BotUser[] = await BotUserRepository.getAll();
      res.send(botUsers);
=======
    const botUsers: BotUser[] = await BotUserRepository.getAll();
    res.send(botUsers);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const botUser: BotUser = await BotUserRepository.get(id);
      res.send(botUser);
=======
    
    const botUser: BotUser = await BotUserRepository.get(id);
    notFoundValidator(res, botUser);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const botUser: BotUser = await BotUserRepository.post(body);
      res.send(botUser);
=======

    const botUser: BotUser = await BotUserRepository.post(body);
    res.send(botUser);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const botUser: BotUser = await BotUserRepository.update(id, body);
      res.send(botUser);
=======

    const botUser: BotUser = await BotUserRepository.update(id, body);
    res.send(botUser);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await BotUserRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await BotUserRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new BotUserController();
