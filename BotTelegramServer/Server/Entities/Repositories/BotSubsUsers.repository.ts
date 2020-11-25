import BotSubsUsers from "../Models/BotSubsUsers.model";
import BotSubsUsersInterface from "../../Interfaces/BotSubsUsers.interface";
import paginate from "../../Utils/Paginate.utils";
import BotSubsUsersWithPagination from "../../Interfaces/BotSubsUsersWithPagination.interface"
import BotUsers from "../Models/BotUsers.model";
import UserTypes from "../Models/UserTypes.model";
 

 
class BotSubsUsersRepository {
  getAllWithPagination = async (paginationData: any): Promise<BotSubsUsersWithPagination> => {
    const total: number = await BotSubsUsers.count();
    const botSubsUsers: BotSubsUsers[] = await BotSubsUsers.findAll({
      include:[{model: BotUsers, include:[UserTypes]}],
      ...paginate(paginationData)
    })

    return { total, botSubsUsers};
      
  };

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