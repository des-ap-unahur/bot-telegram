import BotUsers from "../Models/BotUsers.model";
import BotUsersInterface from "../../Interfaces/BotUsers.interface";
import GuaraniUsers from "../Models/GuaraniUsers.models";
import Paginate from "../../Utils/Paginate.utils";
import BotUsersWithPagination from "../../Interfaces/BotUsersWithPagination.interface";
import UserTypes from "../Models/UserTypes.model";
import { Op } from "sequelize";

class BotUsersRepository {
  getAllWithPagination = async (paginationData: any): Promise<BotUsersWithPagination> => {
    const total: number = await BotUsers.count();
    const botUsers: BotUsers[]  = await BotUsers.findAll({
      ...Paginate(paginationData),
      include: [UserTypes, GuaraniUsers]
    });
    return { total, botUsers };
  };

  getAll = async (): Promise<BotUsers[]> => {
    const botUsers: BotUsers[] = await BotUsers.findAll({include: [UserTypes, GuaraniUsers]});
    return botUsers;
  };

  getCount = async (): Promise<number> => {
    const count: number = await BotUsers.count();
    return count;
  }

  getCountForWeek = async (): Promise<number> => {
    const presentDate = new Date;
    const dateModified = presentDate.getDate() - 7;
    const pastDate = new Date;
    pastDate.setDate(dateModified);

    const presentDateString = presentDate.toJSON().toString();
    const pastDateString = pastDate.toJSON().toString();


    const count: number = await BotUsers.count({
      where: {
        createdAt:{
          [Op.between]: [pastDateString, presentDateString]
        }
      }
    });

    return count;
  }

  get = async (id: number): Promise<BotUsers> => {
    const botUser: BotUsers = await BotUsers.findByPk(id);
    return botUser;
  };

  getByTelegramIdWithGuaraniUser = async (
    telegram_id: number
  ): Promise<BotUsers> => {
    const botUser: BotUsers = await BotUsers.findOne({
      where: { tel_user_id: telegram_id },
      include: [GuaraniUsers],
    });

    return botUser;
  };

  post = async (data: BotUsersInterface): Promise<BotUsers> => {
    const botUser: BotUsers = await BotUsers.create(data);
    return botUser;
  };

  update = async (id: number, data: BotUsersInterface): Promise<BotUsers> => {
    const botUser: BotUsers = await BotUsers.findByPk(id);
    botUser.update(data);
    return botUser;
  };

  delete = async (id: number): Promise<void> => {
    const botUser: BotUsers = await BotUsers.findByPk(id);
    botUser.destroy();
  };
}

export default new BotUsersRepository();
