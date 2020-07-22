import UserTypesRepository from '../Repositories/UserTypes.repository';
import UserTypes from "../Models/UserTypes.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';

class UserTypesController {
  getUserTypes = async (req: any, res: any): Promise<void> => {
    try {
      const userTypes: UserTypes[] = await UserTypesRepository.getAll();
      res.send(userTypes);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getUserTypeById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      const userType: UserTypes = await UserTypesRepository.get(id);
      res.send(userType);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postUserType = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const userType: UserTypes = await UserTypesRepository.post(body);
      res.send(userType);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateUserType = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const userType: UserTypes = await UserTypesRepository.update(id, body);
      res.send(userType);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteUserType = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await UserTypesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new UserTypesController();