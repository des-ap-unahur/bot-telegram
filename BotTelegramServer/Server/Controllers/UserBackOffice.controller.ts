import UserBackOfficeRepository from '../Entities/Repositories/UserBackOffice.repository';
import UserBackOffice from '../Entities/Models/UserBackOffice.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class UserBackOfficeController {
  getUsers = async (req: any, res: any): Promise<void> => {
    try {
      const Users: UserBackOffice[] = await UserBackOfficeRepository.getAll();
      res.send(Users);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      const user: UserBackOffice = await UserBackOfficeRepository.get(id);
      res.send(user);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const User: UserBackOffice = await UserBackOfficeRepository.post(body);
      res.send(User);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const User: UserBackOffice = await UserBackOfficeRepository.update(id, body);
      res.send(User);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      await UserBackOfficeRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new UserBackOfficeController();
