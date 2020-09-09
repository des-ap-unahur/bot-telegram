import UserTypesRepository from '../Entities/Repositories/UserTypes.repository';
import UserTypes from "../Entities/Models/UserTypes.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class UserTypesController {
  getUserTypes = async (req: any, res: any): Promise<void> => {
    const userTypes: UserTypes[] = await UserTypesRepository.getAll();
    res.send(userTypes);
  };

  getUserTypeById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const userType: UserTypes = await UserTypesRepository.get(id);
    res.send(userType);
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

    await UserTypesRepository.delete(id);
    res.sendStatus(HttpStatus.OK);
  };
}

export default new UserTypesController();