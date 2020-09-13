import UserBackOfficeRepository from '../Entities/Repositories/UserBackOffice.repository';
import UserBackOffice from '../Entities/Models/UserBackOffice.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class UserBackOfficeController {
  getUsers = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const Users: UserBackOffice[] = await UserBackOfficeRepository.getAll();
      res.send(Users);
=======
    const Users: UserBackOffice[] = await UserBackOfficeRepository.getAll();
    res.send(Users);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const user: UserBackOffice = await UserBackOfficeRepository.get(id);
      res.send(user);
=======

    const user: UserBackOffice = await UserBackOfficeRepository.get(id);
    notFoundValidator(res, user);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const User: UserBackOffice = await UserBackOfficeRepository.post(body);
      res.send(User);
=======

    const User: UserBackOffice = await UserBackOfficeRepository.post(body);
    res.send(User);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const User: UserBackOffice = await UserBackOfficeRepository.update(id, body);
      res.send(User);
=======

    const User: UserBackOffice = await UserBackOfficeRepository.update(id, body);
    res.send(User);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await UserBackOfficeRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await UserBackOfficeRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new UserBackOfficeController();
