import UserTypesRepository from '../Entities/Repositories/UserTypes.repository';
import UserTypes from "../Entities/Models/UserTypes.model";
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class UserTypesController {
  getUserTypes = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const userTypes: UserTypes[] = await UserTypesRepository.getAll();
      res.send(userTypes);
=======
    const userTypes: UserTypes[] = await UserTypesRepository.getAll();
    res.send(userTypes);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getUserTypeById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const userType: UserTypes = await UserTypesRepository.get(id);
      res.send(userType);
=======

    const userType: UserTypes = await UserTypesRepository.get(id);
    notFoundValidator(res, userType);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postUserType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const userType: UserTypes = await UserTypesRepository.post(body);
      res.send(userType);

=======

    const userType: UserTypes = await UserTypesRepository.post(body);
    res.send(userType);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateUserType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const userType: UserTypes = await UserTypesRepository.update(id, body);
      res.send(userType);
=======

    const userType: UserTypes = await UserTypesRepository.update(id, body);
    res.send(userType);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteUserType = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await UserTypesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await UserTypesRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new UserTypesController();