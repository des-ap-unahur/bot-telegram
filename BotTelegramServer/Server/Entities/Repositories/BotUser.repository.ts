import BotUsers from "../Models/BotUsers.model";
import BotUsersInterface from "../../Interfaces/BotUsers.interface";
import GuaraniUsers from "../Models/GuaraniUsers.models";
import Paginate from "../../Utils/Paginate.utils";
import BotUsersWithPagination from "../../Interfaces/BotUsersWithPagination.interface";
class BotUsersRepository {
  getAllWithPagination = async (paginationData: any): Promise<BotUsersWithPagination> => {

    const { pageSize } = paginationData;
    const { count, rows: botUsers } = await BotUsers.findAndCountAll({
      ...Paginate(paginationData),
    });
    const total = Math.ceil(count / pageSize);
    return { total, botUsers };
  };

  getAll = async (): Promise<BotUsers[]> => {
    const botUsers: BotUsers[] = await BotUsers.findAll();
    return botUsers;
  };

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
