import GuaraniUsersRepository from '../Entities/Repositories/GuaraniUsers.repository';
import GuaraniUsers from '../Entities/Models/GuaraniUsers.models';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class GuaraniUsersController {
  getGuaraniUsers = async (req: any, res: any): Promise<void> => {
    try {
      const GuaraniUsers: GuaraniUsers[] = await GuaraniUsersRepository.getAll();
      res.send(GuaraniUsers);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getGuaraniUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.get(id);
      res.send(GuaraniUsers);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.post(body);
      res.send(GuaraniUsers);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.update(id, body);
      res.send(GuaraniUsers);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await GuaraniUsersRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new GuaraniUsersController();