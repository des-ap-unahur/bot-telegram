import UserTypesRepository from '../Entities/Repositories/UserTypes.repository';
import UserTypes from "../Entities/Models/UserTypes.model";
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class UserTypesController {
  getUserTypes = async (req: any, res: any): Promise<void> => {
    const userTypes: UserTypes[] = await UserTypesRepository.getAll();
    res.send(userTypes);
  };

  getUserTypeById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const userType: UserTypes = await UserTypesRepository.get(id);
    notFoundValidator(res, userType);
  };

  postUserType = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    const userType: UserTypes = await UserTypesRepository.post(body);
    res.send(userType);
  };

  updateUserType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const userType: UserTypes = await UserTypesRepository.update(id, body);
    res.send(userType);
  };

  deleteUserType = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    await execDelete(res, async () => {
      await UserTypesRepository.delete(id);
    })
  };
}

export default new UserTypesController();