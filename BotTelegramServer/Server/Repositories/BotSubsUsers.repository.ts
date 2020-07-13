import BotSubsUsers from "../Models/BotSubsUsers.model";
import BotSubsUsersInterface from "../Interfaces/BotSubsUsers.interface";

class BotSubsUsersRepository {
  getAll = async (): Promise<BotSubsUsers[]> => {
    const botSubsUsers: BotSubsUsers[] = await BotSubsUsers.findAll();
    return botSubsUsers;
  };
  
  get = async (id: number): Promise<BotSubsUsers> => {
    const botSubsUser: BotSubsUsers = await BotSubsUsers.findByPk(id);
    return botSubsUser;
  };
  
  post = async (data: BotSubsUsersInterface): Promise<BotSubsUsers> => {
    const botSubsUser: BotSubsUsers = await BotSubsUsers.create(data);
    return botSubsUser;
  }

  update = async (id: number, data: BotSubsUsersInterface): Promise<BotSubsUsers>=>{
    const botSubsUser: BotSubsUsers = await BotSubsUsers.findByPk(id);
    botSubsUser.update(data);
    return botSubsUser
  }

  delete = async (id: number): Promise<void> =>{
    const botSubsUser: BotSubsUsers = await BotSubsUsers.findByPk(id);
    botSubsUser.destroy();
  }
}

export default new BotSubsUsersRepository();