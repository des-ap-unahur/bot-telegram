import BotsubsUsersRepository from '../Entities/Repositories/BotSubsUsers.repository';
import BotSubsUsers from '../Entities/Models/BotSubsUsers.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotSubsUsersController {
  getBotSubsUsers = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const botSubsUsers: BotSubsUsers[] = await BotsubsUsersRepository.getAll();
      res.send(botSubsUsers);
=======
    const botSubsUsers: BotSubsUsers[] = await BotsubsUsersRepository.getAll();
    res.send(botSubsUsers);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getBotSubsUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.get(id);
      res.send(botSubsUser);
=======

    const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.get(id);
    notFoundValidator(res, botSubsUser);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.post(body);
      res.send(botSubsUser);
=======
    
    const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.post(body);
    res.send(botSubsUser);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.update(id, body);
      res.send(botSubsUser);
=======

    const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.update(id, body);
    res.send(botSubsUser);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteBotSubsUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await BotsubsUsersRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await BotsubsUsersRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new BotSubsUsersController();