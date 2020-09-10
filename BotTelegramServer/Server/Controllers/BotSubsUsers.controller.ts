import BotsubsUsersRepository from '../Entities/Repositories/BotSubsUsers.repository';
import BotSubsUsers from '../Entities/Models/BotSubsUsers.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotSubsUsersController {
  getBotSubsUsers = async (req: any, res: any): Promise<void> => {
    const botSubsUsers: BotSubsUsers[] = await BotsubsUsersRepository.getAll();
    res.send(botSubsUsers);
  };

  getBotSubsUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const botSubsUser: BotSubsUsers = await BotsubsUsersRepository.get(id);
    notFoundValidator(res, botSubsUser);
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

    await execDelete(res, async () => {
      await BotsubsUsersRepository.delete(id);
    })
  };
}

export default new BotSubsUsersController();