import BotUserRepository from "../Entities/Repositories/BotUser.repository";
import BotUser from "../Entities/Models/BotUsers.model";
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";
import BotUserWithPagination from "../Interfaces/BotUsersWithPagination.interface";
import { HttpStatus } from "../Config/Server/HTTPStatus.config";

class BotUserController {
  getUsers = async (req: any, res: any): Promise<void> => {
    const paginationData = req.query;
    if (paginationData.pageSize) {
      const botUsers: BotUserWithPagination = await BotUserRepository.getAllWithPagination(
        paginationData
      );
      res.send(botUsers);
    } else {
      const botUsers: BotUser[] = await BotUserRepository.getAll();
      res.send(botUsers);
    }
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

  getCount = async (req: any, res: any): Promise<void> => {
    const count: number = await BotUserRepository.getCount();
    res.send({count}).status(HttpStatus.OK);
  };

  getCountForWeek = async (req: any, res: any): Promise<void> => {
    const count: number = await BotUserRepository.getCountForWeek();
    res.send({count}).status(HttpStatus.OK);
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
      res.send(await BotUserRepository.delete(id));
    });
  };
}

export default new BotUserController();
