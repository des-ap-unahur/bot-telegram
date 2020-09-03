import UserBackOfficeRepository from '../Entities/Repositories/UserBackOffice.repository';
import UserBackOffice from '../Entities/Models/UserBackOffice.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class UserBackOfficeController {
  getUsers = async (req: any, res: any): Promise<void> => {
      const Users: UserBackOffice[] = await UserBackOfficeRepository.getAll();
      res.send(Users);
  };

  getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      const user: UserBackOffice = await UserBackOfficeRepository.get(id);
      res.send(user);
  };

  postUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
      const User: UserBackOffice = await UserBackOfficeRepository.post(body);
      res.send(User);
  };

  updateUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
      const User: UserBackOffice = await UserBackOfficeRepository.update(id, body);
      res.send(User);
  };

  deleteUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      await UserBackOfficeRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
  };
}

export default new UserBackOfficeController();
