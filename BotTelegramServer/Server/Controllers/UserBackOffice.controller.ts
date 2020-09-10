import UserBackOfficeRepository from '../Entities/Repositories/UserBackOffice.repository';
import UserBackOffice from '../Entities/Models/UserBackOffice.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class UserBackOfficeController {
  getUsers = async (req: any, res: any): Promise<void> => {
    const Users: UserBackOffice[] = await UserBackOfficeRepository.getAll();
    res.send(Users);
  };

  getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const user: UserBackOffice = await UserBackOfficeRepository.get(id);
    notFoundValidator(res, user);
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

    await execDelete(res, async () => {
      await UserBackOfficeRepository.delete(id);
    })
  };
}

export default new UserBackOfficeController();
